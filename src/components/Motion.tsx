'use client';

import { useEffect } from 'react';

/**
 * Warstwa animacji dla gałęzi Next.js (React):
 *  1. scroll-reveal sekcji (IntersectionObserver → klasa .is-visible),
 *  2. count-up cen/liczb, gdy wejdą w widok,
 * Przejścia między stronami obsługuje CSS (@view-transition) — bez JS.
 *
 * Progressive enhancement: gdy użytkownik ma prefers-reduced-motion,
 * albo JS nie wystartuje, treść pozostaje w pełni widoczna
 * (patrz fallback w layout.tsx i reguły w animations.css).
 */
export default function Motion() {
  useEffect(() => {
    // Sygnał dla fallbacku w <head> — Motion wystartował.
    (window as unknown as { __motionReady?: boolean }).__motionReady = true;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const cleanups: Array<() => void> = [];

    /* ---- 1. Scroll-reveal ---- */
    const main = document.querySelector('main.reveal-scope');
    if (main) {
      main.classList.add('motion-on');
      const sections = Array.from(main.children) as HTMLElement[];
      const revealIO = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add('is-visible');
              revealIO.unobserve(e.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );
      sections.forEach((el, i) => {
        // sekcje już w widoku pokazujemy od razu z animacją; resztę na scroll
        el.style.transitionDelay = `${Math.min(i, 1) * 60}ms`;
        revealIO.observe(el);
      });
      cleanups.push(() => revealIO.disconnect());
    }

    /* ---- 2. Count-up liczb ---- */
    const numTargets = document.querySelectorAll<HTMLElement>(
      '.npg-card-amount, .karta-cena, .cn-karta-cena'
    );

    const findNumberNode = (el: HTMLElement): { set: (v: number) => void; target: number } | null => {
      // najpierw bezpośredni węzeł tekstowy z samą liczbą (np. <sup></sup>60<sub>zł</sub>)
      for (const n of Array.from(el.childNodes)) {
        if (n.nodeType === Node.TEXT_NODE && /^\s*\d+\s*$/.test(n.nodeValue || '')) {
          const target = parseInt(n.nodeValue || '0', 10);
          return { set: (v) => (n.nodeValue = String(v)), target };
        }
      }
      // w przeciwnym razie cała treść elementu (np. .npg-card-amount = "60")
      if (/^\s*\d+\s*$/.test(el.textContent || '')) {
        const target = parseInt(el.textContent || '0', 10);
        return { set: (v) => (el.textContent = String(v)), target };
      }
      return null;
    };

    const countIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          countIO.unobserve(el);
          const num = findNumberNode(el);
          if (!num || num.target <= 0) continue;
          el.classList.add('countup-active');
          window.setTimeout(() => el.classList.remove('countup-active'), 950);
          const dur = 900;
          const t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            num.set(Math.round(eased * num.target));
            if (p < 1) requestAnimationFrame(step);
            else num.set(num.target);
          };
          num.set(0);
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.6 }
    );
    numTargets.forEach((el) => countIO.observe(el));
    cleanups.push(() => countIO.disconnect());

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
