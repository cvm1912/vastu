import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * WhatIsVastu - full component
 * - Click to expand inline (no hover)
 * - Expanded height is content-driven (no large fixed minHeight)
 * - Capped inner maxHeight with overflow:auto for very long content
 * - Mobile: scrollIntoView when expanding
 * - Requires: Tailwind CSS + framer-motion
 */

export default function WhatIsVastu() {
  const cards = [
    {
      id: "core",
      title: "Core Idea",
      short: "Balancing the five elements to create harmony & positive energy flow.",
      full:
        "Vastu's core idea is to position rooms, entrances and objects so they align with natural energies. It balances Earth, Water, Fire, Air & Space to enhance health, relationships, and prosperity.",
    },
    {
      id: "covers",
      title: "What It Covers",
      short:
        "Entrance placement, room direction, layout flow, colors, furniture alignment, etc.",
      full:
        "Vastu covers entrance placement, room functions vs direction, layout flow, colors, ventilation, natural light, furniture alignment and practical non-structural remedies.",
    },
    {
      id: "benefits",
      title: "Who Benefits",
      short:
        "Homes, offices, shops — anyone seeking peace, success, and energetic balance.",
      full:
        "Homes, offices and shops benefit from Vastu by improving rest, clarity, productivity, relationships and prosperity.",
    },
    {
      id: "approach",
      title: "Approach",
      short: "Simple, practical remedies that improve energy without major changes.",
      full:
        "Vastu remedies focus on simple adjustments like colors, placement, lighting and layout changes that enhance energy flow without major renovations.",
    },
  ];

  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);

  // Close when clicking/tapping outside or pressing Escape
  useEffect(() => {
    function handleDown(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setExpandedId(null);
    }
    function handleEsc(e) {
      if (e.key === "Escape") setExpandedId(null);
    }
    document.addEventListener("pointerdown", handleDown);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("pointerdown", handleDown);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const isSmallScreen = () =>
    typeof window !== "undefined" ? window.innerWidth < 640 : false;

  return (
    <section className="w-full bg-white py-12 px-4 md:py-16 md:px-16">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.42 }}
        ref={containerRef}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What is <span className="text-blue-600">Vastu?</span>
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">
          Vastu Shastra is an ancient Indian science that harmonizes your living or working environment by balancing
          the five elements — Earth, Water, Fire, Air, and Space.
        </p>

        {/* grid: single column on mobile, two on sm+ */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-min items-start">
          {cards.map((card) => {
            const isExpanded = expandedId === card.id;
            return (
              <ResponsiveCard
                key={card.id}
                card={card}
                isExpanded={isExpanded}
                onToggle={(e) => {
                  e.stopPropagation();
                  setExpandedId((prev) => (prev === card.id ? null : card.id));

                  // scroll into view on small screens when expanding
                  if (!isExpanded && isSmallScreen()) {
                    setTimeout(() => {
                      const el = document.getElementById(`card-${card.id}`);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 90);
                  }
                }}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

/* ResponsiveCard - content-driven height for expanded state */
function ResponsiveCard({ card, isExpanded, onToggle }) {
  return (
    <motion.article
      id={`card-${card.id}`}
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32 }}
      onClick={onToggle}
      className={`cursor-pointer select-none rounded-2xl bg-white/95 border border-gray-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition-all duration-300 overflow-hidden ${isExpanded ? "sm:col-span-2" : ""}`}
      style={{
        gridColumn: isExpanded ? "1 / -1" : undefined,
        alignSelf: "start",
        // keep a high z-index if you need overlay; remove/change if you want navbar always on top
        zIndex: isExpanded ? 9999 : undefined,
        // remove stacking-creating transforms; let height be content-driven
        boxSizing: "border-box",
        padding: isExpanded ? 20 : 16,
        // collapsed has a small minHeight so grid doesn't look tiny
        minHeight: isExpanded ? undefined : 120,
        position: "relative",
        willChange: "height",
      }}
      aria-expanded={isExpanded}
    >
      <h3 className="font-semibold text-gray-900 text-base md:text-lg">{card.title}</h3>

      <div
        className="mt-3 text-gray-800 text-sm md:text-base leading-relaxed"
        style={{
          // allow the card to size to content; but cap very long content
          maxHeight: isExpanded ? 520 : 48,
          overflow: isExpanded ? "auto" : "hidden",
          whiteSpace: "normal",
          wordBreak: "break-word",
          overflowWrap: "anywhere",
          display: "-webkit-box",
          WebkitLineClamp: isExpanded ? "unset" : 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        <p className="whitespace-normal break-words">{isExpanded ? card.full : card.short}</p>
      </div>

      <div
        className={`mt-4 h-[4px] rounded-full transition-all duration-300 origin-left ${isExpanded ? "bg-yellow-600 w-full" : "bg-blue-600 w-16"}`}
        style={{ willChange: "width, background-color" }}
      />
    </motion.article>
  );
}
