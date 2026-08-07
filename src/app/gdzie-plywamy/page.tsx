import React from 'react';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import './gdzie-plywamy.css';

const title = 'Basen dla dzieci Grabiszyn Wrocław — weekendy | Solen Swim';
const description =
  'Basen dla dzieci na Grabiszynie we Wrocławiu — zajęcia w weekendy. 2 tory po 12,5 m, głębokość 0,9–1,35 m, podgrzewana woda i bezpłatny parking.';
const path = '/gdzie-plywamy/';
const breadcrumbs = [
  { name: 'Start', href: '/' },
  { name: 'Gdzie pływamy', href: '/gdzie-plywamy/' },
];

export const metadata = buildMetadata({ title, description, path });

export default function Page() {
  return (
    <PageShell pageType="location" breadcrumbs={breadcrumbs}>
      {/* HERO */}
      <div className="gp-hero">
        <span className="gp-eyebrow">Gdzie pływamy</span>
        <h1 className="gp-title">
          Basen dla dzieci
          <br />
          na <span>Grabiszynie</span>
          <span className="gp-title-sub">Znajdź nas we Wrocławiu — pływamy w każdy weekend</span>
        </h1>
        <span className="gp-hero-adres">
          📍 {site.address.street}, {site.address.postal} {site.address.city}
        </span>
      </div>

      {/* MOZAIKA ZDJEC */}
      <div className="gp-mozaika">
        <div className="gp-foto">
          <img
            src="/assets/img-9c79488ad9a3.webp"
            alt="Basen Solen Swim Wrocław"
            width="800"
            height="535"
            loading="lazy"
          />
        </div>
        <div className="gp-foto">
          <img
            src="/assets/img-f9a61ca66c17.webp"
            alt="Basen kryty ul. Ostrowskiego Wrocław"
            width="800"
            height="535"
            loading="lazy"
          />
        </div>
        <div className="gp-foto">
          <img
            src="/assets/img-4b72bebcee47.webp"
            alt="Zajęcia pływania dla dzieci Wrocław"
            width="800"
            height="464"
            loading="lazy"
          />
        </div>
      </div>

      {/* MAIN */}
      <div className="gp-main">
        <div className="gp-grid">
          {/* INFO */}
          <div>
            <span className="gp-sekcja-eyebrow">O obiekcie</span>
            <h2 className="gp-sekcja-title">
              Basen stworzony
              <br />
              dla dzieci
            </h2>
            <div className="gp-info-lista">
              <div className="gp-info-item">
                <div className="gp-info-ikona">📍</div>
                <div>
                  <span className="gp-info-label">Adres</span>
                  <p className="gp-info-wartosc">{site.address.street}</p>
                  <span className="gp-info-sub">
                    {site.address.postal} {site.address.city} · dzielnica Grabiszyn
                  </span>
                </div>
              </div>
              <div className="gp-info-item">
                <div className="gp-info-ikona">🏊</div>
                <div>
                  <span className="gp-info-label">Obiekt</span>
                  <p className="gp-info-wartosc">Baseny kryte</p>
                  <span className="gp-info-sub">Woda podgrzewana · głębokość dostosowana do dzieci</span>
                </div>
              </div>
              <div className="gp-info-item">
                <div className="gp-info-ikona coral">🅿️</div>
                <div>
                  <span className="gp-info-label">Parking</span>
                  <p className="gp-info-wartosc">Bezpłatny parking</p>
                  <span className="gp-info-sub">Bezpośrednio przy obiekcie</span>
                </div>
              </div>
              <a className="gp-info-item" href="tel:+48505912389">
                <div className="gp-info-ikona coral">📞</div>
                <div>
                  <span className="gp-info-label">Kontakt</span>
                  <p className="gp-info-wartosc">505 912 389</p>
                  <span className="gp-info-sub">793 790 711</span>
                </div>
              </a>
            </div>
          </div>

          {/* DOJAZD */}
          <div>
            <span className="gp-sekcja-eyebrow">Jak dojechać</span>
            <h2 className="gp-sekcja-title">
              Dojazd
              <br />
              i orientacja
            </h2>
            <ul className="gp-dojazd-lista">
              <li className="gp-dojazd-item">
                <div className="gp-dojazd-num">🚗</div>
                <div className="gp-dojazd-tekst">
                  <p className="gp-dojazd-tytul">Samochodem</p>
                  <p className="gp-dojazd-opis">
                    Bezpłatny parking bezpośrednio przy obiekcie — w weekendowe poranki bez problemu znajdziecie
                    miejsce. Wjazd od ul. Ostrowskiego.
                  </p>
                </div>
              </li>
              <li className="gp-dojazd-item">
                <div className="gp-dojazd-num">🚌</div>
                <div className="gp-dojazd-tekst">
                  <p className="gp-dojazd-tytul">Komunikacją miejską</p>
                  <p className="gp-dojazd-opis">
                    Najbliższe przystanki to „Ostrowskiego” i „Grabiszyńska” w ciągu ul. Grabiszyńskiej — dojedziecie
                    tramwajem lub autobusem MPK Wrocław, a stamtąd czeka Was krótki spacer.
                  </p>
                  {/* TODO: właściciel — uzupełnić numery linii MPK */}
                </div>
              </li>
              <li className="gp-dojazd-item">
                <div className="gp-dojazd-num">🚲</div>
                <div className="gp-dojazd-tekst">
                  <p className="gp-dojazd-tytul">Rowerem</p>
                  <p className="gp-dojazd-opis">Dobra infrastruktura rowerowa w okolicy Grabiszyna.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* PARAMETRY BASENU */}
        <section className="gp-parametry">
          <span className="gp-sekcja-eyebrow">Nasz basen w liczbach</span>
          <h2 className="gp-sekcja-title">
            Warunki idealne
            <br />
            do nauki pływania
          </h2>
          <p className="gp-parametry-intro">
            Nasz basen na Grabiszynie został pomyślany z myślą o najmłodszych pływakach. Zajęcia prowadzimy w
            kameralnych grupach do 8 dzieci, dla maluchów od 6. miesiąca życia do 10 lat — każdy znajdzie tu swoją
            głębokość, dosłownie i w przenośni.
          </p>
          <div className="gp-param-grid">
            <div className="gp-param-karta">
              <span className="gp-param-liczba">2 × 12,5 m</span>
              <p className="gp-param-opis">
                Dwa tory po 12,5 metra — wystarczająco dużo miejsca na naukę, bez tłoku znanego z dużych pływalni.
              </p>
            </div>
            <div className="gp-param-karta">
              <span className="gp-param-liczba">0,9–1,35 m</span>
              <p className="gp-param-opis">
                Głębokość idealna do nauki — dzieci czują dno pod stopami, a rodzice mają spokojną głowę.
              </p>
            </div>
            <div className="gp-param-karta">
              <span className="gp-param-liczba">Ciepła woda</span>
              <p className="gp-param-opis">
                Woda podgrzewana do temperatury komfortowej dla dzieci — nawet niemowlęta pływają z uśmiechem.
              </p>
            </div>
            <div className="gp-param-karta">
              <span className="gp-param-liczba">Basen kryty</span>
              <p className="gp-param-opis">
                Pływamy pod dachem, więc zajęcia odbywają się przez cały rok — niezależnie od pogody za oknem.
              </p>
            </div>
          </div>
        </section>

        {/* HARMONOGRAM */}
        <div className="gp-harmonogram">
          <span className="gp-harm-eyebrow">Kiedy pływamy</span>
          <p className="gp-harm-title">Harmonogram zajęć — tylko w weekendy</p>
          <div className="gp-harm-grid">
            {site.poolHours.map((slot) => (
              <div className="gp-harm-karta" key={slot.day}>
                <span className="gp-harm-dzien">{slot.day}</span>
                <p className="gp-harm-kurs">Wszystkie kursy</p>
                <p className="gp-harm-godziny">{slot.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OKOLICE */}
        <section className="gp-okolice">
          <span className="gp-sekcja-eyebrow">Blisko Was</span>
          <h2 className="gp-sekcja-title">
            Dojeżdżają do nas rodzice
            <br />z całej okolicy
          </h2>
          <p className="gp-okolice-opis">
            Grabiszyn leży tuż przy dużych osiedlach mieszkaniowych zachodniego i południowego Wrocławia, więc dojazd
            na zajęcia zajmuje dosłownie chwilę. A ponieważ pływamy wyłącznie w weekendy, na basen bez pośpiechu
            zdążą także pracujący rodzice — sobotni lub niedzielny poranek w wodzie to świetny początek rodzinnego
            dnia.
          </p>
          <ul className="gp-okolice-chips">
            <li className="gp-chip">
              <strong>Grabiszynek</strong> — tuż obok, kilka minut spacerem
            </li>
            <li className="gp-chip">
              <strong>Gajowice</strong> — ok. 5 minut samochodem
            </li>
            <li className="gp-chip">
              <strong>Muchobór Mały</strong> — 5–10 minut samochodem
            </li>
            <li className="gp-chip">
              <strong>Oporów</strong> — 5–10 minut samochodem
            </li>
            <li className="gp-chip">
              <strong>Krzyki</strong> — ok. 10 minut samochodem
            </li>
            <li className="gp-chip">
              <strong>Popowice</strong> — ok. 10 minut samochodem
            </li>
          </ul>
        </section>

        {/* MAPA */}
        <section className="gp-mapa">
          <span className="gp-sekcja-eyebrow">Mapa dojazdu</span>
          <h2 className="gp-sekcja-title">Zobacz nas na mapie</h2>
          <div className="gp-mapa-ramka">
            <iframe
              src={site.maps.embedUrl}
              title={`Mapa dojazdu — Solen Swim, ${site.address.street}, ${site.address.postal} ${site.address.city}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="gp-mapa-btns">
            <a className="gp-btn gp-btn-coral" href={site.maps.directionsUrl} target="_blank" rel="noopener">
              Wyznacz trasę
            </a>
            <a className="gp-btn gp-btn-outline" href={site.reviews.googleProfileUrl} target="_blank" rel="noopener">
              Zobacz wizytówkę w Google
            </a>
          </div>
          <p className="gp-mapa-nota">
            Zajęcia indywidualne prowadzimy również na drugim obiekcie przy ul. Kamiennogórskiej 16, 54-034 Wrocław.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
