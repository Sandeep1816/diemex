"use client"

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const insights = [
  {
    date: "14.10.2025",
    title: "Registration for DIEMEX 2026 is Now Open",
    description:
      "Registration for DIEMEX 2026 – International Die & Mould Expo is now open. Industry professionals are invited to register and secure free visitor entry to India’s focused B2B exhibition for die, mould, tooling, and precision manufacturing.",
    image: "/exhibition-crowd-tourism-event.jpg",
  },
  {
    date: "10.10.2025",
    title: "Automation & Industry 4.0 Driving Growth in Die & Mould Manufacturing",
    description:
      "The rapid adoption of automation, smart tooling, and digital manufacturing is transforming India’s die and mould sector. Discover how OEM demand, export growth, and technology upgrades are reshaping the industry landscape.",
    image: "/saudi-airlines-plane.jpg",
  },
  {
    date: "08.09.2025",
    title: "India Strengthens Global Manufacturing Ties with Asia & Europe",
    description:
      "India’s expanding trade partnerships with Asia and Europe are opening new opportunities for die & mould exporters, technology suppliers, and precision manufacturers. Learn how global collaboration is influencing sourcing, investment, and innovation.",
    image: "/china-flag-waving.jpg",
  },
]


export function InsightsTrendsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, insights.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, insights.length - itemsPerView + 1)) % Math.max(1, insights.length - itemsPerView + 1),
    )
  }

  return (
    <section className=" py-16 md:py-24">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">Event Insights & Industry Trends</h2>

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

        <div className="relative overflow-hidden mb-12">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {insights.map((insight, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                <div className="bg-none rounded-none overflow-hidden shadow-none h-full flex flex-col">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs font-medium text-muted-foreground mb-3">{insight.date}</p>
                    <h3 className="text-xl font-bold text-primary mb-3 text-balance">{insight.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground mb-6 flex-1">{insight.description}</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-[#ef4444] py-6 px-12 rounded-none">
            <a
              href="#"
              className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
