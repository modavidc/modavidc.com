"use client"

import { useState } from "react"
import Image from "next/image"
import { useLang } from "@/lib/lang"
import { cierreContent, cierreTileOffsets } from "@/content/cierre"

export function Cierre() {
  const { lang } = useLang()
  const t = cierreContent[lang]
  const [topic, setTopic] = useState(0)
  const [text, setText] = useState("")

  const subject = "Web · " + t.topics[topic]
  const mailto = `mailto:hola@modavidc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`

  return (
    <>
      <section
        style={{
          marginTop: 110,
          padding: "clamp(28px,5vw,64px)",
          borderRadius: "clamp(28px,4vw,48px)",
          background: "var(--card)",
          border: "1px solid var(--line)",
          boxShadow: "var(--shadow)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))",
          gap: "clamp(36px,5vw,64px)",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: -120,
            top: -160,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background: "radial-gradient(closest-side,color-mix(in srgb,var(--accent) 16%,transparent),transparent)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 28 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-ink)" }}>
              {t.eyebrow}
            </div>
            <h2 style={{ margin: "14px 0 0", fontSize: "clamp(40px,5.4vw,72px)", fontWeight: 800, letterSpacing: "-.055em", lineHeight: 0.95 }}>
              {t.a} <span style={{ color: "var(--accent)" }}>{t.b}</span>
            </h2>
          </div>
          <div data-order="" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 10 }}>
            {t.tiles.map((label, i) => {
              const [mx, my, mr] = cierreTileOffsets[i]
              return (
                <div
                  key={label}
                  data-tile=""
                  data-mx={mx}
                  data-my={my}
                  data-mr={mr}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 16px",
                    borderRadius: 16,
                    background: "var(--bg)",
                    border: "1px solid var(--line)",
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1.25,
                    willChange: "transform",
                    transition: "border-color .4s",
                  }}
                >
                  <span
                    data-tick=""
                    style={{
                      flex: "none",
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 15,
                      opacity: 0,
                      transition: "opacity .35s, transform .45s cubic-bezier(.3,1.6,.5,1)",
                    }}
                  >
                    <span className="ms" style={{ fontSize: 15 }}>check</span>
                  </span>
                  <span>{label}</span>
                </div>
              )
            })}
          </div>
          <p style={{ margin: 0, color: "var(--muted)", maxWidth: "40ch" }}>{t.sub}</p>
        </div>

        <div
          data-tilt="4"
          style={{
            position: "relative",
            borderRadius: 28,
            background: "var(--bg)",
            border: "1px solid var(--line)",
            boxShadow: "0 1px 0 rgba(255,255,255,.7) inset, 0 40px 80px -30px rgba(10,40,22,.45)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 20px",
              borderBottom: "1px solid var(--line)",
              background: "var(--card)",
            }}
          >
            <Image src="/assets/profile/moises.png" alt="" width={38} height={38} style={{ borderRadius: "50%", objectFit: "cover" }} />
            <div style={{ minWidth: 0, lineHeight: 1.25 }}>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>{t.to}</div>
              <b style={{ fontSize: 15 }}>hola@modavidc.com</b>
            </div>
            <span
              style={{
                marginLeft: "auto",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 700,
                color: "var(--accent-ink)",
                background: "var(--soft)",
                borderRadius: 999,
                padding: "5px 10px",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />
              {t.open}
            </span>
          </div>
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--muted)", marginBottom: 10 }}>{t.about}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {t.topics.map((label, i) => {
                  const on = i === topic
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setTopic(i)}
                      style={{
                        appearance: "none",
                        margin: 0,
                        font: "inherit",
                        cursor: "pointer",
                        borderRadius: 999,
                        padding: "9px 15px",
                        fontSize: 14,
                        fontWeight: 600,
                        border: `1.5px solid ${on ? "var(--fg)" : "var(--line)"}`,
                        background: on ? "var(--fg)" : "var(--card)",
                        color: on ? "var(--bg)" : "var(--fg)",
                        transition: "all .25s",
                      }}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, color: "var(--muted)", marginBottom: 8 }}>
                <span>{t.problem}</span>
                <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: 600 }}>{text.length}/240</span>
              </div>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={240}
                rows={3}
                placeholder={t.ph}
                style={{
                  width: "100%",
                  resize: "none",
                  borderRadius: 16,
                  border: "1.5px solid var(--line)",
                  background: "var(--card)",
                  color: "var(--fg)",
                  fontSize: 16,
                  lineHeight: 1.45,
                  padding: "14px 16px",
                  outline: "none",
                }}
              />
            </div>
            <a
              data-magnetic=""
              href={mailto}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                borderRadius: 18,
                background: "var(--accent)",
                color: "#fff",
                padding: "17px 24px",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 16px 32px -10px color-mix(in srgb,var(--accent) 70%,transparent)",
              }}
            >
              {t.send} <span className="ms">arrow_forward</span>
            </a>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "6px 16px", fontSize: 13, color: "var(--muted)" }}>
              <span>{t.or}</span>
              <a href="https://www.linkedin.com/in/modavidc/" target="_blank" rel="noopener" style={{ fontWeight: 700, textDecoration: "none" }}>LinkedIn</a>
              <a href="https://github.com/modavidc" target="_blank" rel="noopener" style={{ fontWeight: 700, textDecoration: "none" }}>GitHub</a>
            </div>
          </div>
        </div>
      </section>
      <footer
        style={{
          marginTop: 70,
          borderTop: "1px solid var(--line)",
          padding: "26px 0 40px",
          fontSize: 13,
          color: "var(--muted)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span>© 2026 Moisés Cedeño · Lima, Perú</span>
        <span style={{ display: "flex", gap: 16 }}>
          <a href="https://www.linkedin.com/in/modavidc/" target="_blank" rel="noopener" style={{ color: "var(--muted)" }}>LinkedIn</a>
          <a href="https://github.com/modavidc" target="_blank" rel="noopener" style={{ color: "var(--muted)" }}>GitHub</a>
        </span>
      </footer>
    </>
  )
}
