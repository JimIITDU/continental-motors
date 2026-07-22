import { services } from "@/lib/cars";

export default function Services() {
  return (
    <section className="bg-white py-24 text-[#141414]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <p className="font-display mb-4 text-[11px] uppercase tracking-[3px] text-[#141414]/80">
          Our Specialized Services
        </p>
        <h2 className="font-display mb-14 max-w-[640px] text-2xl uppercase leading-[1.4] tracking-[3px] md:text-[32px]">
          Full warranty with complete technical capacity
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title}>
              <div className="mb-5 aspect-[8/9] overflow-hidden rounded-2xl bg-[#141414]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="font-display mb-2.5 text-sm uppercase tracking-[2px]">
                {s.title}
              </h3>
              <p className="max-w-[360px] text-sm leading-relaxed text-[#141414]/65">
                {s.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
