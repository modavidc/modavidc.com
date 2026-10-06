# PREIS Integration — Full Testing & Certification Journey

**Proyecto:** HL7 v2.5.1 Integration con PREIS (Sistema de Registro de Inmunizaciones, Gobierno de Puerto Rico)
**Cliente:** MediRec, Inc.
**Período de Testing:** Junio — Agosto 2021
**Contacto de PREIS:** Norma Castro Monge, Program Analyst, Puerto Rico Health Department

---

## Cadena de Pruebas Reales (Timeline Completo)

### Junio 21, 2021 — Primera Prueba con Data Real

**Paciente:** Angel Delgado (DOB: 01/24/2006)
**Vacuna:** COVID-19 Pfizer (CVX 208)
**Endpoint:** `https://prst1web.stchealthops.com/phchub/HL7Server`

**HL7 VXU Message Enviado:**
```
MSH|^~\&|Test EHR Application|2004.4644||NIST Test Iz Reg|20120701082240-0500||VXU^V04^VXU_V04|NIST-IZ-001.00|P|2.5.1|||ER|AL|||||Z22^CDCPHINVS
PID|1||004225^^^9997^MR||Delgado^Angel^Gabriel^^^^L|Perez^^^^^^M|20060124|M||2106-3^White^CDCREC|CARR 159 KM 4 HM.1^^Morovis^PR^00687^PR^L||^^^^^^|||||||||2135-2^Hispanic or Latino^CDCREC
PD1|||||||||||02^Reminder/Recall - any method^HL70215|||||A|20120701|20120701
ORC|RE||65971^9997|||||||^^||
RXA|0|1|20210518||208^COVID-19, mRNA, LNP-S, PF, 30 mcg/0.3 mL dose^CVX|0.3|mL^MilliLiter [SI Volume Units]^UCUM||00^New immunization record^NIP001|^^^^^^^^^^^^|^^^2004.4644||||EW0186|20210831|PFR^Pfizer^MVX|||CP|A
RXR|C28161^Intramuscular^NCIT|LD^Left Arm^HL70163
OBX|1|CE|64994-7^Eligibility Status^LN|1|V02^Medicaid^HL70064||||||F|||20210518|||VXC40^vaccine level^CDCPHINVS
OBX|2|CE|30963-3^Vaccine purchased with^LN|2|VXC51^Public VFC funds^CDCPHINVS||||||F||||||||||||||
```

**Respuesta de PREIS (NACK + Warning):**
```
MSH|^~\&|^^|NIST Test Iz Reg^^|Test EHR Application^^|2004.4644^^|20210621203301-0400||ACK^V04^ACK|9668232848.100015516|P|2.5.1|||NE|NE|||||Z23^CDCPHINVS|
MSA|AE|NIST-IZ-001.00|
ERR|||0^Message accepted^HL70357|I||||Patient 004225 "Angel Delgado" with 1 vaccination accepted into vaccination staging table|
ERR||RXA^1^15|103^Table value not found^HL70357|W||||vaccination lot is unrecognized|
ERR||PID^1|999^Application Error^HL70357|W||||patient is eligible for vfc but no guardian|
```

**Problemas Identificados:**
1. **Vaccination lot unrecognized** — Lote `EW0186` no existe en ambiente de staging (está en producción)
2. **No guardian for minor** — Paciente es menor pero no hay segmento NK1 (responsable)
3. **Vaccine funding issue** — Código VXC51 incorrecto para COVID (debe ser VXC50)

**Respuesta de Norma Castro (25 Junio):**
> "vaccination lot is unrecognized — no se reconoce el número de lote porque los lotes de los inventarios están creados en el ambiente de producción y no en el de pruebas. Pero le indico que los campos requeridos para identificar la vacuna están incluidos (número de lote, fecha expiración y fuente de fondo) por lo cual se supone que no tengan problemas en el ambiente de producción."
>
> **IMPORTANTE para COVID:** "en cuanto a las vacunas COVID aunque son fondos públicos (federal) provienen de fondos especiales. Por tal razón es necesario que en el OBX 30963-3 cuando sea una vacuna COVID, el fondo sea identificado como VXC50 para adultos y menores."

---

### Julio 20, 2021 — Requerimiento: Dos Apellidos Obligatorios

**Respuesta de Norma Castro:**
> "Es importante que le indique al cliente que es requerido que el nombre del paciente incluya los 2 apellidos. Si no cumplen con ese requerimiento, no podremos moverlos a producción."

**El problema:**
- Anterior: `PID-5: Delgado^Angel^Gabriel^^^^L` (last name, first name, middle name)
- Se requiere: `PID-5: Delgado Perez^Angel^Gabriel^^^^L` (last name completo, first name, middle name)

