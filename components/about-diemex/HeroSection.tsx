"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true)
    }, 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative bg-gray-100 overflow-hidden min-h-screen">
      <div className="hero-step-mask pointer-events-none" />

      <div className="relative z-20 w-full px-6 lg:px-12 py-24 flex items-center">
        {showText && (
          <h1
            className="
              font-[var(--font-bebas)]
              text-[clamp(48px,10vw,180px)]
              text-[#1a2c42]
              leading-none
                 animate-textReveal
           
            hero-ultra-bold
              flex flex-col
              gap-6
              max-w-full
              hero-ultra-bold
            "
          >
            <span>YOUR GATEWAY</span>
            <span>GLOBAL TRAVEL</span>
            <span>TOURISM</span>
          </h1>
        )}
      </div>
    </section>
  )
}
