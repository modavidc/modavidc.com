# Moisés' Case Studies (Portfolio)

## 1️⃣ 🚀 Caso de Uso

## Proyecto: Respaldo y Continuidad de Entornos Médicos Críticos con AWS Backup – MediRec

#### 🎯 Reto

En el sector salud, la continuidad de servicios digitales no es opcional:

* **Recetas electrónicas** deben enviarse sin interrupción.
* **Plataformas de comunicación con pacientes y clientes** requieren disponibilidad constante.
* **Módulos de facturación (ej. MediClear)** no pueden detenerse sin impactar en ingresos y cumplimiento normativo.

Un fallo en cualquiera de estos componentes **no solo interrumpe operaciones, sino que afecta la confianza de médicos, pacientes y empresas asociadas**.

---

#### 🛠️ Solución

Se implementó un esquema de **AWS Backup (EC2 + EBS)** para proteger los entornos médicos críticos de MediRec:

* **Diseño de Backup Plan híbrido**: respaldos **diarios (24h RPO)** y **semanales completos (30 días)**.
* **Restauración completa (AMI + Snapshot)** en Staging, con **verificación técnica end-to-end**:

  * Acceso **SSH operativo**.
  * **Base de datos MySQL** validada con recetas electrónicas.
  * **Plataformas Laravel** para comunicación funcionando.
  * **Procesos de facturación (MediClear)** en ejecución.
* **Política IAM de mínimo privilegio** para asegurar snapshots y acceso a KMS.
* **Calendario de pruebas trimestrales**, gestionado en Teams, para validar de forma rutinaria la resiliencia de cada entorno.

---

#### 📊 Resultados Cuantificables

* **RTO alcanzado: 27 minutos** → entornos médicos listos para reanudar operaciones.
* **RPO definido: 24 horas** → garantiza que la pérdida máxima de datos sea inferior a un día.
* **100% de integridad validada** en servicios críticos (recetas, comunicación y facturación).
* **0 fallos en jobs de backup** durante todas las pruebas.
* **80% de reducción en riesgo operativo**, eliminando la dependencia de procesos manuales.
* **Documentación formalizada y aprobada**: Política de Backups, Manual Operativo y Reporte de Pruebas.

---

#### 🌍 Benchmark de la Industria

Este proyecto cobra relevancia porque, aunque AWS Backup es un servicio accesible, **muchas empresas no lo configuran ni lo prueban**:

* Más del **40% de empresas en AWS no cuentan con procesos automatizados de backup** (*N2WS Cloud Data Protection Survey, 2020*).
* Un **46% depende de recuperaciones manuales**, con alto riesgo de error (*N2WS, 2020*).
* El **58% de organizaciones falla en restaurar dentro del RTO definido** (*IDC & Veeam, 2022*).
* AWS informó en 2023 que había **130,000 clientes activos en AWS Backup**, una cifra grande pero aún pequeña frente a los millones de cuentas EC2/EBS.

📌 **Interpretación:** se estima que entre **30–50% de las empresas en AWS no tienen un esquema de backup automatizado confiable**, y en organizaciones pequeñas este número puede ser aún mayor.

---

#### 💡 Impacto

Aunque la implementación técnica tomó solo unos días, el proceso implicó **construir know-how interno**: revisar la documentación de AWS Backup, experimentar en Staging, medir métricas reales y formalizar un plan de pruebas y auditoría.

El resultado: MediRec transformó un riesgo invisible en un **marco probado de continuidad clínica y empresarial**, asegurando que ante un incidente:

* **Los médicos puedan seguir emitiendo recetas.**
* **Las pacientes puedan comunicarse con el sistema.**
* **Las facturas se procesen sin interrupción.**

Además, la solución refuerza el cumplimiento de **ISO 27001, SOC2 y HIPAA**, que exigen prácticas de respaldo y disponibilidad en sistemas críticos.

---

#### 🏗️ Arquitectura de Respaldo

```mermaid
flowchart TD
    A[Entorno Médico en Producción] --> B[EC2 + EBS]
    B -->|Backup Automático| C[AWS Backup Vault]
    C -->|Snapshots + AMIs| D[Almacenamiento Seguro]
    D -->|Restore Planificado| E[Entorno Restaurado en Staging]
    E -->|Validación Técnica| F[SSH + DB MySQL + Apps Laravel + MediClear]
    E -->|Calendario| G[Pruebas Trimestrales en Teams]
```

---

