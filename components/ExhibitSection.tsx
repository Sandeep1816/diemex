import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ExhibitSection() {
  return (
    <section className="w-full bg-[#0f2540] text-white py-16 md:py-24 lg:py-28">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 lg:gap-24 items-start">

          {/* LEFT: Content */}
          <div className="flex flex-col space-y-8 md:space-y-12 md:pt-6">

            {/* TITLE */}
            <h2 className="text-[3rem] sm:text-[4rem] md:text-[6.5rem] font-extrabold -tracking-[0.05em] leading-none">
              EXHIBIT
            </h2>

            {/* SUB TITLE */}
            <p className="text-base md:text-lg font-semibold">
              DIEMEX: Where Precision Manufacturing Meets Opportunity
            </p>

            {/* DESCRIPTION — SAME TEXT */}
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
            Be part of DIEMEX 2026, India’s focused B2B exhibition for the die, mould, tooling, and precision manufacturing industry. DIEMEX connects you directly with OEMs, Tier-1 & Tier-2 suppliers, tool room heads, and procurement decision-makers actively sourcing new technologies and solutions.
Position your brand in front of serious industry buyers looking for advanced tooling systems, automation, materials, and manufacturing innovations—where real business conversations turn into long-term partnerships.

            </p>

            {/* CTA */}
            <div className="pt-6 md:pt-10 border-b border-white/30 max-w-3xl font-bold flex items-center justify-between">
              <Link
                href="#"
                className="group inline-flex items-center gap-3 uppercase text-sm tracking-widest"
              >
                Discover Exhibiting Benefits
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <ArrowRight className="h-5 w-5 rotate-90 opacity-70" />
            </div>
          </div>

          {/* RIGHT: Tall Image */}
          <div className="relative w-full max-w-lg mx-auto md:ml-auto h-[360px] sm:h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden">
            <img
              src="/business-professionals-at-exhibition-booth.jpg"
              alt="MITT Exhibition"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
