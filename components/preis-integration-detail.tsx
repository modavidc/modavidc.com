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
  { id: "compliance",   label: "Ley 169",         n: "08" },
]

const challengeBullets = [
  { n: "01", bold: "HL7 v2.5.1 variante Puerto Rico", rest: ": 62 códigos de vacunas únicos (tabla 0292), campos de raza y etnicidad locales, formato de apellido doble estricto. Garcia Lopez Juan no es válido: debe ser Garcia^Lopez^Juan." },
  { n: "02", bold: "Especificación que cambia sin previo aviso", rest: ": la versión 2.2 del Local Implementation Guide llegó en abril 2022 con nuevos códigos y cambios de validación. El gobierno notifica cuando puede." },
  { n: "03", bold: "mTLS obligatorio con certificados del gobierno", rest: ": CSR generado localmente, firmado por PREIS, instalado en el servidor. Sin certificado válido no se puede enviar nada al registro." },
  { n: "04", bold: "Cero tolerancia a errores de formato", rest: ": un campo mal formado devuelve NACK. La clínica queda en incumplimiento legal hasta que se corrija y reenvíe dentro de las 24 horas." },
  { n: "05", bold: "Programa C# de escritorio en múltiples clínicas", rest: ": cualquier cambio en el cliente requiere deployment en cada instalación. No era opción hacer cambios frecuentes por cliente." },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "Gateway separado del desktop C#",
    body: "MediRec opera en múltiples clínicas. Cada cambio en el programa de escritorio requiere deployment físico en cada instalación. Un API gateway independiente concentra toda la variabilidad regulatoria en un solo punto.",
    why: "Cuando PREIS actualizó a v2.2 en abril 2022, actualicé solo el Laravel. Cero deployments de escritorio, cero riesgo operativo.",
  },
  {
    n: "Decisión 02",
    title: "Validación en 3 niveles independientes",
    body: "El C# valida que el paciente existe, la vacuna es válida y la fecha está en rango. El gateway valida el mensaje HL7 completo: campos requeridos, códigos tabla 0292, formato de apellido. PREIS valida en su base de datos. Cada nivel rechaza errores distintos.",
    why: "Un NACK de PREIS cuesta días de ciclo de corrección. Validar antes de salir protege los intentos de envío.",
  },
  {
    n: "Decisión 03",
    title: "Diferenciar errores transitorios de errores de datos",
    body: "Timeout o fallo de red: reintentar con backoff exponencial. Error de datos, por ejemplo código de vacuna inválido o paciente duplicado: fallar inmediatamente con mensaje al C#. No reintentar lo que siempre va a fallar.",
    why: "La cola Redis no se satura con reintentos infinitos. Los 8 rechazos históricos fueron todos errores de datos, manejados correctamente.",
  },
  {
    n: "Decisión 04",
    title: "Mapeo de códigos centralizado y versionado",
    body: "Un archivo único define el mapeo: código MediRec → código tabla 0292. Si PREIS agrega un código nuevo, actualizo ese archivo. Las 3 clínicas lo reciben sin ningún cambio de código en la integración.",
    why: "El mapeo es la mayor fuente histórica de errores. Centralizarlo lo hace auditable, testeable y actualizable en minutos.",
  },
]

const deliverables = [
  { n: "01", title: "Tabla de mapeo de 62 códigos de vacunas", desc: "Código MediRec → tabla 0292 PREIS. 62 entradas con código CVX, fabricante y descripción. Versionada en git, actualizada con cada revisión del Local Guide." },
  { n: "02", title: "Tabla de fabricantes (tabla 0227)", desc: "PFIZER → PFR, MODERNA → MOD, JANSSEN → JSN. Requerida en el segmento RXA-17 del mensaje HL7 según la spec PR local." },
  { n: "03", title: "CSR template para renovación de certificados", desc: "Plantilla lista para el próximo ciclo de renovación. Proceso documentado: generar CSR, enviar al gobierno, instalar certificado firmado, validar en sandbox PREIS." },
  { n: "04", title: "50+ test cases por tipo de vacuna", desc: "Casos de éxito y casos de error: COVID Pfizer, Moderna, Flu, Hepatitis B, HPV, MMR. Escenarios NACK por campo inválido incluidos y automatizados." },
  { n: "05", title: "Error code reference (tabla 0533)", desc: "Qué significa cada NACK de PREIS y qué acción tomar: corregir datos, reintentar o escalar a soporte del gobierno (contacto: PREIS helpdesk)." },
  { n: "06", title: "Runbook operativo de 10 pasos", desc: "Cómo renovar certificados, debuggear con logs Monolog, qué hacer si PREIS cambia spec, cómo escalar a una clínica nueva sin tocar código." },
]

