# MediRec AWS Optimization: Del Caos al Control

**Proyecto:** Auditoría y Optimización de Infraestructura AWS
**Cliente:** MediRec, Inc.
**Período:** 2023 (3 meses)
**Resultado:** -65% de costos ($912 → $318/mes), infraestructura documentada y controlada

---

## Contexto

### El Problema Real

Nadie en MediRec sabía qué corría en cada servidor de AWS o si era seguro eliminar algo. La infraestructura había crecido sin orden:

- **15 volúmenes EBS** sin política de respaldo documentada
- **Todas las bases de datos** corriendo en UN ÚNICO servidor EC2 (punto único de falla crítico)
- **Instancias legacy** pagándose pero con baja o nula actividad
- **Modelo de compra:** 100% on-demand, sin reservas ni Savings Plans
- **Backups:** Manuales, sin SLA, sin RTO/RPO definido
- **Compliance HIPAA:** Sin documentación de cifrado o retención
- **Factura mensual:** $912 USD, sin justificación clara de qué generaba cada costo

El equipo tenía **miedo de tocar nada** porque sin documentación, cualquier cambio podía romper producción.

### Por Qué Me Llamaron

MediRec necesitaba:
1. Auditoría completa: qué corría dónde y cuánta actividad real tenía
2. Plan de optimización sin riesgo (backups defensivos antes de eliminar)
3. Ejecución **sin downtime** (sistema en producción 24/7)
4. Documentación auditable para compliance HIPAA

---

## Solución: Plan de 4 Fases

### Fase 1: Auditoría Completa (Semanas 1-2)

**Deliverables:**
- Mapeo de todos los servicios por servidor
- Análisis de logs/CloudWatch para actividad real
- Identificación de recursos huérfanos (Elastic IPs, backups viejos, snapshots obsoletos)

**Hallazgos clave:**
- **Recetas:** 1,665,466 envíos totales → alta demanda constante → **MANTENER**
- **ORES API:** 34 envíos todo el año → baja actividad → **CONSOLIDAR**
- **PREIS:** 34 envíos todo el año → baja actividad → **CONSOLIDAR**
- **Otros servicios:** VIPRec, Scriptcase, CPortal, SMS API → varios niveles de actividad

**Decisión:** Separar en 3 entornos con bases de datos independientes:
- **Production:** Servicios activos con BD multi-AZ (Recetas, VIPRec, SMS)
- **Staging:** Todos los staging consolidados con datos anonimizados
- **Development:** Entorno exclusivo para desarrollo

---

### Fase 2: Respaldos Defensivos (Mayo 15-29)

**Procedimiento:**
1. Respaldar ALL EC2 instances → snapshots EBS
2. Respaldar ALL Elastic IPs
3. Documentar cada backup con fecha/hora
4. Validar integridad sin tocar producción

**Por qué primero:** Sin respaldos, cualquier error es irreversible. Mejor perder días documentando que datos.

---

### Fase 3: Destroy (Mayo-Junio)

**Qué se eliminó:**
- Instancias EC2 verificadas como inactivas
- Elastic IPs huérfanas
- Snapshots/backups obsoletos (>6 meses sin uso)
- Volúmenes EBS detachados

**Precaución:** Se eliminaba gradualmente, validando que nada se rompía en producción.

---

### Fase 4: Reduce y Re-comprar (Junio-Julio)

**Right-sizing:**
- Redimensionar instancias EC2 basado en percentil 95 de utilización real
- Reducir volúmenes EBS que estaban sobredimensionados
- Consolidar DBs pequeñas a instancias compartidas (donde era seguro)

**Re-comprar:**
- Cambiar modelo de compra: on-demand → Reserved Instances + Savings Plans
- Oferta: **1-año ($451/mes)** o **3-años ($318/mes)**
- Flexibilidad: on-demand para picos, reservas para carga base

---

## Números Reales

### Desglose de Costos (Antes)

| Servicio | Costo |
|----------|-------|
| EC2 (instancias, EBS) | $500+ |
| RDS | $150+ |
| Data Transfer, ALB, Route 53, SNS, SES | $150+ |
| Support | $112 |
| **Total** | **$912/mes** |

### Desglose de Costos (Después - 3 años SP)

| Fase | Costo | Reducción |
|------|-------|-----------|
| Después de Destroy | $776.29 | -$136.65 (15%) |
| Después de Reduce | $530.69 | -$245.60 (31%) |
| Con Savings Plan 1-año | $451.09 | -$79.60 (15%) |
| Con Savings Plan 3-años | **$318.49** | **-$212.20 (40%)** |

### Ahorro Final

