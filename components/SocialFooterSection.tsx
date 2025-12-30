import { Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SocialFooterSection() {
  return (
    <section className=" py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto">
          {/* Social Media Section */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-balance leading-tight">
                Want more of MITT?
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-xl">
                Follow us on LinkedIn and Instagram for the latest updates, industry insights, and exclusive
                opportunities to engage with the global travel community.
              </p>

              <Button
                variant="default"
                className="bg-[#1a2c42] hover:bg-[#2a3c52] text-white px-8 py-6 text-base font-bold uppercase tracking-wider"
              >
                Follow Us
              </Button>
            </div>

            <div className="flex justify-center md:justify-end gap-6 lg:gap-8">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:scale-105 transition-transform shadow-lg"
              >
                <Instagram className="w-16 h-16 lg:w-20 lg:h-20 text-white" strokeWidth={1.5} />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-[#0077b5] hover:scale-105 transition-transform shadow-lg"
              >
                <Linkedin className="w-16 h-16 lg:w-20 lg:h-20 text-white" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
