import WhyVisitHero from "@/components/why-visit/WhyVisitHero";
import WhereTravelConnects from "@/components/why-visit/WhereTravelConnects";
import PostShowReportCTA from "@/components/why-visit/PostShowReportCTA";
import WhoIsMittFor from "@/components/why-visit/WhoIsMittFor";
import SectorsOnDisplay from "@/components/why-visit/SectorsOnDisplay";
import ExploreSectorsCTA from "@/components/why-visit/ExploreSectorsCTA";
import MoreThanExhibition from "@/components/why-visit/MoreThanExhibition";
import ExploreMoscow from "@/components/why-visit/ExploreMoscow";
import { CountriesSection } from "@/components/CountriesSection";
import MarketSnapshot from "@/components/why-exhibit/MarketSnapshot";
import UnlockHorizons from "@/components/why-exhibit/UnlockHorizons";
import PartnersSponsors from "@/components/diemex-group/PartnersSponsors";
import { PartnersSection } from "@/components/PartnersSection";

export default function WhyVisitPage() {
  return (
    <main className="">
      <WhyVisitHero />
      <WhereTravelConnects />
      <CountriesSection />
      <MarketSnapshot />
       <UnlockHorizons />
      <PostShowReportCTA />
      <WhoIsMittFor />
      <SectorsOnDisplay />
      <ExploreSectorsCTA />
      <MoreThanExhibition />
      <ExploreMoscow />
      <PartnersSection />
    </main>
  );
}