- **Mensual:** $912 → $318 = **$594 ahorrados/mes**
- **Anual:** ~$7,128 (con 3-años SP) o ~$4,752 (con 1-año SP)
- **Total en 3 años:** ~$21,384 ahorrados

---

## Lo Que Se Hizo, Punto por Punto

✅ **Documentación completa**
- Qué corría en cada servidor
- Actividad real de cada servicio
- Propósito de cada recurso

✅ **Ownership total de la infraestructura**
- Todos los servidores mapeados
- Responsabilidades claras
- Runbooks de operación

✅ **Rediseño de arquitectura de bases de datos**
- De: Todas las DBs en EC2 (punto único de falla)
- A: RDS multi-AZ en producción + EC2 en staging/dev

✅ **Eliminación de recursos RDS no usados**
- Identificación de read replicas innecesarias
- Consolidación de bases de datos pequeñas

✅ **Separación de entornos**
- Production (activos, multi-AZ)
- Staging (datos anonimizados, single-AZ)
- Development (exclusivo, low-cost)

❌ **Savings Plans (PROPUESTO PERO NO EJECUTADO)**
- Se propusieron 1-año y 3-años
- Nunca se llegó a implementar (cambio de prioridades en la empresa)
- Este fue un punto débil: el plan estaba listo pero sin follow-up

---

## Impacto Operacional

### Antes
- Equipo asustado de tocar infraestructura (¿qué se rompe?)
- Sin visibilidad de costos por servicio
- Sin SLA de respaldo
- Punto único de falla en bases de datos
- Decisiones a ciegas

### Después
- Infraestructura 100% documentada y auditable
- Visibilidad total de costos
- Plan de respaldo implementado (ver proyecto Backups & DR)
- Bases de datos replicadas (multi-AZ)
- Decisiones basadas en datos (actividad real)

---

## Riesgos Identificados y Mitigados

| Riesgo | Mitigación | Estado |
|--------|-----------|--------|
| Downtime durante optimización | Backup defensivo primero, ejecución gradual | ✅ Mitigado |
| Perder datos al eliminar recursos | Respaldos en 3 capas (snapshots, AMIs, Glacier) | ✅ Mitigado |
| AWS bill no baja (expectativa irreal) | Análisis detallado pre-implementación | ✅ Validado |
| Savings Plans no se usan (commit sin follow-up) | Documentación clara, pero depende de aprobación | ⚠️ No ejecutado |

---

## Lecciones Aprendidas

### ✅ Qué Funcionó
1. **Auditoría primero:** Entender antes de optimizar
2. **Backups defensivos:** Cero riesgo de pérdida de datos
3. **Documentación completa:** El equipo puede mantener solo
4. **Ejecución gradual:** Sin disruption a producción

### ⚠️ Qué Faltó
1. **Follow-up en Savings Plans:** Plan listo pero sin ejecución
2. **Automatización de restore:** Manual hasta ahora (mejorado en Backups & DR)
3. **Monitoreo de costos continuo:** Necesita revisión mensual para mantener

---

## Próximos Pasos (Roadmap)

### Corto Plazo (Completado en Backups & DR)
- ✅ Implementar validación mensual de backups con restore testing
- ✅ Crear manual operativo de disaster recovery
- ✅ Definir calendario de pruebas de resiliencia

### Mediano Plazo
- 📋 Ejecutar Savings Plans 3-años (pendiente aprobación)
- 📋 Implementar cifrado KMS en todos los volúmenes
- 📋 Automatizar restore con AWS CLI/SDK

### Largo Plazo
- 📋 Preparar contingencia multi-región (Google Cloud)
- 📋 Implementar auto-scaling basado en demanda real
- 📋 Migrar Amazon Linux 2 (EOL 2026) → Amazon Linux 2023

---

## Documentos Relacionados

- **Política de Backups:** `/Empresa/Documentación/AWS/Backups-DR/Política-Backups-v1.0.0.docx`
- **Manual Operativo de Backups:** `/Empresa/Documentación/AWS/Backups-DR/Manual-Operativo-Backups-v1.0.0.docx`
- **Calendario de Pruebas:** `/Empresa/Documentación/AWS/Backups-DR/Calendario-Anual-Backups-2025-2026.docx`

---

## Conclusión

Este proyecto **transformó un activo invisible y riesgoso en infraestructura controlada, documentada y auditable.**

El valor real no fue solo el 65% de ahorro en costos (aunque importante), sino:
1. **Visibilidad:** El equipo entiende qué tienen
2. **Confianza:** Pueden hacer cambios sin miedo
3. **Compliance:** HIPAA documentado
4. **Base para crecer:** Arquitectura escalable

**En números:** $7,128/año ahorrados, infraestructura resiliente, cero downtime en el proceso.
