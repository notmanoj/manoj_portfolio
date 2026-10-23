"use client";
import Link from "next/link";
import { useState } from "react";

interface StyledLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export default function StyledLink({ href, children, target, rel }: StyledLinkProps) {
  const [hovered, setHovered] = useState(false);
  const isExternal = href.startsWith("http");

  const style = {
    color: hovered ? "#796BFF" : "#4633FF",
    position: "relative" as const,
    display: "inline-block",
    background: "none",
    textDecoration: "none",
    transition: "color 0.2s ease",
  };

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        style={style}
        className="no-underline"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
        
      </a>
    );
  }

  return (
    <Link
      href={href}
      style={style}
      className="no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      
    </Link>
  );
}