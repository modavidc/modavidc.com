import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Metodología de Trabajo - Moisés Cedeño",
  description: "Metodología estricta de trabajo enfocada en eficiencia y respeto por el tiempo. Proceso claro, comunicación directa y resultados excepcionales sin desperdiciar un minuto.",
  keywords: [
    "Metodología de trabajo",
    "Eficiencia profesional",
    "Gestión del tiempo",
    "Comunicación clara",
    "Proceso de trabajo",
    "Tech Lead",
    "Cloud Infrastructure",
    "Optimización de procesos"
  ],
  openGraph: {
    title: "Metodología de Trabajo - Moisés Cedeño",
    description: "Metodología estricta de trabajo enfocada en eficiencia y respeto por el tiempo.",
    type: "website",
    url: "https://moises.dev/metodologia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metodología de Trabajo - Moisés Cedeño",
    description: "Metodología estricta de trabajo enfocada en eficiencia y respeto por el tiempo.",
  },
}

export default function MetodologiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 