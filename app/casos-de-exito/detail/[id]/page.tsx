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
    description: "Gobernanza de costos en plataforma Healthcare con 20K+ usuarios. -58% en factura AWS sin tocar el uptime.",
    context: "MediRec operaba con una factura de AWS creciente sin visibilidad real de qué la generaba. Plataforma Healthcare con 20K+ usuarios activos en producción. El equipo sabía que algo estaba mal pero no tenía los datos para actuar.",
    challenge: "La factura crecía mes a mes sin una causa clara. No había tagging de recursos, no había visibilidad de costos por servicio ni por ambiente. El constraint principal: reducir costos sin afectar la disponibilidad. Un solo minuto de downtime en una plataforma de salud tiene consecuencias reales.",
    criterion: "Antes de tocar nada, establecí visibilidad. Sin datos reales de uso, cualquier optimización es un disparo al aire. Decidí dedicar las primeras dos semanas solo a medir — tagging de recursos, análisis con Cost Explorer y Compute Optimizer — antes de hacer una sola acción de reducción. La mayoría de proyectos de FinOps fallan porque empiezan cortando sin entender primero.",
    execution: "Tagging obligatorio de todos los recursos por ambiente y equipo. Rightsizing de instancias EC2 y RDS basado en métricas reales de las últimas 4 semanas. Eliminación de snapshots, volúmenes y load balancers huérfanos. Migración a Reserved Instances para workloads predecibles. Alertas de presupuesto por cuenta y servicio.",
    outcome: "-58% en factura mensual AWS. $180K ahorrados en el primer año. 100% de uptime durante toda la optimización. Cero regresiones de performance.",
    legacy: "Runbook de gobernanza documentado para que el equipo lo mantuviera sin mí. Dashboard de Cost Explorer configurado con las vistas clave. Alertas automáticas antes de que el gasto supere umbrales predefinidos. El siguiente engineer que llegó entendió el sistema de gobernanza en menos de un día.",
    technologies: ["AWS Cost Explorer", "AWS Compute Optimizer", "Terraform", "Reserved Instances", "Auto Scaling", "CloudWatch", "S3 Intelligent-Tiering"],
  },
  {
    id: "licencias-farmaceuticas",
    title: "Cómo eliminé $20k/año en licencias farmacéuticas",
    category: "FinOps · Healthcare",
    year: "2024",
    client: "Plataforma Healthcare (NDA)",
    metric: "-$20k/año · 0 downtime",
    description: "Migración de LexComp a NLMI. $20k/año menos en licencias sin comprometer integridad clínica ni compliance PREIS.",
    context: "El sistema de validación de medicamentos dependía de LexComp, una licencia de $20k/año para consultar bases de datos farmacéuticas. La plataforma debía cumplir PREIS para operar en Puerto Rico. El equipo tenía miedo de tocarlo porque cualquier error afecta directamente a pacientes.",
    challenge: "LexComp es el estándar en Healthcare por su cobertura farmacéutica. Reemplazarlo sin análisis exhaustivo podría comprometer la integridad clínica. No era un problema técnico, era un problema de riesgo clínico. La pregunta correcta no era 'cómo migramos' sino 'es seguro migrar'.",
    criterion: "El riesgo no era técnico, era clínico. Antes de proponer la migración, hice el análisis de cobertura: cuántos medicamentos cubre NLMI vs LexComp por categoría. Si la cobertura era equivalente en las categorías críticas del sistema, la decisión era clara. Resultó que NLMI cubre el 100% de los medicamentos requeridos por PREIS. Con ese dato, la migración dejó de ser un riesgo y se convirtió en una decisión obvia.",
    execution: "Mapeo completo de todas las consultas activas a LexComp. Análisis de cobertura NLMI por categoría de medicamento. Migración incremental módulo a módulo con tests de regresión clínica automatizados. Período de validación en paralelo — ambos sistemas corriendo simultáneamente — antes de apagar LexComp.",
    outcome: "Licencia LexComp eliminada. $20k/año en ahorro directo. 100% de cumplimiento PREIS. Cero incidencias clínicas durante la migración ni después.",
    legacy: "Suite de tests de regresión clínica que el equipo puede correr ante cualquier cambio futuro en la base de medicamentos. Documentación del proceso de análisis de cobertura para futuras migraciones de dependencias externas. El equipo puede evaluar el próximo reemplazo sin repetir el análisis desde cero.",
    technologies: ["NLMI", "Node.js", "PostgreSQL", "Jest", "PREIS", "HL7 FHIR"],
  },
  {
    id: "lab-middleware",
    title: "De fax a real-time: resultados de lab en minutos",
    category: "Healthcare · Integración",
    year: "2022",
    client: "Lab Middleware (NDA)",
    metric: "-70% tiempo clínico · 6h a 90min",
    description: "Middleware HL7 que redujo los resultados clínicos de 6 horas a 90 minutos, sin tocar el sistema de laboratorio legacy.",
    context: "El laboratorio entregaba resultados clínicos por fax y correo interno, con un tiempo promedio de 6 horas desde el análisis hasta que el médico los veía. El sistema de laboratorio era un producto de terceros — cerrado, sin API, sin posibilidad de modificación.",
    challenge: "6 horas de lag en resultados clínicos en un entorno de salud es un riesgo real. Pero el sistema no se podía tocar. Cualquier solución debía ser completamente transparente para él. El equipo asumía que la única opción era reemplazar el sistema de laboratorio — un proyecto de meses y presupuesto significativo.",
    criterion: "Si el sistema emite mensajes HL7 v2.x — que es el estándar de los 90s que usa el 80% de los sistemas de laboratorio — puedo escucharlos sin tocarlo. El sistema no sabe que tengo un listener. Decidí construir el middleware como un interceptor pasivo en lugar de intentar modificar el sistema existente. Eso elimina el riesgo de certificación y el costo de reemplazo.",
    execution: "Listener TCP que captura los mensajes HL7 v2.x emitidos por el sistema legacy. Parser que normaliza los segmentos críticos: OBR para la solicitud, OBX para los resultados, PID para el paciente. Transformación a JSON y delivery vía webhook en tiempo real. AWS Lambda para escalabilidad. Log de auditoría completo de cada mensaje procesado.",
    outcome: "Tiempo de entrega de resultados: de 6 horas a menos de 90 minutos (-70%). Cero cambios en el sistema de laboratorio existente. 99.9% de uptime del middleware desde el lanzamiento.",
    legacy: "Documentación completa del protocolo HL7 v2.x en el contexto de este sistema específico: los segmentos relevantes, los edge cases encontrados, el formato de cada tipo de resultado. El equipo puede extender el middleware para nuevos tipos de resultado sin necesitar conocer HL7 desde cero.",
    technologies: ["Node.js", "HL7 v2.x", "AWS Lambda", "API Gateway", "PostgreSQL", "TCP/IP"],
  },
  {
    id: "gov-tech-preis",
    title: "Integración Gov-Tech: de Excel manual a API automatizada",
    category: "Gov-Tech · Healthcare",
    year: "2023",
    client: "Plataforma Healthcare · Puerto Rico",
    metric: "100% compliance · 4h/semana eliminadas",
    description: "Automatización del proceso de reportes de inmunizaciones al gobierno de Puerto Rico. De Excel manual a API con auditoría completa.",
    context: "La plataforma debía reportar datos de inmunizaciones al gobierno de Puerto Rico vía el sistema PREIS. El proceso era manual: alguien del equipo exportaba datos a Excel cada semana y los enviaba por correo. 4 horas de trabajo repetitivo, cada semana, sin auditoría.",
    challenge: "El sistema PREIS tiene requisitos de formato estrictos y cambia sin mucho aviso. Un reporte rechazado por compliance podría tener consecuencias regulatorias para la plataforma. El proceso manual era propenso a errores de formato y no quedaba registro de qué se envió ni cuándo.",
    criterion: "Un proceso manual, repetitivo y propenso a errores es un proceso que debe ser automatizado. La pregunta era cuánto automatizar. Decidí incluir validación automática contra el esquema PREIS antes de cada envío, para que el rechazo ocurra internamente y no en el sistema del gobierno. También decidí construir auditoría completa desde el inicio, no como un extra.",
    execution: "API REST que consulta los datos de inmunización, valida contra el esquema PREIS vigente y genera el reporte en el formato requerido. Envío automático semanal con log de confirmación. Dashboard de auditoría con historial de envíos y estados para el equipo operacional.",
    outcome: "4 horas de trabajo manual eliminadas por semana. 100% de compliance PREIS desde el primer envío automatizado. Cero reportes rechazados por errores de formato desde la implementación.",
    legacy: "Sistema de validación que detecta cambios en el esquema PREIS y alerta al equipo antes de que fallen los envíos. Documentación del proceso para que el equipo actualice las reglas de validación cuando el gobierno cambie los requisitos, sin tocar la lógica de envío.",
    technologies: ["Node.js", "REST API", "PostgreSQL", "PREIS", "AWS", "GitHub Actions"],
  },
  {
    id: "tcuida-iot",
    title: "T-Cuida — ecosistema IoT liderado de cero a producción",
    category: "SaaS · IoT",
    year: "2023",
    client: "T-Cuida",
    metric: "3 semanas · App Store + Play Store",
    description: "Arquitectura y entrega de un ecosistema IoT completo: wearables, GPS, dashboard y app móvil. De cero a producción en 3 semanas.",
    context: "T-Cuida necesitaba una plataforma completa para monitoreo de adultos mayores: wearables BLE, GPS en tiempo real, dashboard web para familiares y app móvil. Plazo de entrega: 3 semanas. Stack: desde cero. El equipo que iba a continuar el proyecto no tenía experiencia con el stack completo.",
    challenge: "3 semanas para un ecosistema completo con stack heterogéneo: BLE, GPS, WebSockets, móvil y web. El riesgo más grande no era técnico, era que si yo me iba y el equipo no podía continuar, el proyecto moría. Necesitaban ownership real, no dependencia de mí.",
    criterion: "En proyectos con plazo corto y equipo pequeño, la documentación no es opcional, es parte de la entrega. Decidí escribir ADRs desde el día uno, no al final. Cada decisión de arquitectura documentada en el momento en que se tomó, con el contexto que la motivó. También decidí priorizar CI/CD desde la primera semana para que el equipo pudiera hacer deploys sin miedo antes de que yo me fuera.",
    execution: "Flutter para mobile (iOS + Android en una sola base de código). Next.js para el dashboard web. Node.js con WebSockets para comunicación real-time. Integración BLE y GPS. Bridge TCP/IP para los wearables legacy. CI/CD configurado en la semana 1.",
    outcome: "De cero a App Store + Play Store en 3 semanas. Dashboard web operacional desde el lanzamiento. +400% throughput en comunicación IoT con el bridge. El siguiente developer que llegó estuvo productivo en 48 horas.",
    legacy: "12 ADRs documentados con contexto de cada decisión. Guía de arquitectura completa. Runbook de deploys. Tests de integración para los flujos críticos. El equipo tomó ownership completo y añadió features sin consultar conmigo.",
    technologies: ["Flutter", "Next.js", "Node.js", "WebSockets", "BLE", "GPS", "AWS", "Firebase"],
  },
  {
    id: "dashboard-emergencias",
    title: "De 3 minutos a 1 — dashboard de emergencias",
    category: "SaaS · Real-time",
    year: "2023",
    client: "T-Cuida",
    metric: "3min a 1min · -67% tiempo de respuesta",
    description: "Dashboard real-time que redujo el tiempo de respuesta ante emergencias de 3 minutos a 1 minuto.",
    context: "La plataforma de T-Cuida coordinaba respuesta a emergencias de campo. Los coordinadores recibían alertas por múltiples canales — SMS, correo, sensores IoT — sin un sistema unificado. Tiempo promedio de identificación y asignación de respuesta: 3 minutos.",
    challenge: "3 minutos para identificar una emergencia de salud es mucho tiempo. El cuello de botella no era la red ni los sensores, era la interfaz. El coordinador tenía que revisar tres sistemas diferentes para tener el panorama completo. El equipo asumía que necesitaban mejor hardware o más ancho de banda.",
    criterion: "El problema era de UX operacional, no de infraestructura. Unificar las fuentes de alerta en una sola vista con priorización automática resolvería el tiempo de respuesta sin cambiar ningún sistema de backend. Decidí optimizar el tiempo de reconocimiento — cuánto tarda el coordinador en ver la alerta correcta — antes de optimizar cualquier cosa técnica.",
    execution: "Dashboard React con WebSockets para updates en tiempo real, con latencia menor a 200ms desde el evento hasta pantalla. Sistema de priorización automática por tipo y severidad de emergencia. Cola de alertas con ACK y escalación automática si no hay respuesta en 60 segundos.",
    outcome: "Tiempo de respuesta: de 3 minutos a 1 minuto (-67%). Dashboard en uso 24/7 con 99.9% de uptime. Latencia de alerta: menos de 200ms desde el evento hasta pantalla.",
    legacy: "Documentación de los criterios de priorización para que el equipo los ajuste sin modificar código. Alertas de latencia configuradas para detectar degradación antes de que impacte la operación.",
    technologies: ["React", "WebSockets", "Node.js", "AWS", "PostgreSQL", "Redis"],
  },
  {
    id: "tcpip-bridge",
    title: "Bridge TCP/IP a WebSocket: +400% throughput sin cambiar hardware",
    category: "IoT · Integración",
    year: "2023",
    client: "T-Cuida",
    metric: "+400% throughput · 0 hardware nuevo",
    description: "Bridge que cuadruplicó el throughput de dispositivos IoT legacy sin reemplazar ningún hardware.",
    context: "Los wearables de T-Cuida se comunicaban vía TCP/IP raw con un protocolo propietario. El dashboard web necesitaba WebSocket. El throughput era insuficiente para el volumen de dispositivos activos y la latencia inaceptable para emergencias.",
    challenge: "La opción obvia era reemplazar los wearables por modelos con WebSocket nativo. Eso significaba semanas de procurement de hardware, testing y rollout, con un costo que el proyecto no tenía. El equipo lo veía como la única salida.",
    criterion: "Si puedo entender el protocolo propietario — incluso con documentación incompleta — puedo construir un bridge que haga la traducción en tiempo real. El hardware no cambia, el sistema downstream no sabe que hay un intermediario. Decidí hacer reverse engineering del protocolo antes de proponer la compra de hardware nuevo. Si fallaba, la opción del hardware seguía disponible.",
    execution: "Servidor Node.js con listeners TCP que parsean el protocolo propietario mediante análisis de tráfico capturado. Re-emisión de los datos vía WebSocket. Buffer inteligente para manejar reconexiones sin pérdida de datos. Compresión de mensajes para reducir latencia. Métricas de throughput en tiempo real.",
    outcome: "+400% en throughput de mensajes. Sin reemplazar ningún hardware. Latencia end-to-end: menos de 50ms. El sistema escala horizontalmente con más instancias del bridge.",
    legacy: "Documentación del protocolo propietario reverse-engineered: todos los tipos de mensaje, el formato de los frames, los edge cases encontrados en producción. Cualquier developer puede extender el parser sin repetir el análisis de tráfico.",
    technologies: ["Node.js", "TCP/IP", "WebSocket", "AWS", "Redis"],
  },
  {
    id: "medirec-mobile",
    title: "Primera app móvil de MediRec en 2 meses",
    category: "Mobile · Healthcare",
    year: "2024",
    client: "MediRec (NDA)",
    metric: "2 meses · App Store + Play Store",
    description: "iOS y Android en 8 semanas. Arquitectura pensada para que el equipo la mantuviera sin mí desde el día de la entrega.",
    context: "MediRec necesitaba una app móvil para que los pacientes pudieran consultar sus resultados de laboratorio sin depender del portal web. El equipo no tenía experiencia en mobile. Deadline comprometido con el cliente: 8 semanas para App Store y Play Store simultáneos.",
    challenge: "8 semanas para iOS y Android es agresivo. El riesgo real no era el deadline, era que si entregaba el código sin arquitectura pensada para el equipo, estarían atrapados en una base de código que nadie más podía mantener. Un deadline apretado suele llevar a decisiones que generan deuda técnica acumulada.",
    criterion: "Un deadline agresivo es una razón para tomar mejores decisiones de arquitectura, no peores. Elegí Flutter (una base de código para ambas plataformas) y BLoC pattern (separación clara de lógica de negocio) no solo por velocidad de entrega, sino porque hace el código más legible para alguien que llega después. Comprometí la documentación de arquitectura junto con la app, no como un extra al final.",
    execution: "Flutter con BLoC pattern para separación limpia de UI y lógica de negocio. Firebase Auth para autenticación segura. Integración con el API existente de MediRec. Guía de contribución y documentación de decisiones de arquitectura escritas durante el desarrollo.",
    outcome: "App publicada en App Store y Play Store en 2 meses. El equipo añadió 3 features en los 60 días siguientes sin consultar conmigo. Cero incidentes de seguridad de datos desde el lanzamiento.",
    legacy: "Guía de contribución, documentación de arquitectura y decisiones documentadas con su contexto. El equipo tomó ownership real desde el primer día. El siguiente developer que llegó al proyecto entendió la arquitectura sin necesitar onboarding.",
    technologies: ["Flutter", "Firebase", "Dart", "BLoC", "REST API", "App Store", "Play Store"],
  },
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} · Moisés Cedeño`,
      description: project.description,
      url: `https://modavidc.com/casos-de-exito/detail/${project.id}`,
    },
    alternates: { canonical: `/casos-de-exito/detail/${project.id}` },
  }
}

