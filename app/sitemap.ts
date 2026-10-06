import { MetadataRoute } from 'next'

const base = 'https://modavidc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const casosIds = [
    'colegio-santa-angela-seguridad',
    'grupero',
    'indexum-agrotech',
    'indexum-autoservicio',
    'licencias-farmaceuticas',
    'medirec-aws',
    'medirec-backup-dr',
    'ores-laboratory-api',
    'preis-integration',
    'surescripts-certification',
    't-cuida-audit',
    't-cuida-multitenant',
    'vipapp-patient-ehr',
  ]

  const labsSlugs = ['el-estoico', 'modavidc-com']

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/casos-de-exito`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/metodologia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/experiencia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/labs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/testimonials`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...casosIds.map(id => ({
      url: `${base}/casos-de-exito/detail/${id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...labsSlugs.map(slug => ({
      url: `${base}/labs/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
