import type { Metadata } from "next"
import { OresLaboratoryApiDetail } from "@/components/ores-laboratory-api-detail"

export const metadata: Metadata = {
  title: "Cómo centralicé 40K+ órdenes de laboratorio/mes con 99.8% uptime · Moisés Cedeño",
  description: "API centralizada Laravel que conecta abcEHR con 25+ laboratorios. Autenticación diferenciada, pull model y almacenamiento HL7 en BD para auditoría completa.",
  openGraph: {
    title: "Cómo centralicé 40K+ órdenes de laboratorio/mes con 99.8% uptime",
    description: "API centralizada Laravel que conecta abcEHR con 25+ laboratorios. Autenticación diferenciada, pull model y almacenamiento HL7 en BD para auditoría completa.",
    url: "https://modavidc.com/casos-de-exito/detail/ores-laboratory-api",
  },
  alternates: { canonical: "/casos-de-exito/detail/ores-laboratory-api" },
}

export default function OresLaboratoryApiPage() {
  return <OresLaboratoryApiDetail />
}
