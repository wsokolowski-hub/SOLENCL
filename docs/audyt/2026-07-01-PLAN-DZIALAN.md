# Plan działań SEO — Solen Swim

**Data:** 1.07.2026 · Raport źródłowy: `2026-07-01-RAPORT.md` · Wynik startowy: **67/100**
**Cel:** top Google Wrocław dla weekendowej nauki pływania dzieci 6 mies.–10 lat (Grabiszyn)

Priorytety: 🔴 Krytyczny (natychmiast) · 🟠 Wysoki (≤1 tydzień) · 🟡 Średni (≤1 miesiąc) · ⚪ Niski (backlog)

---

## FAZA 1 — Krytyczne + quick wins (1 dzień pracy)

| # | Zadanie | Pliki | Wysiłek |
|---|---|---|---|
| 1.1 🔴 | Usunąć `aggregateRating` ze schema (do czasu wdrożenia widocznych recenzji — pkt 2.1) | `SchemaOrg.astro` | 15 min |
| 1.2 🔴 | Dodać „weekendy (soboty i niedziele)" do title/description home + hub nauki pływania | `index.astro`, `nauka-plywania/index.astro` | 15 min |
| 1.3 🔴 | Przepisać H1 na frazowe na 8 stronach (emocjonalne hasło → podtytuł) wg tabeli w raporcie | wszystkie strony | 1–2 h |
| 1.4 🔴 | Karty kursów na home → klikalne linki z anchorami frazowymi | `index.astro` | 30 min |
| 1.5 🔴 | Kompresja `logo.png` (404→<30 KB) i `logo-cropped.webp` (144→<15 KB) | `public/assets/` | 30 min |
| 1.6 🟠 | Dedykowany og-image 1200×630 JPG + og:image:width/height/alt | `public/assets/`, `SEO.astro` | 45 min |
| 1.7 🟠 | Naprawić favicon: favicon.ico + PNG 32px + apple-touch-icon.png 180px + poprawny `type` | `public/`, layout | 30 min |
| 1.8 🟠 | Pełny adres z kodem 54-411 na /kontakt/ i /gdzie-plywamy/ (render z `site.address`) | `kontakt.astro`, `gdzie-plywamy.astro` | 20 min |
| 1.9 🟠 | Martwe ikony social na home → linki | `index.astro` | 10 min |
| 1.10 🟠 | `googleProfileUrl` do `sameAs` + `hasMap` w schema | `SchemaOrg.astro` | 15 min |

## FAZA 2 — Local SEO + treść (≤1 tydzień)

| # | Zadanie | Wysiłek |
|---|---|---|
| 2.1 🔴 | **Opinie crawlowalne:** 3–5 realnych opinii Google jako statyczny HTML nad widgetem Featurable + widoczny tekst „4,9/5 · 21 opinii w Google" + CTA „Wystaw opinię" (jest gotowy `googleWriteReviewUrl`) | 2 h |
| 2.2 🔴 | **Sekcja dzielnic** na /gdzie-plywamy/: „Skąd dojeżdżają rodzice" — Grabiszynek, Oporów, Gajowice, Muchobór, Krzyki, Popowice z czasem dojazdu | 1,5 h |
| 2.3 🟠 | Konkretny dojazd: numery tramwajów/autobusów, przystanek, czas dojścia + parametry basenu (2 tory 12,5 m, gł. 0,9–1,35 m, temperatura) w widocznej treści | 1 h |
| 2.4 🟠 | Mapa (embed po Place ID) + „Wyznacz trasę" + link do wizytówki na /kontakt/ i /gdzie-plywamy/ | 1 h |
| 2.5 🟠 | **E-E-A-T:** sekcja „Poznaj instruktorkę" na /o-nas/ — Kamila Falkowska, zdjęcie, certyfikaty, doświadczenie (❗ potrzebne materiały od właścicielki) | 1,5 h |
| 2.6 🟠 | Rozbudowa cienkich podstron kursów do 500–700 słów (metodyka, efekty semestru, korzyści, akapit lokalny, mini-FAQ) | 4 h |
| 2.7 🟠 | Blok „Zobacz też" (kursy powiązane + cennik + gdzie pływamy) na podstronach + widoczne breadcrumbs | 2 h |
| 2.8 🟡 | Kamiennogórska 16 jako `address2` w site.ts (z kodem 54-034), render z configu | 30 min |
| 2.9 🟡 | Ujednolicić nazwę firmy 1:1 z GBP; skrócić 2 tytuły >60 zn. i 7 opisów >160 zn. | 1 h |

