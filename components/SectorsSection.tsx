import Link from "next/link"

export function SectorsSection() {
  const sectors = [
    {
      title: "Die & Mould Manufacturers",
      description: "Showcase cutting-edge dies, moulds, and tooling solutions serving automotive, aerospace, electronics, and industrial applications.",
      image: "/great-wall-of-china-scenic-view.jpg",
      link: "#",
    },
    {
      title: "Tool Rooms & Precision Engineering",
      description: "Connect with buyers seeking high-precision machining, tooling, and component manufacturing expertise.",
      image: "/travel-tickets-and-passport.jpg",
      link: "#",
    },
    {
      title: "Automation, Robotics & Industry 4.0",
      description: "Present smart manufacturing solutions including automation systems, robotics, digital twins, and smart factories.",
      image: "/healthcare-professionals-discussing.jpg",
      link: "#",
    },
     {
      title: "Materials, Software & Supporting Technologies",
      description: "Highlight advanced materials, CAD/CAM/CAE software, simulation tools, and auxiliary manufacturing technologies.",
      image: "/great-wall-of-china-scenic-view.jpg",
      link: "#",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-0">
        <h2 className="font-bold text-primary mb-12 text-[36px] md:text-[48px] lg:text-[72px] leading-[1.1]">
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
      <h2 className="font-black text-white uppercase tracking-wide text-[32px] md:text-[44px] lg:text-[60px] leading-[1.1]">
  Explore All Sectors
</h2>

      </div>
    </section>
  )
}
