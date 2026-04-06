import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpSoft = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageReveal = {
  hidden: { opacity: 0, y: 80, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopPopup, setShowTopPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTopPopup(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Déménagement",
      text: "Prise en charge de votre déménagement en Île-de-France avec manutention, chargement, transport et déchargement dans les meilleures conditions.",
    },
    {
      title: "Montage de meubles",
      text: "Assemblage et installation de meubles à domicile avec intervention rapide, soignée et adaptée à votre espace.",
    },
    {
      title: "Montage cuisine",
      text: "Montage et mise en place de cuisines avec méthode, précision et respect de votre intérieur.",
    },
    {
      title: "Débarras",
      text: "Débarras de logement, cave, garage, local ou encombrants avec intervention efficace et organisée.",
    },
  ];

  const packages = [
    {
      title: "Studio / F2",
      price: "À partir de 550 € TTC",
      note: "Formule Île-de-France",
    },
    {
      title: "F3 / F4",
      price: "À partir de 700 € TTC",
      note: "Formule Île-de-France",
    },
    {
      title: "F5",
      price: "À partir de 850 € TTC",
      note: "Formule Île-de-France",
    },
    {
      title: "Maison",
      price: "Sur devis",
      note: "Île-de-France • étude selon volume",
    },
    {
      title: "France & Europe frontalière",
      price: "Sur devis",
      note: "Étude personnalisée",
    },
  ];

  const steps = [
    "Prise de contact et demande de devis",
    "Analyse du besoin et estimation",
    "Validation de l'intervention",
    "Intervention sur place",
    "Suivi et satisfaction client",
  ];

  const faqItems = [
    {
      question: "Dans quelle zone intervenez-vous ?",
      answer:
        "AS Transports intervient principalement en Île-de-France, mais peut également se déplacer dans toute la France ainsi que dans les pays frontaliers selon la nature de la prestation et le volume à transporter.",
    },
    {
      question: "Comment obtenir un devis ?",
      answer:
        "Il suffit de nous contacter par téléphone, par e-mail ou via le formulaire du site. Nous analysons votre besoin afin de vous proposer une estimation adaptée.",
    },
    {
      question: "Proposez-vous le montage de meubles et de cuisines ?",
      answer:
        "Oui, nous réalisons le montage de meubles ainsi que le montage et la mise en place de cuisines selon votre projet et vos contraintes.",
    },
    {
      question: "Les tarifs affichés sont-ils fixes ?",
      answer:
        "Les tarifs affichés servent de base indicative. Le tarif final dépend du volume, de la distance, de l'accès au logement et du type exact d'intervention demandé.",
    },
  ];

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const reassuranceItems = [
    {
      title: "Vrai terrain",
      text: "Des photos réelles illustrent concrètement les interventions menées par l’entreprise sur le terrain.",
    },
    {
      title: "Preuve visuelle",
      text: "Les visuels avant / après permettent d’apprécier immédiatement la qualité, le soin et l’efficacité des prestations réalisées.",
    },
    {
      title: "Communication claire",
      text: "Les informations essentielles sont présentées avec clarté pour permettre au client de comprendre rapidement l’offre et ses avantages.",
    },
  ];

  return (
    <>
      {showTopPopup && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45 }}
          className="fixed left-1/2 top-4 z-[100] w-[calc(100%-24px)] max-w-xl -translate-x-1/2"
        >
          <div className="rounded-[1.75rem] border border-[#ff5a2a]/30 bg-[#062f2b]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-5">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a2a] text-lg font-black text-white">
                !
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffb39d]">
                  Devis rapide
                </p>
                <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
                  Besoin d’un déménagement ou d’un débarras ?
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Contactez AS Transports pour obtenir une estimation rapide et une
                  intervention adaptée à votre besoin en Île-de-France.
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    onClick={() => setShowTopPopup(false)}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#ff5a2a] px-4 py-3 text-sm font-bold text-white transition hover:scale-[1.01]"
                  >
                    Demander un devis
                  </a>
                  <a
                    href="tel:+33765166125"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                  >
                    Appeler le 07 65 16 61 25
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowTopPopup(false)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Fermer le popup"
              >
                ×
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="min-h-screen bg-[#062f2b] text-white selection:bg-[#ff5a2a] selection:text-white">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#062f2b]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-3 text-center md:flex-row md:justify-between md:text-left sm:px-6 lg:px-8">
            <a
              href="#top"
              className="flex w-full flex-col items-center justify-center gap-2 text-center md:w-auto md:flex-row md:justify-start md:gap-3 md:text-left"
            >
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-14 sm:w-14">
                <video
                  src="/videos/logo-as-transports.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full scale-125 rotate-90 object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="text-base font-black tracking-wide text-[#ff5a2a] sm:text-lg">
                  AS TRANSPORTS
                </div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/60 sm:text-xs">
                  Déménagement · Montage · Débarras
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition hover:text-[#ff5a2a]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden rounded-2xl bg-[#ff5a2a] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:scale-[1.02] sm:inline-flex"
              >
                Demander un devis
              </a>

              <button
                type="button"
                aria-label="Ouvrir le menu"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:hidden"
              >
                <span className="space-y-1.5">
                  <span className="block h-0.5 w-5 bg-white" />
                  <span className="block h-0.5 w-5 bg-white" />
                  <span className="block h-0.5 w-5 bg-white" />
                </span>
              </button>
            </div>
          </div>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.35 }}
              className="border-t border-white/10 bg-[#062f2b] md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-center sm:px-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-[#ff5a2a] px-4 py-3 text-center text-sm font-bold text-white"
                >
                  Demander un devis
                </a>
              </div>
            </motion.div>
          )}
        </header>

        <main id="top">
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,90,42,0.20),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_25%)]" />
            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#ff5a2a]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="flex flex-col justify-center"
              >
                <div className="mb-5 inline-flex w-fit self-center rounded-full border border-[#ff5a2a]/40 bg-[#ff5a2a]/10 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ffb39d] sm:text-xs md:self-start">
                  Île-de-France · France · Europe frontalière
                </div>

                <h1 className="max-w-3xl text-center text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl xl:text-7xl md:text-left">
                  Déménagement, montage et débarras
                  <span className="block text-[#ff5a2a]">avec un service sérieux</span>
                  et une équipe réactive.
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-white/75 sm:text-lg md:mx-0 md:text-left">
                  AS Transports accompagne les particuliers et les professionnels
                  pour leurs besoins de déménagement, de montage de meubles, de
                  montage de cuisine, de débarras et de livraison avec une
                  intervention soignée et efficace.
                </p>

                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap md:items-start">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#ff5a2a] px-6 py-3 font-bold text-white shadow-xl shadow-black/20 transition hover:scale-[1.02]"
                  >
                    Obtenir un devis gratuit
                  </a>
                  <a
                    href="#realisations"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/5"
                  >
                    Voir nos réalisations
                  </a>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="mt-10 grid grid-cols-1 gap-4 text-center sm:grid-cols-3 md:text-left"
                >
                  {[
                    {
                      title: "IDF",
                      text: "Intervention principalement en Île-de-France, avec possibilité de déplacement dans toute la France et les pays frontaliers selon votre projet.",
                    },
                    {
                      title: "France",
                      text: "Déplacements possibles sur l’ensemble du territoire selon la nature de l’intervention.",
                    },
                    {
                      title: "Europe",
                      text: "Étude personnalisée pour les pays européens frontaliers à la France.",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      variants={fadeUpSoft}
                      className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
                    >
                      <div className="text-2xl font-black text-[#ff5a2a]">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-white/65">
                        {item.text}
                      </div>
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
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 text-center shadow-2xl shadow-black/25 sm:col-span-2 sm:p-4"
                >
                  <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full border border-[#ff5a2a]/30 bg-[#ff5a2a]/10 px-3 py-1 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffb39d] sm:text-xs">
                    Logo de l’entreprise
                  </div>
                  <div className="overflow-hidden rounded-[1.5rem] bg-black pt-10 sm:pt-12">
                    <video
                      src="/videos/logo-as-transports.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="mx-auto h-[220px] w-full max-w-full scale-[1.22] rotate-90 object-cover sm:h-[280px] lg:h-[320px]"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={imageReveal}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 text-center shadow-xl shadow-black/20 transition hover:-translate-y-1 sm:p-4 md:text-left"
                >
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    Avant / Après
                  </div>
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img
                      src="/images/montage-avant-apres.jpg"
                      alt="Avant après d'un montage de meuble réalisé par AS Transports"
                      className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[280px]"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={imageReveal}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 text-center shadow-xl shadow-black/20 transition hover:-translate-y-1 sm:p-4 md:text-left"
                >
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    Chargement camion
                  </div>
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img
                      src="/images/camion-demenagement.jpg"
                      alt="Chargement d'un camion de déménagement par AS Transports"
                      className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[280px]"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

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
                Des prestations claires et adaptées à vos besoins
              </h2>
              <p className="mt-4 leading-7 text-white/75">
                Nous proposons une prise en charge simple, lisible et efficace
                pour vous accompagner dans vos projets de transport, de manutention,
                de montage et de débarras.
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
                </motion.article>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            id="realisations"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="bg-black/15 py-14 sm:py-16 lg:py-24"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto mb-12 max-w-3xl text-center md:mx-0 md:text-left">
                <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
                  Nos réalisations
                </div>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
                  Des interventions concrètes pour vous permettre de choisir en
                  toute confiance
                </h2>
                <p className="mt-4 leading-7 text-white/75">
                  Les visuels réels présentés permettent de découvrir le sérieux
                  des prestations, la qualité d’exécution et le niveau d’exigence
                  apporté à chaque intervention.
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
                        Cas concret
                      </div>
                      <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                        Montage de meuble : un résultat visible immédiatement
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-white/75 md:max-w-none">
                        Un exemple concret qui permet d’apprécier visuellement la
                        qualité du travail réalisé et de se projeter plus facilement.
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
                      Une vitrine plus crédible et plus professionnelle
                    </h3>
                    <p className="mt-4 leading-7 text-white/75">
                      Le site présente clairement l’activité de l’entreprise, son
                      savoir-faire, sa capacité d’intervention et le niveau de
                      professionnalisme attendu par ses clients.
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
                        <div className="mt-1 text-sm text-white/70">
                          {item.text}
                        </div>
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
                      Une mise en avant visuelle du soin apporté à la manutention,
                      à la préparation et à l’organisation globale de l’intervention.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="tarifs"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
          >
            <div className="mx-auto mb-12 max-w-3xl text-center md:mx-0 md:text-left">
              <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
                Tarifs
              </div>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
                Des formules lisibles pour un premier repère tarifaire
              </h2>
              <p className="mt-4 leading-7 text-white/75">
                Les prix ci-dessous donnent une base indicative avant
                l'établissement d'un devis personnalisé selon le volume, l'accès
                et la distance.
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
                  Formules avec base tarifaire indicative
                </h3>
                <p className="mt-4 leading-7 text-white/75">
                  Pour les interventions en Île-de-France, plusieurs repères
                  tarifaires peuvent être proposés selon le type de logement, le
                  volume à traiter et les conditions d’accès.
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
                  Pour toute intervention hors Île-de-France, partout en France
                  ou dans les pays européens frontaliers, une étude personnalisée
                  est réalisée afin de proposer un devis précis, cohérent et
                  adapté au besoin réel.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            id="faq"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="bg-black/15 py-14 sm:py-16 lg:py-24"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto mb-12 max-w-3xl text-center md:mx-0 md:text-left">
                <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
                  FAQ
                </div>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
                  Les questions les plus fréquentes
                </h2>
                <p className="mt-4 leading-7 text-white/75">
                  Une section utile pour rassurer, clarifier les prestations et
                  améliorer la lisibilité du site.
                </p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="grid gap-4"
              >
                {faqItems.map((item) => (
                  <motion.div
                    key={item.question}
                    variants={fadeUpSoft}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-black/10 md:text-left"
                  >
                    <h3 className="text-xl font-black">{item.question}</h3>
                    <p className="mt-3 leading-7 text-white/75">{item.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden bg-[#ff5a2a] py-14 text-[#062f2b] sm:py-16 lg:py-20"
          >
            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#062f2b]/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
              <div className="text-sm font-black uppercase tracking-[0.35em]">
                Demande de devis
              </div>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
                Une prise de contact simple, rapide et efficace
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#062f2b]/85">
                L'objectif du site est de rassurer, présenter les prestations et
                faciliter la demande de devis avec un formulaire clair et accessible
                sur mobile comme sur ordinateur.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+33765166125"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#062f2b] px-6 py-3 font-bold text-white shadow-xl shadow-black/15"
                >
                  Appeler maintenant
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#062f2b]/20 px-6 py-3 font-bold"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24"
          >
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                className="text-center md:text-left"
              >
                <motion.div variants={fadeUpSoft} className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
                  Fonctionnement
                </motion.div>
                <motion.h2 variants={fadeUpSoft} className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
                  Un parcours simple en 5 étapes
                </motion.h2>

                <div className="mt-8 space-y-4">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step}
                      variants={fadeUpSoft}
                      className="flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-left shadow-lg shadow-black/10"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a2a] text-lg font-black text-white">
                        {index + 1}
                      </div>
                      <div className="text-base font-semibold sm:text-lg">
                        {step}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUpSoft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-black/20 sm:p-8 md:text-left"
              >
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  Notre engagement
                </div>
                <h3 className="text-2xl font-black">
                  Un accompagnement sérieux pour chaque intervention
                </h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-white/75">
                  <p>
                    Chez AS Transports, chaque demande est étudiée avec attention
                    afin de proposer une intervention adaptée au besoin réel du
                    client, qu’il s’agisse d’un déménagement, d’un débarras, d’un
                    montage de meuble ou d’une livraison.
                  </p>
                  <p>
                    Notre objectif est de garantir un service réactif, une
                    organisation claire et une exécution soignée, aussi bien pour
                    les particuliers que pour les professionnels.
                  </p>
                  <p>
                    Nous mettons un point d’honneur à offrir une prestation fiable,
                    avec une communication simple, des délais respectés et une vraie
                    attention portée à la satisfaction client.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="contact"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                variants={fadeUpSoft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-black/20 sm:p-8 md:text-left"
              >
                <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
                  Contact
                </div>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Parlons de votre besoin
                </h2>
                <p className="mt-4 leading-7 text-white/75">
                  Vous avez un déménagement, un montage de meuble, un montage de
                  cuisine ou un débarras à prévoir ? Contactez-nous pour obtenir
                  un devis rapide et adapté à votre situation.
                </p>

                <div className="mt-8 space-y-4 text-white/80">
                  <p>
                    <span className="font-bold text-white">Téléphone :</span>{" "}
                    <a href="tel:+33765166125" className="hover:text-[#ff5a2a]">
                      07 65 16 61 25
                    </a>
                  </p>
                  <p>
                    <span className="font-bold text-white">Email :</span>{" "}
                    <a
                      href="mailto:alban.transports@gmail.com"
                      className="hover:text-[#ff5a2a]"
                    >
                      alban.transports@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-bold text-white">Zone :</span>{" "}
                    Intervention principalement en Île-de-France, avec possibilité
                    de déplacement dans toute la France et les pays frontaliers.
                  </p>
                  <p>
                    <span className="font-bold text-white">Disponibilité :</span>{" "}
                    selon planning et sur demande
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUpSoft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-black/20 sm:p-8 md:text-left"
              >
                <div className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffb39d]">
                  Formulaire de devis
                </div>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Demandez votre devis
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  Le formulaire peut être utilisé immédiatement. Pense à remplacer
                  l'URL de redirection par ton vrai domaine une fois le site mis en
                  ligne.
                </p>

                <form
                  action="https://formsubmit.co/alban.transports@gmail.com"
                  method="POST"
                  className="mt-6 grid gap-4 text-center md:text-left"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nouvelle demande de devis - AS Transports"
                  />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_next"
                    value="http://localhost:5173/merci.html"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-white/85">
                        Nom
                      </span>
                      <input
                        type="text"
                        name="Nom"
                        required
                        placeholder="Votre nom"
                        className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff5a2a]"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-white/85">
                        Téléphone
                      </span>
                      <input
                        type="tel"
                        name="Téléphone"
                        required
                        placeholder="Votre téléphone"
                        className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff5a2a]"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-white/85">
                      Email
                    </span>
                    <input
                      type="email"
                      name="Email"
                      required
                      placeholder="Votre adresse e-mail"
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff5a2a]"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-white/85">
                      Type de prestation
                    </span>
                    <select
                      name="Prestation"
                      required
                      defaultValue=""
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#ff5a2a]"
                    >
                      <option value="" disabled className="text-black">
                        Sélectionnez une prestation
                      </option>
                      <option value="Déménagement" className="text-black">
                        Déménagement
                      </option>
                      <option value="Montage de meubles" className="text-black">
                        Montage de meubles
                      </option>
                      <option value="Montage cuisine" className="text-black">
                        Montage cuisine
                      </option>
                      <option value="Débarras" className="text-black">
                        Débarras
                      </option>
                      <option value="Livraison" className="text-black">
                        Livraison
                      </option>
                    </select>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-white/85">
                      Message
                    </span>
                    <textarea
                      name="Message"
                      required
                      rows="5"
                      placeholder="Décrivez votre besoin : volume, ville de départ, ville d'arrivée, étage, date souhaitée..."
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff5a2a]"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 rounded-2xl bg-[#ff5a2a] px-6 py-4 font-bold text-white shadow-lg shadow-black/15 transition hover:scale-[1.01]"
                  >
                    Envoyer la demande
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.section>
        </main>

        <footer className="border-t border-white/10 bg-black/20">
          <motion.div
            variants={fadeUpSoft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <div>
                <div className="text-xl font-black text-[#ff5a2a]">
                  AS TRANSPORTS
                </div>
                <div className="text-sm text-white/60">
                  Déménagement, montage, débarras et livraison en Île-de-France
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-center text-sm text-white/60 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
              <a href="#top" className="hover:text-[#ff5a2a]">
                Accueil
              </a>
              <a href="#services" className="hover:text-[#ff5a2a]">
                Services
              </a>
              <a href="#contact" className="hover:text-[#ff5a2a]">
                Contact
              </a>
              <a href="/mentions-legales.html" className="hover:text-[#ff5a2a]">
                Mentions légales
              </a>
              <a
                href="/politique-confidentialite.html"
                className="hover:text-[#ff5a2a]"
              >
                Politique de confidentialité
              </a>
            </div>

            <div className="text-center text-sm text-white/60">
              © AS Transports · Tous droits réservés
            </div>
          </motion.div>
        </footer>

        <a
          href="https://wa.me/33765166125"
          target="_blank"
          rel="noreferrer"
          aria-label="Contacter AS Transports sur WhatsApp"
          className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:scale-105 active:scale-95"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="h-6 w-6"
          />
        </a>
      </div>
    </>
  );
}