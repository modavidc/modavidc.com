"use client"

import { useState } from "react"
import Link from "next/link"

type Cat = "todos" | "finops" | "healthcare" | "saas" | "iot" | "personal"

const FILTERS: { key: Cat; label: string; color: string }[] = [
  { key: "todos", label: "Todos", color: "" },
  { key: "finops", label: "FinOps", color: "var(--green)" },
  { key: "healthcare", label: "Healthcare", color: "var(--violet)" },
  { key: "saas", label: "SaaS", color: "var(--blue)" },
  { key: "iot", label: "Mobile / IoT", color: "var(--amber)" },
  { key: "personal", label: "Personal", color: "" },
]

const CASOS = [
  {
    id: "medirec-aws",
    cats: ["finops", "healthcare"],
    meta: ["Work · FinOps", "2023"],
    title: "Cómo reduje 58% la factura AWS de MediRec",
    body: "Re-arquitectura y gobernanza de costos en plataforma Healthcare con 20K+ usuarios. Rightsizing, auto-scaling y eliminación de recursos huérfanos — sin tocar uptime.",
    metric: "-58% AWS · $180K",
    metricNeutral: false,
    svg: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill="#111316"/>
        <line x1="0" y1="180" x2="400" y2="30" stroke="#202227" strokeWidth="1"/>
        <line x1="0" y1="140" x2="400" y2="60" stroke="#202227" strokeWidth="1"/>
        <polyline points="0,160 60,140 130,120 200,80 280,55 360,40 400,38" stroke="oklch(67% 0.17 148)" strokeWidth="1.5" fill="none"/>
        <polyline points="0,170 60,165 130,155 200,145 280,130 360,110 400,105" stroke="#2a2d33" strokeWidth="1" fill="none"/>
        <text x="20" y="170" fontFamily="monospace" fontSize="9" fill="#555c6a" letterSpacing="1">-58% AWS</text>
      </svg>
    ),
  },
  {
    id: "licencias-farmaceuticas",
    cats: ["finops", "healthcare"],
    meta: ["Work · FinOps", "2024"],
    title: "Cómo eliminé $20k/año en licencias farmacéuticas",
    body: "Migración de LexComp a NLMI sin perder integridad clínica. Sistema de medicamentos que cumple PREIS con cero costo de licencias.",
    metric: "-$20k/año · 0 downtime",
    metricNeutral: false,
    svg: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill="#111316"/>
        <rect x="40" y="40" width="320" height="100" rx="4" fill="#181a1d" stroke="#202227" strokeWidth="1"/>
        <text x="60" y="68" fontFamily="monospace" fontSize="10" fill="#555c6a">LexComp → NLMI</text>
        <line x1="60" y1="80" x2="340" y2="80" stroke="#202227" strokeWidth="1"/>
        <text x="60" y="98" fontFamily="monospace" fontSize="9" fill="#9aa0ae">licencias: $0 / año</text>
        <text x="60" y="114" fontFamily="monospace" fontSize="9" fill="oklch(67% 0.17 148)">cobertura: 100%</text>
        <text x="60" y="130" fontFamily="monospace" fontSize="9" fill="#555c6a">integridad clínica: ✓</text>
      </svg>
    ),
  },
  {
    id: "lab-middleware",
    cats: ["saas", "healthcare"],
    meta: ["Work · Healthcare", "2022"],
    title: "De fax a real-time: resultados de lab en minutos",
    body: "Middleware HL7 que redujo el tiempo de entrega de resultados clínicos de 6 horas a menos de 90 minutos. Cero cambios en el sistema de laboratorio legacy.",
    metric: "-70% tiempo clínico",
    metricNeutral: false,
    svg: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill="#111316"/>
        <rect x="30" y="50" width="160" height="80" rx="3" fill="#181a1d" stroke="#202227"/>
        <text x="45" y="75" fontFamily="monospace" fontSize="9" fill="#555c6a">Lab System</text>
        <text x="45" y="92" fontFamily="monospace" fontSize="8" fill="#2a2d33">HL7 v2.x</text>
        <path d="M190 90 L210 90" stroke="oklch(67% 0.17 148)" strokeWidth="1.5"/>
        <rect x="210" y="50" width="160" height="80" rx="3" fill="#181a1d" stroke="#202227"/>
        <text x="225" y="75" fontFamily="monospace" fontSize="9" fill="#9aa0ae">Middleware</text>
        <text x="225" y="92" fontFamily="monospace" fontSize="8" fill="oklch(67% 0.17 148)">-70% latency</text>
        <text x="30" y="158" fontFamily="monospace" fontSize="8" fill="#555c6a">6h → 90min · resultados clínicos</text>
      </svg>
    ),
  },
  {
    id: "gov-tech-preis",
    cats: ["saas", "healthcare"],
    meta: ["Work · Gov-Tech", "2023"],
    title: "Integración Gov-Tech: de Excel manual a API automatizada",
    body: "API crítica para reportes de inmunizaciones al Gobierno de Puerto Rico. De proceso manual en Excel a sistema automatizado con auditoría completa.",
    metric: "100% compliance",
    metricNeutral: true,
    svg: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill="#111316"/>
        <text x="20" y="40" fontFamily="monospace" fontSize="9" fill="#555c6a" letterSpacing="2">GOV-TECH · PUERTO RICO</text>
        <rect x="20" y="50" width="60" height="40" rx="2" fill="#181a1d" stroke="#202227"/>
        <rect x="90" y="50" width="60" height="40" rx="2" fill="#181a1d" stroke="#202227"/>
        <rect x="160" y="50" width="60" height="40" rx="2" fill="#181a1d" stroke="#202227"/>
        <rect x="230" y="50" width="60" height="40" rx="2" fill="#181a1d" stroke="#202227"/>
        <rect x="300" y="50" width="60" height="40" rx="2" fill="#181a1d" stroke="oklch(67% 0.17 148)"/>
        <line x1="20" y1="110" x2="380" y2="110" stroke="#202227"/>
        <text x="20" y="130" fontFamily="monospace" fontSize="9" fill="#9aa0ae">API automatizada · 100% compliance</text>
        <text x="20" y="148" fontFamily="monospace" fontSize="8" fill="#555c6a">Antes: Excel manual · Ahora: real-time</text>
      </svg>
    ),
  },
  {
    id: "tcuida-iot",
    cats: ["iot", "saas"],
    meta: ["Work · SaaS / IoT", "2023"],
    title: "T-Cuida — sistema IoT que construí desde cero",
    body: "Ecosistema SaaS completo: wearables, GPS, dashboard real-time y comunicación familiar. De cero a App Store + Play Store con Flutter en 3 semanas.",
    metric: "3 sem · 100% ownership",
    metricNeutral: true,
    svg: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill="#111316"/>
        <circle cx="200" cy="90" r="55" fill="none" stroke="#202227" strokeWidth="1"/>
        <circle cx="200" cy="90" r="35" fill="none" stroke="#2a2d33" strokeWidth="1"/>
        <circle cx="200" cy="90" r="6" fill="oklch(67% 0.17 148)"/>
        <circle cx="145" cy="60" r="5" fill="#181a1d" stroke="#202227"/>
        <circle cx="255" cy="60" r="5" fill="#181a1d" stroke="#202227"/>
        <circle cx="145" cy="120" r="5" fill="#181a1d" stroke="#202227"/>
        <circle cx="255" cy="120" r="5" fill="#181a1d" stroke="#202227"/>
        <line x1="200" y1="90" x2="145" y2="60" stroke="#555c6a" strokeWidth="1"/>
        <line x1="200" y1="90" x2="255" y2="60" stroke="#555c6a" strokeWidth="1"/>
        <line x1="200" y1="90" x2="145" y2="120" stroke="#555c6a" strokeWidth="1"/>
        <line x1="200" y1="90" x2="255" y2="120" stroke="#555c6a" strokeWidth="1"/>
        <text x="20" y="168" fontFamily="monospace" fontSize="8" fill="#555c6a">T-Cuida · SaaS IoT · wearables + GPS + dashboard</text>
      </svg>
    ),
  },
  {
    id: "dashboard-emergencias",
    cats: ["saas"],
    meta: ["Work · SaaS", "2023"],
    title: "De 3 minutos a 1 — dashboard de emergencias",
    body: "Panel de atención en tiempo real que triplicó la velocidad de respuesta ante emergencias de campo. Stack: React + WebSockets + AWS.",
    metric: "3min → 1min",
    metricNeutral: false,
    svg: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill="#111316"/>
        <rect x="30" y="30" width="340" height="120" rx="4" fill="#181a1d" stroke="#202227"/>
        <rect x="50" y="50" width="120" height="80" rx="3" fill="#0b0c0e" stroke="#202227"/>
        <rect x="190" y="50" width="160" height="36" rx="3" fill="#0b0c0e" stroke="#202227"/>
        <rect x="190" y="94" width="160" height="36" rx="3" fill="#0b0c0e" stroke="oklch(67% 0.17 148)"/>
        <text x="60" y="97" fontFamily="monospace" fontSize="22" fontWeight="500" fill="oklch(67% 0.17 148)">3→1</text>
        <text x="60" y="118" fontFamily="monospace" fontSize="8" fill="#555c6a">min respuesta</text>
        <text x="200" y="73" fontFamily="monospace" fontSize="8" fill="#555c6a">alertas · 24/7</text>
        <text x="200" y="117" fontFamily="monospace" fontSize="9" fill="oklch(67% 0.17 148)">3min → 1min</text>
      </svg>
    ),
  },
  {
    id: "tcpip-bridge",
    cats: ["iot"],
    meta: ["Work · IoT", "2023"],
    title: "Bridge TCP/IP–WebSocket: 400% más rápido sin cambiar hardware",
    body: "Puente que conecta dispositivos IoT legacy con aplicaciones web modernas vía WebSocket. Sin reemplazar hardware existente.",
    metric: "+400% velocidad",
    metricNeutral: false,
    svg: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill="#111316"/>
        <polyline points="20,150 60,148 100,145 140,130 180,80 220,50 260,45 300,42 340,40 380,38" stroke="oklch(67% 0.17 148)" strokeWidth="2" fill="none"/>
        <polyline points="20,165 60,162 100,155 140,140 180,100 220,75 260,68 300,65 340,63 380,61" stroke="#2a2d33" strokeWidth="1" fill="none"/>
        <text x="20" y="30" fontFamily="monospace" fontSize="9" fill="#555c6a" letterSpacing="1">TCP/IP BRIDGE · WEBSOCKET</text>
        <text x="20" y="48" fontFamily="monospace" fontSize="22" fontWeight="500" fill="oklch(67% 0.17 148)">+400%</text>
        <text x="20" y="65" fontFamily="monospace" fontSize="8" fill="#555c6a">programming speed</text>
      </svg>
    ),
  },
  {
    id: "medirec-mobile",
    cats: ["iot", "saas"],
    meta: ["Work · Mobile", "2024"],
    title: "Primera app móvil de MediRec en 2 meses",
    body: "De cero a App Store + Play Store con Flutter y Firebase. Resultado de laboratorio en el bolsillo del paciente. Entrega en 8 semanas.",
    metric: "2 meses · delivery",
    metricNeutral: true,
    svg: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill="#111316"/>
        <rect x="80" y="30" width="100" height="120" rx="12" fill="#181a1d" stroke="#202227"/>
        <rect x="90" y="50" width="80" height="85" rx="4" fill="#0b0c0e"/>
        <circle cx="130" cy="142" r="6" fill="none" stroke="#2a2d33" strokeWidth="1.5"/>
        <rect x="100" y="58" width="60" height="8" rx="2" fill="#202227"/>
        <rect x="100" y="70" width="45" height="6" rx="2" fill="#202227"/>
        <rect x="100" y="80" width="55" height="6" rx="2" fill="#202227"/>
        <text x="220" y="70" fontFamily="monospace" fontSize="9" fill="#555c6a">2 meses</text>
        <text x="220" y="88" fontFamily="monospace" fontSize="9" fill="#9aa0ae">App Store</text>
        <text x="220" y="106" fontFamily="monospace" fontSize="9" fill="#9aa0ae">Play Store</text>
        <text x="220" y="126" fontFamily="monospace" fontSize="8" fill="oklch(67% 0.17 148)">Flutter · Firebase</text>
      </svg>
    ),
  },
  {
    id: "el-estoico",
    cats: ["personal"],
    meta: ["Personal", "2025"],
    title: "El Estoico — performance perfecta en 0.8s",
    body: "Landing page con Core Web Vitals verdes y arquitectura moderna. FCP de 0.8s, 100% Lighthouse, sin frameworks pesados.",
    metric: "FCP 0.8s",
    metricNeutral: false,
    svg: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill="#111316"/>
        <rect x="30" y="40" width="340" height="100" rx="4" fill="#181a1d" stroke="#202227"/>
        <text x="50" y="70" fontFamily="monospace" fontSize="10" fill="oklch(67% 0.17 148)">FCP 0.8s</text>
        <text x="50" y="88" fontFamily="monospace" fontSize="9" fill="#9aa0ae">Core Web Vitals</text>
        <line x1="50" y1="100" x2="350" y2="100" stroke="#202227"/>
        <rect x="50" y="108" width="180" height="6" rx="3" fill="#202227"/>
        <rect x="50" y="108" width="162" height="6" rx="3" fill="oklch(67% 0.17 148)" opacity=".6"/>
        <text x="242" y="116" fontFamily="monospace" fontSize="8" fill="#555c6a">90%</text>
        <text x="50" y="136" fontFamily="monospace" fontSize="8" fill="#555c6a">El Estoico · landing page · performance</text>
      </svg>
    ),
  },
  {
    id: "grupero",
    cats: ["personal"],
    meta: ["Personal", "2025"],
    title: "Grupero — la radiografía de tus grupos de WhatsApp",
    body: "App Android que analiza participación, detecta inactivos y eventos en grupos de WhatsApp. Procesamiento 100% local, sin servidor.",
    metric: "100% privado",
    metricNeutral: true,
    svg: (
      <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill="#111316"/>
        <circle cx="80" cy="90" r="30" fill="#181a1d" stroke="#202227"/>
        <circle cx="80" cy="90" r="18" fill="#0b0c0e" stroke="#202227"/>
        <circle cx="200" cy="90" r="30" fill="#181a1d" stroke="#202227"/>
        <circle cx="320" cy="90" r="30" fill="#181a1d" stroke="#202227"/>
        <line x1="110" y1="90" x2="170" y2="90" stroke="#202227"/>
        <line x1="230" y1="90" x2="290" y2="90" stroke="#202227"/>
        <text x="20" y="155" fontFamily="monospace" fontSize="8" fill="#555c6a">Grupero · análisis de grupos WhatsApp · 100% privado</text>
      </svg>
    ),
  },
]