Esto fue crítico — sin dos apellidos, no había path a producción.

---

### Agosto 9, 2021 — Preguntas sobre Observaciones (OBX) Obligatorias

**Norma Castro responde:**
> "Las observaciones 64994-7 y 30963-3 son obligatorias y requeridas en PREIS. Las demás observaciones no son obligatorias, pero si las pueden incluir se lo agradeceríamos ya que los datos de las vacunas estarían más completos."

**Observaciones obligatorias:**

| OBX ID | Nombre | Tabla | Descripción | Ejemplo |
|--------|--------|-------|-------------|---------|
| **64994-7** | Vaccine funding program eligibility category | 0064 (Financial Class) | Elegibilidad para fondos (Medicare, Medicaid, VFC, Private, etc) | V02 = Medicaid |
| **30963-3** | Vaccine purchased with | Immunization Funding Source | De dónde se compró la vacuna | VXC50 = COVID pandemic funds |

**Observaciones opcionales pero recomendadas:**

| OBX ID | Nombre | Fuente | Descripción |
|--------|--------|--------|-------------|
| 30956-7 | Vaccine Type | Tabla CVX | Tipo de vacuna (no requerido) |
| 29768-9 | Date vaccine information statement published | CDC | Fecha que VIS fue publicada |
| 29769-7 | Date vaccine information statement presented | MediRec | Fecha que se le entregó VIS al paciente |

---

### Agosto 12, 2021 — Segunda Prueba con Correcciones

**Cambios implementados:**
1. ✅ Dos apellidos: `Delgado Perez` en PID-5
2. ✅ Segmento NK1 (Guardian): `Maria^Perez^^^^^L` (madre)
3. ✅ Código VXC50 para COVID: `OBX|2|CE|30963-3^Vaccine purchased with^LN|2|VXC50^Public VFC funds^CDCPHINVS`
4. ✅ Dos apellidos en NK1: `Perez^Maria` (LastName^FirstName)

**HL7 Corregido:**
```
MSH|^~\&|Test EHR Application|2004.4644||NIST Test Iz Reg|20120701082240-0500||VXU^V04^VXU_V04|NIST-IZ-001.00|P|2.5.1|||ER|AL|||||Z22^CDCPHINVS
PID|1||004225^^^9997^MR||Delgado Perez^Angel^Gabriel^^^^L|Perez^^^^^^M|20060124|M||2106-3^White^CDCREC|CARR 159 KM 4 HM.1^^Morovis^PR^00687^PR^L||^^^^^^|||||||||2135-2^Hispanic or Latino^CDCREC
PD1|||||||||||02^Reminder/Recall - any method^HL70215|||||A|20120701|20120701
NK1|1|Perez^Maria^^^^^L|MTH^Mother^HL70063|CARR 159 KM 4 HM.1^^Morovis^PR^00687^PR^L|^^^^^^
ORC|RE||65971^9997|||||||^^||
RXA|0|1|20210518||208^COVID-19, mRNA, LNP-S, PF, 30 mcg/0.3 mL dose^CVX|0.3|mL^MilliLiter [SI Volume Units]^UCUM||00^New immunization record^NIP001|^^^^^^^^^^^^|^^^2004.4644||||EN6203|20210630|PFR^Pfizer^MVX|||CP|A
RXR|C28161^Intramuscular^NCIT|LD^Left Arm^HL70163
OBX|1|CE|64994-7^Eligibility Status^LN|1|V02^Medicaid^HL70064||||||F|||20210518|||VXC40^vaccine level^CDCPHINVS
OBX|2|CE|30963-3^Vaccine purchased with^LN|2|VXC50^Public VFC funds^CDCPHINVS||||||F||||||||||||||
```

**Respuesta de PREIS (ACK - SUCCESS):**
```
MSH|^~\&|^^|NIST Test Iz Reg^^|Test EHR Application^^|2004.4644^^|20210812212521-0400||ACK^V04^ACK|2914227537.100019242|P|2.5.1|||NE|NE|||||Z23^CDCPHINVS|
MSA|AA|NIST-IZ-001.00|
ERR|||0^Message accepted^HL70357|I||||Patient 004225 "Angel Delgado Perez" with 1 vaccination accepted into vaccination staging table|
```

✅ **MSA|AA** = "Application Accept" — ¡ÉXITO!

---

### Agosto 17, 2021 — Caracteres Especiales (Acentos, Ñ)

**Problema adicional descubierto:**
> "el sistema para las exportaciones no acepta acentos ni ñ. Los mensajes que incluyan estos caracteres son rechazados y marcados como error."