const evidenceSlides = [
  {
    label: "Arquitectura · PREIS Integration · MediRec",
    caption: "Flujo completo de la integración: MediRec C# Desktop envía JSON al API Gateway en Laravel. El gateway valida, construye el mensaje HL7 v2.5.1 según la spec PR local v2.2 y lo envía vía mTLS al servidor PREIS del Gobierno de Puerto Rico.",
    src: "/assets/evidence/surescripts-cert--aws-architecture.png",
  },
  {
    label: "HL7 v2.5.1 · Builder · Gateway Laravel",
    caption: "Implementación del builder HL7 en Laravel. Construye segmentos MSH, PID, ORC, RXA y OBX según la spec PR local v2.2. Valida apellido doble, código de vacuna (tabla 0292) y fabricante (tabla 0227) antes de serializar el mensaje.",
    src: "/assets/evidence/surescripts-cert--send-method-core.png",
  },
  {
    label: "Endpoint PREIS · Envío VXU · Postman",
    caption: "Prueba del endpoint de envío con mensaje VXU completo al sandbox PREIS. Respuesta ACK del servidor del gobierno. Misma configuración mTLS que producción: certificado X.509 firmado por PREIS.",
    src: "/assets/evidence/surescripts-cert--receive-endpoint-postman.png",
  },
  {
    label: "Tabla 0292 · 62 códigos de vacunas · PREIS",
    caption: "Fragmento del mapeo centralizado: código MediRec → código CVX (tabla 0292) → fabricante (tabla 0227). Esta tabla es la fuente de verdad del gateway. Versionada en git, actualizada en la revisión v2.2 de abril 2022.",
    src: "/assets/evidence/nlm-migration--sql-clinical-tables.png",
  },
]

