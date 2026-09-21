import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { products } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url.replace(/\/$/, '');

  const staticRoutes = [
    '',
    'about-us',
    'products',
    'industries',
    'approvals-compliance',
    'quality',
    'contact'
  ].map((p) => ({
    url: p ? `${base}/${p}` : base,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.7
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...productRoutes];
}