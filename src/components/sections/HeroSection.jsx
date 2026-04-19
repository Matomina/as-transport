import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpSoft,
  imageReveal,
  staggerContainer,
} from "../motion/variants";

export default function HeroSection({ hero, company }) {
  const phoneHref = company?.phoneHref ?? "tel:+33765166125";
  const phone = company?.phone ?? "07 65 16 61 25";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,90,42,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_25%)]" />
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#ff5a2a]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center"
        >
          <div className="mb-5 inline-flex w-fit rounded-full border border-[#ff5a2a]/40 bg-[#ff5a2a]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ffb39d]">
            {hero?.badge ?? "Île-de-France · France · Europe frontalière"}
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[0.96] sm:text-5xl lg:text-6xl xl:text-7xl">
            Déménagement rapide
            <span className="block text-[#ff5a2a]">et sans stress</span>
            en Île-de-France
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            AS Transports accompagne particuliers et professionnels avec une
            intervention sérieuse, un devis rapide et une organisation efficace
            pour vos déménagements, débarras, montages et livraisons.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={hero?.primaryCta?.href ?? "#contact"}
              className="inline-flex items-center justify-center rounded-2xl bg-[#ff5a2a] px-6 py-3.5 text-center font-bold text-white shadow-xl shadow-black/20 transition hover:scale-[1.02]"
            >
              {hero?.primaryCta?.label ?? "Obtenir mon devis gratuit"}
            </a>

            <a
              href={phoneHref}
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-center font-semibold text-white/90 transition hover:bg-white/10"
            >
              Appeler maintenant
            </a>
          </div>

          <div className="mt-4">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffb39d] transition hover:text-white"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ff5a2a] text-white">
                📞
              </span>
              <span>Contact direct : {phone}</span>
            </a>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
          >
            {(hero?.highlights ?? [
              "Devis rapide",
              "Paiement CB sécurisé",
              "Intervention soignée",
              "Disponible 7j/7",
            ]).map((item) => (
              <motion.div
                key={item}
                variants={fadeUpSoft}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 backdrop-blur"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {[
              {
                value: "Réponse rapide",
                text: "Une prise de contact simple pour obtenir une estimation claire.",
              },
              {
                value: "Intervention soignée",
                text: "Protection, organisation et sérieux sur chaque prestation.",
              },
              {
                value: "Particuliers & pros",
                text: "Des solutions adaptées selon le volume et le type de besoin.",
              },
            ].map((item) => (
              <motion.div
                key={item.value}
                variants={fadeUpSoft}
                className="rounded-[1.75rem] border border-white/10 bg-black/20 p-4"
              >
                <div className="text-lg font-black text-[#ff5a2a]">
                  {item.value}
                </div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:grid-cols-2"
        >
          <motion.div
            variants={imageReveal}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/25 sm:col-span-2"
          >
            <div className="absolute left-5 top-5 z-10 rounded-full border border-[#ff5a2a]/30 bg-[#062f2b]/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffb39d] backdrop-blur">
              Intervention terrain
            </div>

            <div className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
              Devis rapide
            </div>

            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/camion-demenagement.jpg"
                alt="Chargement d'un camion de déménagement"
                className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[390px]"
              />
            </div>

            <div className="absolute inset-x-3 bottom-3 rounded-[1.5rem] bg-gradient-to-t from-black/75 via-black/45 to-transparent p-5 sm:inset-x-4 sm:bottom-4 sm:p-6">
              <h3 className="max-w-lg text-2xl font-black text-white sm:text-3xl">
                Une équipe réactive pour vos besoins de transport et de
                déménagement
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                Une présentation plus concrète du terrain, du matériel et du
                sérieux de l’intervention pour rassurer immédiatement le client.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpSoft}
            className="rounded-[2rem] border border-[#ff5a2a]/20 bg-[#0a3a35] p-5 shadow-xl shadow-black/15"
          >
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffb39d]">
              Paiement
            </div>
            <h3 className="mt-3 text-2xl font-black">Paiement CB sécurisé</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Possibilité d’intégrer un règlement sécurisé en ligne pour acompte
              ou validation plus rapide de la réservation.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                Acompte possible
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                Réservation plus simple
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpSoft}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/15"
          >
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffb39d]">
              Réactivité
            </div>
            <h3 className="mt-3 text-2xl font-black">Devis rapide</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Une prise de contact claire, rapide et directe pour obtenir une
              estimation adaptée à votre projet.
            </p>

            <a
              href="#contact"
              className="mt-4 inline-flex rounded-2xl border border-[#ff5a2a]/30 px-4 py-2 text-sm font-semibold text-[#ffb39d] transition hover:bg-[#ff5a2a] hover:text-white"
            >
              Demander un devis
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}