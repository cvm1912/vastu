// src/components/LocomotiveProvider.jsx
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

/**
 * LocomotiveProvider
 * Wrap the content you want locomotive to control in the returned container.
 * Use data-scroll-section on page sections and data-scroll on elements for parallax.
 */
export default function LocomotiveProvider({ children }) {
  const containerRef = useRef(null);
  const locoRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    locoRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      // enable smoothing on mobile/tablet:
      smartphone: { smooth: true },
      tablet: { smooth: true },
      // adjust lerp for smoothness; lower = snappier
      lerp: 0.08,
    });

    // update on resize (or whenever content size changes)
    const onResize = () => locoRef.current && locoRef.current.update();
    window.addEventListener("resize", onResize);

    // optional: update after fonts/images load
    window.addEventListener("load", () => locoRef.current && locoRef.current.update());

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", () => {});
      if (locoRef.current) {
        locoRef.current.destroy();
        locoRef.current = null;
      }
    };
  }, []);

  return (
    // IMPORTANT: this div must be the scroll container for locomotive
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
