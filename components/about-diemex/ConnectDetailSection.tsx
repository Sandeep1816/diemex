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
    <section className="">
      <h3 className="text-[150px] text-center">
        Unmissable Features at MITT
      </h3>

      <div className="text-center mb-16">
        MITT is more than an exhibition—it's a dynamic platform packed with features.
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* LEFT — STICKY TEXT */}
        <div className="sticky top-32 h-fit py-24">
          <h2 className="text-[44px] font-bold text-[#1a2c42] mb-6">
            {active.title}
          </h2>

          <p className="text-[18px] leading-relaxed text-[#1a2c42] max-w-xl mb-6">
            {active.description}
          </p>

          {active.linkText && (
            <Link
              href="#"
              className="underline underline-offset-4 text-[16px] font-medium"
            >
              {active.linkText}
            </Link>
          )}
        </div>

        {/* RIGHT — SCROLLING IMAGES */}
        <div>
          {SECTIONS.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el
              }}
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
