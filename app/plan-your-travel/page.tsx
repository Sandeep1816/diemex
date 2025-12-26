import TravelHero from "@/components/travel/TravelHero";
import TravelIntro from "@/components/travel/TravelIntro";
import ExhibitorInfo from "@/components/travel/ExhibitorInfo";
import VisitorInfo from "@/components/travel/VisitorInfo";
import HotelOffers from "@/components/travel/HotelOffers";
import CityGuideCTA from "@/components/travel/CityGuideCTA";
import { PartnersSection } from "@/components/PartnersSection";

export default function PlanYourTravelPage() {
  return (
    <>
      <TravelHero />
      <TravelIntro />
      <ExhibitorInfo />
      <VisitorInfo />
      <HotelOffers />
      <CityGuideCTA />
      <PartnersSection />
    </>
  );
}
