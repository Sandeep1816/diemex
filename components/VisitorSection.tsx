"use client"

import { StatsSection } from "@/components/StatsSection"
import { CtaButtons } from "@/components/cta-buttons"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function VisitorSection() {
  return (
    <main className="min-h-screen">
      <StatsSection />
      <CtaButtons />

      <Button
        size="icon"
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-[#FF5252] hover:bg-[#E64545] text-white shadow-xl z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="h-6 w-6" />
        <span className="sr-only">Back to top</span>
      </Button>
    </main>
  )
}
