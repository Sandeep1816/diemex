import Image from "next/image"

const partners = [
  { src: "/logos/partner1.png", alt: "Partner 1", label: "Travel Tech Sector Partner" },
  { src: "/logos/partner2.png", alt: "Partner 2", label: "Conference Partner" },
  { src: "/logos/partner3.png", alt: "Partner 3", label: "Conference Program Partner" },
  { src: "/logos/partner4.png", alt: "Partner 4", label: "Official Partner" },
  { src: "/logos/partner5.png", alt: "Partner 5", label: "Government Partner" },
]

export default function PartnersSponsors() {
  return (
    <section className="w-full  py-20 overflow-hidden">
      <div className="mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-6xl font-extrabold text-[#0b1f33] mb-10">
            Partners & Sponsors
          </h2>

          {/* Optional arrows (visual only) */}
          <div className="hidden md:flex gap-2">
            <button className="w-9 h-9 rounded-full border flex items-center justify-center">
              ←
            </button>
            <button className="w-9 h-9 rounded-full border flex items-center justify-center">
              →
            </button>
          </div>
        </div>

        {/* Auto Scroll Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll gap-6">
            {[...partners, ...partners].map((item, index) => (
              <div
                key={index}
                className="min-w-[260px] bg-[#f3f3f1] border border-red-400 p-6 flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-20">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-xs text-gray-600 text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
