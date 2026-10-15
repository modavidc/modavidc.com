# modavidc.com, Estado (15 octubre 2026)

Amarillo: deploy en marcha en el servidor, dos bugs de build encontrados y corregidos.

## Últimas 3 cosas
1. `v0.3.0` pusheado a `origin/v0.3.0`; repo curado y rediseño verificado en local.
2. Deploy iniciado en el servidor Vultr, falló el build de Docker por `unrs-resolver` bloqueado (pnpm 10+ exige aprobar scripts de instalación nativos).
3. Corregidos dos bugs reales de Docker: faltaba declarar `unrs-resolver` como build permitido (`pnpm-workspace.yaml`) y el Dockerfile no copiaba ese archivo al stage de `deps`, así que pnpm nunca lo veía.

## Hoy / lo inmediato
- Esperando que Moisés corra de nuevo `git pull` + `docker-compose ... up -d --build` en el servidor con el fix pusheado.
- Confirmar con Moisés: el link "Ver sitio" de Solito en `/productos` (apunta a `#`).

## Sigue en agenda (sin fecha fija)
- Verificación visual en 375px/768px con una herramienta de navegador real.
- Fase 6: verificar SSL en producción y publicar el link, una vez el build pase.

## Bloqueos
- Ninguno activo. `docs/personal/*.md` y el CV siguen en el historial ya pusheado de `origin/main`/`origin/v0.2.0`; Moisés decidió dejarlo así por ahora.

## Detalle y contexto
- Histórico completo de checkpoints: `docs/planning/BITACORA.md`
- Guía de deploy: `docs/ops/deploy.md`, `docs/ops/quick-start.md`

<!-- last-status-sync: 2026-10-15 -->
