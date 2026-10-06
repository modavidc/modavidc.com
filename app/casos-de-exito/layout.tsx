import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description: "Proyectos reales con métricas verificables: -58% factura AWS, -$20k/año en licencias, 40K+ órdenes de laboratorio/mes automatizadas. 8 años de decisiones documentadas en Healthcare, SaaS e IoT.",
  openGraph: {
    title: "Casos de Éxito — Moisés Cedeño · Solutions Architect",
    description: "Proyectos reales con métricas verificables. De FinOps a Healthcare a IoT — resultados concretos, documentación que permite continuidad.",
    url: "https://modavidc.com/casos-de-exito",
  },
  alternates: { canonical: "/casos-de-exito" },
}

export default function CasosLayout({ children }: { children: React.ReactNode }) {
  return children
}
