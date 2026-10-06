# Labs / Side Projects - Propuesta

Sección para tus proyectos personales, experimentos, apps que vas lanzando.

---

## DIFERENCIA CON CASOS DE ÉXITO

| Casos de Éxito | Labs / Side Projects |
|----------------|----------------------|
| Trabajo para clientes | Proyectos propios |
| Resultados de negocio | Experimentos/aprendizaje |
| Confidencialidad | 100% público |
| Proyectos terminados | En progreso / iterando |
| Tono profesional | Tono más personal/nerd |

---

## OPCIONES DE IMPLEMENTACIÓN

### Opción A: Banner en Casos de Éxito → Página /labs

```
┌─────────────────────────────────────────────────────────┐
│  CASOS DE ÉXITO                                        │
│  [Filtros: Todos | FinOps | Healthcare | SaaS | ...]   │
│                                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                   │
│  │ MediRec │ │ T-Cuida │ │  PREIS  │                   │
│  └─────────┘ └─────────┘ └─────────┘                   │
│                                                         │
│  ╔═══════════════════════════════════════════════════╗ │
│  ║  🧪 LABS - Mis Side Projects                      ║ │
│  ║  Experimentos, apps propias, cosas que construyo  ║ │
│  ║  por diversión o curiosidad.                      ║ │
│  ║                                        Ver Labs → ║ │
│  ╚═══════════════════════════════════════════════════╝ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Pros:** No sobrecarga el home, mantiene casos de éxito limpios
**Contras:** Menos visibilidad

---

### Opción B: Sección en Home + Página /labs

Añadir mini-sección en home que muestre 2-3 proyectos destacados:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  🧪 LABS                                                │
│  Lo que construyo cuando nadie me paga                  │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ 🟢 El Estoico    │  │ 🟡 FinOps CLI    │            │
│  │ Blog personal    │  │ En desarrollo    │            │
│  │ Next.js · Live   │  │ Go · 60%         │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                         │
│                              Ver todos los labs →       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Pros:** Más visibilidad, muestra que estás activo
**Contras:** Home más largo

---

### Opción C: Filtro adicional en Casos de Éxito

Añadir "Personal/Labs" como filtro junto a FinOps, Healthcare, etc.

```
[Todos] [FinOps] [Healthcare] [SaaS] [Mobile] [🧪 Labs]
```

**Pros:** Simple, todo en un lugar
**Contras:** Mezcla proyectos de cliente con personales

---

## ESTRUCTURA DE LA PÁGINA /labs

### Vista de lista (estilo GitHub repos)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  🧪 LABS                                                │
│  Proyectos personales, experimentos, cosas que         │
│  construyo por curiosidad o para resolver mis          │
│  propios problemas.                                     │
│                                                         │
│  ───────────────────────────────────────────────────── │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 🟢 El Estoico                              LIVE │   │
│  │ Blog personal con filosofía estoica             │   │
│  │                                                  │   │
│  │ Next.js · Tailwind · MDX                        │   │
│  │                                                  │   │
│  │ Último update: 28 Mar 2026                      │   │
│  │ "Añadido modo oscuro y RSS feed"                │   │
│  │                                                  │   │
│  │ [Ver proyecto] [GitHub] [Demo]                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 🟡 FinOps CLI                        EN PROGRESO │   │
│  │ CLI para analizar costos AWS desde terminal     │   │
│  │                                                  │   │
│  │ Go · Cobra · AWS SDK                            │   │
│  │                                                  │   │
│  │ Progreso: ████████░░ 80%                        │   │
│  │ Último commit: 25 Mar 2026                      │   │
│  │ "feat: añadido soporte para RDS"                │   │
│  │                                                  │   │
│  │ [Ver proyecto] [GitHub]                         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 🔵 ADR Template                          STABLE │   │
│  │ Template de ADR que uso en todos mis proyectos  │   │
│  │                                                  │   │
│  │ Markdown · Template                             │   │
│  │                                                  │   │
│  │ ⭐ 45 stars · 12 forks                          │   │
│  │                                                  │   │
│  │ [GitHub] [Usar template]                        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ 🔴 Healthcare API Starter          DESCONTINUADO │   │
│  │ Boilerplate para APIs FHIR                      │   │
│  │                                                  │   │
│  │ Node.js · Express · FHIR R4                     │   │
│  │                                                  │   │
│  │ Archivado: Migré a otra arquitectura            │   │
│  │                                                  │   │
│  │ [GitHub]                                         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## DETALLE DE PROYECTO (estilo changelog/git)

Cada proyecto puede tener su página con historial de updates:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ← Volver a Labs                                        │
│                                                         │
│  🟡 FinOps CLI                                          │
│  CLI para analizar costos AWS desde terminal            │
│                                                         │
│  [GitHub] [Demo]                    Estado: En progreso │
│                                                         │
│  ───────────────────────────────────────────────────── │
│                                                         │
│  📊 PROGRESO                                            │
│  ████████░░ 80%                                         │
│                                                         │
│  ✅ Análisis de EC2                                     │
│  ✅ Análisis de S3                                      │
│  ✅ Análisis de RDS                                     │
│  ⬜ Análisis de Lambda                                  │
│  ⬜ Exportar a CSV                                      │
│  ⬜ Dashboard web                                       │
│                                                         │
│  ───────────────────────────────────────────────────── │
│                                                         │
│  📝 CHANGELOG                                           │
│                                                         │
│  ┌─ 25 Mar 2026 ────────────────────────────────────┐  │
│  │ feat: añadido soporte para RDS                   │  │
│  │                                                   │  │
│  │ Ahora el CLI puede analizar instancias RDS y     │  │
│  │ detectar instancias sobre-provisionadas.         │  │
│  │                                                   │  │
│  │ commit: a1b2c3d                                  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─ 20 Mar 2026 ────────────────────────────────────┐  │
│  │ feat: análisis de buckets S3                     │  │
│  │                                                   │  │
│  │ Detecta buckets sin lifecycle policies y         │  │
│  │ sugiere configuraciones para ahorrar.            │  │
│  │                                                   │  │
│  │ commit: d4e5f6g                                  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  ┌─ 15 Mar 2026 ────────────────────────────────────┐  │
│  │ init: proyecto iniciado                          │  │
│  │                                                   │  │
│  │ Setup inicial con Cobra y AWS SDK.               │  │
│  │ Primer comando: análisis de EC2.                 │  │
│  │                                                   │  │
│  │ commit: h7i8j9k                                  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## ESTADOS DE PROYECTO

| Estado | Color | Emoji | Descripción |
|--------|-------|-------|-------------|
| Live | Verde | 🟢 | Desplegado y funcionando |
| En progreso | Amarillo | 🟡 | Activamente desarrollando |
| Stable | Azul | 🔵 | Funcional, sin desarrollo activo |
| Pausado | Gris | ⚪ | Temporalmente detenido |
| Descontinuado | Rojo | 🔴 | Archivado, ya no mantenido |

---

## ESTRUCTURA DE DATOS

```typescript
interface LabProject {
  id: string
  nombre: string
  descripcion: string
  estado: 'live' | 'en-progreso' | 'stable' | 'pausado' | 'descontinuado'
  stack: string[]
  githubUrl?: string
  demoUrl?: string
  progreso?: number // 0-100 para proyectos en desarrollo
  destacado: boolean // para mostrar en home

