import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function TestimonialsSection({ testimonialsSection, testimonials }) {
  if (!testimonials?.length) {
    return null;
  }

  return (
    <motion.section
      id="avis"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      className="relative overflow-hidden bg-[#052723] py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,90,42,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="text-sm font-black uppercase tracking-[0.32em] text-[#ffb39d]">
            {testimonialsSection.eyebrow}
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {testimonialsSection.title}
          </h2>

          <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
            {testimonialsSection.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#ff7a45]/40 hover:bg-white/[0.08]"
            >
              <Quote className="absolute right-5 top-5 h-10 w-10 text-[#ff7a45]/20 transition group-hover:text-[#ff7a45]/35" />

              <div className="mb-5 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-[#ffb545] text-[#ffb545]"
                  />
                ))}
              </div>

              <p className="relative z-10 text-sm leading-7 text-white/82 sm:text-[15px]">
                “{testimonial.content}”
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <div className="font-black text-white">{testimonial.name}</div>
                <div className="mt-1 text-sm text-white/55">
                  {testimonial.context}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}