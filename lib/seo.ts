import type { Metadata } from 'next';
import { site } from '@/data/site';

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${site.url}${opts.path === '/' ? '' : opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description
    }
  };
}