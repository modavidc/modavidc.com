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
  { id: "flujo",        label: "El flujo",        n: "08" },
]

const challengeBullets = [
  { n: "01", bold: "HL7 v2.5.1 heterogéneo por laboratorio", rest: ": cada lab genera HL7 ligeramente diferente. El parser tiene que ser robusto ante variaciones de campo, encoding y segmentos opcionales." },
  { n: "02", bold: "Laboratorios con infraestructura muy distinta", rest: ": algunos con API REST, otros solo con FTP, otros sin ninguna integración previa. El modelo de comunicación tiene que adaptarse al lab, no al revés." },
  { n: "03", bold: "Integración en abcEHR sin romper el sistema existente", rest: ": abcEHR es un EHR de escritorio C# en producción. Cualquier cambio requería validación clínica antes de release." },
  { n: "04", bold: "Multi-cliente con requisitos conflictivos", rest: ": doctores quieren API keys simples (están en C#). Labs quieren JWT seguro (tienen sistemas web). No puede ser la misma autenticación para todos." },
  { n: "05", bold: "Escalar de 0 a 40K+ órdenes/mes sin downtime", rest: ": el crecimiento fue progresivo pero rápido. La arquitectura tenía que aguantar la escala sin paros de mantenimiento." },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "API centralizada como intermediario, no P2P doctor-lab",
    body: "Si un laboratorio falla, los otros 24 siguen funcionando. Si un lab agrega su API, se conecta a ORES una sola vez y todos los doctores pueden usarlo. Sin arquitectura centralizada, cada par doctor-lab es una integración separada.",
    why: "N doctores × M laboratorios = N×M integraciones en P2P. Con ORES: N doctores + M laboratorios, punto.",
  },
  {
    n: "Decisión 02",
    title: "Autenticación diferenciada: JWT para labs, API keys para doctores",
    body: "Los laboratorios tienen sistemas web que manejan JWT renovable cada 2h. Los doctores usan abcEHR en C# de escritorio donde manejar JWT renovable es complicado. API keys para doctores, JWT para labs.",
    why: "Forzar el mismo mecanismo a todos produce implementaciones frágiles. La autenticación tiene que encajar con el stack del cliente.",
  },
  {
    n: "Decisión 03",
    title: "Pull model para labs: consultan /pending cada 5 minutos",
    body: "Webhooks requieren que el laboratorio tenga un servidor público con IP fija y disponibilidad alta. La mayoría no la tiene. Con pull model, el lab decide cuándo consultar. Si falla 10 minutos, las órdenes siguen ahí.",
    why: "Tolerancia a fallos en el cliente es más fácil de implementar que tolerancia a fallos en webhooks que no responden.",
  },
  {
    n: "Decisión 04",
    title: "Almacenar el HL7 completo en base de datos",
    body: "Cada mensaje HL7 enviado y recibido se guarda en BD con timestamp y estado. Si un lab reporta un error, puedo ver exactamente qué se envió. Si hay que reenviar, existe el mensaje original. Checksum SHA256 garantiza integridad.",
    why: "En healthcare, la auditoría no es opcional. '¿Qué se envió exactamente?' tiene que tener respuesta sin depender de logs volátiles.",
  },
]

const deliverables = [
  { n: "01", title: "OpenAPI / Swagger con 50+ endpoints", desc: "Documentación completa de la API: autenticación, órdenes, resultados, laboratorios, audit trail. Generada automáticamente desde el código." },
  { n: "02", title: "HL7 Mapping Guide", desc: "Cómo ORES mapea cada campo HL7 a la base de datos y viceversa. Referencia para integrar laboratorios nuevos sin necesidad de asistencia." },
  { n: "03", title: "Lab Integration Guide", desc: "Guía de onboarding para un laboratorio nuevo: autenticación JWT, endpoints de consulta, formato de respuesta de resultados. Un lab nuevo puede integrarse en 1-2 días." },
  { n: "04", title: "C# Integration Guide", desc: "Cómo integrar ORES desde abcEHR: serialización de órdenes, manejo de API keys, retry automático, sincronización periódica de resultados." },
  { n: "05", title: "Error Codes Reference", desc: "Cada código de error de ORES con su causa y la acción correcta. Incluye los errores más comunes de HL7 por laboratorio." },
  { n: "06", title: "Operational Runbook", desc: "Deployment, rollback, troubleshooting de errores frecuentes, cómo agregar un laboratorio nuevo, alertas de monitoring." },
]

