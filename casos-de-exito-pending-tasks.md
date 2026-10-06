# Casos de éxito — pendientes para publicar

Objetivo: mínimo para salir. Dos caminos por caso con evidencia rota: ocultar el carousel de imágenes en esta versión, o dedicar un día a conseguir las capturas reales y publicar completo.

---

## ✅ Completos — no tocar (2/12)

- **surescripts-certification** — texto y evidencia propia, 100% correcto.
- **licencias-farmaceuticas** — texto y evidencia propia (las 4 imágenes `nlm-migration--*` sí son de este caso).

## ⚠️ Texto completo, evidencia prestada de otro caso (8/12)

El texto ya está escrito y bien. Solo el `src` de las 4 imágenes del `EvidenceCarousel` apunta a capturas de Surescripts o NLM que no son de este caso. Archivo: `components/{slug}-detail.tsx`, array `evidenceSlides`.

### medirec-aws
- [ ] Captura: AWS Cost Explorer mostrando $912 → $318/mes
- [ ] Captura: inventario/auditoría de infraestructura antes (mayo 2023)
- [ ] Captura: análisis de actividad CloudWatch (90 días, ORES vs Recetas)
- [ ] Captura: análisis de break-even Savings Plans 3 años
- Decisión: [ ] ocultar carousel por ahora / [ ] conseguir capturas

### medirec-backup-dr
- [ ] Captura: configuración AWS Backup Plan (4 capas)
- [ ] Captura: informe de restore, 162/162 registros íntegros
- [ ] Captura: política RTO/RPO (críticos vs estándar)
- [ ] Captura: diagrama arquitectura de backup por ambiente
- Decisión: [ ] ocultar carousel por ahora / [ ] conseguir capturas

### t-cuida-multitenant
- [ ] Captura: CloudWatch response times bajo carga (3 escenarios)
- [ ] Captura: cost envelope $672–$1,065/mes por escenario
- [ ] Captura: error rate bajo los 3 escenarios
- [ ] Captura: diagrama multi-tenant isolation (3 capas)
- Decisión: [ ] ocultar carousel por ahora / [ ] conseguir capturas

### t-cuida-audit
- [ ] Captura: dashboard score 41 → 78/100 por dimensión
- [ ] Captura: antes/después VoiceController (3,008 LOC → 22 LOC stub)
- [ ] Captura: test coverage 9.7% → 99%, CI gates
- [ ] Captura: framework de 10 dimensiones, scores inicial/final
- Decisión: [ ] ocultar carousel por ahora / [ ] conseguir capturas

### preis-integration
- [ ] Captura: diagrama de arquitectura PREIS Integration
- [ ] Captura: código HL7 v2.5.1 Builder / Gateway Laravel
- [ ] Captura: Postman, envío VXU al endpoint PREIS
- [ ] Captura: tabla 0292 (62 códigos de vacunas)
- Decisión: [ ] ocultar carousel por ahora / [ ] conseguir capturas

### ores-laboratory-api
- [ ] Captura: diagrama de flujo doctor → lab → resultado
- [ ] Captura: integración C# abcEHR, serialización de órdenes
- [ ] Captura: endpoint /pending en Postman
- [ ] Captura: HL7 storage / audit trail (40K órdenes)
- Decisión: [ ] ocultar carousel por ahora / [ ] conseguir capturas

### vipapp-patient-ehr
- [ ] Captura: schema SQLite (11 tablas) + réplica MySQL
- [ ] Captura: diagrama BLoC architecture (14 BLoCs)
- [ ] Captura: algoritmo de offline sync (Workmanager)
- [ ] Captura: pantallas principales de la app en producción
- Decisión: [ ] ocultar carousel por ahora / [ ] conseguir capturas

### grupero
- [ ] Captura: pantallas principales Grupero v0.2.0
- [ ] Captura: parser (408 líneas), formatos iOS/Android/US/ES
- [ ] Captura: UpgradeSheet / paywall freemium
- [ ] Captura: spec 01 del parser, CAs verificados
- Decisión: [ ] ocultar carousel por ahora / [ ] conseguir capturas

## ℹ️ Sin evidencia visual, solo texto (2/12)

- **indexum-agrotech** — sin `EvidenceCarousel`. Decidir si vale la pena agregar capturas o se queda solo texto.
- **indexum-autoservicio** — mismo caso.

---

## Otras secciones revisadas (pedido: experiencia, metodología, home)

### ✅ /metodologia
Revisado completo. Sin problemas — todos los links (`/casos-de-exito/detail/medirec-aws`, `/casos-de-exito/detail/licencias-farmaceuticas`) apuntan a rutas reales, contenido completo.

### ✅ /experiencia — arreglado
- ~~CV roto: el link apuntaba a `/assets/cv/moises-cedeno-cv.pdf`, el archivo real se llama `cv.pdf`~~ → **arreglado**, ya apunta a `/assets/cv/cv.pdf` (197KB, confirmado que es un PDF real, no vacío).

### ⚠️ / (home) — arreglado en parte, falta una decisión de contenido

**Arreglado:**
- ~~Link roto `/casos-de-exito/medirec-aws` (faltaba `/detail/`)~~ → arreglado
- ~~Link roto `/casos-de-exito/licencias-farmaceuticas` (faltaba `/detail/`)~~ → arreglado
- ~~"Ver los 6 testimonios →" pero la página real tiene 11~~ → arreglado a "Ver los 11 testimonios →"

**Resuelto:**
- ~~Tarjeta "Lab Middleware" en el home~~ → reemplazada con la historia real de **ores-laboratory-api** (40K+ órdenes/mes, 5 días → 4h, 25+ labs), link corregido a `/casos-de-exito/detail/ores-laboratory-api`.
- ~~KPI bar del home "Lab Middleware · 2022"~~ → reemplazado por "40K+ Órdenes de laboratorio/mes · ORES API · 2022".
- ~~Bullets "-70% tiempo clínico" en /experiencia (timeline + dominios)~~ → reemplazados con los números reales de ORES.
- ~~Meta descriptions con "-70% tiempo clínico" en `/casos-de-exito` y `/testimonials`~~ → actualizadas.
- Bonus encontrado: la meta description de `/casos-de-exito` también tenía "+400% throughput IoT" sin caso real que lo respalde (el proyecto que lo justificaba, el bridge TCP/IP de T-Cuida, es del sistema viejo que ya no existe). La quité en vez de inventar un reemplazo — mismo criterio que con la cita de Ricardo, no fabricar números.

**Pendiente — necesita tu decisión:**
- [ ] **KPI bar del home** (`app/page.tsx`): dice "**-200%** Tiempo de respuesta · T-Cuida · 3min → 1min" — la matemática no cierra (3min→1min es -66%, o "3x más rápido", nunca -200%). Esa métrica también es del caso "T-Cuida dashboard" (el sistema viejo, sin página propia hoy). Corregir el número, o reemplazar la métrica entera por una de un caso real de T-Cuida (ej. multitenant: 20K usuarios validados).

### No revisado todavía
/casos-de-exito (listado), /contact, /testimonials (ya cubierto en el otro checklist), /labs — avísame si quieres que los pase también.
