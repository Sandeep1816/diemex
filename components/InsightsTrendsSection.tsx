"use client"

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const insights = [
  {
    date: "14.10.2025",
    title: "Registration for Diemex 2026 is now open.",
    description:
      "We invite industry professionals to receive a free ticket to Diemex, Russia's largest International Tourism and Hospitality Exhibition!",
    image: "/exhibition-crowd-tourism-event.jpg",
  },
  {
    date: "10.10.2025",
    title: "Tourism & Trade Boost: Saudi Arabia's First Direct Flight to Russia",
    description:
      "Saudia's new Riyadh–Moscow route marks a milestone in Gulf–CIS connectivity, cutting travel time and opening fresh opportunities for...",
    image: "/saudi-airlines-plane.jpg",
  },
  {
    date: "08.09.2025",
    title: "China Introduces Visa-Free Travel for Russian Citizens: A New Opportunity for...",
    description:
      "China's new visa-free policy for Russian travellers marks a major step in regional tourism growth. With easier access for leisure and business...",
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
      <div className="container mx-auto px-4">
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

        <div className="flex justify-center">
          <div className="bg-[#ef4444] py-6 px-12 rounded-lg">
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
