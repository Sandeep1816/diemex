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
<section className="px-0 py-16 md:py-20 overflow-hidden">
  {/* TEXT — SAME AS NAVBAR */}
  <div className="">
    <h1 className="title-202">
      WHERE DESTINATIONS MEET
    </h1>

    <p className="mt-4 subheading">
      The leading B2B exhibition for the travel, tourism and hospitality industry in CIS
      <br />
      11–13 March 2026 | Pavilion 1, Crocus Expo | Moscow
    </p>
  </div>

  {/* IMAGE — FULL WIDTH */}
  <div className="mt-10 relative h-[280px] md:h-[420px] lg:h-[520px] w-full">
    {images.map((src, index) => (
      <div
        key={src}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === current ? "opacity-100" : "opacity-0"
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
    ))}
  </div>
</section>


  )
}
