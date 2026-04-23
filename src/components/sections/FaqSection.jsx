import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeUp } from "../motion/variants";

export default function FaqSection({ faqItems }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      id="faq"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className="bg-black/15 py-14 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mx-0 md:text-left">
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
            FAQ
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
            Les questions les plus fréquentes
          </h2>

          <p className="mt-4 leading-7 text-white/75">
            Une section pensée pour rassurer rapidement, clarifier les
            prestations et répondre aux interrogations essentielles.
          </p>
        </div>

        <div className="grid gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-lg shadow-black/10 backdrop-blur"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#ff5a2a]/50 focus:ring-inset"
                >
                  <span className="pr-2 text-lg font-black text-white sm:text-xl">
                    {item.question}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#ff5a2a]/20 bg-[#ff5a2a]/10 text-[#ff5a2a]">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="mb-5 h-px bg-white/10" />
                        <p className="leading-7 text-white/75">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}