import type { Lang } from "@/data/types";
import { pageUrl } from "@/lib/i18n";
import { countLabel } from "@/data/categories";
import type { CategoryConfig } from "@/data/categories";
import Img from "./Img";
import { ArrowIcon } from "./icons";

const BROWSE_RANGE: Record<Lang, string> = { en: "Browse range", zh: "浏览系列" };

// A category "range" card (home page + "Other ranges" grids).
export default function CategoryCard({ category, lang }: { category: CategoryConfig; lang: Lang }) {
  const label = category.label[lang];
  return (
    <article className="card cat-card reveal">
      <div className="card-media">
        <Img src={category.image} alt={label} width={520} height={390} loading="lazy" />
      </div>
      <div className="card-body">
        <h3>
          <a href={pageUrl(lang, category.id)}>{label}</a>
        </h3>
        <p>{countLabel(category.id, lang)}</p>
        <span className="card-arrow">
          {BROWSE_RANGE[lang]} <ArrowIcon />
        </span>
      </div>
    </article>
  );
}
