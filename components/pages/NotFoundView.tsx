import type { Lang } from "@/data/types";
import { homeUrl, pageUrl, altLang } from "@/lib/i18n";
import { notFound as copy } from "@/data/pages";
import Shell from "@/components/Shell";

// 404 body. Reused by app/not-found.tsx (EN) and the /zh/404 route.
export default function NotFoundView({ lang }: { lang: Lang }) {
  const alt = altLang(lang);
  return (
    <Shell lang={lang} altHref={pageUrl(alt, "404")}>
      <section className="section center">
        <div className="wrap">
          <h1 style={{ fontSize: "5rem", marginBottom: 0 }}>404</h1>
          <p className="lead">{copy.lead[lang]}</p>
          <a className="btn btn-primary" href={homeUrl(lang)}>
            {copy.back[lang]}
          </a>
        </div>
      </section>
    </Shell>
  );
}
