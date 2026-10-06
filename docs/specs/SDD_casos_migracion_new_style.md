# SDD — Migración de casos de éxito al nuevo diseño y estilo de comunicación

**Estado:** Borrador  
**Fecha:** 2026-05-21  
**Autor:** Moisés Cedeño

---

## 1. Objetivo

Migrar los 8 casos de éxito que usan el diseño genérico (`detail/[id]/page.tsx` + `ProjectDetailClient`) al nuevo diseño narrativo con scroll-spy TOC, evidencia en carousel y decisiones técnicas razonadas.

Ejemplos de referencia (nuevo estilo):
- `/casos-de-exito/detail/surescripts-certification`
- `/casos-de-exito/detail/licencias-farmaceuticas`

---

## 2. Estado actual vs. estado objetivo

### Ruta actual (genérica)

```
app/casos-de-exito/detail/[id]/page.tsx
  ↳ Renderiza narrative-section + narrative-kicker + narrative-body
  ↳ Texto plano, sin TOC, sin carousel, sin cards de decisión
  ↳ Datos de lib/projects.ts (fields: context, challenge, criterion, execution, outcome, legacy)
```

### Ruta objetivo (nuevo estilo — patrón de surescripts/licencias)

```
app/casos-de-exito/detail/{slug}/page.tsx   ← route estática con prioridad sobre [id]
  ↳ Importa <XxxDetail /> component
  ↳ Scroll-spy TOC (sidebar desktop, slide-in mobile + progress bar)
  ↳ EvidenceCarousel con capturas reales
  ↳ Cards de decisión con "Por qué" explícito
  ↳ Métricas de resultado destacadas
  ↳ Lista de entregables
```

---

## 3. Patrón de implementación (template)

Cada caso nuevo requiere:

### 3.1 Archivos a crear

| Archivo | Descripción |
|---|---|
| `app/casos-de-exito/detail/{slug}/page.tsx` | Página con metadata + `<XxxDetail />` |
| `components/{slug}-detail.tsx` | Componente cliente con TOC + secciones |

### 3.2 Secciones del TOC (estándar)

```
01 · Contexto       — situación inicial, cliente, por qué existía el problema
02 · Desafío        — qué lo hacía difícil (técnico, regulatorio, organizacional)
03 · Mi rol         — qué hice yo específicamente
04 · Mi criterio    — decisiones técnicas con razonamiento explícito
05 · Arquitectura   — stack + diagrama de grupos
06 · Resultado      — métricas concretas en cards
07 · Lo que dejé    — entregables + legado operativo
08 · [Específico]   — sección única del caso (ej: certificación, compliance, evidencia física)
```

### 3.3 Estilo de comunicación (reglas)

- **Título:** "Cómo [verbo pasado] [resultado medible]"
- **Contexto:** situación inicial con datos concretos, sin adjetivos vacíos
- **Desafío:** qué lo hacía difícil, no qué se hizo — puede incluir listas numeradas
- **Mi criterio:** cada decisión tiene número ("Decisión 01"), título y "Por qué" explícito
- **Resultado:** métricas en cards, no en párrafo corrido. Comparar antes/después cuando aplique
- **Sin guiones largos (—):** preferir coma, punto o conector natural

### 3.4 EvidenceCarousel (slides requeridos por caso)

Cada caso necesita 3-4 slides con:
- Captura de pantalla o diagrama real
- Label corto (ej: "Arquitectura · AWS · PREIS")
- Caption descriptivo de lo que muestra

---

## 4. Casos a migrar — plan individual

### Caso 1 — `preis-integration`

**Título actual:** "Automaticé reportes de vacunaciones al Gobierno. 1,200+ sin errores, 4 años operando"  
**Título nuevo:** "Cómo integré MediRec con el Gobierno de PR — 1,200+ vacunas, 4 años sin errores"  
**Categoría:** Gov-Tech · Healthcare · 2021-2025

