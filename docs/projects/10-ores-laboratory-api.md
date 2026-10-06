# ORES API: Sistema Integrado de Órdenes de Laboratorio

**Proyecto:** API REST + Integración C# para gestión de órdenes médicas doctor ↔ laboratorios  
**Cliente:** MediRec, Inc  
**Período:** 2022  
**Componentes:** Laravel 10 API + C# desktop integration + Laboratorios externos  
**Resultado:** Sistema de procesamiento multi-cliente de órdenes médicas, 40K+ órdenes/mes en producción

---

## Contexto

### El Problema Real

Antes de 2022, MediRec operaba desconectado de los laboratorios externos:
- **Doctores:** Creaban órdenes en abcEHR (sistema desktop) pero no había forma de enviarlas automáticamente a laboratorios
- **Laboratorios externos:** Recibían órdenes de forma manual (email, fax, teléfono) sin estructura
- **Resultados:** Laboratorios devolvían resultados sin conectividad con los doctores. Los médicos esperaban llamadas o emails

**Flujo manual (ineficiente):**
```
Doctor en MediRec
    ↓ (crea orden en desktop, imprime o envía por correo)
Laboratorio externo
    ↓ (procesa sin confirmación, procesa muestras)
Resultados listos
    ↓ (llama al doctor o envía email)
Doctor en MediRec
    ↓ (debe ingresar resultados manualmente en sistema)
Paciente (espera días)
```

**Impacto:**
- 2-5 días de retraso en entrega de resultados
- Riesgo de perder órdenes (sin trazabilidad)
- Ingreso manual de resultados = errores de transcripción
- Cero integración con laboratorios externos

### Por Qué Me Llamaron

MediRec necesitaba:
1. **API centralizada** que conectara doctores con laboratorios externos
2. **Integración C#** para que doctores envíen órdenes directamente desde desktop
3. **Manejo de archivos complejos** (HL7 v2 estándar, PDFs de resultados)
4. **Arquitectura multi-cliente** donde diferentes laboratorios compartieran la misma API
5. **Trazabilidad completa** de órdenes desde creación hasta resultados
6. **Sincronización bidireccional** doctor → lab → doctor

---

## Solución: ORES API — Plataforma Integrada de Órdenes

### Arquitectura General

```
┌─────────────────────────────────────────────────────────────────┐
│                        ORES API (Laravel)                       │
│  ├─ Autenticación (JWT Labs, API Keys Doctors)                │
│  ├─ Gestión de Órdenes (CRUD, búsqueda, estado)               │
│  ├─ Manejo de Archivos (HL7 parsing, PDF generation)          │
│  ├─ Enrutamiento Inteligente (qué orden → cuál lab)           │
│  └─ Logging & Auditoría (trazabilidad completa)               │
└────┬──────────────────────┬──────────────────────┬─────────────┘
     │                      │                      │
     ↓                      ↓                      ↓
┌──────────────┐  ┌──────────────┐      ┌──────────────┐
│ Doctors (C#) │  │  Laboratorios │      │   Externos   │
│   Desktop    │  │   (API Keys)  │      │   (HL7/REST) │
│  Integración │  │  Integración  │      │              │
└──────────────┘  └──────────────┘      └──────────────┘
```

### Dos Clientes, Una API

#### 1. **Doctores** (Integración C#)
- Envían órdenes desde abcEHR desktop
- Autenticación: API key por clínica
- Endpoints: crear orden, consultar pendientes, descargar resultados (HL7/PDF)
- `/api/eLabs/orders` - crear
- `/api/eLabs/orders/pending` - mis órdenes pendientes
- `/api/eLabs/orders/{id}/downloadResultHL7` - resultado estándar HL7
- `/api/eLabs/orders/{id}/downloadResultPDF` - resultado imprimible

#### 2. **Laboratorios** (Integración HTTP/REST)
- Reciben órdenes automáticamente vía API ORES
- Autenticación: JWT (2h expiration)
- Endpoints: consultar pendientes, cargar resultados (parciales/finales)
- `/labs/orders/pending` - qué órdenes me esperan
- `/labs/orders/{id}` - descargar orden completa (HL7)
- `/labs/orders/uploadPartialResult` - resultados parciales
- `/labs/orders/uploadResult` - resultado final

