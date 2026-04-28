import { notFound } from "next/navigation"
import { getSideProjectBySlug, getSideProjects, fetchGitHubCommits, fetchGitHubRepoInfo, statusConfig, commitTypeConfig } from "@/lib/labs"
import { LabDetailClient } from "./client"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = getSideProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = getSideProjectBySlug(slug)

  if (!project) {
    return { title: "Proyecto no encontrado" }
  }

  return {
    title: `${project.nombre} | Labs`,
    description: project.descripcion,
  }
}

export default async function LabDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getSideProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Fetch GitHub data server-side
  const commits = project.githubRepo
    ? await fetchGitHubCommits(project.githubRepo, 15)
    : []

  const repoInfo = project.githubRepo
    ? await fetchGitHubRepoInfo(project.githubRepo)
    : null

  return (
    <LabDetailClient
      project={project}
      commits={commits}
      repoInfo={repoInfo}
      statusConfig={statusConfig}
      commitTypeConfig={commitTypeConfig}
    />
  )
}
