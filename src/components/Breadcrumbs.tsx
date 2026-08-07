import React from 'react';

export interface Crumb {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length <= 1) return null;
  return (
    <nav className="crumbs" aria-label="Okruszki nawigacyjne">
      <ol className="crumbs-list">
        {items.map((item, i) => (
          <li className="crumbs-item" key={item.href}>
            {i < items.length - 1 ? (
              <>
                <a href={item.href}>{item.name}</a>
                <span className="crumbs-sep" aria-hidden="true">
                  ›
                </span>
              </>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
