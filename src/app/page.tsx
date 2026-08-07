import React from 'react';
import Script from 'next/script';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import './home.css';

const title = 'Szkoła Pływania dla Dzieci Wrocław — weekendy | Solen Swim';
const description =
  'Szkoła pływania dla dzieci we Wrocławiu (Grabiszyn). Zajęcia w weekendy od 6. miesiąca do 10 lat. Małe grupy do 8 osób, certyfikowani instruktorzy.';
const path = '/';
const breadcrumbs: never[] = [];

export const metadata = buildMetadata({ title, description, path });

export default function Page() {
  return (
    <PageShell pageType="home" breadcrumbs={breadcrumbs}>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-left"></div>
        <div className="hero-right">
          <h1 className="hero-h1">
            <span className="hero-h1-sub">Solen Swim · Grabiszyn · soboty i niedziele</span>
            Szkoła pływania dla dzieci
            <br />
            we Wrocławiu
          </h1>
          <p className="hero-desc">
            Zacznij pływać z <strong>Solen Swim!</strong> Zajęcia w weekendy na basenie przy ul. Ostrowskiego 3 —
            nauka przez zabawę, w grupach do 8 osób.
          </p>
          <a className="hero-cta" href="/zapisy/">
            Zapisz się
          </a>
        </div>
        <img
          className="hero-goggles"
          src="/assets/okularki.webp"
          alt="Okularki pływackie Solen Swim"
          width="1060"
          height="1060"
        />
      </section>
      {/* ===== KURSY ===== */}
      <section className="kursy">
        <h2 className="kursy-title">Nasze kursy</h2>

        {/* KURS 1 */}
        <a className="kurs" href="/nauka-plywania/niemowleta-i-dzieci-do-4-lat/">
          <div className="kurs-foto">
            <img
              src="/assets/img-924d79bd96e8.webp"
              alt="Pływanie niemowląt i dzieci do lat 4"
              width="800"
              height="661"
              loading="lazy"
            />
          </div>
          <div className="kurs-info">
            <h3 className="kurs-nazwa">
              Pływanie niemowląt
              <br />
              i dzieci do lat 4
            </h3>
            <div className="kurs-szczegoly">
              Sobota 9:00 – 15:00
              <br />
              Niedziela 9:00 – 12:00
              <br />
              <span className="kurs-wyroznienie">Rodzic uczestniczy razem z dzieckiem</span>
              <br />
              Czas trwania: 30 minut
              <br />
              ul. Ostrowskiego 3, Wrocław Grabiszyn
            </div>
            <span className="kurs-link">Pływanie niemowląt — szczegóły →</span>
          </div>
        </a>

        {/* KURS 2 — odwrócony */}
        <a className="kurs odwrocony" href="/nauka-plywania/dzieci-od-podstaw/">
          <div className="kurs-foto">
            <img
              src="/assets/img-20f0624ea60b.webp"
              alt="Nauka pływania dla dzieci od podstaw"
              width="800"
              height="620"
              loading="lazy"
            />
          </div>
          <div className="kurs-info">
            <h3 className="kurs-nazwa">
              Nauka pływania dla
              <br />
              dzieci od podstaw
            </h3>
            <div className="kurs-szczegoly">
              <span className="label">Zajęcia:</span>
              Sobota 9:00 – 15:00
              <br />
              Niedziela 9:00 – 12:00
              <br />
              Czas trwania: 45 minut
              <br />
              ul. Ostrowskiego 3, Wrocław Grabiszyn
            </div>
            <span className="kurs-link">Nauka pływania od podstaw — szczegóły →</span>
          </div>
        </a>

        {/* KURS 3 */}
        <a className="kurs" href="/nauka-plywania/doskonalenie/">
          <div className="kurs-foto">
            <img
              src="/assets/img-13fb15be6e83.webp"
              alt="Doskonalenie pływania dla dzieci"
              width="533"
              height="800"
              loading="lazy"
            />
          </div>
          <div className="kurs-info">
            <h3 className="kurs-nazwa">
              Doskonalenie
              <br />
              pływania dla dzieci
            </h3>
            <div className="kurs-szczegoly">
              Sobota 9:00 – 15:00
              <br />
              Niedziela 9:00 – 12:00
              <br />
              Czas trwania: 45 minut
              <br />
              ul. Ostrowskiego 3, Wrocław Grabiszyn
            </div>
            <span className="kurs-link">Doskonalenie pływania — szczegóły →</span>
          </div>
        </a>
      </section>
      {/* ===== CTA KURSY ===== */}
      <div className="cta-band">
        <a href="/zapisy/" className="cta-btn">
          Zapisz się
        </a>
      </div>
      {/* ===== CO ZABRAĆ ===== */}
      <section className="zabrac">
        <div className="zabrac-wrap">
          <div className="zabrac-foto">
            <img
              src="/assets/hero-dziecko.webp"
              alt="Dziecko w okularkach pływackich na basenie Solen Swim"
              width="600"
              height="399"
              loading="lazy"
            />
          </div>
          <div className="zabrac-tresc">
            <h2 className="zabrac-title">
              Co zabrać
              <br />
              na basen?
            </h2>
            <ul className="zabrac-lista">
              <li>ręcznik kąpielowy</li>
              <li>klapki basenowe</li>
              <li>kąpielówki lub strój kąpielowy</li>
              <li>okularki do pływania</li>
              <li>pielucha wodoodporna dla malucha</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ===== CENNIK ===== */}
      <section className="cennik">
        <h2 className="cennik-title">Cennik</h2>
        <p className="cennik-subtitle">cena za jedne zajęcia</p>

        <div className="cennik-grid">
          {/* Karta 1 */}
          <a className="karta" href="/nauka-plywania/niemowleta-i-dzieci-do-4-lat/">
            <div className="karta-top">
              <span className="karta-tag">dla najmłodszych</span>
              <div className="karta-cena">
                <sup></sup>60<sub> zł</sub>
              </div>
              <span className="karta-czas">30 minut</span>
            </div>
            <div className="karta-body">
              <h3 className="karta-nazwa">
                Pływanie niemowląt
                <br />
                i dzieci do lat 4
              </h3>
              <span className="karta-wiek">Dziecko + Rodzic · 1–4 lata</span>
              <ul className="karta-lista">
                <li>Sobota 9:00 – 15:00</li>
                <li>Niedziela 9:00 – 12:00</li>
              </ul>
              <span className="karta-note">Rodzic uczestniczy razem z dzieckiem</span>
            </div>
          </a>

          {/* Karta 2 */}
          <a className="karta" href="/nauka-plywania/dzieci-od-podstaw/">
            <div className="karta-top">
              <span className="karta-tag">od podstaw i doskonalenie</span>
              <div className="karta-cena">
                <sup></sup>65<sub> zł</sub>
              </div>
              <span className="karta-czas">45 minut</span>
            </div>
            <div className="karta-body">
              <h3 className="karta-nazwa">
                Nauka i doskonalenie
                <br />
                pływania dla dzieci
              </h3>
              <span className="karta-wiek">5–10 lat</span>
              <ul className="karta-lista">
                <li>Sobota 9:00 – 15:00</li>
                <li>Niedziela 9:00 – 12:00</li>
              </ul>
            </div>
          </a>
        </div>

        {/* Info bar */}
        <div className="cennik-info">
          <span className="cennik-info-icon">📍</span>
          <div className="cennik-info-text">
            <strong>ul. Ostrowskiego 3, Wrocław Grabiszyn</strong>
            Baseny kryte · bezpłatny parking · zapisy telefonicznie lub online
          </div>
        </div>
      </section>
      {/* ===== CTA CENNIK ===== */}
      <div className="cta-band" style={{ background: 'var(--cream)' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: 'rgba(41,52,52,.55)',
            marginBottom: '14px',
            letterSpacing: '1px',
          }}
        >
          Dołącz do naszej szkoły pływania
        </p>
        <a href="/zapisy/" className="cta-btn">
          Zapisz się na zajęcia
        </a>
      </div>
      {/* ===== OPINIE ===== */}
      <section className="opinie-section">
        <h2 className="opinie-title">Opinie rodziców</h2>

        {site.reviews.featurableWidgetId ? (
          <div className="opinie-widget">
            <div id={`featurable-${site.reviews.featurableWidgetId}`} data-featurable-async></div>
          </div>
        ) : (
          <p className="opinie-placeholder">
            Zobacz, co piszą o nas rodzice — przeczytaj wszystkie opinie bezpośrednio w Google.
          </p>
        )}

        <div className="opinie-akcje">
          <a className="opinie-cta" href={site.reviews.googleProfileUrl} target="_blank" rel="noopener">
            Zobacz opinie w Google
          </a>
          <a
            className="opinie-cta opinie-cta-outline"
            href={site.reviews.googleWriteReviewUrl}
            target="_blank"
            rel="noopener"
          >
            Wystaw nam opinię ⭐
          </a>
        </div>
      </section>
      {site.reviews.featurableWidgetId && (
        <Script src="https://featurable.com/assets/bundle.js" strategy="afterInteractive" />
      )}
      {/* ===== KONTAKT (ciemna sekcja) ===== */}
      <div style={{ background: '#293434' }}>
        <div className="kontakt">
          <p className="kontakt-eyebrow">kontakt</p>
          <h2 className="kontakt-title">
            Chcesz z nami
            <br />
            <span>pływać?</span>
          </h2>
          <p className="kontakt-tagline">swim with the sun · Wrocław</p>

          <ul className="kontakt-lista">
            <li className="kontakt-item">
              <div className="kontakt-ikona">📍</div>
              <div className="kontakt-dane">
                <span className="kontakt-label">Adres</span>
                <span className="kontakt-wartosc">
                  ul. Aleksandra Ostrowskiego 3
                  <br />
                  Wrocław Grabiszyn
                </span>
              </div>
            </li>

            <li className="kontakt-item">
              <div className="kontakt-ikona">📞</div>
              <div className="kontakt-dane">
                <span className="kontakt-label">Telefon</span>
                <span className="kontakt-wartosc">
                  <a href="tel:+48505912389" style={{ color: 'inherit', textDecoration: 'none' }}>
                    505 912 389
                  </a>
                  <br />
                  <a href="tel:+48793790711" style={{ color: 'inherit', textDecoration: 'none' }}>
                    793 790 711
                  </a>
                </span>
              </div>
            </li>

            <li className="kontakt-item">
              <div className="kontakt-ikona">📸</div>
              <div className="kontakt-dane">
                <span className="kontakt-label">Instagram</span>
                <span className="kontakt-wartosc">@szkolaplywania.solenswim</span>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <p className="social-label">Obserwuj nas</p>
          <div className="social-lista">
            {/* Facebook */}
            <a
              className="social-btn"
              href={site.social.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Solen Swim na Facebooku"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              className="social-btn"
              href={site.social.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Solen Swim na Instagramie"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="#FFF9F6" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="#FFF9F6" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" fill="#FFF9F6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* ===== MAPA ===== */}
      <iframe
        className="mapa-embed"
        src="https://www.google.com/maps?q=Szko%C5%82a+P%C5%82ywania+Solen+Swim,+ul.+Aleksandra+Ostrowskiego+3,+Wroc%C5%82aw&output=embed"
        title="Lokalizacja Solen Swim — ul. Ostrowskiego 3, Wrocław Grabiszyn"
        loading="lazy"
      ></iframe>
    </PageShell>
  );
}
