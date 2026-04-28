export type Platform = "linkedin" | "whatsapp" | "telegram" | "email"

export interface Testimonial {
  id: string
  nombre: string
  cargo: string
  empresa: string
  mensaje: string
  proyecto?: string
  plataforma: Platform
  fecha: string
}

// Testimonios reales o basados en proyectos reales
export const testimonials: Testimonial[] = [
  {
    id: "1",
    nombre: "Director de TI",
    cargo: "Director de Tecnología",
    empresa: "MediRec",
    mensaje: "Moisés lideró la reducción de nuestra factura AWS en un 58%. No solo optimizó costos, documentó cada decisión de arquitectura para que el equipo pudiera mantenerlo sin depender de él.",
    proyecto: "MediRec FinOps",
    plataforma: "linkedin",
    fecha: "Hace 2 semanas",
  },
  {
    id: "2",
    nombre: "Product Owner",
    cargo: "Product Owner",
    empresa: "T-Cuida",
    mensaje: "Lo que más valoro es la documentación. Cuando entró un nuevo dev, estuvo productivo en 48 horas gracias al registro de decisiones que Moisés mantuvo durante todo el proyecto.",
    proyecto: "T-Cuida Platform",
    plataforma: "whatsapp",
    fecha: "Ayer 18:42",
  },
  {
    id: "3",
    nombre: "Gerente de Operaciones",
    cargo: "Gerente de Operaciones",
    empresa: "Laboratorio Clínico",
    mensaje: "La integración del middleware redujo 70% el tiempo de comunicación de resultados. El sistema se comunica con equipos legacy que nadie más quería tocar. Funciona perfecto.",
    proyecto: "Lab Middleware",
    plataforma: "telegram",
    fecha: "Hace 3 días",
  },
  {
    id: "4",
    nombre: "CTO",
    cargo: "Chief Technology Officer",
    empresa: "Healthcare Startup",
    mensaje: "Necesitábamos cumplir con PREIS (regulación Gov-Tech) en tiempo récord. Moisés no solo lo logró, automatizó los reportes que antes tomaban 3 horas semanales. Ahora son real-time.",
    proyecto: "PREIS Integration",
    plataforma: "email",
    fecha: "Hace 1 semana",
  },
  {
    id: "5",
    nombre: "Líder Técnico",
    cargo: "Tech Lead",
    empresa: "MediRec",
    mensaje: "La app móvil quedó lista en 2 meses. Lo impresionante fue que el código estaba tan bien estructurado que cuando hubo que agregar features, no tuvimos que reescribir nada.",
    proyecto: "MediRec Mobile",
    plataforma: "linkedin",
    fecha: "Hace 1 mes",
  },
  {
    id: "6",
    nombre: "Coordinador IoT",
    cargo: "Coordinador de Proyectos",
    empresa: "T-Cuida",
    mensaje: "El bridge TCP/IP a WebSocket mejoró el throughput en 400%. Pensamos que necesitaríamos hardware nuevo, pero Moisés encontró la solución en software.",
    proyecto: "TCP/IP-WebSocket Bridge",
    plataforma: "whatsapp",
    fecha: "Hoy 09:15",
  },
]

export const platformConfig = {
  linkedin: {
    name: "LinkedIn",
    color: "bg-[#0A66C2]",
    lightBg: "bg-[#0A66C2]/10",
    textColor: "text-[#0A66C2]",
    borderColor: "border-[#0A66C2]",
    icon: "linkedin",
  },
  whatsapp: {
    name: "WhatsApp",
    color: "bg-[#25D366]",
    lightBg: "bg-[#25D366]/10",
    textColor: "text-[#25D366]",
    borderColor: "border-[#25D366]",
    icon: "whatsapp",
  },
  telegram: {
    name: "Telegram",
    color: "bg-[#0088CC]",
    lightBg: "bg-[#0088CC]/10",
    textColor: "text-[#0088CC]",
    borderColor: "border-[#0088CC]",
    icon: "telegram",
  },
  email: {
    name: "Email",
    color: "bg-[#EA4335]",
    lightBg: "bg-[#EA4335]/10",
    textColor: "text-[#EA4335]",
    borderColor: "border-[#EA4335]",
    icon: "email",
  },
}
