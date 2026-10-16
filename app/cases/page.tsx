"use client"

import { useLang } from "@/lib/lang"
import { Nav } from "@/components/nav"
import { Cierre } from "@/components/cierre"
import { CaseCard } from "@/components/case-card"
import { casosContent } from "@/content/casos"

export default function CasosPage() {
  const { lang } = useLang()
  const t = casosContent[lang]
  const cases = t.cases.map((c, i) => ({
    ...c,
    beforeW: c.beforeW || "100%",
    id: "caso-" + (i + 1),
    big: c.metric,
    steps: [c.problem, c.decision, c.result].map((d, k) => ({ h: t.steps[k], d })),
  }))

  return (
    <div className="container">
      <Nav active="casos" />

      <header data-stagger="" style={{ minHeight: "calc(100vh - 90px)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 0 60px" }}>
        <div style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--accent-ink)", background: "var(--card)", border: "1px solid var(--line)", boxShadow: "var(--shadow)", borderRadius: 999, padding: "8px 16px" }}>
          ~/moises $ cat casos-de-exito.log<span style={{ width: 8, height: 15, background: "var(--accent)", animation: "blink 1s steps(1) infinite" }} />
        </div>
        <h1 style={{ margin: "26px 0 0", fontSize: "clamp(52px,8vw,124px)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-.06em", maxWidth: "13ch" }}>
          {t.h1a} <span style={{ color: "var(--accent)" }}>{t.h1b}</span>
        </h1>
        <p style={{ margin: "28px 0 0", fontSize: "clamp(18px,2vw,21px)", color: "var(--muted)", maxWidth: "44ch" }}>{t.lead}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 14, marginTop: 40 }}>
          {cases.map((c) => (
            <a key={c.id} href={`#${c.id}`} data-tilt="8" data-glow="" style={{ display: "flex", flexDirection: "column", gap: 6, padding: "22px 24px", borderRadius: 24, background: "var(--surface)", color: "var(--fg)", textDecoration: "none" }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>{c.where}</span>
              <b style={{ fontSize: "clamp(44px,5vw,64px)", fontWeight: 800, letterSpacing: "-.06em", lineHeight: 1, color: "var(--accent)" }}>{c.big}</b>
              <span style={{ fontSize: 15, fontWeight: 600 }}>{c.label}</span>
            </a>
          ))}
        </div>
      </header>

      <div data-deck="" style={{ display: "grid", gap: 40 }}>
        {cases.map((c, i) => (
          <div key={c.id} id={c.id}>
            <CaseCard
              index={i}
              where={c.where}
              title={c.title}
              metric={c.metric}
              label={c.label}
              beforeV={c.beforeV}
              afterV={c.afterV}
              beforeW={c.beforeW}
              afterW={c.afterW}
              steps={c.steps}
              stack={c.stack}
              prodLabel={t.prod}
              beforeLabel={t.before}
              afterLabel={t.after}
              stepLabels={t.steps as unknown as string[]}
              diagram={c.diagram}
            />
          </div>
        ))}
      </div>

      <section style={{ padding: "120px 0 0" }}>
        <div data-reveal="" style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{t.agEyebrow}</div>
        <h2 data-reveal="" data-delay="80" style={{ margin: "14px 0 0", fontSize: "clamp(34px,4.6vw,58px)", fontWeight: 800, letterSpacing: "-.045em", lineHeight: 1, maxWidth: "18ch" }}>{t.agTitle}</h2>
        <p data-reveal="" data-delay="160" style={{ margin: "18px 0 0", color: "var(--muted)", fontSize: 18, maxWidth: "52ch" }}>{t.agLead}</p>

        <article data-reveal="" style={{ marginTop: 40, borderRadius: "clamp(28px,4vw,40px)", background: "var(--surface)", border: "1px solid var(--line)", padding: "clamp(24px,4vw,44px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "32px clamp(32px,5vw,64px)", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--muted)" }}>{t.atlas.role}</div>
            <h3 style={{ margin: 0, fontSize: "clamp(34px,4vw,52px)", fontWeight: 800, letterSpacing: "-.05em", lineHeight: 1 }}>{t.atlas.name}</h3>
            <p style={{ margin: 0, fontSize: 18 }}>{t.atlas.desc}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,180px),1fr))", gap: 12 }}>
              <div style={{ padding: 18, borderRadius: 20, background: "var(--bg)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)" }}>{t.atlas.aH}</div>
                <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1.1 }}>{t.atlas.aV}</div>
                <div style={{ fontSize: 14, color: "var(--muted)" }}>{t.atlas.aD}</div>
              </div>
              <div style={{ padding: 18, borderRadius: 20, background: "var(--soft)", border: "2px solid var(--accent)", display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent-ink)" }}>
                  <span>{t.atlas.bH}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, textTransform: "none", letterSpacing: 0 }}>
                    <span className="ms" style={{ fontSize: 16 }}>check_circle</span>{t.atlas.pick}
                  </span>
                </div>
                <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1.1 }}>{t.atlas.bV}</div>
                <div style={{ fontSize: 14, color: "var(--muted)" }}>{t.atlas.bD}</div>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: 15, color: "var(--muted)" }}>{t.atlas.why}</p>
          </div>
        </article>

        <div data-stagger="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 16, marginTop: 16 }}>
          {t.agents.map((g) => (
            <article key={g.name} style={{ display: "flex", flexDirection: "column", gap: 10, padding: 28, borderRadius: 28, background: "var(--surface)", border: "1px solid var(--line)" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--muted)" }}>{g.role}</div>
              <h3 style={{ margin: 0, fontSize: 28, fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1.05 }}>{g.name}</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 16 }}>{g.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "120px 0 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 18 }}>
        <p data-reveal="" style={{ margin: 0, fontSize: "clamp(26px,3.2vw,42px)", fontWeight: 700, letterSpacing: "-.035em", lineHeight: 1.15, maxWidth: "20ch" }}>{t.end}</p>
        <div data-reveal="" data-delay="200" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: "var(--muted)" }}>{t.more}</div>
      </section>

      <Cierre />
    </div>
  )
}
