import { MetadataRoute } from 'next'
import { SITE_INFO } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
  }
}
