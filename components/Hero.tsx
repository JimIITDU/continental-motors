"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { heroSlides } from "@/lib/cars";

const SLIDE_INTERVAL = 5000; // ms between auto-slides

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate the carousel
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % heroSlides.length),
      SLIDE_INTERVAL
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#d6d6d6] px-3 pt-3 sm:px-5 sm:pt-5">
      <section className="relative flex min-h-[calc(100vh-20px)] flex-col overflow-hidden">
        {/* Slides: stacked, cross-fading via opacity */}
        {heroSlides.map((src, i) => (
          <div
            key={src}
            aria-hidden={i !== current}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}

        {/* Dark gradient so white text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-black/60" />

        <Navbar />

        {/* Content pinned bottom-left */}
        <div className="relative z-10 mx-auto mt-auto flex w-full max-w-[1240px] flex-col items-start justify-between gap-10 px-6 pb-14 md:flex-row md:items-end md:px-10">
          <div>
            <div className="font-display mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/55 px-5 py-2 text-[11px] uppercase tracking-[3px]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-[15px] w-[15px]"
              >
                <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
                <path d="M2 9h20M9 3l3 6 3-6M12 9l0 12" opacity="0.6" />
              </svg>
              Drive the World&apos;s Finest Cars
            </div>

            <h1 className="font-display mb-10 max-w-[720px] text-[28px] uppercase leading-[1.35] tracking-[4px] md:text-[42px] lg:text-[46px]">
              Premium Luxury Cars
              <br />
              For True Enthusiasts.
            </h1>

            <div className="flex flex-wrap gap-4">
              <a
                href="#cars"
                className="rounded-full bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] text-[#141414] transition-colors hover:bg-[#e4e4e4]"
              >
                View Inventory
              </a>
              <a
                href="#cars"
                className="flex items-center gap-2.5 rounded-full border border-white/55 px-7 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] transition-colors hover:bg-white/10"
              >
                Available Collection
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-[13px] w-[13px]"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>

          {/* Carousel dots — clickable */}
          <div className="flex items-center gap-4 pb-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={
                  i === current
                    ? "flex h-[30px] w-[30px] items-center justify-center rounded-full border-[1.5px] border-white"
                    : "h-[7px] w-[7px] rounded-full bg-white/65 transition-transform hover:scale-125"
                }
              >
                {i === current && (
                  <span className="h-[7px] w-[7px] rounded-full bg-white" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
