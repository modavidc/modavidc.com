"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { EvidenceCarousel } from "@/components/evidence-carousel"

const tocSections = [
  { id: "contexto",    label: "Contexto",     n: "01" },
  { id: "desafio",     label: "Desafío",       n: "02" },
  { id: "rol",         label: "Mi rol",         n: "03" },
  { id: "criterio",    label: "Mi criterio",    n: "04" },
  { id: "arquitectura",label: "Arquitectura",   n: "05" },
  { id: "resultado",   label: "Resultado",      n: "06" },
  { id: "dejado",      label: "Lo que dejé",    n: "07" },
  { id: "roadmap",     label: "Roadmap",        n: "08" },
]

const challengeBullets = [
  { n: "01", bold: "Parser robusto para exportaciones de WhatsApp", rest: ": iOS y Android exportan con formato distinto. US (MM/DD/YYYY) vs. ES (DD/MM/YYYY). Mensajes de sistema (fotos, stickers, participantes) vs. reales. Regex simple falla en el 30% de los casos." },
  { n: "02", bold: "Lógica de negocio compleja y específica", rest: ": ghost score (inactivos), fill rate (confirmaciones), clasificación deportiva (fijo/probable/riesgoso/chancleta) con histórico. No es estadística simple." },
  { n: "03", bold: "IA contextual, no genérica", rest: ": el chat de IA tiene que conocer el grupo analizado. Si el admin pregunta '¿quién no confirmó para el partido del sábado?', la respuesta viene de los datos reales, no de una respuesta genérica de OpenAI." },
  { n: "04", bold: "Freemium con paywall sin dark patterns", rest: ": 3 análisis gratis, luego paywall. El límite tiene que sentirse justo, no abusivo. El upgrade tiene que ser natural, no forzado." },
  { n: "05", bold: "Un solo desarrollador, sin equipo", rest: ": producto, diseño, desarrollo, marketing y beta testing: todo yo. Spec-Driven Development para no perder dirección con decisiones aisladas." },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "Spec-Driven Development: specs aprobadas antes de código",
    body: "6 specs escritas y aprobadas antes de empezar el desarrollo. Cada spec tiene criterios de aceptación verificables. Si el feature no cumple los CAs, no está listo. Esto evitó pivots costosos en funcionalidades a mitad del desarrollo.",
    why: "Sin specs, cada sesión de trabajo puede llevar en una dirección distinta. Un solo developer sin estructura acumula deuda de decisión más rápido que deuda técnica.",
  },
  {
    n: "Decisión 02",
    title: "Parser de 408 líneas, no regex simple",
    body: "El parser detecta el formato del archivo (iOS/Android, US/ES), maneja mensajes multilínea, filtra mensajes de sistema, normaliza timestamps y extrae el sender. No hay un regex que cubra todos los casos: hay un parser con estados.",
    why: "El parser es el core del producto. Si falla en el 30% de los chats, el 30% de los usuarios se van en el primer análisis.",
  },
  {
    n: "Decisión 03",
    title: "100% offline: los datos nunca salen del teléfono",
    body: "El análisis ocurre localmente. El chat de WhatsApp se procesa en el dispositivo y los resultados se guardan en Hive (local). La única comunicación de red es la API de OpenAI para el chat de IA, y el usuario lo activa con su propia API key.",
    why: "Los grupos de WhatsApp tienen conversaciones privadas. Privacy-first no es marketing, es la condición mínima para que alguien instale la app.",
  },
  {
    n: "Decisión 04",
    title: "Riverpod 2.4.9 para estado: AsyncValue para todo lo asíncrono",
    body: "Riverpod con AsyncValue maneja loading, error y data en un solo tipo. No hay null checks manuales ni estados inconsistentes. El análisis de un grupo puede tardar 30 segundos: con AsyncValue el usuario ve el estado correcto en todo momento.",
    why: "Estado inconsistente en una app de análisis es devastador para la UX. AsyncValue hace que loading/error/data sea imposible de mezclar.",
  },
]

