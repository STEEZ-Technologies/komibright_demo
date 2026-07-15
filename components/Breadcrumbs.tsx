import { Fragment } from "react";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="wrap">
      <nav className="crumbs" aria-label="Breadcrumb">
        {items.map((it, i) => (
          <Fragment key={i}>
            {it.href ? <a href={it.href}>{it.label}</a> : <span>{it.label}</span>}
            {i < items.length - 1 && <span className="sep">/</span>}
          </Fragment>
        ))}
      </nav>
    </div>
  );
}
