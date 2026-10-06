# Casos de Éxito - Documentación

## Decisión Pendiente: Nombre de la Sección

**Pedir opinión a 3-4 personas:**

| Opción | Vibe | Para quién |
|--------|------|-----------|
| **Proyectos** | Developer, portafolio | Junior/Mid |
| **Casos de Éxito** ✅ (actual) | Consultor, resultados | Senior/Lead |
| **Success Stories** | Corporativo | Enterprise |
| **Impacto** | Directo, métricas | FinOps/Architect |
| **Case Studies** | Técnico profesional | Solutions Architect |

**Contexto para quien opine:**
- Perfil: Technical Lead / Solutions Architect
- Rango salarial: $3500-4000 USD
- Diferenciador: Impacto financiero comprobable (-58% AWS, -$20k/año)
- LinkedIn headline: "Arquitecto de Soluciones Senior | FinOps & Optimización Cloud"

**Preguntas:**
1. ¿Qué nombre te suena más profesional?
2. ¿Cuál te haría querer hacer clic?
3. ¿Alguno suena muy "junior" o muy "corporativo"?

---

## Referencias de Diseño (Case Studies)

| Empresa | URL | Estilo |
|---------|-----|--------|
| **AWS** | aws.amazon.com/solutions/case-studies | Limpio, métricas destacadas, logos de clientes |
| **Stripe** | stripe.com/customers | Minimalista, quotes de clientes, resultados |
| **Vercel** | vercel.com/customers | Cards con logo + métrica hero |
| **Linear** | linear.app/customers | Super clean, dark mode, tipografía |
| **Figma** | figma.com/customers | Storytelling, mucho visual |
| **Notion** | notion.so/customers | Grid simple, categorías |
| **Supabase** | supabase.com/customers | Tech-focused, GitHub style |

**Recomendación:** AWS (por FinOps) + Stripe (claridad de impacto financiero)

---

## Proyectos (9 total)

Ordenados por relevancia para Technical Lead $3500-4000 USD.

### Tier 1: FinOps & Impacto Financiero

| # | Proyecto | Métrica | Status |
|---|----------|---------|--------|
| 1 | MediRec — AWS Cost Optimization | -58% AWS bill | ✅ Creado |
| 2 | NLM Migration — Healthcare Cost Savings | -$20k/año | ✅ Creado |
| 3 | PREIS Integration — Gov-Tech | 100% compliance | ✅ Creado |

### Tier 2: Healthcare Interoperability

| # | Proyecto | Métrica | Status |
|---|----------|---------|--------|
| 4 | Lab-Doctor Middleware | -70% communication time | ✅ Creado |

### Tier 3: SaaS & Arquitectura

| # | Proyecto | Métrica | Status |
|---|----------|---------|--------|
| 5 | T-Cuida — IoT Safety SaaS | 100% ownership | ✅ Creado |
| 6 | T-Cuida — Real-time Dashboard | 3min → 1min | ✅ Creado |
| 7 | TCP/IP-WebSocket Bridge | +400% speed | ✅ Creado |

### Tier 4: Mobile & Full-Stack

| # | Proyecto | Métrica | Status |
|---|----------|---------|--------|
| 8 | MediRec Mobile — Flutter | 2 months delivery | ✅ Creado |
| 9 | El Estoico — Personal | FCP < 0.8s | ✅ Creado |

---

## Colores por Categoría

| Categoría | Color | Tailwind |
|-----------|-------|----------|
| FinOps/AWS | Verde | `emerald-500` |
| Healthcare | Violeta | `violet-500` |
| SaaS | Azul | `blue-500` |
| Mobile | Naranja | `orange-500` |
| Personal | Fucsia | `fuchsia-500` |

---

## Pendientes

- [ ] Agregar capturas reales de cada proyecto
- [ ] Revisar textos/descripciones
- [ ] Crear páginas de detalle de cada proyecto
- [ ] Agregar videos/demos donde aplique

---

## Filtros para Casos de Éxito (Evaluar)

### Opciones de filtros

