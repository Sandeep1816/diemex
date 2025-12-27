import HeroSection from "@/components/connect/HeroSection"
import IntroSection from "@/components/connect/IntroSection"
import WhyUseSection from "@/components/connect/WhyUseSection"
import LeadScanningSection from "@/components/connect/LeadScanningSection"
import MatchmakingSection from "@/components/connect/MatchmakingSection"
import ForWhomSection from "@/components/connect/ForWhomSection"
import GetStartedSection from "@/components/connect/GetStartedSection"
import FinalCTASection from "@/components/connect/FinalCTASection"
import SupportSection from "@/components/connect/SupportSection"

export default function ConnectPage() {
  return (
    <main className="bg-[#f3f2f1] text-[#0f2238]">
      <HeroSection />
      <IntroSection />
      <WhyUseSection />
      <LeadScanningSection />
      <MatchmakingSection />
     
      <ForWhomSection />
       <FinalCTASection />
      <GetStartedSection />
      <SupportSection />
      
    </main>
  )
}
