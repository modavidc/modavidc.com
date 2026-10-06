"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { EvidenceCarousel } from "@/components/evidence-carousel"

const tocSections = [
  { id: "contexto",     label: "Contexto",      n: "01" },
  { id: "desafio",      label: "Desafío",        n: "02" },
  { id: "rol",          label: "Mi rol",          n: "03" },
  { id: "criterio",     label: "Mi criterio",     n: "04" },
  { id: "arquitectura", label: "Arquitectura",    n: "05" },
  { id: "resultado",    label: "Resultado",       n: "06" },
  { id: "dejado",       label: "Lo que dejé",     n: "07" },
  { id: "validacion",   label: "Validación",      n: "08" },
]

const challengeBullets = [
  { n: "01", bold: "Sin política ni SLA documentado", rest: ": 15 volúmenes EBS con respaldos manuales, sin frecuencia definida, sin responsable, sin registro de cuándo fue el último." },
  { n: "02", bold: "Sin RTO ni RPO conocido", rest: ": nadie sabía cuánto tardaría recuperar el sistema en caso de fallo. La respuesta era 'esperamos que no pase'." },
  { n: "03", bold: "Sin compliance HIPAA de cifrado y retención", rest: ": datos de salud sin cifrado KMS en tránsito ni en reposo, sin política de retención de 6 meses requerida." },
  { n: "04", bold: "MySQL como punto único de falla en EC2", rest: ": la base de datos principal en una instancia EC2 sin réplica. Un fallo del disco tiraba todas las clínicas." },
  { n: "05", bold: "Equipo sin procedimientos de restore", rest: ": aunque hubiera backups, nadie sabía exactamente cómo recuperar un volumen específico sin arriesgar el sistema activo." },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "RPO diferenciado por criticidad del sistema",
    body: "PREIS, Recetas y la BD principal tienen RPO de 12h (críticos). Staging y herramientas internas tienen RPO de 24h. No hay una sola política porque no todos los sistemas tienen el mismo impacto si fallan.",
    why: "Aplicar el mismo nivel de protección a todo es costoso e innecesario. Diferenciarlo es una decisión de negocio, no solo técnica.",
  },
  {
    n: "Decisión 02",
    title: "Validación mensual obligatoria con restore real",
    body: "El primer viernes de cada mes: restore de un volumen crítico en staging, medición real del tiempo de recuperación, verificación de integridad de datos, documentación del resultado. Sin esto, el SLA no existe.",
    why: "Un backup sin restore test es una promesa sin verificar. Los 6-30 minutos reales de RTO los medí haciendo el restore, no estimándolo.",
  },
  {
    n: "Decisión 03",
    title: "Glacier Deep Archive para retención HIPAA a mínimo costo",
    body: "HIPAA requiere retención de datos de salud por 6 años. Glacier Deep Archive cuesta $0.00099/GB/mes. Los snapshots mensuales van directo a Glacier. Cumplimiento regulatorio a fracción del costo de S3 estándar.",
    why: "Retención regulatoria no requiere acceso frecuente. Glacier es el único tier que tiene sentido para eso.",
  },
  {
    n: "Decisión 04",
    title: "4 capas en lugar de una sola política",
    body: "Incremental diario (7 días), full semanal (2 meses), mensual a Glacier (6 meses), validación mensual de restore. Cada capa tiene un propósito distinto: las primeras para recuperación rápida, la última para compliance.",
    why: "Una sola política es o demasiado cara o insuficiente. Cuatro capas dan flexibilidad sin redundancia inútil.",
  },
]

const deliverables = [
  { n: "01", title: "Política de Backup v1.0.0", desc: "Documento oficial con RTO/RPO por sistema, frecuencias de backup, retención por capa, responsables y escalamiento. Firmado y versionado." },
  { n: "02", title: "Manual Operativo v1.0.0", desc: "14 procedimientos paso a paso: crear snapshot, configurar retención, ejecutar restore, validar integridad, renovar certificados KMS." },
  { n: "03", title: "Calendario de Pruebas v1.0.0", desc: "Primer viernes de cada mes: restore en staging, medición de RTO, verificación 162/162 registros íntegros, documentación de evidencias." },
  { n: "04", title: "Matriz RACI de responsabilidades", desc: "Quién crea backups, quién valida restores, quién aprueba cambios de política, quién escala si falla la validación." },
  { n: "05", title: "2 informes de prueba completados", desc: "Restore real ejecutado y documentado. RTO medido: 6-30 min (mejor que el objetivo de 60 min). 162/162 registros íntegros." },
]

