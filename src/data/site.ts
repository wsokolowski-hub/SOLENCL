export const site = {
  name: 'Szkoła Pływania Solen Swim',
  short: 'Solen Swim',
  tagline: 'swim with the sun',
  description:
    'Szkoła pływania dla dzieci i niemowląt we Wrocławiu (Grabiszyn). Zajęcia w weekendy — soboty i niedziele, od 6. miesiąca życia. Małe grupy, certyfikowani instruktorzy.',
  url: 'https://solenswim.com',
  locale: 'pl_PL',
  city: 'Wrocław',
  district: 'Grabiszyn',
  region: 'dolnośląskie',
  country: 'PL',
  founded: '2024-11',
  owner: 'Kamila Falkowska',
  companyLegal: 'SolenSwim Sp. z o.o.',
  nip: '8943268588',
  krs: '0001194121',
  regon: '542713909',
  address: {
    street: 'ul. Aleksandra Ostrowskiego 3',
    postal: '54-411',
    city: 'Wrocław',
  },
  // Drugi obiekt — wyłącznie zajęcia indywidualne
  address2: {
    street: 'ul. Kamiennogórska 16',
    postal: '54-034',
    city: 'Wrocław',
  },
  geo: { lat: 51.0869, lng: 16.9916 },
  maps: {
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Szko%C5%82a+P%C5%82ywania+Solen+Swim%2C+ul.+Aleksandra+Ostrowskiego+3%2C+54-411+Wroc%C5%82aw',
    embedUrl:
      'https://www.google.com/maps?q=Szko%C5%82a+P%C5%82ywania+Solen+Swim,+ul.+Aleksandra+Ostrowskiego+3,+54-411+Wroc%C5%82aw&output=embed',
  },
  phone: '+48505912389',
  phoneHuman: '505 912 389',
  phone2: '+48793790711',
  phone2Human: '793 790 711',
  email: 'solenswim@outlook.com',
  bankAccount: '89 1090 2516 0000 0001 6384 8593',
  rating: { value: '4.9', count: '21' },
  priceRange: '60-250 zł',
  semesterEnd: '2027-01-17',
  hours: [
    { day: 'Pon–Pt', value: '09:00 – 18:00 (telefon)' },
    { day: 'Sobota', value: '09:00 – 14:00 (telefon)' },
  ],
  poolHours: [
    { day: 'Sobota', value: '09:00 – 15:00' },
    { day: 'Niedziela', value: '09:00 – 12:00' },
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
    web3formsKey: '32632141-8fba-4b5d-b0c9-ad953459284b',
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
      { href: '/nauka-plywania/niemowleta-i-dzieci-do-4-lat/', label: 'Pływanie niemowląt i dzieci do lat 4', desc: '6 mies – 4 lata · rodzic + dziecko · 60 zł / 30 min' },
      { href: '/nauka-plywania/dzieci-od-podstaw/',             label: 'Nauka pływania dla dzieci od podstaw', desc: '5–10 lat · grupy do 8 · 65 zł / 45 min' },
      { href: '/nauka-plywania/doskonalenie/',                  label: 'Doskonalenie pływania dla dzieci',     desc: '5–10 lat · sob. i niedz. · 65 zł / 45 min' },
      { href: '/nauka-plywania/indywidualnie/',                 label: 'Indywidualnie',                        desc: 'Dzieci i dorośli · 180–250 zł · Kamiennogórska 16' },
    ],
  },
  { href: '/o-nas/', label: 'O NAS' },
  { href: '/gdzie-plywamy/', label: 'GDZIE PŁYWAMY?' },
  { href: '/zapisy/',  label: 'ZAPISY' },
  { href: '/cennik/',  label: 'CENNIK' },
  { href: '/kontakt/', label: 'KONTAKT' },
  { href: '/faq/',     label: 'FAQ' },
];
