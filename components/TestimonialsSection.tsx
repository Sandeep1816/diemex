"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  name: string
  title: string
  subtitle: string
  quote: string
  image: string
}

export function TestimonialCarousel() {
const testimonials: Testimonial[] = [
  {
    name: "Mr. Roshan M. Thomas",
    title: "Director – Manufacturing Promotion & Industry Outreach",
    subtitle: "Government of India",
    quote:
      "“DIEMEX is an important platform for India’s die, mould, and precision manufacturing sector. The exhibition creates meaningful opportunities to engage with OEMs, suppliers, and technology partners, and plays a vital role in strengthening industry collaboration and business growth. We commend the organizers for delivering a focused and impactful B2B exhibition.”",
    image: "/images/roshan-thomas.png",
  },
  {
    name: "Dr. Anug",
    title: "Representative",
    subtitle: "Ministry of Heavy Industries & Manufacturing, Republic of the Union of Myanmar",
    quote:
      "“DIEMEX exceeded our expectations. With participation from multiple countries and strong interest from Indian OEMs and manufacturing companies, the exhibition proved to be a valuable platform to showcase our capabilities in die, mould, and precision manufacturing, while fostering new business partnerships.”",
    image: "/images/aung-kyaw-htun.png",
  },
]


  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 2

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const currentPage = Math.floor(currentIndex / itemsPerPage) + 1

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - itemsPerPage))
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(testimonials.length - itemsPerPage, prev + itemsPerPage)
    )
  }

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  )

  return (
    <section className="bg-[#e5e7eb]] py-24">
      <div className="">

        {/* ===== TITLE ===== */}
        <h2 className="text-[72px] leading-[1.1] font-bold text-[#0b1f33] mb-20">
          Hear what our Exhibitors have to say
        </h2>

        {/* ===== CARDS ===== */}
        <div className="grid md:grid-cols-2 gap-10">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={currentIndex + index}
              className="bg-[#10223b] text-white p-12 flex flex-col items-center text-center min-h-[520px]"
            >
              <Avatar className="w-32 h-32 mb-8 border-[6px] border-white">
                <AvatarImage
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                />
                <AvatarFallback className="bg-gray-600 text-white text-2xl">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <h3 className="text-2xl font-bold mb-2">
                {testimonial.name}
              </h3>

              <p className="text-sm font-medium text-gray-300 mb-1">
                {testimonial.title}
              </p>

              <p className="text-xs text-gray-400 mb-8">
                {testimonial.subtitle}
              </p>

              <blockquote className="text-base leading-relaxed text-gray-200">
                {testimonial.quote}
              </blockquote>
            </div>
          ))}
        </div>

        {/* ===== NAVIGATION ===== */}
        <div className="flex items-center gap-6 mt-12">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="h-12 w-12 rounded-full bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <span className="text-2xl font-bold text-[#ef4444]">
            {currentPage}/{totalPages}
          </span>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - itemsPerPage}
            className="h-12 w-12 rounded-full bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

      </div>
    </section>
  )
}
