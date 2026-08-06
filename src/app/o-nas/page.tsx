import React from 'react';
import { buildMetadata } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import './o-nas.css';

const title = 'Szkoła pływania dla dzieci Wrocław Grabiszyn | Solen Swim';
const description =
  'Poznaj Solen Swim i założycielkę Kamilę Falkowską. Weekendowe zajęcia dla dzieci 6 mies.–10 lat, grupy max 8 osób. Wrocław Grabiszyn, ul. Ostrowskiego 3.';
const path = '/o-nas/';
const breadcrumbs = [
  { name: 'Start', href: '/' },
  { name: 'O nas', href: '/o-nas/' },
];

export const metadata = buildMetadata({ title, description, path });

export default function Page() {
  return (
    <PageShell pageType="about" breadcrumbs={breadcrumbs}>
      {/* HERO */}
      <div className="onas-hero">
        <span className="onas-eyebrow">Solen Swim · Wrocław</span>
        <h1 className="onas-title">
          Szkoła pływania dla dzieci we&nbsp;Wrocławiu — poznaj <span>Solen Swim</span>
        </h1>
        <p className="onas-podtytul">
          Z nami każdy maluch rozbłyśnie jak <span>słońce</span>
        </p>
        <p className="onas-hero-sub">
          Szkoła pływania powstała z pasji do wody i pracy z dziećmi. Uczymy od 6. miesiąca życia do 10. roku —
          bezpiecznie, z uśmiechem i bez pośpiechu, w weekendy na basenie przy ul. Ostrowskiego 3 na wrocławskim
          Grabiszynie.
        </p>
      </div>

      {/* CYTAT */}
      <div className="onas-cytat">
        <p className="onas-cytat-tekst">
          „Dziecko uczy się najlepiej, gdy czuje się <span>bezpiecznie i szczęśliwie.</span> Dlatego na zajęciach nie
          ma pośpiechu ani presji — jest radość, ruch i wsparcie."
        </p>
        <p className="onas-cytat-autor">Filozofia Solen Swim</p>
      </div>

      {/* GŁÓWNA TREŚĆ */}
      <div className="onas-main">
        <div className="onas-grid">
          {/* LEWA */}
          <div>
            <span className="onas-sekcja-eyebrow">Kim jesteśmy</span>
            <h2 className="onas-sekcja-title">Uczymy pływać z uśmiechem</h2>
            <p className="onas-tekst">
              W Solen Swim wierzymy, że nauka pływania to coś więcej niż technika — to radość, zabawa i zaufanie.
              Tworzymy przyjazne zajęcia dla dzieci już od 6. miesiąca życia, w kameralnej atmosferze i pod okiem
              doświadczonych instruktorów.
            </p>
            <p className="onas-tekst">
              Naszym celem jest, by każde dziecko czuło się bezpiecznie i pokochało wodę od pierwszego kontaktu — od
              pierwszych plusków po pewne ruchy w wodzie.
            </p>
            <p className="onas-tekst">
              Nasza metodyka opiera się na nauce przez zabawę: ćwiczenia mają formę gier i zadań, dzięki którym
              dzieci oswajają się z wodą naturalnie, krok po kroku. Bezpieczeństwo jest zawsze na pierwszym miejscu —
              kameralne grupy do 8 dzieci pozwalają instruktorowi widzieć każdego malucha przez całe zajęcia i
              reagować na jego potrzeby.
            </p>
            <div className="onas-divider"></div>
            <p className="onas-tekst">
              Każde dziecko uczy się we własnym tempie. Zajęcia odbywają się w weekendy — w soboty i niedziele
              przedpołudniami — więc łatwo wpisują się w rodzinny plan tygodnia. Prowadzimy też lekcje indywidualne,
              również dla dorosłych, na basenie przy ul. Kamiennogórskiej 16. Wychodzimy z basenu z uśmiechem — i to
              jest dla nas najważniejsze.
            </p>
          </div>

          {/* PRAWA */}
          <div>
            <span className="onas-sekcja-eyebrow">Dlaczego Solen Swim?</span>
            <h2 className="onas-sekcja-title">Co nas wyróżnia</h2>
            <ul className="onas-lista">
              <li>
                <span className="onas-lista-dot"></span>Doświadczeni instruktorzy z pasją do nauki dzieci
              </li>
              <li>
                <span className="onas-lista-dot"></span>Małe, kameralne grupy — max. 8 dzieci
              </li>
              <li>
                <span className="onas-lista-dot"></span>Basen dostosowany do najmłodszych — odpowiednia temperatura i
                głębokość
              </li>
              <li>
                <span className="onas-lista-dot"></span>Rodzinna, przyjazna atmosfera bez presji i pośpiechu
              </li>
              <li>
                <span className="onas-lista-dot"></span>Zajęcia połączone z zabawą — nauka przez ruch i radość
              </li>
              <li>
                <span className="onas-lista-dot"></span>Indywidualne podejście do każdego dziecka
              </li>
            </ul>
          </div>
        </div>

        {/* ZAŁOŻYCIELKA */}
        <div className="onas-zalozycielka">
          <img
            className="onas-zal-foto"
            src="/assets/kamila-falkowska.webp"
            alt="Kamila Falkowska — założycielka i instruktorka Solen Swim — w wodzie z grupą dzieci na basenie przy ul. Ostrowskiego 3 we Wrocławiu"
            width="720"
            height="808"
            loading="lazy"
            decoding="async"
          />
          {/* TODO: właścicielka — dodać listę konkretnych certyfikatów/uprawnień (np. instruktor pływania, ratownik) */}
          <div className="onas-zal-tresc">
            <span className="onas-sekcja-eyebrow">Poznaj założycielkę</span>
            <h2 className="onas-sekcja-title">Kamila Falkowska</h2>
            <p className="onas-zal-rola">Założycielka i instruktorka Solen Swim</p>
            <p className="onas-tekst">
              Solen Swim to autorska szkoła pływania Kamili Falkowskiej — instruktorki, która na basenie czuje się
              jak w domu i tę radość z wody przekazuje dzieciom. To ona zbudowała filozofię szkoły: uczyć przez
              zabawę, bez presji i w małych grupach, w których każde dziecko ma czas i uwagę instruktora.
            </p>
            <p className="onas-tekst">
              Na zajęciach Kamila i zespół instruktorów stawiają na indywidualne podejście — od pierwszego oswajania
              niemowlaka z wodą po szlifowanie techniki u starszych dzieci. Chcesz porozmawiać o swoim dziecku przed
              zapisem?{' '}
              <a href="/kontakt/" className="onas-zal-link">
                Zadzwoń — chętnie doradzimy
              </a>
              .
            </p>
          </div>
        </div>

        {/* KARTY WARTOŚCI */}
        <div className="onas-wartosci">
          <div className="onas-karta">
            <span className="onas-karta-ikona">🏊</span>
            <p className="onas-karta-tytul">Od 6. miesiąca życia</p>
            <p className="onas-karta-opis">Przyjmujemy najmłodszych — zajęcia niemowlęce z rodzicem</p>
          </div>
          <div className="onas-karta">
            <span className="onas-karta-ikona">👨‍🏫</span>
            <p className="onas-karta-tytul">Doświadczeni instruktorzy</p>
            <p className="onas-karta-opis">Certyfikowani specjaliści z pasją do pracy z dziećmi</p>
          </div>
          <div className="onas-karta">
            <span className="onas-karta-ikona">👪</span>
            <p className="onas-karta-tytul">Małe grupy</p>
            <p className="onas-karta-opis">Kameralna atmosfera, max. 8 dzieci w grupie</p>
          </div>
          <div className="onas-karta">
            <span className="onas-karta-ikona">☀️</span>
            <p className="onas-karta-tytul">Nauka przez zabawę</p>
            <p className="onas-karta-opis">Każde dziecko uczy się we własnym tempie i z uśmiechem</p>
          </div>
        </div>

        {/* BANNER DOLNY */}
        <div className="onas-banner">
          <div className="onas-banner-tekst">
            <span className="onas-banner-eyebrow">Dołącz do nas</span>
            <p className="onas-banner-title">Zacznij pływać z Solen Swim!</p>
            <p className="onas-banner-sub">Wrocław · ul. Ostrowskiego 3 · Grabiszyn · bezpłatny parking</p>
          </div>
          <span className="onas-banner-badge">swim with the sun</span>
        </div>
      </div>
    </PageShell>
  );
}
