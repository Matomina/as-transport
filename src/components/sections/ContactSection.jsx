import { motion } from "framer-motion";
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

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Parlons de votre besoin
          </h2>

          <p className="mt-4 leading-7 text-white/75">
            Vous avez un déménagement, un montage de meuble, un montage de
            cuisine ou un débarras à prévoir ? Contactez-nous pour obtenir un
            devis rapide et adapté à votre situation.
          </p>

          <div className="mt-8 space-y-4 text-white/80">
            <p>
              <span className="font-bold text-white">Téléphone :</span>{" "}
              <a href={company.phoneHref} className="hover:text-[#ff5a2a]">
                {company.phone}
              </a>
            </p>

            <p>
              <span className="font-bold text-white">Email :</span>{" "}
              <a href={company.emailHref} className="hover:text-[#ff5a2a]">
                {company.email}
              </a>
            </p>

            <p>
              <span className="font-bold text-white">Zone :</span>{" "}
              {company.zone}
            </p>

            <p>
              <span className="font-bold text-white">Disponibilité :</span>{" "}
              selon planning et sur demande
            </p>

            <p>
              <span className="font-bold text-white">Paiement :</span>{" "}
              possibilité d’intégrer un règlement CB sécurisé
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
            Pense à remplacer l’URL de redirection par ton vrai domaine une fois
            le site mis en ligne.
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
  );
}