### Flujo Operativo

```
Step 1: Doctor crea orden en abcEHR
        ├─ Selecciona laboratorio destino
        ├─ Ingresa datos del paciente
        ├─ Selecciona tests a realizar
        └─ Presiona "Enviar"

Step 2: Integración C# serializa orden
        ├─ Valida datos obligatorios
        ├─ Transforma a formato ORES
        ├─ Calcula hash (checksum de integridad)
        └─ Envía POST /api/eLabs/orders

Step 3: ORES API recibe orden
        ├─ Autentica doctor (API key)
        ├─ Valida estructura y campos
        ├─ Genera OrderResultId único
        ├─ Determina laboratorio destino
        ├─ Almacena en MySQL (tblOrderResult)
        ├─ Genera HL7 message (estándar lab)
        └─ Retorna confirmación a doctor

Step 4: Laboratorio externo consulta ORES
        ├─ Ejecuta GET /labs/orders/pending (con JWT)
        ├─ ORES retorna lista de órdenes asignadas
        ├─ Lab descarga detalles con GET /labs/orders/{id}
        └─ Obtiene HL7 message + datos paciente

Step 5: Lab procesa muestra y obtiene resultados
        ├─ Carga resultado parcial via POST /uploadPartialResult
        ├─ ORES almacena en tblOrderResult.ResultFileContent
        ├─ Notifica a doctor (email/push)
        └─ Lab carga resultado final via POST /uploadResult

Step 6: Doctor descarga resultados
        ├─ Abre abcEHR, busca orden
        ├─ ORES verifica estado de la orden
        ├─ Si resultado disponible, genera PDF o HL7
        ├─ Descarga vía GET /orders/{id}/downloadResultPDF
        └─ Ingresa en historia clínica del paciente
```

---

## Componentes Implementados

### 1. Laravel API (Backend)

**Autenticación**
- **JWT para Labs:** Token con expiración 2 horas, secret key única
- **API Key para Doctors:** Token único por clínica, sin expiración
- **Middleware de protección:** Valida rol (doctor vs lab) en cada request

**Gestión de Órdenes**
```php
// Modelo Order
- OrderResultId (PK, UUID)
- MCNum (ID médico)
- PatientId (ID paciente)
- PatientName
- ProviderNPI (NPI médico)
- ProviderName
- LaboratoryOrderId (ID del lab destino)
- ServiceType (LAB, RX, OTHER)
- CreatedAt / UpdatedAt
- Status (pending, partial, completed, error)
```

**Manejo de Archivos**
- **HL7 v2.5.1 Parsing:** Lee órdenes en formato HL7, extrae campos, valida
- **HL7 Generation:** Crea messages HL7 a partir de datos de orden
- **PDF Generation:** Convierte resultados en PDFs legibles para doctores
- **Validación de formatos:** Checksum, estructura, campos requeridos

**Enrutamiento de Órdenes**
- Lógica para determinar cuál laboratorio debe procesar cada orden
- Basado en: tipo de test, localización geográfica, capacidad de lab
- Almacena historial de intentos de envío

### 2. Integración C# (Cliente Desktop)

**Serialización de Órdenes**
- Lee datos de orden desde abcEHR (base de datos SQL Server)
- Transforma a estructura ORES JSON
- Valida campos obligatorios (paciente, tests, doctor)

**Autenticación**
- Mantiene API key en archivo de configuración encriptado
- Implementa retry automático (3 intentos con backoff exponencial)
- Maneja errores de red y timeouts

**Sincronización de Resultados**
- Consulta regularmente ORES por nuevos resultados
- Descarga archivos (HL7, PDF)
- Inserta resultados en BD local de abcEHR
- Notifica al doctor que hay resultados listos

**Casos de Uso**
```csharp
// Caso 1: Enviar orden desde abcEHR
Doctor crea orden en UI
  ↓
C# obtiene datos de base de datos
  ↓
Valida: paciente, tests, doctor
  ↓
Transforma a JSON ORES
  ↓
POST /api/eLabs/orders {doctor_api_key}
  ↓
Recibe OrderResultId
  ↓
Guarda en tabla local (link entre abcEHR order y ORES order)

// Caso 2: Consultar resultados
C# ejecuta timer (cada 30 min)
  ↓
GET /api/eLabs/orders/pending {doctor_api_key}
  ↓
Filtra órdenes que tengan status "completed"
  ↓
Descarga PDF vía GET /orders/{id}/downloadResultPDF
  ↓
Inserta en BD abcEHR (tabla de resultados)
  ↓
Marca orden como "sincronizada"
```

