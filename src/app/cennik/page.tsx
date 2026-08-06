import React from 'react';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import './cennik.css';

const title = 'Cennik zajęć pływania Wrocław | Solen Swim — od 60 zł';
const description =
  'Ceny zajęć pływania dla dzieci we Wrocławiu. Niemowlęta (6 mies.–4 lat): 60 zł/30 min. Nauka i doskonalenie (5–10 lat): 65 zł/45 min. Płatność w 3 ratach.';
const path = '/cennik/';
const breadcrumbs = [
  { name: 'Start', href: '/' },
  { name: 'Cennik', href: '/cennik/' },
];

export const metadata = buildMetadata({ title, description, path });

export default function Page() {
  return (
    <PageShell pageType="service" breadcrumbs={breadcrumbs}>
      {/* HERO */}
      <div className="cn-hero">
        <span className="cn-eyebrow">Solen Swim · Wrocław</span>
        <h1 className="cn-title">
          Cennik
          <span className="cn-title-sub">nauki pływania — Wrocław</span>
        </h1>
        <p className="cn-hero-sub">cena za jedne zajęcia · soboty i niedziele</p>
      </div>

      {/* MAIN */}
      <div className="cn-main">
        {/* KARTY */}
        <div className="cn-karty-grid">
          {/* Karta 1: niemowlęta */}
          <a className="cn-karta" href="/nauka-plywania/niemowleta-i-dzieci-do-4-lat/">
            <div className="cn-karta-top">
              <span className="cn-karta-tag">Rodzic + Dziecko</span>
              <div className="cn-karta-cena">
                <sup></sup>60<sub> zł</sub>
              </div>
              <span className="cn-karta-czas">30 minut</span>
            </div>
            <div className="cn-karta-body">
              <h2 className="cn-karta-nazwa">
                Pływanie niemowląt
                <br />
                i dzieci do lat 4
              </h2>
              <span className="cn-karta-wiek">6 msc – 4 lata</span>
              <div className="cn-karta-divider"></div>
              <span className="cn-harm-label">Harmonogram</span>
              <ul className="cn-harm-lista">
                <li>Sobota 9:00 – 15:00</li>
                <li>Niedziela 9:00 – 12:00</li>
              </ul>
              <span className="cn-karta-note">Rodzic uczestniczy razem z dzieckiem</span>
              <span className="cn-karta-note cn-karta-adres">Basen ul. Ostrowskiego 3, Grabiszyn</span>
            </div>
          </a>

          {/* Karta 2: nauka + doskonalenie (ta sama cena) */}
          <a className="cn-karta" href="/nauka-plywania/dzieci-od-podstaw/">
            <div className="cn-karta-top">
              <span className="cn-karta-tag">Od podstaw · Doskonalenie</span>
              <div className="cn-karta-cena">
                <sup></sup>65<sub> zł</sub>
              </div>
              <span className="cn-karta-czas">45 minut</span>
            </div>
            <div className="cn-karta-body">
              <h2 className="cn-karta-nazwa">
                Nauka i doskonalenie
                <br />
                pływania dla dzieci
              </h2>
              <span className="cn-karta-wiek">5 – 10 lat</span>
              <div className="cn-karta-divider"></div>
              <span className="cn-harm-label">Harmonogram</span>
              <ul className="cn-harm-lista">
                <li>Sobota 9:00 – 15:00</li>
                <li>Niedziela 9:00 – 12:00</li>
              </ul>
              <span className="cn-karta-note">Małe grupy — max 8 dzieci</span>
              <span className="cn-karta-note cn-karta-adres">Basen ul. Ostrowskiego 3, Grabiszyn</span>
            </div>
          </a>

          {/* Karta 3: indywidualnie */}
          <a className="cn-karta" href="/nauka-plywania/indywidualnie/">
            <div className="cn-karta-top">
              <span className="cn-karta-tag">Indywidualnie</span>
              <div className="cn-karta-cena">
                <sup>od</sup>180<sub> zł</sub>
              </div>
              <span className="cn-karta-czas">45 minut</span>
            </div>
            <div className="cn-karta-body">
              <h2 className="cn-karta-nazwa">
                Zajęcia
                <br />
                indywidualne
              </h2>
              <span className="cn-karta-wiek">dzieci i dorośli</span>
              <div className="cn-karta-divider"></div>
              <span className="cn-harm-label">Warianty</span>
              <ul className="cn-harm-lista">
                <li>1 osoba — 180 zł</li>
                <li>2 osoby — 250 zł (125 / os.)</li>
                <li>3 osoby — 300 zł (100 / os.)</li>
              </ul>
              <span className="cn-karta-note cn-karta-adres">Basen ul. Kamiennogórska 16</span>
            </div>
          </a>
        </div>

        {/* PŁATNOŚĆ + INFO */}
        <div className="cn-dolna">
          <div className="cn-platnosc">
            <span className="cn-platnosc-eyebrow">Płatność za zajęcia</span>
            <h2 className="cn-platnosc-title">Karnet semestralny</h2>
            <p className="cn-platnosc-tekst">
              Należy wykupić karnet za cały kurs. Płatność odbywa się w 3 ratach za semestr — szczegóły ustalamy
              telefonicznie przy zapisie.
            </p>
            <div className="cn-konto">
              <span className="cn-konto-label">Numer konta bankowego</span>
              <p className="cn-konto-numer">{site.bankAccount}</p>
            </div>
          </div>

          <div className="cn-info">
            <div>
              <span className="cn-info-eyebrow">Dlaczego warto</span>
              <h2 className="cn-info-title">Co jest wliczone w cenę?</h2>
            </div>
            <ul className="cn-info-lista">
              <li>Opieka doświadczonego instruktora przez cały czas zajęć</li>
              <li>Kameralna grupa — maksymalnie 8 dzieci</li>
              <li>Korzystanie z basenu krytego z podgrzewaną wodą</li>
              <li>Indywidualne podejście do każdego dziecka</li>
              <li>Bezpłatny parking przy obiekcie</li>
            </ul>
          </div>
        </div>

        {/* LOKALIZACJA */}
        <div className="cn-lokalizacja">
          <span className="cn-lok-ikona">📍</span>
          <div className="cn-lok-tekst">
            <p className="cn-lok-tytul">ul. Aleksandra Ostrowskiego 3, Wrocław Grabiszyn</p>
            <p className="cn-lok-opis">
              Baseny kryte · bezpłatny parking · zapisy telefonicznie (505 912 389 · 793 790 711) lub online
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
