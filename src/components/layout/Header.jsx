import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Header({ navLinks, menuOpen, setMenuOpen, company }) {
  const phoneHref = company?.phoneHref ?? "tel:+33765166125";
  const phone = company?.phone ?? "07 65 16 61 25";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#062f2b]/88 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3">
          <a href="#top" className="flex min-w-0 items-center gap-3">
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

          <nav className="hidden items-center gap-6 xl:flex">
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

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-[#ff5a2a]" />
              <span className="hidden lg:inline">{phone}</span>
              <span className="lg:hidden">Appeler</span>
            </a>

            <a
              href="#contact"
              className="inline-flex rounded-2xl bg-[#ff5a2a] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:scale-[1.02]"
            >
              Devis gratuit
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="border-t border-white/10 bg-[#062f2b]/98 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-center sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition hover:border-[#ff5a2a]/40 hover:bg-[#ff5a2a]/10"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={phoneHref}
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90"
              >
                <Phone className="h-4 w-4 text-[#ff5a2a]" />
                Appeler maintenant
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl bg-[#ff5a2a] px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-black/20"
              >
                Demander un devis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}