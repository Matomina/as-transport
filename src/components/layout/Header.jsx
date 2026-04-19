import { motion } from "framer-motion";

export default function Header({ navLinks, menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-[#062f2b]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <video
              src="/videos/logo-as-transports.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full scale-125 rotate-90 object-cover"
            />
          </div>

          <div>
            <div className="text-base font-black tracking-wide text-[#ff5a2a]">
              AS TRANSPORTS
            </div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-white/60">
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
            Devis gratuit
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
              Devis gratuit
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}