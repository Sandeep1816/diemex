import HeroSection from "@/components/ExhibitorEnquiry/HeroSection"
import IntroAndStatsSection from "@/components/ExhibitorEnquiry/IntroAndStatsSection"
import WhoYouWillMeetSection from "@/components/ExhibitorEnquiry/WhoYouWillMeetSection"
import EnquiryForm from "@/components/ExhibitorEnquiry/EnquiryForm"

export default function ExhibitorEnquiryPage() {
  return (
    <main className="bg-[#f3f2f1]">
      <HeroSection />

      {/* CONTENT */}
      <section className="px-6  pb-[160px]">
        <div className="mx-auto max-w-[1680px]">
          
          {/* TWO HALVES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[50px]">
            
            {/* LEFT HALF */}
            <div className="space-y-[96px]">
              <IntroAndStatsSection />
              <WhoYouWillMeetSection />
            </div>

            {/* RIGHT HALF */}
            <div className="flex justify-start">
              <div className="mt-[100px] w-full max-w-full">
                <EnquiryForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