**TOC propuesto:**
```
01 Contexto     — Ley 169 de 2019, proceso manual en Excel, 2-3h semanales
02 Desafío      — HL7 v2.5.1 variante PR, 62 códigos únicos tabla 0292, mTLS, spec cambia sin aviso
03 Mi rol       — Diseño + implementación del gateway PHP/Laravel + integración C#
04 Mi criterio  — 4 decisiones: gateway separado, 3 niveles de validación, errores inteligentes, mapeo centralizado
05 Arquitectura — PHP/Laravel, HL7, mTLS, Redis Queue, C# client, MySQL
06 Resultado    — 1,200+ VXU, 99.2% éxito, 3 clínicas MCHC, 4 años operando
07 Lo que dejé  — Tabla de mapeo 62 códigos, CSR template, runbook, 50+ test cases, error codes ref
08 Compliance   — Cumplimiento Ley 169 de 2019 (reportar en 24h), evidencia de producción
```

**Decisiones para "Mi criterio":**
- Decisión 01: Gateway separado del C#  
  _Por qué: Si PREIS cambia spec (como pasó v2.1 → v2.2), actualizo Laravel sin tocar desktop de 1,000+ clínicas_
- Decisión 02: Validación en 3 niveles  
  _Por qué: Cada nivel rechaza errores distintos. No reintentar errores de datos porque van a fallar siempre_
- Decisión 03: Diferencia errores transitorios vs. errores de datos  
  _Por qué: Timeout → reintentar. RXA-16 inválido → fallar inmediatamente con mensaje a C#_
- Decisión 04: Mapeo de códigos centralizado y versionado  
  _Por qué: MCHC COVID19_PFIZER → tabla 0292 código 220. Auditable. Escalable a nuevas clínicas sin código_

**Evidence slides (por producir):**
1. Diagrama de arquitectura: C# → Laravel Gateway → mTLS → PREIS → ACK/NACK
2. Fragmento real de mensaje HL7 v2.5.1 (VXU con campos PR) — o captura del builder
3. Log de producción con líneas de éxito y NACK (datos anonimizados)
4. Tabla de mapeo de 62 códigos de vacunas (captura del doc interno o BD)

**Sección específica (08):** "Compliance · Ley 169 de 2019"
- Qué dice la ley (reportar dentro de 24h)
- Cómo el gateway garantiza cumplimiento automático
- Qué pasa si PREIS no responde (cola Redis, reintento con TTL de 24h)

---

### Caso 2 — `medirec-aws`

**Título actual:** "Cómo bajé 65% el costo de AWS sin interrumpir nada" ✓ (ya usa "Cómo")  
**Título nuevo:** igual (buen título)  
**Categoría:** FinOps · Healthcare · 2023

**TOC propuesto:**
```
01 Contexto     — Infraestructura fantasma, $912/mes, equipo con miedo de tocar nada
02 Desafío      — Healthcare: downtime = consecuencias reales. Sin documentación, sin visibilidad
03 Mi rol       — Auditoría completa + diseño del plan de 4 fases + ejecución
04 Mi criterio  — Backup primero siempre, auditoría de actividad real, separación prod/staging, Savings Plans
05 Arquitectura — AWS Cost Explorer, CloudWatch, EC2, RDS, EBS, Savings Plans 3-año
06 Resultado    — $912 → $318/mes, $7.1K/año, 100% uptime mantenido, infraestructura documentada
07 Lo que dejé  — Runbook gobernanza, dashboard Cost Explorer, plan validación mensual backups
08 FinOps       — Análisis Savings Plans vs. on-demand: cómo se tomó la decisión de 3 años
```

**Decisiones para "Mi criterio":**
- Decisión 01: Backup primero, optimizar después  
  _Por qué: Eliminar algo sin snapshot = riesgo irreversible en healthcare_
