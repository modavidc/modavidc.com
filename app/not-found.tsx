"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 24px",
      background: "var(--bg)",
      color: "var(--text)",
      fontFamily: "var(--ff-body)",
    }}>
      <div style={{
        maxWidth: "680px",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        textAlign: "center",
      }}>
        {/* Wordmark */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "8px",
        }}>
          <div style={{
            fontFamily: "var(--ff-display)",
            fontSize: "20px",
            fontWeight: "400",
            letterSpacing: "-0.025em",
          }}>
            <span style={{ color: "oklch(67% 0.17 148)" }}>mo</span>davidc
          </div>
        </div>

        {/* 404 Visual */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "flex-end",
        }}>
          <div style={{
            fontFamily: "var(--ff-display)",
            fontSize: "120px",
            fontWeight: "300",
            lineHeight: "0.9",
            color: "var(--text-3)",
            letterSpacing: "-0.04em",
          }}>
            4
          </div>
          <div style={{
            fontFamily: "var(--ff-display)",
            fontSize: "120px",
            fontWeight: "300",
            lineHeight: "0.9",
            color: "var(--text-3)",
            letterSpacing: "-0.04em",
          }}>
            0
          </div>
          <div style={{
            fontFamily: "var(--ff-display)",
            fontSize: "120px",
            fontWeight: "300",
            lineHeight: "0.9",
            color: "oklch(67% 0.17 148)",
            letterSpacing: "-0.04em",
          }}>
            4
          </div>
        </div>

        {/* Headline */}
        <div>
          <h1 style={{
            fontFamily: "var(--ff-display)",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: "400",
            letterSpacing: "-0.03em",
            marginBottom: "16px",
            color: "var(--text)",
            lineHeight: "1.2",
          }}>
            Esta ruta no existe<br/>
            <span style={{ color: "oklch(67% 0.17 148)" }}>en mi arquitectura</span>
          </h1>
          <p style={{
            fontSize: "16px",
            color: "var(--text-2)",
            lineHeight: "1.65",
            fontWeight: "300",
            maxWidth: "520px",
            margin: "0 auto",
          }}>
            Pero no te preocupes. Puedo ayudarte a encontrar lo que buscas, o a resolver algo más valioso.
          </p>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "var(--border)",
          width: "100%",
        }} />

        {/* Navigation */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          maxWidth: "420px",
          margin: "0 auto",
          width: "100%",
        }}>
          <Link href="/" style={{
            padding: "14px 20px",
            background: "oklch(67% 0.17 148)",
            color: "#0b0c0e",
            border: "none",
            borderRadius: "4px",
            textDecoration: "none",
            fontFamily: "var(--ff-body)",
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "-0.01em",
            transition: "opacity 150ms ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.85"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1"
          }}
          >
            ← Inicio
          </Link>

          <Link href="/casos-de-exito" style={{
            padding: "14px 20px",
            background: "transparent",
            color: "var(--text)",
            border: "1px solid var(--border-2)",
            borderRadius: "4px",
            textDecoration: "none",
            fontFamily: "var(--ff-body)",
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "-0.01em",
            transition: "all 150ms ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "oklch(67% 0.17 148)"
            e.currentTarget.style.color = "oklch(67% 0.17 148)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-2)"
            e.currentTarget.style.color = "var(--text)"
          }}
          >
            Casos de éxito
          </Link>

          <Link href="/experiencia" style={{
            padding: "14px 20px",
            background: "transparent",
            color: "var(--text)",
            border: "1px solid var(--border-2)",
            borderRadius: "4px",
            textDecoration: "none",
            fontFamily: "var(--ff-body)",
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "-0.01em",
            transition: "all 150ms ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "oklch(67% 0.17 148)"
            e.currentTarget.style.color = "oklch(67% 0.17 148)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-2)"
            e.currentTarget.style.color = "var(--text)"
          }}
          >
            Experiencia
          </Link>

          <Link href="/metodologia" style={{
            padding: "14px 20px",
            background: "transparent",
            color: "var(--text)",
            border: "1px solid var(--border-2)",
            borderRadius: "4px",
            textDecoration: "none",
            fontFamily: "var(--ff-body)",
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "-0.01em",
            transition: "all 150ms ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "oklch(67% 0.17 148)"
            e.currentTarget.style.color = "oklch(67% 0.17 148)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-2)"
            e.currentTarget.style.color = "var(--text)"
          }}
          >
            Metodología
          </Link>
        </div>

        {/* Footer CTA */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "32px",
        }}>
          <p style={{
            fontSize: "14px",
            color: "var(--text-2)",
            marginBottom: "16px",
            lineHeight: "1.6",
          }}>
            Si crees que encontraste un bug en mi arquitectura, cuéntame
          </p>
          <a href="mailto:moisesdavidaaron@gmail.com?subject=404%20encontrado&body=Hola%20Moisés%2C%0A%0AEncontré%20una%20página%20404%20en%20tu%20sitio%0A%0A"
            style={{
              display: "inline-flex",
              padding: "10px 18px",
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              color: "var(--text)",
              textDecoration: "none",
              fontFamily: "var(--ff-mono)",
              fontSize: "12px",
              letterSpacing: "0.05em",
              transition: "all 150ms ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "oklch(67% 0.17 148)"
              e.currentTarget.style.background = "var(--bg-3)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)"
              e.currentTarget.style.background = "var(--bg-2)"
            }}
          >
            reportar →
          </a>
        </div>
      </div>
    </div>
  )
}
