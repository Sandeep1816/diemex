"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const images = [
  "/images/diemex-1.png",
  "/images/diemex-2.png",
  "/images/diemex-3.png",
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("left")

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "left" ? "right" : "left"))
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-background py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* TEXT */}
        <div className="w-full">
          <h1
            className="
              w-full
              max-w-none
              text-[clamp(44px,7vw,124px)]
              font-black
              text-primary
              leading-[0.95]
              tracking-tight
            "
          >
            <span className="block whitespace-nowrap">
              WHERE DESTINATIONS
            </span>
            <span className="block">
              MEET
            </span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
            The leading B2B exhibition for the travel, tourism and hospitality industry in CIS
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            11–13 March 2026 | Pavilion 1, Crocus Expo | Moscow
          </p>
        </div>

        {/* HERO IMAGE SLIDER */}
        <div className="mt-10 relative h-[280px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-md">
          {images.map((src, index) => {
            const isActive = index === current

            return (
              <div
                key={src}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out
                  ${
                    isActive
                      ? "opacity-100 translate-x-0 scale-100 z-10"
                      : direction === "left"
                      ? "opacity-0 -translate-x-6 scale-[1.02] z-0"
                      : "opacity-0 translate-x-6 scale-[1.02] z-0"
                  }`}
              >
                <Image
                  src={src}
                  alt="Travel exhibition"
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
