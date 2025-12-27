import HeroSection from "@/components/FreePromoPage/HeroSection"
import PromoCodeSection from "@/components/FreePromoPage/PromoCodeSection"
import PromoCardsSection from "@/components/FreePromoPage/PromoCardsSection"
import EmailSignatureSection from "@/components/FreePromoPage/EmailSignatureSection"

export default function FreePromo() {
  return (
    <main className="bg-[#f3f2f1]">
      <HeroSection />   
      <PromoCodeSection />
      <PromoCardsSection />
      <EmailSignatureSection />
    </main>
  )
}
