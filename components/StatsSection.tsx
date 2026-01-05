export function StatsSection() {
  const stats = [
    { number: "10,000+", label: "Industry Visitors" },
    { number: "200+", label: "Exhibitors" },
    { number: "20+", label: "Technical & Business Sessions" },
    { number: "20+", label: "Industry Speakers" },
  ]

  return (
    <section className="w-full py-14 md:py-20 bg-white">
      <div className="site-wrapper">

        {/* ================= TEXT BLOCK ================= */}
        <div className="max-w-4xl space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Driving the Future of Die & Mould Manufacturing
          </h2>

          <div className="space-y-4 subheading text-base md:text-lg leading-relaxed">
            <p>
              DIEMEX has emerged as a focused B2B platform for the die, mould,
              tooling, and precision manufacturing industry, bringing together
              manufacturers, OEMs, solution providers, and technology leaders
              from across India and overseas.
            </p>

            <p>
              Positioned as a trusted marketplace for business expansion,
              DIEMEX is where innovation, technology, and opportunity
              converge—enabling meaningful connections and real business
              outcomes for the manufacturing ecosystem.
            </p>

            <p className="text-primary font-medium text-base md:text-xl">
              Welcome to the hub of precision manufacturing excellence.
              <br className="hidden sm:block" />
              Welcome to <span className="font-semibold">DIEMEX</span>.
            </p>
          </div>
        </div>

        {/* ================= STATS GRID ================= */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center space-y-3"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-none">
                {stat.number}
              </div>

              <div className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[140px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
