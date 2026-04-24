import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { fadeUp, fadeUpSoft } from "../motion/variants";

const inputClass =
  "rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff5a2a]";

const selectClass =
  "rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#ff5a2a]";

const iconMap = {
  phone: Phone,
  email: Mail,
  zone: MapPin,
  availability: Clock3,
  payment: ShieldCheck,
};

const socialStyleMap = {
  whatsapp:
    "border-green-500/25 bg-green-500/10 text-green-300 hover:bg-green-500/15",
  instagram:
    "border-pink-500/25 bg-pink-500/10 text-pink-300 hover:bg-pink-500/15",
  snapchat:
    "border-yellow-400/30 bg-yellow-400/10 text-yellow-200 hover:bg-yellow-400/15",
  default:
    "border-white/20 bg-white/5 text-white/90 hover:bg-white/10",
};

const housingOptions = [
  "Studio",
  "Appartement",
  "Maison",
  "Local professionnel",
  "Cave / garage",
  "Autre",
];

const volumeOptions = [
  "Petit volume",
  "Moins de 10 m³",
  "10 à 20 m³",
  "20 à 30 m³",
  "30 m³ et plus",
  "À estimer",
];

const callbackOptions = [
  "Matin",
  "Après-midi",
  "Soir",
  "Peu importe",
];

