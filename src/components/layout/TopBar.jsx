export default function TopBar({ phone, phoneHref }) {
  return (
    <div className="border-b border-white/10 bg-black/20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-center text-xs sm:px-6 md:flex-row md:text-left lg:px-8">
        <p className="font-semibold text-[#ffb39d]">
          Paiement CB sécurisé • acompte possible • devis rapide
        </p>

        <a
          href={phoneHref}
          className="font-bold text-white transition hover:text-[#ff5a2a]"
        >
          {phone}
        </a>
      </div>
    </div>
  );
}