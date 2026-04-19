import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { fadeUp, fadeUpSoft } from "../motion/variants";

export default function FinalCtaSection({ company }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,42,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-[2.25rem] border border-[#ff5a2a]/25 bg-[#0a3a35] p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex rounded-full border border-[#ff5a2a]/30 bg-[#ff5a2a]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#ffb39d]">
                Devis rapide
              </div>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Besoin d’un déménagement,
                <span className="block text-[#ff5a2a]">d’un débarras ou d’un montage ?</span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 lg:max-w-none">
                Demandez votre devis gratuitement dès maintenant. AS Transports
                vous accompagne avec une prise de contact simple, une réponse
                rapide et une intervention organisée selon votre besoin.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
                  Réponse rapide
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
                  Paiement CB sécurisé
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
                  Intervention soignée
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ff5a2a] px-6 py-4 text-center font-bold text-white shadow-xl shadow-black/20 transition hover:scale-[1.02]"
              >
                <ArrowRight className="h-5 w-5" />
                Obtenir mon devis gratuit
              </a>

              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white/90 transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5 text-[#ff5a2a]" />
                Appeler {company.phone}
              </a>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a2a]/15 text-[#ff5a2a]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Un parcours plus simple pour le client
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      Devis, contact direct, acompte possible et future
                      intégration du paiement sécurisé pour fluidifier la
                      réservation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}