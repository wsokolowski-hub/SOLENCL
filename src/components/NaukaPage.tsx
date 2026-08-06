import React from 'react';
import { site } from '@/data/site';
import PageShell from '@/components/PageShell';

interface ScheduleItem { day: string; hours: string }
interface FeatureItem { icon: string; title: string; desc: string }
interface StepItem { title: string; desc: string }
interface LongSection { title: string; body: string[] }
interface MiniFaqItem { q: string; a: string }
interface RelatedLink { href: string; label: string }

export interface NaukaPageProps {
  title: string;            // SEO title
  description: string;      // SEO description
  path: string;             // /nauka-plywania/xxx/
  eyebrow: string;          // small tag above H1
  h1: string;               // page H1 (HTML allowed)
  slogan?: string;          // emocjonalny podtytuł pod H1
  lead: string;             // hero subtitle
  serviceName: string;      // for schema.org
  price: string;            // "60"
  priceUnit: string;        // "/ 30 min"
  ageRange: string;         // "6 miesięcy – 4 lata"
  groupSize: string;        // "do 8 par"
  duration: string;         // "30 min"
  parentInPool: boolean;    // czy rodzic w wodzie?
  schedule: ScheduleItem[];
  features: FeatureItem[];  // dla kogo / co dostajesz
  steps?: StepItem[];       // opcjonalne: jak to działa
  badge?: string;           // np "Najpopularniejsze"
  longSections?: LongSection[]; // sekcje opisowe (metodyka, efekty)
  miniFaq?: MiniFaqItem[];  // pytania specyficzne dla kursu (tylko widoczny HTML)
  related?: RelatedLink[];  // powiązane kursy / strony
  courseAudience?: string;  // np. "Dzieci 5–10 lat" — do schema Course
}

export default function NaukaPage(p: NaukaPageProps) {
  const breadcrumbs = [
    { name: 'Start', href: '/' },
    { name: 'Nauka pływania', href: '/nauka-plywania/' },
    { name: p.eyebrow, href: p.path },
  ];

  const course = {
    name: `${p.serviceName} — Wrocław`,
    description: p.description,
    price: p.price,
    url: p.path,
    audience: p.courseAudience,
  };

  return (
    <PageShell pageType="service" breadcrumbs={breadcrumbs} course={course}>
      <section className="npg-hero">
        <span className="npg-eyebrow">{p.eyebrow}</span>
        <h1 className="npg-h1" dangerouslySetInnerHTML={{ __html: p.h1 }}></h1>
        {p.slogan && <p className="npg-slogan">{p.slogan}</p>}
        <p className="npg-lead">{p.lead}</p>
        <div className="npg-hero-cta">
          <a href="/zapisy/" className="npg-btn-primary">Zapisz dziecko</a>
          <a href="#cennik" className="npg-btn-ghost">Szczegóły i cena ↓</a>
        </div>
      </section>

      <section id="cennik" className="npg-pricecard">
        <div className="npg-card">
          {p.badge && <span className="npg-card-badge">{p.badge}</span>}
          <h2 className="npg-card-name">{p.serviceName}</h2>
          <div className="npg-card-price">
            <span className="npg-card-amount">{p.price}</span>
            <span className="npg-card-unit">{p.priceUnit}</span>
          </div>
          <ul className="npg-card-meta">
            <li><span>Wiek:</span> {p.ageRange}</li>
            <li><span>Czas zajęć:</span> {p.duration}</li>
            <li><span>Wielkość grupy:</span> {p.groupSize}</li>
            <li><span>Rodzic w wodzie:</span> {p.parentInPool ? 'tak — z dzieckiem' : 'nie — dziecko samodzielnie'}</li>
            <li><span>Lokalizacja:</span> ul. Ostrowskiego 3, Wrocław Grabiszyn</li>
          </ul>
          <a href="/zapisy/" className="npg-card-cta">Zapisz się na zajęcia</a>
        </div>

        <div className="npg-schedule">
          <h3>Harmonogram zajęć — weekendy</h3>
          <ul>
            {p.schedule.map((s, i) => (
              <li key={i}><strong>{s.day}</strong><span>{s.hours}</span></li>
            ))}
          </ul>
          <p className="npg-note">
            Dokładny dzień i godzinę ustalamy telefonicznie pod numerem{' '}
            <a href={`tel:${site.phone}`}>{site.phoneHuman}</a>.
          </p>
        </div>
      </section>

      <section className="npg-features">
        <span className="npg-section-eyebrow">Co zyskujesz</span>
        <h2 className="npg-section-title">Dlaczego warto wybrać te zajęcia</h2>
        <div className="npg-features-grid">
          {p.features.map((f, i) => (
            <div className="npg-feature" key={i}>
              <div className="npg-feature-icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {p.longSections && p.longSections.length > 0 && (
        <section className="npg-long">
          {p.longSections.map((s, i) => (
            <div className="npg-long-blok" key={i}>
              <h2 className="npg-long-title">{s.title}</h2>
              {s.body.map((par, j) => (
                <p className="npg-long-text" key={j}>{par}</p>
              ))}
            </div>
          ))}
        </section>
      )}

      {p.steps && p.steps.length > 0 && (
        <section className="npg-steps">
          <span className="npg-section-eyebrow">Jak to działa</span>
          <h2 className="npg-section-title">Krok po kroku</h2>
          <ol className="npg-steps-list">
            {p.steps.map((s, i) => (
              <li key={i}>
                <span className="npg-step-num">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {p.miniFaq && p.miniFaq.length > 0 && (
        <section className="npg-minifaq">
          <span className="npg-section-eyebrow">Częste pytania</span>
          <h2 className="npg-section-title">Rodzice pytają</h2>
          <div className="npg-minifaq-list">
            {p.miniFaq.map((f, i) => (
              <details className="npg-minifaq-item" key={i}>
                <summary className="npg-minifaq-q">{f.q}</summary>
                <p className="npg-minifaq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {p.related && p.related.length > 0 && (
        <section className="npg-related">
          <span className="npg-section-eyebrow">Zobacz też</span>
          <h2 className="npg-section-title">Może Cię zainteresować</h2>
          <ul className="npg-related-list">
            {p.related.map((r, i) => (
              <li key={i}><a href={r.href} className="npg-related-link">{r.label} →</a></li>
            ))}
          </ul>
        </section>
      )}

      <section className="npg-cta-band">
        <h2>Gotowy na pierwsze zajęcia?</h2>
        <p>Zadzwoń lub napisz — odpowiemy w ciągu 24h i pomożemy dopasować termin.</p>
        <div className="npg-cta-buttons">
          <a href={`tel:${site.phone}`} className="npg-btn-primary">{site.phoneHuman}</a>
          <a href="/zapisy/" className="npg-btn-ghost">Formularz zapisu</a>
        </div>
      </section>
    </PageShell>
  );
}
