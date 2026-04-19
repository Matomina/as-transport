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
      className="relative bg-black/15 py-14 sm:py-16 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,42,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
            Comment ça marche
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
            Un parcours simple en 3 étapes
          </h2>

          <p className="mt-4 leading-7 text-white/75">
            Une prise en charge rapide et claire pour vous permettre de passer
            à l’action sans stress ni perte de temps.
          </p>
        </div>

        {/* STEPS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              variants={fadeUpSoft}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-black/15 transition hover:-translate-y-1 hover:border-[#ff5a2a]/40 md:text-left"
            >
              {/* NUMERO */}
              <div className="flex items-center justify-center md:justify-start">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5a2a] text-lg font-black text-white shadow-lg shadow-black/20">
                  {step.number}

                  {/* effet glow */}
                  <div className="absolute inset-0 rounded-2xl bg-[#ff5a2a]/40 blur-xl opacity-0 transition group-hover:opacity-100" />
                </div>
              </div>

              {/* TITRE */}
              <h3 className="mt-5 text-2xl font-black">{step.title}</h3>

              {/* TEXTE */}
              <p className="mt-3 text-sm leading-6 text-white/75">
                {step.text}
              </p>

              {/* MINI BADGE */}
              <div className="mt-4 inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-white/70">
                Étape {index + 1}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA FINAL (ULTRA IMPORTANT) */}
        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-lg font-semibold text-white/85">
            Prêt à démarrer votre projet ?
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#ff5a2a] px-6 py-3 font-bold text-white shadow-xl shadow-black/20 transition hover:scale-[1.02]"
            >
              Obtenir mon devis
            </a>

            <a
              href="tel:+33765166125"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/5"
            >
              Appeler maintenant
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}