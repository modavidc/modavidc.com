# Auditoría v1 — modavidc.com

**Fecha:** 14 de julio de 2026  
**Estado auditado:** `http://localhost:3000`  
**Objetivo:** identificar el mínimo necesario para publicar el portafolio sin retrasarlo por el último 10%, pero evitando afirmaciones que resten credibilidad.

## Alcance

Rutas revisadas:

- `/`
- `/casos-de-exito`
- `/experiencia`
- `/metodologia`
- `/testimonials`
- `/contact`

El foco fue la credibilidad editorial: cifras contradictorias, absolutos difíciles de demostrar, testimonios no validados, promesas infladas y evidencia visual que no corresponde al caso presentado.

## Veredicto ejecutivo

La web está cerca de publicarse. No necesita más casos ni otro rediseño; necesita un pase editorial corto y conservador.

Hay tres bloqueadores reales:

1. Existen cifras incompatibles para un mismo caso.
2. Los 11 testimonios se presentan como citas reales, aunque el checklist interno registra `0/11` aprobados.
3. Ocho casos muestran evidencia visual prestada de otros proyectos.

La estrategia mínima es corregir o retirar afirmaciones no defendibles, ocultar temporalmente testimonios sin autorización y ocultar los carruseles cuya evidencia no corresponde.

## Hallazgos críticos

### 1. El caso AWS cuenta historias incompatibles

El mismo resultado aparece como:

- `−58%` y `−65%` de reducción.
- `$180K` ahorrados al año.
- `$7.1K` ahorrados al año.
- Factura mensual de `$912` a `$318`.

La reducción de `$912` a `$318` es aproximadamente `65.1%` y equivale a unos `$7,128` al año. Por tanto, `$180K anuales` no puede corresponder a ese baseline.

**Versión recomendada:**

> Reduje la factura mensual de AWS de $912 a $318, aproximadamente 65%, mediante rightsizing y eliminación de recursos sin uso.

Hasta encontrar evidencia que explique otra escala, eliminar `$180K` y unificar todo en torno a `$912 → $318/mes`, `≈65%` y `≈$7.1K/año`.

### 2. Testimonios no aprobados presentados como citas

`testimonios-pending-tasks.md` registra:

> Contactados: 0/11 · Aprobados: 0/11

Sin embargo, Home y `/testimonials` muestran textos entre comillas, con nombre y cargo, como declaraciones reales. El checklist reconoce además que al menos una cita fue redactada por el dueño del portafolio y todavía no fue aprobada por la persona atribuida.

**Mínimo para publicar:**

- Ocultar `/testimonials` del menú.
- Retirar los testimonios de Home.
- Alternativa: “Referencias disponibles a solicitud”, sin citas atribuidas.

No publicar citas con nombre y cargo hasta recibir aprobación explícita.

### 3. Evidencia visual incorrecta

Según `casos-de-exito-pending-tasks.md`, solo dos casos tienen evidencia propia completa:

- Surescripts.
- Migración NLM.

Ocho casos reutilizan imágenes de otros proyectos dentro de `EvidenceCarousel`.

**Mínimo para publicar:** ocultar esos carruseles. Conseguir las capturas reales puede quedar como mejora posterior.

### 4. Patrón de perfección artificial

Se repiten números absolutos o promesas difíciles de sostener:

- `48h onboarding` y “productivo en menos de 48 horas”.
- “Desde el día uno”.
- `+400% velocidad/throughput`.
- `0 defectos en producción`.
- `0 downtime` y `100% uptime`.
- `100% cobertura clínica`.
- `100% con métrica verificada`.
- “Sin un solo incidente”.
- “Cualquier dev puede contribuir desde el día uno”.
- “Respondo en minutos”.
- “Cada línea de código tiene un propósito”.
- “Cada decisión importante queda escrita en un ADR”.

El problema no es usar métricas, sino presentarlas sin baseline, periodo, definición o evidencia. Los absolutos hacen que logros plausibles parezcan inventados.

## Auditoría por página

### Home `/`

Corregir antes de publicar:

- Unificar las cifras del caso AWS y retirar `$180K`.
- Eliminar los tres testimonios no aprobados.
- “Plataforma al 100% de uptime” → “La optimización se realizó sin interrupciones relevantes reportadas durante el cambio”.
- “Cero pérdida de integridad clínica” → “Manteniendo las validaciones clínicas requeridas durante la migración”.
- “Cualquier ingeniero puede entender y operar desde el primer día” → “Dejando inventario, documentación operativa y criterios de mantenimiento para el equipo”.
- Retirar “Las métricas son verificables” mientras existan casos sin evidencia publicable.
- Evitar `0 downtime` en las tarjetas.

### Casos de éxito `/casos-de-exito`

Corregir antes de publicar:

