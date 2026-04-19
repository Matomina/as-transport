import { motion } from "framer-motion";
import { fadeUp, fadeUpSoft, staggerContainer } from "../motion/variants";

export default function FaqSection({ faqItems }) {
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
            Une section utile pour rassurer, clarifier les prestations et
            améliorer la lisibilité du site.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4"
        >
          {faqItems.map((item) => (
            <motion.div
              key={item.question}
              variants={fadeUpSoft}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-black/10 md:text-left"
            >
              <h3 className="text-xl font-black">{item.question}</h3>
              <p className="mt-3 leading-7 text-white/75">{item.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}