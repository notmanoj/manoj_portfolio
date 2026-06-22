"use client";

type HoverBadgeProps = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  className?: string;
  captionPosition?: "right" | "left" | "bottom";
};

export default function HoverBadge({
  src,
  alt,
  caption,
  width = 180,
  className = "",
  captionPosition = "right",
}: HoverBadgeProps) {
  return (
  <div className={`group hidden md:flex flex-col items-start gap-2 ${className}`}>
    <img
      src={src}
      alt={alt}
      style={{ width: `${width}px` }}
      className="select-none"
    />
    {captionPosition === "bottom" && (
      <span className="text-secondary text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {caption}
      </span>
    )}
    {captionPosition === "right" && (
      <div className="flex items-center gap-3">
        <span className="text-secondary text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {caption}
        </span>
      </div>
    )}
    {captionPosition === "left" && (
      <div className="flex items-center gap-3">
        <span className="text-secondary text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {caption}
        </span>
      </div>
    )}
  </div>
);
}
