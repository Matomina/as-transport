export default function TrustBar({ items }) {
  return (
    <section className="border-y border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-center sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}