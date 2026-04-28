"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AnimatedDiagram } from "@/components/animated-diagram"

interface ProjectStoryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  storyId: "medirec" | "nlm" | "preis" | "lab" | "tcuida" | "dashboard" | "bridge" | "mobile" | "estoico" | "grupero"
  projectTitle: string
}

export function ProjectStoryModal({
  open,
  onOpenChange,
  storyId,
  projectTitle,
}: ProjectStoryModalProps) {
  // Key to reset AnimatedDiagram when modal reopens
  const [key, setKey] = React.useState(0)

  React.useEffect(() => {
    if (open) {
      setKey(prev => prev + 1)
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle>Historia: {projectTitle}</DialogTitle>
          <DialogDescription>
            Visualiza paso a paso cómo diseñé la solución y el impacto que generó
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <AnimatedDiagram key={key} project={storyId} autoPlay />
        </div>
      </DialogContent>
    </Dialog>
  )
}
