import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects = [
  {
    id: "medirec-aws",
    title: "Cómo reduje 58% la factura AWS de MediRec",
    category: "FinOps · Healthcare",
    year: "2023",
    client: "MediRec (NDA)",
    metric: "-58% AWS · $180K ahorrados",
    description: "Re-arquitectura y gobernanza de costos en plataforma Healthcare con 20K+ usuarios activos.",
    longDescription: "MediRec operaba con una factura de AWS creciente sin visibilidad real de qué lo generaba. En 90 días identifiqué instancias sobredimensionadas, eliminé recursos huérfanos, implementé auto-scaling inteligente y reestructuré el modelo de reservas.",
    challenge: "La factura AWS crecía mes a mes sin una causa clara. El equipo no tenía visibilidad de costos por servicio ni por ambiente. Reducir costos sin afectar la disponibilidad de una plataforma healthcare con 20K+ usuarios era el constraint principal.",
    solution: "Implementé tagging obligatorio de recursos, rightsizing de instancias EC2 y RDS basado en métricas reales de uso, eliminación de snapshots y volúmenes huérfanos, migración a Reserved Instances para workloads predecibles, y alertas de presupuesto por cuenta.",
    outcome: "-58% en factura mensual AWS. $180K ahorrados en el primer año. La plataforma mantuvo 100% de uptime durante toda la optimización. Documenté cada decisión para que el equipo mantuviera la gobernanza sin mi intervención.",
    technologies: ["AWS Cost Explorer", "AWS Compute Optimizer", "Terraform", "Reserved Instances", "Auto Scaling", "CloudWatch", "S3 Intelligent-Tiering"],
  },
  {
    id: "licencias-farmaceuticas",
    title: "Cómo eliminé $20k/año en licencias farmacéuticas",
    category: "FinOps · Healthcare",
    year: "2024",
    client: "Plataforma Healthcare (NDA)",
    metric: "-$20k/año · 0 downtime",
    description: "Migración de LexComp a NLMI sin perder integridad clínica ni cobertura de datos.",
    longDescription: "El sistema de validación de medicamentos dependía de LexComp, una licencia cara que consumía $20k anuales. Migré a NLMI, una alternativa open source, sin perder cobertura clínica ni cumplimiento regulatorio PREIS.",
    challenge: "LexComp es un estándar en Healthcare por su cobertura farmacéutica. Migrarlo sin comprometer la integridad clínica ni el cumplimiento con PREIS requería un análisis exhaustivo de cobertura de datos y un plan de migración incremental con rollback.",
    solution: "Mapeo de todas las consultas activas a LexComp, análisis de cobertura NLMI vs LexComp por categoría de medicamento, migración incremental por módulo con tests de regresión clínica automatizados, y período de validación paralela.",
    outcome: "Eliminación total de la licencia LexComp. $20k/año en ahorro directo. 100% de cumplimiento PREIS mantenido. Cero incidencias clínicas durante ni después de la migración.",
    technologies: ["NLMI", "Node.js", "PostgreSQL", "Jest", "PREIS", "HL7 FHIR"],
  },
  {
    id: "lab-middleware",
    title: "De fax a real-time: resultados de lab en minutos",
    category: "Healthcare · Integración",
    year: "2022",
    client: "Lab Middleware (NDA)",
    metric: "-70% tiempo clínico · 6h → 90min",
    description: "Middleware HL7 que redujo el tiempo de entrega de resultados clínicos de 6 horas a menos de 90 minutos.",
    longDescription: "El laboratorio entregaba resultados clínicos por fax y correo interno, con un tiempo promedio de 6 horas. Construí un middleware que parsea mensajes HL7 v2.x del sistema legacy y los entrega via API REST en tiempo real.",
    challenge: "El sistema de laboratorio legacy no tenía API ni posibilidad de modificación. Comunicación unidireccional vía HL7 v2.x sobre TCP. El middleware debía ser transparente para el sistema existente.",
    solution: "Listener TCP que captura mensajes HL7 v2.x, parser que normaliza los segmentos críticos (OBR, OBX, PID), transformación a JSON y delivery via webhook + API REST. AWS Lambda para escalabilidad. Log de auditoría completo.",
    outcome: "Tiempo de entrega de resultados: de 6 horas a menos de 90 minutos (-70%). Cero cambios en el sistema de laboratorio existente. Sistema en producción con 99.9% de uptime desde el lanzamiento.",
    technologies: ["Node.js", "HL7 v2.x", "AWS Lambda", "API Gateway", "PostgreSQL", "TCP/IP"],
  },
  {
    id: "gov-tech-preis",
    title: "Integración Gov-Tech: de Excel manual a API automatizada",
    category: "Gov-Tech · Healthcare",
    year: "2023",
    client: "Plataforma Healthcare · Puerto Rico",
    metric: "100% compliance PREIS · automatización completa",
    description: "API crítica para reportes de inmunizaciones al Gobierno de Puerto Rico. De proceso manual en Excel a sistema automatizado.",
    longDescription: "El equipo generaba reportes de inmunizaciones para el gobierno de Puerto Rico de forma manual en Excel, con un proceso que tomaba 4 horas semanales y era propenso a errores. Construí una API que automatiza el proceso completo con auditoría.",
    challenge: "Los requisitos del sistema PREIS del gobierno cambian con frecuencia. El sistema debía ser flexible, auditable y capaz de generar reportes históricos. La integridad de los datos de inmunización era crítica.",
    solution: "API REST que consulta los datos de inmunización, valida contra el esquema PREIS vigente, genera los reportes en el formato requerido y los envía automáticamente. Dashboard de auditoría para el equipo operacional.",
    outcome: "4 horas semanales de trabajo manual eliminadas. 100% de compliance PREIS desde el día uno. Reportes en tiempo real disponibles bajo demanda. Auditoría completa de cada envío.",
    technologies: ["Node.js", "REST API", "PostgreSQL", "PREIS", "AWS", "GitHub Actions"],
  },
  {
    id: "tcuida-iot",
    title: "T-Cuida — ecosistema IoT construido desde cero",
    category: "SaaS · IoT",
    year: "2023",
    client: "T-Cuida",
    metric: "3 semanas · App Store + Play Store",
    description: "Ecosistema SaaS completo con wearables, GPS, dashboard real-time y app móvil. De cero a producción en 3 semanas.",
    longDescription: "T-Cuida necesitaba una plataforma completa para monitoreo de adultos mayores: wearables BLE, GPS en tiempo real, dashboard web para familiares y app móvil. Todo desde cero, con documentación completa para que el equipo pudiera continuar sin mí.",
    challenge: "Plazo de 3 semanas para plataforma completa. Stack heterogéneo: BLE, GPS, WebSockets, móvil y web. La documentación tenía que ser suficiente para que el equipo tomara ownership total al entregarlo.",
    solution: "Flutter para mobile (iOS + Android), Next.js para dashboard web, Node.js con WebSockets para comunicación real-time, integración BLE y GPS. ADRs escritos desde el día uno. Arquitectura documentada para onboarding en 48h.",
    outcome: "De cero a App Store + Play Store en 3 semanas. Dashboard web operacional desde el lanzamiento. +400% throughput en comunicación IoT con el Bridge TCP/IP. Onboarding de devs nuevos en 48h gracias a la documentación.",
    technologies: ["Flutter", "Next.js", "Node.js", "WebSockets", "BLE", "GPS", "AWS", "Firebase"],
  },
  {
    id: "dashboard-emergencias",
    title: "De 3 minutos a 1 — dashboard de emergencias",
    category: "SaaS · Real-time",
    year: "2023",
    client: "Plataforma Healthcare (NDA)",
    metric: "3min → 1min respuesta",
    description: "Panel de atención en tiempo real que triplicó la velocidad de respuesta ante emergencias de campo.",
    longDescription: "Los coordinadores de campo tardaban hasta 3 minutos en identificar y asignar respuesta a emergencias por un sistema fragmentado de alertas. Construí un dashboard real-time que unifica todas las alertas con priorización automática.",
    challenge: "Múltiples fuentes de alertas (SMS, email, sensores IoT, llamadas) sin sistema unificado. El tiempo de respuesta dependía de que un operador revisara cada canal manualmente. La latencia del dashboard anterior era de varios segundos.",
    solution: "Dashboard React con WebSockets para updates en tiempo real (<200ms latencia). Sistema de priorización automática basado en tipo y severidad de emergencia. Cola de alertas con ACK y escalación automática si no hay respuesta en 60 segundos.",
    outcome: "Tiempo de respuesta: de 3 minutos a 1 minuto (-67%). Dashboard en uso 24/7 con 99.9% de uptime. Latencia de alerta: <200ms desde el evento hasta que aparece en pantalla.",
    technologies: ["React", "WebSockets", "Node.js", "AWS", "PostgreSQL", "Redis"],
  },
  {
    id: "tcpip-bridge",
    title: "Bridge TCP/IP–WebSocket: +400% throughput sin hardware nuevo",
    category: "IoT · Integración",
    year: "2023",
    client: "T-Cuida",
    metric: "+400% throughput",
    description: "Puente que conecta dispositivos IoT legacy con aplicaciones web modernas via WebSocket, sin reemplazar hardware.",
    longDescription: "Los dispositivos IoT de T-Cuida comunicaban vía TCP/IP raw pero el dashboard web necesitaba WebSocket. La opción de reemplazar hardware hubiera costado meses y presupuesto. Construí un bridge que hace la traducción en tiempo real.",
    challenge: "Protocolo propietario sobre TCP/IP con documentación incompleta. Throughput insuficiente para el volumen de dispositivos activos. El bridge tenía que ser transparente para los dispositivos existentes y escalable para crecimiento futuro.",
    solution: "Servidor Node.js con listeners TCP que parsean el protocolo propietario y re-emiten los datos via WebSocket. Buffer inteligente para manejar reconexiones. Compresión de mensajes. Métricas de throughput en tiempo real.",
    outcome: "+400% en throughput de mensajes. Sin reemplazar ningún hardware. El sistema escala horizontalmente con más instancias. Latencia end-to-end: <50ms.",
    technologies: ["Node.js", "TCP/IP", "WebSocket", "Buffer", "AWS", "Redis"],
  },
  {
    id: "medirec-mobile",
    title: "Primera app móvil de MediRec en 2 meses",
    category: "Mobile · Healthcare",
    year: "2024",
    client: "MediRec (NDA)",
    metric: "2 meses · App Store + Play Store",
    description: "De cero a App Store + Play Store con Flutter y Firebase. Resultados de laboratorio en el bolsillo del paciente en 8 semanas.",
    longDescription: "MediRec necesitaba una app móvil para que los pacientes pudieran consultar sus resultados de laboratorio sin depender del portal web. Entrega comprometida en 2 meses para ambas tiendas.",
    challenge: "Deadline de 8 semanas para iOS y Android simultáneos. Integración con el backend existente de MediRec. Cumplimiento de estándares de privacidad de datos de salud (HIPAA-adjacent). Código estructurado para que el equipo lo mantuviera sin mí.",
    solution: "Flutter para una sola base de código iOS/Android. Firebase Auth para autenticación segura. Arquitectura clean con BLoC pattern para mantenibilidad. Documentación de arquitectura y guía de contribución entregadas junto con el código.",
    outcome: "App publicada en App Store y Play Store en 2 meses. Código tan bien estructurado que el equipo añadió features sin reescribir nada. Ningún incidente de seguridad de datos desde el lanzamiento.",
    technologies: ["Flutter", "Firebase", "Dart", "BLoC", "REST API", "App Store", "Play Store"],
  },
  {
    id: "el-estoico",
    title: "El Estoico — performance perfecta en 0.8s",
    category: "Personal · Web Performance",
    year: "2025",
    client: "Proyecto personal",
    metric: "FCP 0.8s · Lighthouse 100",
    description: "Landing page con Core Web Vitals perfectos. FCP de 0.8s, Lighthouse 100, sin frameworks pesados.",
    longDescription: "Proyecto de exploración técnica: construir una landing page con los mejores Core Web Vitals posibles usando HTML/CSS/JS vanilla. El resultado superó expectativas: 100 en Lighthouse en todas las categorías.",
    challenge: "Demostrar que la performance extrema es alcanzable sin frameworks pesados. FCP objetivo: <1s. LCP: <2.5s. CLS: 0. Todo en producción real, no en localhost.",
    solution: "HTML semántico, CSS custom properties, JavaScript vanilla. Imágenes optimizadas con formatos modernos (WebP/AVIF). Critical CSS inlined. Fonts subseteadas. Zero JavaScript blocking. Deploy en CDN global.",
    outcome: "FCP: 0.8s. LCP: 1.2s. CLS: 0. Performance score: 100. Accessibility: 100. Best Practices: 100. SEO: 100. Un experimento que demostró cuánto pesan los frameworks modernos por defecto.",
    technologies: ["HTML", "CSS", "JavaScript", "WebP", "AVIF", "Cloudflare CDN", "Lighthouse"],
  },
  {
    id: "grupero",
    title: "Grupero — radiografía de tus grupos de WhatsApp",
    category: "Personal · Android",
    year: "2025",
    client: "Proyecto personal",
    metric: "100% privado · procesamiento local",
    description: "App Android que analiza participación, detecta inactivos y eventos en grupos de WhatsApp. Sin servidor, 100% local.",
    longDescription: "Grupero analiza los exports de chat de WhatsApp para revelar quién participa, quién no, cuándo hay más actividad y qué palabras definen cada grupo. Todo el procesamiento ocurre en el dispositivo, sin enviar datos a ningún servidor.",
    challenge: "Parsear el formato de export de WhatsApp (que cambia sin aviso). Procesamiento eficiente de exports grandes (100K+ mensajes) sin bloquear la UI. Privacidad total: cero datos salen del dispositivo.",
    solution: "App Android nativa en Kotlin. Parser robusto del formato de export con manejo de variaciones regionales. Procesamiento asíncrono con coroutines. Visualizaciones en tiempo real con MPAndroidChart. Cero permisos de red.",
    outcome: "Procesa exports de 100K+ mensajes en <2 segundos. Cero datos enviados a servidores externos. Proyecto de exploración técnica que resultó en aprendizajes aplicados a los proyectos IoT.",
    technologies: ["Kotlin", "Android", "Coroutines", "MPAndroidChart", "Room", "Material Design"],
  },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id)
  if (!project) return {}
  return {
    title: project.title,
    description: `${project.description} ${project.metric}.`,
    openGraph: {
      title: `${project.title} · modavidc`,
      description: `${project.description} ${project.metric}.`,
      url: `https://modavidc.com/casos-de-exito/detail/${project.id}`,
    },
    alternates: { canonical: `/casos-de-exito/detail/${project.id}` },
  }
}

