import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Inline expandable cards — click to expand a card in-grid (spans full row and shows full data).
 * Requirements: Tailwind CSS + framer-motion installed.
 */

export default function WhatIsVastu() {
  const cards = [
    {
      id: "core",
      title: "Core Idea",
      short: "Balancing the five elements to create harmony & positive energy flow.",
      full:
        "Vastu's core idea is to position rooms, entrances and objects so they align with natural directions and energies. It balances Earth, Water, Fire, Air & Space to enhance health, relationships, and prosperity. Remedies can be non-structural (colors, plants, mirrors) or structural depending on the situation.",
    },
    {
      id: "covers",
      title: "What It Covers",
      short:
        "Entrance placement, room direction, layout flow, colors, furniture alignment, etc.",
      full:
        "Vastu includes main entrance positioning, room purpose vs direction (e.g., kitchen in SE, master bedroom in SW), furniture arrangement for unobstructed energy flow, placement of water features, ventilation, natural light, placement of mirrors and indoor water elements, and practical non-structural fixes that maintain aesthetics while improving energy flow.",
    },
    {
      id: "benefits",
      title: "Who Benefits",
      short:
        "Homes, offices, shops — anyone seeking peace, success, and energetic balance.",
      full:
        "Individuals, families and business owners apply Vastu to homes, apartments, offices, shops and small workspaces. The goal is improved rest, clearer thinking, productive workspaces, and a supportive environment for relationships and finances.",
    },
    {
      id: "approach",
      title: "Approach",
      short: "Simple, practical remedies that improve energy without major changes.",
      full:
        "Start with quick, low-cost remedies like colors, plants, mirrors, and furniture adjustments. If needed, escalate to structural changes. The emphasis is on practical, testable changes that can be implemented step-by-step.",
    },
  ];

  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);

  // Close on outside click or Esc
  useEffect(() => {
    function handleDocClick(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setExpandedId(null);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") setExpandedId(null);
    }
    document.addEventListener("click", handleDocClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleDocClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
        ref={containerRef}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What is <span className="text-blue-600">Vastu?</span>
        </h2>

        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
          Vastu Shastra is an ancient Indian science that harmonizes your living or working environment by balancing
          the five elements—Earth, Water, Fire, Air, and Space. When aligned correctly, these elements support health,
          growth, and prosperity.
        </p>

        {/* Grid: dense to avoid holes when items span rows */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start grid-flow-row-dense auto-rows-auto">
          {cards.map((card) => {
            const isExpanded = expandedId === card.id;
            return (
              <ExpandableCard
                key={card.id}
                card={card}
                isExpanded={isExpanded}
                onToggle={() => setExpandedId((prev) => (prev === card.id ? null : card.id))}
              />
            );
          })}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Tip: click a card to expand it. Click outside, press Esc, or click again to collapse.
        </p>
      </motion.div>
    </section>
  );
}

/* ExpandableCard: expands inline and shows detailed content */
function ExpandableCard({ card, isExpanded, onToggle }) {
  return (
    <motion.article
      layout // smooth layout animations for the root element
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32 }}
      // disable hover scaling when expanded to avoid shake
      whileHover={!isExpanded ? { scale: 1.02 } : {}}
      onClick={(e) => {
        // prevent clicks on inner controls from bubbling if needed
        // but default behavior is toggle expand
        onToggle();
      }}
      className={`
        group cursor-pointer select-none
        rounded-2xl
        bg-white/90
        border border-gray-200
        shadow-[0_10px_30px_rgba(0,0,0,0.06)]
        hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]
        transition-all duration-300
        overflow-hidden
        ${isExpanded ? "sm:col-span-2" : ""}
      `}
      style={{
        // More robust full-row forcing
        gridColumn: isExpanded ? "1 / -1" : undefined,
        zIndex: isExpanded ? 9999 : undefined,
        boxSizing: "border-box",
        minHeight: isExpanded ? 260 : 150,
        padding: isExpanded ? 28 : 20,
        position: "relative",
        transform: "translateZ(0)", // GPU hint
        willChange: "transform, height",
      }}
      aria-expanded={isExpanded}
    >
      <div className="flex items-start justify-between">
        <h3
          className={`font-semibold text-gray-900 text-lg transition-colors ${
            isExpanded ? "text-blue-600" : "group-hover:text-blue-600"
          }`}
        >
          {card.title}
        </h3>

        {/* Close button shown when expanded (stop propagation so it doesn't re-trigger onToggle twice) */}
        {isExpanded && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            aria-label="Close"
            className="ml-3 text-sm text-gray-500 hover:text-gray-700 bg-gray-100 rounded px-2 py-1"
          >
            Close
          </button>
        )}
      </div>

      {/* Content: no 'layout' on inner content to avoid nested re-measure */}
      <div
        className="mt-3 text-gray-800 text-sm md:text-base leading-relaxed"
        style={{
          maxHeight: isExpanded ? 520 : 64,
          overflow: isExpanded ? "auto" : "hidden",
          whiteSpace: "normal",
          wordBreak: "break-word",
          overflowWrap: "anywhere",
          position: "relative",
        }}
      >
        <p
          className="whitespace-normal break-words"
          style={
            isExpanded
              ? {}
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }
          }
        >
          {isExpanded ? card.full : card.short}
        </p>

        {/* Example: show extra content only when expanded */}
        {isExpanded && (
          <div className="mt-4 text-sm text-gray-700 space-y-3">
            <p>
              <strong>Details:</strong> {card.full}
            </p>

            <ul className="list-disc pl-5 text-gray-700">
              <li>Direction-specific recommendations</li>
              <li>Placement & layout advice</li>
              <li>Non-structural remedies and quick fixes</li>
            </ul>

            <div className="mt-3 flex gap-3">
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                onClick={(e) => e.stopPropagation()}
              >
                Request Consultation
              </a>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                className="inline-flex items-center px-4 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Progress bar (no layout) */}
      <div
        className={`mt-4 h-[4px] rounded-full bg-blue-600 transition-all duration-300 origin-left ${
          isExpanded ? "w-full" : "w-14 group-hover:w-28"
        }`}
        style={{ willChange: "width" }}
      />
    </motion.article>
  );
}
