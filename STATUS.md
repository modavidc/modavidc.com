# modavidc.com, Estado (14 octubre 2026)

Amarillo: el rediseño está terminado y verificado en local, pero no se ha pusheado ni desplegado.

## Últimas 3 cosas
1. Rediseño completo sobre `/design-handoff` terminado: 5 rutas nuevas, tokens claro/oscuro, ES/EN, build y lint limpios.
2. Bug de hidratación en el toggle de idioma/tema (`components/nav.tsx`) encontrado y corregido.
3. Raíz del repo reorganizada: `.md` sueltos movidos a `docs/`, archivos y trackers obsoletos del diseño anterior eliminados.

## Hoy / lo inmediato
- Confirmar con Moisés: el link "Ver sitio" de Solito en `/productos` (apunta a `#`).
- Decidir qué hacer con el contenido personal ya pusheado en `origin/main`/`origin/v0.2.0` (ver bloqueos).

## Sigue en agenda (sin fecha fija)
- Verificación visual en 375px/768px con una herramienta de navegador real.
- Fase 5: DNS → IP Vultr, Traefik, `.env` en el servidor.
- Fase 6: verificar SSL en producción y publicar el link.

## Bloqueos
- `docs/personal/values-es.md`, `docs/personal/work-ethic-es.md` y el CV real ya están pusheados en GitHub (`origin/main`, `origin/v0.2.0`), de antes del `.gitignore` actual. Purgarlo del historial requiere force-push; depende de que Moisés decida si lo hace.

## Detalle y contexto
- Histórico completo de checkpoints: `docs/planning/BITACORA.md`
- Guía de deploy: `docs/ops/deploy.md`, `docs/ops/quick-start.md`
- Roadmap: `docs/planning/ROADMAP.md`

<!-- last-status-sync: 2026-10-14 -->
