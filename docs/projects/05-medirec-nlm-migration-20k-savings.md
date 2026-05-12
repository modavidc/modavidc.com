# MediRec NLM Migration: $20K/Año en Ahorros

**Proyecto:** Migración de LexiComp a NLM RxNorm
**Cliente:** MediRec, Inc. (Puerto Rico)
**Período:** 2023-2024
**Resultado:** $20K/año ahorrados, estándar federal, escalabilidad ilimitada

---

## Contexto

### El Problema

MediRec pagaba **$20,000 USD anuales** a Wolters Kluwer por licencia de LexiComp para su módulo de eRx. Decisión simple: ¿realmente necesitamos esos $20K cuando NLM RxNorm ofrece gratis los mismos datos?

**Problemas con LexiComp:**
- Costo fijo sin justificación
- Vendor lock-in (dependencia total)
- Renovación anual con sorpresas de precios
- Datos proprietarios (no se pueden migrar)

### Por Qué NLM?

NLM RxNorm contiene todo lo que MediRec necesita:
- Nombres de medicamentos
- Dosis estándar
- Interacciones
- Contraindicaciones
- Códigos estándar (RxCUI, NDC)

**Y es GRATIS, open source, estándar federal (FDA/NIH).**

---

## Comparación: LexiComp vs NLM

| Aspecto | LexiComp | NLM | Winner |
|---------|----------|-----|--------|
| **Costo anual** | $20K | $0 | 🟢 NLM |
| **Vendor lock-in** | Sí | No | 🟢 NLM |
| **Estándar federal** | No | Sí (FDA/NIH) | 🟢 NLM |
| **UX/Soporte** | Excelente | Básico | 🟡 LexiComp |
| **Escalabilidad** | Limitada | Ilimitada | 🟢 NLM |

**Decisión:** Migrar a NLM. Los $20K/año son inversión real en producto.

---

## Implementación (Octubre 2023)

**Timeline clave:**
- Junio 2023: Equipo valida capacidades NLM (Julio, Jessel, Moises)
- Septiembre 2023: Testing completado, plan aprobado
- **Octubre 1, 2023:** Migración en producción (2 horas downtime)
- Octubre 23, 2023: Certificación oficial de Surescripts
- Mayo 2024: Rollout a 11+ clientes

**Qué se migró:**
- LexiComp API → NLM RxNorm Server (local)
- Nuevo nombre: eRx NLM Server
- Requisitos: SQL Server 2017+, 16GB RAM, 500GB-1TB storage

---

## Capacidades Técnicas Validadas

### NLM tiene capacidades clínicas (confirmado por Dr. Olivier Bodenreider):

**1. Alergias a medicamentos**
- SNOMED CT: Sulfonamide-containing product (ID: 763875007)
- MED-RT: Sulfonamides (ID: D013449)
- USCDI recomienda SNOMED CT

**2. Contraindicaciones en embarazo**
- MED-RT links ingredientes a "pregnancy" vía relación `CI_with`
- Ejemplo: Methotrexate → CI_with → Pregnancy

**3. Interacciones medicamentosas**
- API disponible para búsqueda
- Rate limit: 20 req/seg (suficiente)

Esto respondió directamente a la pregunta original de Moises (6/5/2023): "¿NLM tiene Drug-Allergy y Drug-Pregnancy Risk Factors?" **Respuesta: SÍ.**

---

## Certificación Surescripts

Para conectar con +260K farmacias en USA, se requería certificación de Surescripts. **Logrado 10/23/2023** (22 días post-migración):

- ✅ ePrescribing CG v6.1.6
- ✅ 7 transacciones certificadas (NewRx, RxRenewal, RxChange, Cancel, Status, Error, Verify)
- ✅ HTTPS + mTLS (256-bit encryption)
- ✅ NCPDP 2017071 compliance

---

## Impacto Financiero

| Período | Ahorro |
|---------|--------|
| **Año 1** | $20K |
| **5 años** | $100K |
| **10 años** | $200K |

Más allá del dinero: sin vendor lock-in, estándar federal (NIH es más estable que Wolters Kluwer).

---

## Clientes en Rollout (Mayo 2024)

11+ clientes programados para migración:
GMFS, Jenifer Cruz Bracero, Jose Roman Carlo, North Shore Cardiology, Wilma Caro, Riverview Medical Center, Delia Torres, Carlos Miranda, Xiomara Cruz Rincon, Yasmin Fuentes, Reynaldo Gomez

Estrategia: rollout programado (no big bang), soporte dedicado por cliente.

---

## Gaps Documentados

Patrón recurrente: "acá siempre tenemos el mismo problema... no se termina de implementar ni se documenten las decisiones."

**Faltó documentación de:**
- ADR (Architectural Decision Record)
- Migration scripts + rollback plan
- Performance baselines (LexiComp vs NLM)
- Runbooks operativos
- Post-mortem documentado

**Recomendaciones:**
1. Crear ADR-001: NLM vs LexiComp
2. Documentar migration scripts
3. Establecer proceso de post-mortem
4. Crear runbook: "New drug not in NLM"

---

**Última actualización:** Mayo 12, 2026
**Versión:** 2.0 (Resumen ejecutivo)
**Documentación completa:** Ver `05-medirec-nlm-migration-20k-savings-full.md`
