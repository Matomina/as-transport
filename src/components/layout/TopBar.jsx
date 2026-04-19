import { Phone, CreditCard, Zap } from "lucide-react";

export default function TopBar({ phone, phoneHref }) {
  return (
    <div className="relative border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,42,0.12),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-2 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        
        {/* LEFT - REASSURANCE */}
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

          <span className="hidden md:block">
            Intervention rapide
          </span>
        </div>

        {/* RIGHT - CALL TO ACTION */}
        <a
          href={phoneHref}
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-[#ff5a2a] hover:text-white"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff5a2a] text-white transition group-hover:bg-white group-hover:text-[#ff5a2a]">
            <Phone className="h-3 w-3" />
          </span>

          <span>Appeler : {phone}</span>
        </a>
      </div>
    </div>
  );
}