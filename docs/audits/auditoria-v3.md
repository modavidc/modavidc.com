# Auditoría v3 — Estado actual (post-rediseño)

**Fecha:** 15 de octubre de 2026
**Sitio auditado:** `https://modavidc.com` (producción, build actual)
**Contexto:** El sitio se rediseñó por completo desde la auditoría v2 (julio 2026). Cambiaron rutas (`/metodologia`, `/testimonials`, `/contact` ya no existen; ahora hay `/sobre-mi`, `/experiencia`, `/casos`, `/productos`), tono, estructura y navegación. Esta auditoría no repite lo ya resuelto por el rediseño; se enfoca en lo que se observó al revisar el sitio en vivo hoy.

## Resumen ejecutivo

El rediseño resolvió varios puntos de v1/v2: ya hay un "Sobre mí" dedicado, el hero diferencia mejor el problema que resuelves, y la navegación es más clara. Pero aparecieron tres cosas nuevas que vale la pena atender, y dos puntos viejos de v2 siguen sin resolver.

### Hallazgos nuevos (no estaban en v1/v2)

1. **No hay testimonios en ningún lado del código actual.** No es que estén "mal", es que no existen: no hay contenido, ni componente, ni página. La sensación de "algo anda mal con los testimonios" probablemente viene de que el sitio no tiene ninguna señal de validación humana (ninguna cita, ninguna recomendación de LinkedIn, nada), justo lo que v1/v2 ya habían marcado como pendiente.
2. **Botones muertos en `/productos`.** En la tarjeta de Grupero, "Google Play" y "App Store · Avísame" apuntan a `href="#"`, no van a ningún lado. Es un enlace de broma visual, pero un visitante que haga clic lo nota.
3. **Error real de JavaScript en `/casos`:** `InvalidStateError: Transition was aborted because of invalid state. ViewTransition opt-in disabled`. Es la View Transition API de Next.js fallando. Coincide con un parpadeo/superposición de texto que se ve al cambiar de "piso" en la línea de tiempo de `/experiencia` (contenido de dos tarjetas distintas visible a la vez por una fracción de segundo). No rompe la función, pero se ve descuidado.

### Pendientes de v2 que siguen abiertos

4. **Concentración de casos en un solo cliente.** De las 6 métricas mostradas en `/casos`, 5 son de MediRec y solo 1 es de T-Cuida. Un visitante atento puede preguntarse si solo has trabajado con un cliente en los últimos años. No es necesariamente falso, pero concentra el riesgo de credibilidad en una sola fuente.
5. **"Qué pasa después de escribirme" sigue sin explicarse.** El bloque de contacto (`cierreContent`) pide el problema en dos líneas y un correo, pero no dice qué sigue después de enviarlo. v2 ya lo había marcado como P0.
6. **No hay "formas de trabajar conmigo" explícitas** (auditoría puntual vs. acompañamiento vs. rol in-house). El home lista *problemas que resuelves*, no *modalidades de contratación*. Sigue siendo ambiguo si alguien puede pedir una auditoría de una semana o solo un rol de tiempo completo.

### Lo que ya está bien resuelto

- Existe `/sobre-mi` con historia personal real (no estaba en v2).
- `robots.txt`, `sitemap.xml` y el CV responden 200. La ruta 404 devuelve 404 correctamente.
- El posicionamiento del hero ahora sí nombra el problema ("Hagamos cosas difíciles" + bajar factura AWS) antes que la identidad abstracta.

## Prioridades sugeridas

**P0 (arreglo rápido, bajo esfuerzo):**
- [ ] Quitar o completar los links muertos de Google Play / App Store en Grupero (ocultar el botón si la app no está publicada, en vez de un `#`).
- [ ] Revisar el error de ViewTransition en `/casos` (probablemente basta con desactivar `viewTransition` en la config de Next.js si sigue siendo experimental, o envolver la navegación correctamente).

**P1 (requiere contenido, no solo código):**
- [ ] Agregar un bloque corto "Qué pasa después de escribirme" en la sección de contacto.
- [ ] Agregar 2-3 modalidades de trabajo explícitas (auditoría puntual / acompañamiento / in-house).
- [ ] Si hay manera de sumar un caso de un cliente distinto a MediRec (aunque sea T-Cuida con más detalle, o PREIS que se menciona de pasada), ayuda a diversificar.

**P2 (cuando haya insumos):**
- [ ] Testimonios reales, aprobados, cuando existan. No inventar ni usar citas no verificadas (esto ya lo había bloqueado v1 y sigue siendo correcto).

## No verificado en esta pasada

- Vista móvil real (el resize de ventana en esta sesión no cambió el layout, no se pudo confirmar breakpoints).
- Accesibilidad (teclado, foco, contraste, lectores de pantalla).
- Rendimiento / Core Web Vitals.

Estos quedan pendientes de una pasada dedicada si se quiere profundizar.
