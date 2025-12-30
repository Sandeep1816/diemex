
import ContactQueryBanner from "@/components/more/ContactQueryBanner";
import HeroSection from "@/components/more/herosection";
import MainEventsIncluded from "@/components/more/MainEventsIncluded";
import PartnersSponsors from "@/components/more/PartnersSponsors";
import UnlockInsights from "@/components/more/UnlockInsights";


export default function ConferenceProgramme() {
  return (
    <main className="text-[#0f2238]">
      <HeroSection />
      <UnlockInsights />
      <MainEventsIncluded />
      <ContactQueryBanner />
      <PartnersSponsors />
      
    </main>
  )
}
