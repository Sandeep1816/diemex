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
    <section className="bg-[#e5e7eb] py-24">
      {/* MITT container */}
      <div className="mx-auto max-w-[1700px] ">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-[72px] leading-[1.1] font-bold text-[#0b1f33]">
            Captured Moments: The Heart of Diemex
          </h2>

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
            className="flex gap-8 transition-transform duration-500 ease-in-out"
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
                  className="w-full h-[320px] object-cover"
                />

                <div className="pt-6">
                  <h3 className="text-xl font-bold text-[#0b1f33] mb-1">
                    {moment.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">
                    {moment.subtitle}
                  </p>

                  {/* JIG-JAG READ MORE */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#0b1f33] hover:text-[#ff3232] group"
                  >
                    Read More
                    <ArrowRight
                      className="
                        h-4 w-4
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

      {/* Animation */}
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