export function PreisIntegrationDetail() {
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
            {/* Breadcrumb */}
            <div className="ss-crumb">
              <Link href="/casos-de-exito">Casos de éxito</Link>
              {" "}&nbsp;/{" "}&nbsp;Gov-Tech · Healthcare
            </div>

            <h1 className="ss-title">
              Cómo automaticé <em>1,200+ reportes</em> al Gobierno de PR con 99.2% éxito.
            </h1>

            <p className="ss-tldr">
              MediRec tenía que reportar vacunaciones al Gobierno de Puerto Rico dentro de 24 horas por ley
              y lo hacía en Excel manual.{" "}
              <b>Diseñé un API gateway en PHP/Laravel que traduce datos C# a HL7 v2.5.1 local y los envía
              por mTLS al PREIS del gobierno.</b>{" "}
              Cuatro años, 1,200+ reportes, 99.2% de éxito, sin intervención manual.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente",  dd: "MediRec, Inc." },
                { dt: "Período",  dd: "2021 — 2025" },
                { dt: "Rol",      dd: "Tech Lead · Gov-Tech Integration" },
                { dt: "Sector",   dd: "Healthcare · Puerto Rico" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            {/* Hero metrics */}
            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">VXU enviados</div>
                <div className="num">1,200<span style={{ fontSize: "24px", color: "var(--text-2)" }}>+</span></div>
                <div className="sub">Reportes de vacunación automáticos desde launch hasta enero 2025.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Tasa de éxito</div>
                <div className="num">99.2<span style={{ fontSize: "24px", color: "var(--text-2)" }}>%</span></div>
                <div className="sub">8 rechazos históricos, todos por datos inválidos del paciente, no del gateway.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Años en producción</div>
                <div className="num">4</div>
                <div className="sub">En operación continua desde mayo 2022. Cero downtime post-estabilización.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Clínicas activas</div>
                <div className="num">3</div>
                <div className="sub">Clínicas MCHC de Puerto Rico. Escalar una más: 0 cambios de código.</div>
              </div>
            </div>

            {/* 01 Contexto */}
            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">Un proceso manual de 2-3 horas semanales en riesgo legal constante.</h2>
              <div className="ss-prose">
                <p>MediRec es un EHR basado en C# que opera en clínicas de Puerto Rico. Desde 2019, la <b>Ley 169 exige reportar cada vacunación al PREIS</b>, el Registro de Inmunizaciones del Gobierno de Puerto Rico, dentro de las 24 horas de su aplicación.</p>
                <p>El proceso antes de la integración era completamente manual: el personal exportaba vacunaciones a Excel, subía el archivo al portal web de PREIS, esperaba la respuesta del gobierno, corregía los errores de formato HL7 que el portal rechazaba, y resubía. Todo eso <b>2-3 horas semanales</b>, con riesgo real de incumplimiento si el portal caía o los formatos no coincidían.</p>
                <p>PREIS solo entiende <b>HL7 v2.5.1</b>, un estándar médico de los años 90 con una variante específica para Puerto Rico: 62 códigos de vacunas locales, campos de raza y etnicidad propios, y un formato de apellido doble estricto que la mayoría de sistemas no implementa correctamente.</p>
              </div>
            </section>

            {/* 02 Desafío */}
            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">Un estándar de los años 90, con variante local, certificados del gobierno y cero margen de error.</h2>
              <p className="ss-sec-lede">El problema técnico no era enviar datos al gobierno. Era construir exactamente el mensaje que PREIS espera, con los campos correctos, en el formato correcto, con los certificados correctos.</p>
              <ul className="ss-bullets">
                {challengeBullets.map(({ n, bold, rest }) => (
                  <li key={n} data-n={n}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
            </section>

            {/* 03 Mi rol */}
            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Diseño, implementación y 4 años de operación del gateway completo.</h2>
              <div className="ss-prose">
                <p>Lideré todo el trabajo técnico desde el análisis hasta la operación en producción. Investigué la spec HL7 Local Implementation Guide v2.2 de PREIS, mapeé los 62 códigos de vacunas de la tabla 0292, implementé el gateway en Laravel, coordiné la integración con el equipo que mantenía el C# y gestioné la relación con el gobierno (Norma Castro y José Alvelo en PREIS) para obtener los certificados mTLS.</p>
                <p>El trabajo incluyó:</p>
                <ul className="ss-role-list">
                  <li>diseño de la arquitectura del gateway desacoplado del desktop,</li>
                  <li>implementación del builder HL7 v2.5.1 según la spec PR local v2.2,</li>
                  <li>validación en 3 niveles con manejo inteligente de errores,</li>
                  <li>gestión de certificados mTLS con el gobierno,</li>
                  <li>testing en sandbox PREIS y rollout a producción,</li>
                  <li>y soporte continuo durante 4 años de operación.</li>
                </ul>
                <p>También actualicé el gateway cuando PREIS lanzó la revisión v2.2 en abril 2022, sin tocar el programa C# de los médicos.</p>
              </div>
            </section>

            {/* 04 Mi criterio */}
            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Cuatro decisiones que hacen el sistema robusto ante cambios del gobierno.</h2>
              <p className="ss-sec-lede">Cada decisión respondía al mismo principio: <b>la regulación cambia, la integración tiene que sobrevivirlo sin intervención masiva.</b></p>
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
              <h2 className="ss-sec-title">Gateway desacoplado como único punto de traducción regulatoria.</h2>
              <p className="ss-sec-lede">El C# no sabe que existe HL7. El PREIS no sabe que existe C#. El gateway en Laravel es el único punto que habla los dos idiomas.</p>

              <div className="ss-breakout">
                <div className="ss-arch">
                  <div className="ss-arch-head">
                    <span><span aria-hidden="true">▎ </span>flujo de integración · PREIS · Puerto Rico</span>
                    <span className="right"><span>PHP 8.1</span><span>Laravel 10</span><span>HL7 v2.5.1</span></span>
                  </div>

                  <div className="ss-arch-body">
                    <div className="lf-arch-flow">
                      <div className="ss-node">
                        <div className="role">Desktop client</div>
                        <h4>MediRec · C#</h4>
                        <p>JSON · paciente, vacuna, fecha, clínica</p>
                      </div>
                      <div className="ss-arrow">
                        <span className="lbl">POST JSON</span>
                        <span className="line" />
                        <span className="sub">HTTPS</span>
                      </div>
                      <div className="ss-node gw">
                        <div className="role">★ API Gateway</div>
                        <h4>PHP 8.1 · Laravel 10</h4>
                        <p>Valida · construye HL7 · cola Redis</p>
                      </div>
                      <div className="ss-arrow">
                        <span className="lbl">HL7 VXU v2.5.1</span>
                        <span className="line" />
                        <span className="sub">mTLS · TLS 1.2</span>
                      </div>
                      <div className="ss-node">
                        <div className="role">Registro Nacional</div>
                        <h4>PREIS · Gobierno PR</h4>
                        <p>ACK → éxito / NACK → error tabla 0533</p>
                      </div>
                    </div>
                  </div>

                  <div className="ss-arch-foot">
                    <div className="f"><div className="l">Protocolo</div><div className="v">HL7 v2.5.1 · Local Implementation Guide v2.2 (abril 2022)</div></div>
                    <div className="f"><div className="l">Seguridad</div><div className="v">mTLS · TLS 1.2 · Certificados X.509 del gobierno</div></div>
                    <div className="f"><div className="l">Queue</div><div className="v">Redis · backoff exponencial · TTL 23.5h</div></div>
                    <div className="f"><div className="l">Observabilidad</div><div className="v">Monolog · log de ACK/NACK · audit trail completo</div></div>
                  </div>
                </div>
              </div>

              <div className="ss-criterio-grid" style={{ marginTop: "32px" }}>
                {[
                  { label: "Backend", tags: ["PHP 8.1", "Laravel 10", "MySQL", "Redis Queue", "Monolog", "PHPUnit"] },
                  { label: "Protocolo", tags: ["HL7 v2.5.1", "VXU Message", "ACK / NACK", "Tabla 0292", "Tabla 0227", "Tabla 0533"] },
                  { label: "Seguridad", tags: ["mTLS (TLS 1.2)", "X.509 Certificates", "CSR gov-signed", "HTTPS"] },
                  { label: "Desktop client", tags: ["C# .NET", "JSON serialization", "Retry automático", "Sync periódico"] },
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

            {/* 06 Resultado */}
            <section className="ss-sec" id="resultado">
              <div className="ss-sec-eyebrow">06 · Resultado</div>
              <h2 className="ss-sec-title">1,200+ reportes automáticos. Cero proceso manual. Cuatro años sin incidentes.</h2>
              <p className="ss-sec-lede">El médico registra la vacuna en C#. El gateway hace el resto. Las clínicas cumplen la ley sin pensar en ello.</p>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">VXU enviados</div>
                  <div className="v">1,200+</div>
                  <div className="d">Reportes de vacunación al gobierno desde mayo 2022 hasta enero 2025.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Tasa de éxito</div>
                  <div className="v">99.2%</div>
                  <div className="d">8 rechazos históricos, todos errores de datos del paciente. El gateway no falló.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Tiempo manual</div>
                  <div className="v">0</div>
                  <div className="d">Antes: 2-3 horas semanales en Excel. Ahora: cero intervención del personal.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Latencia PREIS</div>
                  <div className="v">&lt;200ms</div>
                  <div className="d">Respuesta del servidor del gobierno. Post-estabilización: uptime 100%.</div>
                </div>
              </div>
            </section>

            {/* 07 Lo que dejé */}
            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">Documentación para operar sin depender de mí.</h2>
              <p className="ss-sec-lede">El entregable no fue solo la integración. Fue dejar al equipo capaz de renovar certificados, actualizar specs y escalar clínicas nuevas <b>sin necesitar retroalimentación mía.</b></p>
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
                <q>Escalar a una clínica nueva es agregar las credenciales en la tabla. <em>Cero cambios de código, cero contacto conmigo.</em></q>
                <div className="attr">Runbook operativo · sección "Nuevas clínicas"</div>
              </div>
            </section>

            {/* 08 Compliance */}
            <section className="ss-sec" id="compliance">
              <div className="ss-sec-eyebrow">08 · Ley 169 de 2019</div>
              <h2 className="ss-sec-title">Cumplimiento automático. Sin excepción, sin intervención.</h2>
              <p className="ss-sec-lede">La Ley 169 de 2019 de Puerto Rico exige reportar cada vacunación al registro nacional dentro de las 24 horas de su aplicación. Antes de la integración, cada semana era un riesgo de incumplimiento.</p>

              <div className="ss-prose">
                <p>El gateway cambia la ecuación: cuando el médico registra la vacuna en C#, el reporte sale en minutos. Si PREIS no responde, <b>la cola Redis reintenta con backoff exponencial durante hasta 23.5 horas</b>. El cumplimiento está garantizado por diseño, no por disciplina manual.</p>
                <p>Las 3 clínicas MCHC están en cumplimiento continuo desde mayo 2022. Ningún reporte perdido. Ninguna multa. Ninguna semana de riesgo legal.</p>
              </div>

              <EvidenceCarousel slides={evidenceSlides} />
            </section>

            {/* CTA */}
            <div className="ss-end-cta">
              <div>
                <h3>¿Tienes una integración con el gobierno o un regulador?</h3>
                <p>HL7, FHIR, APIs gubernamentales, compliance específico por jurisdicción. Si el problema tiene specs complejas y cero margen de error, hablemos.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20PREIS%20y%20tengo%20algo%20parecido"
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
          aria-controls="preis-mobile-menu"
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
            id="preis-mobile-menu"
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
