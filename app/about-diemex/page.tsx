import { Navbar } from "@/components/Navbar"
import { MainFooter } from "@/components/MainFooter"
import { ScrollToTop } from "@/components/scroll-to-top"
import { TestimonialCarousel } from "@/components/TestimonialsSection"

import {
  HeroSection,
  FeatureCardsSection,
  EcosystemIntroSection,
  ConnectDetailSection,
  TravelInfoSection,
  AboutStatsSection,
  QuickNavigationSection,
} from "@/components/about-diemex"
import { SectorsSection } from "@/components/SectorsSection"
import { DownloadSection } from "@/components/DownloadSection"
import { CountriesSection } from "@/components/CountriesSection"
import { PartnersSection } from "@/components/PartnersSection"

export default function AboutMITTPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutStatsSection />
       <SectorsSection />
         <DownloadSection />
           <EcosystemIntroSection />
           
      
      <FeatureCardsSection />
       <CountriesSection />
    
      <ConnectDetailSection />
      <TravelInfoSection />
      
      <QuickNavigationSection />
        <PartnersSection />
      
      <MainFooter />
      <ScrollToTop />
    </>
  )
}