const deliverables = [
  { n: "01", title: "6 specs aprobadas con CAs verificados", desc: "Parser, Ranking, Clasificación deportiva, Heatmap, Salud del grupo, IA chat. Cada spec con criterios de aceptación, casos de prueba y estado de implementación." },
  { n: "02", title: "Design system completo", desc: "AppColors, AppTypography, AppSpacing, AppShadows. Dark/light mode. Tokens reutilizables en todas las pantallas. Una sola fuente de verdad para el estilo visual." },
  { n: "03", title: "BRD (Business Requirements Document)", desc: "Modelo de monetización Freemium: 3 análisis gratis, $4.99/mes o $49.99/año. Estrategia de adquisición, segmentos objetivo (admins de grupos deportivos, HOAs, grupos de trabajo)." },
  { n: "04", title: "Auditoría técnica y plan de remediación", desc: "25 criterios evaluados, score 17/25. Los 8 gaps identificados con plan de remediación priorizado para v0.3 y v1.0." },
  { n: "05", title: "Landing page con score 6.8/10", desc: "Next.js con 24 hallazgos de auditoría UX/UI identificados. 6 críticos. Roadmap de mejoras priorizadas para antes del lanzamiento en Play Store." },
]

const evidenceSlides = [
  {
    label: "Grupero · pantallas principales · v0.2.0",
    caption: "Pantallas en v0.2.0: análisis de participación del grupo, clasificación deportiva (fijo/probable/riesgoso/chancleta), heatmap de actividad por hora y día, y salud del grupo con evolución histórica.",
    src: "/assets/evidence/nlm-migration--csharp-nlm-integration.png",
  },
  {
    label: "Parser · 408 líneas · formatos iOS/Android/US/ES",
    caption: "Implementación del parser de exportaciones de WhatsApp. Detecta formato automáticamente, normaliza timestamps, filtra mensajes de sistema y extrae sender. Maneja los 4 formatos de fecha posibles sin configuración del usuario.",
    src: "/assets/evidence/surescripts-cert--send-method-core.png",
  },
  {
    label: "Freemium · UpgradeSheet · paywall sin dark patterns",
    caption: "Pantalla de upgrade al límite de 3 análisis. El paywall es claro, el límite es justo (3 análisis completos son suficientes para evaluar el producto) y el upgrade path es directo. Sin urgencia artificial ni confusión.",
    src: "/assets/evidence/nlm-migration--email-bodenreider.png",
  },
  {
    label: "Spec 01 · Parser · CAs verificados",
    caption: "Documento de spec del parser: definición del problema, criterios de aceptación verificables, casos de prueba con formato iOS/Android/US/ES. Base del Spec-Driven Development que guió todo el proyecto.",
    src: "/assets/evidence/surescripts-cert--certificado-oficial-pr21677.png",
  },
]

