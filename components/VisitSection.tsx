import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function VisitSection() {
  return (
    <section className="bg-[#1a2c42] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">VISIT</h2>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-balance">Unlock New Horizons at Diemex 2026</h3>

              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                Discover destinations, forge long-lasting partnerships, and explore innovative travel solutions all in
                one place. Diemex is your gateway to the world of tourism, where airlines, hotels, travel tech, and global
                opportunities await.
              </p>
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors border-b-2 border-white hover:border-gray-300 pb-1 font-medium uppercase text-sm tracking-wide"
            >
              Discover Visiting Benefits
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-lg">
            <img src="/busy-travel-exhibition-hall-with-visitors.jpg" alt="Diemex Exhibition Hall" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
