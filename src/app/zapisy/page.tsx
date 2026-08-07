import React from 'react';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import './zapisy.css';

const title = 'Zapisy na naukę pływania Wrocław 2026/27 | Solen Swim';
const description =
  'Zapisy na naukę pływania dla dzieci we Wrocławiu — semestr od 5.09.2026. Zajęcia w weekendy na Grabiszynie. Zapisz dziecko online przez nasz system zapisowy, od 60 zł.';
const path = '/zapisy/';
const breadcrumbs = [
  { name: 'Start', href: '/' },
  { name: 'Zapisy', href: '/zapisy/' },
];

export const metadata = buildMetadata({ title, description, path });

export default function Page() {
  return (
    <PageShell pageType="service" breadcrumbs={breadcrumbs}>
      {/* HERO */}
      <div className="zap-hero">
        <span className="zap-badge">✅ Wystartowały zapisy — Jesień/Zima 26/27</span>
        <h1 className="zap-title">
          Zapisy na naukę pływania
          <br />
          <span>— Wrocław</span>
        </h1>
        <p className="zap-hero-sub">
          Trwają zapisy na semestr Jesień/Zima 26/27 (5.09.2026 – 17.01.2027) — zajęcia w weekendy na basenie przy ul.
          Ostrowskiego 3 (Grabiszyn). Zapisz dziecko wygodnie przez nasz system zapisowy online — w kilka minut. A jeśli
          masz pytania, zadzwoń, pomożemy dobrać odpowiednią grupę.
        </p>
        <div className="zap-hero-btns">
          <a href={site.onlineSignupUrl} className="zap-btn zap-btn-dark">
            💻 Zapisz dziecko online
          </a>
          <a href="tel:+48505912389" className="zap-btn zap-btn-light">
            📞 505 912 389
          </a>
        </div>
      </div>

      {/* CTA — SYSTEM ZAPISOWY */}
      <div className="zap-form" id="zapis-online">
        <div className="zap-form-inner">
          <span className="zap-sekcja-eyebrow">System zapisowy online</span>
          <h2 className="zap-form-title">
            Zapisz dziecko —<br />
            <span>w kilka minut!</span>
          </h2>
          <p className="zap-form-sub">
            Wyboru grupy, terminu i płatności dokonasz w naszym systemie zapisowym. To najwygodniejszy sposób —
            wszystko w jednym miejscu, o dowolnej porze.
          </p>

          <a href={site.onlineSignupUrl} className="zap-btn zap-btn-dark zap-btn-cta">
            💻 Przejdź do zapisów online
          </a>

          <p className="zap-form-sub" style={{ marginTop: 24 }}>
            Nie wiesz, którą grupę wybrać? Zadzwoń pod{' '}
            <a href="tel:+48505912389">505&nbsp;912&nbsp;389</a> — pomożemy dobrać ją pod względem wieku i&nbsp;poziomu.
          </p>
        </div>
      </div>

      {/* SEMESTRY */}
      <div className="zap-semestry">
        <span className="zap-sekcja-eyebrow">Harmonogram semestrów</span>
        <h2 className="zap-sekcja-title">Kiedy odbywają się zajęcia?</h2>

        <div className="zap-semestry-grid">
          <div className="zap-semestr otwarty">
            <div className="zap-semestr-ikona">🌊</div>
            <div className="zap-semestr-info">
              <span className="zap-semestr-label">Jesień/Zima 26/27</span>
              <p className="zap-semestr-nazwa">5.09.2026 – 17.01.2027</p>
              <p className="zap-semestr-daty">Zapisy otwarte</p>
            </div>
            <span className="zap-semestr-status">Otwarte!</span>
          </div>

          <div className="zap-semestr zamkniety">
            <div className="zap-semestr-ikona">🗓️</div>
            <div className="zap-semestr-info">
              <span className="zap-semestr-label">Wiosna/Lato 27</span>
              <p className="zap-semestr-nazwa">6.02.2027 – 27.06.2027</p>
              <p className="zap-semestr-daty">Zapisy wkrótce</p>
            </div>
            <span className="zap-semestr-status">Wkrótce</span>
          </div>
        </div>
      </div>

      {/* INFO + PŁATNOŚĆ */}
      <div className="zap-info">
        <div className="zap-info-inner">
          {/* KONTAKT */}
          <div>
            <span className="zap-info-eyebrow">Jak się zapisać</span>
            <h2 className="zap-info-title">Online lub z pomocą telefonu</h2>
            <p className="zap-info-tekst">
              Najwygodniej zapiszesz dziecko przez <strong>system zapisowy online</strong> — wybierzesz tam grupę,
              termin i&nbsp;dokonasz płatności. A jeśli nie wiesz, do której grupy zapisać dziecko — zadzwoń lub napisz
              SMS, pomożemy dobrać odpowiednią pod względem wieku i&nbsp;poziomu.
            </p>
            <div className="zap-tel-lista">
              {/* 505 — PIERWSZY, KLIKALNY */}
              <a className="zap-tel-item" href="tel:+48505912389" target="_blank">
                📞 505 912 389
                <span>główny</span>
              </a>

              {/* 793 — DRUGI, KLIKALNY */}
              <a className="zap-tel-item" href="tel:+48793790711" target="_blank">
                📞 793 790 711
                <span>dodatkowy</span>
              </a>
            </div>
          </div>

          {/* PŁATNOŚĆ */}
          <div className="zap-platnosc">
            <span className="zap-platnosc-eyebrow">Płatność za zajęcia</span>
            <h3 className="zap-platnosc-title">Karnet semestralny</h3>
            <p className="zap-platnosc-tekst">
              Należy wykupić karnet za cały kurs. Płatność odbywa się w 3 ratach za semestr — szczegóły płatności oraz
              umowę otrzymasz po zapisie w systemie online.
            </p>
            <div className="zap-konto">
              <span className="zap-konto-label">Numer konta bankowego</span>
              <p className="zap-konto-numer">{site.bankAccount}</p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
