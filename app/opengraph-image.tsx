import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Moisés Cedeño · Tech Lead & Consultor · AWS, FinOps & Agentic AI"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const dynamic = "force-dynamic"

export default async function OGImage() {
  const fontBold = await readFile(join(process.cwd(), "public", "fonts", "schibsted-grotesk-800.woff2"))

  const band = "#0A140D"
  const fg = "#E4ECE5"
  const muted = "#9FB0A3"
  const accent = "#3DBE72"
  const tile = "rgba(255,255,255,.06)"

  return new ImageResponse(
    (
      <div
        style={{
          background: band,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Schibsted Grotesk, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "48px 72px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: accent, color: band, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800 }}>MC</div>
            <span style={{ color: fg, fontSize: 24, fontWeight: 800, letterSpacing: "-1px" }}>modavidc</span>
          </div>
          <span style={{ color: muted, fontSize: 14, fontWeight: 800, letterSpacing: "2px" }}>MODAVIDC.COM</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "48px 72px 0", justifyContent: "center" }}>
          <div style={{ color: fg, fontSize: 72, fontWeight: 800, letterSpacing: "-3px", lineHeight: 1 }}>Moisés Cedeño</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 20, marginBottom: 24 }}>
            <div style={{ width: 32, height: 2, background: accent }} />
            <span style={{ color: accent, fontSize: 22, fontWeight: 800, letterSpacing: "-0.3px" }}>Tech Lead & Consultor · AWS, FinOps y Agentic AI</span>
          </div>
        </div>

        <div style={{ display: "flex", borderTop: `1px solid ${tile}`, background: "rgba(255,255,255,.03)" }}>
          {[
            { val: "−58%", label: "FACTURA AWS" },
            { val: "−$20K", label: "LICENCIAS/AÑO" },
            { val: "−70%", label: "LABS · TIEMPO" },
            { val: "41→80", label: "CALIDAD T-CUIDA" },
          ].map((kpi, i) => (
            <div key={kpi.label} style={{ display: "flex", flexDirection: "column", flex: 1, padding: "28px 32px", borderRight: i < 3 ? `1px solid ${tile}` : "none" }}>
              <div style={{ color: accent, fontSize: 34, fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1, marginBottom: 6 }}>{kpi.val}</div>
              <div style={{ color: muted, fontSize: 10, fontWeight: 800, letterSpacing: "1.5px" }}>{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Schibsted Grotesk", data: fontBold, style: "normal", weight: 800 }],
    }
  )
}
