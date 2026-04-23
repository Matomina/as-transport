import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, CreditCard, Zap } from "lucide-react";

export default function Header({ navLinks, menuOpen, setMenuOpen, company }) {
  const phoneHref = company?.phoneHref ?? "tel:+33765166125";
  const phone = company?.phone ?? "07 65 16 61 25";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#062f2b]/88 backdrop-blur-xl supports-[backdrop-filter]:bg-[#062f2b]/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,42,0.10),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* LIGNE TOP INFO */}
        <div className="flex flex-col items-center justify-between gap-3 border-b border-white/10 py-2 text-center md:flex-row md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[#ffb39d] md:justify-start">
            <span className="flex items-center gap-1">
              <CreditCard className="h-3.5 w-3.5" />
              Paiement CB sécurisé
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />

            <span className="flex items-center gap-1">
              <Zap className="h-3.5 w-3.5" />
              Devis rapide
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />

            <span className="hidden md:block">Intervention rapide</span>
          </div>

          <a
            href={phoneHref}
            aria-label={`Appeler le ${phone}`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-[#ff5a2a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff5a2a]/50 focus:ring-offset-2 focus:ring-offset-[#062f2b]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff5a2a] text-white transition group-hover:bg-white group-hover:text-[#ff5a2a]">
              <Phone className="h-3 w-3" />
            </span>
            <span>Appeler : {phone}</span>
          </a>
        </div>

        {/* LIGNE HEADER PRINCIPAL */}
        <div className="flex min-h-[76px] items-center justify-between gap-4 py-3">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-3"
            aria-label="Retour en haut de la page"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/15">
              <video
                src="/videos/logo-as-transports.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full scale-125 rotate-90 object-cover"
              />
            </div>

            <div className="min-w-0">
              <div className="truncate text-base font-black tracking-wide text-[#ff5a2a] sm:text-lg">
                AS TRANSPORTS
              </div>
              <div className="truncate text-[10px] uppercase tracking-[0.24em] text-white/60 sm:text-[11px]">
                Déménagement · Montage · Débarras
              </div>
            </div>
          </a>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 transition hover:text-[#ff5a2a] focus:outline-none focus:ring-2 focus:ring-[#ff5a2a]/50 focus:ring-offset-2 focus:ring-offset-[#062f2b]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ff5a2a]/50 focus:ring-offset-2 focus:ring-offset-[#062f2b]"
              aria-label={`Appeler le ${phone}`}
            >
              <Phone className="h-4 w-4 text-[#ff5a2a]" />
              <span>{phone}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex rounded-2xl bg-[#ff5a2a] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:scale-[1.02] hover:bg-[#ff6a3d] focus:outline-none focus:ring-2 focus:ring-[#ff5a2a]/60 focus:ring-offset-2 focus:ring-offset-[#062f2b]"
            >
              Devis gratuit
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ff5a2a]/50 focus:ring-offset-2 focus:ring-offset-[#062f2b] lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Fermer le menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleCloseMenu}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="absolute left-0 right-0 z-50 border-t border-white/10 bg-[#062f2b]/98 px-4 py-4 shadow-2xl shadow-black/25 lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:px-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleCloseMenu}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition hover:border-[#ff5a2a]/40 hover:bg-[#ff5a2a]/10 focus:outline-none focus:ring-2 focus:ring-[#ff5a2a]/50"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href={phoneHref}
                  onClick={handleCloseMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#ff5a2a]/50"
                >
                  <Phone className="h-4 w-4 text-[#ff5a2a]" />
                  Appeler maintenant
                </a>

                <a
                  href="#contact"
                  onClick={handleCloseMenu}
                  className="rounded-2xl bg-[#ff5a2a] px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:bg-[#ff6a3d] focus:outline-none focus:ring-2 focus:ring-[#ff5a2a]/60"
                >
                  Demander un devis
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}