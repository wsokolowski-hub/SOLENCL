import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

const paths = [
  '/',
  '/nauka-plywania/',
  '/nauka-plywania/niemowleta-i-dzieci-do-4-lat/',
  '/nauka-plywania/dzieci-od-podstaw/',
  '/nauka-plywania/doskonalenie/',
  '/nauka-plywania/indywidualnie/',
  '/o-nas/',
  '/gdzie-plywamy/',
  // '/zapisy/' — usunięte z mapy: przekierowuje do zewnętrznego systemu zapisowego
  '/cennik/',
  '/kontakt/',
  '/faq/',
  '/polityka-prywatnosci/',
  '/regulamin/',
  '/polityka-cookies/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((p) => ({
    url: new URL(p, site.url).toString(),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
}
