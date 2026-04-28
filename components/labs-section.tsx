"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, GitCommit } from "lucide-react"
import { getFeaturedSideProjects, statusConfig } from "@/lib/labs"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface LastCommit {
  fecha: string
  titulo: string
  commitHash: string
}

function LabCard({ project }: { project: ReturnType<typeof getFeaturedSideProjects>[0] }) {
  const status = statusConfig[project.estado]
  const [lastCommit, setLastCommit] = useState<LastCommit | null>(null)

  useEffect(() => {
    if (project.githubRepo) {
      fetch(`https://api.github.com/repos/${project.githubRepo}/commits?per_page=1`)
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data && data[0]) {
            setLastCommit({
              fecha: new Date(data[0].commit.author.date).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
              }),
              titulo: data[0].commit.message.split('\n')[0].substring(0, 40) + (data[0].commit.message.length > 40 ? '...' : ''),
              commitHash: data[0].sha.substring(0, 7),
            })
          }
        })
        .catch(() => {})
    }
  }, [project.githubRepo])

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group"
    >
      <Link href={`/labs/${project.slug}`}>
        <div className={cn(
          "rounded-2xl border bg-card p-5 h-full transition-all duration-300",
          "hover:shadow-lg hover:border-primary/50",
          "border-l-4",
          status.borderColor
        )}>
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">{status.emoji}</span>
              <h3 className="font-bold group-hover:text-primary transition-colors">
                {project.nombre}
              </h3>
            </div>
            <div className={cn(
              "px-2 py-0.5 rounded-full text-[10px] font-medium",
              status.bgColor,
              status.color
            )}>
              {status.label}
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground mb-3">{project.tagline}</p>

          {/* Stack */}
          <div className="flex flex-wrap gap-1 mb-3">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.5 rounded bg-muted text-[10px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="px-1.5 py-0.5 text-[10px] text-muted-foreground">
                +{project.stack.length - 3}
              </span>
            )}
          </div>

          {/* Last commit */}
          {lastCommit && (
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground pt-2 border-t border-border/50">
              <GitCommit className="h-3 w-3" />
              <span className="truncate">{lastCommit.titulo}</span>
              <span className="shrink-0">· {lastCommit.fecha}</span>
            </div>
          )}

          {/* Progress bar */}
          {project.progreso !== undefined && (
            <div className="mt-3 pt-3 border-t border-border/50">
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-muted-foreground">Progreso</span>
                <span className="font-medium">{project.progreso}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${project.progreso}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

export function LabsSection() {
  const projects = getFeaturedSideProjects()

  if (projects.length === 0) return null

  return (
    <section className="w-full py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-500 text-sm font-medium">
                🧪 Labs
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">
                Lo que construyo cuando nadie me paga
              </h2>
              <p className="text-muted-foreground">
                Side projects, experimentos y herramientas open source.
              </p>
            </div>

            <Link
              href="/labs"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium shrink-0"
            >
              Ver todos los proyectos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <LabCard key={project.id} project={project} />
            ))}
          </div>

          {/* Quick links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-border/50"
            variants={itemVariants}
          >
            <a
              href="https://github.com/modavidc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              github.com/modavidc
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
