import type { Metadata } from "next"
import { PreisIntegrationDetail } from "@/components/preis-integration-detail"

export const metadata: Metadata = {
  title: "Cómo automaticé 1,200+ reportes al Gobierno de PR con 99.2% éxito · Moisés Cedeño",
  description: "API gateway PHP/Laravel que integra MediRec con PREIS (Registro Nacional de Inmunizaciones de Puerto Rico). HL7 v2.5.1 variante PR, mTLS, 1,200+ vacunas reportadas, 99.2% éxito, 4 años operando.",
  openGraph: {
    title: "Cómo automaticé 1,200+ reportes al Gobierno de PR con 99.2% éxito · Moisés Cedeño",
    description: "1,200+ VXU enviados. 99.2% éxito. 3 clínicas. 4 años en producción.",
    url: "https://modavidc.com/casos-de-exito/detail/preis-integration",
  },
  alternates: { canonical: "/casos-de-exito/detail/preis-integration" },
}

export default function PreisIntegrationPage() {
  return <PreisIntegrationDetail />
}
