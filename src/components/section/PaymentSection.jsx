import { motion } from "framer-motion";
import { fadeUp, fadeUpSoft, staggerContainer } from "../motion/variants";

const paymentItems = [
  {
    title: "Carte bancaire",
    text: "Possibilité d’intégrer un paiement CB sécurisé pour faciliter la réservation ou le règlement d’un acompte.",
  },
  {
    title: "Acompte en ligne",
    text: "Le site peut permettre au client de valider plus rapidement son intervention grâce à un acompte simple à régler.",
  },
  {
    title: "Réassurance client",
    text: "Une mention claire du paiement sécurisé rassure et professionnalise immédiatement la vitrine.",
  },
];

export default function PaymentSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-[#ff5a2a]/25 bg-[#0a3a35] p-6 shadow-2xl shadow-black/20 sm:p-8"
        >
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
            Paiement
          </div>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Un paiement CB sécurisé pour simplifier la réservation
          </h2>

          <p className="mt-4 leading-7 text-white/75">
            Cette section prépare l’intégration d’un système de paiement par carte
            bancaire sécurisé afin de permettre un acompte en ligne ou une
            validation plus fluide des prestations.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              Paiement CB sécurisé
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              Acompte possible
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              Tunnel simple
            </span>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-2xl bg-[#ff5a2a] px-5 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:scale-[1.02]"
          >
            Demander un devis
          </a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4"
        >
          {paymentItems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUpSoft}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10"
            >
              <h3 className="text-2xl font-black text-[#ff5a2a]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/75">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}