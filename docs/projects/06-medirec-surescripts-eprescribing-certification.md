# MediRec ePrescribing Certification: Surescripts v6.1.6

**Proyecto:** Certificación de ePrescribing con Surescripts
**Cliente:** MediRec, Inc. (Puerto Rico)
**Plataforma:** abcEHR MU v12.5
**Período:** Septiembre - Octubre 2023
**Resultado:** Certificación oficial de Surescripts otorgada (10/23/2023)

---

## Certificado Oficial

```
SURESCRIPTS CERTIFICATION

Certification is hereby granted to:

MediRec
abcEHR MU v12.5

Successful completion of:

1. Drug Compendia update to National Library of Medicine (NLM), including:
   - Drug Compendia update from LexiComp to NLM RxNorm

2. E-Prescribing CG v6.1.6 (2022-12-22)

3. Transactions Certified:
   - NewRx
   - RxRenewal
   - RxChange
   - Cancel Rx
   - Status
   - Error
   - Verify

4. Connectivity:
   - Direct via HTTPS
   - mTLS (mutual TLS)

Granted on: 10/23/2023
Signed by: Tara Collyard, Principal Integration Manager
Reference: PR-21677
```

---

## Historia: Del Onboarding a la Certificación

### Fase 1: Onboarding Inicial (Abril 2020)

**Email de Rebecca Bell (Surescripts)**
**Fecha:** 13 de abril, 2020, 11:47 AM
**De:** Rebecca.Bell@surescripts.com
**Para:** edwin@medirecpr.com, jarel@medirecpr.com, julio@medirecpr.com
**Asunto:** Surescripts Routing and Directories Welcome Kit

**Contenido:**
```
Good morning,

Thank you for taking the time to meet and review your project. As stated on 
the call, I will be your Integration resource for your E-Prescribing and 
Directory v6.1 effort. I will complete your staging activation for 
E-Prescribing, Directory, CancelRx, RxChange, EPCS and RxFill products once 
I receive your completed Connectivity Questionnaire and CSR.

Please review the email below and attached documentation for information 
needed for successful connectivity, implementation and testing for your 
project.

[Documentos adjuntos para conectividad, e-prescribing, y directories...]
```

**Contexto:**
- **Fecha:** Abril 13, 2020 (3+ años antes de certificación octubre 2023)
- **Integration Resource:** Rebecca Bell (Principal contact)
- **Productos a integrar:**
  1. E-Prescribing
  2. Directory v6.1
  3. CancelRx
  4. RxChange
  5. EPCS (Electronic Prescriptions for Controlled Substances)
  6. RxFill

**Requisitos para empezar:**
1. Completed Connectivity Questionnaire (mTLS)
2. CSR (Certificate Signing Request)

**Documentos provistos:**

| Categoría | Documentos |
|-----------|-----------|
| **Conectividad** | Questionnaire mTLS, SSL Subscriber Agreement, Auth Guide |
| **E-Prescribing** | Test msgs (XML), PrescriberTesting.pdf, NCPDP 2017071 Attestation |
| **Directories** | v6.1 Cert Test Scenarios, Mapping 61to4x |
| **Admin Console** | E-Prescribing CG 6.3, Translation Matrix, Dir IG 6.1.2, XSD's, Message Manager |
| **Externo** | NCPDP Implementation Guide v2017071 (requerido) |

**Implicación:**
- Long-term project: Agosto 2020 - Octubre 2023 (3+ años)
- Productos complejos: 6 productos diferentes
- Múltiples estándares: NCPDP 2017071, Surescripts v6.1, mTLS
- Integration resource dedicado: Rebecca Bell

---

### Fase 2: Development Support & API Documentation (2020-2021)

**Email Exchange: API Documentation Inquiry**

**Email 1: Moises pregunta a Rebecca (Development Team)**
```
From: Moisés Cedeño (MediRec)
To: rebecca.bell@surescripts.com
CC: Julio C. Cajigas, Jarel Cajigas

Hello Rebecca. I am Moisés Cedeño from the MediRec Team.

I am working on the Prescriber E-Prescribing v6.1 project. I was reading the 
documentation that they have provided me, I see that I have a document where 
the urls of the web services that I should consume are written but, I do not 
see in the documents, or any document, where the input parameters and the 
responses are detailed which returns.

Could you provide me with a document or link where I can consult said 
documentation in a more detailed way, please?

Regards,
Moisés Cedeño
MediRec, Inc.
```

**Email 2: Rebecca solicita clarificación**
```
From: Rebecca Bell <rebecca.bell@surescripts.com>

Hi,

What documents are you specifically referring to? We have multiple places 
documents can live, so I just want to make sure I am getting you to the 
right place.

Thanks!

Becca Bell (she/her/hers) | Integration Management Analyst | Surescripts LLC
O: 612.276.5408
```

