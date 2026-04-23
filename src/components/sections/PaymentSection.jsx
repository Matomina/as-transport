import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { fadeUp, fadeUpSoft, staggerContainer } from "../motion/variants";

export default function PaymentSection({ paymentSection, company }) {
  const section = paymentSection ?? {};

  const badges = section.badges ?? [];
  const items = section.items ?? [];

  const primaryCta = section.primaryCta ?? {
    label: "Demander un devis",
    href: "#contact",
  };

  const secondaryCta = section.secondaryCta ?? {
    label: "Appeler maintenant",
    href: company?.phoneHref ?? "tel:+33765166125",
  };

  const reassuranceCard = section.reassuranceCard ?? {
    title: "Une vraie réassurance client",
    text: "Afficher clairement le paiement sécurisé améliore la crédibilité du site et réduit les freins au moment de la prise de décision.",
  };

  return (
    <motion.section
      id="paiement"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,42,0.08),transparent_60%)]" />

      <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-[#ff5a2a]/25 bg-[#0a3a35] p-6 shadow-2xl shadow-black/20 sm:p-8"
        >
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
            {section.eyebrow ?? "Paiement"}
          </div>

          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
            {section.title ??
              "Un paiement CB sécurisé pour simplifier la réservation"}
          </h2>

          <p className="mt-4 leading-7 text-white/75">
            {section.text ??
              "Cette section prépare l’intégration d’un système de paiement par carte bancaire sécurisé afin de permettre un acompte en ligne, de rassurer le client et de fluidifier la validation des prestations."}
          </p>

          {badges.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a2a] text-white shadow-lg shadow-black/20">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  {reassuranceCard.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-white/70">
                  {reassuranceCard.text}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-2xl bg-[#ff5a2a] px-5 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:scale-[1.02] hover:bg-[#ff6a3d]"
            >
              {primaryCta.label}
            </a>

            <a
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white/90 transition hover:bg-white/5"
            >
              {secondaryCta.label}
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUpSoft}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-[#ff5a2a]/40 hover:bg-[#ff5a2a]/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff5a2a]/15 text-[#ff5a2a] transition group-hover:bg-[#ff5a2a] group-hover:text-white">
                  {Icon ? <Icon className="h-5 w-5" /> : null}
                </div>

                <h3 className="mt-4 text-xl font-black text-white sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/75">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}