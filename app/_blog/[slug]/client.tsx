'use client'

import Link from "next/link"
import type { BlogArticle } from "@/lib/blog"
import { CATEGORIES } from "@/lib/blog-categories"

export function BlogArticleDetail({
  article,
  prevArticle,
  nextArticle,
  categoryLabel,
}: {
  article: BlogArticle
  prevArticle: BlogArticle | null
  nextArticle: BlogArticle | null
  categoryLabel: string
}) {
  return (
    <>
      <style>{blogContentStyles}</style>

      {/* Header */}
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "60px 48px 40px",
        borderBottom: "1px solid var(--border)",
      }}>
        <Link href="/blog" style={{
          fontFamily: "var(--ff-mono)",
          fontSize: "12px",
          color: "var(--green)",
          letterSpacing: ".06em",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "20px",
          cursor: "pointer",
        }}>
          ← Volver al blog
        </Link>

        <div style={{
          display: "flex",
          gap: "16px",
          marginBottom: "20px",
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
            {categoryLabel}
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

        <h1 style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: "300",
          letterSpacing: "-.03em",
          color: "var(--text)",
          lineHeight: "1.15",
          marginBottom: "16px",
        }}>
          {article.title}
        </h1>

        {article.excerpt && (
          <p style={{
            fontSize: "16px",
            color: "var(--text-2)",
            lineHeight: "1.65",
            maxWidth: "700px",
          }}>
            {article.excerpt}
          </p>
        )}
      </div>

      {/* Content */}
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 48px",
      }}>
        <article
          style={{
            fontSize: "15px",
            lineHeight: "1.75",
            color: "var(--text-2)",
          }}
          dangerouslySetInnerHTML={{
            __html: parseMarkdownToHTML(article.content),
          }}
          className="blog-content"
        />
      </div>

      {/* Navigation */}
      {(prevArticle || nextArticle) && (
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px 48px",
          borderTop: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}>
          {prevArticle ? (
            <Link href={`/blog/${prevArticle.slug}`} style={{
              display: "block",
              padding: "20px",
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "all .2s",
              cursor: "pointer",
            }}>
              <div style={{
                fontFamily: "var(--ff-mono)",
                fontSize: "10px",
                color: "var(--text-3)",
                letterSpacing: ".06em",
                marginBottom: "8px",
              }}>
                ← Anterior
              </div>
              <div style={{
                fontFamily: "var(--ff-display)",
                fontSize: "16px",
                fontWeight: "500",
                color: "var(--text)",
              }}>
                {prevArticle.title}
              </div>
            </Link>
          ) : <div />}

          {nextArticle ? (
            <Link href={`/blog/${nextArticle.slug}`} style={{
              display: "block",
              padding: "20px",
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "all .2s",
              textAlign: "right",
              cursor: "pointer",
            }}>
              <div style={{
                fontFamily: "var(--ff-mono)",
                fontSize: "10px",
                color: "var(--text-3)",
                letterSpacing: ".06em",
                marginBottom: "8px",
              }}>
                Siguiente →
              </div>
              <div style={{
                fontFamily: "var(--ff-display)",
                fontSize: "16px",
                fontWeight: "500",
                color: "var(--text)",
              }}>
                {nextArticle.title}
              </div>
            </Link>
          ) : <div />}
        </div>
      )}
    </>
  )
}

function parseMarkdownToHTML(markdown: string): string {
  let html = markdown

  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
    return `<pre style="background:var(--bg-3);padding:16px;border-radius:4px;margin:16px 0;overflow:auto;"><code style="font-family:var(--ff-mono);font-size:12px;color:var(--text-2);line-height:1.5;">${escaped}</code></pre>`
  })

  // Inline code
  html = html.replace(/`([^`]+)`/g, (match, code) => {
    return `<code style="font-family:var(--ff-mono);font-size:13px;background:var(--bg-3);color:var(--green);padding:2px 6px;border-radius:2px;">${code}</code>`
  })

  // Headers
  html = html.replace(/^## (.*?)$/gm, (match, text) => {
    return `<h2 style="font-family:var(--ff-display);font-size:24px;font-weight:400;letter-spacing:-.02em;color:var(--text);margin:32px 0 16px;line-height:1.3;">${text}</h2>`
  })

  html = html.replace(/^### (.*?)$/gm, (match, text) => {
    return `<h3 style="font-family:var(--ff-display);font-size:18px;font-weight:500;letter-spacing:-.01em;color:var(--text);margin:24px 0 12px;line-height:1.3;">${text}</h3>`
  })

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong style=\"font-weight:600;\">$1</strong>")

  // Italic
  html = html.replace(/\*(.*?)\*/g, "<em style=\"font-style:italic;\">$1</em>")

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color:var(--green);text-decoration:underline;">$1</a>')

  // Blockquotes
  html = html.replace(/^> (.*?)$/gm, (match, text) => {
    return `<blockquote style="border-left:4px solid var(--green);padding-left:16px;margin:16px 0;color:var(--text-3);font-style:italic;">${text}</blockquote>`
  })

  // Paragraphs
  html = html.replace(/\n\n+/g, "</p><p style=\"margin-bottom:16px;line-height:1.75;\">")
  html = `<p style="margin-bottom:16px;line-height:1.75;">${html}</p>`

  // Clean up double paragraph tags
  html = html.replace(/<p style="[^"]*"><\/p>/g, "")

  return html
}

const blogContentStyles = `
.blog-content h2 {
  font-family: var(--ff-display);
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 32px 0 16px;
  line-height: 1.3;
}

.blog-content h3 {
  font-family: var(--ff-display);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--text);
  margin: 24px 0 12px;
  line-height: 1.3;
}

.blog-content p {
  margin-bottom: 16px;
  line-height: 1.75;
}

.blog-content ul, .blog-content ol {
  margin-bottom: 16px;
  padding-left: 24px;
}

.blog-content table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
  font-size: 13px;
}

.blog-content table th {
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid var(--border);
  font-weight: 600;
  background: var(--bg-3);
}

.blog-content table td {
  padding: 12px;
  border-bottom: 1px solid var(--border);
}
`
