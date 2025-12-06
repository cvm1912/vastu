import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * DecorativeBookingForm
 * - Replace BG_IMAGE_URL with your constellation / zodiac background image (large, cover).
 * - TailwindCSS + framer-motion required.
 */
export default function DecorativeBookingForm() {
  const BG_IMAGE_URL = "/images/constellation-bg.jpg"; // <-- replace with your background (or data URI / SVG)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("send form", form);
    setSent(true);
  }

  return (
    <section
      aria-label="Book demo"
      className="w-full relative overflow-hidden"
      style={{
        backgroundImage: `url(${BG_IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* subtle dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,11,34,0.85)] to-[rgba(8,11,34,0.75)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-sm">
            Book your free vastu demo now
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/80">
            Please fill in the form below so we can give you information specific to your use case.
          </p>
        </motion.div>

        {/* form card (transparent center area) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-12 bg-transparent backdrop-blur-sm px-0 md:px-6"
        >
          <form onSubmit={handleSubmit} className="mx-auto max-w-[980px]">
            {/* grid: two columns for inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 items-end">
              <UnderlinedField
                name="firstName"
                label="FIRST NAME"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name"
              />
              <UnderlinedField
                name="lastName"
                label="LAST NAME"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
              />

              <UnderlinedField
                name="email"
                label="EMAIL"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              <UnderlinedField
                name="phone"
                label="PHONE NUMBER"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98xxxxxxx"
              />

              <UnderlinedField
                name="company"
                label="COMPANY NAME"
                value={form.company}
                onChange={handleChange}
                placeholder="Company (optional)"
              />
              <UnderlinedField
                name="industry"
                label="INDUSTRY"
                value={form.industry}
                onChange={handleChange}
                placeholder="Industry (optional)"
              />
            </div>

            {/* CTA row */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg shadow-xl"
              >
                {sent ? "SENT ✓" : "GET MY FREE DEMO"}
                {/* small subtle shine */}
                <span className="absolute inset-0 rounded-full pointer-events-none opacity-10" />
              </motion.button>

              <button
                type="button"
                onClick={() => setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", industry: "" })}
                className="text-white/80 underline text-sm"
              >
                I'm happy to receive communications from
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* bottom decorative rounded pink pill like reference (optional accent) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0">
        <div className="hidden md:block w-56 h-14 rounded-full bg-pink-500/90 blur-[0.5px]" />
      </div>
    </section>
  );
}

/* UnderlinedField: label above and thin white underline input */
function UnderlinedField({ name, label, value, onChange, placeholder = "" }) {
  return (
    <label className="block">
      <span className="text-xs text-white/80 font-semibold tracking-wider">{label}</span>

      {/* underline input container */}
      <div className="mt-3 relative">
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full bg-transparent text-white placeholder-white/40 outline-none
            py-2 text-lg md:text-base
          "
          aria-label={label}
        />
        {/* thin white line */}
        <span className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-white/80" />
      </div>
    </label>
  );
}
