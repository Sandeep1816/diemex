import HeroSection from "@/components/download-event-brochure/HeroSection"
import IntroSection from "@/components/download-event-brochure/IntroSection"
import StatsAndImageSection from "@/components/download-event-brochure/StatsAndImageSection"
import DownloadBrochureForm from "@/components/download-event-brochure/DownloadBrochureForm"
import { CTASection } from "@/components/download-event-brochure/CTASection"
import PartnersSponsors from "@/components/diemex-group/PartnersSponsors"
import { PartnersSection } from "@/components/PartnersSection"

export default function DownloadEventBrochurePage() {
  return (
    <main className=" max-w-full">
      <HeroSection />

      <section className="px-6 pb-[160px]">
        <div className="mx-auto max-w-[1680px] grid grid-cols-1 lg:grid-cols-2 gap-x-[50px]">
          <div className="space-y-[96px]">
            <IntroSection />
            <StatsAndImageSection />
          </div>

          <div className="mt-[140px]">
            <DownloadBrochureForm />
          </div>
        </div>
      </section>

      <CTASection />

      <PartnersSection />
    </main>
  )
}