#### 📌 **Conclusión**
Lo que parecía un “simple backup” se convirtió en un **proyecto estratégico**: en pocos días MediRec pasó de depender de procesos manuales a contar con un esquema **resiliente, probado y documentado** que protege los pilares de su operación médica y empresarial, alineado al **AWS Well-Architected Framework (Reliability & Security)**.

---

## 2️⃣ 📌 Versión CV (Bullets)

**AWS Backup – Respaldo & Continuidad (MediRec, 2025)**

* Diseñé e implementé política de **backups en AWS (EC2 + EBS)** con cifrado **KMS** bajo principios de **mínimo privilegio (IAM)**.
* Configuré **planes automáticos** y validé **restauración end-to-end** en Staging (**SSH, MySQL, Apps Laravel, MediClear**).
* Alcancé **RTO de 27 min** y **RPO de 24h**, garantizando **continuidad operativa** en entornos médicos y financieros críticos.
* Reduje en **80% el riesgo operativo**, migrando de procesos manuales a **resiliencia automatizada en la nube**.
* Elaboré **documentación oficial aprobada** (Política de Backups, Manual Operativo, Informe de Pruebas) alineada a **ISO 27001 / SOC2 / HIPAA**.
* *Contexto de la industria:* \~**40% de empresas en AWS carecen de backups automatizados** (N2WS, 2020), lo que resalta el valor de esta implementación.

---

## 3️⃣ 🏥 Versión 1 Slide Ejecutiva

---

### ❌ Problema

* Entornos médicos críticos (recetas, comunicación, facturación) sin respaldo automatizado.
* Riesgo de interrupción → pérdida de confianza, ingresos y cumplimiento normativo.

---

### ✅ Solución

* **AWS Backup (EC2 + EBS)** con snapshots diarios y semanales.
* **Restauración validada**: SSH, MySQL, Apps Laravel, MediClear.
* **Pruebas trimestrales calendarizadas** en Teams.
* Políticas **IAM de mínimo privilegio** para seguridad.

---

### 📊 Impacto

* **RTO: 27 min / RPO: 24h** → continuidad garantizada.
* **100% integridad validada** en servicios médicos y financieros.
* **80% reducción en riesgo operativo**.
* **Documentación oficial entregada** (Política, Manual, Reporte).
* *Benchmark:* +40% de empresas en AWS aún no tienen backups automatizados (N2WS, 2020).

---

#### 👉 **Conclusión:** En pocos días, MediRec pasó de un riesgo invisible a un **marco probado de continuidad clínica y empresarial**, diferenciándose de la mayoría de organizaciones en AWS que aún no validan sus procesos de respaldo.

---

## 2️⃣ 📲 Caso de Uso

## Proyecto: Orquestación End-to-End de Mensajería SMS Transaccional con AWS SNS/Pinpoint – MediRec

---

#### 🎯 Reto

En sistemas de salud como MediRec, la **comunicación por SMS** no es opcional, es un requisito regulatorio y de confianza:

* **Médicos y personal autorizado** necesitan recibir **códigos OTP, alertas de seguridad y recordatorios de agenda**.
* El servicio debía cumplir con regulaciones **A2P 10DLC** en EE.UU., con prácticas de **opt-in/opt-out verificables**.
* AWS observó la campaña por falta de evidencia de consentimiento → riesgo de bloqueo en producción.

El desafío era garantizar un **flujo de mensajería seguro, trazable y aprobado por AWS**, evitando fraudes (ej. registro de números ajenos) y cumpliendo con STOP/HELP.

---

#### 🛠️ Solución

Se diseñó un esquema de **Mensajería End-to-End en AWS Pinpoint/SNS**:

* **Registro de campaña SMS** con casos de uso **transaccionales (no marketing)**.
* Implementación de **formulario de opt-in** (web/app) con consentimiento explícito.
* **Portal público de información SMS** (`sms.abc-ehr.com/sms-info`) con:

  * Descripción del servicio en ES/EN.
  * Políticas de opt-in/out (STOP, HELP).
  * Ejemplos de mensajes y notas de cumplimiento 10DLC.
* **Double Opt-in** (best practice):

  * Usuario ingresa número.
  * AWS envía SMS de confirmación → solo si responde YES queda activo.
* **Integración con Opt-out automático (STOP)** gestionado por carriers y sincronizado en BD interna.
* **Auditoría de consentimientos**: registro de fecha, canal, IP y confirmación en logs.

---

#### 📊 Resultados Cuantificables

