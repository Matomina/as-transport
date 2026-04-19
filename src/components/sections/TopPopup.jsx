import { motion } from "framer-motion";

export default function TopPopup({
  showTopPopup,
  setShowTopPopup,
  phoneHref,
  phone,
}) {
  if (!showTopPopup) return null;

  return (
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
                href={phoneHref}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
              >
                Appeler le {phone}
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
  );
}