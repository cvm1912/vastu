import React from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
          Coming Soon
        </h1>

        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-md mx-auto">
          We’re working on something amazing. This feature/page will be
          available very soon.
        </p>

        <button
          className="
            mt-6 px-6 py-3 
            bg-indigo-600 text-white 
            rounded-xl text-sm sm:text-base 
            hover:bg-indigo-700 
            shadow
          "
        >
          Notify Me
        </button>
      </motion.div>
    </section>
  );
}
