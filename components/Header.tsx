import type { Lang } from "@/data/types";
import { homeUrl, pageUrl } from "@/lib/i18n";
import { categories } from "@/data/categories";
import { t, WHATSAPP_BASE } from "@/data/site";
import { WhatsAppIcon } from "./icons";

export type NavKey = "home" | "products" | "technology" | "oem" | "about" | "contact";

// The other-language URL of the current page (for the language switch).
export default function Header({
  lang,
  active,
  altHref,
}: {
  lang: Lang;
  active?: NavKey;
  altHref: string;
}) {
  const cls = (key: NavKey) => (active === key ? "active" : undefined);

  return (
    <header className="header">
      <div className="wrap">
        <a className="logo" href={homeUrl(lang)} aria-label={t.homeAria}>
          {/* logo is an inline-sized SVG asset — plain img keeps markup identical */}
          <img src="/assets/img/logo.svg" alt={t.logoAlt} width={120} height={34} />
        </a>
        <nav className="nav" aria-label={t.mainNavAria}>
          <a href={homeUrl(lang)} className={cls("home")}>
            {t.nav.home[lang]}
          </a>
          <div className="dropdown">
            <a href={pageUrl(lang, "products")} className={cls("products")}>
              {t.nav.products[lang]}
            </a>
            <div className="dropdown-menu">
              <a href={pageUrl(lang, "products")}>
                <b>{t.nav.allProducts[lang]}</b>
                <small>{t.nav.allProductsSmall[lang]}</small>
              </a>
              {categories.map((c) => (
                <a key={c.id} href={pageUrl(lang, c.id)}>
                  {c.label[lang]}
                </a>
              ))}
            </div>
          </div>
          <a href={pageUrl(lang, "technology")} className={cls("technology")}>
            {t.nav.technology[lang]}
          </a>
          <a href={pageUrl(lang, "oem-odm")} className={cls("oem")}>
            {t.nav.oem[lang]}
          </a>
          <a href={pageUrl(lang, "about")} className={cls("about")}>
            {t.nav.about[lang]}
          </a>
          <a href={pageUrl(lang, "contact")} className={cls("contact")}>
            {t.nav.contact[lang]}
          </a>
        </nav>
        <div className="header-cta">
          <div className="lang-switch" aria-label={t.langAria}>
            {lang === "en" ? (
              <span className="on">EN</span>
            ) : (
              <a href={altHref} lang="en">
                EN
              </a>
            )}
            {lang === "zh" ? (
              <span className="on">中文</span>
            ) : (
              <a href={altHref} lang="zh">
                中文
              </a>
            )}
          </div>
          <a className="btn btn-wa" href={WHATSAPP_BASE} target="_blank" rel="noopener">
            <WhatsAppIcon /> {t.whatsappLabel[lang]}
          </a>
        </div>
        <button className="burger" aria-label={t.menuAria} aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
