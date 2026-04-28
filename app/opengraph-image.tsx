import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "modavidc — Moisés Cedeño · Solutions Architect · FinOps & Cloud"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function loadSpaceGrotesk(weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0 (compatible; Chrome/120)" } }
  ).then(r => r.text())
  const url = css.match(/src: url\((.+?)\) format\('woff2'\)/)?.[1]
  if (!url) throw new Error("Font URL not found")
  return fetch(url).then(r => r.arrayBuffer())
}

export default async function OGImage() {
  const [fontLight, fontMedium] = await Promise.all([
    loadSpaceGrotesk(300),
    loadSpaceGrotesk(500),
  ])

  const green = "#34d675"
  const bg    = "#0b0c0e"
  const text  = "#eaedf2"
  const muted = "#9aa0ae"
  const dim   = "#555c6a"
  const surf  = "#111316"
  const bord  = "#202227"

  return new ImageResponse(
    <div
      style={{
        background: bg,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* ── TOP BAR ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "48px 72px 0",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "0" }}>
          <span style={{ color: green, fontSize: "28px", fontWeight: 500, letterSpacing: "-0.7px" }}>mo</span>
          <span style={{ color: text, fontSize: "28px", fontWeight: 300, letterSpacing: "-0.7px" }}>davidc</span>
        </div>

        {/* Domain */}
        <span style={{ color: dim, fontSize: "14px", fontWeight: 300, letterSpacing: "2px" }}>
          MODAVIDC.COM
        </span>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "56px 72px 0",
          justifyContent: "center",
        }}
      >
        {/* Name */}
        <div
          style={{
            color: text,
            fontSize: "80px",
            fontWeight: 300,
            letterSpacing: "-3px",
            lineHeight: "1.0",
            marginBottom: "20px",
          }}
        >
          Moisés Cedeño
        </div>

        {/* Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ width: "32px", height: "2px", background: green }} />
          <span
            style={{
              color: green,
              fontSize: "22px",
              fontWeight: 500,
              letterSpacing: "-0.3px",
            }}
          >
            Solutions Architect · FinOps &amp; Cloud
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            color: dim,
            fontSize: "14px",
            fontWeight: 300,
            letterSpacing: "3px",
          }}
        >
          HONEST WORK. EFFICIENT ARCHITECTURES.
        </div>
      </div>

      {/* ── KPI BAR ── */}
      <div
        style={{
          display: "flex",
          borderTop: `1px solid ${bord}`,
          background: surf,
          margin: "0 0 0 0",
        }}
      >
        {[
          { val: "-58%", label: "FACTURA AWS", color: green },
          { val: "+8",   label: "AÑOS EXP",   color: text },
          { val: "20K+", label: "USUARIOS",   color: text },
          { val: "48h",  label: "ONBOARDING", color: text },
          { val: "0",    label: "DEPENDENCIA",color: text },
        ].map((kpi, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: "28px 32px",
              borderRight: i < 4 ? `1px solid ${bord}` : "none",
            }}
          >
            <div
              style={{
                color: kpi.color,
                fontSize: "36px",
                fontWeight: 500,
                letterSpacing: "-1.5px",
                lineHeight: "1",
                marginBottom: "6px",
              }}
            >
              {kpi.val}
            </div>
            <div
              style={{
                color: dim,
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "1.5px",
              }}
            >
              {kpi.label}
            </div>
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: fontLight,  style: "normal", weight: 300 },
        { name: "Space Grotesk", data: fontMedium, style: "normal", weight: 500 },
      ],
    }
  )
}
