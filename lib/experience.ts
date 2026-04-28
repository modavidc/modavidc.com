export interface ExperienceEntry {
  id: string
  role: string
  company: string
  startDate: string
  endDate: string
  type: "fulltime" | "freelance" | "personal"
  tags: string[]
  achievements: string[]
  stack: string[]
  isCurrent: boolean
  branch?: string
}

const experiences: ExperienceEntry[] = [
  {
    id: "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0",
    role: "Ingeniero de Integraciones",
    company: "MediRec",
    startDate: "may 2020",
    endDate: "actualidad",
    type: "fulltime",
    tags: ["FinOps", "Interoperabilidad", "Gov-Tech"],
    achievements: [
      "Optimización de costos cloud (FinOps): lideré la re-arquitectura de servicios que redujo en 58% la factura de AWS mediante right-sizing y gobernanza de recursos.",
      "Ahorro en licenciamiento: migré la integración de datos farmacéuticos de LexiComp a NLM, eliminando un costo de $20,000 USD/año en licencias.",
      "Cumplimiento regulatorio (Gov-Tech): diseñé y desarrollé la API de misión crítica para integrar con PREIS, automatizando el envío seguro de datos de inmunización.",
      "Automatización de interoperabilidad: desarrollé middleware clínico para conectar laboratorios y médicos, reduciendo el tiempo de comunicación de resultados en 70%.",
      "Arquitectura móvil: orquesté el diseño y despliegue de la primera app móvil (Flutter) en 2 meses, estableciendo el roadmap técnico.",
    ],
    stack: [
      "PHP (Laravel/Lumen)",
      "C# (.NET)",
      "Flutter",
      "MySQL",
      "SQL Server",
      "AWS",
      "Docker",
      "Linux",
    ],
    isCurrent: true,
    branch: "HEAD -> main, origin/main",
  },
  {
    id: "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1",
    role: "Lead Developer / Tech Lead",
    company: "T-Cuida",
    startDate: "may 2023",
    endDate: "actualidad",
    type: "fulltime",
    tags: ["Tech Lead", "SaaS", "IoT/Wearables"],
    achievements: [
      "Arquitectura de ecosistema SaaS: dirigí el desarrollo integral del ecosistema T-Cuida, integrando wearables y GPS para reporte y seguimiento inteligente de incidencias.",
      "Ingeniería de performance: diseñé un panel de atención en tiempo real que redujo el tiempo de respuesta en 200% (de 3 min a 1 min).",
      "Innovación en conectividad: desarrollé un bridge entre sockets TCP/IP y WebSockets, acelerando la programación de dispositivos en 400%.",
      "Gestión de lanzamientos (Full-Cycle): lideré el ciclo de publicación en App Store (iOS) y Google Play (Android), estandarizando el proceso y acelerando aprobaciones.",
      "Infraestructura escalable: administración de entornos cloud en AWS y DigitalOcean, garantizando alta disponibilidad para un ecosistema de seguridad crítico.",
    ],
    stack: [
      "PHP (Laravel)",
      "Node.js",
      "Vue.js",
      "MySQL",
      "AWS S3",
      "Digital Ocean",
      "Socket.io",
      "OneSignal",
    ],
    isCurrent: true,
    branch: "feature/tcuida",
  },
  {
    id: "c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2",
    role: "Personal Projects",
    company: "Side Projects",
    startDate: "2022",
    endDate: "Present",
    type: "personal",
    tags: ["Full Stack", "Content Creation"],
    achievements: [
      "Cuentos de Moisés - Personal blog for stories and reflections",
      "Saiyans Blog - Technology blog about software and programming",
      "Ankicito - Book exchange application prototype (in development)",
      "My English Journey - Blog documenting English learning progress",
    ],
    stack: [
      "Next.js",
      "React",
      "WordPress",
      "JavaScript",
      "Content Writing",
      "Technical Writing",
    ],
    isCurrent: true,
    branch: "feature/side-projects",
  },
  {
    id: "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3",
    role: "Independent Consultant/Developer",
    company: "Freelance",
    startDate: "2017",
    endDate: "Present",
    type: "freelance",
    tags: ["WordPress", "Web Dev"],
    achievements: [
      "gabrielniezenmatos.com - Professional portfolio website",
      "sintrasat.com - Complete WordPress website with custom features",
      "fallingawake.com - Membership and subscription system implementation",
      "apoyoconsultivo.com - Custom WordPress development",
      "josedergan.com - Personal brand and course platform",
    ],
    stack: [
      "WordPress",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "WooCommerce",
      "SEO",
    ],
    isCurrent: true,
    branch: "feature/freelance",
  },
]

export function getAllExperiences(): ExperienceEntry[] {
  return experiences
}