const evidenceSlides = [
  {
    label: "Arquitectura · ORES API · flujo doctor → lab → resultado",
    caption: "Diagrama de arquitectura completo: Doctor crea orden en abcEHR (C#) → ORES API (Laravel) → Laboratorio consulta /pending → Procesa → Sube resultado → Doctor descarga. Todo el flujo trazable en BD.",
    src: "/assets/evidence/surescripts-cert--aws-architecture.png",
  },
  {
    label: "Integración C# · abcEHR · serialización de órdenes",
    caption: "Implementación en C# de la integración con ORES API. Serialización de la orden médica desde abcEHR, autenticación con API key, retry automático ante fallos de red y sincronización periódica de resultados.",
    src: "/assets/evidence/nlm-migration--csharp-nlm-integration.png",
  },
  {
    label: "Endpoint /pending · Laboratorio · Postman",
    caption: "Endpoint GET /labs/orders/pending probado con JWT de laboratorio. Respuesta con las órdenes pendientes en formato JSON incluyendo el HL7 v2.5.1 pre-generado para descarga. Laboratorio solo hace pull, no webhooks.",
    src: "/assets/evidence/surescripts-cert--receive-endpoint-postman.png",
  },
  {
    label: "HL7 storage · audit trail · 40K órdenes",
    caption: "Tabla de audit trail en BD: cada HL7 enviado y recibido con timestamp, estado (pending/sent/received/error) y checksum SHA256. 40K+ registros auditables. '¿Qué se envió exactamente?' tiene respuesta en 2 segundos.",
    src: "/assets/evidence/nlm-migration--sql-clinical-tables.png",
  },
]