| Filtro | Valores | Cantidad de proyectos | ¿Conviene? |
|--------|---------|----------------------|------------|
| **Año** | 2022, 2023, 2024, 2025 | 4 años distintos | ⚠️ Pocos por año |
| **Área** | FinOps, Healthcare, SaaS, Mobile | 4 áreas | ✅ Agrupa bien |
| **Tipo** | Work, Freelance, Personal | Solo Work y Personal (no hay Freelance) | ⚠️ Desbalanceado |

### Análisis

**Año:**
- 2022: 1 proyecto (T-Cuida)
- 2023: 5 proyectos
- 2024: 2 proyectos
- 2025: 1 proyecto (El Estoico)
- ❌ **No recomendado** - muy pocos proyectos por año, filtro casi inútil

**Área (color actual):**
- FinOps (verde): 2 proyectos (AWS, NLM)
- Healthcare (violeta): 2 proyectos (PREIS, Lab Middleware)
- SaaS (azul): 3 proyectos (T-Cuida x3)
- Mobile (naranja): 1 proyecto (MediRec Mobile)
- Personal (fucsia): 1 proyecto (El Estoico)
- ✅ **Recomendado** - ya tenemos los colores, agrupa por expertise

**Tipo:**
- Work: 8 proyectos
- Personal: 1 proyecto
- Freelance: 0 proyectos
- ❌ **No recomendado** - 8 vs 1, desbalanceado

### Recomendación

**Un solo filtro: Área/Expertise**

```
[Todos] [FinOps] [Healthcare] [SaaS] [Mobile] [Personal]
```

**Por qué:**
1. Ya tenemos los colores asignados
2. Agrupa por tu expertise (lo que vendes)
3. No recarga la UI con múltiples dropdowns
4. Alineado con tu LinkedIn (FinOps, Healthcare, SaaS)

### Diseño propuesto

```
┌─────────────────────────────────────────────────────────────┐
│  Casos de Éxito                                             │
│  Impacto medible                                            │
│                                                             │
│  [Todos] [FinOps ●] [Healthcare ●] [SaaS ●] [Mobile ●]     │
│                                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                       │
│  │ Card 1  │ │ Card 2  │ │ Card 3  │                       │
│  └─────────┘ └─────────┘ └─────────┘                       │
└─────────────────────────────────────────────────────────────┘
```

- Chips/pills horizontales (no dropdown)
- El color del chip coincide con el color del borde de las tarjetas
- "Todos" seleccionado por defecto
- Click filtra con animación suave

### Alternativa minimalista

Si incluso los chips son mucho, podríamos usar solo los colores como leyenda visual sin filtro interactivo:

```
● FinOps  ● Healthcare  ● SaaS  ● Mobile  ● Personal
```

Solo informativo, sin filtro. El usuario escanea por color.

### Decisión pendiente

- [ ] ¿Filtro interactivo por área?
- [ ] ¿Solo leyenda de colores?
- [ ] ¿Ninguno (dejarlo como está)?

---

## Ideas Futuras

### Animación "Eureka Seven Vortex" 🌀

**Inspiración:** El fenómeno/remolino del amor de Eureka Seven

**Concepto:**
- Remolino/vórtice 3D girando
- Dentro del remolino: iconos o cajitas de proyectos revoloteando
- Los proyectos flotan y giran dentro del vórtice
- Posible interacción: hover para "atrapar" un proyecto

**Referencia visual:** Buscar "Eureka Seven Seven Swell" o "Eureka Seven vortex phenomenon"

**Tech posible:**
- Three.js / React Three Fiber
- Framer Motion 3D
- CSS 3D transforms + animations

**Status:** 🔜 Pendiente (solo placeholder por ahora)

---

## Decisiones de Diseño

### Tarjetas
- `rounded-2xl` para bordes más redonditos
- Borde superior con color según categoría (`border-t-4`)
- Imagen con opacidad 60% (80% en hover)
- Degradado con color del proyecto
- Grid de 3 columnas en desktop

### Lo que se descartó
- Hero project (2 columnas) - no gustó
- Demasiados badges - se simplificó a 1 métrica
- Secciones de Concepto/Propósito/Tech - muy cargado
