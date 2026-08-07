import React from 'react';
import { buildMetadata } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import './faq.css';

const title = 'FAQ — Często zadawane pytania | Solen Swim Wrocław';
const description =
  'Odpowiedzi na pytania o zajęcia pływania dla dzieci we Wrocławiu. Wiek, bezpieczeństwo, co zabrać, ceny, zapisy. Szkoła pływania Solen Swim — Grabiszyn.';
const path = '/faq/';

export const metadata = buildMetadata({ title, description, path });

const faq = [
  {
    q: 'Jak wyglądają pierwsze zajęcia?',
    a: 'Pierwsze spotkanie to oswojenie z wodą w spokojnej, zabawowej formie. Dzieci nigdy nie są zmuszane — zaufanie i radość rozwijają się stopniowo, w swoim własnym tempie.',
  },
  {
    q: 'Ile dzieci jest w jednej grupie?',
    a: 'Zajęcia odbywają się w kameralnych grupach do 8 dzieci, co pozwala instruktorowi poświęcić indywidualną uwagę każdemu maluchowi.',
  },
  {
    q: 'Czy rodzice biorą udział w zajęciach?',
    a: 'Tak — rodzice wchodzą do wody razem z dziećmi w wieku od 6 miesięcy do 4 lat. Starsze dzieci w wieku 5–10 lat ćwiczą samodzielnie pod okiem instruktora.',
  },
  {
    q: 'Od jakiego wieku dziecko może rozpocząć naukę pływania?',
    a: 'Przyjmujemy dzieci już od 6. miesiąca życia. Najmłodsze maluchy uczestniczą w zajęciach razem z rodzicem w formie zabawy w wodzie.',
  },
  {
    q: 'Jak długo trwają zajęcia?',
    a: 'Zajęcia dla niemowląt i dzieci do 4 lat trwają 30 minut. Dla dzieci w wieku 5–10 lat zajęcia trwają 45 minut.',
  },
  {
    q: 'Ile kosztują zajęcia pływania?',
    a: 'Zajęcia dla niemowląt i dzieci do 4 lat kosztują 60 zł za 30 minut (rodzic + dziecko). Nauka i doskonalenie pływania dla dzieci w wieku 5–10 lat to 65 zł za 45 minut. Płatność odbywa się za cały semestr w 3 ratach.',
  },
  {
    q: 'Gdzie odbywają się zajęcia pływania?',
    a: 'Zajęcia odbywają się na basenie krytym przy ul. Aleksandra Ostrowskiego 3 w dzielnicy Grabiszyn we Wrocławiu. Przy obiekcie dostępny jest bezpłatny parking.',
  },
  {
    q: 'Jakie style pływania są nauczane?',
    a: 'Uczymy kraula (styl dowolny), stylu grzbietowego i żabki — program dostosowany do wieku i poziomu dziecka.',
  },
  {
    q: 'Czy pływanie niemowląt jest bezpieczne?',
    a: 'Tak, pod warunkiem prowadzenia zajęć przez wykwalifikowanych instruktorów. Głębokość basenu wynosi 0,9–1,35 m, a temperatura wody jest odpowiednio dostosowana do potrzeb najmłodszych uczestników.',
  },
  {
    q: 'Czy zajęcia odbywają się tylko w weekendy?',
    a: 'Tak — wszystkie zajęcia grupowe odbywają się w weekendy: w soboty od 9:00 do 15:00 i w niedziele od 9:00 do 12:00. To wygodne rozwiązanie dla pracujących rodziców — zajęcia nie kolidują ze szkołą ani pracą w tygodniu.',
  },
  {
    q: 'Co zabrać na basen dla niemowlaka?',
    a: 'Dla malucha: pieluchę wodoodporną (jednorazową lub wielorazową), strój kąpielowy i ręcznik. Dla rodzica: strój kąpielowy i klapki. Okularki nie są potrzebne najmłodszym — przydadzą się dopiero starszym dzieciom.',
  },
  {
    q: 'Czy dziecko musi umieć pływać, żeby zapisać się na doskonalenie?',
    a: 'Tak — doskonalenie jest przeznaczone dla dzieci, które samodzielnie utrzymują się na wodzie i przepłyną kilka metrów. Jeśli dziecko dopiero zaczyna, najlepszym wyborem będzie kurs nauki pływania od podstaw. Poziom zawsze weryfikuje instruktor na pierwszych zajęciach.',
  },
  {
    q: 'Czy można odrobić nieobecność na zajęciach?',
    a: 'Kwestie nieobecności ustalamy indywidualnie — najlepiej skontaktować się z nami telefonicznie pod numerem 505 912 389, a znajdziemy najlepsze rozwiązanie.',
  },
  {
    q: 'Czy potrzebne są badania lekarskie lub zaświadczenie?',
    a: 'Nie wymagamy zaświadczenia lekarskiego. Jeśli jednak masz wątpliwości zdrowotne dotyczące swojego dziecka, warto przed rozpoczęciem zajęć skonsultować się z pediatrą.',
  },
  {
    q: 'Od kiedy ruszają zapisy na nowy semestr?',
    a: 'Zapisy na semestr trwający od 5 września 2026 do 17 stycznia 2027 są już otwarte. Zapisać się można telefonicznie pod numerem 505 912 389 lub online przez stronę zapisów.',
  },
];

const breadcrumbs = [
  { name: 'Start', href: '/' },
  { name: 'FAQ', href: '/faq/' },
];

export default function Page() {
  return (
    <PageShell pageType="faq" breadcrumbs={breadcrumbs} faq={faq}>
      <section className="faq-hero">
        <span className="faq-eyebrow">FAQ — nauka pływania dzieci we Wrocławiu</span>
        <h1 className="faq-title">
          Masz
          <br />
          <span>pytania?</span>
        </h1>
        <p className="faq-sub">
          Zebraliśmy odpowiedzi na najczęstsze pytania rodziców o naukę pływania dzieci we Wrocławiu — wiek, ceny,
          weekendowy grafik i wyposażenie. Jeśli nie znajdziesz tego, czego szukasz — zadzwoń lub napisz, chętnie
          pomożemy.
        </p>
      </section>

      <section className="faq-list">
        {faq.map((item, i) => (
          <details className="faq-item" open={i === 0} key={item.q}>
            <summary>
              <span className="faq-q">{item.q}</span>
              <span className="faq-icon" aria-hidden="true"></span>
            </summary>
            <p className="faq-a">{item.a}</p>
          </details>
        ))}

        <div className="faq-cta">
          <p className="faq-cta-text">Nie znalazłeś odpowiedzi?</p>
          <a href="/kontakt/" className="faq-cta-btn">
            Napisz do nas
          </a>
        </div>
      </section>
    </PageShell>
  );
}
