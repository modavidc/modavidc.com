"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle, Star, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Testimonios de ejemplo
const testimonios = [
  {
    id: 1,
    nombre: "Ana Martínez",
    cargo: "CEO, Boutique Retailer",
    mensaje:
      "David entregó un trabajo excepcional en nuestro proyecto de e-commerce. Su atención al detalle y capacidad para resolver problemas complejos superó nuestras expectativas.",
    imagen: "/placeholder.svg?height=80&width=80",
    posicion: "derecha",
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez",
    cargo: "CTO, Enterprise Solutions Inc.",
    mensaje:
      "Trabajar con David fue una experiencia excelente. Su conocimiento técnico y habilidades de comunicación hicieron que el proyecto fuera un éxito rotundo.",
    imagen: "/placeholder.svg?height=80&width=80",
    posicion: "izquierda",
  },
  {
    id: 3,
    nombre: "Laura Sánchez",
    cargo: "Directora de Marketing, TechStart",
    mensaje:
      "David transformó nuestra visión en una realidad digital impresionante. Su enfoque estratégico y creatividad nos ayudaron a destacar en un mercado muy competitivo.",
    imagen: "/placeholder.svg?height=80&width=80",
    posicion: "derecha",
  },
  {
    id: 4,
    nombre: "Miguel Torres",
    cargo: "Fundador, InnovateLab",
    mensaje:
      "Increíble profesional. David no solo entregó el proyecto a tiempo, sino que aportó ideas valiosas que mejoraron significativamente el resultado final.",
    imagen: "/placeholder.svg?height=80&width=80",
    posicion: "izquierda",
  },
  {
    id: 5,
    nombre: "Sofía Ramírez",
    cargo: "Diseñadora UX, CreativeStudio",
    mensaje:
      "La colaboración con David fue fluida y productiva. Su capacidad para integrar diseño y funcionalidad es realmente destacable.",
    imagen: "/placeholder.svg?height=80&width=80",
    posicion: "derecha",
  },
]

export default function TestimoniosPage() {
  const [activeTestimonios, setActiveTestimonios] = useState<number[]>([])
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    // Mostrar testimonios secuencialmente
    const interval = setInterval(() => {
      setActiveTestimonios((prev) => {
        if (prev.length < testimonios.length) {
          return [...prev, prev.length + 1]
        } else {
          clearInterval(interval)
          // Mostrar CTA después de que todos los testimonios estén visibles
          setTimeout(() => setShowCTA(true), 1000)
          return prev
        }
      })
    }, 2000) // Intervalo entre cada testimonio

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container relative min-h-screen px-4 py-24 overflow-hidden">
      {/* Fondo con gradiente y formas */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[40%] -right-[10%] w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-2 text-center mb-16">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Lo que dicen mis clientes</h1>
        <p className="text-muted-foreground md:text-xl">
          Experiencias reales de personas y empresas con las que he colaborado
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto min-h-[500px]">
        {/* Línea de tiempo central */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted -translate-x-1/2"></div>

        {/* Burbujas de testimonios */}
        <AnimatePresence>
          {testimonios.map(
            (testimonio, index) =>
              activeTestimonios.includes(testimonio.id) && (
                <motion.div
                  key={testimonio.id}
                  className={cn(
                    "relative mb-16",
                    testimonio.posicion === "izquierda" ? "text-right mr-auto pr-8" : "text-left ml-auto pl-8",
                    testimonio.posicion === "izquierda" ? "max-w-[80%] md:max-w-[65%]" : "max-w-[80%] md:max-w-[65%]",
                  )}
                  style={{
                    marginLeft: testimonio.posicion === "izquierda" ? 0 : "auto",
                    marginRight: testimonio.posicion === "derecha" ? 0 : "auto",
                  }}
                  initial={{
                    opacity: 0,
                    y: 20,
                    x: testimonio.posicion === "izquierda" ? -50 : 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    },
                  }}
                  exit={{ opacity: 0 }}
                >
                  {/* Indicador de tiempo */}
                  <div
                    className={cn(
                      "absolute top-10 w-4 h-4 rounded-full bg-primary z-10",
                      testimonio.posicion === "izquierda" ? "right-0 -translate-x-1/2" : "left-0 translate-x-1/2",
                    )}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                        repeatDelay: 1,
                      }}
                    />
                  </div>

                  {/* Burbuja de mensaje */}
                  <div
                    className={cn(
                      "relative p-6 rounded-2xl shadow-md bg-card",
                      testimonio.posicion === "izquierda" ? "rounded-tr-none" : "rounded-tl-none",
                    )}
                  >
                    {/* Triángulo de la burbuja */}
                    <div
                      className={cn(
                        "absolute top-0 w-4 h-4 bg-card",
                        testimonio.posicion === "izquierda"
                          ? "right-0 -translate-x-1/2 -translate-y-1/2 rotate-45"
                          : "left-0 translate-x-1/2 -translate-y-1/2 rotate-45",
                      )}
                    />

                    <div
                      className={cn(
                        "flex items-center gap-4 mb-3",
                        testimonio.posicion === "izquierda" ? "flex-row-reverse" : "flex-row",
                      )}
                    >
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background">
                        <Image
                          src={testimonio.imagen || "/placeholder.svg"}
                          alt={testimonio.nombre}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className={testimonio.posicion === "izquierda" ? "text-right" : "text-left"}>
                        <h3 className="font-bold">{testimonio.nombre}</h3>
                        <p className="text-sm text-muted-foreground">{testimonio.cargo}</p>
                      </div>
                    </div>

                    <div className="relative">
                      <MessageCircle
                        className={cn(
                          "absolute text-primary/10 h-20 w-20 -z-10",
                          testimonio.posicion === "izquierda" ? "right-0" : "left-0",
                        )}
                      />
                      <p
                        className={cn(
                          "text-sm md:text-base",
                          testimonio.posicion === "izquierda" ? "text-right" : "text-left",
                        )}
                      >
                        "{testimonio.mensaje}"
                      </p>
                    </div>

                    <div
                      className={cn("flex mt-3", testimonio.posicion === "izquierda" ? "justify-start" : "justify-end")}
                    >
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>

        {/* CTA final animado */}
        <AnimatePresence>
          {showCTA && (
            <motion.div
              className="relative max-w-lg mx-auto mt-24 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                },
              }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl -z-10"></div>
              <motion.div
                className="relative p-8 rounded-3xl bg-card border shadow-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Efectos de fondo */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                  <motion.div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 8,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-primary/10"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 10,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </div>

                <div className="relative">
                  <motion.div
                    className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="h-8 w-8 text-primary" />
                  </motion.div>

                  <h2 className="text-2xl font-bold mb-3">¿Listo para crear algo increíble juntos?</h2>
                  <p className="text-muted-foreground mb-6">
                    Convirtamos tus ideas en realidad con soluciones digitales a medida que impulsen tu negocio.
                  </p>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/contact">
                      <Button size="lg" className="gap-2">
                        Hablemos de tu proyecto
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