- Retirar `100% con métrica verificada`.
- Ocultar carruseles con evidencia de otro proyecto.
- Unificar el caso AWS.
- Cambiar “sin interrumpir nada” por una descripción acotada al periodo observado.
- Revisar `RPO 0h`: backups diarios no implican RPO cero, salvo que exista replicación continua adicional.
- Cambiar `0 downtime` de NLM por una descripción del procedimiento.
- Evitar `100% cobertura` si no se define el universo y método.
- Revisar “sin paros no planificados” en Agrotech si no existe registro.

**Error matemático:** `2h 50min → 8 min` no equivale a `−78%`, sino aproximadamente a `−95%`. Verificar si el porcentaje mide otra fase; si no, retirarlo y conservar el antes/después.

### Experiencia `/experiencia`

Es la página que concentra más sobreventa.

Retirar o reformular:

- `$180K anuales`.
- `48h onboarding`.
- `100% de cobertura de deploys`.
- `2 meses · 0 downtime`.
- `−65% latencia IoT`, si no se conserva la medición.
- `+400% velocidad`.
- “Tiempo récord”.
- “Métricas reales” como garantía general.

**Error de texto:** `−65% latencia · 1,500 devs` debe decir `1,500 dispositivos`.

Reemplazo sugerido para onboarding:

> Introduje ADRs, guías de contribución y documentación operativa para reducir la dependencia del conocimiento informal durante la incorporación de nuevos desarrolladores.

Reemplazo sugerido para IA:

> Uso herramientas de IA para acelerar exploración, implementación y documentación, manteniendo revisión humana, pruebas y criterios de arquitectura.

### Metodología `/metodologia`

La base conceptual es sólida, pero el método se presenta como demasiado universal y perfecto.

- “Cuatro fases, doce semanas” → “Marco de trabajo habitual, adaptable al alcance y contexto del proyecto”.
- Cambiar `100% uptime`, `0 downtime` y revisar `>97% cobertura clínica`.
- “Cada PR de impacto se asocia a un ADR” → “Las decisiones de mayor impacto se documentan mediante ADRs cuando el contexto lo justifica”.
- “Cada línea de código tiene un propósito” → “El código generado con IA se revisa con los mismos criterios que el código escrito manualmente”.

### Testimonios `/testimonials`

No se recomienda publicar esta página en su estado actual.

Problemas:

- `0/11` citas aprobadas.
- `+400% throughput`.
- `0 defectos en producción`.
- `Onboarding 48h`.
- `Downtime 0h`.
- “Sin un solo incidente regulatorio”.
- Textos redactados internamente y atribuidos a terceros.

**Salida mínima:** desactivar temporalmente la página y retirar su enlace del menú. Es preferible publicar sin testimonios que con referencias todavía no autorizadas.

### Contacto `/contact`

Es la página más cercana a estar lista.

- “Respondo en minutos” → “Canal más directo”.
- “Respuesta: menos de 24h” → “Normalmente respondo en un día hábil”.
- Confirmar disponibilidad real antes de publicar “Proyectos seleccionados”.

## Métricas que sí conviene conservar

Las cifras concretas son un activo cuando tienen contexto y respaldo:

- `$912 → $318/mes`.
- `$20K/año` en licencias, si existe factura o contrato.
- Certificación `PR-21677`.
- `7/7` transacciones certificadas.
- `25+` laboratorios.
- `40K` órdenes mensuales, si proviene de logs o reportes.
- `20K` usuarios, aclarando si son registrados, activos o carga simulada.
- `15+` pantallas y periodo de entrega.
- `105` tickets y cantidad de pruebas, si el repositorio lo respalda.

Regla editorial:

> Cifra + periodo + qué mide + evidencia disponible.

Si falta uno de esos elementos, usar una descripción cualitativa o un antes/después concreto en lugar de un porcentaje.

## Checklist mínimo para publicar

- [ ] Unificar AWS en `$912 → $318/mes`, aproximadamente `−65%` y `$7.1K/año`.
- [ ] Eliminar `$180K`, `48h`, `+400%` y los `0/100%` no demostrables.
- [ ] Ocultar los carruseles con evidencia prestada.
- [ ] Ocultar testimonios no aprobados y retirar `/testimonials` del menú.
- [ ] Corregir `RPO 0h` o documentar la replicación que lo sustenta.
- [ ] Corregir `−78%` en el caso de autoservicio.
- [ ] Corregir `1,500 devs` por `1,500 dispositivos`.
- [ ] Revisar enlaces, navegación móvil, descarga del CV y canales de contacto.
- [ ] Publicar.

## Lo que no debe bloquear la publicación

- Conseguir las 32 capturas pendientes.
- Aprobar los 11 testimonios antes de lanzar; pueden ocultarse temporalmente.
- Crear más casos de éxito.
- Reescribir el diseño.
- Añadir más métricas.
- Perfeccionar cada frase.

El portafolio ya tiene suficiente sustancia con EPCS/pipeline, Surescripts, AWS y NLM. El último pase debe hacer que los resultados parezcan humanos, concretos y defendibles, no perfectos.
