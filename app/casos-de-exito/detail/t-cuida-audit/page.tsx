import type { Metadata } from "next"
import { TCuidaAuditDetail } from "@/components/t-cuida-audit-detail"

export const metadata: Metadata = {
  title: "Cómo subí la calidad de T-Cuida de 41 a 78/100 con 1,892 tests · Moisés Cedeño",
  description: "Auditoría técnica con framework de 10 dimensiones ponderadas. 105 tickets, 1,892 tests y refactor de VoiceController sin parar producción.",
  openGraph: {
    title: "Cómo subí la calidad de T-Cuida de 41 a 78/100 con 1,892 tests",
    description: "Auditoría técnica con framework de 10 dimensiones ponderadas. 105 tickets, 1,892 tests y refactor de VoiceController sin parar producción.",
    url: "https://modavidc.com/casos-de-exito/detail/t-cuida-audit",
  },
  alternates: { canonical: "/casos-de-exito/detail/t-cuida-audit" },
}

export default function TCuidaAuditPage() {
  return <TCuidaAuditDetail />
}
