# Auditoría v2 — Posicionamiento, conversión y confianza

**Fecha:** 14 de julio de 2026  
**Sitio auditado:** `http://localhost:3000`  
**Complementa:** `docs/audits/auditoria-v1.md`

## Objetivo

La auditoría v1 respondió principalmente: **¿qué afirmaciones pueden dañar la credibilidad del portafolio?**

Esta auditoría v2 responde:

> ¿El visitante correcto entiende rápidamente que esta web es para él, qué puede pedir, por qué debería confiar y qué sucederá después de contactar?

Se revisaron posicionamiento, público objetivo, claridad de la oferta, tono de voz, dimensión personal, proceso comercial, recorrido de conversión y algunos aspectos técnicos preliminares.

## Resumen ejecutivo

La web demuestra experiencia y profundidad técnica, pero obliga al visitante a deducir tres cosas importantes:

1. Para quién es exactamente el servicio.
2. Qué se puede contratar concretamente.
3. Qué ocurre después de pulsar “Hablemos”.

El sitio comunica autoridad mejor que cercanía y capacidad mejor que oferta. Esto no requiere un rediseño: puede resolverse con tres bloques breves y algunos cambios de copy.

### Mínimo adicional antes de publicar

- Aclarar en Home a qué tipo de empresa o equipo ayudas.
- Presentar 2–3 formas concretas de trabajar contigo.
- Explicar en Contacto qué sucede después de escribirte.
- Unificar el correo público de contacto.

El resto de los hallazgos puede resolverse después de publicar.

## 1. Posicionamiento

### Hallazgo

El titular actual comunica rol, criterio e identidad:

> Lidero equipos. Construyo software acelerado por IA con criterio e intención.

Tiene personalidad, pero no identifica claramente al comprador ni el problema prioritario. El sitio puede ser interpretado simultáneamente como:

- Portafolio para reclutadores.
- Oferta de consultoría FinOps.
- Servicio de arquitectura Healthcare/SaaS.
- Perfil de Tech Lead fraccional.
- Presentación para una posición in-house.

En `/experiencia` se menciona disponibilidad para “in-house, consultoría o audit puntual”, pero esta definición aparece tarde.

### Riesgo

El visitante puede reconocer que Moisés tiene experiencia sin saber si su situación encaja o qué conversación iniciar.

### Recomendación

Conservar el titular como frase de identidad y añadir debajo una línea orientada al visitante:

> Ayudo a equipos de Healthcare y SaaS a ordenar su arquitectura, reducir costos cloud y convertir sistemas frágiles en plataformas que el equipo pueda mantener.

Si se quiere priorizar empleo in-house, usar una variante más profesional:

> Tech Lead y arquitecto de soluciones para equipos de Healthcare y SaaS que necesitan escalar con más control técnico y operativo.

### Decisión pendiente

Definir cuál es el objetivo primario del sitio:

1. Conseguir una posición in-house.
2. Conseguir consultorías o auditorías.
3. Mantener ambos, pero con caminos separados desde Home.

Para publicar imperfecto, la opción 3 es viable siempre que los dos caminos se nombren explícitamente.

## 2. Claridad de la oferta

### Hallazgo

La web explica problemas que Moisés sabe resolver, pero no los convierte en ofertas reconocibles. “Hablemos” es el CTA general para casi todo.

Un visitante debe recorrer varias páginas para inferir que puede pedir:

- Una auditoría de costos AWS.
- Diagnóstico de arquitectura o deuda técnica.
- Acompañamiento como Tech Lead.
- Diseño o rescate de una plataforma Healthcare/SaaS.
- Incorporación in-house.

### Recomendación

Agregar en Home o Contacto un bloque corto: **Formas de trabajar conmigo**.

#### Auditoría puntual

> Reviso arquitectura, costos cloud o deuda técnica y entrego hallazgos priorizados con un plan ejecutable.

#### Acompañamiento técnico

> Trabajo con el equipo durante una etapa crítica para tomar decisiones, ejecutar cambios y dejar el criterio documentado.

#### Rol in-house

> Me incorporo como Tech Lead o Solutions Architect para liderar arquitectura, delivery y desarrollo del equipo.

No hace falta publicar precios ni convertir el sitio en una landing comercial. El objetivo es que el visitante sepa qué puede solicitar.

## 3. Titular y primer pantallazo de Home

