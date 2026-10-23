"use client";

import { useRef } from "react";
import Nav from "./components/Nav";
import StyledLink from "./components/StyledLink";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ top: index * window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      <Nav />
      <div
        ref={containerRef}
        style={{
          height: "100dvh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {/* Section 1 */}
        <div style={{ height: "100dvh", scrollSnapAlign: "start", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div className="flex flex-col items-center text-center">
            <img src="/1.svg" alt="" className="mb-6" style={{ width: "146px", height: "146px" }} />
            <p className="font-handwritten" style={{ fontSize: "2.5rem" }}>I&apos;m Manoj, a leader and a</p>
            <div className="relative inline-block" style={{ padding: "10px 24px" }}>
              <p className="font-handwritten" style={{ fontSize: "2.5rem" }}>Product Designer.</p>
              <img src="/circle.svg" alt="" className="pointer-events-none" style={{ position: "absolute", top: "-16px", left: "0px", width: "calc(100% + 56px)", height: "calc(100% + 32px)" }} />
            </div>
          </div>
          <button
            onClick={() => goTo(1)}
            className="hidden lg:block"
            style={{ position: "absolute", bottom: "32px", right: "40px", background: "none", border: "none", padding: 0, cursor: "pointer" }}
          >
            <img src="/arrow.svg" alt="scroll down" style={{ width: "57px", height: "91px" }} />
          </button>
        </div>

        {/* Section 2 */}
        <div style={{ height: "100dvh", scrollSnapAlign: "start", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="flex flex-col items-center text-center px-8 max-w-2xl">
            <img src="/2.svg" alt="" className="mb-6" style={{ width: "146px", height: "146px" }} />
            <p className="font-handwritten" style={{ fontSize: "2.5rem" }}>
              Currently a Line Leader at Expac.
              <br />Before that, I worked as a Product Designer
              <br />from startups to big corporate teams.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div style={{ height: "100dvh", scrollSnapAlign: "start", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <div className="flex flex-col items-center text-center px-8 max-w-2xl">
            <img src="/3.svg" alt="" className="mb-6" style={{ width: "146px", height: "146px" }} />
            <p className="font-handwritten" style={{ fontSize: "2.5rem" }}>
              Explore my <StyledLink href="/projects">selected work</StyledLink>, check my latest design work on <StyledLink href="https://dribbble.com/manoj_rai" target="_blank" rel="noopener noreferrer">dribbble</StyledLink> or read my <StyledLink href="/articles">articles</StyledLink>
            </p>
          </div>
          <button
            onClick={() => goTo(0)}
            className="hidden lg:block"
            style={{ position: "absolute", bottom: "32px", right: "40px", background: "none", border: "none", padding: 0, cursor: "pointer" }}
          >
            <img src="/arrowup.svg" alt="scroll up" style={{ width: "57px", height: "91px" }} />
          </button>
        </div>
      </div>
    </>
  );
}