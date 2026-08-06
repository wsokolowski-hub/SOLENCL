import React from 'react';
import { buildMetadata } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import './nauka.css';

const title = 'Nauka pływania Wrocław — weekendy | Solen Swim';
const description =
  'Nauka pływania we Wrocławiu (Grabiszyn) — zajęcia w weekendy. Pływanie niemowląt, nauka od podstaw, doskonalenie i lekcje indywidualne. Grupy do 8 osób.';
const path = '/nauka-plywania/';

export const metadata = buildMetadata({ title, description, path });

const breadcrumbs = [
  { name: 'Start', href: '/' },
  { name: 'Nauka pływania', href: '/nauka-plywania/' },
];

const opcje = [
  {
    href: '/nauka-plywania/niemowleta-i-dzieci-do-4-lat/',
    tag: 'Dla najmłodszych',
    nazwa: 'Pływanie niemowląt\ni dzieci do lat 4',
    wiek: '6 miesięcy – 4 lata',
    czas: '30 minut',
    cena: '60 zł',
    opis: 'Zajęcia rodzic + dziecko — oswajanie z wodą w formie zabawy. Grupy do 8 par.',
    cta: 'Pływanie niemowląt — szczegóły',
    color: 'mint',
  },
  {
    href: '/nauka-plywania/dzieci-od-podstaw/',
    tag: 'Od podstaw',
    nazwa: 'Nauka pływania dla\ndzieci od podstaw',
    wiek: '5 – 10 lat',
    czas: '45 minut',
    cena: '65 zł',
    opis: 'Dzieci samodzielnie pod okiem instruktora. Kraul, grzbiet i żabka, max 8 osób w grupie.',
    cta: 'Nauka od podstaw — szczegóły',
    color: 'coral',
  },
  {
    href: '/nauka-plywania/doskonalenie/',
    tag: 'Doskonalenie',
    nazwa: 'Doskonalenie\npływania dla dzieci',
    wiek: '5 – 10 lat',
    czas: '45 minut',
    cena: '65 zł',
    opis: 'Dla dzieci, które już pływają — szlif techniki: kraul, grzbiet, żabka.',
    cta: 'Doskonalenie pływania — szczegóły',
    color: 'salmon',
  },
  {
    href: '/nauka-plywania/indywidualnie/',
    tag: 'Indywidualnie',
    nazwa: 'Zajęcia\nindywidualne',
    wiek: 'Dzieci i dorośli',
    czas: '45 minut',
    cena: 'od 180 zł',
    opis: '1, 2 lub 3 osoby z instruktorem — 180 / 250 / 300 zł. Basen ul. Kamiennogórska 16.',
    cta: 'Lekcje indywidualne — szczegóły',
    color: 'teal',
  },
];

export default function Page() {
  return (
    <PageShell pageType="service" breadcrumbs={breadcrumbs}>
      <section className="np-hero">
        <span className="np-eyebrow">Nauka pływania</span>
        <h1 className="np-title">
          Nauka pływania we Wrocławiu
          <br />
          <span>— dla dzieci i dorosłych</span>
        </h1>
        <p className="np-sub">
          Cztery różne ścieżki — od pierwszego kontaktu z wodą po doskonalenie techniki. Zajęcia grupowe w weekendy
          (soboty i niedziele) na basenie przy ul. Ostrowskiego 3 na Grabiszynie. Każda grupa prowadzona przez
          doświadczonego instruktora.
        </p>
      </section>

      <section className="np-grid">
        {opcje.map((o) => (
          <a href={o.href} className={`np-card np-card-${o.color}`} key={o.href}>
            <span className="np-card-tag">{o.tag}</span>
            <h2
              className="np-card-nazwa"
              dangerouslySetInnerHTML={{ __html: o.nazwa.replace(/\n/g, '<br/>') }}
            />
            <ul className="np-card-meta">
              <li>
                <strong>Wiek:</strong> {o.wiek}
              </li>
              <li>
                <strong>Czas:</strong> {o.czas}
              </li>
              <li>
                <strong>Cena:</strong> {o.cena}
              </li>
            </ul>
            <p className="np-card-opis">{o.opis}</p>
            <span className="np-card-cta">{o.cta} →</span>
          </a>
        ))}
      </section>

      <section className="np-cta">
        <h2>Nie wiesz który format wybrać?</h2>
        <p>Zadzwoń — pomożemy dopasować zajęcia do wieku i poziomu Twojego dziecka.</p>
        <a href="/kontakt/" className="np-cta-btn">
          Skontaktuj się z nami
        </a>
      </section>
    </PageShell>
  );
}