export default function CasoDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)
  if (!project) notFound()

  const sections = [
    { label: "Contexto", text: project!.context },
    { label: "El problema", text: project!.challenge },
    { label: "Mi criterio", text: project!.criterion },
    { label: "La ejecución", text: project!.execution },
    { label: "Resultado", text: project!.outcome },
    { label: "Lo que dejé", text: project!.legacy },
  ]

  return (
    <>
      <div className="page-header">
        <Link
          href="/casos-de-exito"
          style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            fontFamily: "var(--ff-mono)", fontSize: "11px",
            color: "var(--text-3)", textDecoration: "none",
            letterSpacing: ".1em", textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          ← Casos de éxito
        </Link>

        <div className="section-kicker">{project!.category} · {project!.year}</div>
        <h1 className="page-h1">{project!.title}</h1>
        <span className="metric-tag">{project!.metric}</span>
      </div>

      <div className="page-wrap">
        <div style={{ maxWidth: "760px", paddingTop: "48px", paddingBottom: "96px", display: "flex", flexDirection: "column", gap: "56px" }}>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1px", background: "var(--border)",
            border: "1px solid var(--border)",
          }}>
            {[
              { label: "Cliente", value: project!.client },
              { label: "Año", value: project!.year },
              { label: "Categoría", value: project!.category },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: "var(--bg-2)", padding: "18px 22px" }}>
                <div style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", color: "var(--text-3)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</div>
                <div style={{ fontSize: "14px", color: "var(--text-2)" }}>{value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {sections.map(({ label, text }) => (
              <div key={label} style={{
                paddingBottom: "40px",
                borderBottom: "1px solid var(--border)",
              }}>
                <div className="section-kicker" style={{ marginBottom: "12px" }}>{label}</div>
                <p style={{ fontSize: "15px", color: label === "Lo que dejé" ? "var(--text)" : "var(--text-2)", lineHeight: 1.78, fontWeight: 300 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div>
            <div className="section-kicker" style={{ marginBottom: "12px" }}>Stack</div>
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

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "32px", display: "flex", gap: "12px" }}>
            <Link href="/casos-de-exito" className="btn btn-secondary">
              ← Todos los casos
            </Link>
            <a href="mailto:moisesdavidaaron@gmail.com" className="btn btn-primary">
              Hablemos de tu proyecto →
            </a>
          </div>

        </div>
      </div>
    </>
  )
}
