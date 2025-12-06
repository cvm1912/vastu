import { motion } from "framer-motion";

export default function OurHistoryFixed() {
  const events = [
    {
      year: "1995",
      title: "Born in Patna, Bihar",
      desc: "Achrya Ravi Kumar was born and raised in Patna where he developed an early interest in traditional Indian sciences.",
    },
    {
      year: "2016",
      title: "Started Vastu Practice",
      desc: "Began offering local consultations — focusing on practical, affordable Vastu solutions for homes and small businesses.",
    },
    {
      year: "2019",
      title: "Expanded Services",
      desc: "Started remote consultations and in-depth floor-plan analysis; recognized for consistent, pragmatic remedies.",
    },
    {
      year: "2022",
      title: "Trusted Consultant",
      desc: "Five+ years of experience with dozens of satisfied clients across Bihar — on-site and online engagements.",
    },
    {
      year: "2025",
      title: "Continued Growth",
      desc: "Ongoing community workshops, client success stories, and a commitment to accessible Vastu guidance.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our History</h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
          A short timeline showing how Achrya Ravi Kumar built his Vastu practice — practical steps,
          real clients, and steady growth rooted in tradition and modern clarity.
        </p>

        {/* TIMELINE */}
        <div className="mt-12 relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((ev, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={ev.year}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative"
                >
                  {/* Desktop: alternating layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-center">
                    {isLeft ? (
                      <>
                        <div className="text-right pr-8">
                          <TimelineCard title={ev.title} text={ev.desc} year={ev.year} />
                        </div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <div className="pl-8">
                          <TimelineCard title={ev.title} text={ev.desc} year={ev.year} />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile: simple stack */}
                  <div className="md:hidden">
                    <TimelineCard title={ev.title} text={ev.desc} year={ev.year} />
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TimelineCard({ title, text, year }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-sm font-semibold text-blue-600 mb-2">{year}</div>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}
