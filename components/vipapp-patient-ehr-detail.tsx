"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { EvidenceCarousel } from "@/components/evidence-carousel"

const tocSections = [
  { id: "contexto",      label: "Contexto",       n: "01" },
  { id: "desafio",       label: "Desafío",         n: "02" },
  { id: "rol",           label: "Mi rol",           n: "03" },
  { id: "criterio",      label: "Mi criterio",      n: "04" },
  { id: "arquitectura",  label: "Arquitectura",     n: "05" },
  { id: "resultado",     label: "Resultado",        n: "06" },
  { id: "dejado",        label: "Lo que dejé",      n: "07" },
  { id: "aprendizaje",   label: "Aprendizaje",      n: "08" },
]

const challengeBullets = [
  { n: "01", bold: "Primer proyecto Flutter", rest: ": sin experiencia previa en Dart ni en el ecosistema Flutter. En 2020 la comunidad era pequeña, los tutoriales escasos y no existía IA para resolver dudas." },
  { n: "02", bold: "Offline-first obligatorio en salud", rest: ": si el teléfono pierde conexión a mitad de una consulta, los datos no pueden desaparecer. SQLite local tiene que ser réplica exacta del servidor." },
  { n: "03", bold: "Sincronización bidireccional con resolución de conflictos", rest: ": si el médico actualiza datos en el EHR y el paciente los edita offline al mismo tiempo, hay un conflicto. Tenía que resolverse." },
  { n: "04", bold: "15+ pantallas con lógica compleja en 2 meses", rest: ": historial médico, medicamentos, resultados con gráficos, solicitudes bidireccionales, notificaciones, perfil. Cada pantalla era un dominio distinto." },
  { n: "05", bold: "Backend API REST paralelo", rest: ": no había API existente para móvil. Tuve que diseñar y construir los endpoints de cero, en paralelo con el desarrollo de la app." },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "Offline-first como requisito no negociable",
    body: "SQLite local con 11 tablas que replican exactamente el schema MySQL del servidor. Si pierde conexión, la app sigue funcionando con datos locales. Al reconectar, Workmanager sincroniza automáticamente.",
    why: "En salud, los datos del paciente tienen que estar disponibles siempre. Una app que falla sin Internet en una clínica es inutilizable.",
  },
  {
    n: "Decisión 02",
    title: "BLoC + RxDart para estado reactivo escalable",
    body: "14 BLoCs con BehaviorSubject de RxDart. combineLatest2 para datos dependientes entre streams. InheritedWidget manual no escala a 15+ pantallas con estado compartido complejo.",
    why: "BLoC separa lógica de negocio de presentación. Con 15+ pantallas y estado bidireccional, era la arquitectura mínima viable para no crear spaghetti.",
  },
  {
    n: "Decisión 03",
    title: "Workmanager para sincronización automática en background",
    body: "Sync automático cada 15 minutos sin intervención del usuario. Si el teléfono está en background o bloqueado, Workmanager lo ejecuta de todas formas. El usuario no tiene que pensar en sincronizar.",
    why: "Una app de salud que requiere que el usuario toque 'sincronizar' manualmente tiene datos inconsistentes en producción.",
  },
  {
    n: "Decisión 04",
    title: "11 tablas SQLite como réplica exacta del schema MySQL",
    body: "No una versión simplificada del servidor, sino el mismo schema. Cuando el algoritmo de sync compara local vs. remoto, trabaja con la misma estructura. Menos casos borde, menos bugs de sincronización.",
    why: "Los schemas distintos producen bugs sutiles de sync que aparecen en producción con datos reales, no en testing.",
  },
]

const deliverables = [
  { n: "01", title: "VIPApp v1.0.0 en iOS y Android", desc: "App funcional en producción. iOS 11+ y Android 5+ compatibles. Publicada en ambas stores." },
  { n: "02", title: "Documentación de arquitectura Flutter", desc: "Estructura de carpetas, flujo de estado BLoC, diagrama de sync offline-first, relaciones entre BLoCs y Providers." },
  { n: "03", title: "SQLite schema con 11 tablas documentadas", desc: "Cada tabla con sus relaciones, campos requeridos y qué datos del servidor replica. Base para futuros developers Flutter." },
  { n: "04", title: "Backend API REST con endpoints documentados", desc: "Autenticación, CRUD de historial médico, medicamentos, resultados de laboratorio, solicitudes y notificaciones." },
  { n: "05", title: "Release checklist iOS / Android", desc: "Proceso de publicación en App Store y Play Store. Configuración de certificados, build settings y deployment pipeline." },
]