const evidenceSlides = [
  {
    label: "AWS Backup Plan · 4 capas · configuración",
    caption: "Configuración del plan de backups en AWS Backup: incremental diario, full semanal, snapshot mensual a Glacier Deep Archive. Separado por criticidad de sistema (critical, production, staging).",
    src: "/assets/evidence/surescripts-cert--aws-architecture.png",
  },
  {
    label: "Informe de restore · 162/162 registros íntegros",
    caption: "Resultado del primer restore test de validación: 162 de 162 registros verificados íntegros tras la restauración del volumen en staging. RTO real medido: 18 minutos para el volumen crítico.",
    src: "/assets/evidence/nlm-migration--sql-clinical-tables.png",
  },
  {
    label: "Política de RTO/RPO · sistemas críticos vs. estándar",
    caption: "Tabla de RTO/RPO diferenciada: PREIS y Recetas con RPO 12h y RTO 60min. Staging con RPO 24h y RTO 4h. La diferenciación reduce costo sin sacrificar protección donde más importa.",
    src: "/assets/evidence/surescripts-cert--send-method-core.png",
  },
  {
    label: "Arquitectura de backup · 4 capas · por ambiente",
    caption: "Diagrama de la arquitectura de backup final: 15 volúmenes distribuidos entre Critical, Production y Staging con sus respectivos planes AWS Backup y destinos (EBS, S3, Glacier).",
    src: "/assets/evidence/nlm-migration--email-bodenreider.png",
  },
]

