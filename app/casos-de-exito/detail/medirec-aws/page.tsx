import type { Metadata } from "next"
import { MedirecAwsDetail } from "@/components/medirec-aws-detail"

export const metadata: Metadata = {
  title: "Cómo bajé 65% el costo de AWS sin interrumpir nada · Moisés Cedeño",
  description: "Migración de infraestructura monolítica a arquitectura separada con RDS Multi-AZ y Savings Plans. $7,100/año ahorrados con cero downtime en producción.",
  openGraph: {
    title: "Cómo bajé 65% el costo de AWS sin interrumpir nada",
    description: "Migración de infraestructura monolítica a arquitectura separada con RDS Multi-AZ y Savings Plans. $7,100/año ahorrados con cero downtime en producción.",
    url: "https://modavidc.com/casos-de-exito/detail/medirec-aws",
  },
  alternates: { canonical: "/casos-de-exito/detail/medirec-aws" },
}

export default function MedirecAwsPage() {
  return <MedirecAwsDetail />
}
