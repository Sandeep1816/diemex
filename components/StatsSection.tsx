export function StatsSection() {
  const stats = [
    { number: "16,400+", label: "Visitors" },
    { number: "1000+", label: "Exhibitors" },
    { number: "30+", label: "Conference Sessions" },
    { number: "265+", label: "Speakers" },
  ]

  return (
    <section className="bg-[#e8dfd0] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-balance">
              Over 30 Years of Shaping the Future of Travel and Tourism
            </h2>

            <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
              <p>
                For more than three decades, Diemex has been the leading travel and hospitality event in the CIS region,
                connecting global travel professionals, tourism authorities, and industry leaders. As the largest annual
                travel exhibition in the area, Diemex offers an unparalleled platform for fostering business growth,
                building strategic partnerships, and driving inbound tourism.
              </p>

              <p>
                With a legacy of excellence and a reputation as a trusted tool for market expansion, Diemex is where
                opportunities take flight, and the future of travel is envisioned.
              </p>

              <p className="font-semibold text-lg md:text-xl">
                Welcome to the heart of global tourism innovation, welcome to Diemex.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-primary">{stat.number}</div>
                <div className="text-base md:text-lg text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
