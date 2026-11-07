import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Claude-SearchBot'], allow: '/' },
      { userAgent: '*', allow: '/', disallow: ['/private/', '/admin/'] },
    ],
    sitemap: 'https://modavidc.com/sitemap.xml',
  }
}
