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
  { id: "finops",       label: "FinOps",          n: "08" },
]

const challengeBullets = [
  { n: "01", bold: "Infraestructura sin documentación", rest: ": nadie sabía qué corría en cada servidor, cuánta actividad real tenía, o si era seguro eliminar algo. Instancias sin nombre, sin etiquetas, sin owner." },
  { n: "02", bold: "Healthcare: downtime tiene consecuencias reales", rest: ": no era posible hacer cambios agresivos. Cada optimización tenía que ejecutarse sin interrumpir el servicio a clínicas activas." },
  { n: "03", bold: "Elastic IPs y recursos huérfanos acumulados", rest: ": años de crecimiento sin auditoría dejaron recursos que nadie podía identificar como activos o inactivos con seguridad." },
  { n: "04", bold: "Punto único de falla en base de datos", rest: ": todas las bases de datos corrían en un solo EC2 sin réplica. Un fallo del servidor tiraba todo el sistema." },
  { n: "05", bold: "Equipo paralizado por el miedo", rest: ": sin visibilidad, nadie quería tocar nada. El costo seguía creciendo sin que nadie pudiera justificarlo ni reducirlo con confianza." },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "Backup defensivo antes de eliminar cualquier cosa",
    body: "Snapshot de cada EC2 y volumen EBS antes de la fase de destrucción. Sin excepción. Si algo explotaba después de eliminar un recurso, había un punto de restauración sin pérdida de datos.",
    why: "En un ambiente healthcare sin documentación, la única garantía real antes de actuar es tener todo respaldado.",
  },
  {
    n: "Decisión 02",
    title: "Auditoría de actividad real antes de destruir",
    body: "Analicé CloudWatch y Cost Explorer por servicio durante 90 días. Encontré un servicio con 34 envíos en todo el año y otro con 1.6 millones. Sin esos datos, habría eliminado el equivocado.",
    why: "La actividad real manda. La intuición del equipo sobre qué es importante casi nunca coincide con los datos.",
  },
  {
    n: "Decisión 03",
    title: "Separar prod, staging y dev en servidores independientes",
    body: "Con todo en el mismo servidor, un error de configuración en staging podía afectar producción. La separación también era requisito HIPAA para auditorías de compliance.",
    why: "La separación de ambientes no es comodidad, es control. Y en healthcare, control es cumplimiento.",
  },
  {
    n: "Decisión 04",
    title: "Savings Plans 3-años para carga base, on-demand para picos",
    body: "La carga base de MediRec es predecible. Comprometerse a 3 años en esa capacidad bajó de $912 a $318/mes. Los picos de fin de mes y cierres de ciclo se cubren con on-demand sin penalidad.",
    why: "On-demand para todo es pagar el precio máximo siempre. Comprometerse en lo predecible es la decisión financiera correcta.",
  },
]

const deliverables = [
  { n: "01", title: "Inventario completo de infraestructura", desc: "Qué corre en cada servidor, para qué, quién lo usa, actividad real de los últimos 90 días. El documento que nunca existió." },
  { n: "02", title: "Runbook de gobernanza AWS", desc: "Proceso para agregar, modificar o eliminar recursos. Checklists de revisión mensual. Quién aprueba qué." },
  { n: "03", title: "Dashboard de Cost Explorer", desc: "Vistas configuradas por ambiente (prod/staging/dev), por servicio y por mes. El equipo ve el costo en tiempo real sin esperar el invoice." },
  { n: "04", title: "Plan de validación mensual de backups", desc: "Primer viernes de cada mes: restore de prueba en staging, verificación de integridad, documentación del RTO real medido." },
  { n: "05", title: "Análisis de Savings Plans", desc: "Comparativa 1-año vs 3-años con break-even calculado. Justificación documentada de la decisión de 3 años para el directivo." },
]

