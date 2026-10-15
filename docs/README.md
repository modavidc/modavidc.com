# modavidc.com

Sitio personal de Moisés Cedeño: Tech Lead y arquitecto de soluciones, especializado en FinOps,
integraciones en salud y agentes de IA en producción.

## Stack

Next.js 14 (App Router) + TypeScript + Tailwind + Radix UI, deploy con Docker detrás de un
Traefik externo en Vultr.

## Rutas

`/`, `/sobre-mi`, `/experiencia`, `/casos`, `/productos`. Bilingüe (ES/EN) y con tema
claro/oscuro, persistidos en `localStorage`.

## Cómo correr

```bash
pnpm install
pnpm dev        # desarrollo
pnpm build      # build de producción
pnpm start      # servir el build
```

Con Docker:

```bash
docker-compose -f docker-compose.dev.yml up          # desarrollo
cp .env.example .env
docker-compose --env-file .env -f docker-compose.prod.yml up -d --build   # producción
```

Detalle de deploy (DNS, Traefik, variables de entorno) en `docs/ops/deploy.md` y
`docs/ops/quick-start.md`.

## Estado y contexto

- Estado actual, en 30 segundos: `STATUS.md` (raíz del repo)
- Histórico de sesiones de trabajo: `docs/planning/BITACORA.md`
- Roadmap: `docs/planning/ROADMAP.md`

## Carpetas de `docs/`

- `career/` — CV, skills, roadmap profesional
- `content/` — textos y artículos para el sitio
- `design/` — material de referencia de diseño (auditorías, prototipos)
- `blog/` — borradores de artículos (la ruta `/blog` no está publicada actualmente)
- `feedback/` — análisis de feedback recibido
- `ideas/` — ideas sueltas sin desarrollar
- `ops/` — guías de deploy e infraestructura
- `planning/` — brief, roadmap, bitácora
- `portfolio/` — notas sobre casos de éxito y proyectos
- `projects/` — documentación detallada de proyectos reales (fuente de los casos de éxito)
- `research/` — links y plantillas de investigación
- `specs/` — especificaciones de estructura de contenido
