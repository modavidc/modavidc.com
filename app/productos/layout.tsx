import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Productos",
  description: "Tres apps propias, de la idea al código: Solito (gastos que se registran solos), Grupero (radiografía de grupos de WhatsApp) y El Estoico.",
  alternates: { canonical: "/productos" },
  openGraph: {
    title: "Productos · Moisés Cedeño",
    description: "Apps que construyo por mi cuenta: Solito, Grupero y El Estoico.",
    url: "https://modavidc.com/productos",
  },
}

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  return children
}
