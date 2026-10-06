# Grupero: Analytics de Grupos WhatsApp con IA

**Proyecto:** App Android SaaS personal para analizar chats exportados de WhatsApp  
**Período:** 2026 (en desarrollo activo, v0.2.0)  
**Formato:** Freemium (3 análisis gratis, Pro con API key)  
**Resultado:** 26,500 LOC Dart, 15+ pantallas, parser robusto + IA conversacional, Sistema de diseño propio

---

## La Idea

Soy admin de 6 grupos de WhatsApp con +150 personas cada uno. Siempre me hago las mismas preguntas:
- ¿Quién participa realmente? ¿Quién es fantasma?
- ¿El grupo está muriendo? (¿hay tendencia a la baja?)
- ¿Cuándo es el mejor momento para publicar una convocatoria?
- En grupos deportivos: ¿quién es fijo? ¿Quién está en riesgo? ¿Quién nunca confirma pero aparece?

**Solución:** App que exportas el chat → te da radiografía completa de tu grupo.

---

## Funcionalidades Implementadas

### Core Analytics

| Módulo | Qué hace | Complejidad |
|--------|----------|-----------|
| **Parser WhatsApp** | Lee .txt o .zip exportado, detección automática de formato (iOS/Android, US/ES dates) | **Alta** |
| **Ranking de participación** | Tabla: mensajes, palabras, caracteres por persona + ordenamiento dinámico | Media |
| **Clasificación de miembros** | 5 categorías: Activo / En riesgo / Inactivo / Observador silencioso / Esporádico | **Alta** |
| **Salud del grupo** | Score 0-100 con semáforo + alertas (silencio prolongado, decay) | **Alta** |
| **Heatmap 7×24** | Grilla día × hora normalizada para ver "cuándo está activo el grupo" | Media |
| **Tendencia mensual** | Gráfico de línea con trend color (verde=crecimiento, rojo=decay) | Media |

### Casos de Uso Específicos

#### Grupos Deportivos
```
Clasificación automática:
├─ FIJO: confirmó último 3 eventos, asistencia 100%
├─ PROBABLE: confirmó último evento, no los 3 previos
├─ RIESGOSO: confirmó pero no asistió hace 2+ eventos
├─ CHANCLETA: nunca confirma pero aparece (impredecible)
└─ GHOST: no confirma, no aparece

Métricas:
├─ Ghost score: % de miembros inactivos
├─ Fill rate: % promedio de confirmaciones vs participantes
└─ Historial de asistencia: por evento, por participante
```

#### Eventos & Convocatorias
```
Detección automática de:
├─ Mensajes de convocatoria (regex: "a las", "se juega", "el X de Y")
├─ Confirmaciones de asistencia (😀, ✅, "dale", "listo")
├─ Cancelaciones
└─ Historial de participación por evento
```

### IA Chat

App integrada con OpenAI. Preguntas naturales sobre tu grupo:
```
"¿Quién debería estar en riesgo de purga?"
"¿A qué hora están más activos?"
"¿Cuál fue el evento con más confirmaciones?"
"Top 5 participantes por palabras"
```

Respuesta con análisis en contexto del grupo específico (no genérico).

### Sistema Freemium

```
FREE:
├─ Máximo 3 análisis guardados
├─ Sin IA conversacional
└─ Sin exports (CSV, PDF, PNG)

PRO (API key):
├─ Análisis ilimitados
├─ IA conversacional completa
├─ Exports en 3 formatos
├─ Historial de evolución (comparar análisis)
└─ Notas por miembro
```

### UX & Diseño

- **15+ pantallas:** Home → Import → Analysis Dashboard → ParticipantDetail → IaChat → Settings
- **Sistema de diseño propio:** AppColors, AppTypography, AppSpacing, AppShadows (tokens dark/light)
- **Animaciones fluidas:** flutter_animate, transiciones entre vistas, empty states
- **Accesibilidad parcial:** dark mode, responsive (pero sin Semantics aún)

---

## Stack Técnico

| Componente | Tecnología | Por qué |
|-----------|-----------|----------|
| **Framework** | Flutter 3.11.1 | Multiplataforma (Android-only por decisión, iOS later) |
| **Lenguaje** | Dart (null-safety) | Type-safe, idiomático Flutter |
| **Estado** | Riverpod 2.4.9 | Gestor de estado moderno, reactividad, sin boilerplate |
| **Persistencia** | Hive 2.2.3 | Local-first, offline, rápido. Hand-written JSON (no code generation) |
| **BD Segura** | flutter_secure_storage | API key guardada encriptada |
| **Gráficos** | fl_chart | Heatmap, line chart, bar chart. Heatmap propio (custom widget) |
| **IA / OpenAI** | http + OpenAI API | Chat completions, contexto del grupo |
| **Export** | csv, pdf, share_plus | CSV para Excel, PDF para imprimir deportivos, PNG para compartir |
| **Parsing ZIP** | archive 4.0.4 | Descomprimir .zip de WhatsApp, acceder a chat.txt |
| **Diseño** | Material 3 + tokens propios | Sistema de diseño consistente |
| **Animaciones** | flutter_animate | Transiciones, shimmer loading |

