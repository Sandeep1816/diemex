import { Button } from "@/components/ui/button"

export function DownloadSection() {
  return (
    <section className=" py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-full mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold fithting-leading-tight text-[#0b1f33]">
              Want to Learn More About MITT?
            </h2>

            <p className="text-2xl">
              Download the Event Brochure to discover who you'll meet, explore the key sectors on display, and learn how
              MITT can help you tap into Eurasia's growing tourism market and build valuable partnerships.
            </p>

            <button
              // variant="default"
              className="bg-primary text-white  uppercase tracking-tighter text-xl  font-extrabold px-4 py-4 underline"
            >
              Download Now
            </button>
          </div>

          <div className="relative flex justify-center items-center">
            <img
              src="/images/brochure.png"
              alt="MITT Event Brochure"
              className="w-full max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