## FAZA 3 — Schema + wydajność (≤1 miesiąc)

| # | Zadanie | Wysiłek |
|---|---|---|
| 3.1 🟠 | `Course` + `CourseInstance` per kurs (startDate 2026-09-05, endDate 2027-01-17, offers) — szansa na Course rich results | 2 h |
| 3.2 🟠 | `Service` schema na 4 podstronach + Offer z url/availability + `priceRange: "60–250 zł"` + oferta indywidualna w OfferCatalog | 2 h |
| 3.3 🟠 | `width`/`height` na wszystkich `<img>` + `loading="lazy"` pod zgięciem + `min-height` na kontenerze Featurable | 1,5 h |
| 3.4 🟡 | Migracja obrazów na `astro:assets` `<Picture>` (srcset + AVIF) lub ręczna kompresja wszystkich img-*.jpg → WebP | 3 h |
| 3.5 🟡 | Self-hosting fontów (woff2 + preload) zamiast Google Fonts | 1,5 h |
| 3.6 🟡 | `llms.txt` (esencja: oferta, wiek, ceny, grafik weekendowy, adres, telefony) | 30 min |
| 3.7 🟡 | 404: noindex + bez canonical; sitemap z lastmod; przekierowanie www→apex (Cloudflare rule); cache assets bez immutable | 1,5 h |
| 3.8 ⚪ | CSP header; `Person` schema (founder); graf `@graph` | 2 h |

## FAZA 4 — Off-site + treść długofalowa (ciągłe)

| # | Zadanie |
|---|---|
| 4.1 🟠 | **GBP:** kategoria „Szkoła pływania", usługi z cenami 1:1, przycisk rezerwacji → /zapisy/, godziny = zajęcia (sob 9–15, nd 9–12), posty (start semestru 5.09!), Q&A z FAQ, regularne zdjęcia |
| 4.2 🟠 | Landing sezonowy: „Zapisy na semestr wrzesień 2026" — treść pod frazę, gotowa przed sierpniem (szczyt wyszukiwań: sierpień–wrzesień!) |
| 4.3 🟡 | Katalogi NAP: Bing Places, Apple Business Connect, Panorama Firm, PKT.pl, Aleo, wroclaw.pl, tuwroclaw, CzasDzieci.pl, ActiveNow, OSM |
| 4.4 🟡 | Blog/poradnik (2 wpisy/mies.): „Od ilu miesięcy niemowlę na basen?", „Co zabrać na basen dla niemowlaka — lista", „Jak przygotować dziecko do pierwszych zajęć", „Nauka pływania a rozwój dziecka" |
| 4.5 🟡 | FAQ: +6 pytań (co zabrać dla niemowlaka, badania, odrabianie zajęć, pielucha do wody, doskonalenie — wymagania, terminy zapisów) |
| 4.6 ⚪ | Google Search Console + Bing Webmaster: weryfikacja, submit sitemap, monitoring pozycji |

---

## Szacowany wpływ

| Faza | Wynik po wdrożeniu (est.) |
|---|---|
| Start | 67/100 |
| Po Fazie 1 | ~74 |
| Po Fazie 2 | ~82 |
| Po Fazie 3 | ~89 |
| Faza 4 | pozycje/map pack rosną z czasem (3–6 mies.) |

**Kalendarz krytyczny:** szczyt wyszukiwań „nauka pływania dzieci" to **sierpień–wrzesień** (zapisy na semestr). Fazy 1–2 powinny być wdrożone najpóźniej do końca lipca 2026.

## Checkpoint / powrót
- Stan przed zmianami: `git checkout checkpoint/v1.1-stable-2026-07-01` (commit `a58e6cc`)
- Poprzedni checkpoint: `checkpoint/v1.0-pre-nauka`