**Ejemplo del error:**
- Enviado: `Pérez` (con acento)
- Rechazado por PREIS
- Solución: Eliminar acentos → `Perez`

**Implementación requerida:** Rutina en MediRec para sanitizar nombres antes de generar HL7 (remover acentos, ñ, caracteres especiales).

**Respuesta de Norma:**
> "¿sería posible que ustedes implementen una rutina para eliminar estos caracteres?"

**Respuesta de MediRec:**
> "hemos coordinado con el equipo de development y vamos a implementar los dos puntos que menciona:
> 1. Verificar y corregir el nombre de la persona responsable en el segmento NK1.
> 2. Implementar una rutina para eliminar los caracteres especiales."

---

## Validaciones Finales Requeridas por PREIS

### 1. Segmento MSH (Message Header)
```
MSH|^~\&|MediRec|FACILITY_ID||PREIS|TIMESTAMP||VXU^V04^VXU_V04|MESSAGE_ID|P|2.5.1|||ER|AL|||||Z22^CDCPHINVS
```
- **MSH-3 (Sending App):** `MediRec`
- **MSH-12 (Version):** `2.5.1` (REQUERIDO)
- **MSH-15 (Encoding):** `ASCII`
- **MSH-21 (Alternate Character Set):** `Z22^CDCPHINVS`

### 2. Segmento PID (Patient Identification) — REQUERIDO

| Campo | Descripción | Validación |
|-------|-------------|-----------|
| **PID-5** | Nombre paciente | **2 APELLIDOS obligatorio**: `LastName1 LastName2^FirstName^MiddleName` |
| **PID-8** | Género | M, F, U, O |
| **PID-10** | Raza | Tabla CDCREC (2106-3 = White, etc) |
| **PID-22** | Etnicidad | Tabla CDCREC (2135-2 = Hispanic or Latino, etc) |

### 3. Segmento PD1 (Provider Data) — RECOMENDADO

```
PD1|||||||||||02^Reminder/Recall - any method^HL70215|||||A|DATE|DATE
```

### 4. Segmento NK1 (Next of Kin) — RECOMENDADO si menor de 19 años

```
NK1|1|LastName^FirstName^^^^^L|REL^Relationship^HL70063|ADDRESS|PHONE
```

**Formato crucial:** `LastName^FirstName` (NO al revés)

### 5. Segmento ORC (Order)

```
ORC|RE||ORDER_ID^^^FACILITY_CODE|||||||^^||
```

### 6. Segmento RXA (Pharmacy/Treatment Administration) — CRÍTICO

| Campo | Descripción | Validación |
|-------|-------------|-----------|
| **RXA-2** | Sequence | 0 = nueva, 1+ = revisión |
| **RXA-5** | Vaccine Code | CVX (e.g., 208 = COVID-19 Pfizer) |
| **RXA-16** | Vaccine Code Table | CVX standard |
| **RXA-17** | Body Site | SNOMED CT |
| **RXA-18** | Route of Admin | SNOMED CT |
| **RXA-20** | Lot Number | Debe existir en PREIS |
| **RXA-30** | Manufacturer Code | MVX table (PFR = Pfizer, etc) |

### 7. Segmento RXR (Pharmacy/Treatment Route)

```
RXR|SITE^Site Description^SNOMED|ROUTE^Route Description^SNOMED
```

### 8. Segmento OBX (Observation) — OBLIGATORIOS

#### OBX-1: Eligibility (64994-7) — OBLIGATORIO
```
OBX|1|CE|64994-7^Vaccine funding program eligibility category^LN|1|V02^Medicaid^HL70064||||||F|||DATE|||VXC40^vaccine level^CDCPHINVS
```

**Tabla 0064 - Valores aceptados:**
- V01 = Not VFC eligible
- V02 = Medicaid
- V03 = Military (TRICARE)
- V04 = Indian Health Service
- V05 = VFC eligible (Federally Qualified Health Center Patient)
- V06 = Uninsured
- V07 = Private insurance
- V08 = Insured (unknown type)

#### OBX-2: Vaccine Funding Source (30963-3) — OBLIGATORIO
```
OBX|2|CE|30963-3^Vaccine purchased with^LN|2|VXC50^Public VFC funds^CDCPHINVS||||||F||||||||||||||
```

**Valores aceptados:**

| Código | Descripción | Cuándo usar |
|--------|-------------|------------|
| **PHC70** | Fondos privados | Seguros privados |
| **VXC50** | Fondos públicos COVID | **Todas las COVID** (pandemic special funds) |
| **VXC51** | VFC public funds | Medicaid, VFC, Indian Health |
| **VXC52** | Non-VFC public funds | Militares, otros públicos |

**CRÍTICO para COVID:** SIEMPRE usar **VXC50**, no VXC51 o VXC52.

