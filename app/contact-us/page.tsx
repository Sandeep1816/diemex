import HeroSection from "@/components/ContactUs/HeroSection"
import ContactForm from "@/components/ContactUs/ContactForm"

export default function ContactUsPage() {
  return (
    <main className="bg-[#f3f2f1]">
      {/* HERO */}
      <HeroSection />

      {/* FORM SECTION */}
      <section className="px-6 lg:px-20 pb-[160px]">
        <div className="mx-auto  max-w-[650px]">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