const evidenceSlides = [
  {
    label: "SQLite schema · 11 tablas · réplica MySQL",
    caption: "Schema SQLite completo con las 11 tablas que replican el servidor: patients, diagnoses, medications, lab_results, vitals, appointments, requests, notifications, providers, allergies, documents. Las relaciones son idénticas al MySQL del backend.",
    src: "/assets/evidence/nlm-migration--sql-clinical-tables.png",
  },
  {
    label: "BLoC architecture · 14 BLoCs · flujo de estado",
    caption: "Diagrama de arquitectura BLoC: 14 BLoCs con BehaviorSubject, 12 Providers, 11 Models. combineLatest2 para datos dependientes. El flujo de estado de la pantalla de medicamentos como ejemplo: MedicationBloc ← PatientBloc.",
    src: "/assets/evidence/nlm-migration--csharp-nlm-integration.png",
  },
  {
    label: "Offline sync · Workmanager · algoritmo",
    caption: "Diagrama del algoritmo de sincronización bidireccional. Workmanager dispara cada 15 min. Compara timestamps locales vs. remotos. Prioriza el más reciente. En caso de conflicto real, alerta al usuario con el dato en disputa.",
    src: "/assets/evidence/surescripts-cert--receive-endpoint-postman.png",
  },
  {
    label: "VIPApp · pantallas principales · producción",
    caption: "Pantallas en producción: historial médico, lista de medicamentos con dosis, resultados de laboratorio con gráficos de evolución, solicitudes al proveedor de salud y notificaciones push automáticas.",
    src: "/assets/evidence/surescripts-cert--aws-architecture.png",
  },
]