---

## Cronograma de Testing

| Fecha | Evento | Resultado |
|-------|--------|-----------|
| **Junio 21** | Primera prueba con data real | NACK — 3 errores |
| **Junio 25** | Correcciones (OBX, vacuna funding) | NACK — "lot unrecognized" (warning esperado) |
| **Julio 20** | Requerimiento: 2 apellidos | CRÍTICO para producción |
| **Agosto 9** | Clarificación OBX obligatorios | Guidance recibida |
| **Agosto 11** | Descubrimiento: acentos/ñ rechazan | Mitigation plan |
| **Agosto 12** | Segunda prueba (2 apellidos, NK1) | **ACK ✅** |
| **Agosto 17** | Feedback: implementar sanitización | Code changes iniciados |
| **Agosto 18** | Confirmación de cambios pendientes | Listos para producción |
| **Febrero 15, 2022** | Go-live training con 3 clientes | Rollout iniciado |
| **Agosto 11, 2022** | Production pilot pause | Trabajo en nuevos formatos federales |
| **Septiembre 27, 2022** | Esfuerzo retomado post-huracán | 25-50 vacunas para validar |
| **Octubre 13, 2022** | Production pilot test | 25 transacciones iniciales |

---

## Fase 2: Rollout a Clientes (Febrero 2022 onwards)

### Instalaciones Activas Iniciales

Después de passed staging en agosto 2021, PREIS fue deployado a 3 centros MCHC (Managed Care Health Centers):

1. **Morovis** — Centro de Salud Morovis
2. **Toa Baja** — Centro de Salud Toa Baja
3. **Vega Alta** — Centro de Salud Vega Alta

### Training & Onboarding (Febrero 15, 2022)

**Coordinado por:** Julio C. Cajigas (MediRec)
**Contacto de PREIS:** Norma Castro Monge

**Descripción:**
> "Estamos en el proceso de capacitación del módulo nuevo de vacunas con interface al PREIS para los centros de MCHC en Morovis, Toa Baja y Vega Alta."

**Actividades:**
- Teleconferencia con Norma Castro para Q&A
- Training del módulo de vacunas en C#
- Validación de flujos HL7
- Verificación de datos de pacientes
- Testing con data real de cada facilidad

### Production Testing Q&A (Centro 330 Morovis)

Después del training, el Centro 330 de Morovis planteó preguntas operacionales antes de go-live productivo:

#### Pregunta 1: ¿Hay que enviar la firma del paciente/tutor en HL7?

**Respuesta de Norma Castro:**
> "El formato HL7 no tiene un segmento para incluir la firma del paciente/tutor por lo cual PREIS no colecta la firma a través de las exportaciones. Ahora bien, es obligatorio que el proveedor guarde evidencia de la firma del paciente/tutor autorizando la administración de la vacuna ya sea de manera electrónica (si el EMR le provee esta funcionalidad) o un formato a papel."

**Implicación:** 
- HL7 NO incluye firma
- MediRec DEBE guardar evidencia de consentimiento (en base de datos o papel)
- Regulatorio: auditorías pueden pedir proof de consentimiento

#### Pregunta 2: ¿PREIS acepta vacunas históricas (administradas en otro lugar)?

**Respuesta de Norma Castro:**
> "PREIS acepta la información de las vacunas administradas e históricas, ahora bien, el proveedor debe asegurarse de identificar correctamente si la vacuna es o no histórica."

**Implicación:**
- Sí, se pueden registrar vacunas administradas en otras clínicas/países
- Flujo: paciente presenta evidencia → médico la registra en MediRec → se envía a PREIS como histórica
- MediRec debe marcar flag "es_historica" para trazabilidad
- PREIS requiere que sea claro cuál es histórica vs actual

#### Pregunta 3: ¿Los fondos siempre son "Public Funding"?

**Respuesta de Norma Castro:**
> "No, el fondo debe corresponder a que fondo se utilizó para adquirir la vacuna."

**Implicación:**
- NO es "siempre public"
- Depende de dónde MediRec compró la vacuna:
  - **VXC50**: COVID con fondos federales (pandemic)
  - **VXC51**: VFC (Medicaid/government programs)
  - **VXC52**: Non-VFC public funds
  - **PHC70**: Private funds (seguros privados)
- MediRec debe mapear su "funding source" en BD a códigos PREIS
- Por cada vacuna en inventario, se conoce su source

---

## FAQ Operacional para Clínicas

(Basado en respuestas de Norma Castro)

