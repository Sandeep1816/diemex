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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, partners.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, partners.length - itemsPerView + 1)) % Math.max(1, partners.length - itemsPerView + 1),
    )
  }

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Our Partners</h2>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-2 border-border hover:bg-secondary bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-2 border-border hover:bg-secondary bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4">
                <div className="bg-white border-2 border-border rounded-lg p-8 h-64 flex flex-col items-center justify-center">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-24 object-contain mb-6"
                  />
                  <p className="text-sm font-medium text-muted-foreground text-center">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
