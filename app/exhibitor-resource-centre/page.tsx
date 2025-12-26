import HeroTitle from "@/components/resource-centre/HeroTitle"
import ExploreOpportunities from "@/components/resource-centre/ExploreOpportunities"
import BusinessObjectives from "@/components/resource-centre/BusinessObjectives"
import ExhibitionGuide from "@/components/resource-centre/ExhibitionGuide"
import TechnicalDocuments from "@/components/resource-centre/TechnicalDocuments"
import TechnicalContacts from "@/components/resource-centre/TechnicalContacts"
import ScrollTop from "@/components/resource-centre/ScrollTop"
import { ConnectDetailSection } from "@/components/about-diemex"
import { PartnersSection } from "@/components/PartnersSection"

export default function Page() {
  return (
    <>
      <HeroTitle />
      <ExploreOpportunities />
      <BusinessObjectives />
        <ConnectDetailSection />
      <ExhibitionGuide />
    
      {/* <TechnicalDocuments /> */}
      <TechnicalContacts />
      <ScrollTop />
      <PartnersSection />
    </>
  )
}
