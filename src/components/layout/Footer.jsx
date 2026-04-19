import { motion } from "framer-motion";
import { fadeUpSoft } from "../motion/variants";

export default function Footer() {
  return (
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
          <a href="#etapes" className="hover:text-[#ff5a2a]">
            Comment ça marche
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
  );
}