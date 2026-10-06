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
  { id: "aprendizaje",  label: "Aprendizaje",     n: "08" },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "Offline-first obligatorio desde el diseño",
    body: "Las zonas agrícolas tenían señal móvil débil o nula en varios puntos. Diseñé la app para que funcionara completamente sin internet y sincronizara automáticamente cuando hubiera señal. Si el coordinador reportaba una incidencia sin conexión, el registro se guardaba localmente y subía al reconectar.",
    why: "Sin offline-first, la app era inútil exactamente donde más se necesitaba.",
  },
  {
    n: "Decisión 02",
    title: "Ionic sobre nativo para moverse rápido",
    body: "Dos plataformas con un equipo de una persona. Ionic con Angular daba iOS y Android desde un solo código. La pérdida de rendimiento frente a nativo era irrelevante para formularios y listas. Nativo hubiera duplicado el tiempo de desarrollo sin beneficio real.",
    why: "La restricción era tiempo, no rendimiento. Ionic era la respuesta correcta para ese contexto.",
  },
  {
    n: "Decisión 03",
    title: "Tres flujos en v1, no doce",
    body: "La primera versión tenía solo tres acciones: reportar incidencia, actualizar inventario, ver alertas. Los coordinadores necesitaban que la app fuera más rápida que el WhatsApp, no más completa. Complejidad extra en v1 hubiera matado la adopción.",
    why: "La métrica de éxito era el uso, no las features.",
  },
  {
    n: "Decisión 04",
    title: "Panel de supervisión separado de la app de campo",
    body: "Los supervisores regionales usaban escritorio. Darles la misma interfaz que los coordinadores de campo no tenía sentido. Construí un panel web separado con mapa de incidencias, inventario consolidado y exportación a Excel, que era el formato que ya conocían.",
    why: "Forzar una interfaz móvil a usuarios de escritorio hubiera reducido la adopción en supervisión.",
  },
]

const deliverables = [
  { n: "01", title: "Documentación técnica de la API", desc: "50+ endpoints con ejemplos de integración. Referencia de errores y casos de retry." },
  { n: "02", title: "Guía de administración del panel para supervisores", desc: "Cómo gestionar coordinadores, ver incidencias activas, exportar reportes y configurar alertas." },
  { n: "03", title: "Manual de uso de la app para coordinadores", desc: "Con capturas de pantalla. Diseñado para usuarios con poca experiencia digital." },
  { n: "04", title: "Runbook de sincronización", desc: "Qué hacer si un dispositivo pierde datos, no sincroniza o tiene conflictos entre registro local y servidor." },
  { n: "05", title: "Procedimiento de onboarding para nuevos coordinadores", desc: "Desde la descarga hasta el primer reporte enviado. Formato que el propio equipo podía replicar." },
]

