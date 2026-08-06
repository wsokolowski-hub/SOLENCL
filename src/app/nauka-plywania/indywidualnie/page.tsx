import React from 'react';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import './indywidualnie.css';

const title = 'Indywidualna nauka pływania Wrocław | Solen Swim';
const description =
  'Indywidualne lekcje pływania we Wrocławiu — dzieci i dorośli. 1 na 1 z instruktorem 180 zł, 2 os. 250 zł, 3 os. 300 zł. Basen ul. Kamiennogórska 16.';
const path = '/nauka-plywania/indywidualnie/';

export const metadata = buildMetadata({ title, description, path });

const breadcrumbs = [
  { name: 'Start', href: '/' },
  { name: 'Nauka pływania', href: '/nauka-plywania/' },
  { name: 'Indywidualnie', href: '/nauka-plywania/indywidualnie/' },
];

const course = {
  name: 'Indywidualna nauka pływania — Wrocław',
  description:
    'Indywidualne lekcje pływania dla dzieci i dorosłych — 1, 2 lub 3 osoby z instruktorem, basen ul. Kamiennogórska 16.',
  price: '180',
  url: '/nauka-plywania/indywidualnie/',
  audience: 'Dzieci i dorośli',
};

const warianty = [
  {
    name: '1 osoba',
    price: '180',
    perPerson: null as string | null,
    badge: 'Najpopularniejsze' as string | null,
    points: [
      '1 na 1 z instruktorem',
      'Najszybsze postępy',
      'Pełna elastyczność grafiku',
      'Idealne na start lub szlif techniki',
    ],
  },
  {
    name: '2 osoby',
    price: '250',
    perPerson: '125 zł / osoba' as string | null,
    badge: null as string | null,
    points: [
      'Z partnerem, dzieckiem, rodzeństwem',
      'Niższy koszt na osobę',
      'Wzajemna motywacja',
      'Ten sam poziom zaawansowania',
    ],
  },
  {
    name: '3 osoby',
    price: '300',
    perPerson: '100 zł / osoba' as string | null,
    badge: null as string | null,
    points: [
      'Mała grupa znajomych',
      'Najlepszy koszt na osobę',
      'Ten sam poziom zaawansowania',
      '45 minut zajęć w wodzie',
    ],
  },
];

