import type { Lang, Product } from "@/data/types";
import { productUrl } from "@/lib/i18n";
import Img from "./Img";
import { ArrowIcon } from "./icons";

const VIEW_PRODUCT: Record<Lang, string> = { en: "View product", zh: "查看产品" };

// A single product card — reused in catalogue, category, featured and related
// grids. Rendering is driven entirely by `product` + `lang` props, so the data
// source can change without touching this markup.
export default function ProductCard({ product, lang }: { product: Product; lang: Lang }) {
  const card = product[lang].card;
  return (
    <article className="card reveal">
      <div className="card-media">
        <Img src={card.image} alt={card.alt} width={520} height={520} loading="lazy" />
      </div>
      <div className="card-body">
        <span className="card-tag">{card.tag}</span>
        <h3>
          <a href={productUrl(lang, product.slug)}>{card.title}</a>
        </h3>
        <p>{card.desc}</p>
        <span className="card-arrow">
          {VIEW_PRODUCT[lang]} <ArrowIcon />
        </span>
      </div>
    </article>
  );
}
