import type { Metadata } from "next"
import { SurescriptsDetail } from "@/components/surescripts-detail"

export const metadata: Metadata = {
  title: "Cómo recertifiqué Surescripts en 22 días sin downtime · Moisés Cedeño",
  description: "Recertificación oficial ePrescribing (CG v6.1) para abcEHR. Nueva API Laravel como gateway entre .NET y Surescripts. 7/7 transacciones NCPDP 2017071 certificadas. PR-21677 completada en 22 días.",
  openGraph: {
    title: "Cómo recertifiqué Surescripts en 22 días sin downtime · Moisés Cedeño",
    description: "7/7 transacciones certificadas. 260K+ farmacias USA. PR-21677. 22 días.",
    url: "https://modavidc.com/casos-de-exito/detail/surescripts-certification",
  },
  alternates: { canonical: "/casos-de-exito/detail/surescripts-certification" },
}

export default function SurescriptsPage() {
  return <SurescriptsDetail />
}
