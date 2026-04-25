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

  const badge = hero?.badge ?? "Île-de-France · France · Europe";
  const title =
    hero?.title ??
    "Déménagement rapide et organisé en Île-de-France, France et Europe";
  const text =
    hero?.text ??
    "AS Transports accompagne particuliers et professionnels avec une intervention sérieuse, un devis clair et une organisation efficace pour vos déménagements, débarras, montages et livraisons.";

  const primaryCta = hero?.primaryCta ?? {
    label: "Obtenir mon devis gratuit",
    href: "#contact",
  };

  const secondaryCta = hero?.secondaryCta ?? {
    label: "Appeler maintenant",
    href: phoneHref,
  };

  const highlights = hero?.highlights ?? [
    "Devis rapide",
    "Réponse claire",
    "Intervention soignée",
    "Particuliers & professionnels",
  ];

  const stats = hero?.stats ?? [
    {
      value: "Réponse rapide",
      text: "Une prise de contact simple pour obtenir une estimation claire.",
    },
    {
      value: "Devis personnalisé",
      text: "Une estimation adaptée selon le volume, la distance et les accès.",
    },
    {
      value: "Particuliers & pros",
      text: "Des solutions adaptées selon le type de besoin et les contraintes terrain.",
    },
  ];

  const showcase = hero?.showcase ?? {
    topLeftBadge: "Intervention terrain",
    topRightBadge: "Devis rapide",
    imageSrc: "/images/branding/hero.png",
    videoSrc: "",
    imageAlt: "Chargement d'un camion de déménagement AS Transports",
    title: "Une équipe réactive pour vos besoins de transport et de déménagement",
    text: "Une présentation concrète du terrain, du matériel et du sérieux de l’intervention pour rassurer immédiatement le client.",
  };

  const mediaSrc =
    showcase.videoSrc ??
    showcase.imageSrc ??
    company?.heroVideo ??
    company?.heroImage ??
    "/images/branding/hero.png";

  const isVideo =
    Boolean(showcase.videoSrc || company?.heroVideo) ||
    /\.(mp4|webm|ogg)$/i.test(mediaSrc);

  const paymentCard = hero?.paymentCard ?? {
    eyebrow: "Paiement",
    title: "Paiement sécurisé en préparation",
    text: "Le site prépare une future intégration de paiement sécurisé pour faciliter la réservation, l’acompte ou la validation de certaines prestations après devis.",
    tags: ["Acompte possible après devis", "Réservation plus simple"],
  };

  const quoteCard = hero?.quoteCard ?? {
    eyebrow: "Réactivité",
    title: "Devis rapide",
    text: "Une prise de contact claire, rapide et directe pour obtenir une estimation adaptée à votre projet.",
    cta: {
      label: "Demander un devis",
      href: "#contact",
    },
  };

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,90,42,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_25%)]" />
      <div className="absolute left-0 top-0 -z-10 h-64 w-64 rounded-full bg-[#ff5a2a]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center"
        >
          <p className="mb-5 inline-flex w-fit rounded-full border border-[#ff5a2a]/40 bg-[#ff5a2a]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ffb39d]">
            {badge}
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-[0.96] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            {text}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-2xl bg-[#ff5a2a] px-6 py-3.5 text-center font-bold text-white shadow-xl shadow-black/20 transition duration-200 hover:scale-[1.02] hover:bg-[#ff6b3f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb39d]"
            >
              {primaryCta.label}
            </a>

            <a
              href={secondaryCta.href ?? phoneHref}
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-center font-semibold text-white/90 transition duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {secondaryCta.label}
            </a>
          </div>

          <div className="mt-4">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffb39d] transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb39d]"
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
            {highlights.map((item) => (
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
            {stats.map((item) => (
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
          <motion.article
            variants={imageReveal}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/25 sm:col-span-2"
          >
            <div className="absolute left-5 top-5 z-10 rounded-full border border-[#ff5a2a]/30 bg-[#062f2b]/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffb39d] backdrop-blur">
              {showcase.topLeftBadge}
            </div>

            <div className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
              {showcase.topRightBadge}
            </div>

            <div className="overflow-hidden rounded-[1.5rem] bg-black/30">
              {isVideo ? (
                <video
                  className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[390px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={showcase.imageSrc || company?.heroImage}
                  aria-label={showcase.imageAlt}
                >
                  <source src={mediaSrc} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={mediaSrc}
                  alt={showcase.imageAlt}
                  className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[390px]"
                  loading="eager"
                  decoding="async"
                />
              )}
            </div>

            <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-[1.5rem] bg-gradient-to-t from-black/80 via-black/45 to-transparent p-5 sm:inset-x-4 sm:bottom-4 sm:p-6">
              <h3 className="max-w-lg text-2xl font-black text-white sm:text-3xl">
                {showcase.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                {showcase.text}
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={fadeUpSoft}
            className="rounded-[2rem] border border-[#ff5a2a]/20 bg-[#0a3a35] p-5 shadow-xl shadow-black/15"
          >
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffb39d]">
              {paymentCard.eyebrow}
            </div>
            <h3 className="mt-3 text-2xl font-black">{paymentCard.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              {paymentCard.text}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {paymentCard.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>

          <motion.article
            variants={fadeUpSoft}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/15"
          >
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffb39d]">
              {quoteCard.eyebrow}
            </div>
            <h3 className="mt-3 text-2xl font-black">{quoteCard.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              {quoteCard.text}
            </p>

            <a
              href={quoteCard.cta.href}
              className="mt-4 inline-flex rounded-2xl border border-[#ff5a2a]/30 px-4 py-2 text-sm font-semibold text-[#ffb39d] transition hover:bg-[#ff5a2a] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb39d]"
            >
              {quoteCard.cta.label}
            </a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}