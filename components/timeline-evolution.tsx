"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  ChevronUp,
  Code,
  Layers,
  Server,
  Crown,
  Briefcase,
  Calendar,
  CheckCircle2
} from "lucide-react"
import { ExperienceEntry } from "@/lib/experience"

interface TimelineEvolutionProps {
  experiences: ExperienceEntry[]
}

const evolutionStages = [
  {
    id: "techlead",
    year: "2023",
    endYear: "Presente",
    role: "Tech Lead",
    subtitle: "Arquitectura & Full Ownership",
    company: "T-Cuida",
    icon: Crown,
    color: "emerald",
    borderColor: "border-t-emerald-500",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-500",
    glowColor: "shadow-emerald-500/25",
    description: "Liderazgo técnico de ecosistema SaaS completo. Diseño de arquitectura, toma de decisiones y ownership end-to-end.",
    highlights: [
      "Sistema IoT desde cero con 100% ownership",
      "Onboarding de devs en 48h gracias a documentación",
      "Dashboard real-time: de 3 min a 1 min respuesta",
    ],
    skills: ["Arquitectura", "IoT", "WebSockets", "Vue.js", "Node.js"],
    experienceId: "T-Cuida",
  },
  {
    id: "solution",
    year: "2020",
    endYear: "Presente",
    role: "Solution Architect",
    subtitle: "FinOps & Healthcare",
    company: "MediRec",
    icon: Server,
    color: "blue",
    borderColor: "border-t-blue-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-500",
    glowColor: "shadow-blue-500/25",
    description: "Arquitectura de soluciones en healthcare con foco en optimización de costos y cumplimiento regulatorio.",
    highlights: [
      "-58% factura AWS con right-sizing y gobernanza",
      "-$20k/año eliminando licencias innecesarias",
      "100% compliance en integración Gov-Tech (PREIS)",
    ],
    skills: ["AWS", "FinOps", "Laravel", "Flutter", "FHIR", "mTLS"],
    experienceId: "MediRec",
  },
  {
    id: "integration",
    year: "2020",
    endYear: "2023",
    role: "Integration Engineer",
    subtitle: "APIs & Middleware",
    company: "MediRec",
    icon: Layers,
    color: "violet",
    borderColor: "border-t-violet-500",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-500",
    glowColor: "shadow-violet-500/25",
    description: "Especialización en interoperabilidad clínica, conectando sistemas legacy con plataformas modernas.",
    highlights: [
      "Middleware HL7-to-FHIR para laboratorios",
      "-70% tiempo de comunicación de resultados",
      "Integración con sistemas gubernamentales",
    ],
    skills: ["HL7", "FHIR R4", "REST APIs", "Laravel", "MySQL"],
    experienceId: "MediRec",
  },
  {
    id: "fullstack",
    year: "2017",
    endYear: "2020",
    role: "Full-Stack Developer",
    subtitle: "Web & WordPress",
    company: "Freelance",
    icon: Code,
    color: "zinc",
    borderColor: "border-t-zinc-500",
    bgColor: "bg-zinc-500/10",
    textColor: "text-zinc-600 dark:text-zinc-400",
    iconBg: "bg-zinc-500",
    glowColor: "shadow-zinc-500/25",
    description: "Desarrollo web freelance, construyendo sitios y aplicaciones para diversos clientes.",
    highlights: [
      "5+ proyectos web entregados",
      "Sistemas de membresía y suscripción",
      "WordPress + WooCommerce personalizado",
    ],
    skills: ["WordPress", "PHP", "JavaScript", "CSS", "WooCommerce"],
    experienceId: "Freelance",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const highlightVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  },
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 }
  },
}