### 3. Integración con Laboratorios Externos

**Protocolo de Comunicación**
- Laboratorios se registran en ORES (credenciales JWT)
- Cada 5 minutos consultan endpoint `/labs/orders/pending`
- Descargan órdenes asignadas en formato HL7
- Procesan muestras
- Suben resultados en 2 pasos: parcial → final

**Formatos Soportados**
- **Entrada:** HL7 v2.5.1 (órdenes)
- **Salida:** HL7 v2.5.1 (resultados) o PDF (para doctor)
- **Integridad:** Checksum SHA256 en cada mensaje

---

## Decisiones Técnicas Clave

### 1. ¿API Centralizada vs Descentralizada?

**Opción elegida:** API centralizada (ORES)

**Razón:**
- Todos los laboratorios hablan con ORES, no directamente con doctores
- ORES actúa como intermediario (desacoplamiento)
- Si un laboratorio falla, otros siguen funcionando
- Facilita agregar nuevos labs sin cambiar código de doctores
- Auditoría y logging centralizados

**Alternativa:** Cada doctor se conecta directamente a cada lab
- Problema: 10 doctors × 5 labs = 50 integraciones diferentes
- Mantenimiento: imposible
- Escalabilidad: nightmare

### 2. ¿HL7 v2 vs FHIR?

**Opción elegida:** HL7 v2.5.1

**Razón:**
- Laboratorios externos ya generan HL7 v2
- Es estándar de facto en labs (no FHIR)
- FHIR es más moderno pero adopción aún baja en labs

### 3. ¿JWT para Labs, API Keys para Doctors?

**Razón:**
- **JWT para labs:** Expiración automática (2h) por seguridad
- **API Keys para doctors:** Clave única por clínica, más simple para desktop apps
- No es inconsistencia, es pragmatismo: cada cliente tiene requisito diferente

### 4. ¿Almacenar HL7 en BD?

**Decisión:** Sí, campo `HL7OrderFileContent` en `tblOrderResult`

**Razón:**
- Auditoría: saber exactamente qué se envió al lab
- Reenvío: si lab perdió orden, puedo reenviar desde BD
- Debugging: si hay error, veo el HL7 exacto

**Desventaja:**
- BD más grande (texto HL7 puede ser 5-10KB por orden)
- Mitigación: archivar órdenes viejas a storage externo

### 5. ¿Sincronización Push vs Pull?

**Opción elegida:** Pull (labs consultan `/pending`)

**Razón:**
- Labs pueden consultar en su propio horario
- No requerimos webhooks en labs (menos infraestructura)
- Tolerancia a fallos: si ORES falla, lab reintentar en 5 min
- Más simple que push (firewalls, NATs, etc)

---

## Métricas de Producción

| Métrica | Valor | Notas |
|---------|-------|-------|
| **Órdenes procesadas/mes** | 40,000+ | Crecimiento 8-10% trimestral |
| **Labs conectados** | 25+ | Laboratorios externos integrados |
| **Doctores/clínicas** | 150+ | Clínicas con integración C# |
| **Uptime** | 99.8% | Post-estabilización (3 meses) |
| **Latencia orden** | <500ms | Doctor envía → ORES recibe |
| **Tiempo sincronización** | 5-15 min | Lab ve orden después de creación |
| **Tasa de éxito** | 98.5% | 1.5% fallos por datos inválidos |
| **Tiempo retorno resultados** | 4-24h | Depende del laboratorio (rápido: 4h, completo: 24h) |

---

## Stack Técnico

