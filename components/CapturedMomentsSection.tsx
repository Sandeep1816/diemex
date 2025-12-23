"use client"

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const moments = [
  {
    title: "Diemex 2025",
    subtitle: "Diemex",
    image: "/images/image.png",
    hasReadMore: false,
  },
  {
    title: "Conference Programme 2025",
    subtitle: "Diemex",
    image: "/images/image.png",
    hasReadMore: false,
  },
  {
    title: "Diemex Travel Start 2025",
    subtitle: "Diemex",
    image: "/images/image.png",
    hasReadMore: true,
  },
]

export function CapturedMomentsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, moments.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, moments.length - itemsPerView + 1)) % Math.max(1, moments.length - itemsPerView + 1),
    )
  }

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
            Captured Moments: The Heart of Diemex
          </h2>

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
            {moments.map((moment, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={moment.image || "/placeholder.svg"}
                    alt={moment.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{moment.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{moment.subtitle}</p>
                    {moment.hasReadMore && (
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors"
                      >
                        Read More <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
