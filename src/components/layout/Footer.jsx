import { motion } from "framer-motion";
import { fadeUpSoft } from "../motion/variants";

export default function Footer({ company, navLinks, footer }) {
  const companyName = company?.name ?? "AS TRANSPORTS";
  const footerDescription =
    footer?.description ??
    "Déménagement, montage, débarras et livraison en Île-de-France";

  const legalLinks = footer?.legalLinks ?? [
    {
      label: "Mentions légales",
      href: "/mentions-legales.html",
    },
    {
      label: "Politique de confidentialité",
      href: "/politique-confidentialite.html",
    },
  ];

  const copyright =
    footer?.copyright ?? "© AS Transports · Tous droits réservés";

  const footerNavLinks = [
    { label: "Accueil", href: "#top" },
    ...(navLinks ?? []),
  ];

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
              {companyName}
            </div>
            <div className="text-sm text-white/60">{footerDescription}</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center text-sm text-white/60 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
          {footerNavLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[#ff5a2a]">
              {link.label}
            </a>
          ))}

          {legalLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-[#ff5a2a]">
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-center text-sm text-white/60">{copyright}</div>
      </motion.div>
    </footer>
  );
}