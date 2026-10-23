"use client";
import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

export interface ScrollSnapHandle {
  goTo: (index: number) => void;
}

const ScrollSnap = forwardRef<ScrollSnapHandle, { children: React.ReactNode }>(
  ({ children }, handle) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const current = useRef(0);
    const locked = useRef(false);
    const totalRef = useRef(0);
    const lastTime = useRef(0);
    const touchStartY = useRef(0);

    const goTo = (index: number) => {
      const el = wrapperRef.current;
      if (!el) return;
      const total = totalRef.current;
      current.current = Math.max(0, Math.min(index, total - 1));
      el.style.transform = `translateY(-${current.current * window.innerHeight}px)`;
      locked.current = true;
      setTimeout(() => { locked.current = false; }, 700);
    };

    useImperativeHandle(handle, () => ({ goTo }));

    useEffect(() => {
      const el = wrapperRef.current;
      if (!el) return;
      totalRef.current = el.children.length;

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        const now = Date.now();
        if (locked.current) return;
        if (Math.abs(e.deltaY) < 30) return;
        if (now - lastTime.current < 700) return;
        lastTime.current = now;
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
      <div
  ref={containerRef}
  style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, overflow: "scroll" }}
  onTouchStart={(e) => {
    touchStartY.current = e.touches[0].clientY;
  }}
  onTouchEnd={(e) => {
    if (locked.current) return;
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) < 50) return;
    if (diff > 0) goTo(current.current + 1);
    else goTo(current.current - 1);
  }}
>
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
    );
  }
);

ScrollSnap.displayName = "ScrollSnap";
export default ScrollSnap;