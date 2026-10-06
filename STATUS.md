# STATUS — modavidc.com

## Objetivo
Llevar `modavidc.com` a producción en Vultr con una web que:
- Se entienda en 10s (técnico y no técnico).
- Convierta a "quiero hablar contigo" (CTA claro).
- Sea estable (deploy reproducible con Docker + Traefik externo).

Directiva activa: **publicar al 90%, imperfecto**. El freno es el perfeccionismo del último 10%. El trabajo de EPCS y el pipeline SON el caso de éxito.

---

## Checkpoint — 14 julio 2026

### Rama activa
`v0.2.0` — 17 commits adelante de origin, **nada pusheado todavía**. ~120 archivos modificados/nuevos/borrados sin commitear.

### Archivos de tracking creados esta sesión (leer antes de seguir)
- `testimonios-pending-tasks.md` — estado de los 11 testimonios, mensajes de outreach por persona, checkboxes de contactado/respondió/aprobó.
- `casos-de-exito-pending-tasks.md` — qué evidencia (capturas) falta por cada uno de los 12 casos.
- `home-pending-tasks.md`, `experiencia-pending-tasks.md`, `metodologia-pending-tasks.md`, `contact-pending-tasks.md` — auditoría página por página.

### Lo que está completo

**Build y verificación**
- Build de producción en Docker (`docker build -f Dockerfile`) verificado pasando limpio, 2 veces en la sesión, la última después de borrar `/status`.
- Entorno de dev funcionando: `docker-compose.dev.yml`, contenedor `modavidc-com-dev` en `localhost:3000`. Nota: el hot-reload de Next.js no siempre agarra cambios del bind mount en Windows — si algo no se refleja, `docker restart modavidc-com-dev`.

**Bugs de contenido/links arreglados**
- `app/robots.ts` apuntaba el sitemap a `moises.dev` (dominio viejo) → corregido a `modavidc.com`.
- `app/sitemap.ts` tenía 7 slugs muertos/inventados → reemplazado con los 12 slugs reales de casos de éxito.
- Home (`app/page.tsx`): 2 links rotos a casos (faltaba `/detail/`), contador de testimonios desactualizado (decía 6, son 11), tarjeta "Lab Middleware" apuntando a una ruta que ya no existe → reemplazada con la historia real de `ores-laboratory-api` (40K+ órdenes/mes, 5 días → 4h), bug de matemática en KPI bar ("-200%" imposible) → reemplazado por métrica real de T-Cuida.
- Experiencia (`app/experiencia/page.tsx`): botón de descarga de CV roto (apuntaba a un archivo inexistente) → corregido a `/assets/cv/cv.pdf`. Mismas referencias stale a "-70% tiempo clínico" (Lab Middleware) reemplazadas con datos reales de ORES en 3 lugares.
- Meta descriptions de `/casos-de-exito` y `/testimonials` también tenían "-70% tiempo clínico" stale → corregidas. La de casos también tenía "+400% throughput IoT" sin caso real que lo respalde (proyecto del sistema viejo) → se quitó en vez de inventar reemplazo.
- Metodología y Contacto: auditadas completas, sin bugs.

**Limpieza de código muerto**
- Borrado el sistema viejo de casos de éxito (huérfano, sin links vivos): `app/casos-de-exito/[id]/`, `app/casos-de-exito/detail/[id]/`, `app/casos-de-exito/category/[category]/` (boilerplate v0 "Enterprise Dashboard" sin relación), `components/project-detail-client.tsx`, `components/featured-projects.tsx`, `lib/projects.ts` (917 líneas, fotos de stock), `data/archived_projects.json`, `data/labs.json` (y el export `labs`/AWS-pillars de `lib/labs.ts` que dependía de él).
- Borrada la página `/status` completa (page, admin de moderación, actions.ts, `components/status-item.tsx`, `components/recommendation-list.tsx`, `lib/db.ts` con un stub de Prisma que ni siquiera tenía la dependencia instalada) — era contenido demo de v0.dev, no real. La idea quedó documentada en `docs/ideas/IDEAS.md` para retomarla algún día con DB real.

**Testimonios (`components/testimonials-v2.tsx`)**
- Arístides removido (pedido explícito). Luiggi se quedó.
- Ricardo Carrillo agregado (CMO, T-Cuida) — su cita es un **borrador mío sin validar**, marcado claramente para no publicarlo sin su aprobación.
- Los 11 testimonios + el destacado (Julio) ya tienen su link de LinkedIn con badge visible.
- Pendientes reales: cita de Ricardo sin aprobar, métrica de Karen ("+400% throughput IoT") y de Romaira ("Onboarding 48h") marcadas como flojas, esperando números reales — ver `testimonios-pending-tasks.md` para los mensajes de outreach listos para enviar.

### Pendiente inmediato

**1. Commit + push — bloqueante para todo lo demás**
Antes de armar el commit hay que curar qué entra. Hay archivos personales sueltos en el repo que probablemente NO deberían ir a un repo público:
- `docs/personal/autoconocimiento_*.md`
- `docs/job-applications/`
- `docs/career/CV_LINKEDIN.md`
- `docs/raw/`

**2. Deploy al servidor — 100% fuera del alcance de Claude, tarea del usuario**
- DNS: `modavidc.com` → IP del Vultr
- Traefik en el servidor: `entrypoint=websecure`, `certresolver=http-resolv`, red externa `web`
- Copiar `.env.example` → `.env` en el servidor
- `docker compose -f docker-compose.prod.yml up -d --build`

**3. No bloquea, se pule después de publicar**
- 8 de 12 casos de éxito con evidencia visual (capturas) pendiente — texto ya completo en todos. El usuario dijo que las va a conseguir él mismo.
- Testimonios: esperando respuestas de 11 personas reales (outreach ya redactado, ver archivo de tracking).
- `lib/testimonials.ts` — archivo viejo sin usar en ningún lado, cruft menor, no importa si se queda.

### Bloqueadores conocidos (server-side, sin cambios)
- Traefik en el servidor debe usar entrypoint `websecure` y certresolver `http-resolv`.
- DNS `modavidc.com` debe apuntar al servidor Vultr.
- ~~`metadataBase` apuntando a `moises.dev`~~ → ya estaba correcto (`modavidc.com`), solo `robots.ts` tenía el dominio viejo y se arregló.

### Stack actual
Next.js 14 · TypeScript · CSS variables (sin Tailwind) · Docker + Traefik · Vultr
