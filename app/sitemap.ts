import { routes } from '@/constants'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      priority: 1,
      url: routes.home,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      priority: 0.8,
      url: routes.about,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      priority: 0.5,
      url: routes.resume,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      priority: 0.5,
      url: routes.contact,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
  ]
}
