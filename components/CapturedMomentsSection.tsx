"use client"

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const moments = [
  {
    title: "Diemex 2025",
    subtitle: "Diemex",
    image: "business-professionals-at-exhibition-booth.jpg",
  },
  {
    title: "Conference Programme 2025",
    subtitle: "Diemex",
    image: "busy-travel-exhibition-hall-with-visitors.jpg",
  },
  {
    title: "Diemex Travel Start 2025",
    subtitle: "Diemex",
    image: "travel-tickets-and-passport.jpg",
  },
]

export function CapturedMomentsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(1, moments.length - itemsPerView + 1)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % maxIndex)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex)
  }

  return (  
    <section className=" py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Captured Moments: The Heart of Diemex
          </h2>

          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {moments.map((moment, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
              >
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-64 object-cover"
                />

                <div className="pt-4">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {moment.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {moment.subtitle}
                  </p>

                  {/* ✅ JIG-JAG READ MORE */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground hover:text-primary group"
                  >
                    Read More
                    <ArrowRight
                      className="
                        h-4 w-4
                        translate-x-0
                        animate-[jigJag_1.2s_ease-in-out_infinite]
                        group-hover:animate-none
                      "
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind custom keyframes */}
      <style jsx global>{`
        @keyframes jigJag {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(6px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
