"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const tocSections = [
  { id: "contexto",     label: "Contexto",      n: "01" },
  { id: "desafio",      label: "El desafío",     n: "02" },
  { id: "rol",          label: "Mi rol",          n: "03" },
  { id: "criterio",     label: "Mi criterio",     n: "04" },
  { id: "arquitectura", label: "Arquitectura",    n: "05" },
  { id: "resultado",    label: "Resultado",       n: "06" },
  { id: "dejado",       label: "Lo que dejé",     n: "07" },
  { id: "impacto",      label: "El impacto real", n: "08" },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "Mapear procesos antes de escribir código",
    body: "Dediqué las primeras dos semanas a entrevistar funcionarios y documentar cada variante del flujo de aprobación. Sin eso, el sistema hubiera reproducido el caos existente en digital.",
    why: "Un portal que automatiza un proceso roto sigue siendo un proceso roto.",
  },
  {
    n: "Decisión 02",
    title: "Portal web, no app móvil",
    body: "Los ciudadanos usaban el servicio desde dispositivos distintos y muchos no habían instalado nunca una app de gestión. Un portal responsive funcionaba desde el primer clic, sin fricción de instalación.",
    why: "Cada paso de instalación adicional es una oportunidad de abandono.",
  },
  {
    n: "Decisión 03",
    title: "Panel interno con la misma prioridad que el portal público",
    body: "El portal ciudadano sin un backoffice usable crea un cuello de botella interno. Construí el panel de gestión en paralelo. Los funcionarios tenían que poder aprobar, rechazar y comentar sin depender de sistemas legados.",
    why: "Un portal que genera más trabajo interno no reduce tiempos, los redistribuye.",
  },
  {
    n: "Decisión 04",
    title: "Lanzamiento paralelo, no reemplazo abrupto",
    body: "El sistema digital corrió en paralelo con la atención presencial durante 6 semanas. Eso permitió detectar flujos no considerados antes de eliminar la ventanilla para esos trámites.",
    why: "La entidad no corrió el riesgo de dejar ciudadanos sin servicio durante el corte.",
  },
]

const deliverables = [
  { n: "01", title: "Documentación completa del sistema", desc: "Modelo de datos, flujos de aprobación documentados, guía de administración para funcionarios en lenguaje no técnico." },
  { n: "02", title: "Procedimiento de backup diario automatizado", desc: "Script configurado en el servidor con logs y alertas por correo si falla algún paso." },
  { n: "03", title: "Checklist de operación mensual", desc: "Revisión de usuarios activos, trámites pendientes mayores a 48h y limpieza de sesiones expiradas." },
  { n: "04", title: "Guía para agregar un nuevo tipo de trámite", desc: "Paso a paso sin tocar código: nuevo formulario, campos requeridos, flujo de aprobación y notificaciones." },
  { n: "05", title: "Capacitación de dos funcionarios técnicos", desc: "Tres sesiones de 90 minutos. Al mes del lanzamiento gestionaban el sistema de forma completamente autónoma." },
]

