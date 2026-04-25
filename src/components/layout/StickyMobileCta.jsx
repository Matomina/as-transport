import { FileText, MessageCircle, Phone } from "lucide-react";

export default function StickyMobileCta({ company }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#041f1d]/95 px-3 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.35)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={company.phoneHref}
          aria-label="Appeler AS Transports"
          className="flex min-h-12 flex-col items-center justify-center rounded-2xl bg-white/10 px-2 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white transition active:scale-95"
        >
          <Phone className="mb-1 h-4 w-4 text-[#ff7a45]" />
          Appeler
        </a>

        <a
          href={company.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Contacter AS Transports sur WhatsApp"
          className="flex min-h-12 flex-col items-center justify-center rounded-2xl bg-white/10 px-2 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white transition active:scale-95"
        >
          <MessageCircle className="mb-1 h-4 w-4 text-[#25D366]" />
          WhatsApp
        </a>

        <a
          href="#contact"
          aria-label="Demander un devis gratuit"
          className="flex min-h-12 flex-col items-center justify-center rounded-2xl bg-[#ff5a2a] px-2 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-[0_10px_25px_rgba(255,90,42,0.3)] transition active:scale-95"
        >
          <FileText className="mb-1 h-4 w-4" />
          Devis
        </a>
      </div>
    </div>
  );
}