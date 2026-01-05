import Image from "next/image"

const gallerySections = [
  {
    year: "2025",
    images: [
      { src: "/bali-indonesia-temple-scenic.jpg", title: "MITT 2025" },
      { src: "/bali-indonesia-temple-scenic.jpg", title: "Conference Programme 2025" },
      { src: "/bali-indonesia-temple-scenic.jpg", title: "MITT Travel Start 2025" },
    ],
  },
  {
    year: "2024",
    images: [
      { src: "/bali-indonesia-temple-scenic.jpg", title: "MITT 2024" },
      { src: "/bali-indonesia-temple-scenic.jpg", title: "Conference Programme 2024" },
      { src: "/bali-indonesia-temple-scenic.jpg", title: "MITT Travel Start 2024" },
    ],
  },
  {
    year: "2023",
    images: [
      { src: "/bali-indonesia-temple-scenic.jpg", title: "MITT 2023" },
      { src: "/bali-indonesia-temple-scenic.jpg", title: "Conference Programme 2023" },
      { src: "/bali-indonesia-temple-scenic.jpg", title: "MITT Travel Start 2023" },
    ],
  },
]

export default function MITTGallery() {
  return (
    <section className="w-full py-20">
      <div className=" space-y-24">

        {gallerySections.map((section) => (
          <div key={section.year}>
            
            {/* Year Heading */}
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#0b1f33]">
              MITT {section.year}
            </h2>

            {/* Description (optional per year) */}
            <p className="mt-4 max-w-5xl text-[#0b1f33] text-sm md:text-base leading-relaxed">
              Discover the essence of MITT through our curated gallery, featuring
              moments from the opening ceremony, VIP tours, awards, exhibition
              showcases, and dynamic conference sessions.
            </p>

            {/* Gallery Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.images.map((item, index) => (
                <GalleryCard
                  key={index}
                  image={item.src}
                  title={item.title}
                />
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

function GalleryCard({
  image,
  title,
}: {
  image: string
  title: string
}) {
  return (
    <div className="group">
      <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-4 text-[#0b1f33] font-semibold text-semibold text-xl">
        {title}
      </p>
    </div>
  )
}
