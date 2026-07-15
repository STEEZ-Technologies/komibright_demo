// Post-export fixup: the Chinese home page.
//
// Next static export writes the `/zh` route to `out/zh.html`, but the original
// site serves the Chinese home at `/zh/index.html` (and `/zh/`). We copy the
// file so the directory-index URL and the original canonical/hreflang target
// (`/zh/index.html`) both resolve. `out/zh.html` is left in place too, so
// `/zh`, `/zh/` and `/zh/index.html` all work.
import { cp, mkdir, access } from "node:fs/promises";
import { join } from "node:path";

const OUT = join(process.cwd(), "out");

async function main() {
  const src = join(OUT, "zh.html");
  try {
    await access(src);
  } catch {
    console.warn("[postexport] out/zh.html not found — skipping");
    return;
  }
  await mkdir(join(OUT, "zh"), { recursive: true });
  await cp(src, join(OUT, "zh", "index.html"));
  console.log("[postexport] copied out/zh.html -> out/zh/index.html");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
