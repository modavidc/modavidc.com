"use client"

import Image from "next/image"
import { useLang } from "@/lib/lang"
import { Nav } from "@/components/nav"
import { Cierre } from "@/components/cierre"
import { sobreMiContent } from "@/content/sobre-mi"

export default function SobreMiPage() {
  const { lang } = useLang()
  const t = sobreMiContent[lang]

  return (
    <div className="container">
      <Nav active="sobre" />

      <header style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: 56, alignItems: "center", padding: "clamp(40px,6vw,90px) 0 80px" }}>
        <div data-stagger="">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--accent-ink)", background: "var(--card)", border: "1px solid var(--line)", boxShadow: "var(--shadow)", borderRadius: 999, padding: "8px 16px" }}>
            ~/moises $ whoami<span style={{ width: 8, height: 15, background: "var(--accent)", animation: "blink 1s steps(1) infinite" }} />
          </div>
          <h1 style={{ margin: "26px 0 0", fontSize: "clamp(56px,8.4vw,128px)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-.06em" }}>
            {t.h1a}<br /><span style={{ color: "var(--accent)" }}>{t.h1b}</span>
          </h1>
          <p style={{ margin: "28px 0 0", fontSize: "clamp(19px,2vw,23px)", fontWeight: 500, maxWidth: "34ch" }}>{t.lead}</p>
          <a href="https://www.linkedin.com/in/modavidc/" target="_blank" rel="noopener" style={{ marginTop: 26, display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
            {t.li}<span className="ms" style={{ fontSize: 18 }}>north_east</span>
          </a>
        </div>
        <div data-reveal="" data-delay="200" data-y="60" style={{ justifySelf: "center", width: "100%", maxWidth: 460 }}>
          <div data-tilt="12" style={{ position: "relative", transformStyle: "preserve-3d", padding: "24px 24px 40px" }}>
            <div style={{ aspectRatio: "4/5", borderRadius: 38, overflow: "hidden", background: "var(--surface)", boxShadow: "var(--shadow)", border: "8px solid var(--card)" }}>
              <Image src="/assets/profile/moises.png" alt="Moisés Cedeño" width={460} height={575} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", left: -6, top: "12%", transform: "translateZ(80px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 999, background: "var(--card)", boxShadow: "var(--shadow)", fontWeight: 700, fontSize: 14, animation: "bob 6s ease-in-out infinite" }}>
                <span className="ms" style={{ fontSize: 18, color: "var(--accent)" }}>location_on</span>Lima, Perú
              </div>
            </div>
            <div style={{ position: "absolute", right: -8, top: "46%", transform: "translateZ(120px) rotate(4deg)" }}>
              <div style={{ padding: "12px 16px", borderRadius: 18, background: "var(--accent)", color: "#fff", boxShadow: "var(--shadow)", fontWeight: 800, fontSize: 15, lineHeight: 1.2, animation: "bob 6s ease-in-out -2s infinite" }}>
                {t.since}<br /><span style={{ fontSize: 26, letterSpacing: "-.04em" }}>2015</span>
              </div>
            </div>
            <div style={{ position: "absolute", left: "10%", bottom: 6, transform: "translateZ(100px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 16, background: "var(--card)", boxShadow: "var(--shadow)", fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, fontSize: 13, animation: "bob 6s ease-in-out -4s infinite" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "ping 1.8s ease-out infinite" }} />{t.status}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section style={{ padding: "80px 0", borderTop: "1px solid var(--line)" }}>
        <div data-reveal="" style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{t.routeEyebrow}</div>
        <h2 data-reveal="" data-delay="80" style={{ margin: "14px 0 0", fontSize: "clamp(34px,4.6vw,58px)", fontWeight: 800, letterSpacing: "-.045em", lineHeight: 1, maxWidth: "18ch" }}>{t.routeTitle}</h2>
        <div style={{ marginTop: 56 }}>
          <div data-stagger="" data-stagger-step="260" data-delay="200" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 28 }}>
            {t.route.map((r) => (
              <div key={r.y + r.place} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ flex: "none", width: 46, height: 46, borderRadius: "50%", background: "var(--card)", border: "3px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: 13, color: "var(--accent-ink)" }}>{r.y}</span>
                  <span style={{ flex: 1, height: 3, borderRadius: 2, background: "linear-gradient(90deg,var(--accent),var(--line))" }} />
                </div>
                <div data-tilt="8" data-glow="" style={{ background: "var(--surface)", borderRadius: 24, padding: 22 }}>
                  <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-.03em" }}>{r.place}</div>
                  <p style={{ margin: "6px 0 0", color: "var(--muted)", fontSize: 16 }}>{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: 48, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 120 }}>
          <div data-reveal="" style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{t.workEyebrow}</div>
          <h2 data-reveal="" data-delay="80" style={{ margin: "14px 0 0", fontSize: "clamp(34px,4.6vw,58px)", fontWeight: 800, letterSpacing: "-.045em", lineHeight: 1 }}>{t.workTitle}</h2>
          <p data-reveal="" data-delay="160" style={{ margin: "18px 0 0", color: "var(--muted)", maxWidth: "36ch" }}>{t.workLead}</p>
        </div>
        <div data-reveal="" data-y="50" style={{ borderRadius: 28, background: "var(--card)", border: "1px solid var(--line)", boxShadow: "var(--shadow)", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 20px", borderBottom: "1px solid var(--line)", background: "var(--bg)", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--muted)" }}>
            <span className="ms" style={{ fontSize: 18 }}>description</span>COMO-TRABAJO.md
          </div>
          <div data-stagger="" data-stagger-step="160" style={{ padding: "10px 0" }}>
            {t.principles.map((p, i) => (
              <div key={p.h} style={{ display: "grid", gridTemplateColumns: "56px minmax(0,1fr)", gap: 4, padding: "18px 24px 18px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ textAlign: "right", paddingRight: 16, fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: "var(--muted)", opacity: 0.6, paddingTop: 5 }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div style={{ fontSize: 21, fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1.2 }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--accent)", fontSize: 17 }}>## </span>{p.h}
                  </div>
                  <p style={{ margin: "6px 0 0", color: "var(--muted)", fontSize: 16 }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: 48, alignItems: "start" }}>
        <div>
          <div data-reveal="" style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{t.certEyebrow}</div>
          <h2 data-reveal="" data-delay="80" style={{ margin: "14px 0 0", fontSize: "clamp(34px,4.6vw,58px)", fontWeight: 800, letterSpacing: "-.045em", lineHeight: 1 }}>{t.certTitle}</h2>
          <p data-reveal="" data-delay="160" style={{ margin: "18px 0 0", color: "var(--muted)", maxWidth: "36ch" }}>{t.certLead}</p>
        </div>
        <div data-reveal="" data-y="50" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ borderRadius: 28, background: "var(--card)", border: "1px solid var(--line)", boxShadow: "var(--shadow)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 20px", borderBottom: "1px solid var(--line)", background: "var(--bg)", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 600, color: "var(--muted)" }}>
              <span style={{ color: "var(--accent)" }}>$</span>&nbsp;moises --list-certs
            </div>
            <div data-stagger="" style={{ display: "flex", flexDirection: "column" }}>
              {t.certs.map((c) => (
                <div key={c.h} style={{ display: "grid", gridTemplateColumns: "56px minmax(0,1fr)", gap: "4px 16px", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid var(--line)" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "#fff", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    <Image src={c.img} alt={c.h} width={50} height={50} style={{ objectFit: "contain", display: "block" }} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, fontWeight: 700, color: "var(--accent-ink)" }}>
                      <span className="ms" style={{ fontSize: 15 }}>check_circle</span>{t.done} · {c.when}
                    </div>
                    <div style={{ marginTop: 4, fontSize: 18, fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1.25 }}>{c.h}</div>
                    <div style={{ marginTop: 4, display: "flex", flexWrap: "wrap", gap: "4px 14px", fontSize: 14, color: "var(--muted)" }}>
                      <span>{c.by}</span>
                      <a href="https://www.linkedin.com/in/modavidc/details/certifications/" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 2, fontWeight: 700, textDecoration: "none" }}>
                        {t.verify}<span className="ms" style={{ fontSize: 15 }}>north_east</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "14px 24px", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: "var(--muted)" }}>{t.certFoot}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: 24, padding: "4px 4px 0" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{t.eduH}</div>
              {t.edu.map((e) => (
                <div key={e.h} style={{ marginTop: 12 }}>
                  <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-.01em" }}>{e.h}</div>
                  <div style={{ fontSize: 14, color: "var(--muted)" }}>{e.d}</div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{t.langH}</div>
              {t.langs.map((e) => (
                <div key={e.h} style={{ marginTop: 12 }}>
                  <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-.01em" }}>{e.h}</div>
                  <div style={{ fontSize: 14, color: "var(--muted)" }}>{e.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="https://www.linkedin.com/in/modavidc/details/certifications/" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1.5px solid var(--line)", background: "var(--card)", color: "var(--fg)", padding: "10px 18px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              {t.allCerts}<span className="ms" style={{ fontSize: 16 }}>north_east</span>
            </a>
            <a href="https://www.linkedin.com/in/modavidc/details/education/" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1.5px solid var(--line)", background: "var(--card)", color: "var(--fg)", padding: "10px 18px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              {t.studies}<span className="ms" style={{ fontSize: 16 }}>north_east</span>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0 0", borderTop: "1px solid var(--line)" }}>
        <div data-reveal="" style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{t.offEyebrow}</div>
        <h2 data-reveal="" data-delay="80" style={{ margin: "14px 0 0", fontSize: "clamp(34px,4.6vw,58px)", fontWeight: 800, letterSpacing: "-.045em", lineHeight: 1, maxWidth: "16ch" }}>{t.offTitle}</h2>
        <div data-stagger="" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,250px),1fr))", gap: 16, marginTop: 40 }}>
          {t.off.map((o) => (
            <a key={o.h} href={o.href} data-tilt="10" data-glow="" style={{ display: "flex", flexDirection: "column", gap: 14, minHeight: 220, padding: 24, borderRadius: 26, background: "var(--surface)", color: "var(--fg)", textDecoration: "none" }}>
              <span style={{ width: 52, height: 52, borderRadius: 16, background: o.bg, color: o.fg, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 20, letterSpacing: "-.04em", boxShadow: "0 10px 20px -8px rgba(0,0,0,.3)" }}>{o.mark}</span>
              <div style={{ marginTop: "auto" }}>
                <div style={{ fontSize: 21, fontWeight: 800, letterSpacing: "-.02em" }}>{o.h}</div>
                <div style={{ color: "var(--muted)", fontSize: 15, marginTop: 4 }}>{o.d}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Cierre />
    </div>
  )
}
