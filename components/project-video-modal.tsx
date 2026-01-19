"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ProjectVideoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  videoUrl: string
  projectTitle: string
}

// Helper function to get embed URL from various video platforms
function getEmbedUrl(url: string): string {
  // YouTube
  if (url.includes("youtube.com/watch") || url.includes("youtu.be/")) {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    }
  }
  
  // YouTube embed URL (already in embed format)
  if (url.includes("youtube.com/embed")) {
    return url
  }
  
  // Vimeo
  if (url.includes("vimeo.com/")) {
    const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1]
    if (videoId) {
      return `https://player.vimeo.com/video/${videoId}`
    }
  }
  
  // Vimeo embed URL (already in embed format)
  if (url.includes("player.vimeo.com")) {
    return url
  }
  
  // Direct video URL (MP4, WebM, etc.)
  return url
}

export function ProjectVideoModal({
  open,
  onOpenChange,
  videoUrl,
  projectTitle,
}: ProjectVideoModalProps) {
  const embedUrl = React.useMemo(() => getEmbedUrl(videoUrl), [videoUrl])
  const isDirectVideo = !embedUrl.includes("youtube.com") && !embedUrl.includes("vimeo.com")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Explicación del Proyecto: {projectTitle}</DialogTitle>
          <DialogDescription>
            Video explicativo del proyecto, como se presentaría en una entrevista técnica
          </DialogDescription>
        </DialogHeader>
        <div className="relative w-full aspect-video bg-black rounded-b-lg overflow-hidden">
          {isDirectVideo ? (
            <video
              src={embedUrl}
              controls
              className="w-full h-full"
              autoPlay={false}
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          ) : (
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`Video explicativo: ${projectTitle}`}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

