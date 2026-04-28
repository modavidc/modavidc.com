import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/lib/projects"

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

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const colorKey = getProjectColorKey(project)

        return (
          <Link
            key={project.slug}
            href={`/casos-de-exito/${project.slug}`}
            className="group block perspective-1000"
          >
            <div
              data-color={colorKey}
              className={`
                h-full rounded-2xl border border-border/50 overflow-hidden bg-muted/30
                transition-all duration-300 ease-out
                hover:shadow-xl hover:shadow-primary/5
                hover:scale-[1.02] hover:-rotate-1
                data-[color=finops]:border-t-4 data-[color=finops]:border-t-emerald-500
                data-[color=healthcare]:border-t-4 data-[color=healthcare]:border-t-violet-500
                data-[color=saas]:border-t-4 data-[color=saas]:border-t-blue-500
                data-[color=mobile]:border-t-4 data-[color=mobile]:border-t-orange-500
                data-[color=personal]:border-t-4 data-[color=personal]:border-t-fuchsia-500
                data-[color=default]:border-t-4 data-[color=default]:border-t-primary
              `}
            >
              {/* Thumbnail */}
              {project.image && (
                <div className="relative h-32 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 transition-all duration-500 group-hover:opacity-80 group-hover:scale-110"
                  />
                  <div
                    data-color={colorKey}
                    className={`
                      absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/90
                      data-[color=finops]:from-emerald-500/20
                      data-[color=healthcare]:from-violet-500/20
                      data-[color=saas]:from-blue-500/20
                      data-[color=mobile]:from-orange-500/20
                      data-[color=personal]:from-fuchsia-500/20
                      data-[color=default]:from-primary/20
                    `}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{project.category}</span>
                  {project.year && <span>{project.year}</span>}
                </div>

                <h3 className="text-base font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-1">
                  {project.impactMetrics && project.impactMetrics[0] && (
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {project.impactMetrics[0]}
                    </div>
                  )}

                  {/* Botón a la derecha con background */}
                  <div
                    data-color={colorKey}
                    className={`
                      ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                      transition-all duration-300
                      bg-muted text-muted-foreground
                      group-hover:text-white
                      data-[color=finops]:group-hover:bg-emerald-500
                      data-[color=healthcare]:group-hover:bg-violet-500
                      data-[color=saas]:group-hover:bg-blue-500
                      data-[color=mobile]:group-hover:bg-orange-500
                      data-[color=personal]:group-hover:bg-fuchsia-500
                      data-[color=default]:group-hover:bg-primary
                    `}
                  >
                    <span>Ver caso</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

