"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const SECTIONS = [
  {
    title: "MITT Conferences",
    description:
      "The MITT Conference Program delivers actionable strategies and fresh perspectives on the biggest challenges and opportunities in the travel industry.",
    image: "/images/conference.jpg",
  },
  {
    title: "MITT Connect",
    description:
      "Transform your MITT experience with the Connect App, your personal matchmaking and meeting planner.",
    image: "/images/connect.jpg",
    linkText: "Join Connect",
  },
  {
    title: "MITT Awards",
    description:
      "The MITT Awards celebrate the trailblazers redefining the travel and tourism industry.",
    image: "/images/awards.jpg",
  },
]

export function ConnectDetailSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index
            )
            setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5 }
    )

    imageRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const active = SECTIONS[activeIndex]

  return (
  <section>
  {/* FULL-WIDTH TITLE AREA (NO SIDE PADDING) */}
  <div className="max-w-[1500px] mx-auto px-[80px]">
    <h3 className="text-[96px] leading-[1.05] font-bold text-center text-[#0b1f33] mb-6">
      Unmissable Features at MITT
    </h3>

    <p className="text-[20px] leading-relaxed text-center text-[#0b1f33] mb-20 max-w-4xl mx-auto">
      MITT is more than an exhibition—it's a dynamic platform packed with features designed to inspire, connect, and drive success in the travel and tourism industry.
    </p>
  </div>

  {/* CONTENT GRID */}
  <div className="max-w-[1700px] mx-auto px-[80px] grid md:grid-cols-2 gap-16">
    {/* LEFT — STICKY TEXT */}
    <div className="sticky top-32 h-fit py-24">
      <h2 className="text-[44px] font-bold text-[#1a2c42] mb-6">
        {active.title}
      </h2>

      <p className="text-[18px] leading-relaxed text-[#1a2c42] max-w-xl mb-6">
        {active.description}
      </p>

      {active.linkText && (
        <a
          href="#"
          className="underline underline-offset-4 text-[16px] font-medium"
        >
          {active.linkText}
        </a>
      )}
    </div>

    {/* RIGHT — IMAGES */}
    <div>
      {SECTIONS.map((item, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          data-index={index}
          className="h-[120vh] w-full"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>

  )
}
