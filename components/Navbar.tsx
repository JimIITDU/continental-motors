"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#", active: true },
  { label: "Cars", href: "#cars" },
  { label: "Services", href: "#services" },
  { label: "More", href: "#more" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-20 mx-auto grid w-full max-w-[1240px] grid-cols-[1fr_auto_1fr] items-center px-6 pt-7 md:px-10">
      {/* Left: links (desktop) / hamburger (mobile) */}
      <div>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`pb-1 text-xs font-medium uppercase tracking-[2.5px] transition-opacity hover:opacity-75 ${
                  l.active ? "border-b border-white" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-px w-5 bg-white" />
          <span className="h-px w-5 bg-white" />
          <span className="h-px w-5 bg-white" />
        </button>
      </div>

      {/* Center: logo — replace the placeholder div with your exported SVG:
          <Image src="/logo.svg" alt="Continental Motors" width={52} height={62} /> */}
      <div className="justify-self-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Continental Motors" className="h-[58px] w-auto" />
      </div>

      {/* Right: socials + CTA */}
      <div className="flex items-center gap-4 justify-self-end">
        <div className="hidden items-center gap-3 sm:flex">
          <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-70">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18.3v-7.7H5.9v7.7h2.4zM7.1 9.5a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8zm11.2 8.8v-4.4c0-2.3-1.2-3.4-2.9-3.4-1.3 0-1.9.7-2.3 1.3v-1.1h-2.4v7.6h2.4v-4.2c0-1.1.2-2.2 1.6-2.2 1.3 0 1.3 1.2 1.3 2.3v4.1h2.3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[17px] w-[17px]">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.8" cy="6.2" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <a
          href="#contact"
          className="flex items-center gap-3 rounded-full border border-white/55 py-2 pl-5 pr-2.5 text-[11px] font-medium uppercase tracking-[1.5px] transition-colors hover:bg-white/10"
        >
          <span className="hidden sm:inline">Let&apos;s Talk</span>
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white/55 bg-white/10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[13px] w-[13px]">
              <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02L6.6 10.8z" />
            </svg>
          </span>
        </a>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute left-0 top-full z-30 w-full bg-[#141414]/95 px-6 py-6 backdrop-blur-sm md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[2.5px]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
