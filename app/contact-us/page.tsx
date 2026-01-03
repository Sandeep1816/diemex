import HeroSection from "@/components/ContactUs/HeroSection"
import ContactForm from "@/components/ContactUs/ContactForm"

export default function ContactUsPage() {
  return (
    <main className="">
      {/* HERO */}
      <HeroSection />

      {/* FORM SECTION */}
      <section className=" lg:px-20 pb-[160px]">
        <div className="mx-auto  max-w-[650px]">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
