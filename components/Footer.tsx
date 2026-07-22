export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] pt-20 text-white">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <p className="font-display text-center text-[clamp(28px,6vw,80px)] uppercase tracking-[6px]">
          Continental Motors
        </p>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/15 py-7 text-[11px] uppercase tracking-[1.5px] text-white/60 md:flex-row">
          <p className="normal-case tracking-normal">
            Copyright © 2025 . All Rights Reserved | Designed by Instaquirk
          </p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-white">
              Privacy &amp; Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms &amp; Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
