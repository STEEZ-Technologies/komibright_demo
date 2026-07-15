import type { JsonLdObject } from "@/data/types";

// Renders one <script type="application/ld+json"> per object, matching the
// original pages (Organization, WebSite, Product, BreadcrumbList, FAQPage).
// Next's Metadata API doesn't emit JSON-LD, so it's injected here; Google reads
// it anywhere in the document.
export default function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