### Lo que funciona

- El rol profesional se entiende.
- Healthcare, SaaS, AWS y FinOps aparecen pronto.
- Los casos y métricas generan autoridad.
- Hay acceso directo a casos y contacto.

### Lo que falta

- Identificación clara del visitante ideal.
- Una oferta o modalidad concreta.
- Separación entre reclutador y cliente.
- Una razón para actuar ahora que no dependa de cifras llamativas.

### Recomendación mínima

Mantener el hero y añadir una línea específica de público/problema. Cambiar los dos CTAs a caminos distintos:

- `Ver casos de éxito`.
- `Explorar formas de trabajar juntos` o `Hablemos de tu contexto`.

Si la prioridad es empleo:

- `Ver experiencia`.
- `Descargar CV`.

## 4. Dimensión personal y “Sobre mí”

### Hallazgo

No existe una página Sobre mí. `/experiencia` funciona como CV ampliado: explica roles, stacks, responsabilidades y resultados, pero poco sobre la persona detrás del perfil.

La web responde bien “qué ha hecho” y “cómo decide”, pero apenas responde:

- Por qué se especializó en estos problemas.
- Cómo es trabajar con él cuando hay presión o desacuerdo.
- Qué aprendió de proyectos que no salieron perfectos.
- Qué tipo de entorno busca.
- Qué proyectos prefiere evitar.
- Por qué le importa documentar o transferir conocimiento.

### Recomendación

No crear una página nueva antes del lanzamiento. Añadir después una sección breve en `/experiencia`, con dos o tres párrafos y una fotografía real, titulada por ejemplo **Cómo llegué hasta aquí** o **Cómo trabajo con un equipo**.

La historia debería conectar experiencia personal con utilidad para el lector, sin convertirse en autobiografía.

Ejemplo de dirección editorial:

> Empecé construyendo productos completos y durante varios años fui la persona que resolvía lo urgente. Con el tiempo entendí que los problemas más caros no estaban en una función aislada, sino en decisiones que nadie había dejado escritas: infraestructura que crecía sin control, integraciones frágiles y equipos dependientes de una sola persona. Por eso hoy trabajo entre arquitectura, negocio y equipo.

Este texto debe ajustarse a la historia real antes de publicarse.

## 5. Tono de voz

### Hallazgo

La voz es consistente, analítica y reconocible. Sin embargo, la acumulación de manifiestos y sentencias categóricas la vuelve más solemne y corporativa de lo necesario.

Ejemplos del patrón:

- “El stack es una consecuencia de la decisión, no la decisión”.
- “La transferencia es la entrega”.
- “Tres reglas innegociables”.
- “Intención en cada línea”.
- “Si no está en un ADR, no existe el criterio”.
- Repetición frecuente de “criterio, contexto e intención”.

### Riesgo

Las frases funcionan individualmente, pero juntas pueden parecer una identidad fabricada y disminuir cercanía. También hacen que distintas secciones digan la misma idea con palabras diferentes.

### Recomendación

- Conservar 2–3 frases distintivas como ejes de marca.
- Convertir el resto en explicaciones naturales y específicas.
- Reducir la repetición de “criterio” cuando una acción concreta lo demuestra mejor.
- Usar primera persona cuando ayude y evitar que todos los párrafos suenen como principios universales.
- Añadir alguna limitación o aprendizaje real; reconocer fricción aumenta credibilidad.

Ejemplo:

> No aplico ADRs a cada cambio. Los uso cuando una decisión tendrá consecuencias que el equipo necesitará entender meses después.

Esta frase suena más experimentada que una regla absoluta.

## 6. Proceso comercial

### Hallazgo

`/metodologia` explica qué ocurre una vez iniciado un proyecto: diagnóstico, ADR, ejecución y transferencia. No explica qué sucede entre el primer contacto y el inicio.

La página de Contacto ofrece WhatsApp, email y LinkedIn, pero no reduce la incertidumbre sobre la conversación.

### Recomendación mínima para `/contact`

Agregar un bloque **Qué pasa después**:

1. **Conversamos:** una llamada breve para entender el problema y el contexto.
2. **Definimos el encaje:** auditoría puntual, acompañamiento o rol dentro del equipo.
3. **Acordamos el siguiente paso:** alcance, tiempos y entregable inicial.

Copy sugerido:

