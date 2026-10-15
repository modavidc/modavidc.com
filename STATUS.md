# modavidc.com, Estado (15 octubre 2026)

Amarillo: sitio en producción y funcionando, pero la auditoría encontró 2 bugs reales, uno a medio arreglar.

## Últimas 3 cosas
1. Confirmado en vivo: `https://modavidc.com` carga con SSL, las 5 rutas responden bien.
2. Auditoría con Chrome encontró 2 bugs reales: un error de consola (`ViewTransition opt-in disabled`, menor) y `/opengraph-image` devolviendo 500 en producción, por eso no aparece la card al compartir el link en Telegram y similares.
3. A medio arreglar: la generación dinámica de la OG image falla también al compilar en Windows (bug de `next/og`, no del código); se está reemplazando por una imagen estática fija en vez de generada en cada request.

## Hoy / lo inmediato
- Terminar el reemplazo de `/opengraph-image` por una imagen estática (`public/og-image.png`), actualizar metadata, verificar build y pushear.
- Revisar el error de consola `ViewTransition opt-in disabled` (menor, no bloqueante).
- Confirmar con Moisés: el link "Ver sitio" de Solito en `/productos` sigue apuntando a `#`.

## Sigue en agenda (sin fecha fija)
- Verificación visual en 375px/768px con una herramienta de navegador real.

## Bloqueos
- Ninguno activo. `docs/personal/*.md` y el CV siguen en el historial ya pusheado de `origin/main`/`origin/v0.2.0`; Moisés decidió dejarlo así por ahora.

## Detalle y contexto
- Histórico completo de checkpoints: `docs/planning/BITACORA.md`
- Guía de deploy: `docs/ops/deploy.md`, `docs/ops/quick-start.md`

<!-- last-status-sync: 2026-10-15 -->
