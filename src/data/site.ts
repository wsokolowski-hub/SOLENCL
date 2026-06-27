export const site = {
  name: 'Szkoła Pływania Solen Swim',
  short: 'Solen Swim',
  tagline: 'swim with the sun',
  description:
    'Szkoła pływania dla dzieci i niemowląt we Wrocławiu (Grabiszyn). Zajęcia od 6. miesiąca życia. Małe grupy, certyfikowani instruktorzy.',
  url: 'https://solenswim.com',
  locale: 'pl_PL',
  city: 'Wrocław',
  district: 'Grabiszyn',
  region: 'dolnośląskie',
  country: 'PL',
  founded: '2024-11',
  owner: 'Kamila Falkowska',
  companyLegal: 'Solen Swim Kamila Falkowska',
  nip: '8943270496',
  address: {
    street: 'ul. Aleksandra Ostrowskiego 3',
    postal: '54-411',
    city: 'Wrocław',
  },
  geo: { lat: 51.0869, lng: 16.9916 },
  phone: '+48505912389',
  phoneHuman: '505 912 389',
  phone2: '+48793790711',
  phone2Human: '793 790 711',
  email: 'solenswim@outlook.com',
  bankAccount: '05 1090 2529 0000 0001 6453 7999',
  rating: { value: '4.9', count: '21' },
  priceRange: '55-65 zł',
  hours: [
    { day: 'Pon–Pt', value: '09:00 – 18:00 (telefon)' },
    { day: 'Sobota', value: '09:00 – 14:00 (telefon)' },
  ],
  poolHours: [
    { day: 'Czwartek', value: '15:30 – 18:30' },
    { day: 'Sobota', value: '09:00 – 15:00' },
    { day: 'Niedziela', value: '10:00 – 12:00 (niemowlęta)' },
  ],
  semester: {
    one: { label: 'I semestr', range: '5.09.2026 – 17.01.2027', status: 'open' },
    two: { label: 'II semestr', range: '6.02.2027 – 27.06.2027', status: 'soon' },
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61581816024136',
    instagram: 'https://www.instagram.com/szkolaplywania.solenswim/',
  },
  reviews: {
    // ID widgetu z featurable.com (UUID) — wklej po utworzeniu widgetu.
    // Dopóki puste, sekcja opinii pokazuje przycisk do opinii w Google.
    featurableWidgetId: '9102a498-c907-449b-9777-cd013f7cf519',
    googleProfileUrl: 'https://g.page/r/CQ_aXznUvIdKEAE',
    googleWriteReviewUrl: 'https://g.page/r/CQ_aXznUvIdKEAE/review',
  },
  // Pełny formularz zapisu online (osobna aplikacja na Vercel)
  onlineSignupUrl: 'https://solenswim.vercel.app',
  forms: {
    // Darmowy klucz z https://web3forms.com (wpisz swój e-mail -> dostajesz Access Key).
    // Zgłoszenia z formularza "oddzwonimy" trafią na ten e-mail. Dopóki puste,
    // formularz prosi o kontakt telefoniczny zamiast wysyłki.
    web3formsKey: '',
  },
} as const;

export type NavChild = { href: string; label: string; desc?: string };
export type NavItem = { href: string; label: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { href: '/', label: 'GŁÓWNA' },
  {
    href: '/nauka-plywania/',
    label: 'NAUKA PŁYWANIA',
    children: [
      { href: '/nauka-plywania/niemowleta-i-dzieci-do-4-lat/', label: 'Pływanie niemowląt i dzieci do lat 4', desc: '6 mies – 4 lata · rodzic + dziecko · 55 zł / 30 min' },
      { href: '/nauka-plywania/dzieci-od-podstaw/',             label: 'Nauka pływania dla dzieci od podstaw', desc: '5–10 lat · grupy do 8 · 65 zł / 45 min' },
      { href: '/nauka-plywania/doskonalenie/',                  label: 'Doskonalenie pływania dla dzieci',     desc: '5–10 lat · soboty · 65 zł / 45 min' },
      { href: '/nauka-plywania/indywidualnie/',                 label: 'Indywidualnie',                        desc: 'Dzieci i dorośli · 180 / 220 / 250 zł · Kamiennogórska 16' },
    ],
  },
  { href: '/o-nas/', label: 'O NAS' },
  { href: '/gdzie-plywamy/', label: 'GDZIE PŁYWAMY?' },
  { href: '/zapisy/',  label: 'ZAPISY' },
  { href: '/cennik/',  label: 'CENNIK' },
  { href: '/kontakt/', label: 'KONTAKT' },
  { href: '/faq/',     label: 'FAQ' },
];