- Decisión 02: Auditoría de actividad real antes de destruir  
  _Por qué: Encontré servicios con 34 envíos en todo el año junto a uno con 1.6M. No se puede adivinar_
- Decisión 03: Separar prod/staging/dev en servidores independientes  
  _Por qué: Cumplimiento HIPAA + eliminar riesgo de tocar producción por error en pruebas_
- Decisión 04: Savings Plans 3-años para carga base + on-demand para picos  
  _Por qué: Carga base predecible → comprometer. Picos de fin de mes → on-demand. $912 → $318_

**Evidence slides (por producir):**
1. Captura Cost Explorer: $912/mes → $318/mes (si existe screenshot)
2. Diagrama de infraestructura antes/después (instancias eliminadas vs. mantenidas)
3. Plan de fases en tabla/gantt (mayo-julio 2023, 4 fases)
4. Savings Plans dashboard o análisis de costo comparativo

**Sección específica (08):** "El plan de 4 fases"
- Fase 1: Auditoría (qué actividad real tenía cada servicio)
- Fase 2: Backups defensivos (todos los EC2/EBS antes de eliminar nada)
- Fase 3: Destroy gradual
- Fase 4: Rightsizing + Savings Plans

---

### Caso 3 — `medirec-backup-dr`

**Título actual:** "Cómo dejé RTO en 60 min y RPO en 0h para 15 volúmenes" ✓  
**Título nuevo:** igual  
**Categoría:** Infrastructure · Healthcare · 2024-2025

**TOC propuesto:**
```
01 Contexto     — 15 volúmenes EBS sin política, sin SLA, sin HIPAA compliance
02 Desafío      — Un backup sin restore test no es un backup. Sin saber cuánto tarda recuperar nada
03 Mi rol       — Diseño de política de 4 capas + manual operativo + plan de validación mensual
04 Mi criterio  — RPO diferenciado, RTO medido (no estimado), validación mensual obligatoria
05 Arquitectura — AWS Backup, EBS Snapshots, Glacier Deep Archive, CloudWatch, KMS
06 Resultado    — RTO 60min críticos (validado real: 6-30min), RPO 0h, $80-120/mes
07 Lo que dejé  — 3 docs oficiales (Política, Manual, Calendario), 14 procedimientos, 2 informes
08 Validación   — Informe de restore testing: 162/162 registros íntegros
```

**Decisiones para "Mi criterio":**
- Decisión 01: RPO diferenciado por sistema  
  _Por qué: PREIS y Recetas son críticos (12h). Staging puede perder 24h. No hay una sola política_
- Decisión 02: Validación mensual, no confianza ciega  
  _Por qué: Un backup que nunca se probó no tiene SLA real. Primer viernes del mes: restore en staging_
- Decisión 03: RTO medido, no estimado  
  _Por qué: Escribir "RTO 60min" sin haberlo medido es promesa vacía. Medí: 6-30min real_
- Decisión 04: Glacier para retención de 6 meses  
  _Por qué: HIPAA requiere retención. Glacier Deep Archive = $0.00099/GB/mes. Compliance a costo mínimo_

**Evidence slides (por producir):**
1. AWS Backup Plan: configuración de 4 capas (screenshot o diagrama)
2. Informe de restore testing: 162/162 registros íntegros (captura anonimizada)
3. Política de RTO/RPO: tabla con sistemas críticos vs. estándar
4. Esquema de arquitectura: prod/staging/critical con sus respectivos planes de backup

---

### Caso 4 — `t-cuida-multitenant`

**Título actual:** "Cómo validé escala a 20K usuarios para una Series A usuarios — cost envelope claro"  
**Título nuevo:** "Cómo validé escala a 20K usuarios para una Series A — cost envelope con números"  
**Categoría:** SaaS · Architecture · 2024

