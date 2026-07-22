export default function ElevatingLuxury() {
  return (
    <section className="bg-[#0d0d0d] py-24 text-white">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mb-16 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="font-display mb-9 max-w-[560px] text-2xl uppercase leading-[1.4] tracking-[3px] md:text-[34px]">
              Elevating Luxury to New Levels of Perfection.
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] text-[#141414] transition-colors hover:bg-[#e4e4e4]"
              >
                Learn More
              </a>
              <a
                href="#"
                className="rounded-full border border-white/55 px-7 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] transition-colors hover:bg-white/10"
              >
                Explore More
              </a>
            </div>
          </div>

          <div className="max-w-[420px]">
            <p className="font-display text-5xl tracking-[2px] md:text-6xl">100%</p>
            <p className="font-display mt-3 text-sm uppercase leading-[1.6] tracking-[2px] text-white/80">
              Our Business Thrives
              <br />
              When Yours Does.
            </p>
            <h3 className="font-display mt-8 text-base uppercase leading-[1.6] tracking-[2px]">
              Driving Exceptional
              <br />
              Technical Support.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Empower your journey. Our tailored, comprehensive European car
              solutions meet your needs. Continental Motors provides full
              warranty on all vehicles imported with complete technical
              capacity.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cars/elevating-banner.jpg"
            alt="Luxury sports car"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
