import { getBlogArticles } from "@/lib/blog.server"
import { ClientBlogContent } from "./client"

export default async function BlogPage() {
  const articles = await getBlogArticles()

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* Hero */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 48px 60px",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{
          fontFamily: "var(--ff-mono)",
          fontSize: "11px",
          color: "var(--text-3)",
          letterSpacing: ".16em",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}>
          Pensamiento
        </div>

        <h1 style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(40px, 5vw, 64px)",
          fontWeight: "300",
          letterSpacing: "-.04em",
          color: "var(--text)",
          marginBottom: "20px",
          lineHeight: "1.1",
        }}>
          Escritos sobre arquitectura, <span style={{ color: "var(--green)" }}>SaaS</span> y sistemas que escalan.
        </h1>

        <p style={{
          fontSize: "16px",
          color: "var(--text-2)",
          maxWidth: "600px",
          lineHeight: "1.65",
        }}>
          Documentación de decisiones técnicas reales, análisis de patrones que funcionan, y opiniones sobre cómo construir software que dure.
        </p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px 80px" }}>
        <ClientBlogContent articles={articles} />
      </div>
    </div>
  )
}
