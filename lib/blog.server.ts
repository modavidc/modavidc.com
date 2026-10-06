'use server'

import fs from 'fs'
import path from 'path'
import { BlogArticle, BlogCategory, parseFrontMatter } from './blog'

const BLOG_DIR = path.join(process.cwd(), 'docs', 'blog')

export async function getBlogArticles(): Promise<BlogArticle[]> {
  try {
    if (!fs.existsSync(BLOG_DIR)) {
      return []
    }

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))

    return files.map(filename => {
      const slug = filename.replace('.md', '')
      const filePath = path.join(BLOG_DIR, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { meta, content } = parseFrontMatter(fileContents)

      return {
        slug,
        title: meta.title || slug,
        excerpt: meta.excerpt || '',
        date: meta.date || new Date().toISOString().split('T')[0],
        category: (meta.category || 'technical') as BlogCategory,
        readingTime: Math.ceil(content.split(/\s+/).length / 200),
        content,
      }
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading blog articles:', error)
    return []
  }
}

export async function getBlogArticle(slug: string): Promise<BlogArticle | null> {
  const articles = await getBlogArticles()
  return articles.find(a => a.slug === slug) || null
}

export async function getBlogArticlesByCategory(category: BlogCategory): Promise<BlogArticle[]> {
  const articles = await getBlogArticles()
  return articles.filter(a => a.category === category)
}
