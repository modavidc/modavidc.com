"use client"

import { useState, useEffect, ReactNode } from "react"
import Link from "next/link"

type Chip = { label: string; amber?: boolean }
type CaseItem = {
  id: string; href: string; cats: string[]
  variant: "decision" | "risk"; visTag: string | null; vis: ReactNode
  metaCat: string; metaYear: string; title: string; body: string; chips: Chip[]
}

const FILTERS = [
  { key: "all", label: "Todos", count: 13, dot: false },
  { key: "healthcare", label: "Healthcare", count: 5, dot: true },
  { key: "finops", label: "FinOps", count: 2, dot: true },
  { key: "saas", label: "SaaS", count: 3, dot: true },
  { key: "mobile", label: "Mobile / IoT", count: 3, dot: true },
  { key: "govtech", label: "Gov-Tech", count: 2, dot: true },
  { key: "security", label: "Ciberseguridad", count: 1, dot: true },
  { key: "personal", label: "Personal", count: 1, dot: true },
]

const CASES: CaseItem[] = [
  {
    id: "medirec-aws",
    href: "/casos-de-exito/detail/medirec-aws",
    cats: ["finops"],
    variant: "decision",
    visTag: "before · after",
    vis: (
      <div className="ce-v-big">
        <div style={{ textAlign: "center" }}>
          <div className="n1">$912</div>
          <div className="un">antes</div>
        </div>
        <span className="arr">→</span>
        <div style={{ textAlign: "center" }}>
          <div className="n2">$318</div>
          <div className="un">/ mes</div>
        </div>
      </div>
    ),
    metaCat: "FinOps · Infrastructure",
    metaYear: "2023",
    title: "Cómo bajé 65% el costo de AWS sin interrumpir nada",
    body: "4 fases: auditoría completa, respaldos defensivos, eliminación de huérfanos, right-sizing. ~65% menos costo, 21K ahorrados en 3 años.",
    chips: [{ label: "−65% AWS" }, { label: "$7.1K/año" }],
  },
  {
    id: "medirec-backup-dr",
    href: "/casos-de-exito/detail/medirec-backup-dr",
    cats: ["finops"],
    variant: "risk",
    visTag: "backup strategy",
    vis: (
      <div className="ce-v-bkup">
        <div className="cell"><b>Daily</b>incr.</div>
        <div className="cell"><b>Weekly</b>full</div>
        <div className="cell"><b>Monthly</b>glacier</div>
        <div className="cell hi"><b>RTO 60&apos;</b>HIPAA</div>
      </div>
    ),
    metaCat: "Healthcare · Infrastructure",
    metaYear: "2024 — 2025",
    title: "Cómo dejé RTO en 60 min y RPO en 0h para 15 volúmenes",
    body: "15 volúmenes sin política, sin SLA. 4 capas: incremental-daily, weekly-full, monthly-Glacier, validación mensual. RTO 60min, RPO 0h.",
    chips: [{ label: "RTO 60min", amber: true }, { label: "RPO 0h" }],
  },
  {
    id: "t-cuida-multitenant",
    href: "/casos-de-exito/detail/t-cuida-multitenant",
    cats: ["saas"],
    variant: "decision",
    visTag: "capacity planning",
    vis: (
      <svg viewBox="0 0 280 110" preserveAspectRatio="none" style={{ width: "100%", height: "110px" }}>
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(67% 0.17 148)" stopOpacity=".25" />
            <stop offset="100%" stopColor="oklch(67% 0.17 148)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M5,95 C40,85 70,72 105,55 S180,18 275,12 L275,108 L5,108 Z" fill="url(#g1)" />
        <path d="M5,95 C40,85 70,72 105,55 S180,18 275,12" stroke="oklch(67% 0.17 148)" strokeWidth="1.5" fill="none" />
        <circle cx="275" cy="12" r="3" fill="oklch(67% 0.17 148)" />
        <text x="266" y="28" fill="oklch(67% 0.17 148)" fontFamily="monospace" fontSize="9" textAnchor="end" fontWeight="500">20K</text>
        <text x="266" y="40" fill="#7a847b" fontFamily="monospace" fontSize="7" textAnchor="end">USERS · VALIDADO</text>
      </svg>
    ),
    metaCat: "SaaS · Architecture",
    metaYear: "2024",
    title: "Cómo validé escala a 20K usuarios para una Series A usuarios — cost envelope claro",
    body: "Inversor preguntó \"¿Escalamos a 20K? ¿Cuánto cuesta?\". 6 semanas de load testing, 3 escenarios, JMeter + k6. Cost $672–$1,065/mes, error rate <0.2%.",
    chips: [{ label: "20K users" }, { label: "$672-$1K/mes" }],
  },
  {
    id: "t-cuida-audit",
    href: "/casos-de-exito/detail/t-cuida-audit",
    cats: ["saas"],
    variant: "risk",
    visTag: "codebase turnaround",
    vis: (
      <div className="ce-v-score">
        <div className="badge bad"><div className="nm">41</div><div className="un">/ 100</div></div>
        <span className="arr">→</span>
        <div className="badge ok"><div className="nm">78</div><div className="un">/ 100</div></div>
        <div style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", color: "var(--text-3)", textAlign: "left", marginLeft: "8px" }}>
          <div style={{ color: "var(--green)" }}>1,789 tests</div>
          <div>auditable</div>
        </div>
      </div>
    ),
    metaCat: "SaaS · Codebase",
    metaYear: "2024",
    title: "Cómo subí un codebase de 41 a 78/100 en 6 meses → Series A ready (78/100) en 6 meses",
    body: "Bloqueador de Series A. Framework de 10 dimensiones ponderadas. 105 tickets, 388 tests nuevos, 1.8K líneas reescritas. Security +2.5, Architecture +3.7.",
    chips: [{ label: "+37pts (41→78)" }],
  },
  {
    id: "licencias-farmaceuticas",
    href: "/casos-de-exito/detail/licencias-farmaceuticas",
    cats: ["finops", "healthcare"],
    variant: "decision",
    visTag: "proveedor clínico",
    vis: (
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--ff-mono)", fontSize: "11px", lineHeight: "1.5", color: "var(--text-3)", width: "100%", maxWidth: "220px" }}>
        <div style={{ color: "var(--border-2)", textDecoration: "line-through" }}>LexiComp · NLM</div>
        <div>licencias: <span style={{ color: "var(--green)" }}>$0</span> / año</div>
        <div>cobertura: <span style={{ color: "var(--green)" }}>100%</span></div>
        <div>integridad clínica: <span style={{ color: "var(--green)" }}>✓</span></div>
      </div>
    ),
    metaCat: "Healthcare · FinOps",
    metaYear: "2023 — 2024",
    title: "Cómo eliminé $20K/año en licencias farmacéuticas",
    body: "MediRec pagaba $20K/año a Wolters Kluwer por LexiComp. Validé que NLM RxNorm cubría alergias, contraindicaciones e interacciones — estándar federal, gratis.",
    chips: [{ label: "−$20K/año" }, { label: "0 downtime" }],
  },
  {
    id: "preis-integration",
    href: "/casos-de-exito/detail/preis-integration",
    cats: ["govtech", "healthcare"],
    variant: "decision",
    visTag: "gov-tech integration",
    vis: (
      <div className="ce-v-flow">
        <div className="ce-v-box"><b>MediRec</b>EHR</div>
        <span className="ce-v-arrow ok">→</span>
        <div className="ce-v-box ok"><b>PREIS</b>Gobierno</div>
      </div>
    ),
    metaCat: "Gov-Tech · Healthcare",
    metaYear: "2021 — 2025",
    title: "Cómo automaticé 1,200+ reportes al gobierno con 99.2% éxito",
    body: "API gateway HL7 para integrar MediRec con PREIS (registro nacional de Puerto Rico). 62 códigos de vacunas, mTLS, 3 niveles de validación. 99.2% éxito.",
    chips: [{ label: "1,200+ vacunas" }, { label: "99.2% éxito" }],
  },
  {
    id: "surescripts-certification",
    href: "/casos-de-exito/detail/surescripts-certification",
    cats: ["healthcare"],
    variant: "decision",
    visTag: null,
    vis: (
      <div style={{ background: "#1f4d7a", color: "#cfe4ff", fontFamily: "var(--ff-mono)", fontSize: "10.5px", lineHeight: "1.55", padding: "18px 22px", width: "100%", height: "100%", position: "relative" }}>
        <div style={{ position: "absolute", top: "10px", right: "14px", fontSize: "9px", opacity: .7 }}>abcEHR MU v12.5</div>
        <div>Successful completion of:</div>
        <ol style={{ paddingLeft: "18px", margin: "8px 0 0" }}>
          <li>Drug Compendia update to NLM</li>
          <li style={{ color: "#a5f3c8" }}><b>E-Prescribing CG v1.6</b> · 2022-12-23</li>
          <li>Tx Certified: <span style={{ color: "#a5f3c8" }}>NewRx, RxRenewal, RxChange, …</span></li>
          <li>Connectivity: Direct via HTTPS and mTLS</li>
        </ol>
      </div>
    ),
    metaCat: "Healthcare · Integration",
    metaYear: "Oct 2023",
    title: "Cómo recertifiqué Surescripts en 22 días sin downtime",
    body: "Recertificación oficial (CG v6.1) para abcEHR tras migración NLM. Nueva API Laravel como gateway entre .NET y Surescripts. 7 transacciones NCPDP 2017071 certificadas.",
    chips: [{ label: "260K farmacias" }, { label: "Certified" }],
  },
  {
    id: "vipapp-patient-ehr",
    href: "/casos-de-exito/detail/vipapp-patient-ehr",
    cats: ["mobile", "healthcare"],
    variant: "decision",
    visTag: "flutter mobile app",
    vis: (
      <div className="ce-v-flow">
        <div className="ce-v-box"><b>YIPApp</b>· Pacientes<br />· Medicaments<br />· Resultados</div>
        <span className="ce-v-arrow ok">→</span>
        <div className="ce-v-box ok"><b>Sincronización</b>· Local + Remoto<br />· SQLite<br />· Background</div>
      </div>
    ),
    metaCat: "Mobile · Healthcare",
    metaYear: "2020 — 2021",
    title: "Cómo entregué 15+ pantallas Flutter en 2 meses del paciente — 15+ pantallas en 2 meses",
    body: "App Flutter completa de expediente médico. Primer proyecto Flutter del equipo. Arquitectura offline-first con SQLite, 3.5K LOC Dart, BLoC + RxDart + Workmanager.",
    chips: [{ label: "15+ pantallas" }, { label: "Offline-first" }],
  },
  {
    id: "ores-laboratory-api",
    href: "/casos-de-exito/detail/ores-laboratory-api",
    cats: ["healthcare"],
    variant: "decision",
    visTag: "laboratory integration",
    vis: (
      <div className="ce-v-flow" style={{ fontSize: "9px" }}>
        <div className="ce-v-box"><b>Doctor</b>abcEHR</div>
        <span className="ce-v-arrow ok">→</span>
        <div className="ce-v-box ok"><b>ORES API</b>Laravel</div>
        <span className="ce-v-arrow">→</span>
        <div className="ce-v-box"><b>Labs</b>25+</div>
      </div>
    ),
    metaCat: "Healthcare · Integration",
    metaYear: "2022",
    title: "Cómo reduje órdenes de lab de 5 días a 4 horas — 40K/mes en 4–24h (antes 2–5 días)",
    body: "API centralizada Laravel que conecta doctores con laboratorios externos. Integración C# desde abcEHR: doctor crea orden → procesa → resultados → PDF. HL7 v2.5.1.",
    chips: [{ label: "40K órdenes" }, { label: "25+ labs" }],
  },
  {
    id: "grupero",
    href: "/casos-de-exito/detail/grupero",
    cats: ["personal", "mobile", "saas"],
    variant: "decision",
    visTag: "saas product",
    vis: (
      <div className="ce-v-flow">
        <div className="ce-v-box"><b>WhatsApp</b>chat export</div>
        <span className="ce-v-arrow ok">→</span>
        <div className="ce-v-box ok"><b>Grupero</b>Analytics + IA</div>
        <span className="ce-v-arrow">→</span>
        <div className="ce-v-box"><b>Insights</b></div>
      </div>
    ),
    metaCat: "Personal · SaaS",
    metaYear: "2026",
    title: "Cómo llevé un side-project SaaS de idea a v0.2.0 — De idea a v0.2.0",
    body: "App Android SaaS que analiza chats exportados: salud del grupo, eventos deportivos, IA conversacional. Freemium (3 análisis), 26.5K LOC Dart, Riverpod, OpenAI.",
    chips: [{ label: "v0.2.0" }, { label: "26.5K LOC" }],
  },
  {
    id: "indexum-autoservicio",
    href: "/casos-de-exito/detail/indexum-autoservicio",
    cats: ["govtech"],
    variant: "decision",
    visTag: "citizen self-service",
    vis: (
      <div className="ce-v-flow">
        <div className="ce-v-box"><b>Ventanilla</b>2h 50min</div>
        <span className="ce-v-arrow ok">→</span>
        <div className="ce-v-box ok"><b>Portal Web</b>8 min</div>
      </div>
    ),
    metaCat: "Gov-Tech · Full-Stack",
    metaYear: "2019 — 2020",
    title: "Cómo reduje 3 horas de cola a 8 minutos con autoservicio digital",
    body: "Portal web para trámites ciudadanos sin presencia física. Mapeo de procesos, backend Laravel, panel de gestión interno. 4,200+ trámites al mes, 60% adopción digital en 3 meses.",
    chips: [{ label: "-78% tiempo" }, { label: "4,200+ trámites" }],
  },
  {
    id: "colegio-santa-angela-seguridad",
    href: "/casos-de-exito/detail/colegio-santa-angela-seguridad",
    cats: ["security"],
    variant: "risk",
    visTag: "incident response",
    vis: (
      <div className="ce-v-score">
        <div className="badge bad"><div className="nm">✗</div><div className="un">comprometido</div></div>
        <span className="arr">→</span>
        <div className="badge ok"><div className="nm">A</div><div className="un">headers</div></div>
      </div>
    ),
    metaCat: "Educación · Ciberseguridad",
    metaYear: "2026",
    title: "Cómo recuperé un WordPress con backdoors que sobrevivían cada limpieza",
    body: "Sitio institucional con spam de apuestas inyectado y backdoors que reinfectaban tras cada limpieza. Diagnóstico con verificación de checksums oficiales de WordPress.org, 460+ archivos maliciosos eliminados, verificado limpio 6+ semanas después.",
    chips: [{ label: "460+ archivos" }, { label: "6+ sem. limpio" }],
  },
  {
    id: "indexum-agrotech",
    href: "/casos-de-exito/detail/indexum-agrotech",
    cats: ["mobile"],
    variant: "decision",
    visTag: "agrotech · campo",
    vis: (
      <div className="ce-v-flow" style={{ fontSize: "9px" }}>
        <div className="ce-v-box"><b>Campo</b>Coordinador</div>
        <span className="ce-v-arrow ok">→</span>
        <div className="ce-v-box ok"><b>App Ionic</b>Offline-first</div>
        <span className="ce-v-arrow">→</span>
        <div className="ce-v-box"><b>Supervisor</b>Panel web</div>
      </div>
    ),
    metaCat: "Agrotech · Mobile",
    metaYear: "2019 — 2020",
    title: "Cómo bajé 60% el tiempo de respuesta en campo con una app móvil",
    body: "App Ionic offline-first para 85 coordinadores agrícolas. Reporte de incidencias, control de inventario, alertas en tiempo real. Sin WhatsApp, sin Excel, sin paros no planificados.",
    chips: [{ label: "-60% respuesta" }, { label: "85 coordinadores" }],
  },
]

