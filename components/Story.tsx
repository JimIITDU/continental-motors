const collage = [
  "/gallery/story-1.jpg",
  "/gallery/story-2.jpg",
  "/gallery/story-3.jpg",
  "/gallery/story-4.jpg",
];

export default function Story() {
  return (
    <section className="bg-white pb-24 text-[#141414]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-14 px-6 md:px-10 lg:flex-row">
        {/* Collage */}
        <div className="grid w-full max-w-[520px] grid-cols-2 items-start gap-5">
          {collage.map((src, i) => (
            <div
              key={src}
              className={`overflow-hidden rounded-2xl ${i % 2 === 1 ? "mt-10" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Continental Motors showroom"
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Copy */}
        <div className="flex-1">
          <h2 className="font-display mb-9 max-w-[560px] text-2xl uppercase leading-[1.5] tracking-[3px] md:text-[30px]">
            Continental Motors is redefining premium car ownership in
            Bangladesh.
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#141414] px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-white transition-colors hover:bg-[#333]"
          >
            Read Our Story
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
      </div>
    </section>
  );
}
