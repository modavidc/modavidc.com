# Home (/) — pending tasks

Estado: **publicable**. Todo lo bloqueante ya se arregló en esta sesión. Lo que queda es una mejora de contenido, no un bug.

## Arreglado esta sesión
- [x] Link roto `/casos-de-exito/medirec-aws` → `/casos-de-exito/detail/medirec-aws`
- [x] Link roto `/casos-de-exito/licencias-farmaceuticas` → `/casos-de-exito/detail/licencias-farmaceuticas`
- [x] "Ver los 6 testimonios →" desactualizado → "Ver los 11 testimonios →"
- [x] Tarjeta "Lab Middleware" (caso inexistente, sistema viejo) → reemplazada por la historia real de **ores-laboratory-api** (40K+ órdenes/mes, 5 días → 4h, link corregido)
- [x] KPI bar "Lab Middleware · 2022" → "40K+ Órdenes de laboratorio/mes · ORES API · 2022"

## Pendiente
- [x] ~~KPI bar — bug de matemática "-200%" T-Cuida 3min→1min~~ → reemplazado por "<0.2% Error rate bajo carga · T-Cuida · 20K usuarios validados" (dato real del caso t-cuida-multitenant).
- [ ] Sección de testimonios del home muestra 3 citas **anónimas y genéricas** ("Product Owner", "Director de TI", "CTO") que no coinciden con los 11 testimonios reales y nombrados de `/testimonials`. No es un bug técnico, pero es inconsistente: el visitante ve nombres reales con LinkedIn en una página y anónimos genéricos en otra. Considerar reemplazar por 3 de las citas reales (ej. Jessel, Karen, Michael) enlazando a `/testimonials`.

## No revisado a fondo
- Copy/tono general del hero y demás secciones — no se auditó estilo, solo bugs funcionales y datos incorrectos.