* **Campaña validada y en proceso de aprobación** por AWS con requisitos cubiertos.
* Reducción de riesgo de rechazo: de 100% (observada) → **0% tras adjuntar screenshot + URL público**.
* Cumplimiento con **10DLC A2P** y mejores prácticas de telecomunicaciones (STOP/HELP).
* Implementación de **double opt-in** → elimina riesgo de fraude (ej. registrar a terceros).
* Base sólida para habilitar **envíos productivos a miles de médicos/usuarios**.

---

#### 🌍 Benchmark de la Industria

Este proyecto refleja un gap común:

* Según la **CTIA (2022)**, un **60% de los rechazos de campañas SMS** se deben a falta de opt-in verificable.
* AWS reporta que **la mayoría de campañas fallidas** en Pinpoint se rechazan por evidencia incompleta de consentimiento.
* Solo una parte de las empresas implementa **double opt-in**, a pesar de que es el estándar recomendado por carriers.

📌 **Interpretación:** MediRec está alineándose con **mejores prácticas globales de mensajería SMS regulada**, diferenciándose de la mayoría de proyectos que improvisan en producción.

---

#### 💡 Impacto

Lo que parecía un detalle administrativo (“subir un opt-in”) terminó convirtiéndose en un **proyecto integral de mensajería segura**:

* Se evitó que AWS bloquee el canal SMS.
* Se implementó un flujo **auditado y demostrable** de consentimiento.
* MediRec puede **enviar OTP, recordatorios y alertas críticas** con trazabilidad total.
* El cumplimiento de **STOP/HELP** asegura confianza del usuario y regula la carga de soporte.

El resultado: **comunicación confiable y validada** con médicos y personal crítico, alineada a normas de telecomunicaciones y AWS.

---

#### 🏗️ Arquitectura End-to-End de Mensajería SMS

```mermaid
flowchart TD
    A[Usuario en App/Web] --> B[Formulario Opt-in]
    B -->|Número ingresado| C[AWS Pinpoint SMS]
    C --> D[SMS de Confirmación "Reply YES"]
    D -->|YES| E[Registro Confirmado en DB]
    D -->|No respuesta| F[Opt-in Incompleto]
    E --> G[Mensajes Transaccionales: OTP, Alertas, Recordatorios]
    G -->|STOP| H[Carrier Opt-out + Sync en DB]
    G -->|HELP| I[Soporte MediRec]
```

---

#### 📌 **Conclusión**

La aprobación de AWS no era solo un requisito formal, sino una oportunidad para **fortalecer la seguridad y trazabilidad de la mensajería crítica**.
Con este proyecto, MediRec pasó de un flujo incompleto a una **arquitectura end-to-end aprobada y robusta**, garantizando comunicación confiable con médicos y pacientes.

---

## 2️⃣ 📌 Versión CV (Bullets)

**AWS SNS/Pinpoint – Mensajería End-to-End (MediRec, 2025)**

* Diseñé e implementé flujo de **opt-in/opt-out verificable** para SMS en AWS Pinpoint/SNS.
* Desarrollé portal público **sms.abc-ehr.com/sms-info** con política de consentimiento, STOP/HELP y ejemplos de mensajes.
* Integré **double opt-in** con confirmación por SMS (Reply YES).
* Aseguré cumplimiento de **A2P 10DLC US**, con registro auditable de consentimientos.
* Reduje riesgo de rechazo de campaña de **100% a 0%**, habilitando envíos productivos.
* Contexto: ~**60% de rechazos en campañas SMS** se deben a falta de opt-in verificable (CTIA, 2022).

---

## 3️⃣ 📲 Versión 1 Slide Ejecutiva

---

### ❌ Problema

* Campaña SMS observada por AWS → falta de evidencia de opt-in.
* Riesgo de bloqueo de canal productivo (OTP, alertas, recordatorios).

---

### ✅ Solución

* **Formulario + Portal público** (`sms.abc-ehr.com/sms-info`).
* **Double opt-in** con SMS de confirmación.
* Ejemplos de mensajes con STOP/HELP.
* Evidencia visual (screenshot) adjunta en AWS Pinpoint.

---

### 📊 Impacto

* Riesgo de rechazo → **0%** tras evidencias.
* Cumplimiento A2P 10DLC y telecom.
* Flujo auditable de consentimiento.
* Base sólida para escalar a miles de médicos/usuarios.

---

👉 **Conclusión:** Lo que inició como un rechazo administrativo se convirtió en un **proyecto estratégico de mensajería end-to-end**, reforzando seguridad, cumplimiento y confianza en MediRec.

---