---

## Decisiones Técnicas Clave

### 1. ¿Android-only vs Multiplataforma?

**Decisión:** Android-only por ahora.

**Razón:**
- Producto propio, sin inversores presionando
- Focus: validar idea con Android users (grupos deportivos, HOAs)
- iOS requires Apple Developer account + testing en device real
- SaaS freemium modelo: mejor validar en plataforma dominante (Android)

**Roadmap:** iOS cuando corra + valide monetización.

### 2. ¿Hive vs Isar vs Drift?

**Decisión:** Hive con hand-written JSON (no code generation).

**Razón:**
- Hive no requiere compilación (sin `build_runner`)
- Local-first: no servidor, sin sync
- Hand-written serialization ≈ 100 líneas extra pero controlable
- Alternativas (Isar, Drift) más complejas para v0

**Debilidad:** Hive almacena strings, no native. Readability trade-off.

### 3. ¿Riverpod vs Provider vs Redux?

**Decisión:** Riverpod 2.4.9 con ConsumerWidget + AsyncValue.

**Razón:**
- Riverpod 2.x es estándar actual (mejor que Provider)
- Reactive: `ref.watch(analysisProvider)` rebuilda automáticamente
- AsyncValue maneja loading/error/data elegantly
- Sin boilerplate vs Redux

**Implementación:**
```dart
// Análisis actual
final analysisProvider = StateNotifierProvider<AnalysisNotifier, AsyncValue<ChatAnalysis?>>

// Actualizar cuando importa
ref.read(analysisProvider.notifier).setAnalysis(newAnalysis)

// UI observa
ref.watch(analysisProvider)
```

### 4. ¿IA Local vs Cloud (OpenAI)?

**Decisión:** Cloud (OpenAI GPT-4o mini).

**Razón:**
- Freemium model: users pagan por respuestas de IA, yo pago a OpenAI
- Contexto del grupo es sensible, pero user puede optar fuera
- Local IA (Gemini Nano) aún inmaduro, modelo pequeño, context limited
- OpenAI = respuestas mejores, natural language understanding superior

**Implementación:**
```
User pregunta en IA Chat
  → App serializa análisis actual a prompt context
  → OpenAI responde con análisis de grupo específico
  → Respuesta cachea localmente si es análisis reciente
```

### 5. ¿Parser robusto vs Simple regex?

**Decisión:** Parser robusto (408 líneas, multi-formato).

**Razón:**
- WhatsApp exporta diferente en iOS vs Android
- Fechas en US format (MM/DD/YYYY) vs ES format (DD/MM/YYYY)
- Mensajes de sistema (foto, sticker, participante agregado) vs mensajes reales
- Si falla parser → análisis completamente inútil

**Implementación:**
```dart
// Detecta formato automáticamente
if (_looksLikeUsDateFormat(firstLine)) {
  return _parseUsFormat(lines);
} else {
  return _parseEsFormat(lines);
}

// Maneja mensajes especiales
if (line.contains("[FOTO]")) skip;
if (line.contains("participó en llamada")) skip;
```

---

## Arquitectura

```
lib/
├── core/
│   ├── config/        # API config (OpenAI key handling)
│   ├── providers/     # Riverpod providers (app, analysis, ia_chat)
│   ├── services/      # local_analysis (1270 LOC), storage, ai_chat, export, whatsapp_parser (408 LOC)
│   ├── theme/         # Design tokens (colors, typography, spacing, shadows)
│   ├── utils/         # Parsers, formatters
│   └── widgets/       # Reusable (StatTile, AnimatedCard, EmptyState)
├── features/
│   ├── analysis/      # Dashboard, ParticipantDetail, EventDetail (20+ widgets)
│   ├── home/          # HomeScreen
│   ├── import/        # ImportScreen (pick .txt/.zip → parse → analysis)
│   ├── onboarding/    # 8-paso tutorial
│   ├── shell/         # Tab navigation (Análisis, IA, Grupos, Ajustes)
│   ├── shell_tabs/    # IaTab, GruposTab, UpgradeSheet
│   ├── profile/       # Cross-group perfil (usuario en varios grupos)
│   ├── search/        # Buscar en mensajes del chat
│   ├── settings/      # Features, about, API key
│   └── notes/         # Anotaciones por miembro + tags
└── routing/           # Named routes (GoRouter)
```

