"use client"

import { useLang } from "@/lib/lang"
import { Nav } from "@/components/nav"
import { Cierre } from "@/components/cierre"
import { experienciaContent } from "@/content/experiencia"

export default function ExperienciaPage() {
  const { lang } = useLang()
  const t = experienciaContent[lang]
  const roles = t.roles.map((r, i) => ({
    ...r,
    idx: i,
    num: "0" + (i + 1),
    present: !!r.present,
    inset: i * 12 + "px",
    layerN: (lang === "es" ? "piso_0" : "floor_0") + (i + 1),
    file: r.short.toLowerCase().replace(/[^a-z]/g, "") + ".diff",
    count: r.diff.length,
    stackStr: r.stack.map((s) => "'" + s + "'").join(", "),
    diff: r.diff.map((d, k) => ({ ...d, ln1: k * 2 + 1, ln2: k * 2 + 2 })),
  }))
  const floorsDesc = roles.slice().reverse()

  return (
    <div className="container">
      <Nav active="exp" />

      <header data-stagger="" style={{ padding: "clamp(56px,8vw,110px) 0 40px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--accent-ink)", background: "var(--card)", border: "1px solid var(--line)", boxShadow: "var(--shadow)", borderRadius: 999, padding: "8px 16px" }}>
          ~/moises $ git log --career<span style={{ width: 8, height: 15, background: "var(--accent)", animation: "blink 1s steps(1) infinite" }} />
        </div>
        <h1 style={{ margin: "26px 0 0", fontSize: "clamp(52px,8.4vw,128px)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-.06em", maxWidth: "12ch" }}>
          {t.h1a} <span style={{ color: "var(--accent)" }}>{t.h1b}</span>
        </h1>
        <p style={{ margin: "28px 0 0", fontSize: "clamp(18px,2vw,21px)", color: "var(--muted)", maxWidth: "44ch" }}>{t.lead}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 34 }}>
          {t.stats.map((s) => (
            <div key={s.l} style={{ display: "flex", alignItems: "baseline", gap: 10, padding: "14px 20px", borderRadius: 18, background: "var(--surface)" }}>
              <b style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-.04em", color: "var(--fg)" }}>{s.n}</b>
              <span style={{ fontSize: 14, color: "var(--muted)" }}>{s.l}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 40, fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
          <span className="ms" style={{ fontSize: 18, color: "var(--accent)" }}>touch_app</span>{t.hint}
        </div>
      </header>

      <section data-scrolly="" style={{ position: "relative", height: "560vh" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", display: "grid", gridTemplateColumns: "170px minmax(0,1fr) minmax(0,1.08fr)", gap: "12px 40px", alignItems: "center", alignContent: "center", overflow: "hidden", paddingTop: 84 }}>

          <div data-meter="" style={{ alignSelf: "center", display: "flex", flexDirection: "column", gap: 10, padding: 18, borderRadius: 28, background: "var(--card)", border: "1px solid var(--line)", boxShadow: "var(--shadow)" }}>
            <div style={{ position: "relative", height: 54, borderRadius: 14, background: "#030604", border: "1px solid rgba(127,214,160,.18)", boxShadow: "inset 0 0 24px rgba(61,190,114,.15)", overflow: "hidden", marginBottom: 6 }}>
              {roles.map((r) => (
                <div key={r.idx} data-ghost={r.idx} style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", color: "#9CFFC3", textShadow: "0 0 12px rgba(127,214,160,.8)", opacity: 0, transition: "opacity .35s, transform .45s cubic-bezier(.2,.7,.2,1)" }}>
                  <b style={{ fontSize: 20, lineHeight: 1 }}>▲ {r.num}</b>
                  <span style={{ fontSize: 10, letterSpacing: ".1em", opacity: 0.8 }}>{r.y}</span>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: ".14em", color: "var(--muted)", textAlign: "center", marginBottom: 4 }}>{t.elevator}</div>
            {floorsDesc.map((f) => (
              <button key={f.idx} type="button" data-goto={f.idx} data-floorbtn={f.idx} style={{ appearance: "none", margin: 0, font: "inherit", textAlign: "left", width: "100%", background: "transparent", boxSizing: "border-box", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", borderRadius: 16, border: "1px solid var(--line)", color: "var(--fg)", transition: "background .3s, color .3s, box-shadow .3s, border-color .3s" }}>
                <span style={{ flex: "none", width: 30, height: 30, borderRadius: "50%", border: "1.5px solid currentColor", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: 12 }}>{f.num}</span>
                <span style={{ minWidth: 0, lineHeight: 1.15 }}>
                  <b style={{ display: "block", fontSize: 13 }}>{f.y}</b>
                  <small style={{ fontSize: 11, opacity: 0.75, whiteSpace: "nowrap" }}>{f.short}</small>
                </span>
              </button>
            ))}
          </div>

          <div data-stage="" style={{ position: "relative", height: "min(70vh,600px)", perspective: 1800, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {roles.map((r) => (
              <div key={r.idx} data-ghost={r.idx} aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: "4%", textAlign: "center", fontSize: "clamp(120px,15vw,230px)", fontWeight: 800, letterSpacing: "-.07em", lineHeight: 1, color: "transparent", WebkitTextStroke: "1.5px color-mix(in srgb,var(--accent) 35%,transparent)", opacity: 0, transition: "opacity .5s, transform .7s cubic-bezier(.2,.7,.2,1)", pointerEvents: "none" }}>
                {r.y}
              </div>
            ))}
            <div data-stack="" style={{ position: "relative", width: "min(250px,22vw)", height: "min(250px,22vw)", translate: "0 90px", transformStyle: "preserve-3d", transform: "rotateX(58deg) rotateZ(-44deg)" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: "-90%", transform: "translateZ(-40px)", backgroundImage: "linear-gradient(color-mix(in srgb,var(--fg) 10%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--fg) 10%,transparent) 1px,transparent 1px)", backgroundSize: "28px 28px", WebkitMaskImage: "radial-gradient(closest-side,#000 20%,transparent)", maskImage: "radial-gradient(closest-side,#000 20%,transparent)" }} />
              <div aria-hidden="true" style={{ position: "absolute", inset: "-10%", transform: "translateZ(-39px)", background: "radial-gradient(closest-side,rgba(10,40,22,.28),transparent)", filter: "blur(12px)" }} />
              {roles.map((r) => (
                <div key={r.idx} data-slab={r.idx} data-goto={r.idx} title={r.org} style={{ position: "absolute", inset: r.inset, transformStyle: "preserve-3d", willChange: "transform", cursor: "pointer" }}>
                  <div style={{ position: "absolute", inset: 0, background: "var(--top,var(--card))", color: "var(--ink,var(--fg))", border: "1px solid color-mix(in srgb,var(--fg) 10%,transparent)", borderRadius: 6, boxShadow: "var(--glow,none)", padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "background .4s, color .4s, box-shadow .4s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 600, opacity: 0.8 }}>
                      <span>{r.layerN}</span>
                      {r.present && (
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "currentColor" }} />{t.now}
                        </span>
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: "clamp(28px,3.2vw,42px)", fontWeight: 800, letterSpacing: "-.05em", lineHeight: 1 }}>{r.y}</div>
                      <div style={{ fontSize: 13, fontWeight: 700, marginTop: 3 }}>{r.short}</div>
                    </div>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: 0, top: "100%", width: "100%", height: 36, transformOrigin: "top", transform: "rotateX(-90deg)", background: "var(--side,var(--line))", padding: "9px 10px", transition: "background .4s" }}>
                    <div style={{ height: "100%", background: "repeating-linear-gradient(90deg,var(--win,transparent) 0 10px,transparent 10px 18px)", transition: "background .4s" }} />
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", right: "100%", top: 0, width: 36, height: "100%", transformOrigin: "right", transform: "rotateY(-90deg)", background: "var(--side2,var(--line))", padding: "10px 9px", transition: "background .4s" }}>
                    <div style={{ height: "100%", background: "repeating-linear-gradient(180deg,var(--win,transparent) 0 10px,transparent 10px 18px)", transition: "background .4s" }} />
                  </div>
                  {r.present && (
                    <div aria-hidden="true" style={{ position: "absolute", left: "calc(50% - 1.5px)", bottom: "50%", width: 3, height: 110, borderRadius: 2, background: "linear-gradient(var(--fg),var(--accent))", transformOrigin: "bottom center", transform: "rotateX(-90deg)" }}>
                      <div style={{ position: "absolute", left: "50%", top: -10, width: 20, height: 20, marginLeft: -10, borderRadius: "50%", background: "var(--accent)", animation: "beacon 1.6s ease-out infinite" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div data-panelbox="" style={{ position: "relative", height: "clamp(440px,68vh,580px)" }}>
            {roles.map((r) => (
              <article key={r.idx} data-panel={r.idx} style={{ position: "absolute", inset: 0, opacity: 0, transition: "opacity .5s ease, transform .7s cubic-bezier(.2,.7,.2,1)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--accent-ink)" }}>{r.layerN} · {r.layer}</div>
                <div>
                  <h2 style={{ margin: 0, fontSize: "clamp(30px,3.4vw,46px)", fontWeight: 800, letterSpacing: "-.045em", lineHeight: 1, color: "var(--fg)" }}>{r.role}</h2>
                  <div style={{ fontSize: 15, color: "var(--muted)", marginTop: 8 }}>{r.org} · {r.years} · {r.place}</div>
                </div>
                <div style={{ marginTop: 6, borderRadius: 20, background: "#050B07", border: "1px solid rgba(127,214,160,.18)", boxShadow: "0 40px 80px -30px rgba(10,30,18,.55), inset 0 1px 0 rgba(255,255,255,.05)", overflow: "hidden", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, lineHeight: 1.55 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "11px 16px", borderBottom: "1px solid rgba(255,255,255,.06)", background: "rgba(255,255,255,.03)" }}>
                    <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
                    <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FEBC2E" }} />
                    <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
                    <span style={{ marginLeft: 10, color: "var(--band-muted)", fontSize: 12 }}>{r.file}</span>
                    <span style={{ marginLeft: "auto", fontSize: 12 }}>
                      <b style={{ color: "#7FD6A0" }}>+{r.count}</b> <b style={{ color: "#FF8A80" }}>−{r.count}</b>
                    </span>
                  </div>
                  <div style={{ padding: "8px 0 12px" }}>
                    {r.diff.map((d) => (
                      <div key={d.ln1}>
                        <div style={{ display: "grid", gridTemplateColumns: "42px 20px minmax(0,1fr)", padding: "2px 16px 2px 0", background: "rgba(255,95,87,.08)", color: "#FFB4AE" }}>
                          <span style={{ textAlign: "right", paddingRight: 10, color: "rgba(255,255,255,.22)" }}>{d.ln1}</span><span>−</span><span>{d.m}</span>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "42px 20px minmax(0,1fr)", padding: "2px 16px 2px 0", background: "rgba(61,190,114,.14)", color: "#C2F7D5", marginBottom: 4, boxShadow: "inset 3px 0 0 #3DBE72" }}>
                          <span style={{ textAlign: "right", paddingRight: 10, color: "rgba(255,255,255,.22)" }}>{d.ln2}</span>
                          <span style={{ color: "#7FD6A0", fontWeight: 700 }}>+</span><span>{d.p}</span>
                        </div>
                      </div>
                    ))}
                    <div style={{ padding: "10px 16px 0 62px", color: "var(--band-muted)" }}>
                      <span style={{ color: "#C792EA" }}>const</span> stack = [<span style={{ color: "#FFD580" }}>{r.stackStr}</span>]
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Cierre />
    </div>
  )
}
