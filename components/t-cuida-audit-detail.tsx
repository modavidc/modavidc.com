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
  { id: "framework",    label: "El framework",    n: "08" },
]

const challengeBullets = [
  { n: "01", bold: "Arquitectura débil y difícil de mantener", rest: ": controllers de 3,000+ líneas de código, lógica de negocio mezclada con presentación, responsabilidades sin separación clara." },
  { n: "02", bold: "Seguridad inconsistente", rest: ": rate limiting ausente en varios endpoints, multi-tenant isolation débil (errores silenciosos posibles entre clientes), JWT con TTL excesivamente largo." },
  { n: "03", bold: "Testing fragmentado y bajo", rest: ": cobertura de pruebas al 9.7%, sin CI gates, sin test pyramid definida. Cambios sin forma de verificar que no rompían nada." },
  { n: "04", bold: "Onboarding de 4-5 semanas", rest: ": sin documentación de arquitectura, sin runbooks, sin guías de contribución. Un developer nuevo tardaba más de un mes en ser productivo." },
  { n: "05", bold: "Mejora no auditable", rest: ": no bastaba con arreglar cosas. Había que demostrar que mejoró con datos duros. Los inversores iban a preguntar '¿cuánto subió y en qué?'." },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "Framework de 10 dimensiones ponderadas, no una lista plana de problemas",
    body: "Security pesa 20%, Features 15%, Integrity 15%, Performance 10%, Testing 10%, Onboarding 8%, Architecture 8%, Observability 5%, Documentation 5%, Frontend 4%. Sin pesos, arreglar CSS sería equivalente a eliminar un SQL injection.",
    why: "Los inversores no necesitan una lista de cambios. Necesitan demostrar que el score subió en las dimensiones que importan para el negocio.",
  },
  {
    n: "Decisión 02",
    title: "Cada mejora trazable: ticket + código + tests que validan",
    body: "Nada de 'ya lo arreglé'. Cada mejora tiene un ticket en el tracker, un PR con el cambio, y tests que verifican el comportamiento esperado. El score no es magia, es evidencia.",
    why: "Due diligence en una Series A revisa el historial de commits. Cada ticket cerrado con tests es un dato auditable.",
  },
  {
    n: "Decisión 03",
    title: "VoiceController de 3,008 LOC a 22 LOC stub + 9 controllers especializados",
    body: "Un controller de 3K líneas no es arquitectura, es deuda técnica acumulada. El refactoring no fue dividir el archivo: fue extraer 9 responsabilidades distintas, cada una con su propio controller y su propio test suite.",
    why: "Single responsibility no es un principio estético. Es la condición mínima para poder testear y mantener código.",
  },
  {
    n: "Decisión 04",
    title: "Remediación sin parar de entregar features",
    body: "El negocio siguió funcionando durante 6 meses. La remediación no fue un sprint de pausa total: fue trabajo paralelo con el roadmap del producto. Cada PR de remediación convivió con PRs de features nuevas.",
    why: "Una empresa que para todo para refactorizar no llega a la Series A. El criterio era arreglarlo sin frenar el negocio.",
  },
]

const deliverables = [
  { n: "01", title: "Framework de scoring reutilizable", desc: "10 dimensiones con pesos, criterios de evaluación y metodología de scoring. Reutilizable para auditorías de otros proyectos." },
  { n: "02", title: "1,892 tests totales con pyramid balanceada", desc: "De 9.7% a 99% de cobertura. CI gates en todas las suites. Unit, integration y feature tests en proporción correcta." },
  { n: "03", title: "Arquitectura documentada", desc: "Diagrama de componentes, responsabilidades por capa, patrones de naming, guía de contribución para el equipo." },
  { n: "04", title: "Onboarding de 4-5 semanas reducido a 48 horas", desc: "Setup guide, runbook de development, architecture overview y first-PR guide. Un developer nuevo puede contribuir en 2 días." },
  { n: "05", title: "105 tickets cerrados con 105 PRs mergeados", desc: "Historial auditable de cada mejora. Cada ticket referencia la dimensión del framework, el cambio y los tests que lo validan." },
]

const evidenceSlides = [
  {
    label: "Score · 41 → 78/100 · evolución por dimensión",
    caption: "Evolución del score por dimensión durante los 6 meses de remediación. Security: +2.5. Architecture: +3.7. Performance: +4.1. Onboarding: +4.6. Cada barra representa el delta entre el score inicial (auditoría) y el score final.",
    src: "/assets/evidence/nlm-migration--csharp-nlm-integration.png",
  },
  {
    label: "VoiceController · 3,008 LOC → 22 LOC stub",
    caption: "Comparativa del refactoring más grande del proyecto. VoiceController original: 3,008 líneas de código con 12 responsabilidades mezcladas. Resultado: stub de 22 LOC + 9 controllers especializados con un test suite por controller.",
    src: "/assets/evidence/surescripts-cert--send-method-core.png",
  },
  {
    label: "Test coverage · 9.7% → 99% · CI gates activos",
    caption: "Dashboard de test coverage antes y después. De 9.7% sin CI a 99% con gates en todas las suites. 1,892 tests totales: unit (60%), integration (30%), feature (10%). Ningún PR se mergea si falla un gate.",
    src: "/assets/evidence/nlm-migration--sql-clinical-tables.png",
  },
  {
    label: "Framework · 10 dimensiones · scores inicial/final",
    caption: "Tabla completa del framework de scoring: 10 dimensiones con peso ponderado, score inicial de auditoría externa, score final y delta. Total: 41/100 inicial → 78/100 final. Series A ready confirmado.",
    src: "/assets/evidence/surescripts-cert--certificado-oficial-pr21677.png",
  },
]

