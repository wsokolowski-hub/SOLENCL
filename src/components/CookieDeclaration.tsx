'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Wstrzykuje skrypt Cookiebot CookieDeclaration (cd.js) dokładnie w tym miejscu
 * DOM-u, dzięki czemu automatycznie generowana tabela cookies renderuje się inline
 * (odpowiednik dawnego <script id="CookieDeclaration"> w polityka-cookies.astro).
 */
export default function CookieDeclaration({ cbid }: { cbid: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host || host.querySelector('#CookieDeclaration')) return;
    const s = document.createElement('script');
    s.id = 'CookieDeclaration';
    s.src = `https://consent.cookiebot.com/${cbid}/cd.js`;
    s.async = true;
    host.appendChild(s);
  }, [cbid]);

  return <div ref={ref} />;
}
