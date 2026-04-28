import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Metodología — IA + Contexto + Criterio",
  description: "Cómo trabajo: IA para velocidad, documentación para continuidad, criterio para que el proyecto no dependa de mí. Cada proyecto queda en mejor estado del que lo encontré.",
  keywords: [
    "Metodología de trabajo",
    "Solutions Architect",
    "FinOps",
    "Documentación técnica",
    "ADRs",
    "Architecture Decision Records",
    "Cloud Infrastructure",
    "Onboarding técnico",
  ],
  openGraph: {
    title: "Metodología — IA + Contexto + Criterio · modavidc",
    description: "Cómo trabajo: IA para velocidad, documentación para continuidad, criterio para que el proyecto no dependa de mí.",
    type: "website",
    url: "https://modavidc.com/metodologia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metodología — IA + Contexto + Criterio · modavidc",
    description: "Cómo trabajo: IA para velocidad, documentación para continuidad, criterio para que el proyecto no dependa de mí.",
  },
}

export default function MetodologiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 