**TOC propuesto:**
```
01 Contexto     — Plataforma multi-tenant, pregunta crítica de inversores: ¿escala a 20K? ¿cuánto cuesta?
02 Desafío      — Load testing realista vs. simbólico. Sin respuesta sólida, no hay Series A
03 Mi rol       — Diseño de campaña de 6 semanas: escenarios, ambiente, ejecución, análisis
04 Mi criterio  — 3 escenarios de concurrencia realistas (10/20/30%), stress hasta fallo, cost envelope
05 Arquitectura — JMeter + k6, AWS EC2 c6a, RDS, Redis, Pusher, CloudWatch
06 Resultado    — 20K validados, $672-$1K/mes, error rate <0.2%, 3 capas de aislamiento
07 Lo que dejé  — JMeter plans, k6 scripts, capacity planning spreadsheet, bottlenecks documentados
08 Series A     — Cómo se presentó a inversores: qué dijeron y qué números usaron
```

**Decisiones para "Mi criterio":**
- Decisión 01: 3 escenarios realistas, no uno solo  
  _Por qué: 10% = operación normal, 20% = pico laboral, 30% = crisis. Los inversores preguntaron los tres_
- Decisión 02: Stress testing hasta fallo para conocer límites exactos  
  _Por qué: Saber dónde falla es más valioso que saber dónde funciona bien_
- Decisión 03: Cost envelope como entregable principal  
  _Por qué: Los inversores no preguntan "¿funciona?" sino "¿cuánto cuesta escalar?"_
- Decisión 04: Validar aislamiento multi-tenant en las 3 capas  
  _Por qué: Una fuga de datos entre tenants en seguridad corporativa es catastrófica_

**Evidence slides (por producir):**
1. Dashboard CloudWatch bajo carga (response times p50/p90/p99)
2. Tabla de cost envelope: 3 escenarios x instancia ($ por escenario)
3. Gráfico de error rate bajo los 3 escenarios
4. Arquitectura multi-tenant: 3 capas de aislamiento (middleware, Form Request, Eloquent)

---

### Caso 5 — `t-cuida-audit`

**Título actual:** "Cómo subí un codebase de 41 a 78/100 en 6 meses → Series A ready (78/100) en 6 meses"  
**Título nuevo:** "Cómo subí un codebase de 41 a 78/100 en 6 meses"  
**Categoría:** SaaS · Codebase · 2024

**TOC propuesto:**
```
01 Contexto     — Auditoría externa: 41/100, nivel CRÍTICO, bloqueador Series A
02 Desafío      — No es arreglar bugs. Cada mejora tiene que ser trazable con datos duros
03 Mi rol       — Framework propio de 10 dimensiones + ejecución sistemática de remediación
04 Mi criterio  — Scoring ponderado, each ticket = código + tests, no parchar sino redesign
05 Arquitectura — Laravel 10, PHPUnit, Spatie, MySQL 8, Redis, CI/CD GitHub Actions
06 Resultado    — 78/100 (+37pts), 1,789 tests, Security +2.5, Architecture +3.7, onboarding 48h
07 Lo que dejé  — Framework reutilizable, 1,892 tests, arquitectura documentada, onboarding guide
08 El framework — Las 10 dimensiones con pesos y scores inicial/final
```

**Decisiones para "Mi criterio":**
- Decisión 01: Framework de scoring con pesos ponderados  
  _Por qué: Security (20%) pesa diferente a Frontend (4%). Sin pesos, una mejora de CSS sería equivalente a eliminar SQL injection_
- Decisión 02: Cada mejora = ticket + código + tests (nada de "ya lo arreglé")  
  _Por qué: Los inversores querían demostración, no declaración. Cada ticket cerraba con tests que validaban la mejora_
- Decisión 03: VoiceController 3,008 LOC → 22 LOC stub + 9 controllers especializados  
  _Por qué: Un controller de 3K LOC no es arquitectura, es deuda. Single responsibility no es opcional_
- Decisión 04: No parar de entregar features durante la remediación  
  _Por qué: El negocio sigue. Remediación y entregas en paralelo durante 6 meses_

