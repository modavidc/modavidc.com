import type { Metadata } from "next"
import { MedirecBackupDrDetail } from "@/components/medirec-backup-dr-detail"

export const metadata: Metadata = {
  title: "Cómo diseñé un plan de backup con RTO medido de 6-30 min · Moisés Cedeño",
  description: "Sistema de backup incremental diario, full semanal y Glacier mensual para historia clínica. RTO 6-30 min y RPO 0h validados con drill real, no estimaciones.",
  openGraph: {
    title: "Cómo diseñé un plan de backup con RTO medido de 6-30 min",
    description: "Sistema de backup incremental diario, full semanal y Glacier mensual para historia clínica. RTO 6-30 min y RPO 0h validados con drill real, no estimaciones.",
    url: "https://modavidc.com/casos-de-exito/detail/medirec-backup-dr",
  },
  alternates: { canonical: "/casos-de-exito/detail/medirec-backup-dr" },
}

export default function MedirecBackupDrPage() {
  return <MedirecBackupDrDetail />
}
