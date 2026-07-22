import { cars } from "@/lib/cars";

export default function Showcase() {
  return (
    <section id="cars" className="bg-white py-24 text-[#141414]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        {/* Section header */}
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display mb-4 text-[11px] uppercase tracking-[3px] text-[#141414]/80">
              Find Your Masterpiece
            </p>
            <h2 className="font-display max-w-[640px] text-2xl uppercase leading-[1.4] tracking-[3px] md:text-[32px]">
              Luxury Vehicles Curated for the True Connoisseur
            </h2>
          </div>

          <a
            href="#"
            className="flex w-fit items-center gap-2.5 rounded-full border border-[#141414]/30 px-6 py-3 text-[11px] font-semibold uppercase tracking-[1.5px] transition-colors hover:bg-[#141414] hover:text-white"
          >
            View More
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-[12px] w-[12px]"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        {/* Car grid */}
        <div className="grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <article key={`${car.brand}-${car.model}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#141414]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Spec chips */}
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
