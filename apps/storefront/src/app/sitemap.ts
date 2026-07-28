import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luckygazab.com';

  const routes = [
    '',
    '/products',
    '/cart',
    '/checkout',
    '/track-order',
    '/blog',
    '/contact',
    '/privacy-policy'
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const productPages = [
    'loreal-absolut-repair-mask',
    'o3-professional-brightening-facial-kit',
    'schwarzkopf-igora-royal-shade-5-0',
    'maybelline-superstay-vinyl-ink-lipstick'
  ].map((slug) => ({
    url: `${baseUrl}/product/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9
  }));

  return [...staticPages, ...productPages];
}
