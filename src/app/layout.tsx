import '@/styles/fonts.css';
import '@/styles/global.css';
import '@/styles/animations.css';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { site } from '@/data/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';

// Fallback bez frameworka: gdyby hydracja Motion nie ruszyła w 2,5 s,
// pokaż wszystkie sekcje (żeby scroll-reveal nigdy nie „zjadł" treści).
const motionFallback = `document.documentElement.classList.add('js');
window.addEventListener('DOMContentLoaded',function(){setTimeout(function(){
if(window.__motionReady)return;
document.querySelectorAll('.reveal-scope > *').forEach(function(el){el.classList.add('is-visible');});
},2500);});`;

const lang = site.locale.split('_')[0];

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: '%s' },
  description: site.description,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FF8357',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFallback }} />
        {site.cookiebotId && (
          <Script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid={site.cookiebotId}
            data-blockingmode="auto"
            strategy="beforeInteractive"
          />
        )}
        <link
          rel="preload"
          href="/fonts/comfortaa-latin-ext-d56eb1.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/space-mono-latin-ext-3c18ea.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a href="#main" className="skip">
          Przejdź do treści
        </a>
        <Header />
        {children}
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
