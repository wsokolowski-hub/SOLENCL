import React from 'react';
import SchemaOrg, { type CourseSchema } from '@/components/SchemaOrg';
import Breadcrumbs, { type Crumb } from '@/components/Breadcrumbs';

export interface PageShellProps {
  pageType?: 'home' | 'service' | 'contact' | 'faq' | 'about' | 'location';
  faq?: { q: string; a: string }[];
  breadcrumbs?: Crumb[];
  course?: CourseSchema;
  children: React.ReactNode;
}

/**
 * Odpowiednik ciała dawnego Base.astro: JSON-LD (SchemaOrg), okruszki
 * (poza <main>, jak w Astro) oraz <main id="main"> z treścią strony.
 * Nagłówek/stopkę/skip-link zapewnia layout.tsx.
 */
export default function PageShell({ pageType, faq, breadcrumbs, course, children }: PageShellProps) {
  return (
    <>
      <SchemaOrg pageType={pageType} faq={faq} breadcrumbs={breadcrumbs} course={course} />
      {breadcrumbs && breadcrumbs.length > 1 && <Breadcrumbs items={breadcrumbs} />}
      <main id="main">{children}</main>
    </>
  );
}
