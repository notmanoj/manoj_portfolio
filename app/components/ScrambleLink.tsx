"use client";

export default function ScrambleLink({
  href,
  children,
  target,
  rel,
}: {
  href: string;
  children: string;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={{
        animation: "linkReveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) both",
      }}
    >
      {children}
    </a>
  );
}