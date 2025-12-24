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
      name: "Roshan M. Thomas",
      title: 'Director of "Incredible India"',
      subtitle: "Ministry of Tourism of the Republic of India",
      quote:
        '"Russia is a major market for India. The MITT exhibition is an ideal platform for us to develop our tourism business in the country. Thank you, MITT, for organizing such a great exhibition."',
      image: "/images/roshan-thomas.png",
    },
    {
      name: "Dr Aung Kyaw Htun",
      title: "Representative of Ministry of Hotels and Tourism of Myanmar",
      subtitle: "Ministry of Hotels and Tourism - Republic of the Union of Myanmar",
      quote:
        '"MITT 2025 exceeded our expectations. With participants from nearly 30 countries and strong interest from Russian visitors discovering Myanmar for the first time, it\'s been a valuable platform to showcase our culture and tourism potential."',
      image: "/images/aung-kyaw-htun.png",
    },
    {
      name: "Haitham Al Ghassani",
      title: "Director General of Tourism Promotion",
      subtitle: "Oman Ministry of Heritage and Tourism",
      quote:
        '"It is our first time at MITT. We had a lot of meetings from morning to evening. I feel very happy about the number and quality of visitors, they are serious about doing business in Oman."',
      image: "/images/roshan-thomas.png",
    },
    {
      name: "Maria Rodriguez",
      title: "Director of International Relations",
      subtitle: "Spanish Tourism Board",
      quote:
        '"MITT has proven to be an excellent venue for building lasting partnerships. The quality of exhibitors and visitors exceeded our expectations."',
      image: "/images/aung-kyaw-htun.png",
    },
    {
      name: "Chen Wei",
      title: "Deputy Director of Tourism",
      subtitle: "China National Tourism Administration",
      quote:
        '"The exhibition provided unique opportunities to connect with Russian travel professionals and showcase our destinations."',
      image: "/images/roshan-thomas.png",
    },
    {
      name: "Ahmed Al-Rashid",
      title: "Tourism Director",
      subtitle: "UAE Ministry of Tourism",
      quote:
        '"MITT continues to be one of the most important tourism exhibitions in the region. The level of organization is outstanding."',
      image: "/images/aung-kyaw-htun.png",
    },
    {
      name: "Sophie Laurent",
      title: "International Marketing Manager",
      subtitle: "Atout France",
      quote:
        '"We have been participating in MITT for several years and it never disappoints. The connections we make here are invaluable."',
      image: "/images/roshan-thomas.png",
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
    setCurrentIndex((prev) => Math.min(testimonials.length - itemsPerPage, prev + itemsPerPage))
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-6 px-6">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={currentIndex + index}
            className="bg-[#1a2c42] text-white p-8 flex flex-col items-center text-center min-h-[520px]"
          >
            <Avatar className="w-32 h-32 mb-6 border-[6px] border-white">
              <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
              <AvatarFallback className="bg-gray-600 text-white text-2xl">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
            <p className="text-sm font-medium text-gray-300 mb-1">{testimonial.title}</p>
            <p className="text-xs text-gray-400 mb-6">{testimonial.subtitle}</p>

            <blockquote className="text-base leading-relaxed text-gray-200">{testimonial.quote}</blockquote>
          </div>
        ))}
      </div>

      <div className="flex items-start justify-items-start gap-4 mt-8">
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
  )
}