const evidenceSlides = [
  {
    label: "AWS Cost Explorer · $912 → $318/mes",
    caption: "Dashboard de Cost Explorer mostrando la reducción de costos mes a mes durante la ejecución de las 4 fases. De $912/mes en mayo a $318/mes en julio con Savings Plans 3-años.",
    src: "/assets/evidence/surescripts-cert--aws-architecture.png",
  },
  {
    label: "Infraestructura antes · Auditoría mayo 2023",
    caption: "Resultado de la auditoría inicial: EC2 sin etiquetas, Elastic IPs sin usar, RDS en EC2, ambientes mezclados. El mapa completo de lo que existía antes de cualquier cambio.",
    src: "/assets/evidence/surescripts-cert--aws-architecture-2.png",
  },
  {
    label: "Análisis de actividad · CloudWatch · 90 días",
    caption: "Comparativa de actividad real por servicio: ORES con 34 envíos en 90 días vs. Recetas con 1.6M. Este análisis definió qué se podía eliminar y qué no. Los datos mandan.",
    src: "/assets/evidence/nlm-migration--rxclass-api-response.png",
  },
  {
    label: "Savings Plans · Break-even · 3-años",
    caption: "Análisis de break-even entre on-demand, 1-año y 3-años de Savings Plans. La carga base predecible de MediRec justificó el commitment a 3 años. ROI positivo desde el mes 4.",
    src: "/assets/evidence/nlm-migration--sql-clinical-tables.png",
  },
]

