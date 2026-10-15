# Bitácora de modavidc.com

Histórico de checkpoints de `STATUS.md`, archivado antes de recortar. Orden cronológico ascendente.

---

## Checkpoint, 14 julio 2026 (diseño anterior, pre-rediseño de octubre)

Rama activa en ese momento: `v0.2.0`, 17 commits adelante de origin, nada pusheado.

### Completo en esa sesión
- Build de producción en Docker verificado pasando limpio.
- Entorno de dev con `docker-compose.dev.yml` funcionando en `localhost:3000`.
- Bugs de contenido/links arreglados: `app/robots.ts` apuntaba a `moises.dev` (dominio viejo); `app/sitemap.ts` tenía 7 slugs muertos reemplazados por los 12 reales; Home con links rotos a casos, contador de testimonios desactualizado, tarjeta "Lab Middleware" apuntando a ruta inexistente reemplazada por la historia real de `ores-laboratory-api`; bug de matemática en KPI bar ("-200%" imposible).
- Limpieza de código muerto: sistema viejo de casos de éxito huérfano, página `/status` completa (demo de v0.dev, nunca real).
- Testimonios (`components/testimonials-v2.tsx`, ya no existe): Arístides removido, Ricardo Carrillo agregado (cita sin validar), 11 testimonios con link de LinkedIn.

### Pendiente que quedó anotado en ese momento
- Archivos personales sueltos detectados como riesgo antes de pushear: `docs/personal/autoconocimiento_*.md`, `docs/job-applications/`, `docs/career/CV_LINKEDIN.md`, `docs/raw/`. Ver nota de octubre más abajo: parte de esto terminó pusheado de todos modos antes de que se armara el `.gitignore` que los excluye ahora.
- Deploy al servidor (DNS, Traefik, `.env` en el servidor), fuera del alcance de Claude, tarea del usuario.
- 8 de 12 casos de éxito con evidencia visual pendiente.
- Testimonios esperando respuesta de 11 personas reales.

Todo este sistema de testimonios, casos de éxito con evidencia y las páginas `/contact`, `/metodologia` quedaron completamente reemplazados por el rediseño de octubre 2026 (ver checkpoint de abajo). Los archivos `*-pending-tasks.md` que trackeaban esto se borraron del repo por quedar obsoletos.

---

## Checkpoint, 14 octubre 2026 (rediseño completo sobre /design-handoff)

Rama activa: `v0.3.0`.

### Qué cambió
- Rediseño completo del sitio siguiendo `/design-handoff` (handoff de diseño con prototipos `.dc.html`, `fx.js`, `VOZ.md`): 5 rutas nuevas (`/`, `/sobre-mi`, `/experiencia`, `/casos`, `/productos`), tokens de diseño claro/oscuro, `fx.js` portado a `lib/fx.ts`, soporte ES/EN con persistencia.
- Se eliminaron `/casos-de-exito` (+ 13 páginas detail con evidencia prestada), `/contact`, `/metodologia`, `/labs`, `/testimonials`, `/_blog` y todos los componentes/libs/data que solo esas páginas usaban.
- El nuevo `/casos` no usa carousels de imágenes, así que el problema histórico de "evidencia prestada" en los casos de éxito quedó resuelto por diseño.
- Decisión tomada: insignia de certificación AWS Solutions Architect Associate (SAA) removida de todos lados hasta que se apruebe el examen; quedan solo las certificaciones instaladas (CLF, AIF, BeSA Agentic AI), consistente con "2x AWS Certified".
- Se corrigió un bug real en `.gitignore`: `.env*` también bloqueaba `.env.example`, que debía estar versionado.
- Se arregló un bug de hidratación de React en `components/nav.tsx` (ícono de tema no coincidía entre servidor y cliente, rompía el primer click en los toggles de idioma/tema).
- Build de producción, `tsc --noEmit` y ESLint verificados sin errores; las 5 rutas responden 200, ruta inexistente da 404.
- Se reorganizó la raíz del repo: archivos `.md` sueltos movidos a `docs/` con subcarpetas (`docs/content/`, `docs/ideas/`, `docs/ops/`, `docs/specs/`), archivos duplicados y trackers obsoletos del diseño anterior eliminados.

### Pendiente detectado en esta sesión
- `origin/main` y `origin/v0.2.0` en GitHub ya tienen pusheado contenido personal de antes de este `.gitignore`: `docs/personal/values-es.md`, `docs/personal/work-ethic-es.md`, y el CV real (`public/assets/cv/cv.pdf`, `public/assets/cv/profile.pdf`). El `.gitignore` actual previene que esto se vuelva a commitear, pero no lo borra del historial ya pusheado. Decisión pendiente del usuario: dejarlo así, o reescribir historia (force-push) para purgarlo. Esto último es destructivo y no se hace sin confirmación explícita.
- Link "Ver sitio" de Solito en `/productos` apunta a `#` (el prototipo de diseño linkeaba a una página standalone que no existe en este sitio de 5 páginas).
- Verificación visual en 375px/768px (móvil/tablet) no confirmada con una herramienta de navegador real; el entorno de pruebas no permitió redimensionar el viewport de forma confiable.
- Fase 5 y 6 del plan original (DNS → IP Vultr, Traefik, `.env` en el servidor, verificar SSL en producción, publicar el link), no iniciado.
