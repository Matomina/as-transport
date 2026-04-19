import { motion } from "framer-motion";
import { fadeUpSoft, staggerContainer } from "../motion/variants";

export default function TrustBar({ items }) {
  return (
    <section className="relative border-y border-white/10 bg-black/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,42,0.08),transparent_60%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mx-auto grid max-w-7xl gap-3 px-4 py-5 text-center sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8"
      >
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              variants={fadeUpSoft}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white/85 backdrop-blur transition hover:-translate-y-1 hover:border-[#ff5a2a]/40 hover:bg-[#ff5a2a]/10"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle,rgba(255,90,42,0.25),transparent_70%)]" />

              <div className="relative z-10 flex flex-col items-center gap-2">
                <Icon className="h-5 w-5 text-[#ff5a2a]" />
                <span>{item.label}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}