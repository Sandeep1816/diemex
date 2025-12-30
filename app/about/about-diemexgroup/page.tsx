import HeroSection from "@/components/diemex-group/HeroSection";
import AboutUsSection from "@/components/diemex-group/AboutUsSection";

import ExploreMoreCTA from "@/components/diemex-group/ExploreMoreCTA";
import EventsAtGlance from "@/components/diemex-group/EventsAtGlance";
import PartnersSponsors from "@/components/diemex-group/PartnersSponsors";
import { PartnersSection } from "@/components/PartnersSection";
import WhenYouSucceedSection from "@/components/diemex-group/WhenYouSucceedSection";

export default function ITEGroupPage() {
  return (
    <main className="">
      <HeroSection />
      <AboutUsSection />
       <WhenYouSucceedSection />
     
      <ExploreMoreCTA />
      <EventsAtGlance />
      {/* <PartnersSponsors /> */}
       <PartnersSection />
    </main>
  );
}
