import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casos de éxito",
  description: "Resultados medidos en producción: -58% en factura AWS, -$20K/año en licencias, -70% en tiempo de entrega de laboratorios, EPCS certificada y 41→80 en calidad de T-Cuida.",
  alternates: { canonical: "/casos" },
  openGraph: {
    title: "Casos de éxito · Moisés Cedeño",
    description: "Problemas reales en salud y SaaS, con resultados medidos en producción.",
    url: "https://modavidc.com/casos",
  },
}

export default function CasosLayout({ children }: { children: React.ReactNode }) {
  return children
}