| Componente | Tecnología | Razón |
|-----------|-----------|--------|
| **Backend API** | Laravel 10.x + PHP 8.1 | Rapidez desarrollo, ORM robusto |
| **BD Principal** | MySQL 8.0 | Transacciones, ACID, índices |
| **Autenticación** | JWT + API Keys | Estándar para APIs REST |
| **HL7 Parsing** | PHP library (custom) | Extrae campos de HL7 messages |
| **PDF Generation** | TCPDF / mpdf | Genera PDFs desde datos de orden |
| **C# Client** | .NET Framework 4.6+ | Integración con abcEHR existente |
| **Serialización** | JSON (requests/responses) | Estándar REST |
| **Logging** | Monolog (Laravel) | Trazabilidad de cada orden |

---

## Resultados Alcanzados

### Antes (Manual)
```
Doctor crea orden → Imprime/Email → Lab recibe en 24h → Procesa
Resultados listos → Lab llama/email doctor → Doctor ingresa manualmente
Timeline: 3-5 días | Errores: 5-10% | Costo: Alto (staff administrativo)
```

### Después (ORES)
```
Doctor crea orden en abcEHR → ORES recibe en <500ms → Lab consulta en 5 min
Lab procesa → Carga resultado en 30 min → Doctor descarga automático
Timeline: 4-24h | Errores: <1% | Costo: Bajo (automático)
```

### Beneficios Realizados

1. **Velocidad:** Órdenes recibidas por labs en minutos (antes: horas/días)
2. **Automatización:** Cero ingreso manual de resultados en doctor
3. **Trazabilidad:** Auditoría completa (quién envió, cuándo, a quién)
4. **Escalabilidad:** +25 labs sin agregar complejidad
5. **Confiabilidad:** 99.8% uptime, 98.5% tasa de éxito
6. **Integración:** Doctores sin cambiar workflow (ordenes desde abcEHR)

### Desafíos en Producción

**Desafío 1: HL7 de laboratorios variados**
- Problema: Cada lab genera HL7 ligeramente diferente (versiones, campos opcionales)
- Solución: Parser robusto que tolera variaciones, validación por campos críticos

**Desafío 2: Timeout en carga de resultados**
- Problema: Archivos grandes (PDFs con imágenes) timeout en HTTP
- Solución: Multipart upload, chunked encoding, max 50MB por archivo

**Desafío 3: Sincronización C# ↔ ORES**
- Problema: Desktop sin conexión se quedaba atrás
- Solución: Queue local, retry automático, reconciliación al conectar

**Desafío 4: Labs sin integración técnica**
- Problema: Algunos labs no pueden integrar API
- Solución: Fallback a upload manual (web UI en ORES), con validación

---

## Documentación Deliverables

1. **API Specification:** 50+ endpoints documentados (OpenAPI/Swagger)
2. **HL7 Mapping Guide:** Cómo ORES mapea campos de HL7 a base de datos
3. **C# Integration Guide:** Cómo integrar ORES en otros sistemas legacy
4. **Lab Integration Guide:** Cómo conectar nuevo laboratorio a ORES
5. **Operational Runbook:** Deployment, rollback, troubleshooting
6. **Database Schema:** 20+ tablas documentadas (users, orders, results, logs)
7. **Error Codes Reference:** Qué significa cada error y cómo resolver

---

## Lecciones Aprendidas

1. **HL7 es difícil:** Estándar antiguo con muchas variaciones. Necesita parser robusto, no regex simple.
2. **Laboratorios tienen realidades diferentes:** Algunos integran fácil, otros nunca lo harán. Plan B siempre.
3. **Auditoría es crítico:** En salud, poder demostrar "esto sucedió en este momento" es legal, no opcional.
4. **Synchronization es más complejo que parece:** Pull vs Push, retries, conflictos, timeouts. No es trivial.
5. **Multi-client desde el inicio:** Aprender a diseñar APIs que sirvan a doctores y labs (requirements conflictivos).

---

## Mantenimiento Futuro

**Certificación HL7:**
- Validar contra HL7 compliance test suite
- Certificación con laboratorios clave si requerido

**Escalabilidad:**
- Migrar de MySQL a PostgreSQL si volumen excede 1M órdenes/mes
- Caché en Redis para búsquedas frecuentes

**Seguridad:**
- Rate limiting en endpoints de labs
- Encriptación de datos sensibles (paciente PII)
- Auditoría de cambios

**Nuevas funcionalidades:**
- Notificaciones push a doctores cuando hay resultados
- Integración con más laboratorios externos
- Dashboard para monitorear estado de órdenes

---
