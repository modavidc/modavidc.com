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
  { id: "series-a",     label: "Series A",        n: "08" },
]

const challengeBullets = [
  { n: "01", bold: "Sin validación real de capacidad", rest: ": la plataforma funcionaba bien en desarrollo, pero nadie había probado con carga real a escala de 20K usuarios concurrentes." },
  { n: "02", bold: "Multi-tenant isolation no probada bajo estrés", rest: ": en SaaS de seguridad corporativa, una fuga de datos entre tenants es catastrófica. La isolation teórica no basta." },
  { n: "03", bold: "Cost envelope desconocido para inversores", rest: ": sin números de infraestructura por escenario, cualquier promesa de escalabilidad era especulación. Los inversores necesitaban datos, no estimaciones." },
  { n: "04", bold: "Límites técnicos sin mapa", rest: ": sin stress testing hasta el fallo, no había forma de saber dónde estaban los cuellos de botella reales: base de datos, API, WebSockets o capa de auth." },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "3 escenarios de concurrencia realistas, no uno solo",
    body: "10% concurrencia (2K usuarios simultáneos) = operación normal. 20% (4K) = pico laboral. 30% (6K) = crisis o emergencia. Los inversores preguntaron los tres. Sin los tres, no hay respuesta completa.",
    why: "Un solo número de capacidad sin contexto de escenario no responde la pregunta real del inversor.",
  },
  {
    n: "Decisión 02",
    title: "Stress testing hasta el fallo para conocer los límites exactos",
    body: "No solo validar que el sistema aguanta 20K. Empujar hasta que falla para saber exactamente en qué punto y en qué componente. Ese dato vale más que cualquier número de capacidad nominal.",
    why: "Saber dónde falla es más valioso que saber dónde funciona. Es la diferencia entre datos y evidencia.",
  },
  {
    n: "Decisión 03",
    title: "Cost envelope como entregable principal, no como métrica secundaria",
    body: "El inversor no pregunta '¿funciona a 20K?' sino '¿cuánto cuesta escalar a 20K?' y '¿qué pasa a 100K?'. Calculé el cost envelope por escenario y proyecté hasta 100K con threshold de re-arquitectura.",
    why: "En una Series A, las decisiones de infraestructura son decisiones financieras. El lenguaje tiene que ser ese.",
  },
  {
    n: "Decisión 04",
    title: "Validar el aislamiento multi-tenant en las 3 capas bajo carga real",
    body: "HTTP middleware, Form Request validation y Eloquent global scopes: las 3 capas de isolation se probaron explícitamente bajo carga de los 3 escenarios. No asumir que la isolation resistía bajo estrés.",
    why: "En seguridad corporativa, una fuga de datos entre clientes bajo carga es el peor escenario posible para una Series A.",
  },
]

const deliverables = [
  { n: "01", title: "JMeter test plans completos", desc: "Planes de test para los 3 escenarios de concurrencia, reutilizables ante cambios de arquitectura o antes de cada release mayor." },
  { n: "02", title: "k6 scripts de stress testing", desc: "Scripts de carga progresiva hasta fallo para identificar el punto de quiebre exacto por componente." },
  { n: "03", title: "Capacity planning spreadsheet", desc: "Cost envelope por escenario (10/20/30%) con proyecciones a 50K y 100K usuarios. Threshold de re-arquitectura identificado." },
  { n: "04", title: "Informe de bottlenecks y soluciones", desc: "Lista de cuellos de botella encontrados con la solución aplicada o recomendada. Priorizado por impacto a escala." },
  { n: "05", title: "Plan de rollout seguro Apr-Dec 2025", desc: "Secuencia de onboarding de clientes con KPIs por fase. Diseñado para no superar el 15% de concurrencia en los primeros 6 meses." },
]

const evidenceSlides = [
  {
    label: "CloudWatch · Response times bajo carga · 3 escenarios",
    caption: "Métricas de CloudWatch durante las pruebas de carga. p50, p90 y p99 de response time para los 3 escenarios de concurrencia (10/20/30%). El sistema se mantuvo dentro de SLA hasta el escenario 30%.",
    src: "/assets/evidence/surescripts-cert--aws-architecture.png",
  },
  {
    label: "Cost envelope · $672 - $1,065/mes · por escenario",
    caption: "Tabla de cost envelope por escenario de concurrencia. Escenario base (10%): $672/mes. Pico laboral (20%): $902/mes. Crisis (30%): $1,065/mes. Proyecciones hasta 100K usuarios incluidas.",
    src: "/assets/evidence/nlm-migration--rxclass-api-response.png",
  },
  {
    label: "Error rate · <0.2% · bajo los 3 escenarios",
    caption: "Tasa de error durante las pruebas de carga. Los 3 escenarios se ejecutaron con error rate por debajo del 0.2%. El punto de quiebre se identificó a 7K usuarios concurrentes (35% de concurrencia).",
    src: "/assets/evidence/nlm-migration--csharp-nlm-integration.png",
  },
  {
    label: "Multi-tenant isolation · 3 capas validadas bajo carga",
    caption: "Validación explícita de las 3 capas de aislamiento: HTTP middleware, Form Request y Eloquent global scopes. Ninguna fuga de datos entre tenants en ninguno de los 3 escenarios de carga.",
    src: "/assets/evidence/surescripts-cert--aws-architecture-2.png",
  },
]

