# modavidc.com, Estado (16 octubre 2026)

Verde: sitio en producción, CI/CD funcionando, auditoría completa hecha. Quedan decisiones de contenido, no bugs.

## Últimas 3 cosas
1. OG image arreglada y confirmada en vivo (PNG real, 200), CI/CD con GitHub Actions desplegando a Vultr por SSH en cada push a `main`.
2. Auditoría completa del sitio en vivo (`docs/audits/auditoria-v3.md`): sin testimonios en el código, botones de tienda muertos ya ocultados, 5 de 6 casos mostrados son del mismo cliente (MediRec).
3. Quitado el `@view-transition` nativo de `globals.css`: chocaba con el router de Next y tiraba un error real de consola en cada navegación.

## Hoy / lo inmediato
- Conseguir las URLs reales de Google Play, App Store y sitio para Solito, Grupero y El Estoico.
- Decidir: testimonios (cuándo hay reales), modalidades de trabajo explícitas, diversificar casos mostrados (detalle en la auditoría v3).

## Sigue en agenda (sin fecha fija)
- Verificación visual en 375px/768px con una herramienta de navegador real (nunca confirmada).
- Accesibilidad y Core Web Vitals, sin auditar todavía.

## Bloqueos
- Ninguno activo. `docs/personal/*.md` y el CV siguen en el historial ya pusheado de antes del `.gitignore` actual; decisión del usuario de dejarlo así.

## Detalle y contexto
- Auditoría completa: `docs/audits/auditoria-v3.md`
- CI/CD: `.github/workflows/deploy.yml`, `docs/ops/deploy.md`
- Histórico completo de checkpoints: `docs/planning/BITACORA.md`

<!-- last-status-sync: 2026-10-16 -->
