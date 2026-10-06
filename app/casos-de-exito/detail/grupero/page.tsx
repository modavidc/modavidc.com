import type { Metadata } from "next"
import { GruperoDetail } from "@/components/grupero-detail"

export const metadata: Metadata = {
  title: "Cómo construí Grupero, una app Flutter 100% offline con 26.5K LOC · Moisés Cedeño",
  description: "App de analytics de WhatsApp con parser de 408 líneas, 12 beta testers y modelo freemium validado. 100% privacidad, cero servidores.",
  openGraph: {
    title: "Cómo construí Grupero, una app Flutter 100% offline con 26.5K LOC",
    description: "App de analytics de WhatsApp con parser de 408 líneas, 12 beta testers y modelo freemium validado. 100% privacidad, cero servidores.",
    url: "https://modavidc.com/casos-de-exito/detail/grupero",
  },
  alternates: { canonical: "/casos-de-exito/detail/grupero" },
}

export default function GruperoPage() {
  return <GruperoDetail />
}
