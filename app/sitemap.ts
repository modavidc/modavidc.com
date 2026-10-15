import { MetadataRoute } from 'next'

const base = 'https://modavidc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/sobre-mi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/experiencia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/casos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/productos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
