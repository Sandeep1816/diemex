import { Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SocialFooterSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Explore All Sectors Banner */}
          <div className="bg-[#ef4444] py-8 px-6 text-center rounded-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide">
              Explore All Sectors
            </h2>
          </div>

          {/* Social Media Section */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-balance">
                Want more of Diemex?
              </h3>

              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Follow us on LinkedIn and Instagram for the latest updates, industry insights, and exclusive
                opportunities to engage with the global travel community.
              </p>

              <Button
                variant="default"
                className="bg-[#1a2c42] hover:bg-[#2a3c52] text-white px-8 py-6 text-base font-bold uppercase tracking-wide"
              >
                Follow Us
              </Button>
            </div>

            <div className="flex justify-center gap-8">
              <Link
                href="#"
                className="flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:scale-105 transition-transform"
              >
                <Instagram className="w-16 h-16 text-white" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-32 h-32 rounded-3xl bg-[#0077b5] hover:scale-105 transition-transform"
              >
                <Linkedin className="w-16 h-16 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