export default function CasosPage() {
  const [active, setActive] = useState("all")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    document.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  const visible = active === "all"
    ? CASES
    : CASES.filter(c => c.cats.includes(active))

  return (
    <>
      <div className="ce-progress" style={{ width: `${progress}%` }} />

      <main className="ce-shell">

        {/* HERO */}
        <section className="ce-hero">
          <div className="ce-eyebrow">Casos de éxito · 2020 — 2026</div>
          <h1 className="ce-title">Criterio técnico<br /><em>con impacto medible.</em></h1>
          <p className="ce-lede">
            Cada caso documenta la decisión, el contexto y el resultado.
            No solo qué se hizo — <b style={{ color: "var(--text)", fontWeight: 400 }}>sino por qué se hizo así.</b>
          </p>
          <div className="ce-hero-stats">
            <div className="ce-stat"><div className="v">13</div><div className="l">Casos documentados</div></div>
            <div className="ce-stat"><div className="v">6</div><div className="l">Sectores</div></div>
            <div className="ce-stat"><div className="v">6 años</div><div className="l">Track record</div></div>
            <div className="ce-stat"><div className="v">100%</div><div className="l">Con métrica verificada</div></div>
          </div>
        </section>

        {/* FILTERS */}
        <div className="ce-filter-row">
          <div className="ce-filters">
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`ce-filter${active === f.key ? " active" : ""}`}
                onClick={() => setActive(f.key)}
              >
                {f.dot && <span className="dot" />}
                {f.label}
                <span className="cnt">{f.count}</span>
              </button>
            ))}
          </div>
          <div className="ce-filter-meta">▎ ordenado por <span>impacto</span></div>
        </div>

        {/* FEATURED CASE */}
        <Link href="/casos-de-exito/detail/surescripts-certification" className="ce-featured">
          <div className="ce-feat-l">
            <span className="ce-feat-tag">caso destacado · oct 2023</span>
            <div>
              <h2>Cómo recertifiqué <em>Surescripts</em> en 22 días sin downtime</h2>
              <p className="lede">
                MediRec necesitaba recertificar 7 transacciones clínicas en abcEHR ante un cambio de estándar regulatorio.
                Diseñé una arquitectura desacoplada en Laravel y obtuve la certificación oficial sin interrumpir operación.
              </p>
            </div>
            <div className="ce-feat-metrics">
              <div className="ce-feat-m"><div className="lbl">Transacciones</div><div className="num">7/7</div></div>
              <div className="ce-feat-m"><div className="lbl">Red</div><div className="num">260K+</div></div>
              <div className="ce-feat-m"><div className="lbl">Tiempo</div><div className="num">22 d</div></div>
              <div className="ce-feat-m"><div className="lbl">Cert.</div><div className="num" style={{ fontSize: "16px" }}>PR-21677</div></div>
            </div>
            <div className="ce-feat-actions">
              <span className="primary">Ver caso completo <span>→</span></span>
              <span className="meta">healthcare · integration · tech lead</span>
            </div>
          </div>
          <div className="ce-feat-r">
            <div className="ce-pf-bar">
              <div className="lights"><span className="on" /><span /><span /></div>
              <span>certificación oficial · pr-21677</span>
              <span>1 / 4</span>
            </div>
            <div className="ce-pf-body">
              <div className="cap">abcEHR MU v12.5</div>
              <div>Successful completion of:</div>
              <ol>
                <li>Drug Compendia update to <span className="hl">National Library of Medicine</span></li>
                <li className="ok"><b>E-Prescribing CG v1.6</b> · 2022-12-23</li>
                <li>Transactions Certified: <span className="ok">NewRx, RxRenewal, RxChange, CancelRx, Status, Error, Verify</span></li>
                <li>Connectivity: Direct via HTTPS and mTLS</li>
              </ol>
              <div className="pageno">/ 100%</div>
            </div>
          </div>
        </Link>

        {/* GRID */}
        <div className="ce-grid">
          {visible.map(caso => (
            <Link
              key={caso.id}
              href={caso.href}
              className={`ce-card ${caso.variant}`}
            >
              <div
                className="ce-card-vis"
                style={caso.visTag === null ? { padding: 0 } : undefined}
              >
                {caso.visTag && <span className="ce-vis-tag">▎ {caso.visTag}</span>}
                {caso.vis}
              </div>
              <div className="ce-card-body">
                <div className="ce-card-meta">
                  <span className="cat">{caso.metaCat}</span>
                  <span className="yr">{caso.metaYear}</span>
                </div>
                <h3>{caso.title}</h3>
                <p>{caso.body}</p>
                <div className="ce-card-foot">
                  <div className="ce-chips">
                    {caso.chips.map((chip, i) => (
                      <span key={i} className={`ce-chip${chip.amber ? " amber" : ""}`}>{chip.label}</span>
                    ))}
                  </div>
                  <span className="ce-arrow">Ver caso <span className="a">→</span></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="ce-topnote">▎ fin de la lista · 13 / 13 casos</div>

        {/* END CTA */}
        <div className="ce-end-cta">
          <div>
            <h3>¿Tu proyecto en este <em>listado?</em></h3>
            <p className="end-sub">Si tienes un problema que se parece a alguno de estos casos, ya sé cómo resolverlo. Cuéntame el contexto.</p>
          </div>
          <div className="actions">
            <a href="/experiencia">Ver experiencia</a>
            <a href="mailto:moisesdavidaaron@gmail.com?subject=Proyecto%20similar%20a%20tus%20casos%20de%20%C3%A9xito" className="primary">Hablemos →</a>
          </div>
        </div>

      </main>
    </>
  )
}
