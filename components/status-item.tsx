import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ExternalLink } from "lucide-react"

interface StatusItemProps {
  icon: React.ReactNode
  title: string
  subtitle?: string
  description?: string
  imageUrl?: string
  progress?: number
  link?: string
}

export function StatusItem({ icon, title, subtitle, description, imageUrl, progress, link }: StatusItemProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {imageUrl && (
            <div className="flex-shrink-0">
              <div className="relative h-[150px] w-[120px] overflow-hidden rounded-md border">
                <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
              </div>
            </div>
          )}
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-2">{icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
                </div>
              </div>
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">External link</span>
                </Link>
              )}
            </div>

            {description && <p className="text-muted-foreground">{description}</p>}

            {typeof progress === "number" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

