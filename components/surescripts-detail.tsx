"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { EvidenceCarousel } from "@/components/evidence-carousel"

const tocSections = [
  { id: "contexto",      label: "Contexto",     n: "01" },
  { id: "desafio",       label: "Desafío",      n: "02" },
  { id: "rol",           label: "Mi rol",        n: "03" },
  { id: "criterio",      label: "Mi criterio",   n: "04" },
  { id: "arquitectura",  label: "Arquitectura",  n: "05" },
  { id: "resultado",     label: "Resultado",     n: "06" },
  { id: "dejado",        label: "Lo que dejé",   n: "07" },
  { id: "certificacion", label: "Certificación", n: "08" },
]

const challengeBullets = [
  { n: "01", bold: "Actualización de transacciones NCPDP SCRIPT", rest: " a la versión 2017071 manteniendo XML legacy compatible." },
  { n: "02", bold: "Nueva API de integración desarrollada desde cero", rest: " en Laravel, paralela a la app desktop .NET." },
  { n: "03", bold: "Compatibilidad operativa", rest: " entre el sistema desktop .NET de los médicos y la nueva API." },
  { n: "04", bold: "Conectividad mTLS + X.509", rest: ", TLS 1.2 y hardening para superar el control de Surescripts." },
  { n: "05", bold: "Validación individual", rest: " de cada transacción clínica, secuenciada y dependiente." },
  { n: "06", bold: "Documentación técnica extensa", rest: ": la guía principal de certificación superaba las 260 páginas, y el estándar NCPDP SCRIPT cubre cientos de variantes y reglas de validación. No era documentación deficiente, era densa, y requería leerla con criterio técnico." },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "Gateway separado del desktop",
    body: "Con abcEHR en múltiples clínicas, cada cambio en el .NET requeriría deployment cliente por cliente. Un API gateway independiente concentra la variabilidad regulatoria en un punto.",
    why: "Cuando Surescripts cambia algo, se actualiza el API, no el desktop.",
  },
  {
    n: "Decisión 02",
    title: "Certificar de a una transacción",
    body: "Surescripts valida transacciones en secuencia. Enfocar el ciclo de a una a la vez evitaba bloqueos: si NewRx estaba en revisión, RxRenewal podía avanzar en paralelo.",
    why: "Quita el riesgo de que una falla bloquee toda la batería.",
  },
  {
    n: "Decisión 03",
    title: "Validar antes de salir del API",
    body: "Un mensaje mal formado genera un ciclo de corrección por email con días de espera. Validar XML, campos requeridos y códigos dentro del API antes de enviar protegía los intentos de certificación.",
    why: "Cada envío fallido cuesta días; cada envío válido cuesta minutos.",
  },
  {
    n: "Decisión 04",
    title: "Laravel como capa de integración",
    body: "El equipo ya conocía PHP. Usar Laravel como capa de integración reducía la curva de adopción y permitía que mantuvieran la integración sin depender de mí después del handoff.",
    why: "La autonomía del equipo es parte del entregable, no un extra.",
  },
]

const deliverables = [
  { n: "01", title: "Runbook interno de integración", desc: "Procedimientos paso a paso para operar el gateway en producción." },
  { n: "02", title: "Guías de conectividad y autenticación", desc: "mTLS, X.509, rotación de certificados y troubleshooting de handshake." },
  { n: "03", title: "Templates CSR y manejo de certificados", desc: "Plantillas listas para próximas renovaciones sin reconstruir el proceso." },
  { n: "04", title: "Suite de test scenarios", desc: "Cobertura por transacción NCPDP con casos felices y de error." },
  { n: "05", title: "Mapping entre versiones de directorios", desc: "Compatibilidad legacy a 2017071 documentada y versionada." },
  { n: "06", title: "Procedimiento de renovación", desc: "Plantilla para futuras actualizaciones regulatorias sin re-arquitectura." },
]

const evidenceSlides = [
  {
    label: "Certificación oficial · PR-21677",
    caption: "Documento oficial emitido por Tara Collyard, Principal Integration Manager de Surescripts, el 10/23/2023. Cubre las 7 transacciones NCPDP SCRIPT 2017071.",
    src: "/assets/evidence/surescripts-cert--certificado-oficial-pr21677.png",
  },
  {
    label: "Código · send() · surescripts-api",
    caption: "Método core del cliente Surescripts en Laravel. Valida tipo de suministro, drug exceptions, medicamento controlado y farmacia activa antes de enviar hacia Surescripts.",
    src: "/assets/evidence/surescripts-cert--send-method-core.png",
  },
  {
    label: "Endpoint receive · NCPDP SCRIPT · Postman",
    caption: "Endpoint /receive probado con mensaje NCPDP SCRIPT XML desde el entorno de certificación. Transacción Status con Header, MessageID y Body completos.",
    src: "/assets/evidence/surescripts-cert--receive-endpoint-postman.png",
  },
  {
    label: "Infraestructura · AWS · surescripts-api",
    caption: "Diagrama de arquitectura AWS del proyecto. Laravel sobre EC2, HTTPS con TLS 1.2 y mTLS bilateral con certificados X.509 firmados por Surescripts.",
    src: "/assets/evidence/surescripts-cert--aws-architecture.png",
  },
]

