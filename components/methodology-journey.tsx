"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Play,
  RotateCcw,
  Ear,
  FileText,
  HelpCircle,
  Brain,
  GitBranch,
  CheckSquare,
  Rocket,
  Trophy,
  MessageSquare,
  ChevronRight,
  ChevronLeft
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MethodStep {
  id: number
  title: string
  tagline: string
  description: string
  icon: React.ReactNode
  color: string
  bgColor: string
  antiPattern: string
  visual: React.ReactNode
}

const methodologySteps: MethodStep[] = [
  {
    id: 1,
    title: "Escuchar",
    tagline: "Inmersión total",
    description: "Sin interrupciones. Sin asumir. Dejarte hablar hasta que el problema se revele completamente. No es solo oír, es absorber contexto, historia, y lo que no se dice.",
    icon: <Ear className="h-6 w-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    antiPattern: "❌ Soluciones prematuras = retrabajo caro",
    visual: (
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-2xl">
              👤
            </div>
            <span className="text-xs mt-2 text-zinc-500">Cliente</span>
          </motion.div>

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center"
              >
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: i * 0.15
                  }}
                  className="w-3 h-3 rounded-full bg-purple-400"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
              <Ear className="h-8 w-8 text-white" />
            </div>
            <span className="text-xs mt-2 text-zinc-500">Yo</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-sm font-medium"
        >
          "Cuéntame todo desde el principio..."
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Documentar",
    tagline: "Nada de 'tú te acuerdas'",
    description: "Cada palabra importante queda por escrito. Inmediatamente. No al final de la reunión, durante. Así eliminamos el 'yo dije' vs 'yo entendí'.",
    icon: <FileText className="h-6 w-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    antiPattern: "❌ Sin registro = discusiones eternas sobre 'lo acordado'",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-sm bg-zinc-800 rounded-xl p-4 border border-zinc-700"
        >
          <div className="flex items-center gap-2 mb-3 text-blue-400 text-sm font-medium">
            <FileText className="h-4 w-4" />
            <span>Minutas_Reunion_001.md</span>
          </div>
          <div className="space-y-2 font-mono text-xs">
            {[
              { text: "## Contexto", delay: 0.3 },
              { text: "- Cliente: Proyecto X", delay: 0.5 },
              { text: "- Problema: Sistema lento", delay: 0.7 },
              { text: "", delay: 0 },
              { text: "## Lo que dijiste", delay: 0.9 },
              { text: "> \"Necesitamos que cargue", delay: 1.1 },
              { text: "> en menos de 2 segundos\"", delay: 1.2 },
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: line.delay }}
                className="text-zinc-300"
              >
                {line.text}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-blue-500"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-xs text-zinc-500"
        >
          Documentando en tiempo real...
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Preguntar",
    tagline: "Método Socrático",
    description: "Preguntas que profundizan. No para cuestionar, sino para entender las capas ocultas. ¿Por qué así? ¿Qué pasaría si...? ¿Cuál es el verdadero problema detrás?",
    icon: <HelpCircle className="h-6 w-6" />,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    antiPattern: "❌ Asumir = construir algo que no querías",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <div className="space-y-3 w-full max-w-md">
          {[
            { q: "¿Qué debería pasar vs qué está pasando?", level: 1 },
            { q: "¿Cuándo empezó a fallar? ¿Qué cambió?", level: 2 },
            { q: "¿Cómo afecta esto al día a día del equipo?", level: 3 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.4 }}
              style={{ marginLeft: `${item.level * 12}px` }}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ delay: 0.5 + i * 0.4, duration: 0.3 }}
                className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0"
              >
                <HelpCircle className="h-4 w-4 text-amber-500" />
              </motion.div>
              <div className="px-3 py-2 bg-zinc-800 rounded-lg text-sm text-zinc-300">
                {item.q}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="flex items-center gap-2 text-amber-400 text-sm"
        >
          <ChevronRight className="h-4 w-4" />
          <span>Cada respuesta genera nuevas preguntas</span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Ensimismamiento",
    tagline: "Reflexión profunda",
    description: "Me retiro a pensar. Proceso la información, conecto patrones, identifico lo que no encaja. Este tiempo de silencio es donde las mejores soluciones emergen.",
    icon: <Brain className="h-6 w-6" />,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    antiPattern: "❌ Respuestas rápidas = soluciones superficiales",
    visual: (
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="relative"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(99, 102, 241, 0)",
                "0 0 0 20px rgba(99, 102, 241, 0.1)",
                "0 0 0 40px rgba(99, 102, 241, 0)",
              ]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-24 h-24 rounded-full bg-indigo-500/20 flex items-center justify-center"
          >
            <Brain className="h-12 w-12 text-indigo-500" />
          </motion.div>

          {/* Floating ideas */}
          {["💡", "🔗", "⚡", "🎯"].map((emoji, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.5],
                x: Math.cos(i * Math.PI / 2) * 60,
                y: Math.sin(i * Math.PI / 2) * 60,
              }}
              transition={{
                delay: 0.5 + i * 0.3,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl"
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="text-indigo-400 font-medium">Procesando...</div>
          <div className="text-xs text-zinc-500 mt-1">Conectando patrones y posibilidades</div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Proponer",
    tagline: "2-3 caminos, nunca uno solo",
    description: "Presento alternativas con pros y contras de cada una. Por escrito. Para que la decisión sea informada y quede registro del porqué se eligió un camino.",
    icon: <GitBranch className="h-6 w-6" />,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    antiPattern: "❌ Una sola opción = decisión a ciegas",
    visual: (
      <div className="flex flex-col items-center gap-4 w-full max-w-lg">
        <div className="grid grid-cols-3 gap-3 w-full">
          {[
            {
              label: "Opción A",
              color: "border-green-500",
              pros: ["Rápido", "Económico"],
              cons: ["Limitado"],
            },
            {
              label: "Opción B",
              color: "border-blue-500",
              pros: ["Escalable", "Robusto"],
              cons: ["Más costoso"],
            },
            {
              label: "Opción C",
              color: "border-purple-500",
              pros: ["Innovador"],
              cons: ["Riesgo", "Nuevo"],
            },
          ].map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
              className={`p-3 rounded-lg bg-zinc-800 border-2 ${opt.color}`}
            >
              <div className="text-sm font-bold text-center mb-2">{opt.label}</div>
              <div className="space-y-1">
                {opt.pros.map((p, j) => (
                  <div key={j} className="text-[10px] text-green-400 flex items-center gap-1">
                    <span>+</span>{p}
                  </div>
                ))}
                {opt.cons.map((c, j) => (
                  <div key={j} className="text-[10px] text-red-400 flex items-center gap-1">
                    <span>-</span>{c}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-xs text-zinc-500 text-center"
        >
          Pros y contras documentados para cada opción
        </motion.div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Decidir",
    tagline: "Con fundamento",
    description: "La decisión queda documentada con su justificación. Meses después, cualquiera puede entender por qué se tomó ese camino. Sin arqueología de memoria.",
    icon: <CheckSquare className="h-6 w-6" />,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    antiPattern: "❌ Sin justificación = repetir errores del pasado",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-sm bg-zinc-800 rounded-xl p-4 border-2 border-emerald-500"
        >
          <div className="flex items-center gap-2 mb-3">
            <CheckSquare className="h-5 w-5 text-emerald-500" />
            <span className="font-bold text-emerald-400">DECISIÓN</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-3 text-sm"
          >
            <div>
              <span className="text-zinc-500">Elegido:</span>
              <span className="ml-2 text-emerald-400 font-medium">Opción B</span>
            </div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ delay: 0.8 }}
              className="border-t border-zinc-700 pt-3"
            >
              <div className="text-zinc-500 mb-1">Justificación:</div>
              <div className="text-zinc-300 text-xs leading-relaxed">
                "Se eligió B porque aunque es más costoso inicialmente,
                escala mejor con el crecimiento proyectado del proyecto..."
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xs text-zinc-600"
            >
              Fecha: 2024-01-15 | Participantes: Cliente, Moisés
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Ejecutar",
    tagline: "Desarrollo documentado",
    description: "Cada avance, cada decisión técnica, cada cambio queda registrado. El código puede explicarse solo, pero las decisiones de negocio necesitan contexto.",
    icon: <Rocket className="h-6 w-6" />,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    antiPattern: "❌ Código sin contexto = deuda técnica invisible",
    visual: (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center gap-4">
          {/* Timeline */}
          <div className="flex flex-col gap-2">
            {[
              { status: "done", label: "Sprint 1" },
              { status: "done", label: "Sprint 2" },
              { status: "current", label: "Sprint 3" },
              { status: "pending", label: "Sprint 4" },
            ].map((sprint, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.2 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={sprint.status === "current" ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className={`w-3 h-3 rounded-full ${
                    sprint.status === "done" ? "bg-green-500" :
                    sprint.status === "current" ? "bg-orange-500" :
                    "bg-zinc-600"
                  }`}
                />
                <span className={`text-xs ${
                  sprint.status === "current" ? "text-orange-400 font-medium" : "text-zinc-400"
                }`}>
                  {sprint.label}
                </span>
                {sprint.status === "done" && (
                  <span className="text-[10px] text-green-500">Documentado</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Code preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="bg-zinc-800 rounded-lg p-3 font-mono text-xs"
          >
            <div className="text-zinc-500">// DECISIÓN: Se usó Redis por...</div>
            <div className="text-orange-400">const cache = new Redis()</div>
            <div className="text-zinc-500">// Ver: decisions/cache-001.md</div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Entregar",
    tagline: "Con rastro completo",
    description: "El proyecto termina con un registro completo de decisiones, justificaciones y contexto. Cualquiera puede retomar el proyecto y entender su historia.",
    icon: <Trophy className="h-6 w-6" />,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    antiPattern: "❌ Sin historial = proyecto irretenible",
    visual: (
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          >
            <Trophy className="h-20 w-20 text-yellow-500" />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
          >
            <CheckSquare className="h-5 w-5 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center space-y-2"
        >
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-green-400">
              <FileText className="h-4 w-4" />
              <span>12 Decisiones</span>
            </div>
            <div className="flex items-center gap-1 text-blue-400">
              <MessageSquare className="h-4 w-4" />
              <span>8 Reuniones</span>
            </div>
          </div>
          <div className="text-xs text-zinc-500">
            Historial completo de por qué se hicieron las cosas
          </div>
        </motion.div>
      </div>
    ),
  },
]

export function MethodologyJourney() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (isPlaying && currentStep < methodologySteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
      }, 7000) // Más tiempo para leer
      return () => clearTimeout(timer)
    } else if (currentStep >= methodologySteps.length - 1) {
      setIsPlaying(false)
    }
  }, [isPlaying, currentStep])

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentStep < methodologySteps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePlay = () => {
    setHasStarted(true)
    setIsPlaying(true)
    setCurrentStep(0)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setIsPlaying(false)
    setHasStarted(false)
  }

  const handleStepClick = (index: number) => {
    if (hasStarted) {
      setCurrentStep(index)
      setIsPlaying(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold">Del problema a la solución documentada</h3>
          <p className="text-sm text-muted-foreground">8 pasos que garantizan un proyecto escalable y transferible</p>
        </div>
        <div className="flex items-center gap-2">
          {hasStarted && (
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Reiniciar
            </Button>
          )}
          {!isPlaying && (
            <Button size="sm" onClick={handlePlay}>
              <Play className="h-4 w-4 mr-1" />
              {hasStarted ? "Reproducir" : "Ver el proceso"}
            </Button>
          )}
        </div>
      </div>

      {/* Progress Steps */}
      {hasStarted && (
        <div className="flex items-center justify-center gap-1 mb-8 flex-wrap">
          {methodologySteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(index)}
              className="flex flex-col items-center group"
            >
              <motion.div
                animate={{
                  scale: index === currentStep ? 1.2 : 1,
                  backgroundColor: index <= currentStep
                    ? "hsl(var(--primary))"
                    : "hsl(var(--muted))",
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all"
              >
                {index + 1}
              </motion.div>
              <span className={`text-[10px] mt-1 transition-colors ${
                index === currentStep ? "text-primary" : "text-muted-foreground"
              }`}>
                {step.title}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-[400px] flex items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/20"
          >
            <div className="text-center space-y-4">
              <div className="text-6xl">🚀</div>
              <div>
                <p className="text-lg font-medium">Velocidad + Documentación + Criterio</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Cómo construyo software que escala sin cuellos de botella
                </p>
              </div>
              <p className="text-muted-foreground text-sm">
                Click en "Ver el proceso" para comenzar
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[400px] rounded-2xl border bg-card"
          >
            {/* Step Header */}
            <div className={`p-6 border-b ${methodologySteps[currentStep].bgColor}`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-background ${methodologySteps[currentStep].color}`}>
                  {methodologySteps[currentStep].icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Paso {currentStep + 1}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-background text-muted-foreground">
                      {methodologySteps[currentStep].tagline}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold">{methodologySteps[currentStep].title}</h4>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-6 border-b">
              <p className="text-muted-foreground leading-relaxed">
                {methodologySteps[currentStep].description}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 text-sm">
                {methodologySteps[currentStep].antiPattern}
              </div>
            </div>

            {/* Visual */}
            <div className="p-8 min-h-[200px] flex items-center justify-center">
              {methodologySteps[currentStep].visual}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between px-6 pb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </Button>

              <span className="text-sm text-muted-foreground">
                {currentStep + 1} / {methodologySteps.length}
              </span>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleNext}
                disabled={currentStep === methodologySteps.length - 1}
                className="flex items-center gap-1"
              >
                Siguiente
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Philosophy Quote */}
      {hasStarted && currentStep === methodologySteps.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <blockquote className="text-lg italic text-muted-foreground">
            "La experiencia sin documentación es solo una anécdota. Con rastro, es un activo."
          </blockquote>
        </motion.div>
      )}
    </div>
  )
}
