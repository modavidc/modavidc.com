import { DiagramaCasoLabs } from "@/components/diagrama-caso-labs"

type Step = { h: string; d: string }
type CaseCardProps = {
  index: number
  where: string
  title: string
  metric: string
  label: string
  beforeV: string
  afterV: string
  beforeW?: string
  afterW: string
  steps: Step[]
  stack: string[]
  prodLabel: string
  beforeLabel: string
  afterLabel: string
  stepLabels: string[]
  diagram?: boolean
}

export function CaseCard({
  index, where, title, metric, label, beforeV, afterV, beforeW, afterW, steps, stack,
  prodLabel, beforeLabel, afterLabel, diagram,
}: CaseCardProps) {
  return (
    <div data-deckcard="" style={{ scrollMarginTop: 110 }}>
      <article style={{ borderRadius: "clamp(28px,4vw,44px)", background: "var(--surface)", overflow: "hidden", willChange: "transform", transition: "filter .2s" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 18px", padding: "16px clamp(24px,4vw,44px)", borderBottom: "1px solid var(--line)", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--muted)" }}>
          <span style={{ color: "var(--accent-ink)" }}>caso_0{index + 1}</span>
          <span>{where}</span>
          <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, color: "var(--accent-ink)", background: "var(--soft)", borderRadius: 999, padding: "4px 12px" }}>
            <span className="ms" style={{ fontSize: 16 }}>check_circle</span>{prodLabel}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "40px clamp(32px,5vw,72px)", padding: "clamp(28px,4vw,52px) clamp(24px,4vw,44px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <h2 style={{ margin: 0, fontSize: "clamp(30px,3.6vw,48px)", fontWeight: 800, letterSpacing: "-.045em", lineHeight: 1.02 }}>{title}</h2>
            <div>
              <div data-count="" style={{ fontWeight: 800, fontSize: "clamp(80px,11vw,150px)", letterSpacing: "-.07em", lineHeight: 0.85, color: "var(--accent)", fontVariantNumeric: "tabular-nums" }}>{metric}</div>
              <div style={{ fontSize: 18, fontWeight: 700, marginTop: 12 }}>{label}</div>
            </div>
            <div style={{ display: "grid", gap: 16, padding: 22, borderRadius: 22, background: "var(--bg)", border: "1px solid var(--line)" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "var(--muted)", marginBottom: 8 }}>
                  <span>{beforeLabel}</span><b style={{ color: "var(--fg)" }}>{beforeV}</b>
                </div>
                <div style={{ height: 16, borderRadius: 8, background: "color-mix(in srgb,var(--fg) 8%,transparent)", overflow: "hidden" }}>
                  <div data-grow="" data-w={beforeW || "100%"} style={{ height: "100%", width: beforeW || "100%", borderRadius: 8, background: "color-mix(in srgb,var(--fg) 30%,transparent)" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "var(--muted)", marginBottom: 8 }}>
                  <span>{afterLabel}</span><b style={{ color: "var(--accent-ink)" }}>{afterV}</b>
                </div>
                <div style={{ height: 16, borderRadius: 8, background: "color-mix(in srgb,var(--fg) 8%,transparent)", overflow: "hidden" }}>
                  <div data-grow="" data-w={afterW} style={{ height: "100%", width: afterW, borderRadius: 8, background: "var(--accent)", boxShadow: "0 0 18px color-mix(in srgb,var(--accent) 50%,transparent)" }} />
                </div>
              </div>
            </div>
          </div>
          <div data-stagger="" data-stagger-step="180" data-delay="250" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {steps.map((st, i) => (
              <div key={st.h} style={{ display: "grid", gridTemplateColumns: "40px minmax(0,1fr)", gap: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ flex: "none", width: 40, height: 40, borderRadius: "50%", background: i === 2 ? "var(--accent)" : "var(--card)", color: i === 2 ? "#fff" : "var(--accent-ink)", border: "2px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 700 }}>
                    0{i + 1}
                  </span>
                  <span style={{ flex: 1, width: 2, background: i === 2 ? "transparent" : "color-mix(in srgb,var(--accent) 35%,transparent)", margin: "6px 0" }} />
                </div>
                <div style={{ padding: "6px 0 30px" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{st.h}</div>
                  <p style={{ margin: "6px 0 0", fontSize: 18, lineHeight: 1.45 }}>{st.d}</p>
                </div>
              </div>
            ))}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingLeft: 56 }}>
              {stack.map((k) => (
                <span key={k} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, fontWeight: 600, border: "1px solid var(--line)", background: "var(--bg)", borderRadius: 999, padding: "5px 12px", color: "var(--muted)" }}>{k}</span>
              ))}
            </div>
          </div>
        </div>
        {diagram && <DiagramaCasoLabs />}
      </article>
    </div>
  )
}