**Patrón:** Feature-first. Servicios encapsulados. Sin Clean Architecture formal (sin Repository interfaces), pero separación clara.

---

## Métricas de Desarrollo

| Métrica | Valor | Notas |
|---------|-------|-------|
| **Líneas de código Dart** | ~26,500 | Incluye comentarios, tests mínimos |
| **Archivos Dart** | 106 | Bien organizados por feature |
| **Pantallas/Vistas** | 15+ | OnboardingFlow, Analysis, IaChat, Settings, Search, Profile |
| **Servicios** | 4 principales | local_analysis, storage, ai_chat, export |
| **Versión Flutter** | 3.11.1 | Moderno, null-safety |
| **Gestor de estado** | Riverpod 2.4.9 | Actual estándar |
| **Persistencia local** | Hive 2.2.3 | Offline-first |
| **Tests** | 1 smoke test | Gap: sin unit/widget/integration tests |
| **CI/CD** | No | Gap: sin GitHub Actions, Fastlane |

---

## Debilidades Identificadas

| Debilidad | Impacto | Prioridad |
|-----------|---------|-----------|
| **Sin unit tests** | No se puede garantizar lógica de análisis | ALTA |
| **Sin CI/CD** | Builds manuales, riesgo de errores | ALTA |
| **Hive sin code generation** | Hand-written JSON, inmantenible a escala | MEDIA |
| **Sin i18n** | Español only, limita mercado | MEDIA |
| **Sin Accessibility** | Sin Semantics, sin screen reader support | MEDIA |
| **Sin Firebase** | Sin analytics, sin crash reporting | BAJA |
| **Landing page débil** | Stats en `0`, sin testimonios, sin prueba social | BAJA (marketing) |

---

## Lecciones Aprendidas

1. **Riverpod es mejor que Provider** - AsyncValue simplifica manejo de loading/error/data. Reactive es natural.
2. **Sistema de diseño desde el inicio** - Tokens (colors, typography, spacing) ahorraron 50+ refactors. Dark mode "gratis".
3. **Parser robusto es inversión** - Gastamos 400 LOC pero salvó el proyecto. Garbage in = garbage out.
4. **Freemium simplifica decisiones** - Clear limit (3 análisis) hace obvio cuándo upgradear.
5. **Spec-Driven Development funciona** - 6 specs aprobados, fewer pivots. Clarity = velocidad.
6. **OpenAI API es poderosa pero costosa** - GPT-4o mini es barato ($0.015/1K input tokens) pero escala rápido con usuarios.

---

## Roadmap

**v0.3 (próximas 4 semanas):**
- Unit tests para local_analysis_service (lógica crítica)
- GitHub Actions para Android builds
- Testimonios reales de beta testers (fix landing)
- iOS basic support (without TestFlight yet)

**v1.0 (próximas 12 semanas):**
- Completo i18n (español, inglés, portugués)
- Accesibilidad (Semantics, screen reader)
- Firebase Analytics + Crashlytics
- Play Store release (freemium model activo)

**v1.1+:**
- Sync multi-device (Firebase Realtime)
- Notificaciones de cambios en grupos
- Análisis comparativo (grupo X vs grupo Y)
- Web dashboard (ver análisis desde laptop)

---

## Monetización

**Modelo:** Freemium → Premium vía API key.

```
FREE ($0):
├─ 3 análisis guardados
├─ Sin IA
└─ Sin exports

PRO ($4.99/mes o $49.99/año):
├─ Análisis ilimitados
├─ IA conversacional 100
├─ Exports (CSV, PDF, PNG)
├─ Historial de evolución
└─ Notas por miembro
```

**Viabilidad:** Si 1% de 100K instalaciones (1,000 users) pagan $49/año = $49K revenue. OpenAI API ~$5K/año para ese volumen. Margen: 90%.

---

## Why This Matters (Para Portfolio)

Este proyecto demuestra:

1. **Full SaaS Stack** - Idea → Product → Landing → Freemium → Monetization (no solo código)
2. **Parser Robusto** - Manejo de data real, edge cases, formatos múltiples
3. **Riverpod + IA Integration** - Estado moderno + API externa
4. **Spec-Driven Development** - Disciplina sin waterfall
5. **Entrepreneur Mindset** - Producto propio, UX pensada, business model

vs. trabajo por encargo = demostración de que puedo crear desde cero.

---
