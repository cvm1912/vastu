import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Home,
  Building2,
  Factory,
  MapPin,
  X,
} from "lucide-react";

export default function ConsultancyCards() {
  const options = [
    {
      title: "Personal Client Visit",
      short: "One-on-one consultation at client's location.",
      icon: <User className="w-8 h-8" />,
      details:
        "Consultant comes to meet you, inspects your location and provides personalised Vastu guidance.",
    },
    {
      title: "Home / Flat Visit",
      short: "Complete Vastu assessment for homes.",
      icon: <Home className="w-8 h-8" />,
      details:
        "Detailed survey of your home or flat with directions, layout corrections and remedies.",
    },
    {
      title: "Office Visit",
      short: "Corporate & small office consultancy.",
      icon: <Building2 className="w-8 h-8" />,
      details:
        "Office inspection to improve productivity, seating arrangements and flow of energy.",
    },
    {
      title: "Factory Visit",
      short: "Industrial Vastu consultancy.",
      icon: <Factory className="w-8 h-8" />,
      details:
        "Factory layout, production flow, staff placement and industrial remedies.",
    },
    {
      title: "Developing Project (Site)",
      short: "Consultancy for under-construction sites.",
      icon: <MapPin className="w-8 h-8" />,
      details:
        "Best for new projects—plot orientation, block planning, utility placements & Vastu blueprinting.",
    },
  ];

  const [selected, setSelected] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const close = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <section
      className="
        w-full 
        px-4 
        py-10 
        sm:px-6 
        md:px-10 
        bg-gray-50 
        pt-28   /* FIXED: Prevents navbar overlap */
      "
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Consultancy Services
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Tap a card to view details and booking options.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {options.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(item)}
              className="
                bg-white 
                p-6 
                rounded-2xl 
                shadow 
                hover:shadow-lg 
                cursor-pointer 
              "
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-50 rounded-xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.short}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-xs text-gray-500">
                <span>Tap for details</span>
                <span className="text-indigo-600 font-medium">Book</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-xl p-6 sm:p-8 relative"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 p-2 rounded-md hover:bg-gray-200"
              >
                <X />
              </button>

              <h3 className="text-2xl font-semibold">{selected.title}</h3>
              <p className="mt-3 text-gray-700">{selected.details}</p>

              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                  Request Consultation
                </button>
                <button className="px-4 py-2 border rounded-lg">
                  Call / Book Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
