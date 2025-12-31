import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { VisitSection } from "@/components/VisitSection"
import { TestimonialCarousel } from "@/components/TestimonialsSection"
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
import VisitorSection from "@/components/VisitorSection"

export default function Page() {
  return (
    <main className="">
      {/* <Navbar /> */}
      <HeroSection />
       {/* <StatsSection /> */}
       <VisitorSection />
         <VideoSection />
          <ExhibitSection />
       <VisitSection />
        <DownloadSection />
          <SectorsSection />
          <SocialFooterSection />
              <CountriesSection />
     
      {/* <TestimonialsSection /> */}
      <TestimonialCarousel /> 
       <InsightsTrendsSection />
      <CapturedMomentsSection />
      <PartnersSection />
      {/* <MainFooter /> */}
    </main>
  )
}
