import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function VisitSection() {
  return (
    <section className="w-full bg-[#0f2540] text-white py-16 md:py-24 lg:py-28">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 lg:gap-24 items-start">

          {/* ================= LEFT: IMAGE ================= */}
          <div className="relative w-full max-w-lg mx-auto md:mx-0 h-[360px] sm:h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden">
            <img
              src="/busy-travel-exhibition-hall-with-visitors.jpg"
              alt="DIEMEX Exhibition Hall"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ================= RIGHT: CONTENT ================= */}
          <div className="flex flex-col space-y-8 md:space-y-12 md:pt-10">

            {/* TITLE */}
            <h2 className="text-[3rem] sm:text-[4rem] md:text-[6.5rem] font-extrabold tracking-tight leading-none">
              VISIT
            </h2>

            {/* TEXT */}
            <div className="space-y-6 max-w-xl">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">
                Unlock New Opportunities at DIEMEX 2026
              </p>

              <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-white/80">
                Explore the latest advancements in die & mould, tooling,
                automation, and precision manufacturing—all under one roof.
                DIEMEX is your gateway to cutting-edge technologies, trusted
                suppliers, and valuable industry connections.
              </p>

              <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-white/80">
                Meet OEMs, tool room experts, solution providers, and technology
                leaders, forge strong business partnerships, and stay ahead of
                manufacturing trends shaping the future of precision engineering.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6 md:pt-10 border-t border-white/30 max-w-2xl flex items-center justify-between">
              <Link
                href="#"
                className="group inline-flex items-center gap-3 uppercase text-sm tracking-widest font-bold"
              >
                Discover Visiting Benefits
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <ArrowRight className="h-5 w-5 rotate-90 opacity-70" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