export default function Page() {
  return (
    <PageShell pageType="service" breadcrumbs={breadcrumbs} course={course}>
      <section className="npg-hero">
        <span className="npg-eyebrow">Indywidualnie · 1, 2 lub 3 osoby</span>
        <h1 className="npg-h1">
          Indywidualna nauka pływania
          <br />
          <span>— Wrocław</span>
        </h1>
        <p className="npg-slogan">Zajęcia w pełni dopasowane do Ciebie</p>
        <p className="npg-lead">
          Indywidualne lekcje pływania dla <strong>dzieci i dorosłych</strong> — 100% uwagi instruktora, elastyczny
          grafik, najszybsze postępy. Możesz trenować sam, w parze lub w trójce — koszt rozkłada się wtedy na osoby.
        </p>
        <div className="npg-hero-cta">
          <a href={`tel:${site.phone}`} className="npg-btn-primary">
            Umów lekcję — {site.phoneHuman}
          </a>
          <a href="#cennik" className="npg-btn-ghost">
            Zobacz ceny ↓
          </a>
        </div>
      </section>

      <section id="cennik" className="ind-cennik">
        <span className="npg-section-eyebrow">Cennik</span>
        <h2 className="npg-section-title">Trzy warianty — wybierz swój</h2>

        <div className="ind-grid">
          {warianty.map((w) => (
            <div className={`ind-karta${w.badge ? ' ind-karta-highlight' : ''}`} key={w.name}>
              {w.badge && <span className="ind-karta-badge">{w.badge}</span>}
              <h3 className="ind-karta-name">{w.name}</h3>
              <div className="ind-karta-price">
                <span className="ind-karta-amount">{w.price}</span>
                <span className="ind-karta-unit">zł / 45 min</span>
              </div>
              {w.perPerson && <p className="ind-karta-perosoba">{w.perPerson}</p>}
              <ul className="ind-karta-points">
                {w.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ind-info">
          <div className="ind-info-icon" aria-hidden="true">
            📍
          </div>
          <div className="ind-info-text">
            <strong>Basen: ul. Kamiennogórska 16, 54-034 Wrocław</strong>
            Lekcje indywidualne odbywają się na innym obiekcie niż zajęcia grupowe. Dokładny termin ustalamy
            telefonicznie.
          </div>
        </div>
      </section>

      <section className="npg-features">
        <span className="npg-section-eyebrow">Dla kogo</span>
        <h2 className="npg-section-title">Komu polecamy zajęcia indywidualne</h2>
        <div className="npg-features-grid">
          <div className="npg-feature">
            <div className="npg-feature-icon" aria-hidden="true">
              🌊
            </div>
            <h3>Dorośli od zera</h3>
            <p>Nigdy nie pływałeś — chcesz spokojnie i bez świadków przepracować podstawy w swoim tempie.</p>
          </div>
          <div className="npg-feature">
            <div className="npg-feature-icon" aria-hidden="true">
              😌
            </div>
            <h3>Z lękiem przed wodą</h3>
            <p>
              Indywidualne tempo, pełna kontrola nad sytuacją, instruktor w zasięgu ręki — komfort dla osób z
              dyskomfortem w wodzie.
            </p>
          </div>
          <div className="npg-feature">
            <div className="npg-feature-icon" aria-hidden="true">
              ⚡
            </div>
            <h3>Szlif techniki</h3>
            <p>Umiesz pływać, ale chcesz konkretnie poprawić oddech, nawroty albo doszlifować jeden styl.</p>
          </div>
          <div className="npg-feature">
            <div className="npg-feature-icon" aria-hidden="true">
              📅
            </div>
            <h3>Elastyczny grafik</h3>
            <p>Praca zmianowa, częste wyjazdy, plan ze szkoły dziecka — umawiamy terminy na bieżąco albo na stałe.</p>
          </div>
        </div>
      </section>

      <section className="npg-steps">
        <span className="npg-section-eyebrow">Jak to działa</span>
        <h2 className="npg-section-title">Krok po kroku</h2>
        <ol className="npg-steps-list">
          <li>
            <span className="npg-step-num">1</span>
            <div>
              <h3>Rozmowa telefoniczna</h3>
              <p>
                Dzwonisz pod <a href={`tel:${site.phone}`}>{site.phoneHuman}</a>. Rozmawiamy 5 minut o poziomie,
                celach i ilu osobach (1/2/3). Proponujemy wstępny termin.
              </p>
            </div>
          </li>
          <li>
            <span className="npg-step-num">2</span>
            <div>
              <h3>Pierwsze zajęcia</h3>
              <p>
                Spotykamy się na basenie przy <strong>ul. Kamiennogórskiej 16</strong>. Instruktor sprawdza poziom,
                dobiera ćwiczenia i ustala plan.
              </p>
            </div>
          </li>
          <li>
            <span className="npg-step-num">3</span>
            <div>
              <h3>Stały rytm lub pakiet</h3>
              <p>Umawiasz stałe terminy lub kupujesz pakiet kilku lekcji — jak Ci wygodniej. Płatność z góry za pakiet.</p>
            </div>
          </li>
          <li>
            <span className="npg-step-num">4</span>
            <div>
              <h3>Postępy</h3>
              <p>Po kilku zajęciach widzisz różnicę. Robimy okresową ocenę i ustalamy kolejne cele.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="npg-minifaq">
        <span className="npg-section-eyebrow">Częste pytania</span>
        <h2 className="npg-section-title">Najczęściej pytacie</h2>
        <div className="npg-minifaq-list">
          <details className="npg-minifaq-item">
            <summary className="npg-minifaq-q">Czy dorośli też mogą się zapisać?</summary>
            <p className="npg-minifaq-a">
              Tak — lekcje indywidualne prowadzimy zarówno dla dzieci, jak i dla dorosłych. Uczymy od zera, pomagamy
              oswoić lęk przed wodą i szlifujemy technikę u pływających.
            </p>
          </details>
          <details className="npg-minifaq-item">
            <summary className="npg-minifaq-q">Ile lekcji potrzeba, żeby nauczyć się pływać?</summary>
            <p className="npg-minifaq-a">
              To zależy od punktu startu i regularności — przy zajęciach 1 na 1 postępy są najszybsze, a plan
              ustalamy indywidualnie po pierwszej lekcji z testem poziomu.
            </p>
          </details>
          <details className="npg-minifaq-item">
            <summary className="npg-minifaq-q">Czy można ćwiczyć we dwoje lub troje?</summary>
            <p className="npg-minifaq-a">
              Tak — wariant dla 2 osób kosztuje 250 zł (125 zł/os.), a dla 3 osób 300 zł (100 zł/os.). Ważne, żeby
              osoby w grupie miały zbliżony poziom zaawansowania.
            </p>
          </details>
        </div>
      </section>

      <section className="npg-related">
        <span className="npg-section-eyebrow">Zobacz też</span>
        <h2 className="npg-section-title">Może Cię zainteresować</h2>
        <ul className="npg-related-list">
          <li>
            <a href="/nauka-plywania/dzieci-od-podstaw/" className="npg-related-link">
              Nauka pływania dla dzieci od podstaw →
            </a>
          </li>
          <li>
            <a href="/nauka-plywania/doskonalenie/" className="npg-related-link">
              Doskonalenie pływania dla dzieci →
            </a>
          </li>
          <li>
            <a href="/cennik/" className="npg-related-link">
              Cennik zajęć →
            </a>
          </li>
          <li>
            <a href="/gdzie-plywamy/" className="npg-related-link">
              Gdzie pływamy →
            </a>
          </li>
        </ul>
      </section>

      <section className="npg-cta-band">
        <h2>Umów pierwszą lekcję indywidualną</h2>
        <p>Zadzwoń — najszybciej ustalimy termin i wariant dopasowany do Ciebie lub dziecka.</p>
        <div className="npg-cta-buttons">
          <a href={`tel:${site.phone}`} className="npg-btn-primary">
            {site.phoneHuman}
          </a>
          <a href="/zapisy/" className="npg-btn-ghost">
            Formularz zapisu
          </a>
        </div>
      </section>
    </PageShell>
  );
}
