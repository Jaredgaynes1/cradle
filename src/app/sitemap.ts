import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://usecradle.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://usecradle.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://usecradle.com/solutions',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://usecradle.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://usecradle.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://usecradle.com/blog/why-marinas-need-modern-data-infrastructure',
      lastModified: new Date('2026-01-13'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://usecradle.com/blog/hidden-costs-of-excel',
      lastModified: new Date('2026-01-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://usecradle.com/blog/ai-storage-optimization',
      lastModified: new Date('2026-01-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://usecradle.com/blog/building-customer-loyalty',
      lastModified: new Date('2026-01-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://usecradle.com/blog/system-integration-101',
      lastModified: new Date('2026-01-03'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://usecradle.com/blog/real-time-business-intelligence',
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://usecradle.com/blog/case-study-revenue-increase',
      lastModified: new Date('2025-12-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
