import NextImage from "next/image";
import type { CSSProperties } from "react";

// Thin wrapper over next/image. With `images.unoptimized` (static export) this
// renders a plain <img> pointing at the original file in /public — no
// recompression, identical quality to the source .webp assets.
export default function Img({
  src,
  alt,
  width,
  height,
  className,
  style,
  priority,
  loading,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  loading?: "eager" | "lazy";
}) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      priority={priority}
      loading={priority ? undefined : loading}
    />
  );
}
