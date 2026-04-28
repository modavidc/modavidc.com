"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  PlayCircle,
  BookOpen,
  Quote as QuoteIcon,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  Clock,
} from "lucide-react"
import { ProjectVideoModal } from "@/components/project-video-modal"
import { ProjectStoryModal } from "@/components/project-story-modal"
import type { Project } from "@/lib/projects"

interface ProjectDetailClientProps {
  project: Project
}

type ColorKey = "finops" | "healthcare" | "saas" | "mobile" | "personal" | "default"

function getProjectColorKey(project: Project): ColorKey {
  const title = project.title.toLowerCase()
  const tags = project.tags?.join(" ").toLowerCase() || ""

  if (title.includes("finops") || title.includes("aws") || title.includes("cost") || title.includes("optimiz")) return "finops"
  if (title.includes("health") || title.includes("medi") || title.includes("lab") || title.includes("preis") || title.includes("nlm")) return "healthcare"
  if (title.includes("saas") || title.includes("t-cuida") || title.includes("tcuida") || title.includes("dashboard")) return "saas"
  if (title.includes("mobile") || title.includes("flutter") || title.includes("app")) return "mobile"
  if (project.category === "Personal") return "personal"
  if (tags.includes("healthcare") || tags.includes("fhir")) return "healthcare"
  if (tags.includes("aws") || tags.includes("finops")) return "finops"

  return "default"
}