| Pregunta | Respuesta | Acción |
|----------|-----------|--------|
| ¿Firma en HL7? | No hay segmento HL7 para firma | Guardar evidencia en MediRec (papel o e-signature) |
| ¿Vacunas históricas? | Sí, PREIS las acepta | Marcar como "histórica" en RXA, identificar fuente |
| ¿Fondos? | Depende de source de compra | Mapear funding_source en BD a tabla PREIS (VXC50, VXC51, etc) |
| ¿Reintentos? | Sin límite de intentos | Si NACK, corregir y reenviar sin problema |
| ¿Demora? | No hay demora recomendada | Reintentar inmediatamente después de corregir |

---

## Production Errors & Fixes (Primera Clínica Real)

Cuando Centro 330 Morovis envió primera vacunación productiva con data real, Norma Castro identificó 6 errores/warnings:

### Error 1: Apellidos con Guión ❌ → Espacio en blanco ✅

**Incorrecto:**
```
PID-5: ARROYO-VARGAS^ELIAN^DARIEL^^^^L
```

**Correcto:**
```
PID-5: ARROYO VARGAS^ELIAN^DARIEL^^^^L
```

**Lección:** Nombres con guión (ej: García-López) deben separarse por ESPACIO, no guión. PREIS parser es sensible.

### Error 2: Mother Name (PID) — No duplicar apellido ❌ → Solo nombre ✅

**Incorrecto:**
```
PID-6: VARGAS^JAILEEN VARGAS
```

**Correcto:**
```
PID-6: VARGAS^JAILEEN
```

