import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Hablemos de tu próximo proyecto. WhatsApp, email o LinkedIn — elige el canal que prefieras. Respuesta en menos de 24h.",
  openGraph: {
    title: "Contacto — Moisés Cedeño · Solutions Architect",
    description: "¿Tienes un proyecto que necesita reducción de costos cloud, arquitectura escalable o construirse bien desde el inicio? Hablemos.",
    url: "https://modavidc.com/contact",
  },
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
