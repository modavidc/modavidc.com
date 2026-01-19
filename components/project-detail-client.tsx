"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Github, CheckCircle2, PlayCircle } from "lucide-react"
import { ProjectVideoModal } from "@/components/project-video-modal"
import type { Project } from "@/lib/projects"

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [videoModalOpen, setVideoModalOpen] = React.useState(false)

  return (
    <>
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="secondary">{project.category}</Badge>
                {project.pillar && (
                  <Badge variant="outline">{project.pillar} Pillar</Badge>
                )}
                {project.year && (
                  <Badge variant="outline">{project.year}</Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">{project.description}</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg border">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4">
            {project.videoUrl && (
              <Button onClick={() => setVideoModalOpen(true)} variant="default">
                <PlayCircle className="mr-2 h-4 w-4" />
                Ver Explicación en Video
              </Button>
            )}
            {project.github && project.github !== "#" && (
              <Button asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
            {project.demo && project.demo !== "#" && (
              <Button variant="outline" asChild>
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <Separator />

          {/* Summary */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="text-muted-foreground leading-7">
              {project.longDescription || project.summary}
            </p>
          </div>

          {/* Implementation Steps (for AWS projects) */}
          {project.implementationSteps && project.implementationSteps.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Implementation Steps</CardTitle>
                <CardDescription>
                  Step-by-step process followed to implement this project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.implementationSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Challenge */}
          {project.challenge && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Challenge</h2>
              <p className="text-muted-foreground leading-7">{project.challenge}</p>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Solution</h2>
              <p className="text-muted-foreground leading-7">{project.solution}</p>
            </div>
          )}

          {/* Outcome */}
          {project.outcome && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Outcome</h2>
              <p className="text-muted-foreground leading-7">{project.outcome}</p>
            </div>
          )}

          {/* Additional Info */}
          {(project.client || project.year) && (
            <>
              <Separator />
              <div className="grid gap-4 sm:grid-cols-2">
                {project.year && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Year</p>
                    <p className="text-lg">{project.year}</p>
                  </div>
                )}
                {project.client && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Client</p>
                    <p className="text-lg">{project.client}</p>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Navigation */}
          <Separator />
          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
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
    </>
  )
}

