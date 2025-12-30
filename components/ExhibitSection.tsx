import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ExhibitSection() {
  return (
    <section className="bg-[#0f2540] text-white py-28">
      <div className="max-w-[90rem] mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-24 items-start">

          {/* LEFT: Content */}
          <div className="flex flex-col space-y-12 pt-6">
            <h2 className="text-[1.5rem] md:text-[6.5rem] title-92 -tracking-[0.05em] leading-none">
              EXHIBIT
            </h2>

            <p className="text-lg font-semibold">
              MITT: Where Opportunities Take Flight
            </p>

            <p className="text-lg leading-relaxed text-white/80 max-w-xl">
              Join the 32nd edition of the leading travel and hospitality
              exhibition in Eurasia. MITT 2026 connects you directly with
              decision-makers seeking new destinations, products, and
              partnerships. Position your brand in front of key tour operators,
              travel agencies, and hospitality leaders who are ready to do
              business.
            </p>

            {/* CTA */}
            <div className="pt-10 border-t border-white/30 max-w-2xl flex items-center justify-between">
              <Link
                href="#"
                className="group inline-flex items-center gap-3 uppercase text-sm tracking-widest"
              >
                Discover Exhibiting Benefits
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <ArrowRight className="h-5 w-5 rotate-90 opacity-70" />
            </div>
          </div>

          {/* RIGHT: Tall Image */}
          <div className="relative h-[520px] md:h-[620px] max-w-lg ml-auto overflow-hidden">
            <img
              src="business-professionals-at-exhibition-booth.jpg"
              alt="MITT Exhibition"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
