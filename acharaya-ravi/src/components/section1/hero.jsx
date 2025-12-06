import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Left Text Section */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col gap-4 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Vastu Consultancy by <span className="text-red-600">Achrya Ravi Kumar</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
          Bringing balance, harmony, and positive energy into your home and workplace
          with over <strong>5+ years of Vastu expertise</strong>.
        </p>
        <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow hover:bg-blue-700 transition">
            Book Consultation
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
        className="flex-1 flex justify-center mb-8 md:mb-0"
      >
        <img 
          src="https://placehold.co/450x550?text=Vastu+Ravi" 
          alt="Vastu Ravi" 
          className="rounded-2xl shadow-lg w-64 md:w-96 object-cover" 
        />
      </motion.div>
    </section>
  );
}
