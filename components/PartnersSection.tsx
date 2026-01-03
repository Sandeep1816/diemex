"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const partners = [
  {
    name: "Mactera",
    logo: "/mactera-logo-hospitality.jpg",
    type: "Competition Partner",
  },
  {
    name: "CCD",
    logo: "/ccd-federal-logo-tourism.jpg",
    type: "General Partner",
  },
  {
    name: "Mantera",
    logo: "/mantera-impression-system-logo.jpg",
    type: "General Partner",
  },
  {
    name: "СБЕР",
    logo: "/sber-bank-logo-green.jpg",
    type: "General Partner",
  },
  {
    name: "ТБАУ",
    logo: "/tbau-orange-logo.jpg",
    type: "General Partner",
  },
]

export function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 4
  const maxIndex = Math.max(1, partners.length - itemsPerView + 1)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % maxIndex)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex)
  }

  return (
    <section className="bg-[#e5e7eb] py-24">
      <div className="mx-auto max-w-full ">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-20">
          <h4 className="text-[72px] leading-[1.1] font-bold text-[#0b1f33]">
            Our Partners
          </h4>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="h-14 w-14 rounded-full bg-white text-gray-400 hover:text-gray-700"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="h-14 w-14 rounded-full bg-white text-gray-400 hover:text-gray-700"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4"
              >
                {/* LOGO BOX – EXACT MITT STYLE */}
                <div className="h-[260px] flex items-center justify-center border border-[#ff3232] bg-transparent">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-[90px] max-w-[80%] object-contain"
                  />
                </div>

                {/* LABEL BELOW (OUTSIDE BORDER) */}
                <p className="mt-4 text-sm text-[#0b1f33]">
                  {partner.type}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
