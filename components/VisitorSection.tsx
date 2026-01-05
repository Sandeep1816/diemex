"use client"

import { StatsSection } from "@/components/StatsSection"
import { CtaButtons } from "@/components/cta-buttons"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function VisitorSection() {
  return (
    <section className="w-full bg-white relative">

      {/* CONTENT */}
      <div className="pb-20">
        <StatsSection />
        <CtaButtons />
      </div>

      {/* BACK TO TOP */}
      <Button
        size="icon"
        className="
          fixed
          bottom-4 right-4
          sm:bottom-6 sm:right-6
          md:bottom-8 md:right-8
          h-12 w-12 md:h-14 md:w-14
          rounded-full
          bg-[#FF5252] hover:bg-[#E64545]
          text-white shadow-xl
          z-50
        "
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
        <span className="sr-only">Back to top</span>
      </Button>

    </section>
  )
}
