# Solen Swim — solenswim.com

Strona szkoły pływania dla dzieci (6 mies.–10 lat), Wrocław Grabiszyn, zajęcia weekendowe.
Cel: maksymalna promocja + SEO. Język strony i komunikacji: polski.

## Stack i architektura
- Next.js 15 (App Router, SSG — wszystkie trasy prerenderowane statycznie), React 19, `trailingSlash: true`.
- Strony w `src/app/<trasa>/page.tsx`; style per strona w co-located pliku CSS (np. `src/app/zapisy/zapisy.css`) importowanym w `page.tsx`. Style globalne: `src/styles/global.css` + `fonts.css` (import w `src/app/layout.tsx`).
- Centralna konfiguracja: `src/data/site.ts` (adresy, telefony, ceny, nawigacja, semestry) — dane biznesowe zmieniaj TYLKO tam.
- SEO: `src/lib/seo.ts` (`buildMetadata()` → Metadata API) + `src/components/SchemaOrg.tsx` (LocalBusiness, Course per strona kursu, FAQPage; BEZ aggregateRating — polityka Google). `src/components/PageShell.tsx` opakowuje treść: JSON-LD + breadcrumbs + `<main id="main">`.
- Komponenty klienckie (jedyne z `'use client'`): `Header.tsx` (menu mobilne, submenu), `CookieDeclaration.tsx` + komponenty animacji. Reszta to komponenty serwerowe.
- `ZapisyForm.tsx` (web3forms) NIE jest już używany — strona `/zapisy/` to landing SEO, a zapis prowadzi do zewnętrznego systemu `zapisy.solenswim.com`. Plik został w repo na wypadek powrotu do formularza.
- Sitemap: `src/app/sitemap.ts` → `/sitemap.xml` (WAŻNE: w Astro było `/sitemap-index.xml`; `robots.txt` zaktualizowany, w GSC trzeba zgłosić nowy adres).
- Nagłówki bezpieczeństwa (CSP! nowe skrypty zewn. wymagają wpisu), cache i redirecty: `next.config.mjs` (`headers()` / `redirects()`). `vercel.json` zawiera już tylko `framework: nextjs`.
- Fonty self-hosted: Comfortaa (nagłówki, godziny/harmonogramy) + Space Mono (body), `public/fonts/`.
- Brand: mint #B6DEDD, coral #FF8357, cream #FFF9F6, dark #293434.

## Deploy i hosting (WAŻNE — nie kombinować)
- PRODUKCJA: **Vercel** (projekt `solencl`). Push na `main` → Vercel auto-builduje i deployuje na solenswim.com (~1 min). Nagłówki, cache i redirecty siedzą w `next.config.mjs` (NIE w `vercel.json`).
- Domena solenswim.com: rejestracja w Wixie (NS zablokowane przez Wixa!), rekordy A/CNAME w DNS Wixa wskazują Vercel (A @ → 216.198.79.1, CNAME www → *.vercel-dns-017.com). www → apex robi Vercel.
- Legacy: Cloudflare Workers (solencl.wiktor-sokolek.workers.dev) + workflow deploy.yml z CF_DEPLOY_HOOK — po przejściu na Next.js NIEAKTUALNE (usunięte `public/_headers` i `_redirects`, build nie daje już statycznego `dist/`). Do sprzątnięcia razem z `wrangler.toml`.
- Aplikacja zapisów: osobny projekt Vercel na subdomenie zapisy.solenswim.com, repo `wsokolowski-hub/zapisy`.

## Środowisko sandboxa (ograniczenia)
- Proxy blokuje: solenswim.com, api.cloudflare.com, featurable.com — nie da się sprawdzić live; weryfikacja lokalnie.
- Weryfikacja wizualna: `npm run build` → `npm run start -- -p 4321` → playwright-core (chromium: `/opt/pw-browsers/chromium`). `npm install --no-save playwright-core` po każdym `npm ci` (jest wycinany). Skrypt playwrighta musi leżeć W katalogu projektu (inaczej nie znajdzie node_modules).
- `pkill` uruchamiać osobno (exit 144 zabija łańcuch komend).
- GitHub MCP `actions_list` daje ogromny output — parsować zapisany plik pythonem.

## Fakty merytoryczne (nie zmyślać!)
- Basen Ostrowskiego 3: 12,5 m, płytki. Uczymy MAX do żabki (kraul, grzbiet, żabka). ŻADNEGO motylka, zawodów, skoków startowych.
- Zajęcia indywidualne: osobny basen, Kamiennogórska 16 (1 os. 180 / 2 os. 250 / 3 os. 300 zł).
- ŻADNYCH "zajęć próbnych" w treści — nie oferujemy takiej opcji. Zapis: telefonicznie lub online.
- Opinie: wyłącznie widget Featurable — żadnych ręcznie wpisanych opinii ani ocen "4,9/5" w treści.
- Semestr Jesień/Zima 26/27: 5.09.2026–17.01.2027 (bieżący). Kolejny: Wiosna/Lato 27 (6.02–27.06.2027). Właścicielka: Kamila Falkowska.

## TODO od właściciela (czekamy na materiały)
- Certyfikaty/uprawnienia Kamili (TODO w `o-nas.astro`), numery linii MPK (TODO w `gdzie-plywamy.astro`).
- Poza repo: GSC + sitemap, reguła www→apex w panelu CF, optymalizacja Google Business Profile.
- Zmiana maila z umową (zaliczka): osobne repo `wsokolowski-hub/zapisy` — poza zakresem tego repo.

## Checkpointy
`checkpoint/v1.1-stable-2026-07-01` (wzorzec designu), `checkpoint/v1.2-seo-complete`.
`checkpoint/astro-ostatni` — ostatni stan produkcji na Astro, tuż przed przejściem na Next.js (punkt powrotu, gdyby migracja sprawiała problemy).
