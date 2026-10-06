import type { Metadata } from "next"
import { VipappPatientEhrDetail } from "@/components/vipapp-patient-ehr-detail"

export const metadata: Metadata = {
  title: "Cómo construí un EHR offline-first en Flutter con 0 pérdida de datos · Moisés Cedeño",
  description: "App móvil para historia clínica electrónica con 15+ pantallas, sincronización automática y 11 tablas de réplica exacta. 3,500 LOC en 2 meses.",
  openGraph: {
    title: "Cómo construí un EHR offline-first en Flutter con 0 pérdida de datos",
    description: "App móvil para historia clínica electrónica con 15+ pantallas, sincronización automática y 11 tablas de réplica exacta. 3,500 LOC en 2 meses.",
    url: "https://modavidc.com/casos-de-exito/detail/vipapp-patient-ehr",
  },
  alternates: { canonical: "/casos-de-exito/detail/vipapp-patient-ehr" },
}

export default function VipappPatientEhrPage() {
  return <VipappPatientEhrDetail />
}