  // Para el changelog estilo git
  updates: {
    fecha: Date
    tipo: 'feat' | 'fix' | 'docs' | 'init' | 'release'
    titulo: string
    descripcion?: string
    commitHash?: string
  }[]

  // Checklist de features (opcional)
  roadmap?: {
    feature: string
    completado: boolean
  }[]
}
```

---

## MI RECOMENDACIÓN

**Opción B + Página detallada estilo git**

1. Mini-sección en Home (2-3 proyectos destacados)
2. Página `/labs` con todos los proyectos
3. Cada proyecto con su página de detalle `/labs/[slug]` con changelog

**¿Por qué?**
- Muestra que estás activo construyendo cosas
- El formato changelog/git es muy dev-friendly
- Diferencia claramente de casos de éxito (clientes)
- Puedes actualizar fácil cuando hagas commits

---

## ¿QUÉ PROYECTOS TIENES?

Para implementar necesito saber:

1. ¿Qué side projects tienes actualmente?
2. ¿Cuáles están live, en progreso, o pausados?
3. ¿Tienes repos públicos en GitHub?
4. ¿"El Estoico" es tu blog personal? ¿Ya está live?

---

## DIME:

1. ¿Te gusta la Opción B (sección en home + página /labs)?
2. ¿Te gusta el formato changelog/git para los updates?
3. ¿Qué proyectos incluirías?
