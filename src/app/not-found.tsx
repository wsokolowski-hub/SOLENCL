import React from 'react';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import './not-found.css';

export const metadata: Metadata = {
  title: '404 — strona nie istnieje | Solen Swim',
  description: 'Nie znaleźliśmy tej strony. Wróć na stronę główną Solen Swim.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell pageType="home">
      <section className="not-found">
        <h1>404</h1>
        <p>Tej strony nie ma w naszym basenie</p>
        <a href="/" className="back-btn">
          Wróć na stronę główną
        </a>
      </section>
    </PageShell>
  );
}