**Lección:** El campo PID-6 (Mother's Maiden Name) debe ser `LastName^FirstName`, no repetir el apellido.

### Error 3: Guardian Name (NK1) — Mismo problema ❌ → Solo nombre ✅

**Incorrecto:**
```
NK1-2: VARGAS^JAILEEN VARGAS
```

**Correcto:**
```
NK1-2: VARGAS^JAILEEN
```

**Lección:** Formato es estricto: `LastName^FirstName^MiddleName`, sin duplicar componentes.

### Error 4: CRITICAL — Vaccine Funding Source (OBX 30963-3) Faltante ❌

**Error Message:**
```
"vaccination funding source is missing - Message Rejected"
```

**Problema:** OBX 30963-3 no fue incluido en el mensaje.

**Solución — REQUERIDO si vacuna es administrada por clínica:**
```
OBX|2|CE|30963-3^Vaccine purchased with^LN|2|VXC50^Public VFC funds^CDCPHINVS||||||F||||||||||||||
```

**Implicación:** Este error causa RECHAZO del mensaje completo (no es warning, es fatal).

### Warning 5: VIS Dates (OBX 29768-9, 29769-7) Faltantes ⚠️

**Warning Message:**
```
"vaccination information statement dates are missing"
```

**Problema:** Los OBX para fechas VIS no fueron incluidos.

**Solución — Recomendado:**
```
OBX|3|TS|29768-9^Date vaccine information statement published^LN|3|20210518||||||F
OBX|4|TS|29769-7^Date vaccine information statement presented^LN|4|20210518||||||F
```

**Fuente de fechas:**
- **29768-9 (Publicación):** https://www.cdc.gov/vaccines/hcp/vis/vis-dates.html
- **29769-7 (Presentación):** Fecha cuando se entregó al paciente (generalmente = fecha vacunación)

### Warning 6: Facility ID (ORC-17) Faltante ⚠️

**Warning Message:**
```
"vaccination entering organization is missing"
```

**Problema:** ORC-17 (Entering Organization) no fue incluido.

**Solución — Recomendado:**
```
ORC|RE||ORDER_ID^^^FACILITY_CODE||...|...|...|...|...|...|...|...|FACILITY_ID^^^^^^^^^
```

Incluir FacilityID de la clínica (ej: "330^Centro Morovis^L").

### Warning 7: Vaccination ID (ORC-3) Faltante ⚠️

**Warning Message:**
```
"vaccination id is missing"
```

**Problema:** ORC-3 (Filler Order Number) no fue incluido.

**Solución — Recomendado:**
```
ORC|RE||VACCINE_ID^^^FACILITY_CODE|||||||^^||
```

Generar ID único por vacunación (ej: timestamp + patient_id).

---

## Common Mistakes Checklist

| Componente | Error Común | Corrección |
|-----------|-----------|-----------|
| **PID-5** (Patient Name) | `LASTNAME-FIRSTNAME` | Use SPACE: `LASTNAME FIRSTNAME` |
| **PID-6** (Mother Name) | `LASTNAME^FIRSTNAME LASTNAME` | Remove duplication: `LASTNAME^FIRSTNAME` |
| **NK1-2** (Guardian Name) | `LASTNAME^FIRSTNAME LASTNAME` | Remove duplication: `LASTNAME^FIRSTNAME` |
| **OBX 30963-3** (Funding) | Missing entirely | CRITICAL: Must include if vacuna administrada |
| **OBX 29768-9/29769-7** (VIS Dates) | Missing dates | Recomendado pero no crítico |
| **ORC-17** (Facility ID) | Missing | Recomendado, evita warning |
| **ORC-3** (Order ID) | Missing | Recomendado, evita warning |

---

## Production Pilot (Octubre 2022) — José Alvelo Era

### Nuevo Contacto en PREIS

**José A. Alvelo Figueroa, M.S.**
- Título: Programmer / EHR Specialist
- Departamento: Immunization Program, Puerto Rico Health Department
- Email: jose.alvelo@salud.pr.gov
- Teléfono: (787) 765-2929 ext. 3328

José reemplaza a Norma Castro como contacto técnico de PREIS. Es el Programmer que maneja el backend de PREIS y ajusta perfiles de producción.

### Timeline: Agosto → Octubre 2022

**Agosto 11, 2022:** José pregunta sobre status
- Julio responde: "Estamos trabajando una petición del cliente para implantar los formatos nuevos de reportar datos al gobierno federal."
- Pausa en PREIS testing debido a trabajo en federal reporting formats

**Septiembre 7, 2022:** José hace follow-up
- "¿Cuál es el estatus de los procesos de integración?"

**Septiembre 27, 2022:** Jarel responde (Julio sin electricidad por huracán)
- "El esfuerzo se retomó y estamos comunicandonos con nuestro cliente para identificar unas 25-50 vacunas nuevas para transmitir y validar."
- Julio sin servicio eléctrico desde septiembre 17
- Meta: envíos entre esta semana y próxima

**Octubre 5, 2022:** José hace follow-up post-huracán
- "¿Cómo va su progreso con el proceso de integración?"
- Chequea recuperación de servicios

### Production Profile Adjustments

José analiza transmisiones y responde:
> "Estaba analizando las transmisiones que enviaste. Aquí te envío adjunto un reporte de los errores generados en tus ultimas transmisiones. Realicé unos cambios adicionales en el perfil de producción para flexibilizar ciertos campos. Necesito que envíes nuevamente los últimos mensajes que enviaste para verificar si suben sin errores esta vez."

**Implicación:**
- PREIS ajustó reglas de validación en producción (flexibilizó campos)
- MediRec debe reenviar últimos mensajes rechazados
- Iteración continua: error → reporte → ajuste de perfil → retest

### Production Pilot Launch (Octubre 13, 2022)

**Moisés al equipo PREIS:**
> "Para comentarte que realizaremos las pruebas de PREIS en producción este miércoles 13.
> 
> Una vez que enviemos la/las vacunas, te lo comunicaré por este un correo como de costumbre.
> 
> El plan es: empezar con 25 transacciones e irlo aumentando progresivamente."

**Estrategia de escalada:**
1. **Fase 1:** 25 transacciones (1 clínica, ~1 día)
2. **Fase 2:** Aumentar progresivamente con feedback
3. **Monitoreo:** José y MediRec en contacto directo post-envío

**Contacto de escalado:** Directo con José Alvelo (Programmer PREIS)

---

## Key Stakeholders & Timeline

| Rol | Persona | Período | Función |
|-----|---------|---------|---------|
| PREIS Program Lead | Norma Castro Monge | Jun 2021 - ~Jul 2022 | Requirements, testing guidance, Q&A |
| PREIS Programmer | José Alvelo Figueroa | Aug 2022 - onwards | Profile adjustments, error reports, validation |
| MediRec Lead | Julio C. Cajigas | Jun 2021 - onwards | Project management, PREIS coordination |
| MediRec Dev | Moisés Cedeño | Jun 2021 - onwards | Technical implementation, testing |
| MediRec Team | Jarel, Jessel, Sonia | 2021-2022 | Development, training, support |

---

---

## Case Study: Meditab + Community Health Foundation (CHFPR) — Abril 2024 - Enero 2025

MediRec no fue el único vendor. PREIS también onboardeó otros EMRs. Aquí está el timeline de **Community Health Foundation of PR** con **Meditab Software**:

### Stakeholders

- **EMR Vendor:** Meditab Software Inc (Interface Analyst: Adarsh Yadav)
- **Client:** Community Health Foundation of PR (CIO: Gerardo Medina)
- **PREIS:** Norma Castro Monge, José Alvelo, Alejandro Alvarado

### Timeline & Errors (April 2024 - Jan 2025)

**Abril 17-22, 2024:** Norma identifica problemas iniciales en datos CHFPR

| Componente | Error | Solución |
|-----------|-------|---------|
| **PID-13** (Phone) | Formato incorrecto | `^PRN^PH^^^787^2063601` (con ^ entre area code y número) |
| **PID-6** (Mother Name) | Campo vacío | Debe incluirse Mother's Maiden Name |
| **PID-8** (Relationship) | Código PT | Debe ser MTH (mother) |
| **RXR-1** (Route) | Código PQ | Debe ser PO (oral) |
| **RXR-2** (Site) | Código PO | Debe ser MOUTH o NASL (tabla HL70163) |
| **MVX** (Manufacturer) | MER, SAN | Debe ser MSD (Merck), PMC (Sanofi) |
| **OBX 30963-3** (Funding) | **Faltante** | **CRÍTICO** — causa rechazo completo |
| **RXA-10.1** (Vaccinator ID) | Solo nombre | Debe incluir NPI, SLN, o ID único |

**Octubre 2024:** José Alvelo entra como nuevo contact
> "Am Jose Alvelo the new EHR Specialist assigned to this project. I was analyzing the messages we have received and noticed you are sending us messages without the patient's ID, patient mothers maiden name and patient 18 or under with no guardian submitted."

**Octubre-Noviembre 2024:** Data no recibida por 2+ meses
> "I have noticed that this client's data has not been received since May 8, 2024."

**Julio 2024 - Enero 2025:** Iteración continua de errores
- Phone format correcciones múltiples (agosto → octubre)
- Aún problemas con RXR segment (enero 2025)
- ROTARIX vaccine: RXR segment format incorrecto

**Enero 30, 2025 — RXR Format Error (ACTUAL)**
```
Error: RXR|^PO^|MOUTH^Mouth^HL70163|||
Correcto: RXR|PO^Oral^HL70163|PO^Mouth^HL70163|||
```

José Alvelo y Meditab en contacto directo para corregir (último correo enero 30, 2025).

### Key Differences: MediRec vs Meditab

| Aspecto | MediRec (2021-2022) | Meditab/CHFPR (2024-2025) |
|--------|-----------|-----------|
| **Vendor** | MediRec (custom app) | Meditab Software (comercial) |
| **Contact Principal** | Julio C. Cajigas | Gerardo Medina (CHFPR CIO) |
| **Testing Duration** | ~6 meses (Junio-Diciembre 2021) | **9+ meses stuck** (April 2024 - Jan 2025) |
| **Status** | ✅ Productivo Octubre 2022 | ⏳ Aún en testing (Jan 2025) |
| **Key Issues** | Apellidos, OBX fields, formatting | Vendor mapping, phone formats, field config |
| **Root Cause** | Implementación custom, iteración rápida | Vendor inflexibilidad, config EMR |

### Lecciones Adicionales (Multi-Vendor)

1. **Phone Number Format es NO trivial:** Diferentes vendors entienden diferente `^` en segmentos
2. **Vendor Configuration es crítica:** Meditab necesita updates de "build" para nuevas configuraciones
3. **RXR Segment complexity:** Route + Site combinations tienen reglas específicas por vacuna
4. **Data Quality monitoring:** PREIS monitorea continuamente, rechaza si problemas persisten
5. **Timing:** Vendors comerciales son más lentos que custom implementations (MediRec ~6 meses vs Meditab 9+ meses stuck)

---

## Oficialmente: Proceso de Onboarding de PREIS

PREIS tiene un proceso formal y documentado para que nuevas clínicas/facilidades se integren. Ejemplo: solicitud a Policlínica Bella Vista (facility code 7105).

### Propósito de PREIS (Oficial)

> "El Registro de Inmunización de Puerto Rico, en funcionamiento desde 1994 y conocido actualmente como PREIS, es un sistema de información crucial para la salud pública. Su propósito es almacenar y consolidar el historial de vacunas de todos los residentes en un solo expediente, utilizando datos de diversas fuentes como proveedores de vacunación, escuelas y hospitales."

**Funciones clave:**
1. Asegurar niveles óptimos de cobertura de vacunación
2. Generar Certificado de Vacunación oficial
3. Enviar notificaciones proactivas sobre itinerario de inmunización
4. Facilitar proyecciones de salud pública a corto/mediano/largo plazo

### Base Legal

**Ley Número 169 de 2019:** "Ley del Registro de Inmunización de Puerto Rico"
- Respalda el registro
- Establece deber de reportar

### Proceso Oficial de Onboarding

**Paso 1:** Autorización de Intercambio
- Completar y firmar "Autorización de Intercambio de Información v1.2"
- Requiere consentimiento informado

**Paso 2:** Información de Facilidades
- Si múltiples facilidades: nombre, municipio, código/PIN PREIS

**Paso 3:** Questionnaire
- Completar "PR Onboarding Questionnaire v1.0"
- Versión en español disponible

### Contactos de Onboarding

- **José A. Alvelo Figueroa** — EHR Specialist, Immunization Program
- **Alejandro J. Alvarado Ortiz, DrPH, MPH** — EHR/Data Quality Project Manager
- **Carieyshla Soto Candelaria** — Coordinator
- **PREISHL7** — Contacto técnico (preishl7@salud.pr.gov)

---

## Operaciones Post-Launch: Versioning & Multi-Facility Coordination

Después de go-live inicial, coordinación continua entre MediRec, MCHC (clínicas), y PREIS para mantener cadena de versiones y facility-specific configuration.

### Contacto de MCHC

**Verónica Perez**
- Email: veronica.perez@mchcpr.org
- Rol: Coordinadora de facilities Toa Baja, Vega Alta (y posiblemente Morovis)
- Responsabilidades: 
  - Coordinar testing en las 3 clínicas
  - Validar datos antes de envíos
  - Comunicar status a Moisés

### Plan de Trabajo Acordado (Con José Alvelo)

**Moisés + José Alvelo definieron nuevo workflow:**

1. **Primero: Testing Environment** 
   - Al menos 1 envío a sandbox PREIS
   - Validar antes de pasar a producción
   - (Antes se enviaba directo a producción, causing delays)

2. **Luego: 1 Semana en Producción**
   - Ventana de envío controlado a producción
   - Monitoreo de José Alvelo

3. **Finalización**
   - Si todo OK → Facilidades dadas de alta permanentemente
   - Envío automático de vacunas a PREIS

### Version Control via Zoho

**Sistema de actualización de programas:**
- **Plataforma:** Zoho (CRM/Project Management)
- **Proceso:** Moisés actualiza versión del programa de vacunas
- **Distribution:** Roll out a equipos de prueba en Toa Baja, Vega Alta, etc.
- **Facility-specific:** Algunas versiones incluyen facility codes (ej: 317)

**Ejemplo workflow:**
1. Moisés crea nueva versión (ej: v2.1 con facility 317 details)
2. Actualiza en Zoho
3. Coordina con Verónica para meeting
4. Instala versión en equipos de las clínicas
5. Valida funcionamiento

---

## Lecciones Clave

### 1. **Dos Apellidos es Mandatorio**
Puerto Rico requiere explícitamente dos apellidos en PID-5. Sin esto, no hay camino a producción.

### 2. **Códigos de Vacunación son Precisos**
- CVX 208 = COVID-19 Pfizer específicamente
- Tabla 0292 tiene 60+ códigos (varía por versión HL7 Local Guide)
- Marzo 2022 agregó nuevos códigos

### 3. **Financiamiento es Complejo**
- COVID requiere VXC50 (pandemic special funds)
- MediRec debe almacenar funding source por cada vacuna en BD
- Cambió en v2.1 y v2.2 del HL7 Local Guide

### 4. **Caracteres Especiales Rompen la Integración**
- PREIS no acepta acentos, ñ, caracteres Unicode
- Solución: sanitización pre-HL7 en application

### 5. **Guardian (NK1) es Crítico para Menores**
- Pacientes < 19 años requieren responsable
- Formato: `LastName^FirstName` (crucial)

### 6. **Ambiente de Staging != Producción**
- Lotes de vacunas en staging no existen en staging
- PREIS responde "Warning" pero acepta si campos requeridos presentes
- Producción funcionará bien si los datos son válidos

---

## Producción Checklist

Antes de pasar a producción, MediRec implementó:

- ✅ Dos apellidos en PID-5 (requerido)
- ✅ Segmento NK1 para menores (recomendado)
- ✅ OBX 64994-7 (Eligibility)
- ✅ OBX 30963-3 con VXC50 para COVID
- ✅ Rutina para eliminar acentos/ñ
- ✅ Validación de CVX codes
- ✅ Certificados mTLS renovables
- ✅ Logging/audit de cada VXU enviado
- ✅ Retry logic para fallos de conectividad
- ✅ Dashboard de monitoreo para compliance officer

---

## Referencias

- **HL7 v2.5.1 Local Implementation Guide (PR):** https://preis.salud.pr.gov/ (requiere acceso)
- **CDC CVX Vaccine Codes:** https://www2a.cdc.gov/vaccines/IIS/IISStandards/vaccines.asp?rpt=cvx
- **CDC VIS Dates:** https://www.cdc.gov/vaccines/hcp/vis/vis-dates.html
- **PREIS Testing Endpoint:** https://prst1web.stchealthops.com/phchub/HL7Server
- **Norma Castro Monge:** norma.castro@salud.pr.gov (Program Analyst, PR Health Department)