> Primero conversamos para entender el problema. Si hay encaje, propongo un siguiente paso concreto: una auditoría puntual, un periodo de acompañamiento o una conversación sobre incorporación al equipo. No preparo una solución genérica antes de conocer el contexto.

No prometer una duración fija para la llamada si no se quiere convertir en compromiso operativo.

## 7. Recorrido de conversión

### Hallazgo

Los CTAs existen y son visibles, pero casi todos terminan en “Hablemos”. La intención específica de cada página no siempre se refleja en el siguiente paso.

### Recorrido recomendado

- **Home:** elegir entre conocer evidencia o explorar colaboración.
- **Casos:** “Tengo un problema parecido” con asunto/contexto precargado.
- **Experiencia:** descargar CV o conversar sobre un rol.
- **Metodología:** conversar sobre proyecto nuevo o rescate; esta distinción ya existe y es valiosa.
- **Contacto:** elegir modalidad y canal.

### Observación positiva

`/metodologia` ya distingue `?ctx=nuevo` y `?ctx=rescate`. Conviene aprovechar esos parámetros en Contacto para adaptar el título o mensaje mostrado. Si actualmente Contacto ignora el parámetro, se pierde una buena oportunidad de continuidad.

### Mejora posterior

Añadir parámetros similares para:

- `?ctx=auditoria-aws`
- `?ctx=tech-lead`
- `?ctx=rol-inhouse`

## 8. Testimonios como validación humana

### Relación con auditoría v1

La v1 concluyó que no deben publicarse citas no aprobadas. Ese sigue siendo el bloqueo principal.

### Hallazgo adicional

Cuando se obtengan testimonios reales, no deberían limitarse a repetir las métricas de los casos. Los casos ya prueban resultados; los testimonios deberían explicar cómo es trabajar con Moisés.

Preguntas útiles para solicitar testimonios:

- ¿Qué cambió en la forma de trabajar del equipo?
- ¿Cómo manejó una decisión difícil o un desacuerdo?
- ¿Qué tan claro era comunicando riesgos?
- ¿Qué tranquilidad o control aportó?
- ¿Qué quedó funcionando cuando terminó su intervención?
- ¿Lo volverías a contratar y para qué tipo de problema?

Los testimonios de QA, clientes y colegas pueden aportar más cercanía que otra repetición de una cifra AWS.

## 9. Contacto y coherencia operativa

### Hallazgos

- Conviven `hola@modavidc.com` y `moisesdavidaaron@gmail.com` en distintos enlaces.
- WhatsApp se presenta como respuesta “en minutos”, mientras la ficha indica menos de 24 horas.
- Se ofrecen WhatsApp, email y LinkedIn sin explicar cuál conviene para cada modalidad más allá de una nota general.

### Recomendaciones

- Elegir `hola@modavidc.com` como correo público principal si ya recibe correctamente.
- Mantener Gmail solo como destino interno o respaldo, no visible en el sitio.
- Usar una expectativa sostenible: “Normalmente respondo en un día hábil”.
- Orientar canales:
  - Email para propuestas o roles.
  - WhatsApp para una conversación directa.
  - LinkedIn para networking y reclutamiento.

## 10. Arquitectura de información

### Hallazgo

La navegación principal tiene cinco destinos más Contacto. Es comprensible, pero `/experiencia`, `/metodologia` y los casos repiten varias ideas: resultados, ADRs, criterio, IA y transferencia.

No es necesario reducir páginas antes de publicar. Sí conviene que cada una tenga una función exclusiva:

- **Home:** orientación y selección de camino.
- **Experiencia:** trayectoria y capacidad profesional.
- **Casos:** evidencia de resultados.
- **Metodología:** cómo se toman y ejecutan decisiones.
- **Testimonios:** validación humana, solo cuando esté aprobada.
- **Contacto:** modalidades y siguiente paso.

Usar esta definición para eliminar repeticiones durante iteraciones posteriores.

## 11. Revisión técnica preliminar

Esta no fue una auditoría técnica exhaustiva ni una prueba completa en navegadores y dispositivos. Se detectaron los siguientes puntos:

### SEO y descubrimiento

- No se observaron `robots.txt` ni `sitemap.xml` en `public`.
- No se observó un web manifest.
- Las páginas revisadas sí tienen títulos específicos y enlaces canónicos aparentes.
- Conviene verificar Open Graph, Twitter cards e imagen social antes de compartir el lanzamiento.
- Conviene comprobar que los casos detallados tengan títulos y descriptions propios.