export function TimelineEvolution({ experiences }: TimelineEvolutionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const getExperienceData = (companyName: string) => {
    return experiences.find(e => e.company === companyName)
  }

  return (
    <div className="relative">
      {/* Vertical timeline line with gradient */}
      <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 via-violet-500 to-zinc-500 md:-translate-x-0.5" />

      <div className="space-y-12">
        {evolutionStages.map((stage, index) => {
          const isExpanded = expandedId === stage.id
          const fullExperience = getExperienceData(stage.experienceId)
          const Icon = stage.icon
          const isLeft = index % 2 === 0

          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline dot with pulse animation */}
              <motion.div
                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: index * 0.1 + 0.2
                }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full ${stage.iconBg} flex items-center justify-center shadow-lg ${stage.glowColor}`}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      `0 0 0 0 ${stage.color === 'emerald' ? 'rgba(16, 185, 129, 0.4)' :
                                 stage.color === 'blue' ? 'rgba(59, 130, 246, 0.4)' :
                                 stage.color === 'violet' ? 'rgba(139, 92, 246, 0.4)' :
                                 'rgba(113, 113, 122, 0.4)'}`,
                      `0 0 0 8px ${stage.color === 'emerald' ? 'rgba(16, 185, 129, 0)' :
                                  stage.color === 'blue' ? 'rgba(59, 130, 246, 0)' :
                                  stage.color === 'violet' ? 'rgba(139, 92, 246, 0)' :
                                  'rgba(113, 113, 122, 0)'}`
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }
                  }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
              </motion.div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 ${isLeft ? 'md:mr-[calc(50%+2rem)] md:pr-4' : 'md:ml-[calc(50%+2rem)] md:pl-4'}`}>
                <motion.div
                  className={`rounded-2xl border border-border/50 bg-muted/30 overflow-hidden ${stage.borderColor} border-t-4 transition-all duration-300`}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 40px -10px rgba(0,0,0,0.2)"
                  }}
                >
                  {/* Card Header */}
                  <div className="p-5 md:p-6">
                    {/* Year badge */}
                    <motion.div
                      className="flex items-center justify-between mb-4"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <motion.div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${stage.bgColor} ${stage.textColor} text-sm font-medium`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        {stage.year} - {stage.endYear}
                      </motion.div>
                      <Badge variant="outline" className="text-xs">
                        <Briefcase className="h-3 w-3 mr-1" />
                        {stage.company}
                      </Badge>
                    </motion.div>

                    {/* Role */}
                    <motion.div
                      className="space-y-1 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <h3 className="text-xl font-bold">{stage.role}</h3>
                      <p className="text-sm text-muted-foreground">{stage.subtitle}</p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="text-sm text-muted-foreground mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {stage.description}
                    </motion.p>

                    {/* Highlights with stagger animation */}
                    <motion.div
                      className="space-y-2 mb-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {stage.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-2 text-sm"
                          variants={highlightVariants}
                        >
                          <CheckCircle2 className={`mt-0.5 h-4 w-4 ${stage.textColor} shrink-0`} />
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Skills with stagger */}
                    <motion.div
                      className="flex flex-wrap gap-1.5 mb-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {stage.skills.map((skill) => (
                        <motion.div key={skill} variants={skillVariants}>
                          <Badge
                            variant="outline"
                            className="text-xs hover:bg-primary/10 transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Expand button */}
                    {fullExperience && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpand(stage.id)}
                          className="w-full justify-center gap-2 hover:bg-primary/10"
                        >
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.span>
                          {isExpanded ? "Ver menos" : "Ver todos los logros"}
                        </Button>
                      </motion.div>
                    )}
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && fullExperience && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="border-t border-border/50 overflow-hidden"
                      >
                        <motion.div
                          className="p-5 md:p-6 space-y-4 bg-background/50"
                          initial={{ y: -20 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <h4 className="font-semibold text-sm">Todos los logros en {fullExperience.company}</h4>
                          <motion.ul
                            className="space-y-3"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {fullExperience.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start gap-3 text-sm text-muted-foreground"
                                variants={highlightVariants}
                              >
                                <CheckCircle2 className={`mt-0.5 h-4 w-4 ${stage.textColor} shrink-0`} />
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </motion.ul>

                          <motion.div
                            className="pt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <h4 className="font-semibold text-sm mb-2">Stack completo</h4>
                            <motion.div
                              className="flex flex-wrap gap-1.5"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {fullExperience.stack.map((tech) => (
                                <motion.div key={tech} variants={skillVariants}>
                                  <Badge variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
