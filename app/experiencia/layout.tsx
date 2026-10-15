import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experiencia",
  description: "11 años, 3 países, 5 roles: de Full-Stack Developer a Tech Lead e Ingeniero de Integraciones en salud. Lo que cambió en cada etapa.",
  alternates: { canonical: "/experiencia" },
  openGraph: {
    title: "Experiencia · Moisés Cedeño",
    description: "Cada rol sumó un piso: de escribir código a liderar arquitectura en salud.",
    url: "https://modavidc.com/experiencia",
  },
}

export default function ExperienciaLayout({ children }: { children: React.ReactNode }) {
  return children
}
