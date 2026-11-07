# modavidc.com

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white">
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white">
  <img alt="Vultr" src="https://img.shields.io/badge/Vultr-007BFF?logo=vultr&logoColor=white">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green">
</p>

Personal website and portfolio of Moisés Cedeño — product, AI, and healthcare systems architect.

This repository contains the personal website, portfolio, documentation, and deployment setup for modavid.com.

## Overview

This project is the personal website of Moisés Cedeño, focused on:
- product and platform architecture
- healthcare integrations and interoperability
- AI systems in production
- engineering leadership and technical storytelling

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Radix UI
- Docker + Docker Compose
- Traefik
- Vultr infrastructure
- Bilingual UI (ES / EN)

## Live site

- Website: https://modavid.com
- GitHub: https://github.com/modavidc
- Email: hello@modavid.com

## Documentation

- Main docs: [docs/README.md](docs/README.md)
- Status: [STATUS.md](STATUS.md)
- Roadmap: [docs/planning/ROADMAP.md](docs/planning/ROADMAP.md)
- Operations: [docs/ops/quick-start.md](docs/ops/quick-start.md), [docs/ops/deploy.md](docs/ops/deploy.md)

## Local development

### Requirements

- Node.js 18+
- pnpm
- Docker (optional)

### Install

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

### Production build

```bash
pnpm build
pnpm start
```

### Docker

```bash
cp .env.example .env
docker-compose -f docker-compose.dev.yml up
```

## Environment variables

```bash
cp .env.example .env
```

## Project structure

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
├── Dockerfile
├── Dockerfile.dev
├── README.md
├── STATUS.md
├── package.json
├── pnpm-lock.yaml
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── LICENSE
└── ...
```

## Deployment

This site is deployed using Docker and Traefik in a Vultr environment. See the ops docs for full deployment and infrastructure details.

## License

MIT

## Contact

- GitHub: https://github.com/modavidc
- Website: https://modavid.com