export function GruperoDetail() {
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
              {" "}&nbsp;/{" "}&nbsp;Personal · SaaS
            </div>

            <h1 className="ss-title">
              Cómo construí un <em>SaaS propio</em> de cero a v0.2.0 con 12 beta testers activos.
            </h1>

            <p className="ss-tldr">
              Soy admin de 6 grupos de WhatsApp con 150+ personas cada uno. Tomaba decisiones a ciegas sobre quién participaba realmente.{" "}
              <b>Construí Grupero: una app Android que analiza chats exportados y produce radiografías de participación,
              salud del grupo, eventos y clasificación deportiva, 100% offline.</b>{" "}
              v0.2.0 activa. 26.5K LOC. 12 beta testers. Freemium validado.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Proyecto",  dd: "Producto propio (SaaS)" },
                { dt: "Año",       dd: "2025 — activo" },
                { dt: "Rol",       dd: "Founder · Product · Developer" },
                { dt: "Sector",    dd: "SaaS · Productividad" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">LOC Dart</div>
                <div className="num">26.5<span style={{ fontSize: "24px", color: "var(--text-2)" }}>K</span></div>
                <div className="sub">Organizados con Riverpod, Hive, GoRouter y design tokens propios.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Beta testers</div>
                <div className="num">12</div>
                <div className="sub">Admins de grupos deportivos activos. 47 grupos analizados, 3,200+ miembros.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Privacidad</div>
                <div className="num">100<span style={{ fontSize: "24px", color: "var(--text-2)" }}>%</span></div>
                <div className="sub">Datos nunca salen del dispositivo. Cero servidores propios con datos del chat.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Freemium</div>
                <div className="num">3</div>
                <div className="sub">Análisis gratis. Pro vía API key propia. Monetización validada con beta testers.</div>
              </div>
            </div>

            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">Admin de 6 grupos con 150+ personas cada uno. Decisiones a ciegas.</h2>
              <div className="ss-prose">
                <p>Administro grupos de WhatsApp de distintos tipos: deportivos, trabajo, sociales. El problema recurrente: <b>no tengo visibilidad real de quién participa, quién confirma eventos, quién desapareció o cuándo es mejor publicar una convocatoria.</b></p>
                <p>WhatsApp no da estadísticas. Ver quién está activo requiere scrollear semanas de historial manualmente. Perseguir confirmaciones para un partido con 150 personas toma horas. Lo construí para mí, y funcionó.</p>
              </div>
            </section>

            <section className="ss-sec ss-sec--risk" id="desafio">
              <div className="ss-sec-eyebrow">02 · El desafío</div>
              <h2 className="ss-sec-title">Parser robusto, lógica compleja, IA contextual y freemium, todo sin equipo.</h2>
              <p className="ss-sec-lede">Construir un producto SaaS solo es posible con disciplina en el alcance. Cada feature mal definida es deuda que multiplica el tiempo de desarrollo.</p>
              <ul className="ss-bullets">
                {challengeBullets.map(({ n, bold, rest }) => (
                  <li key={n} data-n={n}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
            </section>

            <section className="ss-sec" id="rol">
              <div className="ss-sec-eyebrow">03 · Mi rol</div>
              <h2 className="ss-sec-title">Producto, diseño, desarrollo, marketing y beta testing. Todo.</h2>
              <div className="ss-prose">
                <p>Grupero es un proyecto personal. No hay equipo, no hay inversión externa, no hay deadlines impuestos. Lo que hay es disciplina de proceso: specs antes de código, CAs verificables, design system antes de pantallas.</p>
                <ul className="ss-role-list">
                  <li>investigación de segmentos objetivo y validación del problema con admins reales,</li>
                  <li>6 specs aprobadas con criterios de aceptación verificables antes del desarrollo,</li>
                  <li>parser de 408 líneas para exportaciones iOS/Android/US/ES,</li>
                  <li>lógica de análisis: ghost score, fill rate, clasificación deportiva con histórico,</li>
                  <li>integración OpenAI con contexto del grupo analizado,</li>
                  <li>freemium: UpgradeSheet, StorageService.canAddAnalysis(), límite de 3 análisis,</li>
                  <li>y beta testing con 12 admins de grupos reales durante 3 meses.</li>
                </ul>
              </div>
            </section>

            <section className="ss-sec" id="criterio">
              <div className="ss-sec-eyebrow">04 · Mi criterio</div>
              <h2 className="ss-sec-title">Cuatro decisiones que mantienen el proyecto sostenible solo.</h2>
              <p className="ss-sec-lede">Cada decisión reduce la complejidad total. Un solo developer no puede gestionar complejidad ilimitada. El criterio es <b>maximizar funcionalidad útil por línea de código.</b></p>
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
              <h2 className="ss-sec-title">Stack Flutter con estado reactivo, almacenamiento local y IA on-demand.</h2>

              <div className="ss-criterio-grid" style={{ marginTop: "24px" }}>
                {[
                  { label: "Framework", tags: ["Flutter 3.11.1", "Dart (null-safety)", "GoRouter", "Material 3"] },
                  { label: "Estado", tags: ["Riverpod 2.4.9", "AsyncValue", "StateNotifier", "FutureProvider"] },
                  { label: "Storage", tags: ["Hive 2.2.3", "flutter_secure_storage", "SharedPreferences"] },
                  { label: "Features", tags: ["OpenAI API", "fl_chart", "flutter_animate", "csv", "pdf", "archive (ZIP)"] },
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
              <h2 className="ss-sec-title">v0.2.0 activa. Freemium validado. 12 beta testers usando el producto cada semana.</h2>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">Versión activa</div>
                  <div className="v">v0.2.0</div>
                  <div className="d">En desarrollo activo. Target Play Store release Q3 2026.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Beta testers</div>
                  <div className="v">12</div>
                  <div className="d">Admins activos. 47 grupos analizados. 3,200+ miembros procesados.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Freemium</div>
                  <div className="v">Validado</div>
                  <div className="d">3 de 12 beta testers activaron Pro con su propia API key de OpenAI.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">LOC</div>
                  <div className="v">26.5K</div>
                  <div className="d">Dart. Con design system, 15+ pantallas, parser, lógica y IA.</div>
                </div>
              </div>
            </section>

            <section className="ss-sec" id="dejado">
              <div className="ss-sec-eyebrow">07 · Lo que dejé</div>
              <h2 className="ss-sec-title">Infraestructura de producto lista para escalar de beta a lanzamiento.</h2>
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

            <section className="ss-sec" id="roadmap">
              <div className="ss-sec-eyebrow">08 · Roadmap</div>
              <h2 className="ss-sec-title">v0.3 → v1.0. Lo que falta y por qué en ese orden.</h2>
              <p className="ss-sec-lede">El roadmap no es una lista de features. Es una secuencia de hitos que llevan de beta privada a producto lanzado y monetizable.</p>

              <div style={{ background: "var(--bg-2)", border: "1px solid var(--border)", marginTop: "24px", fontFamily: "var(--ff-mono)", fontSize: "12px" }}>
                {[
                  { version: "v0.3", estado: "próximo", items: ["Test suite + CI/CD pipeline", "iOS beta (TestFlight)", "Performance: análisis <10s para grupos 1K+", "Onboarding flow mejorado"] },
                  { version: "v1.0", estado: "Play Store", items: ["i18n (ES + EN)", "Accessibility (a11y)", "Google Play Store release", "In-app purchase (subscription)"] },
                  { version: "v1.1+", estado: "post-lanzamiento", items: ["Sincronización cross-device", "Notificaciones inteligentes", "Web dashboard para admins", "Soporte WhatsApp Business"] },
                ].map(({ version, estado, items }) => (
                  <div key={version} style={{ padding: "20px 24px", borderBottom: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <span style={{ color: "var(--green)", fontWeight: 700, fontSize: "14px" }}>{version}</span>
                      <span style={{ color: "var(--text-3)", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase" }}>{estado}</span>
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {items.map(item => (
                        <li key={item} style={{ color: "var(--text-2)", fontSize: "12px", display: "flex", gap: "8px", alignItems: "flex-start" }}>
                          <span style={{ color: "var(--text-3)", flexShrink: 0 }}>·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "32px" }}>
                <EvidenceCarousel slides={evidenceSlides} />
              </div>
            </section>

            <div className="ss-end-cta">
              <div>
                <h3>¿Tienes una idea de producto que nadie ha construido todavía?</h3>
                <p>MVP con arquitectura sólida, Spec-Driven Development, Flutter o web. Si el problema es real y el mercado existe, la ejecución es lo que falta.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20Grupero%20y%20tengo%20algo%20parecido"
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
          aria-controls="grupero-mobile-menu"
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
            id="grupero-mobile-menu"
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