export default function CasosPage() {
  const [active, setActive] = useState<Cat>("todos")

  const visible = active === "todos"
    ? CASOS
    : CASOS.filter(c => c.cats.includes(active))

  return (
    <>
      <div className="page-header page-header--center">
        <div className="section-kicker" style={{justifyContent:'center'}}>Casos de Éxito</div>
        <h1 className="page-h1">Impacto <em>medible.</em></h1>
        <p className="page-sub">Decisiones técnicas con ROI comprobable. Proyectos reales, métricas verificables.</p>
      </div>

      <div className="page-wrap">
        <div className="filters-wrap">
          <div className="filters">
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`filter-btn${active === f.key ? " active" : ""}`}
                onClick={() => setActive(f.key)}
              >
                {f.color && <span className="filter-dot" style={{color: f.color}} />}
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="casos-grid--3">
          {visible.map((caso, i) => (
            <Link key={i} href={`/casos-de-exito/detail/${caso.id}`} className="caso-card--3 caso-card--link">
              <div className="caso-img">{caso.svg}</div>
              <div className="caso-img-inner">
                <div className="caso-meta">
                  <span>{caso.meta[0]}</span>
                  <span>{caso.meta[1]}</span>
                </div>
                <div className="caso-title">{caso.title}</div>
                <div className="caso-body">{caso.body}</div>
              </div>
              <div className="caso-foot">
                <span className={`metric-tag${caso.metricNeutral ? " neutral" : ""}`}>{caso.metric}</span>
                <span className="caso-link">Ver caso →</span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{padding:'48px 0 96px'}}>
          <div className="cta-band">
            <div>
              <h3 className="cta-band-h">¿Tu proyecto en este <em>listado</em>?</h3>
              <p className="cta-band-sub">Si tienes un problema que se parece a alguno de estos casos — ya sé cómo resolverlo. Cuéntame el contexto.</p>
            </div>
            <div className="cta-band-btns">
              <a className="btn btn-primary" href="mailto:moisesdavidaaron@gmail.com">Hablemos →</a>
              <a className="btn btn-secondary" href="/experiencia">Ver experiencia</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
