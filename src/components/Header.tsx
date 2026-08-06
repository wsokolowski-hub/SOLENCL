'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { nav, site } from '@/data/site';

export default function Header() {
  const path = usePathname() || '/';
  const isActive = (href: string) => (href === '/' ? path === '/' : path.startsWith(href));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    nav.forEach((item) => {
      if (item.children) init[item.href] = isActive(item.href);
    });
    return init;
  });

  const toggleGroup = (href: string) =>
    setOpenGroups((prev) => ({ ...prev, [href]: !prev[href] }));

  return (
    <>
      <header className="hdr">
        <a href="/" className="hdr-logo-link" aria-label={`${site.short} — strona główna`}>
          <img
            src="/assets/logo-cropped.webp"
            alt={`Szkoła Pływania ${site.short} ${site.city}`}
            className="hdr-logo"
            width="410"
            height="200"
            fetchPriority="high"
          />
        </a>
        <div className="hdr-right">
          <a href={site.social.facebook} className="hdr-social" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href={site.social.instagram} className="hdr-social" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <button
            className="hdr-burger"
            id="hamburger"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`hdr-mobile${mobileOpen ? ' open' : ''}`} id="mobile-nav" aria-label="Menu mobilne">
          {nav.map((item) =>
            item.children ? (
              <div
                className={`hdr-mobile-group${openGroups[item.href] ? ' is-open' : ''}`}
                key={item.href}
              >
                <div className="hdr-mobile-row">
                  <a href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                    {item.label}
                  </a>
                  <button
                    className="hdr-mobile-toggle"
                    type="button"
                    aria-label={`Pokaż podstrony: ${item.label}`}
                    aria-expanded={openGroups[item.href] ? 'true' : 'false'}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleGroup(item.href);
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </button>
                </div>
                <div className="hdr-mobile-sub">
                  {item.children.map((c) => (
                    <a href={c.href} key={c.href} aria-current={path === c.href ? 'page' : undefined}>
                      ↳ {c.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a href={item.href} key={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                {item.label}
              </a>
            )
          )}
        </nav>
      </header>

      <nav className="hdr-nav-strip" aria-label="Nawigacja pozioma">
        {nav.map((item) =>
          item.children ? (
            <div className="hdr-dropdown" key={item.href}>
              <a
                href={item.href}
                className="hdr-dropdown-trigger"
                aria-haspopup="true"
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
                <svg className="hdr-dropdown-caret" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 4l3 3 3-3" />
                </svg>
              </a>
              <div className="hdr-dropdown-menu" role="menu">
                {item.children.map((c) => (
                  <a href={c.href} key={c.href} role="menuitem" aria-current={path === c.href ? 'page' : undefined}>
                    <span className="hdr-dropdown-label">{c.label}</span>
                    {c.desc && <span className="hdr-dropdown-desc">{c.desc}</span>}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a href={item.href} key={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
              {item.label}
            </a>
          )
        )}
      </nav>
    </>
  );
}