**Evidence slides (por producir):**
1. Comparación de score antes/después por dimensión (radar chart o tabla)
2. Ejemplo de diff: VoiceController antes (3,008 LOC) vs. después (stub + 9 controllers)
3. Dashboard de test coverage: 9.7% → 99%
4. Timeline de 6 meses con hitos por dimensión

---

### Caso 6 — `vipapp-patient-ehr`

**Título actual:** "Cómo entregué 15+ pantallas Flutter en 2 meses del paciente. 15+ pantallas en 2 meses, offline-first"  
**Título nuevo:** "Cómo entregué una app Flutter completa en 2 meses — primer proyecto, sin IA, offline-first"  
**Categoría:** Mobile · Healthcare · 2020-2021

**TOC propuesto:**
```
01 Contexto     — MediRec sin app, competidores con mobile, pacientes sin acceso remoto
02 Desafío      — Primer proyecto Flutter. Sin IA en 2020. Offline-first obligatorio en salud
03 Mi rol       — Diseño de arquitectura + desarrollo Flutter + backend REST + offline sync
04 Mi criterio  — Offline-first no es opcional, BLoC+RxDart, Workmanager, 11 tablas SQLite
05 Arquitectura — Flutter 2.7-3.0, Dart, BLoC+RxDart, SQLite (sqflite), Workmanager, HTTP
06 Resultado    — VIPApp v1.0.0 iOS+Android, 15+ pantallas, 3,500 LOC, sync bidireccional
07 Lo que dejé  — Docs arquitectura, SQLite schema, BLoC patterns, release checklist
08 Aprendizaje  — Cómo aprendí Flutter en 2 meses sin IA: enfoque, fuentes, errores
```

**Decisiones para "Mi criterio":**
- Decisión 01: Offline-first como requisito no negociable  
  _Por qué: En salud, si pierde Internet a mitad de la consulta, los datos no pueden desaparecer_
- Decisión 02: BLoC + RxDart para estado reactivo  
  _Por qué: BehaviorSubject + combineLatest2 para datos dependientes. InheritedWidget manual no escala a 14 BLoCs_
- Decisión 03: Workmanager para sync automático cada 15min  
  _Por qué: El usuario no debería tener que pulsar "sincronizar". La app hace su trabajo en background_
- Decisión 04: SQLite con 11 tablas = réplica exacta de schema MySQL  
  _Por qué: Si local y servidor tienen el mismo schema, el algoritmo de sync es predecible. Sin sorpresas_

**Evidence slides (por producir):**
1. Diagrama de arquitectura offline-first (SQLite ↔ Workmanager ↔ API)
2. Captura de pantalla de la app (pantalla de medicamentos o historial) — si existe
3. BLoC diagram: flujo de estado de una pantalla compleja
4. Schema SQLite: las 11 tablas con sus relaciones

---

### Caso 7 — `ores-laboratory-api`

**Título actual:** "Cómo reduje órdenes de lab de 5 días a 4 horas — 40K/mes en 4–24h (antes 2–5 días)"  
**Título nuevo:** "Cómo automaticé 40K órdenes de laboratorio por mes — de 5 días a 4 horas"  
**Categoría:** Healthcare · API Integration · 2022

**TOC propuesto:**
```
01 Contexto     — Flujo manual: doctor → imprime → lab → llama → ingresa manual. 2-5 días, 5-10% errores
02 Desafío      — HL7 heterogéneo (cada lab diferente), multi-cliente, escalabilidad de 0 a 40K/mes
03 Mi rol       — Arquitectura de ORES + API Laravel + integración C# en abcEHR + onboarding 25 labs
04 Mi criterio  — API centralizada (no P2P), autenticación diferenciada, pull model, HL7 en BD
05 Arquitectura — Laravel 10, MySQL 8, JWT, HL7 v2.5.1, TCPDF, C# .NET, Monolog
06 Resultado    — 40K+ órdenes/mes, 25+ labs, 99.8% uptime, 4-24h (antes 2-5 días)
07 Lo que dejé  — OpenAPI/Swagger 50+ endpoints, HL7 Mapping Guide, Lab Integration Guide, runbook
08 Integración  — Cómo funciona el flujo completo: doctor → ORES → lab → resultado → doctor
```

