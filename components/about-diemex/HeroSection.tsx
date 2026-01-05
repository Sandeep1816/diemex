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
    <section className="relative overflow-hidden min-h-screen">
      <div className="hero-step-mask pointer-events-none" />

      <div className="relative z-20 w-full  py-24 flex items-center">
        {showText && (
          <h1
            className="
              title-202
            "
          >
            <span>GATEWAY TO</span>
            <span>GLOBAL INDUSTRY</span>
            
          </h1>
        )}
      </div>
    </section>
  )
}
