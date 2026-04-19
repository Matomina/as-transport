import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpSoft,
  imageReveal,
  staggerContainer,
} from "../motion/variants";

export default function HeroSection({ hero }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,90,42,0.20),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_25%)]" />
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#ff5a2a]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center"
        >
          <div className="mb-5 inline-flex w-fit rounded-full border border-[#ff5a2a]/40 bg-[#ff5a2a]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ffb39d]">
            {hero.badge}
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[1] sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            {hero.text}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-2xl bg-[#ff5a2a] px-6 py-3 font-bold text-white shadow-xl shadow-black/20 transition hover:scale-[1.02]"
            >
              {hero.primaryCta.label}
            </a>

            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/5"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {hero.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:grid-cols-2"
        >
          <motion.div
            variants={imageReveal}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/25 sm:col-span-2"
          >
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Intervention terrain
            </div>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/camion-demenagement.jpg"
                alt="Chargement d'un camion de déménagement"
                className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[360px]"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpSoft}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-5"
          >
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffb39d]">
              Paiement
            </div>
            <h3 className="mt-3 text-2xl font-black">Paiement CB sécurisé</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Possibilité d’intégrer un règlement sécurisé en ligne pour acompte
              ou validation de réservation.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpSoft}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-5"
          >
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffb39d]">
              Réactivité
            </div>
            <h3 className="mt-3 text-2xl font-black">Devis rapide</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Une prise de contact simple pour obtenir une estimation adaptée à
              votre besoin.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}