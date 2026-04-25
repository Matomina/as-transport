import { CalendarCheck, Clock3, MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function AvailabilityBanner({ availabilityBanner, company }) {
  if (!availabilityBanner) {
    return null;
  }

  return (
    <motion.section
      id="disponibilite"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden border-y border-white/10 bg-[#041f1d] py-5 sm:py-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,90,42,0.16),transparent_34%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.08),transparent_32%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a2a] text-white shadow-[0_14px_35px_rgba(255,90,42,0.28)]">
            <Clock3 className="h-6 w-6" />
          </div>

          <div>
            <div className="text-xs font-black uppercase tracking-[0.28em] text-[#ffb39d]">
              {availabilityBanner.eyebrow}
            </div>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
              {availabilityBanner.title}
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
              {availabilityBanner.text}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {availabilityBanner.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-white/80"
                >
                  <CalendarCheck className="h-3.5 w-3.5 text-[#ff7a45]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:min-w-[340px]">
          <a
            href={company.phoneHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#ff5a2a] px-5 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_14px_35px_rgba(255,90,42,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ff6b3d] active:scale-95"
          >
            <PhoneCall className="h-4 w-4" />
            {availabilityBanner.primaryCta.label}
          </a>

          <a
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:border-[#25D366]/50 hover:bg-white/[0.09] active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            {availabilityBanner.secondaryCta.label}
          </a>
        </div>
      </div>
    </motion.section>
  );
}