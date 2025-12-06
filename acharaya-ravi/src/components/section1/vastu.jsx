import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// =========================================
//  CARD WRAPPER (Reusable) — NOT full width
// =========================================
function VastuCardContainer({ children }) {
  return (
    <div
      className="
        max-w-6xl    /* limit width so it does NOT cover full screen */
        mx-auto
        bg-white
        rounded-3xl
        border border-gray-200
        shadow-[0_10px_35px_rgba(0,0,0,0.10)]
        p-6 md:p-10
      "
    >
      {children}
    </div>
  );
}

// =========================================
//  MAIN COMPONENT (Inside the Card Now)
// =========================================
export default function WhatIsVastuCard() {
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

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handlePointerDown(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setExpandedId(null);
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") setExpandedId(null);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // SSR-safe small screen check
  const isSmall = () => typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <VastuCardContainer>
      <motion.div
        className="max-w-5xl mx-auto"
        ref={containerRef}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What is <span className="text-blue-600">Vastu?</span>
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Vastu Shastra is an ancient Indian science that harmonizes your living or working environment by balancing
          the five elements — Earth, Water, Fire, Air, and Space.
        </p>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card) => {
            const isExpanded = expandedId === card.id;

            return (
              <CardItem
                key={card.id}
                card={card}
                isExpanded={isExpanded}
                onToggle={(e) => {
                  // stop propagation so outside click logic doesn't immediately close it
                  e?.stopPropagation?.();
                  setExpandedId((prev) => (prev === card.id ? null : card.id));

                  if (!isExpanded && isSmall()) {
                    // small timeout so the layout can settle before scrolling
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
    </VastuCardContainer>
  );
}

// =========================================
//  INDIVIDUAL CARD — keyboard accessible
// =========================================
function CardItem({ card, isExpanded, onToggle }) {
  // prepare clamp styles for collapsed vs expanded
  const collapsedStyle = {
    maxHeight: 48,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };
  const expandedStyle = {
    maxHeight: 350,
    overflow: "auto",
    display: "block",
    WebkitLineClamp: undefined,
  };

  return (
    <motion.div
      id={`card-${card.id}`}
      layout
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        // allow Enter or Space to toggle (accessibility)
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle(e);
        }
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32 }}
      aria-expanded={isExpanded}
      className={`rounded-2xl bg-white cursor-pointer border border-gray-200 shadow-md 
        transition-all duration-300 p-5 overflow-hidden
        ${isExpanded ? "sm:col-span-2" : ""}`}
      style={{
        gridColumn: isExpanded ? "1 / -1" : undefined,
        zIndex: isExpanded ? 50 : undefined, // keep above neighbors when expanded
      }}
    >
      <h3 className="font-semibold text-gray-900 text-lg">{card.title}</h3>

      <div
        className="mt-3 text-gray-800 text-sm md:text-base leading-relaxed"
        style={isExpanded ? expandedStyle : collapsedStyle}
      >
        {isExpanded ? card.full : card.short}
      </div>

      <div
        className={`mt-4 h-[4px] rounded-full transition-all duration-300 
          ${isExpanded ? "bg-yellow-600 w-full" : "bg-blue-600 w-16"}`}
      />
    </motion.div>
  );
}
