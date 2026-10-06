import type { Metadata } from "next"
import { SantaAngelaDetail } from "@/components/santa-angela-detail"

export const metadata: Metadata = {
  title: "Cómo recuperé un WordPress con backdoors que sobrevivían cada limpieza · Moisés Cedeño",
  description: "Respuesta a incidente en el sitio del Colegio Santa Angela: spam de apuestas inyectado, backdoors que reinfectaban tras cada limpieza. Diagnóstico con checksums oficiales de WordPress.org, 460+ archivos maliciosos eliminados, verificado limpio 6+ semanas después.",
  openGraph: {
    title: "Cómo recuperé un WordPress con backdoors que sobrevivían cada limpieza · Moisés Cedeño",
    description: "460+ archivos maliciosos eliminados. Grade A en cabeceras de seguridad. Verificado limpio 6+ semanas después.",
    url: "https://modavidc.com/casos-de-exito/detail/colegio-santa-angela-seguridad",
  },
  alternates: { canonical: "/casos-de-exito/detail/colegio-santa-angela-seguridad" },
}

export default function ColegioSantaAngelaPage() {
  return <SantaAngelaDetail />
}
