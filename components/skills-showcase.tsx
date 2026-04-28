"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Cloud,
  Smartphone,
  Server,
  Shield,
  ChevronRight,
  Briefcase,
  Users,
  Rocket,
  MessageSquare,
  Layers,
  TrendingUp,
  Target,
  Clock,
  Globe,
  FileText,
  GitBranch,
  AlertTriangle,
  Mic,
  PenTool,
  Scale,
  Zap,
  Heart
} from "lucide-react"

interface DomainCategory {
  id: string
  title: string
  subtitle: string
  icon: React.ElementType
  color: string
  bgColor: string
  textColor: string
  borderColor: string
  items: {
    title: string
    description: string
    icon: React.ElementType
  }[]
}

const domains: DomainCategory[] = [
  {
    id: "technical",
    title: "Dominio Técnico",
    subtitle: "El fundamento de todo lo demás",
    icon: Server,
    color: "emerald",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-t-emerald-500",
    items: [
      { title: "Cloud & FinOps", description: "AWS, DigitalOcean, Docker, optimización de costos", icon: Cloud },
      { title: "Backend & APIs", description: "Laravel, Node.js, WebSockets, real-time systems", icon: Server },
      { title: "Mobile & Frontend", description: "Flutter, Vue.js, React, iOS + Android", icon: Smartphone },
      { title: "Healthcare & Gov-Tech", description: "HL7/FHIR, mTLS, compliance regulatorio", icon: Shield },
    ]
  },
  {
    id: "business",
    title: "Dominio de Negocio",
    subtitle: "Entender el por qué, no solo el cómo",
    icon: Briefcase,
    color: "blue",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-t-blue-500",
    items: [
      { title: "Idioma del Stakeholder", description: "ROI, costo de oportunidad, time-to-market", icon: TrendingUp },
      { title: "Traducir Requisitos", description: "De ideas vagas a soluciones técnicas concretas", icon: Target },
      { title: "Proponer, No Solo Ejecutar", description: "\"¿Y si hacemos Y que cuesta menos?\"", icon: Zap },
      { title: "Métricas de Negocio", description: "Churn, LTV, conversión — no solo uptime", icon: TrendingUp },
    ]
  },
  {
    id: "people",
    title: "Dominio de Personas",
    subtitle: "Lo que diferencia IC senior de Tech Lead",
    icon: Users,
    color: "rose",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-600 dark:text-rose-400",
    borderColor: "border-t-rose-500",
    items: [
      { title: "1:1s Efectivos", description: "Desarrollo de carrera, no solo status updates", icon: Users },
      { title: "Feedback Difícil", description: "Decir \"esto no está bien\" sin destruir la relación", icon: MessageSquare },
      { title: "Delegación Inteligente", description: "Qué delegar, a quién, y cómo hacer seguimiento", icon: GitBranch },
      { title: "Proteger al Equipo", description: "Del ruido, cambios de scope, reuniones inútiles", icon: Shield },
    ]
  },
  {
    id: "delivery",
    title: "Dominio de Delivery",
    subtitle: "Que las cosas salgan, no solo que estén bien",
    icon: Rocket,
    color: "violet",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-600 dark:text-violet-400",
    borderColor: "border-t-violet-500",
    items: [
      { title: "Estimación Realista", description: "No optimista, no pesimista — basada en datos", icon: Clock },
      { title: "Gestión de Riesgos", description: "Identificar qué puede fallar antes de que falle", icon: AlertTriangle },
      { title: "Scope Management", description: "Saber decir \"no\" o \"no ahora\"", icon: Scale },
      { title: "Release Management", description: "Feature flags, rollbacks, zero-downtime", icon: Rocket },
    ]
  },
  {
    id: "communication",
    title: "Dominio de Comunicación",
    subtitle: "Lo que te hace visible y confiable",
    icon: MessageSquare,
    color: "cyan",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-600 dark:text-cyan-400",
    borderColor: "border-t-cyan-500",
    items: [
      { title: "Inglés Fluido", description: "Reuniones sin fricción, no solo \"me defiendo\"", icon: Globe },
      { title: "Comunicación Async", description: "Updates claros, PRs que se explican solos", icon: PenTool },
      { title: "Presentar a No-Técnicos", description: "Explicar arquitectura sin que se duerman", icon: Mic },
      { title: "Documentación Ejecutiva", description: "Resúmenes, no novelas", icon: FileText },
    ]
  },
  {
    id: "architecture",
    title: "Dominio de Arquitectura",
    subtitle: "Decisiones que afectan años, no sprints",
    icon: Layers,
    color: "amber",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-t-amber-500",
    items: [
      { title: "Trade-offs Conscientes", description: "\"Elegimos esto porque..., sacrificamos esto\"", icon: Scale },
      { title: "Deuda Técnica Gestionada", description: "No cero deuda, sino deuda controlada", icon: GitBranch },
      { title: "Diseñar para Escalar", description: "Sin reescribir cuando crezca", icon: TrendingUp },
      { title: "Evaluar Tecnologías", description: "Problem-driven, no hype-driven", icon: Target },
    ]
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  },
}

const subItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  },
}

export function SkillsShowcase() {
  const [expandedId, setExpandedId] = useState<string | null>("technical")

  return (
    <div className="space-y-4">
      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {domains.map((domain, index) => {
          const Icon = domain.icon
          const isExpanded = expandedId === domain.id

          return (
            <motion.div
              key={domain.id}
              variants={itemVariants}
              onClick={() => setExpandedId(isExpanded ? null : domain.id)}
              className={`
                relative rounded-2xl border border-border/50 bg-muted/30
                overflow-hidden cursor-pointer transition-all duration-300
                ${domain.borderColor} border-t-4
                ${isExpanded ? 'md:col-span-2 lg:col-span-3 ring-2 ring-primary/20' : 'hover:border-primary/50'}
              `}
              layout
            >
              {/* Header - Always visible */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={`p-2.5 rounded-xl ${domain.bgColor}`}
                      animate={{
                        scale: isExpanded ? 1.1 : 1,
                        rotate: isExpanded ? -5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`h-5 w-5 ${domain.textColor}`} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold">{domain.title}</h3>
                      <p className="text-xs text-muted-foreground">{domain.subtitle}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className={`h-5 w-5 ${domain.textColor}`} />
                  </motion.div>
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-border/50"
                >
                  <motion.div
                    className="p-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {domain.items.map((item, i) => {
                      const ItemIcon = item.icon
                      return (
                        <motion.div
                          key={item.title}
                          variants={subItemVariants}
                          className={`p-4 rounded-xl border border-border/50 bg-background/50 hover:${domain.bgColor} transition-colors`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-1.5 rounded-lg ${domain.bgColor} shrink-0`}>
                              <ItemIcon className={`h-4 w-4 ${domain.textColor}`} />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">{item.title}</h4>
                              <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </motion.div>
              )}

              {/* Preview badges when collapsed */}
              {!isExpanded && (
                <div className="px-5 pb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {domain.items.slice(0, 3).map((item) => (
                      <Badge key={item.title} variant="outline" className="text-xs">
                        {item.title}
                      </Badge>
                    ))}
                    {domain.items.length > 3 && (
                      <Badge variant="outline" className="text-xs text-muted-foreground">
                        +{domain.items.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          )
        })}
      </motion.div>

      {/* Differentiator - How I Lead */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl border border-border/50 bg-muted/30 p-6 border-t-4 border-t-primary"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <h3 className="font-bold">Mi Diferenciador: Liderazgo por Pasión</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              No lidero por jerarquía o título. Lidero a través del <strong className="text-foreground">compromiso visible</strong> y
              la <strong className="text-foreground">pasión contagiosa</strong> por el proyecto. Cuando me importa, se nota — y eso
              inspira al equipo más que cualquier metodología.
            </p>
          </div>
          <div className="flex gap-3 text-center">
            <div className="p-4 rounded-xl border border-border/50 bg-background/50">
              <div className="text-2xl font-bold text-primary">48h</div>
              <div className="text-xs text-muted-foreground">Onboarding</div>
            </div>
            <div className="p-4 rounded-xl border border-border/50 bg-background/50">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-xs text-muted-foreground">Ownership</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
