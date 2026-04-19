import { motion } from "framer-motion";
import { fadeUp, fadeUpSoft, staggerContainer } from "../motion/variants";

export default function StepsSection({ steps }) {
  return (
    <motion.section
      id="etapes"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className="bg-black/15 py-14 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
            Comment ça marche
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
            Un parcours simple et rapide
          </h2>

          <p className="mt-4 leading-7 text-white/75">
            Le site doit permettre au client de comprendre immédiatement comment
            se déroule la prise en charge, du devis jusqu’à l’intervention.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.article
              key={step.number}
              variants={fadeUpSoft}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-black/15 md:text-left"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5a2a] text-lg font-black text-white">
                {step.number}
              </div>

              <h3 className="mt-5 text-2xl font-black">{step.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/75">
                {step.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}