import React from 'react';
import { site } from '@/data/site';

export default function Footer() {
  const year = 2026;
  return (
    <footer className="ftr">
      <img src="/assets/logo-cropped.webp" alt={site.short} className="ftr-logo" width="280" height="135" />
      <div className="ftr-grid">
        <div className="ftr-col">
          <h3>Nawigacja</h3>
          <a href="/zapisy/">Zapisy</a>
          <a href="/cennik/">Cennik</a>
          <a href="/o-nas/">O nas</a>
          <a href="/faq/">FAQ</a>
          <a href="/gdzie-plywamy/">Gdzie pływamy</a>
          <a href="/kontakt/">Kontakt</a>
        </div>
        <div className="ftr-col">
          <h3>Kontakt</h3>
          <a href={`tel:${site.phone}`}>{site.phoneHuman}</a>
          <a href={`tel:${site.phone2}`}>{site.phone2Human}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>
            {site.address.street}
            <br />
            {site.address.postal} {site.address.city}, {site.district}
          </p>
        </div>
        <div className="ftr-col">
          <h3>Social media</h3>
          <a href={site.social.facebook} target="_blank" rel="noopener">
            Facebook
          </a>
          <a href={site.social.instagram} target="_blank" rel="noopener">
            Instagram
          </a>
        </div>
      </div>

      <nav className="ftr-legal" aria-label="Stopka prawna">
        <a href="/polityka-prywatnosci/">Polityka prywatności</a>
        <a href="/regulamin/">Warunki korzystania ze strony internetowej</a>
        <a href="/polityka-cookies/">Polityka plików cookie</a>
      </nav>

      <div className="ftr-bottom">
        © {year} {site.name} · {site.city} {site.district} · {site.tagline}
      </div>
    </footer>
  );
}