export function SurescriptsDetail() {
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

  // Close mobile TOC on Escape
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

          {/* Article */}
          <article>
            {/* Hero */}
            <div className="ss-crumb">
              <Link href="/casos-de-exito">Casos de éxito</Link>
              {" "}&nbsp;/{" "}&nbsp;Healthcare · Integration
            </div>

            <h1 className="ss-title">
              Cómo recertifiqué <em>Surescripts</em> en 22 días sin downtime
            </h1>

            <p className="ss-tldr">
              MediRec necesitaba <b>recertificar 7 transacciones clínicas</b> en abcEHR
              ante un cambio de estándar regulatorio. Diseñé una nueva arquitectura
              desacoplada en Laravel y <b>obtuve la certificación oficial en 22 días
              sin interrumpir operación</b>.
            </p>

            {/* FIX 1: dl anidado → div dentro de dl */}
            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente",  dd: "MediRec, Inc." },
                { dt: "Año",      dd: "Oct 2023" },
                { dt: "Rol",      dd: "Tech Lead · Arquitectura de soluciones" },
                { dt: "Sector",   dd: "Healthcare · USA" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            {/* Hero metrics — FIX 2: PR-21677 sin override de font-size */}
            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">Transacciones</div>
                <div className="num">7/7</div>
                <div className="sub">NewRx, RxRenewal, RxChange, CancelRx, Status, Error, Verify. Todas certificadas.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Red de farmacias</div>
                <div className="num">260K+</div>
                <div className="sub">Farmacias en USA accesibles desde abcEHR vía Surescripts.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Recertificación</div>
                <div className="num">
                  22 <span style={{ fontSize: "24px", color: "var(--text-2)" }}>días</span>
                </div>
                <div className="sub">De inicio del trabajo a aprobación oficial, sin bloqueo regulatorio.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Certificación oficial</div>
                <div className="num ss-num-sm">PR-21677</div>
                <div className="sub">Otorgada el 10/23/2023. NCPDP SCRIPT 2017071 compliant.</div>
              </div>
            </div>

            {/* 01 Contexto */}
            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">Una integración madura que dejó de cumplir.</h2>
              <div className="ss-prose">
                <p>MediRec ya operaba ePrescribing en abcEHR. La evolución de los estándares regulatorios de Surescripts y NCPDP requería una recertificación completa de la plataforma.</p>
                <p>La actualización implicaba <b>adaptar la integración existente</b> hacia nuevas versiones del estándar clínico, mantener compatibilidad operativa y garantizar continuidad sobre los workflows reales de prescripción electrónica.</p>
                <p>El objetivo era <b>conservar conectividad con la red nacional de farmacias</b> de Estados Unidos sin interrumpir la operación clínica.</p>
              </div>
            </section>

            {/* 02 Desafío — FIX 4: ámbar con ss-sec--risk */}
            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">Múltiples capas técnicas, validación coordinada y cero margen para bloqueos.</h2>
              <p className="ss-sec-lede">La migración cruzaba protocolo regulatorio, infraestructura y lógica clínica. Cualquier desliz volvía el ciclo de certificación en semanas de espera.</p>
              <ul className="ss-bullets">
                {challengeBullets.map(({ n, bold, rest }) => (
                  <li key={n} data-n={n}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
            </section>

            {/* 03 Mi rol */}
            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Lideré técnicamente la migración y recertificación.</h2>
              <div className="ss-prose">
                <p>Diseño e implementación de la nueva API en Laravel, adaptación de los workflows clínicos existentes, integración con el backend desktop .NET que usan los médicos, e implementación de conectividad segura vía mTLS.</p>
                <p>También conduje el <b>troubleshooting regulatorio</b>, la coordinación de pruebas de certificación y el soporte técnico durante el ciclo completo de validación oficial, trabajando directamente con los técnicos de integración asignados por Surescripts.</p>
              </div>
            </section>

            {/* 04 Mi criterio */}
            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Cuatro decisiones de arquitectura que comprimieron el ciclo regulatorio.</h2>
              <p className="ss-sec-lede">Cada una respondió a una fricción específica del proceso de certificación. Juntas convirtieron 22 días en algo posible.</p>
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
              <div className="ss-sec-eyebrow">05 · Arquitectura técnica</div>
              <h2 className="ss-sec-title">Una capa de integración que aísla al cliente del regulador.</h2>
              <p className="ss-sec-lede">El gateway en Laravel concentra protocolo, autenticación y validación. El desktop .NET de los médicos solo conoce un endpoint REST estable.</p>

              <div className="ss-breakout">
                <div className="ss-arch">
                  {/* FIX 3: aria-hidden en ▎ decorativo */}
                  <div className="ss-arch-head">
                    <span><span aria-hidden="true">▎ </span>diagrama de integración · production topology</span>
                    <span className="right"><span>v 2.0</span><span>oct 2023</span></span>
                  </div>

                  <div className="ss-arch-body">
                    <div className="ss-arch-grid">
                      <div className="ss-node">
                        <div className="role">Clinical workstation</div>
                        <h4>Desktop .NET</h4>
                        <p>App C# usada por médicos en clínicas. Hace requests REST a un único endpoint estable.</p>
                        <div className="chips">
                          <span className="chip">C#</span>
                          <span className="chip">.NET</span>
                          <span className="chip">REST client</span>
                        </div>
                      </div>

                      <div className="ss-arrow">
                        <span className="lbl">REST · JWT</span>
                        <span className="line" />
                        <span className="sub">contrato estable</span>
                      </div>

                      <div className="ss-node gw">
                        <div className="role">★ Integration gateway</div>
                        <h4>API Laravel 8</h4>
                        <p>Concentra protocolo, autenticación, validación XML y mapeo a NCPDP. Único punto de cambio regulatorio.</p>
                        <div className="chips">
                          <span className="chip">Laravel 8</span>
                          <span className="chip">PHP 7.3 / 8.0</span>
                          <span className="chip">JWT Auth</span>
                          <span className="chip">Guzzle</span>
                        </div>
                      </div>

                      <div className="ss-arrow">
                        <span className="lbl">mTLS · NCPDP</span>
                        <span className="line" />
                        <span className="sub">SCRIPT 2017071</span>
                      </div>

                      <div className="ss-node">
                        <div className="role">Regulatory network</div>
                        <h4>Surescripts</h4>
                        <p>Red privada que conecta con 260K+ farmacias en USA. Valida cada transacción contra el estándar SCRIPT.</p>
                        <div className="chips">
                          <span className="chip">NCPDP SCRIPT 2017071</span>
                          <span className="chip">EPCS workflows</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ss-arch-foot">
                    <div className="f"><div className="l">Backend</div><div className="v">Laravel 8 · PHP 7.3/8.0</div></div>
                    <div className="f"><div className="l">Infra</div><div className="v">Docker · AWS · mTLS</div></div>
                    <div className="f"><div className="l">Calidad</div><div className="v">PHPUnit · Mockery · Sentry</div></div>
                    <div className="f"><div className="l">Compliance</div><div className="v">Surescripts CG · PKI/X.509</div></div>
                  </div>
                </div>
              </div>
            </section>

            {/* 06 Resultado */}
            <section className="ss-sec" id="resultado">
              <div className="ss-sec-eyebrow">06 · Resultado</div>
              <h2 className="ss-sec-title">Certificación oficial, sin interrumpir operación.</h2>
              <p className="ss-sec-lede">Cuatro métricas, una sola lectura: la integración fue aprobada por Surescripts en el primer ciclo de revisión.</p>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">Transacciones</div>
                  <div className="v">7/7</div>
                  <div className="d">NewRx, RxRenewal, RxChange, CancelRx, Status, Error, Verify. Certificadas.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Red de farmacias</div>
                  <div className="v">260K+</div>
                  <div className="d">Farmacias USA accesibles desde abcEHR sin tocar el desktop .NET.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Recertificación</div>
                  <div className="v">22d</div>
                  <div className="d">Segunda certificación completada en 22 días sin bloqueo regulatorio.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Cert. oficial</div>
                  <div className="v ss-v-sm">PR-21677</div>
                  <div className="d">Otorgada el 10/23/2023, TLS 1.2+, NCPDP 2017071 compliant.</div>
                </div>
              </div>
            </section>

            {/* 07 Lo que dejé */}
            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">Artefactos que el equipo opera sin mí.</h2>
              <p className="ss-sec-lede">El entregable real no fue el deploy, fue la autonomía del equipo de MediRec para mantener y recertificar la integración sin dependencia.</p>
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
                <q>El equipo quedó preparado para operar y mantener la integración <em>sin dependencia directa de mí.</em></q>
                <div className="attr">Cierre del engagement, Oct 2023</div>
              </div>
            </section>

            {/* 08 Certificación */}
            <section className="ss-sec" id="certificacion">
              <div className="ss-sec-eyebrow">08 · Prueba</div>
              <h2 className="ss-sec-title">Documento oficial de Surescripts.</h2>
              <p className="ss-sec-lede">Carta firmada por el Principal Integration Manager de Surescripts confirmando la recertificación de las 7 transacciones NCPDP SCRIPT 2017071.</p>
              <EvidenceCarousel slides={evidenceSlides} />
            </section>

            {/* CTA */}
            <div className="ss-end-cta">
              <div>
                <h3>¿Tienes una integración regulatoria parecida?</h3>
                <p>Healthcare, Fintech, Gov. Si el ciclo de certificación te está bloqueando releases, hablemos.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20Surescripts%20y%20tengo%20algo%20parecido"
                  className="ss-primary"
                >
                  Hablemos de tu proyecto →
                </a>
              </div>
            </div>

          </article>
        </div>
      </main>

      {/* FIX 5: TOC mobile — botón flotante + overlay */}
      <div className="ss-mobile-toc" aria-label="Navegación de secciones">
        <button
          className="ss-mobile-toc-btn"
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-controls="ss-mobile-menu"
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
            id="ss-mobile-menu"
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
