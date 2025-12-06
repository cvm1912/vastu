import { motion } from "framer-motion";

export default function WhatIsVastu() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What is <span className="text-blue-600">Vastu?</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
          Vastu Shastra is an ancient Indian science that harmonizes your living or working
          environment by balancing the five elements—Earth, Water, Fire, Air, and Space.  
          When aligned correctly, these elements support health, growth, and prosperity.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoCard
            title="Core Idea"
            text="Balancing the five elements to create harmony & positive energy flow."
          />
          <InfoCard
            title="What It Covers"
            text="Entrance placement, room direction, layout flow, colors, furniture alignment, etc."
          />
          <InfoCard
            title="Who Benefits"
            text="Homes, offices, shops — anyone seeking peace, success, and energetic balance."
          />
          <InfoCard
            title="Approach"
            text="Simple, practical remedies that improve energy without major changes."
          />
        </div>

        {/* Note */}
        <p className="mt-8 text-sm text-gray-500">
          A floor plan or site visit ensures the most accurate Vastu evaluation.
        </p>
      </motion.div>
    </section>
  );
}

/* BEAUTIFUL CARD COMPONENT WITH PREMIUM EFFECTS */
function InfoCard({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="
        group p-6 rounded-2xl 
        bg-white/60 backdrop-blur-lg 
        border border-gray-200 
        shadow-[0_8px_24px_rgba(0,0,0,0.08)]
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
        transition-all duration-300 cursor-pointer
      "
    >
      {/* Title */}
      <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
        {text}
      </p>

      {/* Animated Underline */}
      <div className="mt-3 h-[3px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
    </motion.div>
  );
}
