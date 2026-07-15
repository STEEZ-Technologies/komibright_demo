/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — same deploy target as the current GitHub Pages site.
  // Produces /out with .html files (e.g. out/ro-systems.html), preserving the
  // original URLs 1:1. Swapping the static data arrays for a build-time Supabase
  // fetch later requires no change here — the CMS "rebuild" model.
  output: "export",

  // next/image with a static export can't run the on-the-fly optimizer, so images
  // are served exactly as authored — no recompression, identical quality to the
  // original .webp files.
  images: { unoptimized: true },

  // Keep extensionless internal routing; static export still writes `<route>.html`
  // files, so the original .html URLs continue to resolve on the static host.
  trailingSlash: false,
};

export default nextConfig;
