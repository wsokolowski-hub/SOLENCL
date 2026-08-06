import React from 'react';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import './kontakt.css';

const title = 'Kontakt | Szkoła Pływania Solen Swim — Wrocław Grabiszyn';
const description =
  'Kontakt ze szkołą pływania Solen Swim — Wrocław Grabiszyn, ul. Aleksandra Ostrowskiego 3. Tel. 505 912 389. Zajęcia w weekendy, darmowy parking.';
const path = '/kontakt/';
const breadcrumbs = [
  { name: 'Start', href: '/' },
  { name: 'Kontakt', href: '/kontakt/' },
];

export const metadata = buildMetadata({ title, description, path });

export default function Page() {
  return (
    <PageShell pageType="contact" breadcrumbs={breadcrumbs}>
      {/* HERO */}
      <div className="kt-hero">
        <span className="kt-eyebrow">Kontakt</span>
        <h1 className="kt-title">
          Chcesz z nami
          <br />
          <span>pływać?</span>
        </h1>
        <p className="kt-subtitle">Kontakt — szkoła pływania dla dzieci, Wrocław Grabiszyn</p>
        <p className="kt-tagline">swim with the sun · Wrocław</p>
      </div>

      {/* GRID DANYCH KONTAKTOWYCH */}
      <div className="kt-grid">
        {/* Adres — nieklikalny */}
        <div className="kt-karta">
          <div className="kt-karta-ikona">📍</div>
          <div>
            <span className="kt-karta-label">Adres</span>
            <p className="kt-karta-wartosc">{site.address.street}</p>
            <span className="kt-karta-sub">
              {site.address.postal} {site.address.city} · dzielnica Grabiszyn
            </span>
            <span className="kt-karta-sub kt-karta-sub-drugi">
              Zajęcia indywidualne: {site.address2.street}, {site.address2.postal} {site.address2.city}
            </span>
          </div>
        </div>

        {/* Telefon — KLIKALNY */}
        <a className="kt-karta" href="tel:+48505912389">
          <div className="kt-karta-ikona coral">📞</div>
          <div>
            <span className="kt-karta-label">Telefon</span>
            <p className="kt-karta-wartosc">505 912 389</p>
            <span className="kt-karta-sub">793 790 711</span>
          </div>
        </a>

        {/* Email — KLIKALNY */}
        <a className="kt-karta" href="mailto:solenswim@outlook.com">
          <div className="kt-karta-ikona">✉️</div>
          <div>
            <span className="kt-karta-label">E-mail</span>
            <p className="kt-karta-wartosc">solenswim@outlook.com</p>
            <span className="kt-karta-sub">Odpowiadamy w ciągu 24h</span>
          </div>
        </a>

        {/* Obiekt — nieklikalny */}
        <div className="kt-karta">
          <div className="kt-karta-ikona coral">🏊</div>
          <div>
            <span className="kt-karta-label">Obiekt</span>
            <p className="kt-karta-wartosc">Baseny kryte</p>
            <span className="kt-karta-sub">Bezpłatny parking przy obiekcie</span>
          </div>
        </div>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="kt-social">
        <span className="kt-social-eyebrow">Obserwuj nas</span>
        <div className="kt-social-row">
          {/* Facebook — KLIKALNY */}
          <a
            className="kt-social-btn"
            href="https://www.facebook.com/profile.php?id=61581816024136"
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <div className="kt-social-btn-tekst">
              <span className="kt-social-btn-label">Facebook</span>
              <span className="kt-social-btn-nazwa">{site.name}</span>
            </div>
          </a>

          {/* Instagram — KLIKALNY */}
          <a
            className="kt-social-btn"
            href="https://www.instagram.com/szkolaplywania.solenswim/"
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="#FFF9F6" strokeWidth={2} />
              <circle cx="12" cy="12" r="4" fill="none" stroke="#FFF9F6" strokeWidth={2} />
              <circle cx="17.5" cy="6.5" r="1" fill="#FFF9F6" />
            </svg>
            <div className="kt-social-btn-tekst">
              <span className="kt-social-btn-label">Instagram</span>
              <span className="kt-social-btn-nazwa">@szkolaplywania.solenswim</span>
            </div>
          </a>
        </div>
      </div>

      {/* MAPA DOJAZDU */}
      <div className="kt-mapa">
        <span className="kt-mapa-eyebrow">Jak do nas trafić</span>
        <p className="kt-mapa-title">
          Znajdziesz nas na <span>Grabiszynie</span>
        </p>
        <div className="kt-mapa-ramka">
          <iframe
            src={site.maps.embedUrl}
            loading="lazy"
            title={`Mapa dojazdu — ${site.name}, ${site.address.street}, ${site.address.postal} ${site.address.city}`}
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
        <div className="kt-mapa-akcje">
          <a className="kt-mapa-btn kt-mapa-btn-coral" href={site.maps.directionsUrl} target="_blank" rel="noopener">
            Wyznacz trasę
          </a>
          <a className="kt-mapa-btn" href={site.reviews.googleProfileUrl} target="_blank" rel="noopener">
            Zobacz wizytówkę w Google
          </a>
        </div>
      </div>

      <div className="kt-separator"></div>

      {/* INFO O FORMULARZU */}
      <div className="kt-formularz-info">
        <div className="kt-form-box">
          <div>
            <span className="kt-form-box-eyebrow">Formularz kontaktowy</span>
            <p className="kt-form-box-title">
              Napisz do nas —
              <br />
              oddzwonimy!
            </p>
            <p className="kt-form-box-sub">
              Wypełnij formularz poniżej a my skontaktujemy się z Tobą w ciągu 24 godzin, aby omówić szczegóły i
              dobrać odpowiedni kurs dla Twojego dziecka.
            </p>
          </div>
          <span className="kt-form-box-ikona">💬</span>
        </div>
      </div>
    </PageShell>
  );
}
