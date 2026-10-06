import type { Metadata } from "next"
import { TCuidaMultitenantDetail } from "@/components/t-cuida-multitenant-detail"

export const metadata: Metadata = {
  title: "Cómo validé que T-Cuida soporta 20K usuarios con $672-$1K/mes · Moisés Cedeño",
  description: "Stress testing de arquitectura multitenant para plataforma de salud. 3 escenarios realistas, cost envelope documentado y isolation validada bajo carga real.",
  openGraph: {
    title: "Cómo validé que T-Cuida soporta 20K usuarios con $672-$1K/mes",
    description: "Stress testing de arquitectura multitenant para plataforma de salud. 3 escenarios realistas, cost envelope documentado y isolation validada bajo carga real.",
    url: "https://modavidc.com/casos-de-exito/detail/t-cuida-multitenant",
  },
  alternates: { canonical: "/casos-de-exito/detail/t-cuida-multitenant" },
}

export default function TCuidaMultitenantPage() {
  return <TCuidaMultitenantDetail />
}
