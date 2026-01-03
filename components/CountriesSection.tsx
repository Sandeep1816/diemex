"use client"

import Image from "next/image"

export function CountriesSection() {
  const countries = [
    { name: "Algeria", image: "/images/algeria-landmark-scenic.jpg" },
    { name: "Kazakhstan", image: "/images/kazakhstan-landmark-scenic.jpg" },
    { name: "Uganda", image: "/images/uganda-landmark-scenic.jpg" },
    { name: "Sri Lanka", image: "/images/sri-lanka-landmark-scenic.jpg" },
    { name: "Jordan", image: "/images/jordan-petra-landmark-scenic.jpg" },
    { name: "Uzbekistan", image: "/images/uzbekistan-landmark-scenic.jpg" },
    { name: "Malaysia", image: "/images/malaysia-landmark-scenic.jpg" },
    { name: "Thailand", image: "/images/thailand-landmark-scenic.jpg" },
    { name: "Türkiye", image: "/images/turkey-istanbul-landmark-scenic.jpg" },
    { name: "Indonesia", image: "/images/bali-indonesia-temple-scenic.jpg" },
    { name: "Cuba", image: "/images/cuba-havana-landmark-scenic.jpg" },
  ]

  return (
    <section className="bg-[#e5e7eb] py-20">
      <div className="mitt-container">

        {/* TITLE */}
        <div className="flex justify-center mb-20">
          <h1 className="text-[72px] leading-[1.1] font-bold text-[#0b1f33] text-center">
            Meet the World : Our Exhibiting Countries
          </h1>
        </div>

        {/* DESKTOP GRID (EXACT LIKE MITT) */}
        <div className="my-20 hidden lg:flex flex-wrap justify-center gap-x-10 gap-y-16 relative">

          {countries.map((country, index) => (
            <div
              key={country.name}
              className="group relative cursor-default overflow-visible hover:z-10"
            >
              {/* COUNTRY NAME */}
              <h3
                className="
                  text-[72px]
                  leading-[1.1]
                  font-semibold
                  text-[#8a9099]
                  opacity-50
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:text-white
                  w-fit
                "
              >
                {country.name}
                {index < countries.length - 1 ? "," : "."}
              </h3>

              {/* HOVER IMAGE RECTANGLE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[500px]
                  h-[200px]
                  overflow-hidden
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  -z-10
                "
              >
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="
                    object-cover
                    scale-150
                    transition-transform
                    duration-1000
                    group-hover:scale-100
                  "
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-24">
          <a href="/exhibitor-list/" target="_blank" rel="noopener noreferrer">
            <button
              className="
                bg-[#10223b]
                text-white
                text-2xl
                font-extrabold
                uppercase
                underline
                px-10
                py-5
                transition
                hover:bg-[#051932]
              "
            >
              Explore the Exhibitor List
            </button>
          </a>
        </div>

      </div>
    </section>
  )
}
