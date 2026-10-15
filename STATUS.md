# modavidc.com, Estado (15 octubre 2026)

Verde: sitio rediseñado, desplegado y verificado en producción con SSL.

## Últimas 3 cosas
1. Deploy en Vultr exitoso tras corregir 2 bugs de build de Docker (pnpm build-script approval + COPY faltante de `pnpm-workspace.yaml`).
2. Verificadas las 5 rutas en `https://modavidc.com` cargando bien con SSL: `/`, `/sobre-mi`, `/experiencia`, `/casos`, `/productos`.
3. Las 6 fases del plan original quedaron cerradas: contenido, repo curado, push, decisión de evidencia, deploy, verificación en producción.

## Hoy / lo inmediato
- Confirmar con Moisés: el link "Ver sitio" de Solito en `/productos` sigue apuntando a `#`.

## Sigue en agenda (sin fecha fija)
- Verificación visual en 375px/768px con una herramienta de navegador real (nunca confirmada con dispositivo real).

## Bloqueos
- Ninguno activo. `docs/personal/*.md` y el CV siguen en el historial ya pusheado de `origin/main`/`origin/v0.2.0`; Moisés decidió dejarlo así por ahora.

## Detalle y contexto
- Histórico completo de checkpoints: `docs/planning/BITACORA.md`
- Guía de deploy: `docs/ops/deploy.md`, `docs/ops/quick-start.md`

<!-- last-status-sync: 2026-10-15 -->
