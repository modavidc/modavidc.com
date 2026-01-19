"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Clock, Target, CheckCircle, XCircle, AlertTriangle, Zap, Shield, Users, FileText, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function MetodologiaPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <Badge variant="destructive" className="mb-4">
            Metodología Estricta
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Metodología de Trabajo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            "1 hora que pierdo porque alguien no hace lo que le dije 6 veces es 1 hora de mi vida que no le dedico a la filosofía"
          </p>
        </div>

        {/* Philosophy Alert */}
        <Alert className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Mi tiempo es sagrado.</strong> Cada minuto que desperdicio en repeticiones innecesarias es tiempo que no dedico a mi crecimiento personal, mi familia, o proyectos que realmente importan. Esta metodología existe para maximizar la eficiencia y el respeto mutuo.
          </AlertDescription>
        </Alert>

        {/* Core Principles */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Principios Fundamentales</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-green-800 dark:text-green-200">SÍ: Comunicación Clara</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li>• Documentación completa desde el primer día</li>
                  <li>• Requisitos específicos y medibles</li>
                  <li>• Timeline detallado con milestones</li>
                  <li>• Canales de comunicación definidos</li>
                  <li>• Feedback inmediato y constructivo</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <CardTitle className="text-red-800 dark:text-red-200">NO: Pérdida de Tiempo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                  <li>• Reuniones sin agenda clara</li>
                  <li>• Cambios de requisitos sin justificación</li>
                  <li>• Falta de preparación en sesiones</li>
                  <li>• Comunicación vaga o ambigua</li>
                  <li>• Procrastinación o falta de responsabilidad</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Workflow Process */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Proceso de Trabajo</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-blue-100 p-3 w-fit dark:bg-blue-900">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>1. Documentación</CardTitle>
                <CardDescription>
                  Todo se documenta. Sin excepciones.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Brief completo del proyecto</li>
                  <li>• Requisitos técnicos detallados</li>
                  <li>• Timeline con fechas específicas</li>
                  <li>• Criterios de aceptación claros</li>
                  <li>• Responsabilidades definidas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-green-100 p-3 w-fit dark:bg-green-900">
                  <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>2. Ejecución</CardTitle>
                <CardDescription>
                  Cumplimiento estricto del plan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Seguimiento del timeline</li>
                  <li>• Comunicación proactiva</li>
                  <li>• Resolución inmediata de bloqueos</li>
                  <li>• Calidad desde el primer intento</li>
                  <li>• Actualizaciones regulares</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-purple-100 p-3 w-fit dark:bg-purple-900">
                  <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>3. Entrega</CardTitle>
                <CardDescription>
                  Resultado final según especificaciones.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Testing completo</li>
                  <li>• Documentación actualizada</li>
                  <li>• Código limpio y comentado</li>
                  <li>• Entrega a tiempo</li>
                  <li>• Soporte post-entrega</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Communication Rules */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Reglas de Comunicación</h2>
          
          <div className="grid gap-4">
            <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-orange-800 dark:text-orange-200">Comunicación Eficiente</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">✅ HACER:</h4>
                    <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-300">
                      <li>• Preguntas específicas y directas</li>
                      <li>• Contexto completo en cada mensaje</li>
                      <li>• Respuestas dentro de 24 horas</li>
                      <li>• Uso de canales apropiados</li>
                      <li>• Confirmación de entendimiento</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">❌ NO HACER:</h4>
                    <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-300">
                      <li>• Mensajes vagos o incompletos</li>
                      <li>• Múltiples canales para lo mismo</li>
                      <li>• Respuestas tardías sin justificación</li>
                      <li>• Asumir que algo está claro</li>
                      <li>• Ignorar mensajes importantes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Time Management */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Gestión del Tiempo</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <CardTitle>Mi Compromiso</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <Zap className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Respuesta garantizada en 24 horas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Calidad profesional en cada entrega</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Users className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>Comunicación transparente y directa</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Target className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>Cumplimiento estricto de deadlines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <CardTitle>Lo Que No Toleraré</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Falta de preparación en reuniones</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Cambios de requisitos sin justificación</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Comunicación vaga o ambigua</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Falta de responsabilidad en deadlines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">¿Estás Listo para Trabajar Eficientemente?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Si respetas mi tiempo, yo respetaré el tuyo. Juntos podemos crear resultados excepcionales sin desperdiciar un solo minuto.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full min-[400px]:w-auto">
                Iniciar Proyecto
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                Ver Proyectos
              </Button>
            </Link>
          </div>
        </div>

        {/* Final Quote */}
        <div className="text-center py-8 border-t">
          <blockquote className="text-lg italic text-muted-foreground">
            "La eficiencia no es solo una metodología, es un respeto por la vida de todos los involucrados."
          </blockquote>
        </div>
      </div>
    </div>
  )
} 