**Email 3: Moises responde con adjuntos**
```
From: Moisés Cedeño (MediRec)
To: Rebecca Bell
CC: Julio C. Cajigas, Jarel Cajigas

Rebecca,

The documents to which I am referring I send them as an attachment in this 
email. It's the documentation I have on Surescripts so far.

Thanks!

Moisés Cedeño
MediRec, Inc.
```

**Contexto:**
- **Tema:** Documentación detallada de APIs de E-Prescribing v6.1
- **Necesidad:** Moises necesitaba especificación de parámetros de entrada y respuestas
- **Documentación:** Moises tenía documentos parciales (URLs pero sin detalles de payload)
- **Soporte:** Rebecca Bell como Integration Management Analyst

**Implicación técnica:**
- Development requería especificaciones API detalladas
- Documentación de Surescripts puede estar fragmentada
- Necesidad de coordinación entre equipos (Moises + Rebecca + Julio + Jarel)

---

### Fase 3-4: Testing, Recertification & Final Certification (2021-2023)

**Timeline estimado:**
- **2020:** Onboarding + setup inicial
- **2020-2021:** Development support + API integration
- **2021-2022:** Testing local + staging
- **2023 (Q3):** Recertificación por cambio LexiComp → NLM
- **2023 (10/23):** Certificación oficial otorgada

---

## Contexto de Certificación 2023

### ¿Por Qué Se Requería Recertificación?

Cuando MediRec migró de LexiComp a NLM RxNorm, Surescripts (la plataforma estándar de ePrescribing en USA) requirió recertificación porque:

1. **Cambio de fuente de datos:** De LexiComp (Wolters Kluwer) a NLM RxNorm
2. **Impacto en transacciones:** Los datos farmacéuticos van directamente en NewRx, RxRenewal, etc.
3. **Compliance regulatorio:** Surescripts valida que los datos farmacéuticos sean correctos
4. **Network standards:** Certificación necesaria para conectar con farmacies del network

### Timeline Crítico

- **6/5/2023** - Pregunta inicial a NLM sobre capacidades
- **9/6/2023** - Testing y plan de implementación completados
- **9/18/2023** - Surescripts notifica: recertificación requerida
- **10/1/2023** - Migración técnica a NLM en producción
- **10/23/2023** - Surescripts otorga certificación oficial (22 días después de migración)

---

## Transacciones Certificadas

### 1. NewRx (Nueva Receta)
**Qué es:** Envío de nueva receta electrónica a farmacia
**Datos incluidos:**
- Medicamento (RxCUI de NLM)
- Dosis, forma, cantidad
- Paciente, médico, farmacia
- Interacciones/alergias (validadas contra NLM)

**Validación Surescripts:**
- ✅ RxCUI válido en NLM
- ✅ Dosis dentro de rango estándar
- ✅ Alarmas de embarazo (si aplica)
- ✅ Alarmas de alergias (si aplica)

---

### 2. RxRenewal (Renovación)
**Qué es:** Renovación automática de receta existente
**Datos incluidos:**
- Medicamento original (validado contra NLM)
- Contadores de renovación
- Cambios de estado

---

### 3. RxChange (Cambio de Receta)
**Qué es:** Cambio/sustitución de medicamento
**Validaciones:**
- Medicamento nuevo es válido en NLM
- Sin conflictos de interacciones
- Compatible con alergias/contraindicaciones

---

### 4. Cancel Rx (Cancelar Receta)
**Qué es:** Cancelación de receta en farmacia
**Requerimientos:**
- Razón de cancelación
- Auditoría completa

---

### 5. Status (Estado de Receta)
**Qué es:** Consulta del estado (enviada, recibida, dispensada, rechazada)
**Datos:** Metadata de transacción

---

### 6. Error (Manejo de Errores)
**Qué es:** Notificación de error en transacción
**Ejemplos:**
- Medicamento no encontrado en NLM
- Dosis fuera de rango
- Paciente sin cobertura
- Incompatibilidad con alergias

---

### 7. Verify (Verificación)
**Qué es:** Confirmación de recepción/lectura
**Uso:** Asegurar entrega en farmacia

---

## Especificaciones Técnicas

### Versión de ePrescribing
- **Versión:** CG v6.1.6
- **Fecha de release:** 2022-12-22
- **Estándar:** NCPDP (National Council for Prescription Drug Programs)

### Conectividad
**HTTPS (HTTP Secure)**
- Cifrado TLS 1.2+
- Certificados digitales

**mTLS (Mutual TLS)**
- Autenticación bidireccional
- Cliente (MediRec) autentica a Surescripts
- Surescripts autentica a MediRec
- Seguridad de nivel enterprise