export function VipappPatientEhrDetail() {
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
              {" "}&nbsp;/{" "}&nbsp;Mobile · Healthcare
            </div>

            <h1 className="ss-title">
              Cómo entregué <em>15+ pantallas Flutter</em> en 2 meses, offline-first, sin IA.
            </h1>

            <p className="ss-tldr">
              MediRec necesitaba su primera app móvil: acceso del paciente a su expediente médico, offline-first, en iOS y Android.{" "}
              <b>Era mi primer proyecto Flutter. Aprendí Dart, diseñé la arquitectura BLoC, construí el backend y entregué
              VIPApp v1.0.0 en 2 meses sin IA disponible en 2020.</b>{" "}
              15+ pantallas. 11 tablas SQLite. Sync bidireccional. En producción.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente",   dd: "MediRec, Inc." },
                { dt: "Período",   dd: "Oct — Nov 2020" },
                { dt: "Rol",       dd: "Mobile Lead · Flutter Developer" },
                { dt: "Sector",    dd: "Healthcare · Mobile" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">Pantallas</div>
                <div className="num">15<span style={{ fontSize: "24px", color: "var(--text-2)" }}>+</span></div>
                <div className="sub">Funcionales en producción. iOS 11+ y Android 5+ compatibles.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Tiempo de entrega</div>
                <div className="num">2<span style={{ fontSize: "24px", color: "var(--text-2)" }}> meses</span></div>
                <div className="sub">De cero conocimiento Flutter a app en producción en 8 semanas.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">LOC Dart</div>
                <div className="num">3,500</div>
                <div className="sub">Organizados en BLoCs, Providers, Models, Pages y Widgets reutilizables.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Pérdida de datos</div>
                <div className="num">0</div>
                <div className="sub">Offline-first con SQLite. Sync automático. Resolución de conflictos incluida.</div>
              </div>
            </div>

            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">MediRec sin app móvil. Pacientes sin acceso remoto a su historial.</h2>
              <div className="ss-prose">
                <p>En octubre 2020, MediRec operaba únicamente con un EHR de escritorio en C#. Los pacientes podían ver su información médica solo durante la consulta presencial. <b>Sin app, sin notificaciones, sin acceso remoto.</b></p>
                <p>Los competidores ya tenían presencia mobile. Cada mes sin app era market share perdido. Y en salud, la continuidad de acceso no es comodidad: es parte del servicio clínico.</p>
                <p>El reto adicional: este era mi primer proyecto Flutter. En 2020, la comunidad era pequeña, los recursos limitados y no existía IA para acelerar el aprendizaje.</p>
              </div>
            </section>

            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">Aprender Flutter desde cero, diseñar arquitectura compleja y entregar en 2 meses.</h2>
              <p className="ss-sec-lede">El desafío técnico más difícil no fue el código. Fue aprender el lenguaje, el framework y la arquitectura en paralelo con el desarrollo, sin IA y con un deadline real.</p>
              <ul className="ss-bullets">
                {challengeBullets.map(({ n, bold, rest }) => (
                  <li key={n} data-n={n}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
            </section>

            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Arquitectura, desarrollo Flutter, backend API y entrega en producción.</h2>
              <div className="ss-prose">
                <p>Fui responsable de todo: diseño de la arquitectura BLoC, implementación de las 15+ pantallas, sincronización offline-first, construcción del backend API REST y proceso de publicación en ambas stores.</p>
                <ul className="ss-role-list">
                  <li>aprendizaje de Dart y Flutter en las primeras 2 semanas con Google Codelabs y documentación oficial,</li>
                  <li>diseño de la arquitectura BLoC con 14 BLoCs y 12 Providers,</li>
                  <li>implementación del schema SQLite de 11 tablas y el algoritmo de sync bidireccional,</li>
                  <li>construcción del backend API REST (autenticación, CRUD, notificaciones),</li>
                  <li>configuración de Workmanager para background sync automático,</li>
                  <li>y publicación en App Store y Google Play.</li>
                </ul>
              </div>
            </section>

            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Cuatro decisiones de arquitectura que hicieron posible entregar en 2 meses.</h2>
              <p className="ss-sec-lede">Cada decisión reducía la complejidad en un área para poder avanzar rápido en otra. <b>Sin las cuatro juntas, 2 meses no era posible.</b></p>
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
              <h2 className="ss-sec-title">Offline-first con sincronización bidireccional automática.</h2>
              <p className="ss-sec-lede">La arquitectura gira en torno a una premisa: los datos del paciente tienen que estar disponibles siempre, con o sin Internet.</p>

              <div className="ss-breakout">
                <div className="ss-arch">
                  <div className="ss-arch-head">
                    <span><span aria-hidden="true">▎ </span>flujo offline-first · VIPApp · MediRec</span>
                    <span className="right"><span>Flutter 2.7</span><span>SQLite</span><span>Workmanager</span></span>
                  </div>
                  <div className="ss-arch-body">
                    <div className="lf-arch-flow">
                      <div className="ss-node">
                        <div className="role">UI Layer</div>
                        <h4>Flutter · Dart</h4>
                        <p>15+ pantallas · BLoC streams</p>
                      </div>
                      <div className="ss-arrow">
                        <span className="lbl">BLoC events</span>
                        <span className="line" />
                        <span className="sub">RxDart</span>
                      </div>
                      <div className="ss-node gw">
                        <div className="role">★ Local storage</div>
                        <h4>SQLite · sqflite</h4>
                        <p>11 tablas · réplica MySQL</p>
                      </div>
                      <div className="ss-arrow">
                        <span className="lbl">Sync bidireccional</span>
                        <span className="line" />
                        <span className="sub">Workmanager 15min</span>
                      </div>
                      <div className="ss-node">
                        <div className="role">Backend</div>
                        <h4>API REST · MySQL</h4>
                        <p>Bearer token · CRUD</p>
                      </div>
                    </div>
                  </div>
                  <div className="ss-arch-foot">
                    <div className="f"><div className="l">State</div><div className="v">BLoC (14) · Providers (12) · BehaviorSubject · combineLatest2</div></div>
                    <div className="f"><div className="l">Storage</div><div className="v">SQLite (sqflite) · 11 tablas · schema idéntico a MySQL</div></div>
                    <div className="f"><div className="l">Sync</div><div className="v">Workmanager cada 15min · algoritmo bidireccional · conflict resolution</div></div>
                    <div className="f"><div className="l">Stack</div><div className="v">Flutter 2.7-3.0 · Dart · RxDart · flutter_local_notifications · connectivity</div></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="resultado">
              <div className="ss-sec-eyebrow">06 · Resultado</div>
              <h2 className="ss-sec-title">App en producción en 2 meses. iOS y Android. Offline-first sin pérdida de datos.</h2>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">Pantallas</div>
                  <div className="v">15+</div>
                  <div className="d">Historial, medicamentos, resultados con gráficos, solicitudes, notificaciones.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Plataformas</div>
                  <div className="v">iOS + Android</div>
                  <div className="d">iOS 11+ y Android 5+ desde un único codebase Dart.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Datos offline</div>
                  <div className="v">0 pérdida</div>
                  <div className="d">SQLite local + sync automático. Si pierde Internet, la app sigue funcionando.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">LOC</div>
                  <div className="v">3,500</div>
                  <div className="d">Dart. Organizados en 14 BLoCs, 12 Providers, 11 Models y 15+ Pages.</div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">Base técnica para que el equipo continuara el desarrollo móvil.</h2>
              <div className="ss-deliver">
                {deliverables.map(({ n, title, desc }) => (
                  <div key={n} className="ss-d-card">
                    <div className="n">{n}</div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="ss-sec" id="aprendizaje">
              <div className="ss-sec-eyebrow">08 · Aprendizaje</div>
              <h2 className="ss-sec-title">La arquitectura que documenta el trabajo.</h2>
              <p className="ss-sec-lede">Schema SQLite, flujo BLoC, algoritmo de sync y pantallas en producción. El proyecto completo en 4 capturas.</p>

              <EvidenceCarousel slides={evidenceSlides} />
            </section>

            <div className="ss-end-cta">
              <div>
                <h3>¿Necesitas una app mobile con arquitectura sólida y entrega rápida?</h3>
                <p>Flutter iOS + Android, offline-first, integración con APIs existentes. Si el timeline es ajustado y la calidad no es negociable, hablemos.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20de%20Flutter%20y%20tengo%20algo%20parecido"
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
          aria-controls="vipapp-mobile-menu"
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
            id="vipapp-mobile-menu"
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