export function IndexumAutoservicioDetail() {
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
              {" "}&nbsp;/{" "}&nbsp;Gov-Tech · Full-Stack
            </div>

            <h1 className="ss-title">
              Cómo reduje <em>3 horas de cola a 8 minutos</em> con autoservicio digital ciudadano.
            </h1>

            <p className="ss-tldr">
              Una entidad pública peruana atendía 200 ciudadanos diarios en ventanilla, con 2h50min de espera promedio por trámite.{" "}
              <b>Construí un portal web con Laravel y Vue.js que digitalizó los trámites más frecuentes, con panel de gestión interno para funcionarios.</b>{" "}
              60% de adopción espontánea en 3 meses, sin campaña publicitaria.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente",  dd: "Entidad pública · Lima, Perú" },
                { dt: "Período",  dd: "2019 — 2020" },
                { dt: "Rol",      dd: "Desarrollador principal · Full-Stack" },
                { dt: "Empresa",  dd: "INDEXUM" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">Tiempo por trámite</div>
                <div className="num">8<span style={{ fontSize: "24px", color: "var(--text-2)" }}>min</span></div>
                <div className="sub">Antes: 2h50min promedio en ventanilla presencial.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Trámites al mes</div>
                <div className="num">4,200<span style={{ fontSize: "24px", color: "var(--text-2)" }}>+</span></div>
                <div className="sub">Primeros 90 días post-lanzamiento, superando capacidad presencial anterior.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Adopción digital</div>
                <div className="num">60<span style={{ fontSize: "24px", color: "var(--text-2)" }}>%</span></div>
                <div className="sub">Al mes 3, sin campaña publicitaria.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Incidencias en prod.</div>
                <div className="num">0</div>
                <div className="sub">Ningún incidente de disponibilidad en los primeros 6 meses.</div>
              </div>
            </div>

            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">Una entidad con 200 ciudadanos diarios y 3 horas de espera para un trámite simple.</h2>
              <div className="ss-prose">
                <p>La entidad atendía entre 180 y 220 ciudadanos diarios en ventanilla. Cada solicitud requería presencia física: traer documentos, esperar turno, recibir un formulario impreso, volver otro día a retirar el resultado. El tiempo promedio desde que el ciudadano llegaba hasta que salía con su constancia era de 2 horas 50 minutos.</p>
                <p>INDEXUM fue contratado para modernizar el proceso. La restricción principal era que no se podía interrumpir la atención presencial mientras se implementaba la solución. El equipo interno no tenía experiencia en desarrollo web y no podría mantener un sistema complejo.</p>
              </div>
            </section>

            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">Digitalizar sin romper el proceso existente ni dejar a nadie sin servicio.</h2>
              <p className="ss-sec-lede">El reto no era técnico en el sentido convencional. Era de adopción: si el portal era confuso, los ciudadanos seguirían yendo en persona y la inversión no cambiaría nada.</p>
              <ul className="ss-bullets">
                <li data-n="01"><b>Procesos internos no documentados.</b> Cada funcionario tenía su propio criterio para aprobar o rechazar una solicitud. Antes de construir el portal, había que mapear y estandarizar los flujos.</li>
                <li data-n="02"><b>Usuarios con poca experiencia digital.</b> La mayoría de los ciudadanos que usaban el servicio nunca habían hecho un trámite en línea. La interfaz tenía que ser obvia desde el primer uso.</li>
                <li data-n="03"><b>Presupuesto limitado, equipo interno pequeño.</b> El sistema tenía que ser operable por los propios funcionarios sin depender de INDEXUM para cada cambio.</li>
                <li data-n="04"><b>Lanzamiento sin downtime.</b> La entidad no podía permitirse días sin atención al ciudadano durante la transición.</li>
              </ul>
            </section>

            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Diseño técnico completo, desde el mapeo de procesos hasta la capacitación del equipo.</h2>
              <div className="ss-prose">
                <p>Fui el desarrollador principal del proyecto. Lideré el levantamiento de requerimientos con los funcionarios, diseñé el modelo de datos, construí el backend en Laravel y el frontend en Vue.js. Coordiné las pruebas de aceptación con el equipo de la entidad y gestioné el despliegue en Digital Ocean.</p>
                <p>El trabajo incluyó:</p>
                <ul className="ss-role-list">
                  <li>mapeo de flujos de aprobación con entrevistas a funcionarios,</li>
                  <li>diseño del modelo de datos para trámites, estados y adjuntos,</li>
                  <li>backend Laravel con autenticación separada por rol (ciudadano y funcionario),</li>
                  <li>frontend Vue.js con flujo guiado paso a paso para ciudadanos,</li>
                  <li>panel de gestión interno para aprobación, rechazo y comentarios,</li>
                  <li>y capacitación del equipo para operar el sistema de forma autónoma.</li>
                </ul>
              </div>
            </section>

            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Cuatro decisiones que hicieron la diferencia en adopción.</h2>
              <p className="ss-sec-lede">En Gov-Tech el éxito no es técnico, es de adopción. Cada decisión estuvo orientada a reducir la fricción, no a agregar capacidades.</p>
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
              <h2 className="ss-sec-title">Un monolito bien estructurado, apropiado para el volumen y el equipo.</h2>
              <p className="ss-sec-lede">Sin microservicios: el volumen no lo justificaba y el equipo interno no podría haberlos mantenido.</p>

              <div className="ss-breakout">
                <div className="ss-arch">
                  <div className="ss-arch-head">
                    <span><span aria-hidden="true">▎ </span>flujo de trámite ciudadano · portal web</span>
                    <span className="right"><span>Laravel</span><span>Vue.js</span><span>MySQL</span></span>
                  </div>
                  <div className="ss-arch-body">
                    <div className="lf-arch-flow">
                      <div className="ss-node">
                        <div className="role">Ciudadano</div>
                        <h4>Portal Vue.js</h4>
                        <p>Formulario guiado · adjuntos · seguimiento</p>
                      </div>
                      <div className="ss-arrow">
                        <span className="lbl">HTTPS</span>
                        <span className="line" />
                        <span className="sub">REST API</span>
                      </div>
                      <div className="ss-node gw">
                        <div className="role">★ Core</div>
                        <h4>Laravel API</h4>
                        <p>Auth por rol · estados · notificaciones</p>
                      </div>
                      <div className="ss-arrow">
                        <span className="lbl">Panel web</span>
                        <span className="line" />
                        <span className="sub">Vue.js interno</span>
                      </div>
                      <div className="ss-node">
                        <div className="role">Funcionario</div>
                        <h4>Panel de gestión</h4>
                        <p>Aprobar · rechazar · comentar</p>
                      </div>
                    </div>
                  </div>
                  <div className="ss-arch-foot">
                    <div className="f"><div className="l">Backend</div><div className="v">Laravel · PHP · MySQL · Digital Ocean</div></div>
                    <div className="f"><div className="l">Frontend</div><div className="v">Vue.js · portal ciudadano responsive + panel interno</div></div>
                    <div className="f"><div className="l">Archivos</div><div className="v">Digital Ocean Spaces · adjuntos por trámite</div></div>
                    <div className="f"><div className="l">Notificaciones</div><div className="v">Correo en cada cambio de estado · plantillas por tipo de trámite</div></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="resultado">
              <div className="ss-sec-eyebrow">06 · Resultado</div>
              <h2 className="ss-sec-title">De 3 horas en fila a 8 minutos desde el celular.</h2>
              <p className="ss-sec-lede">El 60% de los trámites elegibles pasaron al portal en 3 meses. Sin campaña, sin obligación, solo porque era más rápido.</p>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">Tiempo por trámite</div>
                  <div className="v">-78%</div>
                  <div className="d">De 2h50min promedio a 8 minutos para completar y enviar la solicitud.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Trámites al mes</div>
                  <div className="v">4,200+</div>
                  <div className="d">Primeros 90 días post-lanzamiento, superando la capacidad presencial anterior.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Adopción digital</div>
                  <div className="v">60%</div>
                  <div className="d">Al mes 3, el 60% de trámites elegibles se hacían por el portal. Sin campaña.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Incidencias</div>
                  <div className="v">0</div>
                  <div className="d">Ningún incidente de disponibilidad durante los primeros 6 meses de operación.</div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">Un sistema que el equipo interno podía operar sin llamar a nadie.</h2>
              <p className="ss-sec-lede">La autonomía del equipo era parte del entregable. Tres meses después del lanzamiento gestionaban el sistema sin contactar a INDEXUM.</p>
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
                <q>Agregar un nuevo tipo de trámite no requiere tocar código. <em>Solo seguir la guía, configurar el formulario y activarlo.</em></q>
                <div className="attr">Guía de administración · sección "Nuevos trámites"</div>
              </div>
            </section>

            <section className="ss-sec" id="impacto">
              <div className="ss-sec-eyebrow">08 · El impacto real</div>
              <h2 className="ss-sec-title">Lo que cambia cuando el Estado deja de hacer perder el tiempo.</h2>
              <div className="ss-prose">
                <p>Las métricas técnicas son claras. Pero el impacto que me quedó fue otro: ciudadanos que antes tenían que pedir permiso en el trabajo para hacer un trámite, ahora lo hacían desde el teléfono en 8 minutos. Eso no aparece en ningún dashboard.</p>
                <p>Este proyecto me enseñó que en Gov-Tech el éxito no es técnico, sino de adopción. Puedes construir el mejor sistema del mundo y fracasar si el flujo no es obvio para alguien que nunca ha hecho un trámite digital. La UX y el proceso importan tanto como el código.</p>
                <p>El -78% en tiempo de trámite no vino de una tecnología más rápida. Vino de eliminar los pasos que existían solo porque nadie los había cuestionado antes.</p>
              </div>
            </section>

            <div className="ss-end-cta">
              <div>
                <h3>¿Tienes un proceso manual que debería estar digitalizado?</h3>
                <p>Formularios en papel, Excel como sistema de gestión, aprobaciones por WhatsApp. Si el proceso existe pero no está sistematizado, puedo ayudarte a cambiarlo.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20de%20autoservicio%20ciudadano"
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
        >
          <nav
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