export function MedirecBackupDrDetail() {
  const [scrollPct, setScrollPct] = useState(0)
  const [activeId, setActiveId] = useState("contexto")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setScrollPct(el.scrollTop / Math.max(max, 1) * 100)
      const y = window.scrollY + 140
      let active = tocSections[0].id
      for (const s of tocSections) {
        const node = document.getElementById(s.id)
        if (node && node.offsetTop <= y) active = s.id
      }
      setActiveId(active)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [mobileOpen])

  const activeSection = tocSections.find(s => s.id === activeId)

  return (
    <>
      <div className="ss-progress" style={{ width: `${scrollPct}%` }} />

      <main className="ss-shell">
        <div className="ss-grid">

          <aside className="ss-side-l">
            <div className="ss-toc-h">Índice</div>
            <ul className="ss-toc">
              {tocSections.map(s => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={activeId === s.id ? "active" : ""}>
                    <span className="n" aria-hidden="true">{s.n}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <article>
            <div className="ss-crumb">
              <Link href="/casos-de-exito">Casos de éxito</Link>
              {" "}&nbsp;/{" "}&nbsp;Infrastructure · Healthcare
            </div>

            <h1 className="ss-title">
              Cómo dejé <em>RTO en 60 min y RPO en 0h</em> para 15 volúmenes.
            </h1>

            <p className="ss-tldr">
              15 volúmenes EBS sin política de respaldo, sin SLA y sin saber cuánto tardaría recuperar el sistema.{" "}
              <b>Diseñé una política de 4 capas con validación mensual real y dejé al equipo con 3 documentos oficiales
              y 14 procedimientos para operar sin depender de mí.</b>{" "}
              RTO real medido: 6-30 minutos. RPO 0h. HIPAA compliant.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente",  dd: "MediRec, Inc." },
                { dt: "Período",  dd: "2024 — 2025" },
                { dt: "Rol",      dd: "Infrastructure Lead · DR Design" },
                { dt: "Sector",   dd: "Healthcare · HIPAA" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">RTO real medido</div>
                <div className="num">6-30<span style={{ fontSize: "18px", color: "var(--text-2)" }}> min</span></div>
                <div className="sub">Mejor que el objetivo de 60 min. Medido en restore real, no estimado.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">RPO</div>
                <div className="num">0<span style={{ fontSize: "24px", color: "var(--text-2)" }}>h</span></div>
                <div className="sub">Cero pérdida de datos. Incremental diario en sistemas críticos.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Registros íntegros</div>
                <div className="num">162/162</div>
                <div className="sub">Verificados tras el primer restore test de validación en staging.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Costo mensual</div>
                <div className="num">$80-120</div>
                <div className="sub">15 volúmenes protegidos con 4 capas incluidas. HIPAA compliant.</div>
              </div>
            </div>

            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">15 volúmenes sin política. Nadie sabía cuánto tardaría recuperar si algo fallaba.</h2>
              <div className="ss-prose">
                <p>Después de optimizar los costos de AWS, quedó clara la siguiente brecha: la infraestructura era más barata, pero no era más segura. <b>15 volúmenes EBS con respaldos manuales, sin frecuencia definida, sin SLA y sin proceso documentado de restore.</b></p>
                <p>En una plataforma healthcare con datos de pacientes, eso no es una deuda técnica. Es un riesgo regulatorio y un riesgo operativo real. Sin RTO ni RPO definidos, cualquier fallo se convertía en una emergencia sin playbook.</p>
              </div>
            </section>

            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">Un backup sin restore test no es un backup. Es una promesa sin verificar.</h2>
              <p className="ss-sec-lede">El problema no era crear backups. Era diseñar un sistema que se pudiera demostrar que funcionaba, con tiempos reales y compliance HIPAA verificable.</p>
              <ul className="ss-bullets">
                {challengeBullets.map(({ n, bold, rest }) => (
                  <li key={n} data-n={n}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
            </section>

            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Diseño de política, documentación operativa y validación mensual.</h2>
              <div className="ss-prose">
                <p>Diseñé la política de backup de 4 capas, configuré AWS Backup con los planes automáticos, escribí los 3 documentos oficiales y los 14 procedimientos operativos, y ejecuté los primeros 2 restore tests de validación.</p>
                <p>El trabajo incluyó:</p>
                <ul className="ss-role-list">
                  <li>diseño de RTO/RPO diferenciado por criticidad de sistema,</li>
                  <li>configuración de AWS Backup con planes automáticos por ambiente,</li>
                  <li>setup de Glacier Deep Archive para retención HIPAA de 6 meses,</li>
                  <li>escritura de Política, Manual Operativo y Calendario de Pruebas,</li>
                  <li>ejecución de los primeros 2 restore tests en staging con medición real de RTO,</li>
                  <li>y capacitación del equipo para ejecutar los tests mensuales sin asistencia.</li>
                </ul>
              </div>
            </section>

            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Validado en producción, no prometido en papel.</h2>
              <p className="ss-sec-lede">Cada decisión apuntaba al mismo resultado: <b>un SLA que se puede medir, demostrar y auditar.</b></p>
              <div className="ss-criterio-grid">
                {criteria.map(({ n, title, body, why }) => (
                  <div key={n} className="ss-crit-card">
                    <div className="n">{n}</div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <div className="why"><b>Por qué</b> {why}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="ss-sec" id="arquitectura">
              <div className="ss-sec-eyebrow">05 · Arquitectura</div>
              <h2 className="ss-sec-title">4 capas, cada una con un propósito distinto.</h2>
              <p className="ss-sec-lede">La política no es una sola regla aplicada a todo. Es 4 capas de protección con frecuencias, retenciones y destinos distintos según la criticidad.</p>

              <div className="ss-breakout">
                <div className="ss-arch">
                  <div className="ss-arch-head">
                    <span><span aria-hidden="true">▎ </span>política de backup · 4 capas · MediRec</span>
                    <span className="right"><span>15 volúmenes</span><span>HIPAA</span></span>
                  </div>
                  <div className="ss-arch-body">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}>
                      {[
                        { capa: "Capa 01", tipo: "Incremental diario", freq: "Cada día · retención 7 días", destino: "EBS Snapshot", sistemas: "Todos los volúmenes · críticos 2x/día", color: "var(--green)" },
                        { capa: "Capa 02", tipo: "Full semanal", freq: "Domingo · retención 2 meses", destino: "EBS Snapshot completo", sistemas: "Todos los volúmenes", color: "var(--green)" },
                        { capa: "Capa 03", tipo: "Mensual Glacier", freq: "1er día del mes · retención 6 meses", destino: "Glacier Deep Archive", sistemas: "Sistemas críticos · compliance HIPAA", color: "oklch(67% 0.15 220)" },
                        { capa: "Capa 04", tipo: "Validación mensual", freq: "1er viernes · restore real en staging", destino: "Medición de RTO + informe", sistemas: "1 volumen crítico por mes · verificación 100%", color: "oklch(67% 0.15 40)" },
                      ].map(({ capa, tipo, freq, destino, sistemas, color }) => (
                        <div key={capa} style={{ background: "var(--bg-2)", padding: "20px 24px" }}>
                          <div style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", color, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: "8px" }}>{capa}</div>
                          <div style={{ fontSize: "15px", fontWeight: 500, color: "var(--text)", marginBottom: "6px" }}>{tipo}</div>
                          <div style={{ fontFamily: "var(--ff-mono)", fontSize: "11px", color: "var(--text-3)", marginBottom: "4px" }}>{freq}</div>
                          <div style={{ fontFamily: "var(--ff-mono)", fontSize: "11px", color: "var(--text-2)", marginBottom: "8px" }}>{destino}</div>
                          <div style={{ fontSize: "12px", color: "var(--text-3)", borderTop: "1px solid var(--border)", paddingTop: "8px" }}>{sistemas}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ss-arch-foot">
                    <div className="f"><div className="l">Stack</div><div className="v">AWS Backup · EBS Snapshots · Glacier Deep Archive · CloudWatch · KMS</div></div>
                    <div className="f"><div className="l">Cifrado</div><div className="v">AWS-managed KMS · roadmap a Customer Managed Keys con rotación anual</div></div>
                    <div className="f"><div className="l">Compliance</div><div className="v">HIPAA retention 6 años · audit trail completo en CloudTrail</div></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="resultado">
              <div className="ss-sec-eyebrow">06 · Resultado</div>
              <h2 className="ss-sec-title">RTO más rápido que el objetivo. RPO cero. HIPAA compliant.</h2>
              <p className="ss-sec-lede">El sistema no solo cumple el SLA. El SLA se puede demostrar con datos reales de restore.</p>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">RTO real</div>
                  <div className="v">6-30min</div>
                  <div className="d">Medido en restore real. El objetivo era 60 min. El resultado fue mejor.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">RPO</div>
                  <div className="v">0h</div>
                  <div className="d">Incremental diario en críticos. Sin pérdida de datos en el último ciclo.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Compliance</div>
                  <div className="v">HIPAA</div>
                  <div className="d">Cifrado KMS, retención 6 meses Glacier, audit trail completo.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Costo</div>
                  <div className="v">$80-120</div>
                  <div className="d">Al mes para 15 volúmenes con 4 capas activas.</div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">3 documentos oficiales. 14 procedimientos. El equipo opera sin mí.</h2>
              <p className="ss-sec-lede">El entregable fue convertir un proceso ad-hoc en un sistema operativo formal que cualquier miembro autorizado del equipo puede ejecutar.</p>
              <div className="ss-deliver">
                {deliverables.map(({ n, title, desc }) => (
                  <div key={n} className="ss-d-card">
                    <div className="n">{n}</div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
              <div className="ss-pull">
                <q>Antes teníamos backups 'por si acaso'. Ahora tenemos un plan que probamos cada mes, con RTO medido y compliance garantizado. <em>Si algo falla, sabemos exactamente cuánto tiempo nos toma recuperar.</em></q>
                <div className="attr">Julio C. Cajigas · Director, MediRec</div>
              </div>
            </section>

            <section className="ss-sec" id="validacion">
              <div className="ss-sec-eyebrow">08 · Validación</div>
              <h2 className="ss-sec-title">La evidencia del sistema en acción.</h2>
              <p className="ss-sec-lede">Configuración de AWS Backup, resultados de restore testing y política de RTO/RPO diferenciada. El SLA no se promete: se mide.</p>

              <EvidenceCarousel slides={evidenceSlides} />
            </section>

            <div className="ss-end-cta">
              <div>
                <h3>¿Tienes infraestructura sin política de DR documentada?</h3>
                <p>Diseño de política de backup, RTO/RPO medido, HIPAA compliance. Si el riesgo es perder datos y no saber cuánto tardarías en recuperar, hablemos.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20de%20backup%20DR%20y%20tengo%20algo%20parecido"
                  className="ss-primary"
                >
                  Hablemos de tu proyecto →
                </a>
              </div>
            </div>

          </article>
        </div>
      </main>

      <div className="ss-mobile-toc" aria-label="Navegación de secciones">
        <button
          className="ss-mobile-toc-btn"
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-controls="backup-mobile-menu"
        >
          <span aria-hidden="true" style={{ color: "var(--green)", fontFamily: "var(--ff-mono)" }}>§</span>
          <span>{activeSection?.n} · {activeSection?.label}</span>
          <span aria-hidden="true" style={{ opacity: 0.5 }}>↑</span>
        </button>
      </div>

      {mobileOpen && (
        <div
          className="ss-mobile-overlay"
          onClick={() => setMobileOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Índice de secciones"
        >
          <nav
            id="backup-mobile-menu"
            className="ss-mobile-menu"
            onClick={e => e.stopPropagation()}
          >
            {tocSections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={activeId === s.id ? "active" : ""}
                onClick={() => setMobileOpen(false)}
              >
                <span className="n" aria-hidden="true">{s.n}</span>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
