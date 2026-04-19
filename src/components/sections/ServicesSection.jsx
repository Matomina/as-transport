import { motion } from "framer-motion";
import { fadeUp, fadeUpSoft, staggerContainer } from "../motion/variants";

export default function ServicesSection({ services }) {
  return (
    <motion.section
      id="services"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center md:mx-0 md:text-left">
        <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
          Nos services
        </div>

        <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
          Des prestations claires pour particuliers et professionnels
        </h2>

        <p className="mt-4 leading-7 text-white/75">
          Nous proposons une prise en charge lisible, sérieuse et efficace pour
          vous accompagner dans vos besoins de transport, manutention, montage
          et débarras.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={fadeUpSoft}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-[#ff5a2a]/40 md:text-left"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5a2a] text-lg font-black text-white md:mx-0">
              +
            </div>

            <h3 className="text-2xl font-black">{service.title}</h3>

            <p className="mt-3 text-sm leading-6 text-white/75">
              {service.text}
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex rounded-2xl border border-[#ff5a2a]/30 px-4 py-2 text-sm font-semibold text-[#ffb39d] transition hover:bg-[#ff5a2a] hover:text-white"
            >
              Demander un devis
            </a>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}