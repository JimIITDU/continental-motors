export default function ElevatingLuxury() {
  return (
    <section
      className="relative overflow-hidden text-[#1a1a1a]"
      style={{
        background:
          "linear-gradient(100deg, #ffffff 0%, #fdf0f2 35%, #f7bcc8 70%, #f4a9ba 100%)",
      }}
    >
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,460px)_1fr]">
          {/* Left column: all text stacked */}
          <div>
            <h2 className="font-display text-2xl uppercase leading-[1.4] tracking-[3px] md:text-[32px]">
              Elevating Luxury to New Levels of Perfection.
            </h2>

            <p className="font-body mt-12 text-3xl md:text-4xl">100%</p>
            <p className="mt-2 text-lg leading-snug text-[#2b2b2b]">
              Our Business Thrives
              <br />
              When Yours Does.
            </p>

            <h3 className="font-display mt-12 text-base uppercase leading-[1.7] tracking-[2.5px] md:text-lg">
              Driving Exceptional
              <br />
              Technical Support.
            </h3>
            <p className="mt-4 max-w-[400px] text-sm leading-relaxed text-[#424242]">
              Empower your journey. Our tailored, comprehensive European car
              solutions meet your needs. Continental Motors provides full
              warranty on all vehicles imported with complete technical
              capacity.
            </p>
          </div>

          {/* Right column: buttons top, car below bleeding right */}
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="#"
                className="rounded-full bg-[#1a1a1a] px-7 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] text-white transition-colors hover:bg-[#333]"
              >
                Explore More
              </a>

              <a
                href="#"
                className="flex items-center gap-2.5 rounded-full border border-[#1a1a1a]/35 bg-white/50 px-7 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] transition-colors hover:bg-white"
              >
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[13px] w-[13px]">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>

            <div className="mt-6 flex flex-1 items-center lg:mr-[calc(50%-50vw)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/cars/elevating-banner.jpg"
                alt="Silver McLaren sports car"
                className="h-auto w-full mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}