export function TCuidaMultitenantDetail() {
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
              {" "}&nbsp;/{" "}&nbsp;SaaS · Architecture
            </div>

            <h1 className="ss-title">
              Cómo validé escala a <em>20K usuarios</em> para una Series A con cost envelope claro.
            </h1>

            <p className="ss-tldr">
              T-Cuida necesitaba demostrar a inversores que su plataforma multi-tenant escalaba a 20K usuarios y cuánto costaría.{" "}
              <b>Diseñé una campaña de load testing de 6 semanas con 3 escenarios de concurrencia, stress testing hasta el fallo
              y cost envelope por escenario.</b>{" "}
              20K usuarios validados. $672-$1,065/mes según carga. Error rate menor a 0.2%.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente",  dd: "T-Cuida" },
                { dt: "Año",      dd: "2024" },
                { dt: "Rol",      dd: "Infrastructure Lead · Capacity Planning" },
                { dt: "Sector",   dd: "SaaS · Seguridad Corporativa" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">Capacidad validada</div>
                <div className="num">20K<span style={{ fontSize: "18px", color: "var(--text-2)" }}> users</span></div>
                <div className="sub">Con stress testing real en ambiente idéntico a producción.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Cost envelope</div>
                <div className="num">$672<span style={{ fontSize: "18px", color: "var(--text-2)" }}>-$1K</span></div>
                <div className="sub">Al mes según escenario de concurrencia (10% a 30%).</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Error rate</div>
                <div className="num">&lt;0.2<span style={{ fontSize: "24px", color: "var(--text-2)" }}>%</span></div>
                <div className="sub">En los 3 escenarios de carga. Punto de quiebre en 35% (7K concurrentes).</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Duración</div>
                <div className="num">6<span style={{ fontSize: "24px", color: "var(--text-2)" }}> sem</span></div>
                <div className="sub">Diseño de escenarios, setup, ejecución y análisis de resultados.</div>
              </div>
            </div>

            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">La pregunta que frena una Series A: ¿escala a 20K usuarios y cuánto cuesta?</h2>
              <div className="ss-prose">
                <p>T-Cuida es una plataforma SaaS multi-tenant para seguridad corporativa e incidentes de violencia de género. La plataforma funcionaba bien en producción con los clientes activos, pero <b>nunca se había probado a la escala que los inversores querían ver.</b></p>
                <p>La pregunta crítica en las reuniones de inversión era doble: ¿escala realmente a 20K usuarios? ¿Cuánto cuesta escalar? Sin respuesta sólida, basada en datos de carga real, no había Series A. Una promesa verbal o una estimación teórica no alcanza.</p>
              </div>
            </section>

            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">Validación real, no simbólica. Y multi-tenant isolation probada bajo estrés.</h2>
              <p className="ss-sec-lede">Load testing simbólico, como enviar 100 requests y decir que funciona, no responde la pregunta. Hacerlo bien requería rigor metodológico y un ambiente idéntico a producción.</p>
              <ul className="ss-bullets">
                {challengeBullets.map(({ n, bold, rest }) => (
                  <li key={n} data-n={n}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
            </section>

            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Diseño de la campaña, ejecución y traducción de resultados a lenguaje de inversores.</h2>
              <div className="ss-prose">
                <p>Diseñé la metodología completa, configuré el ambiente de testing idéntico a producción, ejecuté las pruebas con JMeter y k6, analicé los resultados y produje los entregables para el proceso de inversión.</p>
                <ul className="ss-role-list">
                  <li>diseño de 3 escenarios de concurrencia realistas con flujos de usuario,</li>
                  <li>setup de infraestructura de testing en AWS (idéntica a prod, con ASG activado),</li>
                  <li>ejecución de pruebas con JMeter y k6 con captura en CloudWatch,</li>
                  <li>stress testing hasta el fallo para identificar el punto de quiebre,</li>
                  <li>validación explícita de multi-tenant isolation bajo los 3 escenarios,</li>
                  <li>y análisis de cost envelope con proyecciones a 50K y 100K usuarios.</li>
                </ul>
              </div>
            </section>

            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Datos que un inversor puede auditar, no promesas que se evaporan en due diligence.</h2>
              <p className="ss-sec-lede">Cada decisión apuntaba a producir <b>evidencia, no estimaciones.</b> La diferencia importa en due diligence.</p>
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
              <h2 className="ss-sec-title">Stack de testing y plataforma bajo carga.</h2>
              <p className="ss-sec-lede">Ambiente idéntico a producción, instrumentado con CloudWatch. Herramientas de carga que simulan comportamiento real de usuarios, no solo requests HTTP.</p>

              <div className="ss-criterio-grid" style={{ marginTop: "24px" }}>
                {[
                  { label: "Load testing", tags: ["Apache JMeter", "Grafana k6", "k6 Cloud", "Scenarios API"] },
                  { label: "Plataforma", tags: ["Laravel 10", "MySQL 8 RDS", "Redis", "Pusher (WebSockets)", "Twilio"] },
                  { label: "Infraestructura", tags: ["AWS EC2 c6a", "AWS EC2 c7g", "ALB (Load Balancer)", "ASG (Auto Scaling)"] },
                  { label: "Observabilidad", tags: ["CloudWatch Metrics", "CloudWatch Logs", "RDS Performance Insights", "Redis Slow Log"] },
                ].map(({ label, tags }) => (
                  <div key={label} className="ss-crit-card" style={{ gap: "10px" }}>
                    <div className="n" style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", letterSpacing: ".1em", color: "var(--text-3)", textTransform: "uppercase" }}>{label}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {tags.map(t => (
                        <span key={t} style={{ fontFamily: "var(--ff-mono)", fontSize: "11px", color: "var(--text-2)", background: "var(--bg-3)", border: "1px solid var(--border-2)", padding: "3px 10px", borderRadius: "3px" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "28px", background: "var(--bg-2)", border: "1px solid var(--border)", padding: "20px 24px", fontFamily: "var(--ff-mono)", fontSize: "12px" }}>
                <div style={{ color: "var(--text-3)", marginBottom: "12px", letterSpacing: ".08em", textTransform: "uppercase", fontSize: "10px" }}>▎ Escenarios de concurrencia</div>
                {[
                  { pct: "10%", users: "2,000 concurrentes", label: "Operación normal", cost: "$672/mes", color: "var(--green)" },
                  { pct: "20%", users: "4,000 concurrentes", label: "Pico laboral", cost: "$902/mes", color: "oklch(67% 0.15 220)" },
                  { pct: "30%", users: "6,000 concurrentes", label: "Crisis / emergencia", cost: "$1,065/mes", color: "oklch(67% 0.15 40)" },
                ].map(({ pct, users, label, cost, color }) => (
                  <div key={pct} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
                    <div style={{ color, fontWeight: 700, width: "40px", flexShrink: 0 }}>{pct}</div>
                    <div style={{ color: "var(--text-2)", flex: 1 }}>{users} · {label}</div>
                    <div style={{ color: "var(--green)" }}>{cost}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="ss-sec" id="resultado">
              <div className="ss-sec-eyebrow">06 · Resultado</div>
              <h2 className="ss-sec-title">20K usuarios validados. Cost envelope claro. Series A ready.</h2>
              <p className="ss-sec-lede">6 semanas de trabajo riguroso. 3 escenarios ejecutados. 1 respuesta sólida para los inversores.</p>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">Capacidad</div>
                  <div className="v">20K</div>
                  <div className="d">Usuarios totales validados con stress testing real en los 3 escenarios.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Costo máximo</div>
                  <div className="v">$1,065</div>
                  <div className="d">Al mes en escenario de crisis (30% concurrencia). Número presentado a inversores.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Error rate</div>
                  <div className="v">&lt;0.2%</div>
                  <div className="d">En los 3 escenarios. Punto de quiebre identificado a 7K concurrentes (35%).</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Isolation</div>
                  <div className="v">3 capas</div>
                  <div className="d">HTTP middleware, Form Request y Eloquent scopes: validadas bajo los 3 escenarios.</div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">Artefactos reutilizables antes de cada release mayor o ronda de inversión.</h2>
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
                <q>Fueron 6 semanas intensas de carga y análisis. Al final tuvimos números que podíamos presentar a inversores sin dudas: <em>20K usuarios, validados, estos son los costos.</em></q>
                <div className="attr">CEO · T-Cuida</div>
              </div>
            </section>

            <section className="ss-sec" id="series-a">
              <div className="ss-sec-eyebrow">08 · Series A</div>
              <h2 className="ss-sec-title">La evidencia que respaldó la ronda.</h2>
              <p className="ss-sec-lede">Métricas de CloudWatch bajo los 3 escenarios, cost envelope por concurrencia y validación de aislamiento multi-tenant. Todo documentado antes de la reunión con inversores.</p>

              <EvidenceCarousel slides={evidenceSlides} />
            </section>

            <div className="ss-end-cta">
              <div>
                <h3>¿Necesitas validar capacidad antes de una ronda de inversión?</h3>
                <p>Load testing, capacity planning, cost envelope. Si los inversores van a preguntar cuánto cuesta escalar, hablemos antes de que pregunten.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20de%20capacity%20planning%20y%20tengo%20algo%20parecido"
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
          aria-controls="multitenant-mobile-menu"
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
            id="multitenant-mobile-menu"
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