const colorClasses: Record<ColorKey, { border: string; text: string; bg: string; icon: string }> = {
  finops: { border: "border-t-emerald-500", text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10", icon: "text-emerald-500" },
  healthcare: { border: "border-t-violet-500", text: "text-violet-600 dark:text-violet-400", bg: "bg-violet-500/10", icon: "text-violet-500" },
  saas: { border: "border-t-blue-500", text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10", icon: "text-blue-500" },
  mobile: { border: "border-t-orange-500", text: "text-orange-600 dark:text-orange-400", bg: "bg-orange-500/10", icon: "text-orange-500" },
  personal: { border: "border-t-fuchsia-500", text: "text-fuchsia-600 dark:text-fuchsia-400", bg: "bg-fuchsia-500/10", icon: "text-fuchsia-500" },
  default: { border: "border-t-primary", text: "text-primary", bg: "bg-primary/10", icon: "text-primary" },
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [videoModalOpen, setVideoModalOpen] = React.useState(false)
  const [storyModalOpen, setStoryModalOpen] = React.useState(false)

  const colorKey = getProjectColorKey(project)
  const colors = colorClasses[colorKey]

  const hasNewStructure = project.problem || project.heroMetric
  const hasBenefits = project.benefits && project.benefits.length > 0
  const hasBeforeAfter = project.results?.beforeAfter && project.results.beforeAfter.length > 0

  return (
    <>
      <div className="relative overflow-hidden">
        {/* background decorative */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-[40%] -right-[10%] h-[70%] w-[70%] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-[40%] -left-[10%] h-[70%] w-[70%] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container relative px-4 py-12 md:px-6 md:py-24">
          <div className="mx-auto max-w-5xl space-y-12">

            {/* === HERO === */}
            <section className="space-y-6">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/casos-de-exito">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a Casos de Éxito
                </Link>
              </Button>

              {/* Main card */}
              <div className={`rounded-2xl border border-border/50 bg-muted/30 overflow-hidden border-t-4 ${colors.border}`}>
                {/* Image header */}
                {project.image && (
                  <div className="relative h-48 md:h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                    {/* Hero metric overlay */}
                    {project.heroMetric && (
                      <div className="absolute bottom-6 right-6 text-right">
                        <div className={`text-5xl md:text-6xl font-bold ${colors.text}`}>
                          {project.heroMetric}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {project.heroMetricLabel}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.industry && (
                      <Badge variant="secondary" className={colors.bg}>
                        {project.industry}
                      </Badge>
                    )}
                    {project.client && <Badge variant="outline">{project.client}</Badge>}
                    {project.duration && (
                      <Badge variant="outline" className="gap-1">
                        <Clock className="h-3 w-3" />
                        {project.duration}
                      </Badge>
                    )}
                    {project.year && <Badge variant="outline">{project.year}</Badge>}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      {project.title}
                    </h1>
                    <p className="text-lg text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 6).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.storyId && (
                      <Button onClick={() => setStoryModalOpen(true)}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Ver Historia
                      </Button>
                    )}
                    {project.videoUrl && (
                      <Button variant={project.storyId ? "outline" : "default"} onClick={() => setVideoModalOpen(true)}>
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Ver Video
                      </Button>
                    )}
                    {project.github && project.github !== "#" && (
                      <Button variant="outline" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Código
                        </Link>
                      </Button>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <Button variant="outline" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* === CONTENIDO PRINCIPAL === */}
            <div className="grid gap-8 lg:grid-cols-3">

              {/* Columna izquierda: Problema + Approach */}
              <div className="lg:col-span-2 space-y-8">

                {/* EL PROBLEMA */}
                {project.problem && (
                  <section className="space-y-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                      <h2 className="text-xl font-bold">El Problema</h2>
                    </div>

                    <div className="rounded-xl border border-border/50 bg-muted/30 p-6 space-y-4">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">Situación inicial</div>
                        <p className="text-foreground">{project.problem.situation}</p>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">El costo de no hacer nada</div>
                        <p className="text-foreground">{project.problem.pain}</p>
                      </div>
                      {project.problem.whyMe && (
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">Por qué me llamaron</div>
                          <p className="text-foreground">{project.problem.whyMe}</p>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* MI APPROACH */}
                {project.approach && (
                  <section className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-muted-foreground" />
                      <h2 className="text-xl font-bold">Mi Approach</h2>
                    </div>

                    <div className="rounded-xl border border-border/50 bg-muted/30 p-6 space-y-4">
                      <p className="text-foreground">{project.approach.strategy}</p>

                      {project.approach.keyDecisions && project.approach.keyDecisions.length > 0 && (
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-3">Decisiones técnicas clave</div>
                          <ul className="space-y-2">
                            {project.approach.keyDecisions.map((decision, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                                <span>{decision}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.approach.timeline && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                          <Clock className="h-4 w-4" />
                          {project.approach.timeline}
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* LEGACY CONTENT */}
                {!hasNewStructure && (
                  <>
                    {project.challenge && (
                      <section className="space-y-4">
                        <h2 className="text-xl font-bold">El Reto</h2>
                        <p className="text-muted-foreground leading-7">{project.challenge}</p>
                      </section>
                    )}

                    {project.solution && (
                      <section className="space-y-4">
                        <h2 className="text-xl font-bold">La Solución</h2>
                        <p className="text-muted-foreground leading-7">{project.solution}</p>
                      </section>
                    )}

                    {project.outcome && (
                      <section className="space-y-4">
                        <h2 className="text-xl font-bold">El Resultado</h2>
                        <p className="text-muted-foreground leading-7">{project.outcome}</p>
                      </section>
                    )}

                    {project.longDescription && (
                      <section className="space-y-4">
                        <h2 className="text-xl font-bold">Resumen</h2>
                        <p className="text-muted-foreground leading-7">{project.longDescription}</p>
                      </section>
                    )}
                  </>
                )}
              </div>

              {/* Columna derecha: Resultados + Stack */}
              <div className="space-y-8">

                {/* RESULTADOS */}
                {(hasBeforeAfter || hasBenefits) && (
                  <section className="space-y-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className={`h-5 w-5 ${colors.icon}`} />
                      <h2 className="text-xl font-bold">Resultados</h2>
                    </div>

                    <div className="space-y-3">
                      {/* Before/After */}
                      {hasBeforeAfter && project.results!.beforeAfter!.map((item, i) => (
                        <div key={i} className={`rounded-xl border border-border/50 bg-muted/30 p-4 border-l-4 ${colors.border.replace('border-t-', 'border-l-')}`}>
                          <div className="text-xs text-muted-foreground mb-2">{item.metric}</div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground line-through">{item.before}</span>
                            <ArrowRight className="h-3 w-3 text-muted-foreground" />
                            <span className={`text-xl font-bold ${colors.text}`}>{item.after}</span>
                          </div>
                        </div>
                      ))}

                      {/* Benefits fallback */}
                      {!hasBeforeAfter && hasBenefits && project.benefits!.map((b, i) => (
                        <div key={i} className={`rounded-xl border border-border/50 bg-muted/30 p-4 text-center border-l-4 ${colors.border.replace('border-t-', 'border-l-')}`}>
                          <div className={`text-2xl font-bold ${colors.text}`}>{b.value}</div>
                          <div className="font-medium text-sm">{b.label}</div>
                          {b.detail && <div className="text-xs text-muted-foreground mt-1">{b.detail}</div>}
                        </div>
                      ))}
                    </div>

                    {/* Business Impact */}
                    {project.results?.businessImpact && (
                      <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
                        <div className="text-sm font-medium text-muted-foreground mb-1">Impacto en el negocio</div>
                        <p className="text-sm">{project.results.businessImpact}</p>
                      </div>
                    )}
                  </section>
                )}

                {/* TECH STACK */}
                {project.servicesUsed && project.servicesUsed.length > 0 && (
                  <section className="space-y-4">
                    <h2 className="text-xl font-bold">Stack</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.servicesUsed.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>

            {/* === QUOTE === */}
            {project.quote?.text && (
              <section className={`rounded-2xl border border-border/50 bg-muted/30 p-8 border-t-4 ${colors.border}`}>
                <div className="flex items-start gap-4">
                  <QuoteIcon className={`h-8 w-8 flex-shrink-0 ${colors.icon}`} />
                  <div className="space-y-3">
                    <p className="text-lg leading-7 italic">"{project.quote.text}"</p>
                    {(project.quote.author || project.quote.role) && (
                      <div className="text-sm text-muted-foreground">
                        {project.quote.author && <span className="font-medium text-foreground">{project.quote.author}</span>}
                        {project.quote.role && <span>{project.quote.author ? " — " : ""}{project.quote.role}</span>}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}

            {/* === GALLERY === */}
            {project.gallery && project.gallery.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl font-bold">Galería</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {project.gallery.filter(g => g.type === "image").slice(0, 6).map((m, i) => (
                    <div key={i} className="relative aspect-video overflow-hidden rounded-xl border border-border/50 bg-muted">
                      <Image src={m.src} alt={m.alt || project.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* === CTA === */}
            <section className={`rounded-2xl border border-border/50 bg-muted/30 p-8 text-center space-y-4 border-t-4 ${colors.border}`}>
              <h2 className="text-2xl font-bold">¿Tienes un problema similar?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Si tu infraestructura está costando más de lo que debería, o tu equipo depende de una sola persona, hablemos.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <Button size="lg" asChild>
                  <Link href="mailto:moisesdavidaaron@gmail.com?subject=Proyecto%20similar%20a%20{project.slug}">
                    Agenda diagnóstico gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/metodologia">
                    Ver cómo trabajo
                  </Link>
                </Button>
              </div>
            </section>

            {/* Navigation */}
            <Separator />
            <div className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/casos-de-exito">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a Casos de Éxito
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {project.videoUrl && (
        <ProjectVideoModal
          open={videoModalOpen}
          onOpenChange={setVideoModalOpen}
          videoUrl={project.videoUrl}
          projectTitle={project.title}
        />
      )}

      {/* Story Modal */}
      {project.storyId && (
        <ProjectStoryModal
          open={storyModalOpen}
          onOpenChange={setStoryModalOpen}
          storyId={project.storyId}
          projectTitle={project.title}
        />
      )}
    </>
  )
}
