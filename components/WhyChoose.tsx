const features = [
  {
    title: "Full Support",
    subtitle: "Certified Technical Capacity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-10 w-10">
        <path d="M12 8a4 4 0 1 0 4 4" />
        <path d="M17.6 6.4l-3.1 3.1M20 4l-2.4 2.4M14.5 9.5L12 12" />
        <path d="M4 12a8 8 0 1 0 8-8" />
      </svg>
    ),
  },
  {
    title: "Total Peace",
    subtitle: "Complete Vehicle Warranty",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-10 w-10">
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Pure Quality",
    subtitle: "Highest Grade Imports",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-10 w-10">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18" strokeDasharray="2 3" />
        <path d="M8.5 12.5l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section id="services" className="bg-white pb-24 text-[#141414]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 md:px-10 lg:grid-cols-2 lg:gap-0">
        {/* Left column: copy + video thumbnail */}
        <div className="flex flex-col">
          <div className="py-10 lg:py-20 lg:pr-16">
            <h2 className="font-display mb-6 text-2xl uppercase leading-[1.4] tracking-[3px] md:text-[30px]">
              Why Choose Our
              <br />
              Premium Luxury Vehicles
            </h2>
            <p className="mb-9 max-w-[480px] text-sm leading-relaxed text-[#141414]/70">
              Empower your journey. Our tailored, comprehensive European car
              solutions meet your needs. Continental Motors provides full
              warranty on all vehicles imported with complete technical
              capacity.
            </p>
            <a
              href="#"
              className="inline-block rounded-full bg-[#141414] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-white transition-colors hover:bg-[#333]"
            >
              Discover More
            </a>
          </div>

          {/* Video thumbnail with play button.
              Replace the placeholder image with your Figma export, and wire the
              button to a modal / video URL when you have one. */}
          <div className="relative aspect-[16/9] overflow-hidden lg:mt-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cars/video-thumb.jpg"
              alt="Continental Motors showroom video"
              className="h-full w-full object-cover"
            />
            <button
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/85 transition-transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-6 w-6">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right column: tall car image + features row */}
        <div className="flex flex-col">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#141414] lg:aspect-auto lg:min-h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cars/showroom.jpg"
              alt="Tesla Model 3 in showroom"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-3 lg:px-4">
            {features.map((f) => (
              <div key={f.title}>
                <div className="mb-4 text-[#141414]/70">{f.icon}</div>
                <h3 className="font-display mb-1.5 text-[13px] uppercase tracking-[2px]">
                  {f.title}
                </h3>
                <p className="text-xs text-[#141414]/60">{f.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
