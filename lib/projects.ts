export type ProjectCategory = "Work" | "Freelance" | "Personal" | "Talks"

export type CaseStudyMediaType = "image" | "video"

export interface CaseStudyBenefit {
  value: string
  label: string
  detail?: string
}

export interface CaseStudyQuote {
  text: string
  author?: string
  role?: string
}

export interface CaseStudyMediaItem {
  type: CaseStudyMediaType
  src: string
  alt?: string
}

export interface ProjectAuthor {
  name?: string
  headline?: string
  about?: string
}

export interface BeforeAfter {
  before: string
  after: string
  metric?: string
}

export interface Project {
  title: string
  description: string
  image: string
  category: ProjectCategory
  tags: string[]
  summary: string
  slug: string
  github: string
  demo: string
  // Senior narrative fields (featured projects)
  concept?: string
  purpose?: string
  techHighlight?: string
  impactMetrics?: string[]
  // Extended fields for detail page
  longDescription?: string
  challenge?: string
  solution?: string
  outcome?: string
  implementationSteps?: string[]
  year?: string
  client?: string
  pillar?: string // For AWS projects
  videoUrl?: string // URL del video explicativo (YouTube, Vimeo, o video directo)
  // Case study (AWS-like layout)
  benefits?: CaseStudyBenefit[]
  servicesUsed?: string[]
  quote?: CaseStudyQuote
  gallery?: CaseStudyMediaItem[]
  author?: ProjectAuthor
  // NEW: Estructura que vende
  heroMetric?: string // Métrica principal grande (ej: "-58%")
  heroMetricLabel?: string // Label de la métrica (ej: "Factura AWS")
  problem?: {
    situation: string // Situación inicial
    pain: string // Dolor/costo de no hacer nada
    whyMe?: string // Por qué me llamaron
  }
  approach?: {
    strategy: string // Mi estrategia
    keyDecisions?: string[] // Decisiones técnicas clave
    timeline?: string // Cuánto tomó
  }
  results?: {
    beforeAfter?: BeforeAfter[]
    businessImpact?: string
  }
  industry?: string // Healthcare, SaaS, etc.
  duration?: string // "6 meses", "2 meses"
  storyId?: "medirec" | "nlm" | "preis" | "lab" | "tcuida" | "dashboard" | "bridge" | "mobile" | "estoico" | "grupero" // ID de historia animada
}

// REGLA DE ORO: NO BORRAR NADA.
// Los proyectos no seleccionados como "Featured" están archivados en `data/archived_projects.json`.
import archivedProjectsJson from "@/data/archived_projects.json"

export const archivedProjects = archivedProjectsJson as Record<ProjectCategory, Project[]>

