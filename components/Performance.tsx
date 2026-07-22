import { performanceCars } from "@/lib/cars";

export default function Performance() {
  return (
    <section className="bg-white pb-24 text-[#141414]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <p className="font-display mb-4 text-[11px] uppercase tracking-[3px] text-[#141414]/80">
          Elite Performance
        </p>
        <h2 className="font-display mb-14 text-2xl uppercase leading-[1.4] tracking-[3px] md:text-[32px]">
          Performance Icons
        </h2>

        <div className="grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {performanceCars.map((car) => (
            <article key={`${car.brand}-${car.model}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#141414]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  {car.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium tracking-wide text-[#141414]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-display text-[13px] uppercase tracking-[1.5px]">
                  <span className="font-semibold">{car.brand}</span>{" "}
                  <span className="opacity-70">{car.model}</span>
                </h3>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[1.5px] transition-opacity hover:opacity-60"
                >
                  Learn More
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-[12px] w-[12px]"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
