export default function ContactCta() {
  return (
    <section id="contact" className="bg-white py-24 text-[#141414]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14 px-6 md:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[620px]">
          <p className="font-display mb-4 text-[11px] uppercase tracking-[3px] text-[#141414]/80">
            Need Help
          </p>
          <h2 className="font-display mb-6 text-2xl uppercase leading-[1.4] tracking-[3px] md:text-[32px]">
            Finding Your Perfect Car Today?
          </h2>
          <p className="text-sm leading-relaxed text-[#141414]/65">
            Our team is ready to guide you through models, financing options,
            and exclusive offers to make your next purchase effortless and
            ensure complete driving satisfaction.
          </p>
        </div>

        <div className="flex items-center gap-5 rounded-2xl border border-[#141414]/15 p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/team/avatar.jpg"
            alt="Maruf Hossain"
            className="h-[72px] w-[72px] rounded-full object-cover"
          />
          <div>
            <p className="font-display text-sm uppercase tracking-[2px]">
              Maruf Hossain
            </p>
            <p className="mb-3 mt-1 text-xs uppercase tracking-[1.5px] text-[#141414]/60">
              Sales Director
            </p>
            <a
              href="#"
              className="inline-block rounded-full bg-[#141414] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-white transition-colors hover:bg-[#333]"
            >
              Contact Maruf
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
