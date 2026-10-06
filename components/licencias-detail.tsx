"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { EvidenceCarousel } from "@/components/evidence-carousel"

const tocSections = [
  { id: "contexto",     label: "Contexto",    n: "01" },
  { id: "desafio",      label: "Desafío",     n: "02" },
  { id: "rol",          label: "Mi rol",       n: "03" },
  { id: "criterio",     label: "Mi criterio",  n: "04" },
  { id: "arquitectura", label: "Arquitectura", n: "05" },
  { id: "resultado",    label: "Resultado",    n: "06" },
  { id: "dejado",       label: "Lo que dejé",  n: "07" },
  { id: "prueba",       label: "Prueba",       n: "08" },
]

const challengeBullets = [
  { n: "01", bold: "Estándar de facto", rest: ": LexiComp es referente en healthcare USA por su cobertura farmacéutica completa." },
  { n: "02", bold: "Validación crítica", rest: ": alergias, contraindicaciones de embarazo, interacciones medicamentosas y reacciones cruzadas." },
  { n: "03", bold: "Compliance PREIS", rest: ": el módulo se audita. Cualquier hueco se traduce en una observación regulatoria." },
  { n: "04", bold: "Vendor lock-in silencioso", rest: ": APIs propietarias, datos en formatos no portables, renovación automática." },
  { n: "05", bold: "Resistencia interna", rest: ': si funciona, no lo toques. El miedo legítimo paraliza la decisión.' },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "Análisis clínico antes que técnico",
    body: "El problema no era reemplazar una API. Era validar si NLM cubría las capacidades clínicas críticas. Empezar por la pregunta clínica desbloquea todo lo demás.",
    why: "Sin validación clínica, ninguna decisión técnica importa.",
  },
  {
    n: "Decisión 02",
    title: "Preguntar directamente a la fuente",
    body: "En lugar de leer specs durante una semana, escribí a Dr. Bodenreider en NLM. Una conversación de tres preguntas clarificó lo que ningún PDF iba a aclarar.",
    why: "La fuente sabe más que la documentación.",
  },
  {
    n: "Decisión 03",
    title: "Validación por categoría crítica",
    body: "Alergias, contraindicaciones embarazo e interacciones se probaron por separado con suites de regresión clínica reales antes de aprobar la migración global.",
    why: "Una falla por categoría es contenible. Un fallo agregado, no.",
  },
  {
    n: "Decisión 04",
    title: "Rollout escalonado, no big bang",
    body: "11+ clientes migrados con ventanas de 2h cada uno, programados en mayo 2024. Detección temprana de issues sin riesgo de caída masiva ni rollback frenético.",
    why: "En healthcare el blast radius se limita por diseño.",
  },
]

const evidenceSlides = [
  {
    label: "Email · Dr. Bodenreider · NLM/NIH · jun 2023",
    caption: "Respuesta de Dr. Olivier Bodenreider, Senior Scientist en NLM/NIH (caso CAS-1122851-T9S3J0): SNOMED CT + MED-RT cubren clases alérgicas, y MED-RT CI_with cubre contraindicaciones de embarazo. Esta respuesta convirtió un riesgo clínico en una decisión de arquitectura.",
    src: "/assets/evidence/nlm-migration--email-bodenreider.png",
  },
  {
    label: "Código C# · integración NLM · abcEHR",
    caption: "Implementación en C# del módulo de consulta a NLM RxNorm dentro de abcEHR. Reemplaza las llamadas a LexiComp API con queries locales al servidor NLM (RxNav-in-a-Box sobre SQL Server 2017+).",
    src: "/assets/evidence/nlm-migration--csharp-nlm-integration.png",
  },
  {
    label: "NLM RxClass API · respuesta pública",
    caption: "Respuesta real de la API pública de NLM (rxnav.nlm.nih.gov/RxClass) mostrando clases de alergias vía SNOMED CT. La misma fuente federal que reemplazó a LexiComp, accesible sin licencia.",
    src: "/assets/evidence/nlm-migration--rxclass-api-response.png",
  },
  {
    label: "SQL Server · tablas clínicas · tblRefPregWarningData + tblAllergyClassDrugTemplate",
    caption: "Tablas clínicas en SQL Server 2017+ pobladas con datos de NLM. tblRefPregWarningData cubre contraindicaciones de embarazo (MED-RT CI_with Pregnancy). tblAllergyClassDrugTemplate cubre clases alérgicas por SNOMED CT. Las dos capacidades que Bodenreider confirmó, implementadas.",
    src: "/assets/evidence/nlm-migration--sql-clinical-tables.png",
  },
]

