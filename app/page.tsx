import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { VisitSection } from "@/components/VisitSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { SectorsSection } from "@/components/SectorsSection"
import { VideoSection } from "@/components/VideoSection"
import { CountriesSection } from "@/components/CountriesSection"
import { StatsSection } from "@/components/StatsSection"
import { DownloadSection } from "@/components/DownloadSection"
import { ExhibitSection } from "@/components/ExhibitSection"
import { SocialFooterSection } from "@/components/SocialFooterSection"
import { PartnersSection } from "@/components/PartnersSection"
import { CapturedMomentsSection } from "@/components/CapturedMomentsSection"
import { InsightsTrendsSection } from "@/components/InsightsTrendsSection"
import { MainFooter } from "@/components/MainFooter"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
       <StatsSection />
         <VideoSection />
          <ExhibitSection />
       <VisitSection />
        <DownloadSection />
          <SectorsSection />
          <SocialFooterSection />
              <CountriesSection />
     
      <TestimonialsSection />
    
    
  
     
     
     
      
      
     
      
       <InsightsTrendsSection />
      <CapturedMomentsSection />
      <PartnersSection />
      <MainFooter />
    </main>
  )
}
