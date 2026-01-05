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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full overflow-hidden ">
      
      {/* ================= TEXT ================= */}
      <div className=" pt-14 md:pt-20">
        <h1 className="title-202 max-w-6xl">
          PRECISION MEETS OPPURTUNITY
        </h1>

        <p className="mt-4 subheading max-w-3xl">
          The leading B2B exhibition for the Die, Mould & Precision Manufacturing industry
          <br />
          8–10 October 2026 | Auto Cluster Exhibition Centre | Pune, India
        </p>
      </div>

      {/* ================= IMAGE ================= */}
      <div className="relative mt-10 w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[600px]">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Diemex exhibition"
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
