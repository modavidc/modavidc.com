import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const projects = [
  {
    id: "enterprise-dashboard",
    title: "Enterprise Dashboard",
    category: "work",
    description: "A comprehensive dashboard for enterprise data visualization and management",
    longDescription:
      "Led the development of a data visualization dashboard used by over 500 enterprise clients, resulting in a 30% increase in user engagement.",
    challenge:
      "The main challenge was to create a highly performant dashboard that could handle large datasets while providing real-time updates and visualizations.",
    solution:
      "Implemented a microservices architecture with GraphQL for efficient data fetching, React for the frontend with optimized rendering, and WebSockets for real-time updates.",
    outcome:
      "The dashboard is now used by over 500 enterprise clients and has resulted in a 30% increase in user engagement. The system handles millions of data points daily with sub-second response times.",
    image: "/placeholder.svg?height=600&width=1200",
    technologies: ["React", "TypeScript", "Node.js", "GraphQL", "WebSockets", "D3.js", "AWS"],
    github: "https://github.com/modavidc",
    demo: "#",
    year: "2022",
    client: "Enterprise Solutions Inc.",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "freelance",
    description: "A full-featured e-commerce solution with payment processing",
    longDescription:
      "Designed and developed a custom e-commerce platform for a boutique retailer, increasing online sales by 45% within the first quarter.",
    challenge:
      "The client needed a custom e-commerce solution that would reflect their brand identity while providing a seamless shopping experience across devices.",
    solution:
      "Built a Next.js application with server-side rendering for SEO optimization, integrated Stripe for secure payments, and implemented a headless CMS for content management.",
    outcome:
      "The platform increased online sales by 45% within the first quarter, improved page load times by 60%, and provided the client with an easy-to-use content management system.",
    image: "/placeholder.svg?height=600&width=1200",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL", "Vercel", "Headless CMS"],
    github: "https://github.com/modavidc",
    demo: "#",
    year: "2023",
    client: "Boutique Retailer",
  },
  {
    id: "cli-tool",
    title: "Open Source CLI Tool",
    category: "personal",
    description: "A command-line utility for automating development workflows",
    longDescription:
      "Created an open-source CLI tool that automates common development tasks, garnering over 500 stars on GitHub and 10+ contributors.",
    challenge:
      "Developers spend significant time on repetitive tasks like project setup, dependency management, and deployment configurations.",
    solution:
      "Developed a CLI tool in Go that automates these tasks with a simple, intuitive interface. Implemented Docker support for consistent environments and GitHub Actions for CI/CD.",
    outcome:
      "The tool has gained over 500 stars on GitHub, attracted 10+ contributors, and is used by developers worldwide to streamline their workflows.",
    image: "/placeholder.svg?height=600&width=1200",
    technologies: ["Go", "Docker", "GitHub Actions", "Shell Scripting"],
    github: "https://github.com/modavidc",
    demo: "#",
    year: "2022",
    client: "Open Source",
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const { id } = params

  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/projects/${project.category}`}>
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to {project.category} Projects</span>
            </Link>
          </Button>
          <div>
            <Badge className="mb-2">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg border">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Year</p>
              <p>{project.year}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Client</p>
              <p>{project.client}</p>
            </div>
          </div>

          <div className="flex gap-4">
            {project.github && (
              <Button asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
            {project.demo && (
              <Button variant="outline" asChild>
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="mt-2 text-muted-foreground">{project.longDescription}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Challenge</h2>
            <p className="mt-2 text-muted-foreground">{project.challenge}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Solution</h2>
            <p className="mt-2 text-muted-foreground">{project.solution}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Outcome</h2>
            <p className="mt-2 text-muted-foreground">{project.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

