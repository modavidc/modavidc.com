"use client"

import { useState } from "react"
import { useLang } from "@/lib/lang"
import { diagramaCasoLabsContent } from "@/content/casos"

export function DiagramaCasoLabs() {
  const { lang } = useLang()
  const t = diagramaCasoLabsContent[lang]
  const [hover, setHover] = useState<string | null>(null)
  const [playKey, setPlayKey] = useState(0)

  const LINKS: Record<string, string[]> = {
    n1: ["e1", "e4", "n2", "n3"],
    n2: ["e1", "e2", "n1", "n3"],
    n3: ["e2", "e3", "e4", "n1", "n2", "n4"],
    n4: ["e3", "n3"],
  }
  const o = (k: string) => (!hover || k === hover || LINKS[hover]?.includes(k) ? 1 : 0.2)

  return (
    <div style={{ padding: "32px 24px", display: "flex", justifyContent: "center" }}>
      <figure style={{ margin: 0, width: "100%", maxWidth: 1040, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 32, padding: "clamp(20px,3vw,36px)", display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 18px", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--muted)" }}>
          <span style={{ color: "var(--accent-ink)" }}>caso_03</span><span>{t.where}</span>
          <button
            onClick={() => setPlayKey((k) => k + 1)}
            style={{ marginLeft: "auto", font: "inherit", color: "var(--accent-ink)", background: "var(--soft)", border: 0, borderRadius: 999, padding: "6px 14px", cursor: "pointer" }}
          >
            {t.replay}
          </button>
        </div>
        <div key={playKey} role="img" aria-label={t.aria} style={{ position: "relative", width: "100%", aspectRatio: "1000/380", containerType: "inline-size" } as React.CSSProperties}>
          <svg viewBox="0 0 1000 380" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
            <g style={{ opacity: o("e1"), transition: "opacity .25s" }}>
              <path d="M200 170 L280 170" fill="none" stroke="var(--accent)" strokeWidth={2} strokeDasharray="80" strokeDashoffset="80">
                <animate attributeName="stroke-dashoffset" from="80" to="0" begin="0.5s" dur="0.4s" fill="freeze" />
              </path>
              <path d="M270 164 L280 170 L270 176" fill="none" stroke="var(--accent)" strokeWidth={2} opacity={0}>
                <set attributeName="opacity" to="1" begin="0.9s" fill="freeze" />
              </path>
              <text x={240} y={156} textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize={12} fontWeight={600} fill="var(--muted)" opacity={0}>
                HL7 v2
                <animate attributeName="opacity" from="0" to="1" begin="0.9s" dur="0.3s" fill="freeze" />
              </text>
            </g>
            <g style={{ opacity: o("e2"), transition: "opacity .25s" }}>
              <path d="M460 170 L540 170" fill="none" stroke="var(--accent)" strokeWidth={2} strokeDasharray="80" strokeDashoffset="80">
                <animate attributeName="stroke-dashoffset" from="80" to="0" begin="1.1s" dur="0.4s" fill="freeze" />
              </path>
              <path d="M530 164 L540 170 L530 176" fill="none" stroke="var(--accent)" strokeWidth={2} opacity={0}>
                <set attributeName="opacity" to="1" begin="1.5s" fill="freeze" />
              </path>
              <text x={500} y={156} textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize={12} fontWeight={600} fill="var(--muted)" opacity={0}>
                REST
                <animate attributeName="opacity" from="0" to="1" begin="1.5s" dur="0.3s" fill="freeze" />
              </text>
            </g>
            <g style={{ opacity: o("e3"), transition: "opacity .25s" }}>
              <path d="M720 170 L800 170" fill="none" stroke="var(--accent)" strokeWidth={2} strokeDasharray="80" strokeDashoffset="80">
                <animate attributeName="stroke-dashoffset" from="80" to="0" begin="1.7s" dur="0.4s" fill="freeze" />
              </path>
              <path d="M790 164 L800 170 L790 176" fill="none" stroke="var(--accent)" strokeWidth={2} opacity={0}>
                <set attributeName="opacity" to="1" begin="2.1s" fill="freeze" />
              </path>
            </g>
            <g style={{ opacity: o("e4"), transition: "opacity .25s" }}>
              <path d="M630 220 C630 320 110 320 110 220" fill="none" stroke="var(--teal)" strokeWidth={1.5} strokeDasharray="4 6" opacity={0}>
                <animate attributeName="opacity" from="0" to="1" begin="2.3s" dur="0.4s" fill="freeze" />
              </path>
            </g>
            <circle cx={-100} cy={-100} r={6} fill="var(--accent)" opacity={0}>
              <set attributeName="opacity" to="1" begin="2.4s" fill="freeze" />
              <set attributeName="cx" to="0" begin="2.4s" fill="freeze" />
              <set attributeName="cy" to="0" begin="2.4s" fill="freeze" />
              <animateMotion dur="2.2s" begin="2.4s" repeatCount="indefinite" path="M110 170 L890 170" />
            </circle>
            <circle cx={-100} cy={-100} r={6} fill="var(--accent)" opacity={0}>
              <set attributeName="opacity" to=".55" begin="3.13s" fill="freeze" />
              <set attributeName="cx" to="0" begin="3.13s" fill="freeze" />
              <set attributeName="cy" to="0" begin="3.13s" fill="freeze" />
              <animateMotion dur="2.2s" begin="3.13s" repeatCount="indefinite" path="M110 170 L890 170" />
            </circle>
            <circle cx={-100} cy={-100} r={4} fill="var(--teal)" opacity={0}>
              <set attributeName="opacity" to="1" begin="2.8s" fill="freeze" />
              <set attributeName="cx" to="0" begin="2.8s" fill="freeze" />
              <set attributeName="cy" to="0" begin="2.8s" fill="freeze" />
              <animateMotion dur="2.6s" begin="2.8s" repeatCount="indefinite" path="M630 220 C630 320 110 320 110 220" />
            </circle>
            <g onMouseEnter={() => setHover("n1")} onMouseLeave={() => setHover(null)} style={{ opacity: o("n1"), transition: "opacity .25s" }}>
              <rect x={20} y={120} width={180} height={100} rx={18} fill="var(--bg)" stroke="var(--line)" opacity={0}>
                <animate attributeName="opacity" from="0" to="1" begin="0.1s" dur="0.35s" fill="freeze" />
              </rect>
            </g>
            <g onMouseEnter={() => setHover("n2")} onMouseLeave={() => setHover(null)} style={{ opacity: o("n2"), transition: "opacity .25s" }}>
              <rect x={280} y={110} width={180} height={120} rx={18} fill="var(--soft)" stroke="var(--accent)" strokeWidth={2} opacity={0}>
                <animate attributeName="opacity" from="0" to="1" begin="0.6s" dur="0.35s" fill="freeze" />
              </rect>
            </g>
            <g onMouseEnter={() => setHover("n3")} onMouseLeave={() => setHover(null)} style={{ opacity: o("n3"), transition: "opacity .25s" }}>
              <rect x={540} y={120} width={180} height={100} rx={18} fill="var(--surface)" stroke="var(--line)" opacity={0}>
                <animate attributeName="opacity" from="0" to="1" begin="1.2s" dur="0.35s" fill="freeze" />
              </rect>
            </g>
            <g onMouseEnter={() => setHover("n4")} onMouseLeave={() => setHover(null)} style={{ opacity: o("n4"), transition: "opacity .25s" }}>
              <rect x={800} y={120} width={180} height={100} rx={18} fill="var(--surface)" stroke="var(--line)" opacity={0}>
                <animate attributeName="opacity" from="0" to="1" begin="1.8s" dur="0.35s" fill="freeze" />
              </rect>
            </g>
          </svg>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", fontSize: "1.7cqw", lineHeight: 1.25 }}>
            <div style={{ position: "absolute", left: "2%", top: "31.6%", width: "18%", height: "26.3%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: ".3em", textAlign: "center", opacity: o("n1"), transition: "opacity .25s" }}>
              <div style={{ animation: "fin .35s .1s both", display: "flex", flexDirection: "column", gap: ".3em" }}>
                <b style={{ fontWeight: 700 }}>{t.n1}</b>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".72em", color: "var(--muted)" }}>{t.n1s}</span>
              </div>
            </div>
            <div style={{ position: "absolute", left: "2%", top: "23%", width: "18%", textAlign: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: ".72em", color: "var(--muted)", animation: "fin .35s .1s both", opacity: o("n1") }}>{t.n1a}</div>
            <div style={{ position: "absolute", left: "28%", top: "28.9%", width: "18%", height: "31.6%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", opacity: o("n2"), transition: "opacity .25s" }}>
              <div style={{ animation: "fin .35s .6s both", display: "flex", flexDirection: "column", gap: ".3em" }}>
                <b style={{ fontWeight: 800 }}>{t.n2}</b>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".72em", color: "var(--accent-ink)" }}>{t.n2s}<br />{t.n2s2}</span>
              </div>
            </div>
            <div style={{ position: "absolute", left: "28%", top: "20.5%", width: "18%", textAlign: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: ".72em", fontWeight: 600, color: "var(--accent-ink)", animation: "fin .35s .6s both", opacity: o("n2") }}>HL7 → REST</div>
            <div style={{ position: "absolute", left: "54%", top: "31.6%", width: "18%", height: "26.3%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", opacity: o("n3"), transition: "opacity .25s" }}>
              <div style={{ animation: "fin .35s 1.2s both", display: "flex", flexDirection: "column", gap: ".3em" }}>
                <b style={{ fontWeight: 700 }}>MediRec</b>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".72em", color: "var(--muted)" }}>{t.n3s}</span>
              </div>
            </div>
            <div style={{ position: "absolute", left: "80%", top: "31.6%", width: "18%", height: "26.3%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", opacity: o("n4"), transition: "opacity .25s" }}>
              <div style={{ animation: "fin .35s 1.8s both", display: "flex", flexDirection: "column", gap: ".3em" }}>
                <b style={{ fontWeight: 700 }}>{t.n4}</b>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".72em", color: "var(--muted)" }}>{t.n4s}</span>
              </div>
            </div>
            <div style={{ position: "absolute", left: "17%", top: "78.5%", width: "40%", textAlign: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: ".72em", fontWeight: 600, color: "var(--teal)", animation: "fin .3s 2.5s both", opacity: o("e4") }}>{t.ack}</div>
            <div style={{ position: "absolute", right: "2%", bottom: "12%", display: "flex", flexDirection: "column", alignItems: "flex-end", animation: "fin .4s 2.6s both" }}>
              <b style={{ fontSize: "2.6em", fontWeight: 800, letterSpacing: "-.05em", lineHeight: 1, color: "var(--accent)" }}>−70%</b>
              <span style={{ fontSize: ".82em", fontWeight: 600 }}>{t.metric}</span>
            </div>
          </div>
        </div>
        <figcaption style={{ fontSize: 16, lineHeight: 1.5, color: "var(--muted)", maxWidth: "62ch" }}>{t.cap}</figcaption>
      </figure>
    </div>
  )
}
