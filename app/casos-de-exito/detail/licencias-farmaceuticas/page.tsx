import type { Metadata } from "next"
import { LicenciasDetail } from "@/components/licencias-detail"

export const metadata: Metadata = {
  title: "Cómo eliminé $20K/año en licencias farmacéuticas · Moisés Cedeño",
  description: "MediRec pagaba $20K/año a Wolters Kluwer por LexiComp. Validé con NLM que un estándar federal cubría lo mismo, gratis. Migré 11+ clientes en 2 horas sin una sola incidencia clínica.",
  openGraph: {
    title: "Cómo eliminé $20K/año en licencias farmacéuticas · Moisés Cedeño",
    description: "−$20K/año · 100% cobertura clínica · 0 incidencias · 11+ clientes migrados",
    url: "https://modavidc.com/casos-de-exito/detail/licencias-farmaceuticas",
  },
  alternates: { canonical: "/casos-de-exito/detail/licencias-farmaceuticas" },
}

export default function LicenciasPage() {
  return <LicenciasDetail />
}
