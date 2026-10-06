'use client'

import Link from "next/link"
import { useState } from "react"
import type { BlogCategory, BlogArticle } from "@/lib/blog"

const CATEGORIES: { key: BlogCategory; label: string; description: string }[] = [
  { key: "technical", label: "Technical", description: "Code patterns, architecture, implementation details" },
  { key: "product", label: "Product & SaaS", description: "Building products, freemium models, validation" },
  { key: "learnings", label: "Learnings", description: "Lessons from real projects, what worked and why" },
  { key: "opinions", label: "Opinions", description: "Hot takes on paradigms, frameworks, and approaches" },
]

export function ClientBlogContent({
  articles,
}: {
  articles: BlogArticle[]
}) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all")

  const filtered = activeCategory === "all"
    ? articles
    : articles.filter(a => a.category === activeCategory)

  return (
    <>
      <style>{`
        .blog-filter-btn { transition: all 0.15s ease; }
        .blog-card { transition: all 0.2s ease; }
      `}</style>

      {/* Filters */}
      <div style={{ marginBottom: "60px" }}>
        <div style={{
          fontFamily: "var(--ff-mono)",
          fontSize: "10px",
          color: "var(--text-3)",
          letterSpacing: ".12em",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}>
          Categorías
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={() => setActiveCategory("all")}
            className="blog-filter-btn"
            style={{
              padding: "10px 18px",
              borderRadius: "4px",
              border: activeCategory === "all"
                ? "1px solid var(--green)"
                : "1px solid var(--border)",
              background: activeCategory === "all"
                ? "var(--green)"
                : "transparent",
              color: activeCategory === "all"
                ? "#0b0c0e"
                : "var(--text)",
              fontSize: "13px",
              fontWeight: "500",
              cursor: "pointer",
              fontFamily: "var(--ff-body)",
            }}
          >
            Todos
          </button>

          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="blog-filter-btn"
              style={{
                padding: "10px 18px",
                borderRadius: "4px",
                border: activeCategory === cat.key
                  ? "1px solid var(--green)"
                  : "1px solid var(--border)",
                background: activeCategory === cat.key
                  ? "var(--green)"
                  : "transparent",
                color: activeCategory === cat.key
                  ? "#0b0c0e"
                  : "var(--text)",
                fontSize: "13px",
                fontWeight: "500",
                cursor: "pointer",
                fontFamily: "var(--ff-body)",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div style={{
        display: "grid",
        gap: "24px",
      }}>
        {filtered.length === 0 ? (
          <div style={{
            padding: "60px 40px",
            textAlign: "center",
            color: "var(--text-3)",
          }}>
            <p>No hay artículos en esta categoría aún.</p>
          </div>
        ) : (
          filtered.map(article => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="blog-card"
              style={{
                display: "block",
                padding: "24px",
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget
                target.style.borderColor = "var(--green)"
                target.style.background = "var(--bg-3)"
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget
                target.style.borderColor = "var(--border)"
                target.style.background = "var(--bg-2)"
              }}
            >
              <div style={{
                display: "flex",
                gap: "20px",
                marginBottom: "12px",
                flexWrap: "wrap",
                alignItems: "center",
              }}>
                <span style={{
                  fontFamily: "var(--ff-mono)",
                  fontSize: "10px",
                  color: "var(--text-3)",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                }}>
                  {CATEGORIES.find(c => c.key === article.category)?.label || "Técnico"}
                </span>

                <span style={{
                  fontFamily: "var(--ff-mono)",
                  fontSize: "10px",
                  color: "var(--text-3)",
                  letterSpacing: ".06em",
                }}>
                  {article.date}
                </span>

                <span style={{
                  fontFamily: "var(--ff-mono)",
                  fontSize: "10px",
                  color: "var(--text-3)",
                  letterSpacing: ".06em",
                }}>
                  {article.readingTime} min read
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--ff-display)",
                fontSize: "20px",
                fontWeight: "500",
                letterSpacing: "-.01em",
                color: "var(--text)",
                marginBottom: "8px",
              }}>
                {article.title}
              </h2>

              <p style={{
                fontSize: "14px",
                color: "var(--text-2)",
                lineHeight: "1.6",
              }}>
                {article.excerpt}
              </p>
            </Link>
          ))
        )}
      </div>
    </>
  )
}
