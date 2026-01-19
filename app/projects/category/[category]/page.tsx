import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const projectCategories = ["work", "freelance", "personal"]

const projectsByCategory = {
  work: [
    {
      id: "enterprise-dashboard",
      title: "Enterprise Dashboard",
      description: "A comprehensive dashboard for enterprise data visualization and management",
      longDescription:
        "Led the development of a data visualization dashboard used by over 500 enterprise clients, resulting in a 30% increase in user engagement.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "TypeScript", "Node.js", "GraphQL"],
      github: "https://github.com/modavidc",
      demo: "#",
    },
    {
      id: "mobile-app",
      title: "Mobile App",
      description: "A cross-platform mobile application for health tracking",
      longDescription:
        "Developed a health tracking mobile app that integrates with wearable devices, achieving 50,000+ downloads across iOS and Android platforms.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Firebase", "Redux"],
      github: "https://github.com/modavidc",
      demo: "#",
    },
  ],
  freelance: [
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce solution with payment processing",
      longDescription:
        "Designed and developed a custom e-commerce platform for a boutique retailer, increasing online sales by 45% within the first quarter.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind", "Stripe", "PostgreSQL"],
      github: "https://github.com/modavidc",
      demo: "#",
    },
    {
      id: "cms",
      title: "Content Management System",
      description: "A custom CMS for a digitalital publication",
      longDescription:
        "Built a custom content management system for a digital publication, streamlining their content workflow and reducing publishing time by 60%.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js"],
      github: "https://github.com/modavidc",
      demo: "#",
    },
  ],
  personal: [
    {
      id: "cli-tool",
      title: "Open Source CLI Tool",
      description: "A command-line utility for automating development workflows",
      longDescription:
        "Created an open-source CLI tool that automates common development tasks, garnering over 500 stars on GitHub and 10+ contributors.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Go", "Docker", "GitHub Actions"],
      github: "https://github.com/modavidc",
      demo: "#",
    },
    {
      id: "data-viz",
      title: "Data Visualization Tool",
      description: "An interactive tool for visualizing complex datasets",
      longDescription:
        "Developed an interactive data visualization tool that helps researchers analyze and present complex datasets through intuitive visual representations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["D3.js", "React", "Python", "Flask"],
      github: "https://github.com/modavidc",
      demo: "#",
    },
  ],
}

export default function ProjectCategoryPage({ params }: { params: { category: string } }) {
  const { category } = params

  if (!projectCategories.includes(category)) {
    notFound()
  }

  const projects = projectsByCategory[category as keyof typeof projectsByCategory] || []

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to Projects</span>
            </Link>
          </Button>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{categoryTitle} Projects</h1>
            <p className="text-muted-foreground">
              {category === "work" && "Projects completed within companies or professional roles"}
              {category === "freelance" && "Independent or freelance projects for clients"}
              {category === "personal" && "Projects developed individually or outside formal employment"}
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.longDescription}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projects/${project.id}`}>View Details</Link>
                </Button>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