const deliverables = [
  { n: "01", title: "Suite de tests de regresión clínica", desc: "Casos por categoría: alergias, contraindicaciones, interacciones cruzadas." },
  { n: "02", title: "Comparativa LexiComp vs NLM", desc: "Documento técnico de paridad por capacidad clínica, validado por NLM." },
  { n: "03", title: "Queries REST NLM", desc: "Wrappers Node.js para RxNorm, SNOMED CT y MED-RT con cache local." },
  { n: "04", title: "Proceso de análisis de cobertura", desc: "Framework reusable para evaluar cualquier dependencia externa cara." },
  { n: "05", title: "Runbook de migración escalonada", desc: "Plantilla de ventanas de 2h, rollback plan y checks post-migración." },
  { n: "06", title: "Contacto técnico en NLM", desc: "Canal abierto con Dr. Bodenreider para futuras consultas clínicas." },
]

export function LicenciasDetail() {
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

          {/* TOC sidebar — desktop */}
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
            {/* Hero */}
            <div className="ss-crumb">
              <Link href="/casos-de-exito">Casos de éxito</Link>
              {" "}&nbsp;/{" "}&nbsp;FinOps · Healthcare
            </div>

            <h1 className="ss-title">
              Cómo eliminé <em>$20K/año</em> en licencias farmacéuticas.
            </h1>

            <p className="ss-tldr">
              MediRec pagaba $20K/año por una licencia de validación clínica que el equipo temía tocar.
              <b> Validé con la fuente que un estándar federal cubría lo mismo, gratis</b>,
              y migré 11+ clientes en 2 horas de downtime, sin una sola incidencia clínica.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente", dd: "MediRec, Inc." },
                { dt: "Año",     dd: "2023-2024" },
                { dt: "Rol",     dd: "Tech Lead · FinOps clínico" },
                { dt: "Sector",  dd: "Healthcare · USA" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            {/* Hero metrics */}
            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">Ahorro directo</div>
                <div className="num">
                  −$20K<span style={{ fontSize: "24px", color: "var(--text-2)" }}>/año</span>
                </div>
                <div className="sub">Licencia LexiComp eliminada por completo. Sin contrato, sin renovación.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Cobertura clínica</div>
                <div className="num">100%</div>
                <div className="sub">Alergias, contraindicaciones embarazo e interacciones: paridad total.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Incidencias clínicas</div>
                <div className="num">0</div>
                <div className="sub">Cero eventos adversos reportados tras la migración.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Clientes migrados</div>
                <div className="num">11+</div>
                <div className="sub">Rollout escalonado en mayo 2024. Ventanas de 2h por cliente.</div>
              </div>
            </div>

            {/* 01 Contexto */}
            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">Una licencia cara que nadie quería tocar.</h2>
              <div className="ss-prose">
                <p>MediRec pagaba <b>$20,000/año</b> a Wolters Kluwer por LexiComp para validación de medicamentos en su flujo de eRx. La integración con PREIS exigía integridad clínica auditable.</p>
                <p>El equipo tenía miedo de tocar el módulo: <b>cualquier error afecta directamente a pacientes</b>. La factura se renovaba en silencio cada año.</p>
              </div>
            </section>

            {/* 02 Desafío */}
            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">No era un problema técnico. Era un problema de riesgo clínico.</h2>
              <p className="ss-sec-lede">Reemplazar LexiComp sin un análisis exhaustivo podía comprometer la seguridad del paciente. La pregunta de fondo era una sola: <b>¿realmente NLM cubre lo mismo?</b></p>
              <ul className="ss-bullets">
                {challengeBullets.map(({ n, bold, rest }) => (
                  <li key={n} data-n={n}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
            </section>

            {/* 03 Mi rol */}
            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Convertir un problema clínico en una decisión obvia.</h2>
              <div className="ss-prose">
                <p>Lideré el análisis, pero el trabajo no fue de código sino de <b>verificación clínica</b>. Antes de tocar nada, contacté directamente a <b>Dr. Olivier Bodenreider</b>, científico de NLM, con tres preguntas concretas: alergias, contraindicaciones embarazo, interacciones.</p>
                <p>Respuesta: <b>sí, todas cubiertas</b>. <span style={{ color: "var(--green)", fontFamily: "var(--ff-mono)", fontSize: "14px" }}>RxNorm + SNOMED CT + MED-RT</span> resolvían el espectro completo, vía APIs públicas del gobierno federal.</p>
                <p>Con ese dato verificado por la fuente, la migración <b>dejó de ser un riesgo clínico y se volvió una decisión de arquitectura</b>. Después ejecuté: validación por categoría, migración técnica, tests de regresión, rollout escalonado a 11+ clientes.</p>
              </div>
            </section>

            {/* 04 Mi criterio */}
            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Cuatro decisiones que sacaron el miedo del proceso.</h2>
              <p className="ss-sec-lede">Cada decisión respondía al mismo principio: <b>quitar incertidumbre antes de quitar costo</b>.</p>
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
              <h2 className="ss-sec-title">Antes: vendor cloud. Después: estándar federal local.</h2>
              <p className="ss-sec-lede">Misma capacidad clínica, distinto origen. La nueva arquitectura elimina costo recurrente, vendor lock-in y dependencia de red externa.</p>

              <div className="ss-breakout">
                <div className="ss-arch">
                  <div className="ss-arch-head">
                    <span><span aria-hidden="true">▎ </span>migración de proveedor · before / after</span>
                    <span className="right"><span>mayo 2024</span><span>11+ clientes</span></span>
                  </div>

                  <div className="ss-arch-body">
                    <div className="lf-arch-rows">

                      {/* Before row */}
                      <div className="lf-arch-row">
                        <div className="lf-arch-side">
                          <span className="lf-arch-lbl lf-bad" aria-hidden="true">▎ antes</span>
                          <span className="lf-arch-tag lf-bad">$20K / año</span>
                          <span className="lf-arch-sub">cloud · vendor lock-in</span>
                        </div>
                        <div className="lf-arch-flow">
                          <div className="ss-node">
                            <div className="role">Clinical app</div>
                            <h4>abcEHR · .NET</h4>
                            <p>eRx workflow</p>
                          </div>
                          <div className="ss-arrow lf-arrow-bad">
                            <span className="lbl">REST · auth</span>
                            <span className="line" />
                            <span className="sub">internet</span>
                          </div>
                          <div className="ss-node lf-node-bad">
                            <div className="role">★ Cloud vendor</div>
                            <h4>LexiComp API</h4>
                            <p>Wolters Kluwer · paid</p>
                          </div>
                          <div className="ss-arrow" aria-hidden="true" style={{ visibility: "hidden" }}>
                            <span className="line" />
                          </div>
                          <div aria-hidden="true" style={{ visibility: "hidden" }} />
                        </div>
                      </div>

                      {/* After row */}
                      <div className="lf-arch-row">
                        <div className="lf-arch-side">
                          <span className="lf-arch-lbl lf-good" aria-hidden="true">▎ después</span>
                          <span className="lf-arch-tag lf-good">$0 / año</span>
                          <span className="lf-arch-sub">local · federal · gratis</span>
                        </div>
                        <div className="lf-arch-flow">
                          <div className="ss-node">
                            <div className="role">Clinical app</div>
                            <h4>abcEHR · .NET</h4>
                            <p>eRx workflow (sin cambio)</p>
                          </div>
                          <div className="ss-arrow">
                            <span className="lbl">REST · local</span>
                            <span className="line" />
                            <span className="sub">VPC interno</span>
                          </div>
                          <div className="ss-node gw">
                            <div className="role">★ Gateway local</div>
                            <h4>NLM Server · Node.js</h4>
                            <p>SQL Server 2017+ · cache</p>
                          </div>
                          <div className="ss-arrow">
                            <span className="lbl">RxNorm · SNOMED</span>
                            <span className="line" />
                            <span className="sub">NIH</span>
                          </div>
                          <div className="ss-node">
                            <div className="role">Federal source</div>
                            <h4>NLM (NIH)</h4>
                            <p>público · auditable</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="ss-arch-foot">
                    <div className="f"><div className="l">Fuente clínica</div><div className="v">NLM RxNorm · SNOMED CT · MED-RT</div></div>
                    <div className="f"><div className="l">Stack</div><div className="v">Node.js · SQL Server 2017+</div></div>
                    <div className="f"><div className="l">Integraciones</div><div className="v">abcEHR · Surescripts · PREIS</div></div>
                    <div className="f"><div className="l">Compliance</div><div className="v">NIH federal · audit trail</div></div>
                  </div>
                </div>
              </div>
            </section>

            {/* 06 Resultado */}
            <section className="ss-sec" id="resultado">
              <div className="ss-sec-eyebrow">06 · Resultado</div>
              <h2 className="ss-sec-title">Cero incidencias, cero costo recurrente, cero lock-in.</h2>
              <p className="ss-sec-lede">Cuatro métricas que cierran el caso: ahorro directo, paridad clínica, seguridad mantenida y escala completada.</p>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">Ahorro / año</div>
                  <div className="v">$20K</div>
                  <div className="d">Licencia eliminada. Contrato cerrado en mayo 2024 sin renovación.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Cobertura</div>
                  <div className="v">100%</div>
                  <div className="d">Paridad clínica verificada por categoría: alergias, embarazo, interacciones.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Incidencias</div>
                  <div className="v">0</div>
                  <div className="d">Cero eventos adversos reportados durante y después del rollout.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Clientes</div>
                  <div className="v">11+</div>
                  <div className="d">Migración escalonada completada en mayo 2024 con ventanas de 2h.</div>
                </div>
              </div>
            </section>

            {/* 07 Lo que dejé */}
            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">Artefactos para repetir el mismo análisis con otra dependencia.</h2>
              <p className="ss-sec-lede">El entregable no fue solo migrar LexiComp. Fue dejar un <b>método replicable</b> para evaluar cualquier dependencia externa cara.</p>
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
                <q>El verdadero entregable no fue eliminar la licencia, <em>fue darle al equipo un método para hacerlo otra vez.</em></q>
                <div className="attr">Cierre del engagement · mayo 2024</div>
              </div>
            </section>

            {/* 08 Prueba */}
            <section className="ss-sec" id="prueba">
              <div className="ss-sec-eyebrow">08 · Prueba</div>
              <h2 className="ss-sec-title">La conversación que cerró la decisión.</h2>
              <p className="ss-sec-lede">Antes de tocar una línea de código, escribí a Dr. Olivier Bodenreider (NLM/NIH) con tres preguntas concretas. Su respuesta destrabó el proyecto.</p>

              <EvidenceCarousel slides={evidenceSlides} />
            </section>

            {/* CTA */}
            <div className="ss-end-cta">
              <div>
                <h3>¿Pagas una licencia que nadie quiere tocar?</h3>
                <p>Healthcare, fintech, datos clínicos. Si hay una factura recurrente que el equipo evita auditar, hablemos.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20de%20licencias%20farmac%C3%A9uticas%20y%20tengo%20algo%20parecido"
                  className="ss-primary"
                >
                  Hablemos de tu proyecto →
                </a>
              </div>
            </div>

          </article>
        </div>
      </main>

      {/* Mobile TOC */}
      <div className="ss-mobile-toc" aria-label="Navegación de secciones">
        <button
          className="ss-mobile-toc-btn"
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-controls="lf-mobile-menu"
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
            id="lf-mobile-menu"
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
