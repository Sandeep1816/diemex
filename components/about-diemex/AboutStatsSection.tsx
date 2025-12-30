import Link from "next/link"

export function AboutStatsSection() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-8xl font-bold text-[#1a2c42] -tracking-[0.05em] mb-12">
          About MITT
        </h2>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="/images/about.jpg"
              alt="About MITT"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-12">
            {/* Description */}
            <p className="text-xl leading-relaxed text-[#1a2c42] max-w-xl">
              For over 31 years, MITT has been the trusted space for forging
              partnerships, showcasing innovations, and driving growth in one
              of the world’s most diverse and rapidly evolving travel and
              tourism markets.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
              <div>
                <div className="text-6xl font-bold text-[#1a2c42]">
                  16,000+
                </div>
                <div className="text-base text-gray-600 mt-2">
                  Visitors
                </div>
              </div>

              <div>
                <div className="text-6xl font-bold text-[#1a2c42]">
                  900+
                </div>
                <div className="text-base text-gray-600 mt-2">
                  Exhibitors
                </div>
              </div>

              <div>
                <div className="text-6xl font-bold text-[#1a2c42]">
                  29+
                </div>
                <div className="text-base text-gray-600 mt-2">
                  Countries Represented
                </div>
              </div>

              <div>
                <div className="text-6xl font-bold text-[#1a2c42]">
                  17
                </div>
                <div className="text-base text-gray-600 mt-2">
                  Event Sectors
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="#"
              className="inline-block text-[#1a2c42] font-semibold underline underline-offset-4 hover:text-[#ef4444] transition-colors"
            >
              Why Exhibit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