const dimensions = [
  { name: "Security", weight: "20%", from: 7.2, to: 9.7 },
  { name: "Features", weight: "15%", from: 6.8, to: 8.9 },
  { name: "Integrity", weight: "15%", from: 6.1, to: 8.4 },
  { name: "Performance", weight: "10%", from: 5.5, to: 9.6 },
  { name: "Testing", weight: "10%", from: 2.1, to: 9.9 },
  { name: "Onboarding", weight: "8%", from: 3.8, to: 8.4 },
  { name: "Architecture", weight: "8%", from: 4.6, to: 8.3 },
  { name: "Observability", weight: "5%", from: 5.2, to: 7.8 },
  { name: "Documentation", weight: "5%", from: 4.0, to: 7.1 },
  { name: "Frontend", weight: "4%", from: 5.9, to: 7.6 },
]

export function TCuidaAuditDetail() {
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
              {" "}&nbsp;/{" "}&nbsp;SaaS · Codebase
            </div>

            <h1 className="ss-title">
              Cómo subí un codebase de <em>41 a 78/100</em> en 6 meses.
            </h1>

            <p className="ss-tldr">
              Auditoría externa calificó el codebase de T-Cuida con 41/100, nivel crítico, bloqueador de Series A.{" "}
              <b>Diseñé un framework de 10 dimensiones ponderadas y ejecuté 6 meses de remediación sistemática sin
              parar el negocio.</b>{" "}
              78/100 al cierre. 1,892 tests. 105 tickets cerrados. Series A ready confirmado.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente",   dd: "T-Cuida" },
                { dt: "Período",   dd: "2024 (6 meses)" },
                { dt: "Rol",       dd: "Tech Lead · Codebase Turnaround" },
                { dt: "Sector",    dd: "SaaS · Seguridad Corporativa" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">Score general</div>
                <div className="num">41<span style={{ fontSize: "18px", color: "var(--text-2)" }}>→78</span></div>
                <div className="sub">+37 puntos en 6 meses. +90% de mejora. Series A ready.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Tests totales</div>
                <div className="num">1,892</div>
                <div className="sub">De 9.7% de cobertura a 99%. CI gates activos en todas las suites.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Tickets cerrados</div>
                <div className="num">105</div>
                <div className="sub">105 PRs mergeados. Cada uno con ticket, código y tests que validan.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Onboarding</div>
                <div className="num">48<span style={{ fontSize: "18px", color: "var(--text-2)" }}>h</span></div>
                <div className="sub">Antes: 4-5 semanas. Ahora: 48 horas. Un developer nuevo contribuye en 2 días.</div>
              </div>
            </div>

            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">41/100. Nivel crítico. Bloqueador de Series A.</h2>
              <div className="ss-prose">
                <p>Una auditoría técnica externa de T-Cuida arrojó un score de 41/100, calificado como nivel CRÍTICO. <b>Los hallazgos eran sistémicos</b>: controllers de 3,000+ líneas, seguridad inconsistente, testing al 9.7%, onboarding de 4-5 semanas.</p>
                <p>El problema no era técnico solamente. Era que los inversores tenían el reporte de auditoría. Cualquier promesa de mejora sin datos duros sería descartada en due diligence. La solución tenía que ser auditable, no declarativa.</p>
              </div>
            </section>

            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">No era arreglar bugs. Era demostrar mejora sistemática con datos duros.</h2>
              <p className="ss-sec-lede">El desafío real no era el código. Era producir una narrativa de mejora que resistiera due diligence, sin parar el negocio mientras se hacía.</p>
              <ul className="ss-bullets">
                {challengeBullets.map(({ n, bold, rest }) => (
                  <li key={n} data-n={n}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
            </section>

            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Diseño del framework, ejecución de la remediación y entrega del score final.</h2>
              <div className="ss-prose">
                <p>Diseñé el framework de scoring de 10 dimensiones, ejecuté la remediación técnica durante 6 meses y produje los entregables para el proceso de inversión. El trabajo fue paralelo al roadmap del producto.</p>
                <ul className="ss-role-list">
                  <li>diseño del framework de 10 dimensiones con pesos ponderados,</li>
                  <li>evaluación inicial de cada dimensión contra los hallazgos de la auditoría externa,</li>
                  <li>refactoring de arquitectura: controllers, separación de responsabilidades, state machine,</li>
                  <li>implementación de security: rate limiting, multi-tenant isolation de 3 capas, JWT TTL,</li>
                  <li>construcción del test suite de 1,892 tests con CI gates,</li>
                  <li>y documentación de arquitectura y onboarding guide.</li>
                </ul>
              </div>
            </section>

            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Cuatro decisiones que convirtieron un reporte de auditoria en una narrativa de mejora.</h2>
              <p className="ss-sec-lede">Cada decisión respondía a la misma restricción: <b>mejorar con evidencia, sin parar el negocio, en 6 meses.</b></p>
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
              <h2 className="ss-sec-title">Stack de remediación.</h2>

              <div className="ss-criterio-grid" style={{ marginTop: "24px" }}>
                {[
                  { label: "Backend", tags: ["Laravel 10", "PHP 8.1", "MySQL 8", "Redis", "GitHub Actions (CI/CD)"] },
                  { label: "Testing", tags: ["PHPUnit", "Mockery", "Laravel Dusk", "Pest", "1,892 tests"] },
                  { label: "Arquitectura", tags: ["Single-action controllers", "State machine (Incident)", "Service classes", "Repository pattern"] },
                  { label: "Seguridad", tags: ["Rate limiting", "3-layer multi-tenant isolation", "JWT TTL reducido", "Signature validation"] },
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
            </section>

            <section className="ss-sec" id="resultado">
              <div className="ss-sec-eyebrow">06 · Resultado</div>
              <h2 className="ss-sec-title">+37 puntos. 1,892 tests. Series A ready.</h2>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">Score</div>
                  <div className="v">41→78</div>
                  <div className="d">+37 puntos. +90% en 6 meses. Aprobado para Series A.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Coverage</div>
                  <div className="v">9.7→99%</div>
                  <div className="d">1,892 tests con CI gates en todas las suites activas.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Architecture</div>
                  <div className="v">8.3/10</div>
                  <div className="d">+3.7 pts. VoiceController 3,008 LOC → 22 LOC stub + 9 controllers.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Onboarding</div>
                  <div className="v">48h</div>
                  <div className="d">Desde 4-5 semanas. Un developer nuevo puede contribuir en 2 días.</div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">Un framework reutilizable y un equipo que puede mantener el score.</h2>
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
                <q>La auditoría fue un shock. Pero Moisés convirtió eso en un proceso metódico. Al final, podíamos mostrar cada mejora con datos. <em>Eso fue lo que convenció a los inversores.</em></q>
                <div className="attr">CTO · T-Cuida</div>
              </div>
            </section>

            <section className="ss-sec" id="framework">
              <div className="ss-sec-eyebrow">08 · El framework</div>
              <h2 className="ss-sec-title">10 dimensiones. Pesos ponderados. Evidencia por dimensión.</h2>
              <p className="ss-sec-lede">El framework no es una opinión. Es un sistema de scoring con pesos que reflejan el impacto en negocio. Security pesa 20% porque un incidente de seguridad destruye la ronda. Frontend pesa 4% porque afecta UX pero no el core.</p>

              <div style={{ background: "var(--bg-2)", border: "1px solid var(--border)", marginTop: "24px", fontFamily: "var(--ff-mono)", fontSize: "12px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: "0", borderBottom: "1px solid var(--border)", padding: "10px 20px", color: "var(--text-3)", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase" }}>
                  <span>Dimensión</span><span>Peso</span><span>Inicial</span><span>Final</span>
                </div>
                {dimensions.map(({ name, weight, from, to }) => {
                  const delta = (to - from).toFixed(1)
                  return (
                    <div key={name} style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: "0", padding: "10px 20px", borderBottom: "1px solid var(--border)", alignItems: "center" }}>
                      <span style={{ color: "var(--text-2)" }}>{name}</span>
                      <span style={{ color: "var(--text-3)", textAlign: "right", paddingRight: "24px" }}>{weight}</span>
                      <span style={{ color: "var(--text-3)", textAlign: "right", paddingRight: "24px" }}>{from}</span>
                      <span style={{ color: "var(--green)", textAlign: "right" }}>{to} <span style={{ fontSize: "10px", opacity: .7 }}>+{delta}</span></span>
                    </div>
                  )
                })}
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", padding: "12px 20px", color: "var(--text-3)", fontSize: "10px", letterSpacing: ".05em" }}>
                  <span style={{ color: "var(--text-2)", fontWeight: 600 }}>Total ponderado</span>
                  <span style={{ textAlign: "right", paddingRight: "24px" }}>100%</span>
                  <span style={{ textAlign: "right", paddingRight: "24px" }}>41</span>
                  <span style={{ color: "var(--green)", textAlign: "right", fontWeight: 600 }}>78</span>
                </div>
              </div>

              <div style={{ marginTop: "32px" }}>
                <EvidenceCarousel slides={evidenceSlides} />
              </div>
            </section>

            <div className="ss-end-cta">
              <div>
                <h3>¿Tienes un codebase que bloqueó o puede bloquear una ronda de inversión?</h3>
                <p>Auditoría técnica, framework de scoring, remediación sistemática. Si los inversores van a preguntar por la calidad del código, hablemos antes.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20de%20codebase%20turnaround%20y%20tengo%20algo%20parecido"
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
          aria-controls="audit-mobile-menu"
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
            id="audit-mobile-menu"
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