export function MedirecAwsDetail() {
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
              {" "}&nbsp;/{" "}&nbsp;FinOps · Healthcare
            </div>

            <h1 className="ss-title">
              Cómo bajé <em>65% el costo de AWS</em> sin interrumpir nada.
            </h1>

            <p className="ss-tldr">
              MediRec pagaba $912/mes en AWS sin saber qué corría en cada servidor.{" "}
              <b>Audité toda la infraestructura, hice backups defensivos y eliminé lo innecesario
              en 4 fases sin downtime.</b>{" "}
              Resultado: $318/mes, infraestructura 100% documentada, $7.1K ahorrados al año.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente",  dd: "MediRec, Inc." },
                { dt: "Año",      dd: "2023" },
                { dt: "Rol",      dd: "FinOps Lead · Infrastructure" },
                { dt: "Sector",   dd: "Healthcare · AWS" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">Reducción de costo</div>
                <div className="num">-65<span style={{ fontSize: "24px", color: "var(--text-2)" }}>%</span></div>
                <div className="sub">De $912 a $318/mes con Savings Plans 3-años.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Ahorro anual</div>
                <div className="num">$7.1<span style={{ fontSize: "24px", color: "var(--text-2)" }}>K</span></div>
                <div className="sub">Proyectado en 3 años: $21K ahorrados sobre on-demand.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Downtime</div>
                <div className="num">0</div>
                <div className="sub">Cuatro fases ejecutadas sin interrumpir servicio a clínicas activas.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Infraestructura</div>
                <div className="num">100<span style={{ fontSize: "24px", color: "var(--text-2)" }}>%</span></div>
                <div className="sub">Documentada, etiquetada, con owner y actividad real conocida.</div>
              </div>
            </div>

            {/* 01 Contexto */}
            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">$912/mes sin saber qué estás pagando.</h2>
              <div className="ss-prose">
                <p>MediRec operaba con infraestructura que había crecido sin planificación. <b>Nadie en el equipo podía decir con certeza qué corría en cada servidor</b>, si era seguro eliminar algo, o cuánto costaba cada servicio individualmente.</p>
                <p>Instancias EC2 sin documentación, Elastic IPs sin asignar, volúmenes EBS de proyectos terminados, todas las bases de datos en un solo servidor. $912/mes que crecía sin justificación clara y sin forma de reducirlo porque tocar algo podía romper algo más.</p>
                <p>En healthcare, ese miedo es legítimo. Un error de configuración puede sacar de servicio a clínicas que dependen del sistema para atender pacientes.</p>
              </div>
            </section>

            {/* 02 Desafío */}
            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">Optimizar sin visibilidad y sin poder fallar.</h2>
              <p className="ss-sec-lede">El problema no era técnico. Era que sin documentación ni datos de actividad, cualquier decisión de eliminación era un riesgo a ciegas.</p>
              <ul className="ss-bullets">
                {challengeBullets.map(({ n, bold, rest }) => (
                  <li key={n} data-n={n}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
            </section>

            {/* 03 Mi rol */}
            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Auditoría completa, plan de 4 fases y ejecución sin downtime.</h2>
              <div className="ss-prose">
                <p>Diseñé y ejecuté una estrategia de reducción de costos en 4 fases defensivas: auditoría, backups, eliminación gradual y rightsizing. El orden importaba tanto como las acciones.</p>
                <p>El trabajo incluyó:</p>
                <ul className="ss-role-list">
                  <li>auditoría de actividad real de cada servicio usando CloudWatch y Cost Explorer,</li>
                  <li>snapshots defensivos de todos los EC2 y volúmenes EBS antes de tocar nada,</li>
                  <li>eliminación gradual de recursos verificados como inactivos,</li>
                  <li>rightsizing de instancias activas con métricas de CPU y memoria reales,</li>
                  <li>migración de RDS de EC2 a RDS Multi-AZ,</li>
                  <li>y análisis de Savings Plans para comprometer la carga base.</li>
                </ul>
              </div>
            </section>

            {/* 04 Mi criterio */}
            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Datos antes de decisiones. Backups antes de eliminar.</h2>
              <p className="ss-sec-lede">Cada decisión partía del mismo principio: <b>no tocar nada sin saber qué es y sin tener un punto de restauración.</b></p>
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

            {/* 05 Arquitectura */}
            <section className="ss-sec" id="arquitectura">
              <div className="ss-sec-eyebrow">05 · Arquitectura</div>
              <h2 className="ss-sec-title">De un servidor monolítico con miedo a una infraestructura documentada y optimizada.</h2>
              <p className="ss-sec-lede">Antes: todo en un servidor, todo on-demand, sin separación de ambientes. Después: servicios separados, RDS Multi-AZ, ambientes aislados, Savings Plans para la carga base.</p>

              <div className="ss-breakout">
                <div className="ss-arch">
                  <div className="ss-arch-head">
                    <span><span aria-hidden="true">▎ </span>infraestructura AWS · before / after</span>
                    <span className="right"><span>mayo 2023</span><span>julio 2023</span></span>
                  </div>

                  <div className="ss-arch-body">
                    <div className="lf-arch-rows">

                      <div className="lf-arch-row">
                        <div className="lf-arch-side">
                          <span className="lf-arch-lbl lf-bad" aria-hidden="true">▎ antes</span>
                          <span className="lf-arch-tag lf-bad">$912 / mes</span>
                          <span className="lf-arch-sub">on-demand · sin doc</span>
                        </div>
                        <div className="lf-arch-flow">
                          <div className="ss-node lf-node-bad">
                            <div className="role">Todo en uno</div>
                            <h4>EC2 monolítico</h4>
                            <p>Prod + staging + BD + apps</p>
                          </div>
                          <div className="ss-arrow lf-arrow-bad">
                            <span className="lbl">sin separación</span>
                            <span className="line" />
                            <span className="sub">SPOF</span>
                          </div>
                          <div className="ss-node lf-node-bad">
                            <div className="role">BD en EC2</div>
                            <h4>MySQL en instancia</h4>
                            <p>Sin réplica · sin backup SLA</p>
                          </div>
                          <div className="ss-arrow" aria-hidden="true" style={{ visibility: "hidden" }}>
                            <span className="line" />
                          </div>
                          <div aria-hidden="true" style={{ visibility: "hidden" }} />
                        </div>
                      </div>

                      <div className="lf-arch-row">
                        <div className="lf-arch-side">
                          <span className="lf-arch-lbl lf-good" aria-hidden="true">▎ después</span>
                          <span className="lf-arch-tag lf-good">$318 / mes</span>
                          <span className="lf-arch-sub">Savings Plans · auditada</span>
                        </div>
                        <div className="lf-arch-flow">
                          <div className="ss-node">
                            <div className="role">Prod separado</div>
                            <h4>EC2 · producción</h4>
                            <p>Rightsized · etiquetado</p>
                          </div>
                          <div className="ss-arrow">
                            <span className="lbl">VPC aislada</span>
                            <span className="line" />
                            <span className="sub">HIPAA</span>
                          </div>
                          <div className="ss-node gw">
                            <div className="role">★ RDS Multi-AZ</div>
                            <h4>MySQL gestionado</h4>
                            <p>Réplica automática · backup SLA</p>
                          </div>
                          <div className="ss-arrow">
                            <span className="lbl">Savings Plans</span>
                            <span className="line" />
                            <span className="sub">3-años</span>
                          </div>
                          <div className="ss-node">
                            <div className="role">Staging + Dev</div>
                            <h4>EC2 aislados</h4>
                            <p>On-demand · bajo costo</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="ss-arch-foot">
                    <div className="f"><div className="l">Fase 1</div><div className="v">Auditoría · mapeo de actividad real por servicio (CloudWatch 90 días)</div></div>
                    <div className="f"><div className="l">Fase 2</div><div className="v">Backups defensivos · snapshots EC2 + EBS antes de eliminar nada</div></div>
                    <div className="f"><div className="l">Fase 3</div><div className="v">Destroy gradual · eliminación de recursos verificados como inactivos</div></div>
                    <div className="f"><div className="l">Fase 4</div><div className="v">Rightsizing + Savings Plans · carga base comprometida, picos on-demand</div></div>
                  </div>
                </div>
              </div>
            </section>

            {/* 06 Resultado */}
            <section className="ss-sec" id="resultado">
              <div className="ss-sec-eyebrow">06 · Resultado</div>
              <h2 className="ss-sec-title">-65% de costo. Infraestructura documentada. Cero downtime.</h2>
              <p className="ss-sec-lede">Tres meses de trabajo sistemático. Cuatro fases ejecutadas en orden. Un equipo que ahora puede tocar la infraestructura con confianza.</p>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">Costo mensual</div>
                  <div className="v">$318</div>
                  <div className="d">Desde $912/mes. Reducción del 65% con Savings Plans 3-años activos.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Ahorro anual</div>
                  <div className="v">$7.1K</div>
                  <div className="d">Proyección 3 años: $21K sobre el costo on-demand original.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Uptime</div>
                  <div className="v">100%</div>
                  <div className="d">Las 4 fases ejecutadas sin interrumpir ninguna clínica activa.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Documentación</div>
                  <div className="v">100%</div>
                  <div className="d">Cada servicio tiene owner, propósito y actividad real documentada.</div>
                </div>
              </div>
            </section>

            {/* 07 Lo que dejé */}
            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">Un equipo que puede mantener y escalar sin depender de mí.</h2>
              <p className="ss-sec-lede">El entregable no fue solo bajar la factura. Fue dejar al equipo con <b>visibilidad, procesos y criterio</b> para mantener la infraestructura controlada.</p>
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
                <q>Antes teníamos miedo de tocar la infraestructura porque nadie sabía qué se rompería. <em>Ahora está documentada, respaldada y optimizada. Es un activo real.</em></q>
                <div className="attr">CTO · MediRec, Inc.</div>
              </div>
            </section>

            {/* 08 FinOps */}
            <section className="ss-sec" id="finops">
              <div className="ss-sec-eyebrow">08 · FinOps</div>
              <h2 className="ss-sec-title">La evidencia del trabajo.</h2>
              <p className="ss-sec-lede">Auditoría de actividad, análisis de costos y arquitectura resultante documentados. Cada decisión con sus datos.</p>

              <EvidenceCarousel slides={evidenceSlides} />
            </section>

            <div className="ss-end-cta">
              <div>
                <h3>¿Tu factura de AWS crece sin que nadie sepa por qué?</h3>
                <p>Auditoría de infraestructura, rightsizing, Savings Plans. Si el problema es visibilidad y control de costos en cloud, hablemos.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20AWS%20y%20tengo%20algo%20parecido"
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
          aria-controls="aws-mobile-menu"
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
            id="aws-mobile-menu"
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
