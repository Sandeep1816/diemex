import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ExhibitSection() {
  return (
    <section className="bg-[#1a2c42] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">EXHIBIT</h2>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-balance">Diemex: Where Opportunities Take Flight</h3>

              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                Join the 32nd edition of the leading travel and hospitality exhibition in Eurasia. Diemex 2026 connects
                you directly with decision-makers seeking new destinations, products, and partnerships. Position your
                brand in front of key tour operators, travel agencies, and hospitality leaders who are ready to do
                business.
              </p>
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors border-b-2 border-white hover:border-gray-300 pb-1 font-medium uppercase text-sm tracking-wide"
            >
              Discover Exhibiting Benefits
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-lg">
            <img src="/business-professionals-at-exhibition-booth.jpg" alt="Diemex Exhibition" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
