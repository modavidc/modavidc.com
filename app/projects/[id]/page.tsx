import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/lib/projects"
import { ProjectDetailClient } from "@/components/project-detail-client"
import type { Metadata } from "next"

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.id)
  
  if (!project) {
    return {
      title: "Project Not Found"
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}