**Decisiones para "Mi criterio":**
- Decisión 01: API centralizada, no P2P doctor-lab  
  _Por qué: Si un lab falla, los otros 24 siguen. Auditoría centralizada. Agregar lab = 0 código_
- Decisión 02: JWT para labs, API keys para doctores  
  _Por qué: Labs tienen sistemas web (JWT 2h es seguro). Doctores usan C# desktop (API keys son más simples)_
- Decisión 03: Pull model para labs (consultan /pending cada 5min)  
  _Por qué: Webhooks asumen que el lab tiene servidor público estable. Pull tolera desconexiones_
- Decisión 04: Almacenar HL7 en BD  
  _Por qué: Auditoría de qué se envió exactamente. Reenvío si el lab falla. Debugging sin logs complejos_

**Evidence slides (por producir):**
1. Diagrama de flujo completo: doctor (abcEHR C#) → ORES API → laboratorio → resultado
2. Captura de endpoint /pending en Postman (o curl) con respuesta HL7
3. Tabla de 25 laboratorios integrados (nombres anonimizados si aplica) o estructura de onboarding
4. Gráfico de timeline: antes (2-5 días) vs. después (4-24h)

---

### Caso 8 — `grupero`

**Título actual:** "Cómo llevé un side-project SaaS de idea a v0.2.0 — De idea a v0.2.0"  
**Título nuevo:** "Cómo construí un SaaS propio de cero a v0.2.0 con 12 beta testers activos"  
**Categoría:** Personal · SaaS · 2026

**TOC propuesto:**
```
01 Contexto     — Admin de 6 grupos 150+ personas, decisiones a ciegas, perseguir confirmaciones
02 Desafío      — Parser robusto (iOS vs Android, US vs ES dates), lógica de negocio compleja, freemium
03 Mi rol       — Producto, diseño, desarrollo, marketing — solo
04 Mi criterio  — Offline-first, Spec-Driven Development, Riverpod, design system propio
05 Arquitectura — Flutter, Dart, Riverpod 2.4.9, Hive, OpenAI API, fl_chart, GoRouter
06 Resultado    — v0.2.0, 26,500 LOC Dart, 12 beta testers, 47 grupos analizados, freemium validado
07 Lo que dejé  — 6 specs aprobados, design tokens (AppColors, AppTypography), BRD, marketing plan
08 Roadmap      — v0.3 (tests + CI/CD + iOS beta) → v1.0 (i18n, Play Store) — qué sigue y por qué
```

**Decisiones para "Mi criterio":**
- Decisión 01: Spec-Driven Development (no build-then-fix)  
  _Por qué: 6 specs aprobados antes de código. Cada spec tiene CAs verificables. Menos pivots_
- Decisión 02: Parser de 408 líneas (no regex simple)  
  _Por qué: WhatsApp exporta diferente en iOS, Android, US y ES. Regex falla en edge cases que son el 30%_
- Decisión 03: Freemium con límite de 3 análisis (no paywall inmediato)  
  _Por qué: Beta testers necesitan probar el valor antes de pagar. 3 análisis = suficiente para convencerse_
- Decisión 04: 100% offline (datos nunca salen del teléfono)  
  _Por qué: Grupos de WhatsApp tienen conversaciones privadas. Privacy-first es el diferenciador_

**Evidence slides (por producir):**
1. Captura de pantalla de la app (pantalla de análisis de grupo o clasificación deportiva)
2. Diagrama del parser: formatos de entrada → estructura de salida
3. Screenshot del paywall / UpgradeSheet (freemium UX)
4. Roadmap visual: v0.2 → v0.3 → v1.0

---

## 5. Secuencia de ejecución recomendada

Ordenado por impacto narrativo (los que tienen más historia técnica sólida primero):

| Prioridad | Caso | Por qué primero |
|---|---|---|
| 1 | `preis-integration` | Ejemplo "viejo" explícito del usuario. Gov-Tech es diferenciador único |
| 2 | `medirec-aws` | FinOps es uno de los más visitados. Métricas son convincentes ($912→$318) |
| 3 | `t-cuida-audit` | Framework de 10 dimensiones es el más "demostrable" ante investors |
| 4 | `ores-laboratory-api` | 40K/mes y 25+ labs son números impresionantes para healthcare |
| 5 | `medirec-backup-dr` | Complementa al medirec-aws, mismo cliente |
| 6 | `t-cuida-multitenant` | Complementa al t-cuida-audit, misma plataforma |
| 7 | `vipapp-patient-ehr` | Historia personal de aprendizaje (primer Flutter sin IA) |
| 8 | `grupero` | Proyecto en curso, roadmap activo |

---

## 6. Assets requeridos antes de implementar cada caso

Para cada caso, antes de escribir el componente necesitas tener los 4 slides de evidencia. Sin imágenes el carousel queda vacío.

### Opciones para evidencia sin capturas reales:

1. **Diagrama de arquitectura:** Crear con draw.io o Excalidraw y exportar como PNG
2. **Fragmento de código:** Screenshot de VS Code con el código real (ej: send() de surescripts, o el HL7 builder de PREIS)
3. **Log de producción:** Captura de terminal o Monolog con datos anonimizados
4. **Tabla/documento:** Screenshot de la tabla de mapeo de códigos o del informe de restore testing

Las imágenes van en `/public/assets/evidence/{slug}--{descripcion}.png`

### Convención de nombres:
```
preis-integration--architecture-diagram.png
preis-integration--hl7-vxu-message.png
preis-integration--production-log-ack.png
preis-integration--vaccine-code-mapping.png
```

---

## 7. Dependencias técnicas

- **CSS compartido:** Los componentes nuevos usan clases `.ss-*` definidas en `app/globals.css`. Revisar si aplica para todos los casos o si se crea un namespace nuevo (ej: `.nd-*` para "narrative design")
- **EvidenceCarousel:** Ya existe en `components/evidence-carousel.tsx`. Reutilizar sin modificar
- **Routing:** Crear `app/casos-de-exito/detail/{slug}/page.tsx` — Next.js da prioridad a rutas estáticas sobre `[id]`, no hay conflicto
- **Metadata:** Cada `page.tsx` necesita `generateMetadata` con título, descripción y OpenGraph

---

## 8. Lo que NO cambia

- La página del listado (`app/casos-de-exito/page.tsx`) — solo cambia el href si el slug del caso cambia
- Los datos en `lib/projects.ts` — los campos existentes siguen siendo fuente de verdad; el nuevo componente embebe su propio contenido como en surescripts/licencias
- El `EvidenceCarousel` component — se reutiliza sin modificaciones
- El CSS de las clases `.ss-*` ya definidas

---

## 9. Criterio de "listo"

Un caso está completo cuando:

- [ ] Componente `{slug}-detail.tsx` creado con las 8 secciones
- [ ] Scroll-spy TOC funcional en desktop y mobile
- [ ] EvidenceCarousel con 3-4 slides reales
- [ ] Al menos 3 decisiones en "Mi criterio" con "Por qué" explícito
- [ ] Métricas en cards (sección Resultado)
- [ ] Lista de entregables en "Lo que dejé"
- [ ] Página `detail/{slug}/page.tsx` con metadata OpenGraph
- [ ] El caso es accesible desde el listado sin cambiar hrefs
