import { getBlogArticle, getBlogArticles } from "@/lib/blog.server"
import { notFound } from "next/navigation"
import { CATEGORIES } from "@/lib/blog-categories"
import { BlogArticleDetail } from "./client"

export async function generateStaticParams() {
  const articles = await getBlogArticles()
  return articles.map(a => ({ slug: a.slug }))
}

export default async function BlogArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getBlogArticle(params.slug)
  if (!article) notFound()

  const allArticles = await getBlogArticles()
  const currentIndex = allArticles.findIndex(a => a.slug === article.slug)
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null

  const categoryLabel = CATEGORIES.find(c => c.key === article.category)?.label || "Técnico"

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <BlogArticleDetail
        article={article}
        prevArticle={prevArticle}
        nextArticle={nextArticle}
        categoryLabel={categoryLabel}
      />
    </div>
  )
}