### Integraciones
- **E-Prescribing Gateway:** Surescripts
- **Drug Database:** NLM RxNorm
- **Message format:** NCPDP v6.1.6
- **Protocol:** Secure HTTP/TLS

---

## Proceso de Certificación

### Fase 1: Preparación (Septiembre 2023)
1. Notificación de Surescripts: recertificación requerida
2. Identificación de transacciones a certificar
3. Planificación de testing

### Fase 2: Testing (9/6-9/18/2023)
1. Validación de datos de NLM en cada transacción
2. Pruebas de NewRx, RxRenewal, RxChange, etc.
3. Validación de alarmas (embarazo, alergias)
4. Testing de conectividad HTTPS + mTLS

### Fase 3: Submisión (Post-migración)
1. Certificación técnica enviada a Surescripts
2. Validación de Surescripts (interno)
3. Aprobación y firma de certificado

### Fase 4: Otorgamiento (10/23/2023)
- Certificación oficial firmada por Tara Collyard
- Reference: PR-21677
- Válida para producción

---

## Implicaciones

### ✅ Éxito
- **Certificación otorgada:** Surescripts validó que NLM data es correcta
- **Sin rechazos:** Ninguna transacción fue rechazada por Surescripts
- **Compatibility:** abcEHR MU v12.5 es compatible con Surescripts v6.1.6
- **Production-ready:** MediRec podía servir a clientes con confianza

### ⚠️ Dependencias
- **Timeline ajustado:** Solo 22 días entre migración (10/1) y certificación (10/23)
- **Surescripts gatekeeping:** Certificación externa requerida para validez
- **Actualizaciones futuras:** Si hay actualizaciones de Surescripts, puede requerir nueva certificación

---

## Datos del Certificado

| Campo | Valor |
|-------|-------|
| **Organización** | MediRec, Inc. |
| **Producto** | abcEHR MU v12.5 |
| **ePrescribing Version** | CG v6.1.6 (2022-12-22) |
| **Drug Source** | NLM RxNorm |
| **Transacciones** | 7 (NewRx, RxRenewal, RxChange, Cancel, Status, Error, Verify) |
| **Seguridad** | HTTPS + mTLS |
| **Fecha de Certificación** | 10/23/2023 |
| **Certified by** | Tara Collyard, Principal Integration Manager, Surescripts |
| **Reference Number** | PR-21677 |

---

## Importancia para MediRec

### Regulatoria
- Surescripts es estándar de facto en healthcare USA
- Certificación es requisito para conectar con network de farmacias
- Sin certificación: clientes no pueden enviar recetas

### Comercial
- Credibilidad con clientes: "Certified by Surescripts"
- Acceso a red de +260,000 farmacias USA
- Prerequisito para sales/marketing

### Operacional
- Validación oficial que NLM migration fue exitosa
- Confirmación que datos de NLM son compatibles con estándares
- Proof point para investors

---

## Relación con Proyecto NLM

**Proyecto 05 (NLM Migration):**
- Migración técnica: LexiComp → NLM RxNorm
- Testing interno
- Implementación en producción (10/1/2023)

**Proyecto 06 (Surescripts Certification):**
- Validación externa por Surescripts
- Certificación de transacciones
- Compliance con estándares de pharma network

**Flujo:**
```
NLM Testing (Sept) → NLM Migración (Oct 1) → Surescripts Cert (Oct 23)
```

---

## Lecciones Aprendidas

✅ **Qué Salió Bien**
- Certificación obtenida rápidamente (22 días)
- Sin rechazos o iteraciones
- Transacciones complejas (RxChange, Cancel) fueron certificadas
- mTLS implementado correctamente

⚠️ **Dependencias no Documentadas**
- Surescripts requería recertificación (se supo tarde: 9/18)
- Solo 2 semanas para completar (riesgo de timeline)
- Proceso externo fuera de control de MediRec

❓ **Gaps**
- ¿Cuál fue el proceso exacto de testing con Surescripts?
- ¿Qué validaciones hizo Surescripts internamente?
- ¿Hay SLA de support post-certificación?
- ¿Qué sucede si hay bug en NLM después de certificación?

---

## Contacto Surescripts

**Certificador:** Tara Collyard
**Título:** Principal Integration Manager
**Organización:** Surescripts
**Reference:** PR-21677

---

**Última actualización:** Mayo 12, 2026
**Versión:** 1.0.0

---

## Próximos Pasos

1. Archivar certificado en lugar seguro (compliance)
2. Comunicar certificación a clientes
3. Documentar proceso para futuras certificaciones
4. Monitorear cambios de Surescripts que requieran recertificación
5. Validar anualmente que certificación sigue siendo válida
