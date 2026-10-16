"use client"

import { useLang } from "@/lib/lang"
import { Nav } from "@/components/nav"
import { Cierre } from "@/components/cierre"
import { productosContent, grupRows } from "@/content/productos"

export default function ProductosPage() {
  const { lang } = useLang()
  const t = productosContent[lang]
  const apps = t.apps.map((a, i) => ({
    ...a,
    idx: i,
    stores: a.stores.map((s) => ({ ...s, bg: s.primary ? "var(--fg)" : "var(--card)", fg: s.primary ? "var(--bg)" : "var(--fg)", bd: s.primary ? "var(--fg)" : "var(--line)" })),
  }))
  const grup = grupRows.map(([n, w, c, v]) => ({ n, w: w + "%", c, v }))

  return (
    <div className="container">
      <Nav active="prod" />

      <header data-stagger="" style={{ padding: "clamp(48px,7vw,100px) 0 30px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--accent-ink)", background: "var(--card)", border: "1px solid var(--line)", boxShadow: "var(--shadow)", borderRadius: 999, padding: "8px 16px" }}>
          ~/moises $ ls ~/apps<span style={{ width: 8, height: 15, background: "var(--accent)", animation: "blink 1s steps(1) infinite" }} />
        </div>
        <h1 style={{ margin: "26px 0 0", fontSize: "clamp(52px,8vw,124px)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-.06em", maxWidth: "13ch" }}>
          {t.h1a} <span style={{ color: "var(--accent)" }}>{t.h1b}</span>
        </h1>
        <p style={{ margin: "28px 0 0", fontSize: "clamp(18px,2vw,21px)", color: "var(--muted)", maxWidth: "44ch" }}>{t.lead}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 30, fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
          <span className="ms" style={{ fontSize: 18, color: "var(--accent)" }}>touch_app</span>{t.hint}
        </div>
      </header>

      <section data-scrolly="" style={{ position: "relative", height: "420vh" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: "24px clamp(28px,5vw,64px)", alignItems: "center", overflow: "hidden", paddingTop: 70 }}>

          <div data-stage="" style={{ display: "flex", justifyContent: "center" }}>
            <div data-tilt="10" style={{ position: "relative", width: "min(clamp(220px,28vw,320px), calc((100vh - 120px) * 9 / 19))", aspectRatio: "9/19", borderRadius: 52, background: "linear-gradient(145deg,#E9EEE7,#C9D2C6)", padding: 10, boxShadow: "0 2px 0 rgba(255,255,255,.8) inset, 0 50px 90px -30px rgba(10,40,22,.55), 0 20px 40px -20px rgba(10,40,22,.35)" }}>
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 43, overflow: "hidden", background: "#F7F5F0" }}>
                <div style={{ position: "absolute", left: "50%", top: 10, translate: "-50% 0", width: 96, height: 26, borderRadius: 14, background: "#0E140F", zIndex: 5 }} />

                <div data-screen="0" style={{ position: "absolute", inset: 0, background: "#FAF6F1", color: "#2A1712", padding: "52px 18px 96px", display: "flex", flexDirection: "column", gap: 12, transition: "opacity .5s, transform .6s cubic-bezier(.2,.7,.2,1)" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.6 }}>Solito</div>
                  <div style={{ borderRadius: 22, background: "#D33F2B", color: "#FAF6F1", padding: 18 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.85 }}>Hoy puedes gastar</div>
                    <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-.05em", lineHeight: 1.05 }}>S/ 42</div>
                    <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,.3)", marginTop: 12 }}>
                      <div style={{ width: "62%", height: "100%", borderRadius: 3, background: "#FAF6F1" }} />
                    </div>
                  </div>
                  {t.sencRows.map((r) => (
                    <div key={r.n} style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", borderRadius: 16, padding: "10px 12px", boxShadow: "0 1px 3px rgba(42,23,18,.08)" }}>
                      <span style={{ flex: "none", width: 30, height: 30, borderRadius: 10, background: r.c, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800 }}>{r.i}</span>
                      <span style={{ minWidth: 0, flex: 1, lineHeight: 1.2 }}>
                        <b style={{ display: "block", fontSize: 13 }}>{r.n}</b>
                        <small style={{ fontSize: 11, opacity: 0.6 }}>{r.s}</small>
                      </span>
                      <b style={{ fontSize: 13 }}>{r.a}</b>
                    </div>
                  ))}
                </div>

                <div data-screen="1" style={{ position: "absolute", inset: 0, background: "#F2F7F3", color: "#0F2A1D", padding: "52px 18px 96px", display: "flex", flexDirection: "column", gap: 12, opacity: 0, transition: "opacity .5s, transform .6s cubic-bezier(.2,.7,.2,1)" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.6 }}>Grupero</div>
                  <div style={{ borderRadius: 22, background: "#fff", padding: 16, boxShadow: "0 1px 3px rgba(15,42,29,.08)" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.6 }}>{t.gTitle}</div>
                    <div style={{ display: "grid", gap: 9, marginTop: 12 }}>
                      {grup.map((g) => (
                        <div key={g.n} style={{ display: "grid", gridTemplateColumns: "52px minmax(0,1fr) 30px", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 600 }}>
                          <span>{g.n}</span>
                          <span style={{ height: 9, borderRadius: 5, background: "#E3EEE6" }}>
                            <span style={{ display: "block", height: "100%", width: g.w, borderRadius: 5, background: g.c }} />
                          </span>
                          <span style={{ textAlign: "right", opacity: 0.7 }}>{g.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ borderRadius: 18, background: "#25A35A", color: "#fff", padding: "12px 14px", fontSize: 12.5, fontWeight: 600, lineHeight: 1.35 }}>{t.gInsight}</div>
                </div>

                <div data-screen="2" style={{ position: "absolute", inset: 0, background: "#EFEAE1", color: "#2B2620", padding: "52px 20px 96px", display: "flex", flexDirection: "column", gap: 14, opacity: 0, transition: "opacity .5s, transform .6s cubic-bezier(.2,.7,.2,1)" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.6 }}>El Estoico</div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", opacity: 0.55, marginTop: 6 }}>{t.eDate}</div>
                  <div style={{ fontSize: 23, fontWeight: 700, letterSpacing: "-.025em", lineHeight: 1.2 }}>{t.eQ}</div>
                  <div style={{ borderRadius: 16, background: "#F8F5EF", border: "1px solid #DDD5C8", padding: "12px 14px", fontSize: 13, lineHeight: 1.45, minHeight: 84, opacity: 0.85 }}>{t.eA}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    <span style={{ borderRadius: 12, background: "#2B2620", color: "#EFEAE1", padding: 9, textAlign: "center", fontSize: 12, fontWeight: 700 }}>{t.eB1}</span>
                    <span style={{ borderRadius: 12, border: "1.5px solid #2B2620", padding: 9, textAlign: "center", fontSize: 12, fontWeight: 700 }}>{t.eB2}</span>
                  </div>
                </div>

                <div style={{ position: "absolute", left: 12, right: 12, bottom: 12, zIndex: 4, display: "flex", justifyContent: "space-around", padding: 12, borderRadius: 30, background: "rgba(255,255,255,.55)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,.7)" }}>
                  {apps.map((a) => (
                    <button key={a.name} type="button" data-goto={a.idx} data-appicon={a.idx} aria-label={a.name} style={{ appearance: "none", margin: 0, padding: 0, border: 0, cursor: "pointer", width: 50, height: 50, borderRadius: 15, background: a.bg, color: a.fg, fontWeight: 800, fontSize: a.fs, letterSpacing: "-.04em", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform .45s cubic-bezier(.3,1.4,.5,1), box-shadow .4s" }}>
                      {a.mark}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div data-panelbox="" style={{ position: "relative", height: "clamp(440px,64vh,560px)" }}>
            {apps.map((a) => (
              <article key={a.name} data-panel={a.idx} style={{ position: "absolute", inset: 0, opacity: 0, transition: "opacity .5s ease, transform .7s cubic-bezier(.2,.7,.2,1)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
                  <span style={{ flex: "none", width: 56, height: 56, borderRadius: 17, background: a.bg, color: a.fg, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: a.fs, letterSpacing: "-.04em", boxShadow: "0 12px 24px -10px rgba(0,0,0,.35)" }}>{a.mark}</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--muted)" }}>0{a.idx + 1} / 03</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 7, borderRadius: 999, background: "var(--card)", border: "1px solid var(--line)", padding: "6px 13px", fontSize: 13, fontWeight: 700 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: a.dot }} />{a.status}
                  </span>
                </div>
                <h2 style={{ margin: 0, fontSize: "clamp(40px,5vw,68px)", fontWeight: 800, letterSpacing: "-.055em", lineHeight: 0.95 }}>
                  {a.name}.<br /><span style={{ color: "var(--accent)" }}>{a.tag}</span>
                </h2>
                <p style={{ margin: 0, fontSize: 18, color: "var(--muted)", maxWidth: "42ch" }}>{a.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {a.feats.map((f) => (
                    <span key={f} style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 999, background: "var(--surface)", padding: "8px 14px", fontSize: 14, fontWeight: 600 }}>
                      <span className="ms" style={{ fontSize: 16, color: "var(--accent)" }}>check</span>{f}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 6 }}>
                  {a.stores.map((s) =>
                    s.href === "#" ? (
                      <span key={s.l} style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 14, padding: "12px 18px", fontSize: 15, fontWeight: 700, background: "var(--surface)", color: "var(--muted)", border: "1.5px solid var(--line)" }}>
                        {s.l}
                      </span>
                    ) : (
                      <a key={s.l} href={s.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 14, padding: "12px 18px", fontSize: 15, fontWeight: 700, textDecoration: "none", background: s.bg, color: s.fg, border: `1.5px solid ${s.bd}` }}>
                        {s.l} <span className="ms" style={{ fontSize: 18 }}>north_east</span>
                      </a>
                    )
                  )}
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
