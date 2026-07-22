export default function Consultation() {
  return (
    <section
      className="relative overflow-hidden bg-[#0d0d0d] py-32 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('/cars/consult-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-12 px-6 md:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[560px]">
          <h2 className="font-display mb-6 text-2xl uppercase leading-[1.4] tracking-[3px] md:text-[34px]">
            Book Consultation
          </h2>
          <p className="mb-9 text-sm leading-relaxed text-white/70">
            Experience bespoke luxury by scheduling a meeting with our experts
            to discuss exclusive imports, customization, and full warranty.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] text-[#141414] transition-colors hover:bg-[#e4e4e4]"
          >
            Schedule Now
          </a>
        </div>

        <div className="w-full max-w-[420px] overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/cars/consult-car.jpg"
            alt="Luxury car consultation"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
