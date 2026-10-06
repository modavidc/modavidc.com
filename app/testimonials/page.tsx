import type { Metadata } from "next"
import TestimonialsV2 from "@/components/testimonials-v2"

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Feedback real de equipos y líderes con los que ha colaborado Moisés Cedeño. -58% AWS, 48h onboarding, 40K+ órdenes de laboratorio/mes. Métricas verificables, datos bajo NDA.",
  openGraph: {
    title: "Testimonios — Moisés Cedeño · Solutions Architect",
    description: "Lo que dicen quienes han trabajado con Moisés Cedeño. Proyectos con impacto medible y documentación transferible.",
    url: "https://modavidc.com/testimonials",
  },
  alternates: { canonical: "/testimonials" },
}

export default function TestimoniosPage() {
  return <TestimonialsV2 />
}