export const featuredProjects: Project[] = [
  // === TIER 1: FinOps & Impacto Financiero ===
  {
    title: "Cómo reduje 58% la factura AWS de MediRec",
    description: "Re‑arquitectura y gobernanza de costos en plataforma Healthcare.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    category: "Work",
    tags: ["AWS", "FinOps", "Terraform", "CloudFormation", "Docker", "CI/CD"],
    summary: "Proyecto de optimización de infraestructura AWS con impacto financiero directo.",
    slug: "aws-infrastructure-optimization",
    github: "#",
    demo: "#",
    client: "MediRec, Inc",
    industry: "Healthcare",
    year: "2023",
    duration: "3 meses",
    heroMetric: "-58%",
    heroMetricLabel: "Factura AWS",
    problem: {
      situation: "Infraestructura AWS sobredimensionada. Servidores EC2 pagando por capacidad que nunca se usaba. Sin gobernanza de recursos ni visibilidad de costos por servicio.",
      pain: "Factura AWS creciendo mes a mes sin correlación con el crecimiento del negocio. Dinero tirado en recursos ociosos.",
      whyMe: "Necesitaban alguien que entendiera tanto la arquitectura técnica como el impacto financiero de cada decisión."
    },
    approach: {
      strategy: "Análisis de utilización real con CloudWatch, identificación de recursos sobre-provisionados, implementación de right-sizing e Infrastructure as Code para prevenir drift.",
      keyDecisions: [
        "Right-sizing de instancias EC2 basado en métricas reales de CPU/memoria",
        "Implementación de Auto Scaling para cargas variables",
        "Migración de EBS a tipos de almacenamiento optimizados",
        "Governance con Terraform para prevenir over-provisioning futuro"
      ],
      timeline: "3 meses desde análisis hasta implementación completa"
    },
    results: {
      beforeAfter: [
        { before: "100%", after: "42%", metric: "Factura AWS" },
        { before: "Manual", after: "IaC", metric: "Provisioning" },
        { before: "Ninguna", after: "Total", metric: "Visibilidad de costos" }
      ],
      businessImpact: "Ahorro anual estimado de $20k+ que se reinvirtió en desarrollo de producto."
    },
    servicesUsed: ["AWS EC2", "CloudWatch", "Terraform", "CloudFormation", "Docker", "S3", "Route 53"],
    impactMetrics: ["-58% AWS bill", "-70% deploy time", "IaC governance"],
    benefits: [
      { value: "-58%", label: "Factura AWS", detail: "Reducción directa en costos mensuales" },
      { value: "-70%", label: "Deploy Time", detail: "Gracias a IaC y automatización" },
      { value: "100%", label: "Visibilidad", detail: "Costos por servicio y equipo" }
    ],
    quote: {
      text: "Moisés no solo optimizó nuestra infraestructura, documentó cada decisión para que el equipo pudiera mantenerla sin depender de él.",
      author: "Director de Tecnología",
      role: "MediRec, Inc"
    },
    videoUrl: "https://www.youtube.com/watch?v=O7sRLm7urnI",
    storyId: "medirec",
    gallery: [
      { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", alt: "AWS Cost Explorer Dashboard" },
      { type: "image", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Métricas de CloudWatch" },
      { type: "image", src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop", alt: "Arquitectura de infraestructura" }
    ]
  },
  {
    title: "Cómo eliminé $20k/año en licencias farmacéuticas",
    description: "Migración de LexiComp a NLM sin perder integridad clínica.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop",
    category: "Work",
    tags: ["Healthcare", "API Integration", "NLM", "Laravel", "PHP", "Cost Optimization"],
    summary: "Migración de proveedor de datos farmacéuticos con impacto financiero directo.",
    slug: "nlm-migration",
    github: "#",
    demo: "#",
    client: "MediRec, Inc",
    industry: "Healthcare",
    year: "2024",
    duration: "2 meses",
    heroMetric: "-$20k",
    heroMetricLabel: "Ahorro anual",
    problem: {
      situation: "La plataforma dependía de LexiComp para datos farmacéuticos (interacciones, dosis, contraindicaciones). Licencia anual de $20,000 USD.",
      pain: "Costo fijo alto que no escalaba con el negocio. Cada año renovaban sin cuestionar.",
      whyMe: "Necesitaban validar que NLM (gratuito) tenía la misma calidad de datos antes de migrar."
    },
    approach: {
      strategy: "Análisis comparativo de datos entre LexiComp y NLM, migración gradual con fallback, validación clínica con equipo médico.",
      keyDecisions: [
        "Mapeo de equivalencias entre códigos LexiComp y NLM/RxNorm",
        "API de abstracción para cambiar proveedor sin afectar frontend",
        "Periodo de prueba paralelo con ambos sistemas",
        "Validación con farmacéuticos del equipo clínico"
      ],
      timeline: "2 meses incluyendo validación clínica"
    },
    results: {
      beforeAfter: [
        { before: "$20k/año", after: "$0", metric: "Costo de licencias" },
        { before: "Propietario", after: "Abierto", metric: "Datos" },
        { before: "Acoplado", after: "Abstraído", metric: "Arquitectura" }
      ],
      businessImpact: "Ahorro de $20k anuales reinvertidos en desarrollo de nuevas features."
    },
    servicesUsed: ["Laravel", "PHP", "NLM RxNorm API", "MySQL", "PHPUnit", "Postman"],
    impactMetrics: ["-$20k/año", "Zero downtime", "Clinical integrity"],
    quote: {
      text: "La migración fue transparente para los usuarios. Ni los médicos ni los pacientes notaron el cambio, pero nosotros ahorramos $20k al año.",
      author: "Product Manager",
      role: "MediRec, Inc"
    },
    storyId: "nlm",
    gallery: [
      { type: "image", src: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop", alt: "Datos farmacéuticos" },
      { type: "image", src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop", alt: "Integración de APIs" }
    ]
  },
  {
    title: "Integración Gov-Tech: De Excel manual a API automatizada",
    description: "API de misión crítica para reporte de inmunizaciones al Gobierno de Puerto Rico.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    category: "Work",
    tags: ["Gov-Tech", "Healthcare", "API", "Security", "mTLS", "Compliance"],
    summary: "Integración con sistema gubernamental de inmunización con cumplimiento regulatorio.",
    slug: "preis-integration",
    github: "#",
    demo: "#",
    client: "MediRec, Inc",
    industry: "Gov-Tech / Healthcare",
    year: "2023",
    duration: "4 meses",
    heroMetric: "100%",
    heroMetricLabel: "Compliance",
    problem: {
      situation: "El reporte de vacunaciones al sistema PREIS del gobierno se hacía manualmente: exportar a Excel, subir archivo, verificar errores, corregir, resubir.",
      pain: "Proceso de 2-3 horas semanales propenso a errores. Riesgo de multas por incumplimiento de plazos regulatorios.",
      whyMe: "Necesitaban integración directa API-to-API con seguridad de nivel gubernamental (mTLS)."
    },
    approach: {
      strategy: "Diseño de API RESTful con autenticación mTLS, mapeo de datos clínicos al formato PREIS, sistema de reintentos y auditoría completa.",
      keyDecisions: [
        "mTLS (mutual TLS) para autenticación de ambos lados",
        "Cola de mensajes con retry automático para fallos temporales",
        "Audit trail completo para cumplimiento regulatorio",
        "Dashboard de monitoreo para el equipo de compliance"
      ],
      timeline: "4 meses incluyendo certificación con el gobierno"
    },
    results: {
      beforeAfter: [
        { before: "2-3h/sem", after: "0", metric: "Tiempo manual" },
        { before: "Errores", after: "Validado", metric: "Calidad de datos" },
        { before: "Riesgo", after: "100%", metric: "Compliance" }
      ],
      businessImpact: "Eliminación de riesgo regulatorio y liberación de tiempo del equipo de compliance."
    },
    servicesUsed: ["Laravel", "mTLS", "REST API", "MySQL", "Redis Queue", "Monolog"],
    impactMetrics: ["100% compliance", "Automated reporting", "mTLS security"],
    quote: {
      text: "Pasamos de temer las auditorías a tener todo listo automáticamente. El sistema reporta solo y nosotros solo supervisamos.",
      author: "Compliance Officer",
      role: "MediRec, Inc"
    },
    storyId: "preis",
    gallery: [
      { type: "image", src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop", alt: "Dashboard de monitoreo" },
      { type: "image", src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop", alt: "Integración segura" }
    ]
  },

  // === TIER 2: Healthcare Interoperability ===
  {
    title: "De fax a real-time: Resultados de lab en minutos",
    description: "Middleware que redujo 70% el tiempo de comunicación lab-médico.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    category: "Work",
    tags: ["Healthcare", "Interoperability", "HL7", "FHIR", "Middleware", "Laravel"],
    summary: "Automatización de flujo de resultados clínicos entre sistemas de laboratorio y EHR.",
    slug: "lab-middleware",
    github: "#",
    demo: "#",
    client: "MediRec, Inc",
    industry: "Healthcare",
    year: "2022",
    duration: "6 meses",
    heroMetric: "-70%",
    heroMetricLabel: "Tiempo de comunicación",
    problem: {
      situation: "Los resultados de laboratorio llegaban por fax o PDF. El personal los transcribía manualmente al sistema. Proceso de ~30 minutos por resultado.",
      pain: "Errores de transcripción, demoras en diagnósticos, médicos esperando resultados que ya estaban listos en el lab.",
      whyMe: "Necesitaban conectar sistemas legacy (HL7 v2) con su EHR moderno (FHIR R4)."
    },
    approach: {
      strategy: "Middleware de transformación HL7-to-FHIR con parsing robusto, validación clínica, y notificaciones push a médicos.",
      keyDecisions: [
        "Parser HL7 v2.x compatible con múltiples laboratorios",
        "Transformación a FHIR R4 para interoperabilidad moderna",
        "Notificaciones push inmediatas al médico tratante",
        "Dashboard de monitoreo para el equipo de IT"
      ],
      timeline: "6 meses incluyendo integración con 3 laboratorios"
    },
    results: {
      beforeAfter: [
        { before: "30 min", after: "< 5 min", metric: "Tiempo de entrega" },
        { before: "Manual", after: "Automático", metric: "Transcripción" },
        { before: "Errores", after: "Zero", metric: "Transcripción" }
      ],
      businessImpact: "Diagnósticos más rápidos, mejor experiencia para pacientes, menos carga para el equipo administrativo."
    },
    servicesUsed: ["Laravel", "HL7 HAPI", "FHIR R4", "MySQL", "Redis", "Push Notifications"],
    impactMetrics: ["-70% communication time", "Real-time results", "Zero transcription errors"],
    quote: {
      text: "Antes esperábamos horas por resultados que ya estaban listos. Ahora llegan al instante con notificación al celular.",
      author: "Dr. Rivera",
      role: "Médico Internista"
    },
    storyId: "lab",
    gallery: [
      { type: "image", src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=2070&auto=format&fit=crop", alt: "Laboratorio clínico" },
      { type: "image", src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop", alt: "Dashboard de resultados" }
    ]
  },

  // === TIER 3: SaaS & Arquitectura ===
  {
    title: "T-Cuida — Sistema IoT que construí desde cero",
    description: "Ecosistema SaaS completo: wearables, GPS, dashboard real-time y comunicación multicanal.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    category: "Work",
    tags: ["SaaS", "IoT", "Node.js", "Laravel", "Vue.js", "WebSockets", "AWS"],
    summary: "Plataforma SaaS de seguridad corporativa con 100% ownership técnico.",
    slug: "t-cuida-platform",
    github: "#",
    demo: "#",
    client: "T-Cuida / Konecta",
    industry: "SaaS / Seguridad Corporativa",
    year: "2023",
    duration: "+15 meses",
    heroMetric: "100%",
    heroMetricLabel: "Ownership",
    problem: {
      situation: "Necesitaban un sistema de seguridad corporativa que integrara wearables, GPS, llamadas y WhatsApp en una sola plataforma. No existía nada previo.",
      pain: "Sin sistema unificado, las incidencias se perdían entre canales. Tiempo de respuesta inaceptable para situaciones de emergencia.",
      whyMe: "Buscaban alguien capaz de diseñar y construir el sistema completo, desde arquitectura hasta despliegue."
    },
    approach: {
      strategy: "Arquitectura modular: bridge IoT para dispositivos, backend Laravel/Node.js, dashboard Vue.js con WebSockets, integración Asterisk para llamadas.",
      keyDecisions: [
        "Bridge TCP/IP-WebSocket para dispositivos legacy sin cambiar hardware",
        "WebSockets para actualizaciones en tiempo real (respuesta < 1 segundo)",
        "Arquitectura event-driven para escalar a múltiples clientes",
        "ADRs documentados para onboarding rápido de nuevos devs"
      ],
      timeline: "+15 meses de desarrollo continuo"
    },
    results: {
      beforeAfter: [
        { before: "3 min", after: "1 min", metric: "Tiempo de respuesta" },
        { before: "3+ sem", after: "48h", metric: "Onboarding de devs" },
        { before: "Manual", after: "Real-time", metric: "Seguimiento" }
      ],
      businessImpact: "Sistema operativo para Konecta Colombia con +20k usuarios potenciales."
    },
    servicesUsed: ["Laravel", "Node.js", "Vue.js", "WebSockets", "AWS S3", "Digital Ocean", "Asterisk PBX", "MySQL"],
    impactMetrics: ["100% ownership", "Real‑time ops", "48h onboarding"],
    benefits: [
      { value: "100%", label: "Ownership", detail: "Arquitectura, código, deploy" },
      { value: "48h", label: "Onboarding", detail: "Nuevos devs productivos" },
      { value: "< 1s", label: "Latencia", detail: "Actualizaciones real-time" }
    ],
    quote: {
      text: "Moisés construyó todo el sistema desde cero. Cuando necesitamos agregar un nuevo dev, estuvo productivo en 2 días gracias a la documentación.",
      author: "CEO",
      role: "T-Cuida"
    },
    videoUrl: "https://www.youtube.com/watch?v=1PnVor36_40",
    storyId: "tcuida",
    gallery: [
      { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", alt: "Dashboard de operaciones" },
      { type: "image", src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop", alt: "Dispositivos wearables" },
      { type: "image", src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop", alt: "Arquitectura IoT" }
    ]
  },
  {
    title: "De 3 minutos a 1 — Dashboard de emergencias",
    description: "Panel de atención en tiempo real que triplicó la velocidad de respuesta.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "Work",
    tags: ["Dashboard", "Real-time", "Vue.js", "WebSockets", "UX", "Performance"],
    summary: "Dashboard de operaciones críticas con actualización en tiempo real.",
    slug: "t-cuida-dashboard",
    github: "#",
    demo: "#",
    client: "T-Cuida",
    industry: "SaaS / Seguridad",
    year: "2023",
    heroMetric: "3x",
    heroMetricLabel: "Más rápido",
    problem: {
      situation: "El dashboard anterior tardaba ~3 minutos en mostrar nuevas incidencias. Para emergencias, eso es inaceptable.",
      pain: "En situaciones de riesgo, cada segundo cuenta. 3 minutos de delay podía significar vidas en peligro.",
      whyMe: "Necesitaban rediseño completo de UX + arquitectura de real-time."
    },
    approach: {
      strategy: "Reescritura del frontend con Vue.js + WebSockets, eliminando polling. UX diseñado para acción inmediata.",
      keyDecisions: [
        "WebSockets en lugar de polling HTTP",
        "Optimización de renders para evitar re-renderizado innecesario",
        "UX con jerarquía visual clara: lo urgente primero",
        "Sonidos y alertas visuales para incidencias críticas"
      ]
    },
    results: {
      beforeAfter: [
        { before: "3 min", after: "< 1 min", metric: "Tiempo de respuesta" },
        { before: "Polling", after: "WebSocket", metric: "Arquitectura" },
        { before: "Confuso", after: "Claro", metric: "UX" }
      ],
      businessImpact: "Operadores pueden atender 3x más incidencias en el mismo tiempo."
    },
    servicesUsed: ["Vue.js", "WebSockets", "Node.js", "CSS Grid", "Figma"],
    impactMetrics: ["3min → 1min", "200% faster", "Real-time"],
    benefits: [
      { value: "3x", label: "Velocidad", detail: "De 3 min a < 1 min" },
      { value: "Real-time", label: "Actualizaciones", detail: "Sin refresh manual" },
      { value: "3x", label: "Capacidad", detail: "Incidencias atendidas" }
    ],
    quote: {
      text: "Antes teníamos que refrescar constantemente. Ahora las alertas aparecen solas con sonido. Es otro nivel de eficiencia.",
      author: "Supervisor de Operaciones",
      role: "T-Cuida"
    },
    storyId: "dashboard",
    gallery: [
      { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", alt: "Dashboard real-time" },
      { type: "image", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Métricas de operación" }
    ]
  },
  {
    title: "Bridge TCP/IP-WebSocket: 400% más rápido sin cambiar hardware",
    description: "Puente que conecta dispositivos IoT legacy con aplicaciones web modernas.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
    category: "Work",
    tags: ["IoT", "TCP/IP", "WebSockets", "Node.js", "Performance", "Bridge"],
    summary: "Puente de comunicación entre protocolos legacy y web modernos.",
    slug: "tcpip-websocket-bridge",
    github: "#",
    demo: "#",
    client: "T-Cuida",
    industry: "IoT / SaaS",
    year: "2023",
    duration: "1 mes",
    heroMetric: "+400%",
    heroMetricLabel: "Velocidad",
    problem: {
      situation: "Los dispositivos IoT (wearables, GPS) usaban protocolo TCP/IP propietario. La app web moderna necesitaba WebSockets. No había forma de comunicarlos directamente.",
      pain: "Programar un dispositivo tomaba 15+ minutos de configuración manual. Imposible escalar a cientos de dispositivos.",
      whyMe: "Necesitaban un bridge que tradujera entre protocolos sin reemplazar los dispositivos existentes."
    },
    approach: {
      strategy: "Bridge en Node.js que mantiene conexiones TCP persistentes con dispositivos y las expone como WebSockets para el frontend.",
      keyDecisions: [
        "Node.js por su modelo non-blocking ideal para I/O intensivo",
        "Buffer management para manejar fragmentación de paquetes TCP",
        "Heartbeat bidireccional para detectar desconexiones",
        "Reconexión automática con backoff exponencial"
      ],
      timeline: "1 mes desde diseño hasta producción"
    },
    results: {
      beforeAfter: [
        { before: "15 min", after: "3 min", metric: "Programación" },
        { before: "Manual", after: "Web UI", metric: "Interfaz" },
        { before: "1 a 1", after: "Batch", metric: "Capacidad" }
      ],
      businessImpact: "Deployment de cientos de dispositivos en días en lugar de semanas."
    },
    servicesUsed: ["Node.js", "TCP Sockets", "WebSockets", "Docker", "PM2"],
    impactMetrics: ["+400% programming speed", "Zero hardware changes", "Backward compatible"],
    quote: {
      text: "Antes me tomaba un día configurar 10 dispositivos. Ahora lo hago en una hora desde la web.",
      author: "Técnico de Campo",
      role: "T-Cuida"
    },
    storyId: "bridge",
    gallery: [
      { type: "image", src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop", alt: "Arquitectura del bridge" },
      { type: "image", src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop", alt: "Dispositivos IoT" }
    ]
  },

  // === TIER 4: Mobile & Full-Stack ===
  {
    title: "Primera app móvil de MediRec en 2 meses",
    description: "De cero a App Store + Play Store con Flutter.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    category: "Work",
    tags: ["Mobile", "Flutter", "iOS", "Android", "Healthcare", "App Store"],
    summary: "App móvil cross-platform para pacientes de plataforma healthcare.",
    slug: "medirec-mobile",
    github: "#",
    demo: "#",
    client: "MediRec, Inc",
    industry: "Healthcare / Mobile",
    year: "2024",
    duration: "2 meses",
    heroMetric: "2",
    heroMetricLabel: "Meses a producción",
    problem: {
      situation: "MediRec no tenía presencia mobile. Los pacientes pedían acceso a su información desde el celular pero solo existía web.",
      pain: "Competidores con apps móviles estaban captando mercado. Cada mes sin app era market share perdido.",
      whyMe: "Necesitaban entrega rápida (2 meses) con calidad de producción, no un MVP descartable."
    },
    approach: {
      strategy: "Flutter para desarrollo cross-platform, integración directa con API existente, proceso de publicación paralelo en ambas stores.",
      keyDecisions: [
        "Flutter por velocidad de desarrollo iOS+Android simultáneo",
        "Reutilización de API existente sin cambios en backend",
        "CI/CD para builds automáticos y testing",
        "Proceso de publicación iniciado en semana 6 para no bloquear"
      ],
      timeline: "2 meses desde kickoff hasta publicación en ambas stores"
    },
    results: {
      beforeAfter: [
        { before: "0", after: "2", metric: "Plataformas" },
        { before: "Solo web", after: "Mobile", metric: "Acceso" },
        { before: "Ninguno", after: "Definido", metric: "Roadmap mobile" }
      ],
      businessImpact: "Primera presencia mobile de la empresa, base para futuras features móviles."
    },
    servicesUsed: ["Flutter", "Dart", "REST API", "iOS", "Android", "Firebase", "Fastlane"],
    impactMetrics: ["2 months delivery", "iOS + Android", "First mobile product"],
    quote: {
      text: "Nos dijeron que una app tomaría 6 meses. Moisés la entregó en 2 y funcionando en ambas plataformas.",
      author: "VP of Product",
      role: "MediRec, Inc"
    },
    storyId: "mobile",
    gallery: [
      { type: "image", src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop", alt: "App en smartphone" },
      { type: "image", src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop", alt: "Pantallas de la app" }
    ]
  },
  {
    title: "El Estoico — Performance perfecta en 0.8s",
    description: "Landing page con Core Web Vitals verdes y arquitectura moderna.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    category: "Personal",
    tags: ["Astro", "TypeScript", "Docker", "Traefik", "Core Web Vitals"],
    summary: "Landing optimizado para performance con Docker + Traefik.",
    slug: "el-estoico",
    github: "#",
    demo: "https://elestoico.modavidc.com/",
    industry: "Personal / Content",
    year: "2025",
    duration: "2 semanas",
    heroMetric: "< 0.8s",
    heroMetricLabel: "First Contentful Paint",
    problem: {
      situation: "Quería crear una plataforma de contenido sobre filosofía estoica aplicada a profesionales tech. Tenía que ser rápida y demostrar mis capacidades técnicas.",
      pain: "La mayoría de landing pages cargan en 3-5 segundos. Eso mata conversiones y demuestra poco cuidado técnico.",
      whyMe: "Proyecto personal para demostrar que puedo entregar excelencia técnica cuando tengo control total."
    },
    approach: {
      strategy: "Astro para static-site generation, optimización de assets, Docker + Traefik para deploy, medición obsesiva de Core Web Vitals.",
      keyDecisions: [
        "Astro por su enfoque 'zero JavaScript by default'",
        "Imágenes en WebP con lazy loading",
        "CSS crítico inline, resto diferido",
        "Docker + Traefik para SSL automático y routing"
      ],
      timeline: "2 semanas incluyendo contenido"
    },
    results: {
      beforeAfter: [
        { before: "~3s", after: "0.8s", metric: "FCP" },
        { before: "Amarillo", after: "Verde", metric: "Core Web Vitals" },
        { before: "N/A", after: "95+", metric: "Lighthouse" }
      ],
      businessImpact: "Demostración de capacidad técnica y base para futuro contenido."
    },
    servicesUsed: ["Astro", "TypeScript", "Docker", "Traefik", "Cloudflare", "Markdown"],
    impactMetrics: ["FCP < 0.8s", "Core Web Vitals", "Static build"],
    storyId: "estoico",
    gallery: [
      { type: "image", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Lighthouse score" },
      { type: "image", src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", alt: "Landing page" }
    ]
  },

  // === Grupero — Side Project / SaaS ===
  {
    title: "Grupero — La radiografía de tus grupos de WhatsApp",
    description: "App Android que analiza participación, detecta inactivos y eventos en grupos de WhatsApp. 100% offline y privado.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop",
    category: "Personal",
    tags: ["Android", "Kotlin", "IA", "WhatsApp", "Analytics", "Privacy-first"],
    summary: "App que convierte chats de WhatsApp en insights accionables para administradores de grupos.",
    slug: "grupero",
    github: "#",
    demo: "https://grupero.app",
    industry: "SaaS / Productividad",
    year: "2025",
    duration: "4 meses",
    heroMetric: "-85%",
    heroMetricLabel: "Tiempo de gestión",
    problem: {
      situation: "Los admins de grupos grandes (+100 personas) no tienen visibilidad real de quién participa. WhatsApp solo muestra quién escribe, no quién aporta valor: confirma eventos, responde, organiza.",
      pain: "Decisiones a ciegas: ¿A quién saco del grupo? ¿Quién dejó de participar? ¿Cuándo es mejor publicar un evento? Todo es intuición o perseguir gente manualmente.",
      whyMe: "Administro 6 grupos de +150 personas cada uno. Me cansé de perseguir confirmaciones y tomar decisiones sin datos. Lo construí para mí, y funcionó."
    },
    approach: {
      strategy: "App Android nativa que procesa el archivo exportado de WhatsApp localmente. Cero datos salen del dispositivo. IA on-device para resúmenes y detección de eventos.",
      keyDecisions: [
        "100% offline — los chats nunca salen del teléfono",
        "Parser robusto para múltiples formatos de fecha de WhatsApp",
        "IA on-device para resúmenes y análisis de sentimiento",
        "Modelo freemium: análisis gratis, IA y alertas en Pro"
      ],
      timeline: "4 meses desde idea hasta beta en Play Store"
    },
    results: {
      beforeAfter: [
        { before: "Intuición", after: "Datos", metric: "Decisiones de purga" },
        { before: "25 min", after: "30 seg", metric: "Identificar inactivos" },
        { before: "Manual", after: "Automático", metric: "Detección de eventos" }
      ],
      businessImpact: "En beta privada con 12 admins de grupos deportivos. 47 grupos analizados, 3,200+ miembros procesados."
    },
    servicesUsed: ["Kotlin", "Android", "Room DB", "On-device ML", "Material Design 3"],
    impactMetrics: ["100% privado", "45+ funcionalidades", "12 beta testers"],
    benefits: [
      { value: "45+", label: "Funcionalidades", detail: "Análisis completo de participación" },
      { value: "100%", label: "Privado", detail: "Datos nunca salen del dispositivo" },
      { value: "0", label: "Registro", detail: "Funciona sin crear cuenta" }
    ],
    quote: {
      text: "Tengo un grupo de fútbol de 180 personas. Antes de cada partido perseguía confirmaciones por 2 horas. Ahora sé exactamente quiénes son 'Los Chancletas' que nunca confirman pero siempre aparecen.",
      author: "Roberto M.",
      role: "Admin de grupo de fútbol, 180 miembros"
    },
    storyId: "grupero",
    gallery: [
      { type: "image", src: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop", alt: "WhatsApp analytics" },
      { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", alt: "Dashboard de participación" },
      { type: "image", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", alt: "Heatmap de actividad" }
    ]
  }
]

export const projects: Record<ProjectCategory, Project[]> = {
  Work: featuredProjects.filter((p) => p.category === "Work"),
  Freelance: [],
  Personal: featuredProjects.filter((p) => p.category === "Personal"),
  Talks: []
}

// Helper function to get all projects
export function getAllProjects(): Project[] {
  return [...featuredProjects]
}

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  const fromFeatured = featuredProjects.find((project) => project.slug === slug)
  if (fromFeatured) return fromFeatured

  const archived = [
    ...(archivedProjects.Work || []),
    ...(archivedProjects.Freelance || []),
    ...(archivedProjects.Personal || []),
    ...(archivedProjects.Talks || [])
  ]
  return archived.find((project) => project.slug === slug)
}

// Helper function to get projects by category
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects[category] || []
}

