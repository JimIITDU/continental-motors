import { team } from "@/lib/cars";

export default function Team() {
  return (
    <section className="bg-white py-24 text-[#141414]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <p className="font-display mb-4 text-[11px] uppercase tracking-[3px] text-[#141414]/80">
          The Team
        </p>
        <h2 className="font-display mb-14 text-2xl uppercase leading-[1.4] tracking-[3px] md:text-[32px]">
          Our Dedicated Team
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {team.map((m) => (
            <article key={m.name}>
              <div className="mb-5 aspect-[8/9] overflow-hidden rounded-2xl bg-[#141414]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="font-display text-sm uppercase tracking-[2px]">
                {m.name}
              </h3>
              <p className="mt-1.5 text-xs uppercase tracking-[1.5px] text-[#141414]/60">
                {m.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
