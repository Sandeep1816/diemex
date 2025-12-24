import Link from "next/link"

export function SectorsSection() {
  const sectors = [
    {
      title: "Tourist Board",
      description: "Promote your country's unique culture, attractions, and travel offerings.",
      image: "/great-wall-of-china-scenic-view.jpg",
      link: "#",
    },
    {
      title: "Travel Agencies",
      description: "Discover tailored itineraries and services to meet travelers' demands.",
      image: "/travel-tickets-and-passport.jpg",
      link: "#",
    },
    {
      title: "Health & Medical Tourism",
      description: "Access top providers in the growing wellness and healthcare travel sector.",
      image: "/healthcare-professionals-discussing.jpg",
      link: "#",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-12 text-primary text-balance">
          Explore Diverse Market Sectors at Diemex 2025
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group overflow-hidden border-none bg-transparent"
            >
              {/* Image – NO GAP */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content – NO BG */}
              <div className="pt-4 space-y-3">
                <h3 className="text-2xl font-bold text-primary">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {sector.description}
                </p>
                <Link
                  href={sector.link}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline uppercase tracking-wide"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore All Sectors Banner */}
      <div className="bg-[#ef4444] mt-12 py-8 px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide">
          Explore All Sectors
        </h2>
      </div>
    </section>
  )
}
