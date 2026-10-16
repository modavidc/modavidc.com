import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Soy Moisés, venezolano en Lima. Tres países, un mismo oficio: de escribir código a liderar arquitectura en salud, FinOps y agentes de IA en producción.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Sobre mí · Moisés Cedeño",
    description: "El camino, cómo trabajo y mis certificaciones.",
    url: "https://modavidc.com/about",
  },
}

export default function SobreMiLayout({ children }: { children: React.ReactNode }) {
  return children
}
