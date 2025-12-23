"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CountriesSection() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const countries = [
    { name: "Algeria", image: "/images/algeria-landmark-scenic.jpg" },
    { name: "Kazakhstan", image: "/images/kazakhstan-landmark-scenic.jpg" },
    { name: "Uganda", image: "/images//uganda-landmark-scenic.jpg" },
    { name: "Sri Lanka", image: "/images//sri-lanka-landmark-scenic.jpg" },
    { name: "Jordan", image: "/images//jordan-petra-landmark-scenic.jpg" },
    { name: "Uzbekistan", image: "/images//uzbekistan-landmark-scenic.jpg" },
    { name: "Malaysia", image: "/images//malaysia-landmark-scenic.jpg" },
    { name: "Thailand", image: "/images//thailand-landmark-scenic.jpg" },
    { name: "Türkiye", image: "/images//turkey-istanbul-landmark-scenic.jpg" },
    { name: "Indonesia", image: "/images//bali-indonesia-temple-scenic.jpg" },
    { name: "Cuba", image: "/images//cuba-havana-landmark-scenic.jpg" },
  ]

  return (
    <section className="bg-background py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary text-balance">
          Meet the World : Our Exhibiting Countries
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            {/* First Row */}
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight flex flex-wrap justify-center gap-x-3">
              {countries.slice(0, 4).map((country, index) => (
                <span key={country.name}>
                  <span
                    className="relative inline-block transition-colors duration-300 cursor-pointer text-muted-foreground hover:text-foreground"
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    {country.name}
                  </span>
                  {index < 3 && ","}
                  {index === 3 && ","}
                </span>
              ))}
            </p>

            {/* Second Row */}
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight flex flex-wrap justify-center gap-x-3">
              {countries.slice(4, 8).map((country, index) => (
                <span key={country.name}>
                  <span
                    className="relative inline-block transition-colors duration-300 cursor-pointer text-muted-foreground hover:text-foreground"
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    {country.name}
                  </span>
                  {index < 3 && ","}
                  {index === 3 && ","}
                </span>
              ))}
            </p>

            {/* Third Row */}
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight flex flex-wrap justify-center gap-x-3">
              {countries.slice(8).map((country, index) => (
                <span key={country.name}>
                  <span
                    className="relative inline-block transition-colors duration-300 cursor-pointer text-muted-foreground hover:text-foreground"
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    {country.name}
                  </span>
                  {index < countries.slice(8).length - 1 && ","}
                  {index === countries.slice(8).length - 1 && "."}
                </span>
              ))}
            </p>
          </div>

          <div className="text-center mt-16">
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-bold uppercase tracking-wide"
            >
              Explore the Exhibitor List
            </Button>
          </div>
        </div>
      </div>

      {/* Background Image Display on Hover */}
      {hoveredCountry && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl animate-fade-in">
            <img
              src={countries.find((c) => c.name === hoveredCountry)?.image || "/placeholder.svg"}
              alt={hoveredCountry}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  )
}
