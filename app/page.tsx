"use client"

import Link from "next/link"
import Image from "next/image"
import { useLang } from "@/lib/lang"
import { Nav } from "@/components/nav"
import { Cierre } from "@/components/cierre"
import { inicioContent } from "@/content/inicio"

export default function Home() {
  const { lang } = useLang()
  const t = inicioContent[lang]

  return (
    <div className="container">
      <Nav active="inicio" />

      <header
        data-spot=""
        style={{
          position: "relative",
          minHeight: "calc(100vh - 90px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))",
          gap: 56,
          alignItems: "center",
          padding: "20px 0 80px",
          background: "radial-gradient(640px circle at var(--mx,78%) var(--my,40%), var(--soft), transparent 70%)",
        }}
      >
        <div>
          <div data-reveal="" style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.45, letterSpacing: ".01em", color: "var(--accent-ink)", maxWidth: "46ch" }}>
            {t.eyebrow}
          </div>
          <h1 data-stagger="" data-delay="120" style={{ margin: "20px 0 0", fontSize: "clamp(52px,7.6vw,116px)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-.055em" }}>
            <span style={{ display: "block" }}>{t.h1a}</span>
            <span style={{ display: "block", color: "var(--accent)" }}>{t.h1b}</span>
          </h1>
          <p data-reveal="" data-delay="380" style={{ margin: "30px 0 0", fontSize: "clamp(18px,2vw,21px)", color: "var(--muted)", maxWidth: "36ch" }}>
            {t.lead}
          </p>
          <div data-reveal="" data-delay="500" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 22, marginTop: 36 }}>
            <a data-magnetic="" href="mailto:hola@modavidc.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, background: "var(--accent)", color: "#fff", padding: "16px 26px", fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 14px 30px rgba(30,125,71,.32)" }}>
              {t.heroCta} <span className="ms">arrow_forward</span>
            </a>
            <Link href="/sobre-mi" style={{ fontWeight: 700, fontSize: 16, textDecoration: "none" }}>{t.heroCta2}</Link>
          </div>
        </div>

        <div data-reveal="" data-delay="200" data-y="60" style={{ justifySelf: "center", width: "100%", maxWidth: 520 }}>
          <div data-tilt="12" style={{ position: "relative", transformStyle: "preserve-3d", aspectRatio: "1/1.08", width: "100%" }}>
            <div style={{ position: "absolute", left: "30%", top: "4%", width: "64%", height: "76%", borderRadius: 30, overflow: "hidden", background: "var(--surface)", boxShadow: "var(--shadow)" }}>
              <Image src="/assets/profile/moises.png" alt="Moisés Cedeño" fill style={{ objectFit: "cover" }} priority />
            </div>
            <div style={{ position: "absolute", left: 0, top: "13%", width: "38%", transform: "translateZ(70px)" }}>
              <div style={{ animation: "bob 7s ease-in-out -1.5s infinite" }}>
                <div style={{ padding: 12, borderRadius: 22, background: "var(--card)", boxShadow: "var(--shadow)", display: "grid", gap: 10 }}>
                  <div style={{ aspectRatio: "4/3", borderRadius: 14, background: "var(--soft)", display: "grid", placeItems: "center" }}>
                    <span className="ms" style={{ fontSize: "clamp(40px,6vw,64px)", color: "var(--accent)" }}>smart_toy</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 1.6s ease-in-out infinite", flex: "none" }} />
                    {t.floatC}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "8%", top: "58%", width: "50%", transform: "translateZ(120px)" }}>
              <div style={{ animation: "bob 7s ease-in-out -4s infinite" }}>
                <div style={{ padding: 12, borderRadius: 22, background: "var(--card)", boxShadow: "var(--shadow)", display: "grid", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "var(--muted)" }}>
                    <span className="ms" style={{ fontSize: 18, color: "var(--accent)" }}>check_circle</span>{t.floatE}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8 }}>
                    <div style={{ aspectRatio: "1/1", borderRadius: 12, background: "var(--bg)", display: "grid", placeItems: "center", padding: 6 }}>
                      <Image src="/assets/badges/badge-clf.png" alt="AWS Certified Cloud Practitioner" width={48} height={48} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                    <div style={{ aspectRatio: "1/1", borderRadius: 12, background: "var(--bg)", display: "grid", placeItems: "center", padding: 6 }}>
                      <Image src="/assets/badges/badge-aif.png" alt="AWS Certified AI Practitioner" width={48} height={48} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "66%", top: "68%", width: "25%", aspectRatio: "1/1", transform: "translateZ(150px)" }}>
              <div style={{ animation: "bob 7s ease-in-out -2.5s infinite" }}>
                <div style={{ aspectRatio: "1/1", borderRadius: "50%", background: "var(--card)", border: "5px solid var(--accent)", boxShadow: "var(--shadow)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                  <span style={{ fontWeight: 800, fontSize: "clamp(22px,3vw,32px)", letterSpacing: "-.04em", lineHeight: 1 }}>−58%</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", marginTop: 2 }}>{t.floatA}</span>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", right: "-3%", top: "10%", transform: "translateZ(140px)" }}>
              <div style={{ animation: "bob 7s ease-in-out -3s infinite" }}>
                <div style={{ padding: "10px 16px", borderRadius: 999, background: "var(--band)", color: "var(--band-fg)", fontWeight: 700, fontSize: 14, boxShadow: "var(--shadow)", display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
                  <span className="ms" style={{ color: "var(--band-accent)", fontSize: 20 }}>check_circle</span>{t.floatB}
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "4%", top: "2%", transform: "translateZ(90px)" }}>
              <div style={{ animation: "bob 7s ease-in-out -0.6s infinite" }}>
                <div style={{ width: 54, height: 54, borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "grid", placeItems: "center", boxShadow: "var(--shadow)" }}>
                  <span className="ms" style={{ fontSize: 28 }}>trending_down</span>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", right: "-5%", top: "50%", transform: "translateZ(160px)" }}>
              <div style={{ animation: "bob 7s ease-in-out -5s infinite" }}>
                <div style={{ width: 58, height: 58, borderRadius: "50%", background: "var(--band)", color: "var(--band-accent)", display: "grid", placeItems: "center", boxShadow: "var(--shadow)" }}>
                  <span className="ms" style={{ fontSize: 30 }}>hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section style={{ padding: "clamp(90px,14vw,180px) 0", borderTop: "1px solid var(--line)" }}>
        <div data-reveal="" style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)", marginBottom: 28 }}>
          {t.stEyebrow}
        </div>
        <p style={{ margin: 0, fontSize: "clamp(30px,4.4vw,60px)", fontWeight: 700, letterSpacing: "-.035em", lineHeight: 1.12, maxWidth: "24ch" }}>
          <span
            data-fill=""
            style={{
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundImage: "linear-gradient(var(--fg),var(--fg)),linear-gradient(color-mix(in srgb,var(--fg) 16%,transparent),color-mix(in srgb,var(--fg) 16%,transparent))",
              backgroundSize: "0% 100%,100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {t.statement}
          </span>
        </p>
      </section>

      <section data-scrolly="" style={{ position: "relative", height: "340vh", borderTop: "1px solid var(--line)" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "24px 48px", alignItems: "center", overflow: "hidden" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, maxWidth: 420 }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{t.resEyebrow}</div>
              <div style={{ display: "flex", gap: 6 }}>
                {t.cases.map((c) => (
                  <span key={c.where} data-dot="" style={{ height: 8, width: 8, borderRadius: 4, background: "var(--line)", transition: "width .4s, background .4s" }} />
                ))}
              </div>
            </div>
            <div style={{ position: "relative", height: "clamp(260px,38vh,340px)" }}>
              {t.cases.map((c, i) => (
                <div key={c.where} data-panel={i} style={{ position: "absolute", inset: 0, opacity: 0, transition: "opacity .5s ease, transform .7s cubic-bezier(.2,.7,.2,1)" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>{c.where}</div>
                  <div style={{ fontWeight: 800, fontSize: "clamp(72px,10vw,140px)", letterSpacing: "-.06em", lineHeight: 0.95, color: "var(--accent)", marginTop: 6 }}>{c.metric}</div>
                  <div style={{ fontSize: "clamp(20px,2.2vw,26px)", fontWeight: 700, letterSpacing: "-.02em", marginTop: 10 }}>{c.label}</div>
                  <p style={{ margin: "10px 0 0", color: "var(--muted)", maxWidth: "40ch" }}>{c.line}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <div style={{ height: 3, width: 200, background: "var(--line)", borderRadius: 2, overflow: "hidden" }}>
                <div data-progress="" style={{ height: "100%", background: "var(--accent)", transformOrigin: "left", transform: "scaleX(0)" }} />
              </div>
              <Link href="/casos" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 700, textDecoration: "none" }}>
                {t.resLink} <span className="ms">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div style={{ position: "relative", height: "min(62vh,540px)", perspective: 1500, transformStyle: "preserve-3d" }}>
            {t.cases.map((c, i) => (
              <article key={c.where} data-card={i} style={{ position: "absolute", left: "50%", top: "50%", translate: "-50% -50%", width: "min(380px,82vw)", padding: 30, borderRadius: 30, background: "var(--card)", border: "1px solid var(--line)", boxShadow: "var(--shadow)", display: "flex", flexDirection: "column", gap: 22, willChange: "transform" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, fontWeight: 700, color: "var(--muted)" }}>
                  <span>{c.where}</span>
                  <span style={{ color: "var(--accent-ink)" }}>0{i + 1}</span>
                </div>
                <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.1 }}>{c.title}</div>
                <div style={{ display: "grid", gap: 14 }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>
                      <span>{t.before}</span><b style={{ color: "var(--fg)" }}>{c.beforeV}</b>
                    </div>
                    <div style={{ height: 12, borderRadius: 6, background: "color-mix(in srgb,var(--fg) 14%,transparent)" }} />
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>
                      <span>{t.after}</span><b style={{ color: "var(--accent-ink)" }}>{c.afterV}</b>
                    </div>
                    <div style={{ height: 12, borderRadius: 6, background: "var(--surface)" }}>
                      <div style={{ height: "100%", width: c.afterW, minWidth: 12, borderRadius: 6, background: "var(--accent)" }} />
                    </div>
                  </div>
                </div>
                <div style={{ fontWeight: 800, fontSize: 56, letterSpacing: "-.05em", lineHeight: 1, color: "var(--accent)" }}>{c.metric}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "110px 0", borderTop: "1px solid var(--line)" }}>
        <div data-reveal="" style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)" }}>{t.servEyebrow}</div>
        <h2 data-reveal="" data-delay="80" style={{ margin: "14px 0 0", fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, letterSpacing: "-.045em", lineHeight: 1, maxWidth: "16ch" }}>{t.servTitle}</h2>
        <div data-stagger="" data-delay="150" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,250px),1fr))", gap: 18, marginTop: 48 }}>
          {t.services.map((s, i) => (
            <article key={s.title} data-tilt="9" data-glow="" style={{ background: "var(--surface)", borderRadius: 30, padding: 30, display: "flex", flexDirection: "column", gap: 12, minHeight: 300 }}>
              <div style={{ width: 52, height: 52, borderRadius: 16, background: "var(--soft)", color: "var(--accent-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>
                <span className="ms">{s.icon}</span>
              </div>
              <div style={{ marginTop: "auto", fontSize: 13, fontWeight: 700, color: "var(--muted)" }}>0{i + 1}</div>
              <h3 style={{ margin: 0, fontSize: 25, fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.12 }}>{s.title}</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 16 }}>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal="" data-y="60" style={{ position: "relative", overflow: "hidden", background: "var(--band)", color: "var(--band-fg)", borderRadius: "clamp(26px,4vw,44px)", padding: "clamp(40px,7vw,90px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 30 }}>
        <div aria-hidden="true" data-parallax="0.18" style={{ position: "absolute", right: "-2%", top: "-10%", fontSize: "clamp(220px,34vw,460px)", fontWeight: 800, letterSpacing: "-.08em", lineHeight: 1, color: "var(--band-tile)", pointerEvents: "none" }}>S/</div>
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--band-accent)" }}>{t.sencEyebrow}</div>
          <h2 style={{ margin: "14px 0 0", fontSize: "clamp(40px,5.6vw,72px)", fontWeight: 800, letterSpacing: "-.05em", lineHeight: 0.98, color: "#fff" }}>
            Solito.<br /><span style={{ color: "var(--band-accent)" }}>{t.sencTag}</span>
          </h2>
          <p style={{ margin: "20px 0 0", color: "var(--band-muted)", maxWidth: "40ch" }}>{t.sencDesc}</p>
        </div>
        <a data-magnetic="" href="/productos" style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, background: "var(--band-accent)", color: "var(--band)", padding: "16px 26px", fontSize: 16, fontWeight: 700, textDecoration: "none" }}>
          {t.sencLink} <span className="ms">arrow_forward</span>
        </a>
      </section>

      <Cierre />
    </div>
  )
}
