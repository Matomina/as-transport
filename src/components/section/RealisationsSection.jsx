import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpSoft,
  imageReveal,
  staggerContainer,
} from "../motion/variants";

export default function RealisationsSection({ reassuranceItems }) {
  return (
    <motion.section
      id="realisations"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center md:mx-0 md:text-left">
        <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
          Réalisations
        </div>

        <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
          Des preuves visuelles pour rassurer avant la prise de contact
        </h2>

        <p className="mt-4 leading-7 text-white/75">
          Les visuels réels permettent de montrer le sérieux de l’entreprise, la
          qualité d’exécution et le niveau de soin apporté à chaque prestation.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#0a3a35] p-3 shadow-2xl shadow-black/20 sm:p-4"
        >
          <div className="relative overflow-hidden rounded-[1.75rem]">
            <img
              src="/images/montage-avant-apres.jpg"
              alt="Exemple avant après d'un montage de meuble"
              className="h-full min-h-[360px] w-full object-cover sm:min-h-[440px]"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-center sm:p-6 md:text-left">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:text-xs">
                Avant / Après
              </div>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                Un résultat visible immédiatement
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-white/75 md:max-w-none">
                Un exemple concret qui permet au futur client de se projeter
                rapidement sur le rendu final.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col gap-6"
        >
          <motion.div
            variants={fadeUpSoft}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-black/20 sm:p-8 md:text-left"
          >
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffb39d]">
              Mise en confiance
            </div>

            <h3 className="mt-4 text-2xl font-black sm:text-3xl">
              Une image plus crédible et plus professionnelle
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              Le site doit montrer clairement l’activité, le savoir-faire, la
              capacité d’intervention et la qualité perçue de l’entreprise.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {reassuranceItems.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUpSoft}
                className="rounded-3xl border border-white/10 bg-black/20 p-5 text-center md:text-left"
              >
                <div className="text-lg font-black text-[#ff5a2a]">
                  {item.title}
                </div>

                <div className="mt-1 text-sm text-white/70">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={imageReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#0a3a35] p-3 shadow-2xl shadow-black/20 sm:p-4"
      >
        <div className="relative overflow-hidden rounded-[1.75rem]">
          <img
            src="/images/camion-demenagement.jpg"
            alt="Chargement du camion de déménagement"
            className="h-[320px] w-full object-cover sm:h-[460px]"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-center sm:p-6 md:text-left">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:text-xs">
              Logistique
            </div>

            <h3 className="mt-3 text-2xl font-black sm:text-3xl">
              Chargement, protection et organisation du transport
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/75 md:max-w-none">
              Une mise en avant visuelle du soin apporté à la manutention, à la
              préparation et à l’organisation globale de l’intervention.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}