En Next.js, robots y sitemap pueden generarse como rutas de metadata; su ausencia en `public` no prueba que no existan. Debe validarse directamente en `/robots.txt` y `/sitemap.xml` antes de implementar nada.

### Navegación y enlaces

- Las seis rutas principales responden correctamente en local.
- El CV apunta a `/assets/cv/cv.pdf`.
- Los casos enlazados desde Home utilizan rutas `/casos-de-exito/detail/...`.
- Existe un enlace a `/labs` desde Home que no forma parte de la navegación principal; debe decidirse si es contenido público o experimental.
- Debe probarse el estado 404 y todos los doce detalles de casos.

### Accesibilidad pendiente

No se validaron todavía:

- Navegación completa con teclado.
- Indicadores de foco visibles.
- Jerarquía de encabezados.
- Textos alternativos de imágenes y diagramas.
- Contraste real de textos secundarios.
- Respeto de `prefers-reduced-motion`.
- Lectura con screen reader.

### Rendimiento pendiente

No se midieron todavía:

- Core Web Vitals.
- Peso y formato de capturas.
- Impacto de diagramas y animaciones.
- Carga de Google Fonts.
- Comportamiento en una conexión móvil lenta.

### Privacidad y medición

- Confirmar si existe analytics.
- Si se incorpora analítica o tracking de terceros, documentar privacidad y consentimiento según corresponda.
- No hace falta añadir cookies o un banner si el sitio no usa tecnologías que lo requieran.

## 12. Prioridades

### P0 — Antes de publicar

Estos puntos complementan los P0 de credibilidad definidos en la auditoría v1:

- [ ] Añadir una línea clara sobre el público y problema principal en Home.
- [ ] Mostrar 2–3 modalidades de trabajo.
- [ ] Explicar en Contacto qué sucede después del primer mensaje.
- [ ] Unificar el correo público.
- [ ] Confirmar que `/labs` debe ser público; ocultar el enlace si es experimental.

### P1 — Primera iteración después de publicar

- [ ] Añadir una sección personal breve en `/experiencia`.
- [ ] Reducir repeticiones de “criterio, contexto e intención”.
- [ ] Adaptar Contacto usando `ctx=nuevo` y `ctx=rescate`.
- [ ] Crear caminos de contacto para auditoría, Tech Lead y rol in-house.
- [ ] Verificar `/robots.txt`, `/sitemap.xml`, Open Graph y tarjetas sociales.
- [ ] Probar navegación móvil, teclado, foco y contraste.
- [ ] Probar todos los detalles de casos y la página 404.

### P2 — Mejora continua

- [ ] Obtener testimonios espontáneos y aprobados sobre la experiencia de trabajo.
- [ ] Medir conversiones de los CTAs sin invadir privacidad.
- [ ] Ejecutar auditoría de rendimiento y Core Web Vitals.
- [ ] Afinar la historia personal con aprendizajes y límites reales.
- [ ] Reducir contenido repetido entre Experiencia y Metodología.

## Checklist de salida consolidado v2

La web puede publicarse cuando se cumplan los P0 de la auditoría v1 y estos cuatro puntos adicionales:

1. El visitante sabe si el sitio es para él.
2. Entiende qué puede pedir o qué rol buscas.
3. Sabe qué ocurrirá después de contactar.
4. Todos los canales de contacto muestran información coherente.

No deben bloquear el lanzamiento una nueva página Sobre mí, una reescritura total del tono, testimonios todavía no obtenidos, una optimización SEO avanzada ni una puntuación perfecta de rendimiento.

## Conclusión

modavidc.com ya demuestra autoridad. La siguiente mejora no consiste en demostrar todavía más, sino en facilitar la decisión del visitante.

El mensaje debería poder resumirse así:

> Trabajo con equipos de Healthcare y SaaS que necesitan ordenar arquitectura, costos cloud o delivery. Puedo hacerlo como auditor puntual, acompañando una etapa crítica o incorporándome como Tech Lead. Primero entiendo el contexto; después propongo el siguiente paso.

Esta formulación es una dirección editorial, no copy definitivo. Debe adaptarse a la prioridad profesional real antes de implementarse.
