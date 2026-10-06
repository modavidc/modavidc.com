export type BlogCategory = 'technical' | 'product' | 'learnings' | 'opinions'

export interface BlogArticle {
  slug: string
  title: string
  excerpt: string
  date: string
  category: BlogCategory
  readingTime: number
  content: string
}

// Helper function for parsing - can be used on server or client
export function parseFrontMatter(fileContents: string): { meta: Record<string, any>; content: string } {
  const match = fileContents.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    return { meta: {}, content: fileContents }
  }

  const frontMatter = match[1]
  const content = match[2]
  const meta: Record<string, any> = {}

  frontMatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '')
      meta[key.trim()] = value
    }
  })

  return { meta, content }
}