function SocialIcon({ type }) {
  if (type === "whatsapp") {
    return <MessageCircle className="h-4 w-4" />;
  }

  if (type === "instagram") {
    return <InstagramIcon className="h-4 w-4" />;
  }

  if (type === "snapchat") {
    return <span className="text-sm leading-none">👻</span>;
  }

  return null;
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function ContactSection({
  company,
  contactForm,
  contactSection,
}) {
  const phoneHref = company?.phoneHref ?? "tel:+33765166125";
  const phone = company?.phone ?? "07 65 16 61 25";
  const emailHref = company?.emailHref ?? "mailto:alban.transports@gmail.com";
  const email = company?.email ?? "alban.transports@gmail.com";
  const whatsapp = company?.whatsapp ?? "https://wa.me/33765166125";
  const zone =
    company?.zone ??
    "Intervention principalement en Île-de-France, avec possibilité de déplacement dans toute la France et les pays frontaliers.";

  const formAction =
    contactForm?.action ?? "https://formsubmit.co/alban.transports@gmail.com";
  const formSubject =
    contactForm?.subject ?? "Nouvelle demande de devis - AS Transports";
  const successRedirect = contactForm?.successRedirect ?? "/merci.html";

  const infoCards = contactSection?.infoCards ?? [];
  const serviceOptions = contactSection?.serviceOptions ?? [];

  const primaryCta = contactSection?.primaryCta ?? {
    label: "Appeler maintenant",
    href: phoneHref,
  };

  const secondaryCta = contactSection?.secondaryCta ?? {
    label: "WhatsApp",
    href: whatsapp,
  };

  const socialCtas =
    contactSection?.socialCtas?.length > 0
      ? contactSection.socialCtas
      : [
          {
            label: secondaryCta.label ?? "WhatsApp",
            href: secondaryCta.href ?? whatsapp,
            type: "whatsapp",
          },
        ];

  return (
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
            {contactSection?.contactEyebrow ?? "Contact"}
          </div>

          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            {contactSection?.contactTitle ?? "Parlons de votre besoin"}
          </h2>

          <p className="mt-4 leading-7 text-white/75">
            {contactSection?.contactText ??
              "Vous avez un déménagement, un montage de meuble, un montage de cuisine ou un débarras à prévoir ? Contactez-nous pour obtenir un devis rapide, clair et adapté à votre situation."}
          </p>

          <div className="mt-6 inline-flex rounded-full border border-[#ff5a2a]/30 bg-[#ff5a2a]/10 px-4 py-2 text-sm font-semibold text-[#ffb39d]">
            {contactSection?.responseBadge ?? "Réponse rapide sous 24h"}
          </div>

          <div className="mt-8 space-y-4">
            {infoCards.map((item) => {
              const Icon = iconMap[item.icon];

              let content = item.text;
              let href = null;

              if (item.icon === "phone") {
                content = phone;
                href = phoneHref;
              } else if (item.icon === "email") {
                content = email;
                href = emailHref;
              } else if (item.icon === "zone") {
                content = zone;
              }

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 text-left"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a2a]/15 text-[#ff5a2a]">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">{item.title}</p>

                    {href ? (
                      <a
                        href={href}
                        className="mt-1 inline-block break-all text-sm text-white/75 transition hover:text-[#ff5a2a]"
                      >
                        {content}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-6 text-white/75">
                        {content}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-2xl bg-[#062f2b] px-6 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:scale-[1.02]"
            >
              {primaryCta.label}
            </a>

            {socialCtas.map((item) => {
              const tone =
                socialStyleMap[item.type] ?? socialStyleMap.default;

              return (
                <a
                  key={`${item.type}-${item.label}`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3 font-semibold transition ${tone}`}
                  aria-label={item.label}
                  title={item.label}
                >
                  <SocialIcon type={item.type} />
                  <span>{item.label}</span>
                </a>
              );
            })}
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
            {contactSection?.formEyebrow ?? "Formulaire de devis"}
          </div>

          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            {contactSection?.formTitle ?? "Demandez votre devis"}
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/70">
            {contactSection?.formText ??
              "Décrivez votre besoin en quelques informations essentielles. Nous revenons vers vous rapidement avec une estimation adaptée."}
          </p>

          <div className="mt-4 rounded-[1.5rem] border border-[#ff5a2a]/25 bg-[#ff5a2a]/10 p-4">
            <p className="text-sm font-semibold text-[#ffb39d]">
              {contactSection?.adviceText ??
                "Conseil : indiquez la ville de départ, la ville d’arrivée, le volume, l’étage et la date souhaitée pour obtenir une réponse plus précise."}
            </p>
          </div>

          <form
            action={formAction}
            method="POST"
            className="mt-6 grid gap-4 text-center md:text-left"
          >
            <input type="hidden" name="_subject" value={formSubject} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={successRedirect} />

            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/85">Nom</span>
                <input
                  type="text"
                  name="Nom"
                  required
                  placeholder="Votre nom"
                  autoComplete="name"
                  aria-label="Votre nom"
                  className={inputClass}
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
                  autoComplete="tel"
                  aria-label="Votre téléphone"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-white/85">Email</span>
              <input
                type="email"
                name="Email"
                required
                placeholder="Votre adresse e-mail"
                autoComplete="email"
                aria-label="Votre adresse e-mail"
                className={inputClass}
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
                aria-label="Type de prestation"
                className={selectClass}
              >
                <option value="" disabled className="text-black">
                  Sélectionnez une prestation
                </option>

                {serviceOptions.map((option) => (
                  <option key={option} value={option} className="text-black">
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/85">
                  Ville de départ
                </span>
                <input
                  type="text"
                  name="Ville de départ"
                  placeholder="Ex : Paris"
                  autoComplete="address-level2"
                  className={inputClass}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/85">
                  Ville d’arrivée
                </span>
                <input
                  type="text"
                  name="Ville d’arrivée"
                  placeholder="Ex : Créteil"
                  autoComplete="address-level2"
                  className={inputClass}
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/85">
                  Date souhaitée
                </span>
                <input
                  type="date"
                  name="Date souhaitée"
                  className={inputClass}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/85">
                  Type de logement / lieu
                </span>
                <select
                  name="Type de logement"
                  defaultValue=""
                  className={selectClass}
                >
                  <option value="" disabled className="text-black">
                    Sélectionnez une option
                  </option>

                  {housingOptions.map((option) => (
                    <option key={option} value={option} className="text-black">
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/85">
                  Étage départ
                </span>
                <input
                  type="text"
                  name="Étage départ"
                  placeholder="Ex : 3e étage"
                  className={inputClass}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/85">
                  Étage arrivée
                </span>
                <input
                  type="text"
                  name="Étage arrivée"
                  placeholder="Ex : Rez-de-chaussée"
                  className={inputClass}
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/85">
                  Ascenseur au départ
                </span>
                <select
                  name="Ascenseur départ"
                  defaultValue=""
                  className={selectClass}
                >
                  <option value="" disabled className="text-black">
                    Sélectionnez une option
                  </option>
                  <option value="Oui" className="text-black">
                    Oui
                  </option>
                  <option value="Non" className="text-black">
                    Non
                  </option>
                  <option value="Je ne sais pas" className="text-black">
                    Je ne sais pas
                  </option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/85">
                  Ascenseur à l’arrivée
                </span>
                <select
                  name="Ascenseur arrivée"
                  defaultValue=""
                  className={selectClass}
                >
                  <option value="" disabled className="text-black">
                    Sélectionnez une option
                  </option>
                  <option value="Oui" className="text-black">
                    Oui
                  </option>
                  <option value="Non" className="text-black">
                    Non
                  </option>
                  <option value="Je ne sais pas" className="text-black">
                    Je ne sais pas
                  </option>
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/85">
                  Volume approximatif
                </span>
                <select
                  name="Volume approximatif"
                  defaultValue=""
                  className={selectClass}
                >
                  <option value="" disabled className="text-black">
                    Sélectionnez une estimation
                  </option>

                  {volumeOptions.map((option) => (
                    <option key={option} value={option} className="text-black">
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/85">
                  Créneau de rappel préféré
                </span>
                <select
                  name="Créneau de rappel préféré"
                  defaultValue=""
                  className={selectClass}
                >
                  <option value="" disabled className="text-black">
                    Sélectionnez un créneau
                  </option>

                  {callbackOptions.map((option) => (
                    <option key={option} value={option} className="text-black">
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-white/85">
                Contraintes particulières
              </span>
              <textarea
                name="Contraintes particulières"
                rows="4"
                placeholder="Stationnement, accès difficile, objets lourds, besoin de démontage, horaires particuliers..."
                className={inputClass}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-white/85">
                Message
              </span>
              <textarea
                name="Message"
                required
                rows="6"
                placeholder="Décrivez votre besoin : volume, ville de départ, ville d'arrivée, étage, date souhaitée..."
                aria-label="Décrivez votre besoin"
                className={inputClass}
              />
            </label>

            <button
              type="submit"
              className="mt-2 rounded-2xl bg-[#ff5a2a] px-6 py-4 font-bold text-white shadow-lg shadow-black/15 transition hover:scale-[1.01]"
            >
              {contactSection?.submitLabel ?? "Envoyer ma demande de devis"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs leading-5 text-white/50 md:text-left">
            {contactSection?.legalNotice ??
              "En envoyant ce formulaire, vous transmettez les informations nécessaires pour être recontacté au sujet de votre demande."}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}