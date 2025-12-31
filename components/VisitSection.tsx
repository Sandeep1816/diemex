import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function VisitSection() {
  return (
    <section className="bg-[#0f2540] text-white py-28">
      <div className="max-w-[90rem] mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          
          {/* LEFT: Tall Image */}
          <div className="relative h-[520px] md:h-[620px] max-w-lg overflow-hidden">
            <img
              src="busy-travel-exhibition-hall-with-visitors.jpg"
              alt="MITT Exhibition Hall"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: Content */}
          <div className="flex flex-col space-y-12 pt-10">
            
            <h2 className="text-[5.5rem] md:text-[6.5rem] font-extrabold -tracking-[0.08em] leading-none">
              VISIT
            </h2>

            <div className="space-y-6 max-w-xl">
              <p className="text-2xl font-semibold">
                Unlock New Horizons at MITT 2026
              </p>

              <p className="text-2xl leading-relaxed text-white/80">
                Discover destinations, forge long-lasting partnerships, and
                explore innovative travel solutions all in one place. MITT is
                your gateway to the world of tourism, where airlines, hotels,
                travel tech, and global opportunities await.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-10 border-t border-white/30 max-w-2xl flex items-center justify-between">
              <Link
                href="#"
                className="group inline-flex items-center gap-3 uppercase text-sm tracking-widest"
              >
                Discover Visiting Benefits
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <ArrowRight className="h-5 w-5 rotate-90 opacity-70" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
