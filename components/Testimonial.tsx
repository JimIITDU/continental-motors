export default function Testimonial() {
  return (
    <section className="bg-[#0d0d0d] py-24 text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14 px-6 md:px-10 lg:flex-row lg:items-center">
        <div className="w-full max-w-[400px] shrink-0 overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cars/testimonial.jpg"
            alt="Musad Ahmed"
            className="h-auto w-full object-cover"
          />
        </div>

        <div>
          <p className="font-display mb-8 text-[11px] uppercase tracking-[3px] text-white/70">
            Testimonial
          </p>
          <blockquote className="font-display mb-10 max-w-[680px] text-lg uppercase leading-[1.7] tracking-[2px] md:text-2xl">
            &ldquo;Continental Motors provides the best luxury car buying
            experience with unparalleled technical support and a worry-free
            full warranty for your ultimate peace of mind.&rdquo;
          </blockquote>

          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="font-display text-sm uppercase tracking-[2px]">
                Musad Ahmed
              </p>
              <p className="mt-1.5 text-xs uppercase tracking-[1.5px] text-white/60">
                Ferrari 256 GTB Owner
              </p>
            </div>
            <button className="flex items-center gap-2.5 rounded-full border border-white/55 px-6 py-3 text-[11px] font-semibold uppercase tracking-[1.5px] transition-colors hover:bg-white/10">
              Next
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-[12px] w-[12px]"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