export default function CasoDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)
  if (!project) notFound()

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">

        <div>
          <Link
            href="/casos-de-exito"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontFamily: "var(--ff-mono)", fontSize: "11px",
              color: "var(--text-3)", textDecoration: "none",
              letterSpacing: ".1em", textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            ← Todos los casos
          </Link>

          <div style={{
            fontFamily: "var(--ff-mono)", fontSize: "11px",
            color: "var(--text-3)", letterSpacing: ".14em",
            textTransform: "uppercase", marginBottom: "12px",
          }}>
            {project!.category} · {project!.year}
          </div>

          <h1 style={{
            fontFamily: "var(--ff-display)", fontSize: "clamp(28px,4vw,48px)",
            fontWeight: 300, letterSpacing: "-.03em", lineHeight: 1.1,
            color: "var(--text)", marginBottom: "16px",
          }}>
            {project!.title}
          </h1>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontFamily: "var(--ff-mono)", fontSize: "12px",
            background: "var(--green-bg)", color: "var(--green)",
            border: "1px solid var(--green-dim)", padding: "4px 12px",
            borderRadius: "3px", letterSpacing: ".04em",
          }}>
            {project!.metric}
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "1px", background: "var(--border)",
          border: "1px solid var(--border)",
        }}>
          <div style={{ background: "var(--bg-2)", padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", color: "var(--text-3)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: "6px" }}>Cliente</div>
            <div style={{ fontSize: "14px", color: "var(--text-2)" }}>{project!.client}</div>
          </div>
          <div style={{ background: "var(--bg-2)", padding: "20px 24px" }}>
            <div style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", color: "var(--text-3)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: "6px" }}>Año</div>
            <div style={{ fontSize: "14px", color: "var(--text-2)" }}>{project!.year}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {[
            { label: "Resumen", text: project!.longDescription },
            { label: "El problema", text: project!.challenge },
            { label: "La solución", text: project!.solution },
            { label: "Resultado", text: project!.outcome },
          ].map(({ label, text }) => (
            <div key={label}>
              <div style={{
                fontFamily: "var(--ff-mono)", fontSize: "10px",
                color: "var(--text-3)", letterSpacing: ".16em",
                textTransform: "uppercase", marginBottom: "10px",
                display: "flex", alignItems: "center", gap: "10px",
              }}>
                <span style={{ display: "block", width: "24px", height: "1px", background: "var(--border-2)" }} />
                {label}
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-2)", lineHeight: 1.7, fontWeight: 300 }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        <div>
          <div style={{
            fontFamily: "var(--ff-mono)", fontSize: "10px",
            color: "var(--text-3)", letterSpacing: ".16em",
            textTransform: "uppercase", marginBottom: "12px",
            display: "flex", alignItems: "center", gap: "10px",
          }}>
            <span style={{ display: "block", width: "24px", height: "1px", background: "var(--border-2)" }} />
            Stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project!.technologies.map(tech => (
              <span key={tech} style={{
                fontFamily: "var(--ff-mono)", fontSize: "11px",
                color: "var(--text-2)", background: "var(--bg-3)",
                border: "1px solid var(--border-2)", padding: "3px 10px",
                borderRadius: "3px", letterSpacing: ".04em",
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--border)", paddingTop: "32px",
          display: "flex", gap: "12px",
        }}>
          <Link href="/casos-de-exito" className="btn btn-secondary" style={{ fontSize: "13px" }}>
            ← Todos los casos
          </Link>
          <a href="mailto:moisesdavidaaron@gmail.com" className="btn btn-primary" style={{ fontSize: "13px" }}>
            Hablemos de tu proyecto →
          </a>
        </div>

      </div>
    </div>
  )
}
