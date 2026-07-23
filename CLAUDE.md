# Solen Swim — solenswim.com

Strona szkoły pływania dla dzieci (6 mies.–10 lat), Wrocław Grabiszyn, zajęcia weekendowe.
Cel: maksymalna promocja + SEO. Język strony i komunikacji: polski.

## Stack i architektura
- Astro 5 (SSG, `build.format: 'directory'`), zero frameworków JS, style inline per strona (`<style is:global>`).
- Hosting: Cloudflare Workers Static Assets (`wrangler.toml`, `dist/`). Wrangler 4.
- Centralna konfiguracja: `src/data/site.ts` (adresy, telefony, ceny, nawigacja, semestry) — dane biznesowe zmieniaj TYLKO tam.
- SEO: `src/components/SEO.astro` + `SchemaOrg.astro` (LocalBusiness, Course per strona kursu; BEZ aggregateRating — polityka Google). Breadcrumbs site-wide z `Base.astro`.
- Nagłówki bezpieczeństwa + cache: `public/_headers` (CSP! nowe skrypty zewn. wymagają wpisu). `public/_redirects`: tylko WZGLĘDNE URL-e (absolutne = błąd deployu).
- Fonty self-hosted: Comfortaa (nagłówki, godziny/harmonogramy) + Space Mono (body), `public/fonts/`.
- Brand: mint #B6DEDD, coral #FF8357, cream #FFF9F6, dark #293434.

## Deploy i hosting (WAŻNE — nie kombinować)
- PRODUKCJA: **Vercel** (projekt `solencl`, `vercel.json` — nagłówki, cache, redirecty). Push na `main` → Vercel auto-builduje i deployuje na solenswim.com (~1 min).
- Domena solenswim.com: rejestracja w Wixie (NS zablokowane przez Wixa!), rekordy A/CNAME w DNS Wixa wskazują Vercel (A @ → 216.198.79.1, CNAME www → *.vercel-dns-017.com). www → apex robi Vercel.
- Legacy: Cloudflare Workers (solencl.wiktor-sokolek.workers.dev) + workflow deploy.yml z CF_DEPLOY_HOOK — wciąż działa, ale to NIE jest produkcja.
- Aplikacja zapisów: osobny projekt Vercel na subdomenie zapisy.solenswim.com, repo `wsokolowski-hub/zapisy`.

## Środowisko sandboxa (ograniczenia)
- Proxy blokuje: solenswim.com, api.cloudflare.com, featurable.com — nie da się sprawdzić live; weryfikacja lokalnie.
- Weryfikacja wizualna: `npm run build` → `npx serve dist -l 4321` → playwright-core (chromium: `/opt/pw-browsers/chromium`). `npm install --no-save playwright-core` po każdym `npm ci` (jest wycinany).
- `pkill` uruchamiać osobno (exit 144 zabija łańcuch komend).
- GitHub MCP `actions_list` daje ogromny output — parsować zapisany plik pythonem.

## Fakty merytoryczne (nie zmyślać!)
- Basen Ostrowskiego 3: 12,5 m, płytki. Uczymy MAX do żabki (kraul, grzbiet, żabka). ŻADNEGO motylka, zawodów, skoków startowych.
- Zajęcia indywidualne: osobny basen, Kamiennogórska 16 (1 os. 180 / 2 os. 250 / 3 os. 300 zł).
- ŻADNYCH "zajęć próbnych" w treści — nie oferujemy takiej opcji. Zapis: telefonicznie lub online.
- Opinie: wyłącznie widget Featurable — żadnych ręcznie wpisanych opinii ani ocen "4,9/5" w treści.
- Semestr I: 5.09.2026–17.01.2027. Właścicielka: Kamila Falkowska.

## TODO od właściciela (czekamy na materiały)
- Certyfikaty/uprawnienia Kamili (TODO w `o-nas.astro`), numery linii MPK (TODO w `gdzie-plywamy.astro`).
- Poza repo: GSC + sitemap, reguła www→apex w panelu CF, optymalizacja Google Business Profile.
- Zmiana maila z umową (zaliczka): osobne repo `wsokolowski-hub/zapisy` — poza zakresem tego repo.

## Checkpointy
`checkpoint/v1.1-stable-2026-07-01` (wzorzec designu), `checkpoint/v1.2-seo-complete`.