export function OresLaboratoryApiDetail() {
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
              {" "}&nbsp;/{" "}&nbsp;Healthcare · API Integration
            </div>

            <h1 className="ss-title">
              Cómo automaticé <em>40K órdenes de laboratorio</em> al mes, de 5 días a 4 horas.
            </h1>

            <p className="ss-tldr">
              MediRec procesaba órdenes de laboratorio de forma manual: doctor imprime, lab recibe por email, resultado llega en 2-5 días.{" "}
              <b>Construí ORES, una API centralizada en Laravel que conecta doctores (C#) con 25+ laboratorios externos.
              El doctor crea la orden en abcEHR, el lab la ve en 5 minutos, el resultado vuelve automáticamente.</b>{" "}
              40K+ órdenes/mes. 4-24h. 99.8% uptime.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente",  dd: "MediRec, Inc." },
                { dt: "Año",      dd: "2022 (6 meses)" },
                { dt: "Rol",      dd: "Backend Lead · API Architecture" },
                { dt: "Sector",   dd: "Healthcare · Laboratory Integration" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">Órdenes/mes</div>
                <div className="num">40K<span style={{ fontSize: "24px", color: "var(--text-2)" }}>+</span></div>
                <div className="sub">Procesadas automáticamente. Antes: manual con retrasos de días.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Tiempo de entrega</div>
                <div className="num">4-24<span style={{ fontSize: "18px", color: "var(--text-2)" }}>h</span></div>
                <div className="sub">Antes: 2-5 días con proceso manual y transcripción.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Laboratorios</div>
                <div className="num">25<span style={{ fontSize: "24px", color: "var(--text-2)" }}>+</span></div>
                <div className="sub">Conectados sin cambiar su infraestructura.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Uptime</div>
                <div className="num">99.8<span style={{ fontSize: "24px", color: "var(--text-2)" }}>%</span></div>
                <div className="sub">Post-estabilización. 1.5% de fallos por datos inválidos, no del sistema.</div>
              </div>
            </div>

            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">Órdenes de laboratorio que tardaban 2-5 días y llegaban con errores.</h2>
              <div className="ss-prose">
                <p>Antes de 2022, MediRec no tenía integración con laboratorios externos. El flujo era completamente manual: <b>el doctor creaba la orden en abcEHR, la imprimía o enviaba por email, el laboratorio la recibía 24 horas después</b>, procesaba la muestra, llamaba al doctor, y el doctor ingresaba los resultados manualmente en el sistema.</p>
                <p>Timeline promedio: 2-5 días. Tasa de error por transcripción manual: 5-10%. Sin trazabilidad. Sin forma de saber en qué paso estaba una orden. Y el doctor sin poder ver resultados sin depender de una llamada del laboratorio.</p>
              </div>
            </section>

            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">25+ laboratorios con infraestructura heterogénea, HL7 no estándar y multi-cliente.</h2>
              <p className="ss-sec-lede">El problema no era hacer una integración. Era hacer una que funcionara para 25+ laboratorios distintos, sin cambiar nada en su infraestructura.</p>
              <ul className="ss-bullets">
                {challengeBullets.map(({ n, bold, rest }) => (
                  <li key={n} data-n={n}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
            </section>

            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Arquitectura de ORES, API Laravel, integración C# y onboarding de 25 laboratorios.</h2>
              <div className="ss-prose">
                <p>Diseñé ORES (Orders and Results Exchange System) desde la arquitectura hasta el deployment. Construí la API Laravel, la integración en abcEHR y el proceso de onboarding que permitió conectar 25 laboratorios en 6 meses.</p>
                <ul className="ss-role-list">
                  <li>diseño de la arquitectura ORES: schema de BD, modelo de autenticación, pull vs. push,</li>
                  <li>implementación del core API: autenticación diferenciada, CRUD de órdenes, HL7 parsing y generación,</li>
                  <li>integración en abcEHR: serialización C#, retry automático, sync periódico de resultados,</li>
                  <li>parser HL7 robusto que tolera variaciones entre laboratorios,</li>
                  <li>onboarding de los primeros 25 laboratorios con guía de integración,</li>
                  <li>y monitoring 24/7 con alertas de downtime y métricas de uso.</li>
                </ul>
              </div>
            </section>

            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Cuatro decisiones que permitieron escalar de 0 a 40K órdenes/mes.</h2>
              <p className="ss-sec-lede">Cada decisión apuntaba a la misma meta: <b>una integración que funcione para todos los laboratorios sin requerir cambios en ninguno.</b></p>
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
              <h2 className="ss-sec-title">ORES como intermediario central entre doctores y laboratorios.</h2>

              <div className="ss-breakout">
                <div className="ss-arch">
                  <div className="ss-arch-head">
                    <span><span aria-hidden="true">▎ </span>flujo ORES · doctor → laboratorio → resultado</span>
                    <span className="right"><span>Laravel 10</span><span>PHP 8.1</span><span>HL7 v2.5.1</span></span>
                  </div>
                  <div className="ss-arch-body">
                    <div className="lf-arch-flow">
                      <div className="ss-node">
                        <div className="role">EHR desktop</div>
                        <h4>abcEHR · C#</h4>
                        <p>POST /orders · API key</p>
                      </div>
                      <div className="ss-arrow">
                        <span className="lbl">JSON order</span>
                        <span className="line" />
                        <span className="sub">HTTPS</span>
                      </div>
                      <div className="ss-node gw">
                        <div className="role">★ API central</div>
                        <h4>ORES · Laravel</h4>
                        <p>Valida · genera HL7 · audita</p>
                      </div>
                      <div className="ss-arrow">
                        <span className="lbl">GET /pending · HL7</span>
                        <span className="line" />
                        <span className="sub">JWT · pull 5min</span>
                      </div>
                      <div className="ss-node">
                        <div className="role">25+ laboratorios</div>
                        <h4>Labs externos</h4>
                        <p>Procesa · POST /result</p>
                      </div>
                    </div>
                  </div>
                  <div className="ss-arch-foot">
                    <div className="f"><div className="l">Auth</div><div className="v">API keys para doctores (C#) · JWT 2h para labs (web)</div></div>
                    <div className="f"><div className="l">HL7</div><div className="v">v2.5.1 parseado y generado · checksum SHA256 · almacenado en BD</div></div>
                    <div className="f"><div className="l">Output</div><div className="v">HL7 para labs · PDF para doctores · audit trail completo</div></div>
                    <div className="f"><div className="l">Stack</div><div className="v">Laravel 10 · PHP 8.1 · MySQL 8 · TCPDF · Monolog · REST API</div></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="resultado">
              <div className="ss-sec-eyebrow">06 · Resultado</div>
              <h2 className="ss-sec-title">40K órdenes/mes. 25+ labs. 4-24h. Sin intervención manual.</h2>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">Órdenes/mes</div>
                  <div className="v">40K+</div>
                  <div className="d">Procesadas automáticamente. Cero intervención manual del staff administrativo.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Tiempo</div>
                  <div className="v">4-24h</div>
                  <div className="d">Antes: 2-5 días. Reducción del 82% en tiempo de entrega de resultados.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Labs conectados</div>
                  <div className="v">25+</div>
                  <div className="d">Sin cambiar su infraestructura. Onboarding nuevo lab: 1-2 días con la guía.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Uptime</div>
                  <div className="v">99.8%</div>
                  <div className="d">Post-estabilización. Tasa de éxito 98.5%. 1.5% fallos por datos inválidos.</div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">Documentación para que cualquier laboratorio nuevo pueda integrarse sin asistencia.</h2>
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
                <q>Antes las órdenes se perdían, los resultados llegaban tarde y los doctores tenían que ingresar todo manualmente. Ahora es automático. <em>Redujo el tiempo en 80%.</em></q>
                <div className="attr">Director de Operaciones · MediRec, Inc.</div>
              </div>
            </section>

            <section className="ss-sec" id="flujo">
              <div className="ss-sec-eyebrow">08 · El flujo</div>
              <h2 className="ss-sec-title">La arquitectura y el flujo completo documentados.</h2>
              <p className="ss-sec-lede">Diagrama de flujo, integración C#, endpoint de laboratorios y audit trail. El sistema de punta a punta en 4 capturas.</p>

              <EvidenceCarousel slides={evidenceSlides} />
            </section>

            <div className="ss-end-cta">
              <div>
                <h3>¿Tienes un flujo manual que podría ser una API?</h3>
                <p>Integraciones healthcare, HL7, APIs para sistemas legacy. Si el proceso manual existe porque nadie lo automatizó todavía, hablemos.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20ORES%20y%20tengo%20algo%20parecido"
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
          aria-controls="ores-mobile-menu"
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
            id="ores-mobile-menu"
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
