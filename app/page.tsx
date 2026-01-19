"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Instagram, Youtube, Dribbble, Globe, Bell, CheckCircle, XCircle, Cloud, Zap, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Home() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [notificationRequested, setNotificationRequested] = useState(false);

  const handleNotificationRequest = () => {
    // Aquí podrías implementar la lógica para registrar el interés del usuario
    setNotificationRequested(true);
    alert("Te avisaré cuando esté disponible para colaborar.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with improved visual design */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-background to-muted/50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[40%] -right-[10%] w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <Badge className="w-fit" variant="destructive">
                  {isAvailable ? "Disponible" : "No Disponible Actualmente"}
                </Badge>
                <div className="flex items-center space-x-2">
                  {isAvailable ? (
                    <CheckCircle className="text-green-500" />
                  ) : (
                    <XCircle className="text-red-500" />
                  )}
                  <span>{isAvailable ? "Disponible" : "No disponible"}</span>
                  {!isAvailable && !notificationRequested && (
                    <button
                      onClick={handleNotificationRequest}
                      className="flex items-center space-x-1 text-blue-500 hover:underline"
                    >
                      <Bell />
                      <span>Notificarme</span>
                    </button>
                  )}
                </div>
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Moisés Cedeño</h1>
                  <p className="text-xl text-muted-foreground">Arquitecto de Rescate. Liderando la Ingeniería de la Razón.</p>
                </div>
                <p className="max-w-[600px] text-muted-foreground text-lg">
                  La IA acelera la deuda técnica. Mi foco es la arquitectura por propósito para convertir sistemas <em>Legacy</em> en ventaja competitiva. Creador de <Link href="https://mc-dc.com" className="text-primary hover:underline font-medium">MC-DC</Link>.
                </p>
                
                {/* Métricas de Impacto */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">58%</div>
                    <div className="text-sm text-muted-foreground">Reducción costos AWS</div>
                  </div>
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">$20k+</div>
                    <div className="text-sm text-muted-foreground">Ahorro en licencias</div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link href="/projects">
                    <Button className="inline-flex items-center justify-center w-full min-[400px]:w-auto" size="lg">
                      Ver Proyectos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/metodologia">
                    <Button
                      variant="outline"
                      className="inline-flex items-center justify-center w-full min-[400px]:w-auto"
                      size="lg"
                    >
                      Mi Metodología
                    </Button>
                  </Link>
                  <Link href="/experience">
                    <Button
                      variant="outline"
                      className="inline-flex items-center justify-center w-full min-[400px]:w-auto"
                      size="lg"
                    >
                      Experiencia
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Link href="https://github.com/modavidc" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/modavidc" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com/modavidc" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="https://instagram.com/modavidc" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                  <Link href="https://youtube.com/@modavidc" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                      <Youtube className="h-5 w-5" />
                      <span className="sr-only">YouTube</span>
                    </Button>
                  </Link>
                  <Link href="mailto:moisesdavidaaron@gmail.com">
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-8 border-background shadow-xl">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/C4D03AQFzbPWazkukLQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628294029732?e=1747872000&v=beta&t=vjFW3nkrASFHqWgkraI1dGjHfmpZqYOeifF6zq0unfY"
                    alt="Moisés Cedeño"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Redefined for Cloud Infrastructure focus */}
        <section className="w-full py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Principios de Ingeniería de la Razón</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Aplicando la filosofía de arquitectura que garantiza el ROI y la sostenibilidad
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Diseño de APIs por Propósito</h3>
                <p className="text-center text-sm text-muted-foreground">
                  No solo construyo endpoints, diseño la autonomía y el bajo acoplamiento de tus microservicios.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Liderazgo de Ingeniería y Filosofía</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Llevando a equipos a priorizar el valor de negocio sobre la velocidad de la moda tecnológica.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Testing de Valor (Validación del Problema)</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Mi QA va más allá del unit test: aseguramos que la solución resuelva el dolor de negocio real (Outcome Testing).
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Arquitecto de Rescate</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Modernización de sistemas complejos y conversión de deuda técnica en ventaja competitiva.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="w-full py-12 md:py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Impacto Medible</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Resultados cuantificables de mis proyectos y optimizaciones
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-primary">58%</div>
                <p className="text-sm text-muted-foreground">Reducción en costos AWS</p>
                <p className="text-xs text-muted-foreground">MediRec Infrastructure</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-primary">$20k+</div>
                <p className="text-sm text-muted-foreground">Ahorro en licencias</p>
                <p className="text-xs text-muted-foreground">LexiComp → NLM Migration</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-primary">400%</div>
                <p className="text-sm text-muted-foreground">Mejora en tiempo de programación</p>
                <p className="text-xs text-muted-foreground">T-Cuida Wearables</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-primary">8</div>
                <p className="text-sm text-muted-foreground">Semanas para primera app móvil</p>
                <p className="text-xs text-muted-foreground">MediRec Flutter App</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section - Updated with real projects */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos Destacados</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Casos de estudio reales de optimización de infraestructura e integración de sistemas
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-8 py-12 lg:grid-cols-2 xl:grid-cols-3">
              {/* Project Card 1 - AWS Infrastructure Optimization */}
              <div className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2021/05/21/dbblog_1088_v2_02.png"
                    alt="AWS Infrastructure Optimization"
                    width={500}
                    height={300}
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 z-20">MediRec</Badge>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">AWS Infrastructure Optimization</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    Reducción del 58% en costos operativos mediante estrategias de optimización y automatización.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      AWS
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      Docker
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      CI/CD
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <Link href="/projects/aws-infrastructure-optimization">
                      <Button variant="outline" size="sm" className="w-full">
                        Ver Detalles
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Card 2 - PREIS API Integration */}
              <div className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzZbfSXff0UWQQ0_AxGlJb7QmaqIDghSwoQ&s"
                    alt="PREIS API Integration"
                    width={500}
                    height={300}
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 z-20">MediRec</Badge>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">PREIS API Integration</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    Integración con sistema gubernamental para envío automatizado de registros de vacunación.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      REST API
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      FHIR
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      Laravel
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <Link href="/projects/medirec-preis-integration">
                      <Button variant="outline" size="sm" className="w-full">
                        Ver Detalles
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Card 3 - Flutter Mobile App */}
              <div className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
                    alt="MediRec Mobile App"
                    width={500}
                    height={300}
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 z-20">MediRec</Badge>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">App Móvil MediRec</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    Primera aplicación móvil de la empresa desarrollada en 8 semanas con Flutter.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      Flutter
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      Dart
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      Mobile
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <Link href="/projects/medirec-mobile-app">
                      <Button variant="outline" size="sm" className="w-full">
                        Ver Detalles
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Card 4 - T-Cuida Platform */}
              <div className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
                    alt="T-Cuida Platform"
                    width={500}
                    height={300}
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 z-20">T-Cuida</Badge>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">T-Cuida - Safety Platform</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    Plataforma SaaS de seguridad corporativa con integración de wearables y comunicación multicanal.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      Vue.js
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      IoT
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <Link href="/projects/t-cuida-platform">
                      <Button variant="outline" size="sm" className="w-full">
                        Ver Detalles
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Card 5 - José Dergán Website */}
              <div className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
                    alt="José Dergán Website"
                    width={500}
                    height={300}
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 z-20">Freelance</Badge>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">José Dergán - Psicólogo</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    Sitio web profesional con blog y plataforma de cursos para psicólogo.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      Sanity CMS
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      SEO
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <Link href="/projects/jose-dergan">
                      <Button variant="outline" size="sm" className="w-full">
                        Ver Detalles
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Card 6 - Ankicito App */}
              <div className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2028&auto=format&fit=crop"
                    alt="Ankicito App"
                    width={500}
                    height={300}
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 z-20">Personal</Badge>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">Ankicito - Book Exchange</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    Aplicación móvil para intercambio de libros y aprendizaje con tarjetas de memoria.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      React Native
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      In Progress
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      Education
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <Link href="/projects/ankicito">
                      <Button variant="outline" size="sm" className="w-full">
                        Ver Detalles
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/projects">
                <Button variant="outline" className="gap-1">
                  Ver Todos los Proyectos
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Updated with relevant testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Testimonios</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Lo que dicen mis clientes y colaboradores sobre mi trabajo
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Client"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      "Moisés lideró la optimización de nuestra infraestructura AWS, reduciendo costos en un 58% sin afectar el rendimiento. Su expertise en cloud y APIs fue fundamental para nuestro éxito."
                    </p>
                    <div className="mt-3">
                      <p className="text-sm font-medium">Director Técnico</p>
                      <p className="text-xs text-muted-foreground">MediRec</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Client"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      "Su capacidad para modernizar sistemas legacy y implementar integraciones complejas con el gobierno fue excepcional. Ahorramos más de $20k en licencias gracias a su trabajo."
                    </p>
                    <div className="mt-3">
                      <p className="text-sm font-medium">CEO</p>
                      <p className="text-xs text-muted-foreground">MediRec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Tu negocio sufre de Deuda Técnica o Caos de IA?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  La arquitectura por propósito convierte sistemas legacy en ventaja competitiva. Hablemos de cómo aplicar la Ingeniería de la Razón a tu negocio.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Hablemos de Arquitectura y ROI
                  </Button>
                </Link>
                <Link href="/metodologia">
                  <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                    Leer mi Pensamiento
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

