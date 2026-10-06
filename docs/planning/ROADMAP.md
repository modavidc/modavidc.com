# ROADMAP — llevar modavidc.com a producción (Vultr + Traefik)

Este roadmap prioriza **issues de comunicación/conversión** (según `docs/feedback/buyer-personas.md`).
La parte técnica ya está “suficientemente OK” para v1; se deja como checklist cuando toque desplegar.

## Fase 0 — Mensaje en 10 segundos (NO técnico) [P0]
Objetivo: que “No técnico” pase de ⚠️ a ✅ sin sacrificar al recruiter/CTO.
- [ ] Reescribir el **párrafo del hero** a beneficios humanos (sin jerga):
  - “te ahorro costos”, “evito caídas”, “hago tu sistema mantenible”
  - Evitar “legacy/APIs/ROI/cloud” o explicarlo en paréntesis simple
- [ ] Agregar 1 línea “qué entrego en 7–14 días” (oferta concreta):
  - Ej: “Auditoría de costos + plan ejecutable”
- [ ] Agregar 1 micro-frase “para quién NO es” (filtro rápido):
  - Ej: “No hago landing pages; arreglo sistemas en producción.”

## Fase 1 — Conversión (CTA) [P0]
Objetivo: que Founder/CTO convierta sin buscar.
- [ ] CTA arriba (hero): **“Agendar consultoría”**
  - Calendly o mailto con subject prellenado
- [ ] Mantener “Ver Proyectos” como CTA secundario
- [ ] (Opcional) CTA sticky en navbar (desktop)

## Fase 2 — Credibilidad para Dev Senior (evidencia) [P0]
Objetivo: que el “Dev Senior sin cariño” deje de dudar.
- [ ] En “Impacto Medible” convertir métricas en links:
  - 58% → caso de estudio/diagrama
  - $20k+ → caso de estudio/decisiones
- [ ] En “Ver Detalles” asegurar que hay:
  - arquitectura/diagrama
  - tradeoffs
  - números + cómo se midieron
- [ ] En cada caso de estudio: 1 screenshot/diagrama + 5 bullets (qué cambió / por qué / riesgo / resultado / cómo se midió)

## Fase 3 — SEO/metadata coherente con dominio [P1]
- [ ] Actualizar `metadataBase`/`openGraph.url` a `https://modavidc.com` (si ese es el dominio final)
- [ ] Confirmar `NEXT_PUBLIC_SITE_URL` y canonical
- [ ] (Opcional) `og-image.jpg` real en `/public`

## Fase 4 — Operación básica (post-release) [P1]
- [ ] Analytics real (GA/umami/plausible)
- [ ] Health check simple (uptime robot) y logs
- [ ] Backups/rotación de imágenes Docker en servidor (higiene)

## Criterios de “Listo para producción” (DoD)
- [ ] “No técnico” entiende qué vendes en 10s (sin jerga)
- [ ] CTA “Agendar consultoría” visible arriba
- [ ] Al menos 1 caso de estudio con evidencia (diagrama + tradeoffs + métricas)
- [ ] (Cuando toque) Deploy reproducible con `docker-compose.prod.yml` + Traefik externo
- [ ] (Cuando toque) HTTPS activo y DNS correcto

## Apéndice — Checklist técnico (solo cuando vayas a desplegar) [P1]
- [ ] Confirmar en tu Traefik real:
  - [ ] `TRAEFIK_ENTRYPOINT` (default: `websecure`)
  - [ ] `TRAEFIK_CERTRESOLVER` (default: `http-resolv`)
  - [ ] Red Docker externa `web`
- [ ] DNS:
  - [ ] `A`/`AAAA` de `modavidc.com` → IP de Vultr
  - [ ] (Opcional) `www.modavidc.com` → redirect/cname
- [ ] Variables:
  - [ ] `cp env.example .env` y setear `DOMAIN=modavidc.com`
- [ ] Deploy:
  - [ ] `docker-compose --env-file .env -f docker-compose.prod.yml up -d --build`
- [ ] Validación:
  - [ ] HTTPS OK
  - [ ] Home carga + rutas clave (`/projects`, `/experience`, `/contact`)

