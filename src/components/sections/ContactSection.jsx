import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock3, ShieldCheck } from "lucide-react";
import { fadeUp, fadeUpSoft } from "../motion/variants";

export default function ContactSection({ company }) {
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
            Contact
          </div>

          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Parlons de votre besoin
          </h2>

          <p className="mt-4 leading-7 text-white/75">
            Vous avez un déménagement, un montage de meuble, un montage de
            cuisine ou un débarras à prévoir ? Contactez-nous pour obtenir un
            devis rapide, clair et adapté à votre situation.
          </p>

          <div className="mt-6 inline-flex rounded-full border border-[#ff5a2a]/30 bg-[#ff5a2a]/10 px-4 py-2 text-sm font-semibold text-[#ffb39d]">
            Réponse rapide sous 24h
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a2a]/15 text-[#ff5a2a]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Téléphone</p>
                <a
                  href={company.phoneHref}
                  className="mt-1 inline-block text-sm text-white/75 transition hover:text-[#ff5a2a]"
                >
                  {company.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a2a]/15 text-[#ff5a2a]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Email</p>
                <a
                  href={company.emailHref}
                  className="mt-1 inline-block break-all text-sm text-white/75 transition hover:text-[#ff5a2a]"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a2a]/15 text-[#ff5a2a]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Zone d’intervention</p>
                <p className="mt-1 text-sm leading-6 text-white/75">
                  {company.zone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a2a]/15 text-[#ff5a2a]">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Disponibilité</p>
                <p className="mt-1 text-sm text-white/75">
                  Selon planning et sur demande
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-black/20 p-4 text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a2a]/15 text-[#ff5a2a]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Paiement</p>
                <p className="mt-1 text-sm leading-6 text-white/75">
                  Possibilité d’intégrer un règlement CB sécurisé pour un
                  acompte ou une validation plus simple.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center rounded-2xl bg-[#062f2b] px-6 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:scale-[1.02]"
            >
              Appeler maintenant
            </a>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/5"
            >
              WhatsApp
            </a>
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

          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Demandez votre devis
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/70">
            Décrivez votre besoin en quelques informations essentielles. Nous
            revenons vers vous rapidement avec une estimation adaptée.
          </p>

          <div className="mt-4 rounded-[1.5rem] border border-[#ff5a2a]/25 bg-[#ff5a2a]/10 p-4">
            <p className="text-sm font-semibold text-[#ffb39d]">
              Conseil : indiquez la ville de départ, la ville d’arrivée, le
              volume, l’étage et la date souhaitée pour obtenir une réponse plus
              précise.
            </p>
          </div>

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
                <span className="text-sm font-semibold text-white/85">Nom</span>
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
              <span className="text-sm font-semibold text-white/85">Email</span>
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
                rows="6"
                placeholder="Décrivez votre besoin : volume, ville de départ, ville d'arrivée, étage, date souhaitée..."
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff5a2a]"
              />
            </label>

            <button
              type="submit"
              className="mt-2 rounded-2xl bg-[#ff5a2a] px-6 py-4 font-bold text-white shadow-lg shadow-black/15 transition hover:scale-[1.01]"
            >
              Envoyer ma demande de devis
            </button>
          </form>

          <p className="mt-4 text-center text-xs leading-5 text-white/50 md:text-left">
            En envoyant ce formulaire, vous transmettez les informations
            nécessaires pour être recontacté au sujet de votre demande.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}