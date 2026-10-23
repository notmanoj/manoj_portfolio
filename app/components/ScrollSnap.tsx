"use client";
import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

export interface ScrollSnapHandle {
  goTo: (index: number) => void;
}

const ScrollSnap = forwardRef<ScrollSnapHandle, { children: React.ReactNode }>(
  ({ children }, handle) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const current = useRef(0);
    const locked = useRef(false);
    const totalRef = useRef(0);

    const goTo = (index: number) => {
      const el = wrapperRef.current;
      if (!el) return;
      const total = totalRef.current;
      const next = Math.max(0, Math.min(index, total - 1));
      if (next === current.current) return;
      current.current = next;
      el.style.transform = `translateY(-${current.current * window.innerHeight}px)`;
      locked.current = true;
      setTimeout(() => { locked.current = false; }, 800);
    };

    useImperativeHandle(handle, () => ({ goTo }));

    useEffect(() => {
      const el = wrapperRef.current;
      if (!el) return;
      totalRef.current = el.children.length;

      const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      if (!isDesktop) return;

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        if (locked.current) return;
        if (Math.abs(e.deltaY) < 30) return;
        if (e.deltaY > 0) goTo(current.current + 1);
        else goTo(current.current - 1);
      };

      const handleKey = (e: KeyboardEvent) => {
        if (!["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(e.key)) return;
        e.preventDefault();
        if (locked.current) return;
        if (e.key === "ArrowDown" || e.key === "PageDown") goTo(current.current + 1);
        else goTo(current.current - 1);
      };

      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("keydown", handleKey);

      return () => {
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("keydown", handleKey);
      };
    }, []);

    return (
      <>
        {/* Desktop: fixed snap */}
        <div className="hidden md:block" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden" }}>
          <div
            ref={wrapperRef}
            style={{
              transition: "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
              willChange: "transform",
            }}
          >
            {children}
          </div>
        </div>

        {/* Mobile/tablet: normal scroll */}
        <div className="block md:hidden">
          {children}
        </div>
      </>
    );
  }
);

ScrollSnap.displayName = "ScrollSnap";
export default ScrollSnap;