# modavidc.com

Sitio personal de Moisés Cedeño: Tech Lead, arquitecto de soluciones, especialista en FinOps, integraciones de salud y agentes de IA en producción.

Este repositorio contiene la web personal, el portafolio profesional, el contenido editorial y la documentación operativa del sitio.

## Estado del proyecto

- Documentación principal: [`docs/README.md`](docs/README.md)
- Estado actual: [`STATUS.md`](STATUS.md)
- Roadmap: [`docs/planning/ROADMAP.md`](docs/planning/ROADMAP.md)
- Bitácora: [`docs/planning/BITACORA.md`](docs/planning/BITACORA.md)
- Guías de deploy: [`docs/ops/quick-start.md`](docs/ops/quick-start.md) y [`docs/ops/deploy.md`](docs/ops/deploy.md)

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Radix UI
- Docker + Docker Compose
- Traefik externo en Vultr
- Bilingual UI (ES/EN)
- Claro / oscuro con persistencia local

## Qué incluye

- Portafolio personal y experiencia profesional
- Sección de proyectos y casos de éxito
- Contenido y documentación de negocio / tecnología
- Soporte para multi-idioma
- Tema claro / oscuro
- Infraestructura de despliegue con Docker y Traefik

## Requisitos

- Node.js 18+
- pnpm
- Docker y Docker Compose (opcional, para entorno local y producción)

## Desarrollo local

### Opción 1: entorno local con pnpm

```bash
pnpm install
pnpm dev
```

### Build de producción

```bash
pnpm build
pnpm start
```

### Opción 2: entorno con Docker

```bash
cp .env.example .env
docker-compose -f docker-compose.dev.yml up
```

Para producción:

```bash
docker-compose --env-file .env -f docker-compose.prod.yml up -d --build
```

## Variables de entorno

Copia el ejemplo y ajusta los valores necesarios:

```bash
cp .env.example .env
```

La configuración esperada se documenta en:

- `.env.example`
- `docs/ops/quick-start.md`
- `docs/ops/deploy.md`

## Estructura del proyecto

```text
modavidc.com/
├── app/
├── components/
├── content/
├── docs/
├── lib/
├── public/
├── styles/
├── .env.example
├── .dockerignore
├── .eslintrc.json
├── .gitignore
├── CLAUDE.md
├── Dockerfile
├── Dockerfile.dev
├── README.md
├── STATUS.md
├── components.json
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── LICENSE
└── ...
```

## Documentación del proyecto

La documentación del sitio está organizada en `docs/`:

- `career/` — CV, skills y roadmap profesional
- `content/` — textos y artículos para el sitio
- `design/` — referencias de diseño y branding
- `blog/` — borradores y contenido del blog
- `feedback/` — análisis de feedback recibido
- `ideas/` — ideas sueltas
- `ops/` — despliegue e infraestructura
- `planning/` — brief, roadmap y bitácora
- `portfolio/` — casos de éxito y proyectos
- `projects/` — documentación detallada de proyectos
- `research/` — recursos e investigación
- `specs/` — especificaciones de estructura de contenido

## Deploy

El despliegue se realiza con Docker y Traefik en un entorno externo (Vultr) y se documenta en:

- [`docs/ops/deploy.md`](docs/ops/deploy.md)
- [`docs/ops/quick-start.md`](docs/ops/quick-start.md)

## Estado actual

La web está en desarrollo activo y se mantiene con un flujo de documentación y operación separado del código principal. El estado operativo y contextual se actualiza en [`STATUS.md`](STATUS.md).

## Feedback y contribuciones

Este repositorio es personal, pero las mejoras, correcciones y propuestas son bienvenidas siempre que respeten la dirección del proyecto y la identidad de la marca.

## Licencia

MIT

## Contacto

- GitHub: https://github.com/modavidc
- Sitio personal: https://modavid.com
- Email: hello@modavid.com
