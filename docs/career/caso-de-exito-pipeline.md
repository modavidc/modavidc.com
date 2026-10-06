# Caso de éxito: pipeline de datos de fármacos para MediRec

**Contexto.** MediRec es una plataforma de e-prescribing (recetas electrónicas) que depende de
datos de fármacos actualizados y correctos — clasificación OTC/receta, sustancias controladas,
interacciones medicamentosas, y búsqueda por marca comercial — para que un médico pueda
prescribir con seguridad. Esa data se refresca mensualmente desde la fuente oficial del NIH/NLM
(RxNav-in-a-Box) y se carga a la base de producción que consume el software de prescripción.

**El problema.** El pipeline que automatiza esa carga mensual (extracción, clasificación,
transformación a SQL Server, validación) existía y estaba documentado, pero nunca se había
corrido de punta a punta contra infraestructura real — solo se había probado en modo simulado.
Antes de una prueba en vivo con un cliente, hacía falta ejecutarlo de verdad por primera vez y
confirmar que la documentación reflejaba lo que realmente pasaba.

**Lo que encontramos y arreglamos.** Correrlo por primera vez contra datos e infraestructura
reales sacó a la luz seis bugs reales que ningún test aislado había detectado:

- Dos consultas SQL que el motor de base de datos ejecutaba con un plan de ejecución
  ineficiente — una directamente no terminaba nunca; se identificó la causa raíz exacta
  (elección de tabla conductora, límite conocido del motor con subconsultas correlacionadas
  dentro de un `UPDATE`) y se corrigió con reescrituras dirigidas, validadas después contra
  datos reales.
- Un bug de PowerShell donde una tabla de resultados se "aplanaba" silenciosamente al volver de
  una función — causaba tanto errores visibles como un cuelgue silencioso de casi media hora en
  el paso de espera del pipeline, sin ningún mensaje de error. Encontrarlo requirió aislar el
  comportamiento con pruebas dirigidas hasta reproducirlo de forma controlada.
- Dos problemas de configuración TLS/certificado entre el pipeline y SQL Server (driver ODBC
  moderno exigiendo un certificado de confianza que el entorno no tenía).
- Un chequeo de credenciales que no reconocía un valor de placeholder como "no configurado",
  intentando autenticar con un valor literal en vez de saltar el paso correctamente.

Cada fix quedó en el código fuente del pipeline (no como parche puntual de esta corrida), con
la causa raíz documentada para que no haya que re-diagnosticar lo mismo el mes que viene.

**Validación.** Al final de la corrida, una prueba de aceptación automatizada comparó ocho
búsquedas de marcas comerciales reales entre la fuente y el destino — coincidencia exacta,
1 a 1. Se verificaron también los casos puntuales que habían generado reportes reales de
usuarios (ej. multivitamínicos que no aparecían correctamente clasificados como OTC), confirmando
que la corrección ya vigente en el pipeline seguía funcionando contra el release más reciente.

**Extra: continuidad de datos y automatización de respaldo.** Se identificó y preservó
correctamente un conjunto de datos de interacciones medicamentosas que la fuente oficial ya no
provee (discontinuada por el NIH en 2024) — enriquecimiento propio que el pipeline debe
preservar intacto release tras release, no regenerar. Se automatizó además un paso de respaldo
comprimido y verificado de la base de staging (con su script de restauración complementario,
probado de punta a punta) para que el equipo pueda compartir un snapshot confiable en minutos.

**Resultado.** El pipeline pasó de "nunca verificado contra infraestructura real" a correr de
punta a punta, sin intervención manual, en aproximadamente 15-17 minutos — con cada paso
validado automáticamente y documentado paso a paso. Quedó listo para la prueba en vivo con el
cliente al día siguiente.

---

*Nota de proceso: este trabajo se hizo en colaboración con Claude Code (Anthropic) como
copiloto de ingeniería — diagnóstico interactivo, redacción de fixes, y documentación en
tiempo real de cada hallazgo.*