export function IndexumAgroTechDetail() {
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
              {" "}&nbsp;/{" "}&nbsp;Agrotech · Mobile
            </div>

            <h1 className="ss-title">
              Cómo bajé <em>60% el tiempo de respuesta operativa</em> en campo con una app móvil offline-first.
            </h1>

            <p className="ss-tldr">
              85 coordinadores agrícolas gestionaban incidencias por WhatsApp y llevaban inventario en Excel. El ciclo de respuesta promedio era de 4 a 6 horas.{" "}
              <b>Construí una app Ionic offline-first con panel web para supervisores.</b>{" "}
              94% de adopción en 8 semanas, tiempo de respuesta a 90 minutos, cero paros por inventario en el primer trimestre.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente",  dd: "Cooperativa agrícola · Perú" },
                { dt: "Período",  dd: "2019 — 2020" },
                { dt: "Rol",      dd: "Desarrollador principal · Full-Stack + Mobile" },
                { dt: "Empresa",  dd: "INDEXUM" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">Tiempo de respuesta</div>
                <div className="num">-60<span style={{ fontSize: "24px", color: "var(--text-2)" }}>%</span></div>
                <div className="sub">De 4-6 horas promedio a 90 minutos desde reporte hasta acción del supervisor.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Coordinadores activos</div>
                <div className="num">85<span style={{ fontSize: "24px", color: "var(--text-2)" }}>+</span></div>
                <div className="sub">94% de adopción en las primeras 8 semanas sin incentivos adicionales.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Incidencias trazadas</div>
                <div className="num">100<span style={{ fontSize: "24px", color: "var(--text-2)" }}>%</span></div>
                <div className="sub">Antes, el 40% de incidencias menores nunca llegaba a supervisión.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Paros por inventario</div>
                <div className="num">0</div>
                <div className="sub">Primer trimestre post-lanzamiento. Antes ocurrían semanalmente.</div>
              </div>
            </div>

            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">85 coordinadores, 3 regiones, y un grupo de WhatsApp como sistema de gestión.</h2>
              <div className="ss-prose">
                <p>La cooperativa operaba cultivos en tres regiones del Perú con equipos distribuidos. Cada coordinador supervisaba entre 6 y 12 parcelas. Cuando ocurría una incidencia, la comunicaba por WhatsApp al supervisor regional, quien reenviaba al gerente, quien decidía qué hacer. El ciclo completo tomaba entre 4 y 6 horas.</p>
                <p>El inventario de insumos se llevaba en Excel sin actualización en tiempo real. Era frecuente que un coordinador llegara a campo y encontrara que los insumos necesarios ya habían sido usados por otro equipo sin aviso. Eso generaba paros no planificados y pérdida de horas de trabajo.</p>
              </div>
            </section>

            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">Conectividad intermitente, dispositivos heterogéneos y usuarios sin experiencia digital.</h2>
              <p className="ss-sec-lede">Las zonas agrícolas tenían señal móvil débil o nula en algunos puntos. La app no podía depender de conexión constante.</p>
              <ul className="ss-bullets">
                <li data-n="01"><b>Sin conexión estable en campo.</b> Cualquier acción que requiriera internet en el momento del reporte fallaba exactamente donde más se necesitaba.</li>
                <li data-n="02"><b>Dispositivos heterogéneos.</b> Android de gama baja en la mayoría, iOS en algunos supervisores. Un solo código tenía que funcionar en ambos.</li>
                <li data-n="03"><b>Usuarios sin experiencia con apps de gestión.</b> Si la interfaz era compleja, los coordinadores seguirían usando WhatsApp y la inversión no cambiaría nada.</li>
                <li data-n="04"><b>La dirección quería dashboards, el problema real era visibilidad.</b> Sin datos confiables entrando, ningún dashboard sirve. La prioridad era que los datos llegaran primero.</li>
              </ul>
            </section>

            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Desarrollo completo de la app, el backend y el panel de supervisión.</h2>
              <div className="ss-prose">
                <p>Fui el único desarrollador del proyecto durante las primeras 16 semanas. Diseñé y construí la app en Ionic, el backend API en Laravel y el panel de supervisión web en Vue.js. Coordiné con los coordinadores de campo en dos visitas presenciales para entender sus flujos reales antes de escribir la primera línea.</p>
                <p>El trabajo incluyó:</p>
                <ul className="ss-role-list">
                  <li>visitas a campo para mapear flujos reales de reporte,</li>
                  <li>app Ionic con storage local (SQLite) y sincronización automática,</li>
                  <li>backend Laravel con gestión de estados, alertas y conflictos de sync,</li>
                  <li>panel Vue.js con mapa de incidencias y exportación a Excel,</li>
                  <li>y capacitación del equipo técnico interno de la cooperativa.</li>
                </ul>
              </div>
            </section>

            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Cuatro decisiones que resolvieron el problema real, no el aparente.</h2>
              <p className="ss-sec-lede">El problema aparente era "necesitamos una app". El problema real era "necesitamos visibilidad en campo". Cada decisión estuvo orientada al segundo.</p>
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
              <h2 className="ss-sec-title">App offline-first con sincronización automática y panel web para supervisores.</h2>
              <p className="ss-sec-lede">SQLite local en el dispositivo como fuente de verdad en campo. Sincronización en background cada 5 minutos cuando hay señal.</p>

              <div className="ss-breakout">
                <div className="ss-arch">
                  <div className="ss-arch-head">
                    <span><span aria-hidden="true">▎ </span>flujo de reporte · campo a supervisión</span>
                    <span className="right"><span>Ionic</span><span>Laravel</span><span>Vue.js</span></span>
                  </div>
                  <div className="ss-arch-body">
                    <div className="lf-arch-flow">
                      <div className="ss-node">
                        <div className="role">Coordinador de campo</div>
                        <h4>App Ionic</h4>
                        <p>SQLite local · offline-first · sync automático</p>
                      </div>
                      <div className="ss-arrow">
                        <span className="lbl">Sync cada 5min</span>
                        <span className="line" />
                        <span className="sub">cuando hay señal</span>
                      </div>
                      <div className="ss-node gw">
                        <div className="role">★ Core</div>
                        <h4>Laravel API</h4>
                        <p>Estados · alertas · conflictos de sync</p>
                      </div>
                      <div className="ss-arrow">
                        <span className="lbl">Panel web</span>
                        <span className="line" />
                        <span className="sub">Vue.js</span>
                      </div>
                      <div className="ss-node">
                        <div className="role">Supervisor regional</div>
                        <h4>Panel Vue.js</h4>
                        <p>Mapa · inventario · exportación Excel</p>
                      </div>
                    </div>
                  </div>
                  <div className="ss-arch-foot">
                    <div className="f"><div className="l">App móvil</div><div className="v">Ionic · Angular · SQLite · iOS + Android desde un código</div></div>
                    <div className="f"><div className="l">Backend</div><div className="v">Laravel · PHP · MySQL · Digital Ocean</div></div>
                    <div className="f"><div className="l">Panel web</div><div className="v">Vue.js · Leaflet (mapa de incidencias) · exportación Excel</div></div>
                    <div className="f"><div className="l">Alertas</div><div className="v">Correo al supervisor regional cuando incidencia se marca crítica</div></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="resultado">
              <div className="ss-sec-eyebrow">06 · Resultado</div>
              <h2 className="ss-sec-title">-60% tiempo de respuesta. 94% adopción. Cero paros por inventario.</h2>
              <p className="ss-sec-lede">En 8 semanas, 94% de los coordinadores usaban la app diariamente. Sin incentivos, sin obligación.</p>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">Tiempo de respuesta</div>
                  <div className="v">-60%</div>
                  <div className="d">De 4-6 horas promedio a 90 minutos desde reporte hasta acción del supervisor.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Adopción</div>
                  <div className="v">94%</div>
                  <div className="d">85 de 90 coordinadores activos en las primeras 8 semanas. Sin incentivos adicionales.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Visibilidad de incidencias</div>
                  <div className="v">100%</div>
                  <div className="d">Antes, el 40% de incidencias menores nunca llegaba a supervisión. Ahora todas quedan registradas.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Paros por inventario</div>
                  <div className="v">0</div>
                  <div className="d">Cero paros no planificados por falta de insumos en el primer trimestre post-lanzamiento.</div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">Código, documentación y un equipo que podía mantener el sistema sin INDEXUM.</h2>
              <p className="ss-sec-lede">Tres meses después del lanzamiento, el equipo técnico de la cooperativa operaba y actualizaba el sistema de forma autónoma.</p>
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
                <q>El manual de uso lo redacté pensando en alguien que nunca usó una app de gestión. <em>Si ese coordinador lo entendía, todos lo entenderían.</em></q>
                <div className="attr">Manual de uso · sección "Para coordinadores nuevos"</div>
              </div>
            </section>

            <section className="ss-sec" id="aprendizaje">
              <div className="ss-sec-eyebrow">08 · Aprendizaje</div>
              <h2 className="ss-sec-title">El problema no era velocidad. Era visibilidad.</h2>
              <div className="ss-prose">
                <p>La cooperativa no necesitaba un sistema más rápido para hacer lo mismo. Necesitaba que la información existiera de forma trazable. Antes de la app, el 40% de las incidencias menores nunca llegaba a supervisión porque los coordinadores asumían que no valía la pena reportarlo por WhatsApp. Con la app, el umbral de reporte bajó: era más fácil registrar que ignorar.</p>
                <p>El -60% en tiempo de respuesta fue consecuencia de tener visibilidad completa, no de procesar más rápido. Cuando el supervisor veía la incidencia en tiempo real, actuaba de inmediato. Antes no actuaba porque no sabía.</p>
                <p>Esta fue mi primera experiencia construyendo para entornos sin conectividad estable. Me convenció de que offline-first no es una feature adicional: es una decisión de arquitectura que tiene que tomarse desde el primer día, no parchearse después.</p>
              </div>
            </section>

            <div className="ss-end-cta">
              <div>
                <h3>¿Tienes equipos en campo que operan con WhatsApp y Excel?</h3>
                <p>Si la información operativa vive en conversaciones y hojas de cálculo, puedo ayudarte a sistematizarla sin romper lo que ya funciona.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20Agrotech"
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
