import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Labs",
  description: "Side projects, experimentos y herramientas construidos por curiosidad: El Estoico, modavidc.com y más. Todo open source.",
  openGraph: {
    title: "Labs — Lo que construyo cuando nadie me paga · modavidc",
    description: "Side projects y experimentos técnicos de Moisés Cedeño. Sistemas IoT, herramientas de automatización y más. Todo open source.",
    url: "https://modavidc.com/labs",
  },
  alternates: { canonical: "/labs" },
}

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return children
}
