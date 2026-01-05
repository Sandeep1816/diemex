import Link from "next/link"

export function AboutStatsSection() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto ">
        {/* Section Title */}
        <h2 className="text-8xl font-bold text-[#1a2c42] -tracking-[0.05em] mb-12">
          About DIEMEX
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
              DIEMEX has been India’s premier platform for die, mould, tooling, 
              and precision manufacturing, connecting manufacturers, OEMs, suppliers, 
              and technology innovators. The exhibition drives business growth, showcases 
              cutting-edge solutions, and fosters partnerships across the manufacturing ecosystem.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
              <div>
                <div className="text-6xl font-bold text-[#1a2c42]">
                  10,000+
                </div>
                <div className="text-base text-gray-600 mt-2">
                  Visitors
                </div>
              </div>

              <div>
                <div className="text-6xl font-bold text-[#1a2c42]">
                  200+
                </div>
                <div className="text-base text-gray-600 mt-2">
                  Exhibitors
                </div>
              </div>

              <div>
                <div className="text-6xl font-bold text-[#1a2c42]">
                  5+
                </div>
                <div className="text-base text-gray-600 mt-2">
                  Countries Represented
                </div>
              </div>

              <div>
                <div className="text-6xl font-bold text-[#1a2c42]">
                  6
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
