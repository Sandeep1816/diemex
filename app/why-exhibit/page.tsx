import HeroSection from "@/components/why-exhibit/HeroSection";
import UnlockHorizons from "@/components/why-exhibit/UnlockHorizons";
import MarketSnapshot from "@/components/why-exhibit/MarketSnapshot";
import ReasonsToExhibit from "@/components/why-exhibit/ReasonsToExhibit";
import DownloadBrochure from "@/components/why-exhibit/DownloadBrochure";
import KeySectors from "@/components/why-exhibit/KeySectors";
import Partnerships from "@/components/why-exhibit/Partnerships";
import DownloadReport from "@/components/why-exhibit/DownloadReport";
import Testimonials from "@/components/why-exhibit/Testimonials";
import ExhibitorsSnapshot from "@/components/why-exhibit/ExhibitorsSnapshot";
import { DownloadSection } from "@/components/DownloadSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ConnectDetailSection } from "@/components/about-diemex";
import { TestimonialCarousel } from "@/components/TestimonialsSection";
import { PartnersSection } from "@/components/PartnersSection";
import WhenAndWhere from "@/components/why-exhibit/WhenAndWhere";

export default function WhyExhibitPage() {
  return (
    <main className="bg-[#0b1c2d] text-white">
      <HeroSection />
      <UnlockHorizons />
      <MarketSnapshot />
      <ReasonsToExhibit />
      {/* <DownloadBrochure /> */}
       <DownloadSection />
         {/* <SectorsSection /> */}
      <KeySectors />
      <ConnectDetailSection />
      {/* <Partnerships /> */}
      <DownloadReport />
      {/* <Testimonials /> */}
      <TestimonialCarousel />
      <ExhibitorsSnapshot />
      <WhenAndWhere />
      <PartnersSection />
    </main>
  );
}
