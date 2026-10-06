# MediRec PREIS Integration: Gateway HL7 para Vacunaciones

**Proyecto:** Integración Gov-Tech HL7 con Sistema PREIS de Puerto Rico
**Cliente:** MediRec, Inc.
**Período:** 2023
**Resultado:** API HL7 v2.5.1 productiva, C# ↔ PHP/Laravel ↔ PREIS, 100% compliance

---

## Contexto

### El Problema Real

El módulo de vacunaciones de MediRec (programa C#) necesitaba integrarse con PREIS (Sistema de Registro de Inmunizaciones del Gobierno de Puerto Rico). PREIS solo habla HL7 v2.5.1 — un protocolo médico de hace 25 años, complejo, con especificaciones muy específicas para Puerto Rico.

**Desafíos:**
- MediRec (C#) no habla HL7 nativamente
- PREIS requiere formato HL7 v2.5.1 Local PR (HL7 base + variaciones específicas de PR)
- Documentación del gobierno fragmentada y con requisitos muy específicos (campos PID-10, RXA-16 requeridos, códigos de vacuna validados, formato de apellidos doble requerido)
- Cambios en requirements: La versión 2.2 del HL7 Local Guide (Abril 2022) actualizó múltiples campos y códigos

### Por Qué Me Llamaron

MediRec necesitaba:
1. Un traductor (gateway) que convirtiera datos de vacunas C# → HL7 v2.5.1
2. Validación estricta según spec PREIS
3. Integración similar a Surescripts (dev → staging → prod)
4. Documentación de los cambios de versión HL7

---

## Solución: API Gateway HL7 con PHP/Laravel

### Arquitectura

```
Programa de Vacunas C# (MediRec Desktop)
    ↓
API REST (Laravel)
    ├─ Recibe: { paciente, vacunas, clínica, lotes }
    ├─ Validación de negocio
    ├─ Mapeo: Códigos MediRec → Códigos PREIS (RXA-16, tabla 0292)
    ├─ Transformación: Datos → HL7 v2.5.1 message
    ├─ Validación: Formato HL7, campos requeridos, tipos
    └─ Envío: mTLS certificado
    ↓
PREIS HL7 Server (Gobierno de Puerto Rico)
    ├─ Procesa: VXU message (Vaccination Update)
    └─ Responde: ACK (éxito) o NACK (error)
    ↓
C# recibe respuesta
    ├─ ACK: Vacunación registrada en PREIS
    └─ NACK: Error (mostrar en UI de médico)
```

### Componentes Implementados

#### 1. Validación HL7 Estricta (PR Local Specific)

Según HL7 v2.5.1 Local Implementation Guide v2.2 (April 2022), PREIS requiere:

**Segmento MSH (Header):**
- MSH-3 (Sending App): "MediRec"
- MSH-15 (Encoding): "ASCII"
- MSH-16 (Character Set): "LATIN1"

**Segmento PID (Patient):**
- PID-5 (Nombre paciente): **REQUERIDO** — Apellido doble separado (Firstname^LastName1^LastName2)
- PID-10 (Race): **REQUERIDO** (tabla específica PR)
- PID-22 (Ethnic Group): **REQUERIDO** (tabla específica PR)
- PID-24 (Nationality): RECOMENDADO para PREIS

**Segmento RXA (Vaccination):**
- RXA-16 (Vaccine Code): **REQUERIDO** — Mapeo a tabla 0292 (Códigos para Vacunas Administradas). Incluye códigos 11, 12, 13, 14, 18, 19, 23, 24, 25, etc. específicos de PR.
- RXA-17 (Body Site): **REQUERIDO**
- RXA-18 (Route of Administration): **REQUERIDO**

#### 2. Mapeo de Códigos (Tabla 0292 + Fabricantes)

MediRec usa su propio sistema de códigos de vacunas. Necesité mapear a códigos PREIS:

```php
// Mapeo: MediRec Code → PREIS Code (Tabla 0292)
$vaccineMap = [
    'COVID19_PFIZER' => '220',  // COVID-19 Pfizer
    'COVID19_MODERNA' => '221', // COVID-19 Moderna
    'FLU_SEASONAL' => '88',      // Influenza
    'HEPATITIS_B' => '8',        // Hep B
    // ... más de 100 códigos
];

// Tabla 0227: Fabricantes (Manufacturer)
$manufacturerMap = [
    'PFIZER' => 'PFR',
    'MODERNA' => 'MOD',
    'JANSSEN' => 'JNJ',
    // ... validado contra tablas PREIS
];
```

#### 3. Transformación VXU → ACK/NACK

**Flujo:** C# envía JSON → PHP lo convierte a HL7 v2.5.1 → Envía a PREIS mTLS → PREIS responde ACK/NACK → Devuelve respuesta a C#

```
INPUT (from C# desktop app):
{
  "patient_id": "123456",
  "first_name": "Juan",
  "last_name1": "Garcia",
  "last_name2": "Lopez",
  "dob": "1990-01-15",
  "race": "W",
  "ethnicity": "H",
  "vaccine_code": "220",
  "vaccine_date": "2023-01-10",
  "lot_number": "ABC123XYZ",
  "route": "IM",
  "site": "LA"
}

↓ Validación de campos requeridos
↓ Mapeo de códigos a tablas PREIS
↓ Transformación a HL7 v2.5.1 message

OUTPUT (HL7 VXU message):
MSH|^~\&|MediRec|CLINIC001|PREIS|GOV|20230110120000||VXU^V04.DEF|MSG001|P|2.5.1|||USA|ASCII
PID|1||123456^^^PREIS||Garcia^Lopez^Juan||19900115|M|||...
RXA|1|0|20230110|20230110|220^COVID-19 Pfizer^CVX||LA^Left Arm^HL70163|...|ABC123XYZ|||||001^...
```

#### 4. Integración multi-ambiente (Dev → Staging → Prod)

**Dev:** Sandbox PREIS (endpoint de prueba del gobierno)
- Validación de mensaje sin commit a DB
- Errores detallados para debugging

**Staging:** Ambiente de prueba real
- Conecta a PREIS staging
- Vacunaciones de prueba registradas pero aisladas

**Production:** Ambiente vivo
- mTLS certificate renovado (cada 1-3 años)
- Monitoreo 24/7
- Rollback plan en caso de fallo masivo

#### 5. Manejo de Errores PREIS

PREIS responde con ACK/NACK + código de error (Tabla 0533 - Application Error Code):

```
ACK: MSH|^~\&|PREIS|GOV|MediRec|CLINIC001|...|ACK
     MSA|AA|MSG001| [éxito — AA = "Application Accept"]

NACK: MSH|^~\&|PREIS|GOV|MediRec|CLINIC001|...|ACK
      MSA|AE|MSG001|RXA-16 Invalid Code [error]
      ERR|||RXA^1^16|207^...| [código específico error]
```

Implementé retry automático solo para errores transitorios (no para errores de datos).

---

## Decisiones Técnicas Clave

### ¿Por qué PHP/Laravel para gateway HL7?

**Opciones consideradas:**
1. Agregar HL7 directamente en C# → Aumenta complejidad en desktop, actualizaciones difíciles
2. Gateway separado (PHP/Laravel) → Desacoplado, fácil de actualizar, centralizado

**Elegí opción 2:**
- **Actualización:** Si PREIS cambia spec (como la v2.2 en April 2022), actualizo solo el gateway
- **Testing:** Valido HL7 sin tocar code C#
- **Mantenimiento:** Team backend puede debuggear sin cliente de desktop
- **Escalabilidad:** Soporta múltiples clinicas/clientes sin duplicar lógica HL7

### ¿HL7 v2.5.1 en lugar de FHIR moderno?

PREIS del Gobierno de Puerto Rico **requiere HL7 v2.5.1**. No hay alternativa.

- HL7 v2.5.1: Estándar médico legacy (1990s), complejo, pero **mandatorio para gobierno**
- FHIR: Moderno, pero gobierno PR usa legacy systems

**Trade-off aceptado:** Complejidad de HL7 a cambio de compliance regulatorio.

### ¿Validación en 3 niveles?

```
Level 1: App C# → API Gateway
  ├─ ¿Paciente existe?
  ├─ ¿Vacuna es válida?
  ├─ ¿Fecha dentro de rango?

Level 2: API Gateway (PHP/Laravel)
  ├─ ¿HL7 message valido?
  ├─ ¿Todos los campos requeridos?
  ├─ ¿Códigos mapean a tabla PREIS?
  ├─ ¿Apellido está en formato doble?

Level 3: PREIS Server
  ├─ ¿Paciente existe en su DB?
  ├─ ¿Vacuna es legal?
  ├─ ¿Lote es válido?
  ├─ ¿No hay duplicados?
```

**Flujo de error:**
- Si falla en Level 1 → C# lo rechaza localmente
- Si falla en Level 2 → Gateway retorna error + detalles a C#
- Si falla en Level 3 → PREIS retorna NACK con código específico, gateway lo pasa a C#

No reintentar si el error es de datos (ej: RXA-16 inválido). Solo reintentar si es error de conectividad (timeout, cert expirando).

---

## Resultados

### Integración Exitosa

- **Dev:** Validación contra sandbox PREIS
- **Staging:** Certificado staging, vacunaciones de prueba registradas
- **Production:** Certificado productivo, 100+ vacunaciones enviadas mensualmente

### Métricas

| Métrica | Resultado |
|---------|-----------|
| Success Rate | 99.2% (errores = rechazos de datos, no de gateway) |
| Latencia | <200ms (respuesta de PREIS) |
| Uptime | 100% (una vez estable en prod) |
| Mensajes procesados | 1,200+ VXU messages desde launch |
| Errores manejados | 10 (todos por datos inválidos, manejados) |

### Beneficios Realizados

1. **C# desktop actualizado:** Nueva versión del programa de vacunas con integración PREIS
2. **Automatización completa:** Médico registra vacuna en C# → va directamente a PREIS (sin pasos manuales)
3. **Compliance regulatorio:** HL7 v2.5.1 Local PR v2.2 implementado exacto
4. **Escalabilidad:** Agregar nuevas clínicas = 0 cambios en gateway
5. **Mantenibilidad:** Si PREIS actualiza spec, actualizo solo PHP/Laravel (C# sin cambios)

---

## Stack Técnico

- **Backend Gateway:** PHP 8.1, Laravel 10
- **Client:** C# (MediRec desktop app)
- **Security:** mTLS certificates (TLS 1.2+)
- **Protocol:** HL7 v2.5.1 (vía HTTPS)
- **Database:** MySQL (logs de VXU messages)
- **Testing:** PHPUnit + Sandbox PREIS

---

## Documentación Deliverables

1. **HL7 v2.5.1 Local PR Mapping:** Cómo MediRec codes mapean a códigos PREIS (Tabla 0292, 0227, etc)
2. **Certificado CSR Template:** Genera certificados mTLS para renovación futura
3. **Test Cases:** 50+ test cases para validar cambios en spec PREIS
4. **Error Code Reference:** Tabla de NACKs de PREIS y qué significan
5. **Runbook operativo:** Cómo renovar certificados, debuggear errores, escalar a nuevo gobierno

---

## Lecciones Aprendidas

1. **HL7 es real:** No es simple. Requiere documentación exacta, validación estricta, testing riguroso
2. **Especificaciones locales:** Puerto Rico tiene sus propias tablas de códigos (Tabla 0292 local 62 códigos + nuevos añadidos en v2.2)
3. **Certificados son operacional:** Cada renovación = coordinación de CSR, firma del gobierno, instalación en prod
4. **Decoupling:** Tener gateway separado del C# fue clave para poder iterar sin afectar cliente desktop

---

## Mantenimiento Futuro

**Certificados:** Renovar cada 1-3 años (seguir proceso CSR → gobierno → install)
**Cambios de spec:** PREIS actualiza HL7 Guide ocasionalmente (v2.1 2021, v2.2 2022). Monitorear cambios, validar contra sandbox, deploy en staging → prod
**Nuevos codigos:** Si el gobierno agrega vacunas o fabricantes, actualizar tabla de mapeo

