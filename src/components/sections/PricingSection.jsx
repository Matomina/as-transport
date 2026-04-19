import { motion } from "framer-motion";
import { fadeUp, fadeUpSoft, staggerContainer } from "../motion/variants";

export default function PricingSection({ packages }) {
  return (
    <motion.section
      id="tarifs"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="bg-black/15 py-14 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mx-0 md:text-left">
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
            Tarifs
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
            Des repères tarifaires simples avant devis
          </h2>

          <p className="mt-4 leading-7 text-white/75">
            Les prix ci-dessous donnent une première base avant
            l’établissement d’un devis personnalisé selon le volume, l’accès, la
            distance et la nature exacte de l’intervention.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-5"
        >
          {packages.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUpSoft}
              className="rounded-[2rem] border border-[#ff5a2a]/25 bg-[#0a3a35] p-6 text-center shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#ff5a2a]/50 md:text-left"
            >
              <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffb39d]">
                {item.note}
              </div>

              <div className="mt-4 text-3xl font-black">{item.title}</div>

              <div className="mt-6 rounded-2xl bg-[#ff5a2a] px-4 py-4 text-center text-xl font-black text-white">
                {item.price}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-6 lg:grid-cols-2"
        >
          <motion.div
            variants={fadeUpSoft}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-black/15 md:text-left"
          >
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffb39d]">
              Île-de-France
            </div>

            <h3 className="mt-3 text-2xl font-black">
              Formules avec base indicative
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              Pour les prestations en Île-de-France, plusieurs repères tarifaires
              peuvent être affichés pour aider le client à se situer avant la
              demande de devis.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpSoft}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-black/15 md:text-left"
          >
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffb39d]">
              France & Europe frontalière
            </div>

            <h3 className="mt-3 text-2xl font-black">
              Étude personnalisée sur devis
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              Pour toute intervention hors Île-de-France, une étude personnalisée
              permet de proposer un devis plus précis et cohérent avec le besoin
              réel.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}