"use client"

import Link from "next/link"

const links = [
  { href: "/casos", label: "Casos de éxito" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/productos", label: "Productos" },
]

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        background: "var(--bg)",
        color: "var(--fg)",
        textAlign: "center",
        gap: 40,
      }}
    >
      <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-.03em" }}>
        <span style={{ color: "var(--accent)" }}>mo</span>davidc
      </div>

      <div style={{ fontWeight: 800, fontSize: "clamp(80px,12vw,140px)", letterSpacing: "-.06em", lineHeight: 0.9, color: "var(--muted)" }}>
        4<span style={{ color: "var(--accent)" }}>0</span>4
      </div>

      <div style={{ maxWidth: 480 }}>
        <h1 style={{ margin: "0 0 14px", fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.1 }}>
          Esta ruta no existe<br /><span style={{ color: "var(--accent)" }}>en mi arquitectura.</span>
        </h1>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 16, lineHeight: 1.6 }}>
          Pero puedo ayudarte a encontrar lo que buscas.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10, maxWidth: 420, width: "100%" }}>
        <Link href="/" style={{ padding: "14px 20px", background: "var(--accent)", color: "#fff", borderRadius: 999, textDecoration: "none", fontSize: 14, fontWeight: 700 }}>
          ← Inicio
        </Link>
        {links.map((l) => (
          <Link key={l.href} href={l.href} style={{ padding: "14px 20px", background: "var(--card)", color: "var(--fg)", border: "1.5px solid var(--line)", borderRadius: 999, textDecoration: "none", fontSize: 14, fontWeight: 700 }}>
            {l.label}
          </Link>
        ))}
      </div>

      <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24, maxWidth: 480, width: "100%" }}>
        <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 12 }}>Si crees que encontraste un bug, cuéntame.</p>
        <a
          href="mailto:hola@modavidc.com?subject=404%20encontrado"
          style={{ display: "inline-flex", padding: "10px 18px", background: "var(--card)", border: "1px solid var(--line)", borderRadius: 999, color: "var(--fg)", textDecoration: "none", fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: ".05em" }}
        >
          reportar →
        </a>
      </div>
    </div>
  )
}
