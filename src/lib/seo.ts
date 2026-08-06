import type { Metadata } from 'next';
import { site } from '@/data/site';

export interface SeoInput {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

/**
 * Odtwarza logikę dawnego SEO.astro w formacie Metadata API Next.js.
 * metadataBase (ustawiony w layout.tsx) zamienia ścieżki względne na absolutne.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  image = '/assets/og-image.jpg',
  type = 'website',
  noindex = false,
}: SeoInput): Metadata {
  const fullTitle = title.toLowerCase().includes('solen') ? title : `${title} | ${site.name}`;
  const isDefaultOg = image === '/assets/og-image.jpg';
  const ogAlt = `${site.name} — nauka pływania dla dzieci, Wrocław Grabiszyn, weekendy`;

  return {
    title: fullTitle,
    description,
    ...(noindex
      ? { robots: { index: false, follow: true } }
      : { alternates: { canonical: path } }),
    authors: [{ name: site.owner }],
    openGraph: {
      type,
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      locale: site.locale,
      images: [
        {
          url: image,
          alt: ogAlt,
          ...(isDefaultOg ? { width: 1200, height: 630, type: 'image/jpeg' } : {}),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    other: {
      'geo.region': 'PL-DS',
      'geo.placename': site.city,
      'geo.position': `${site.geo.lat};${site.geo.lng}`,
      ICBM: `${site.geo.lat}, ${site.geo.lng}`,
      'format-detection': 'telephone=yes',
    },
  };
}
