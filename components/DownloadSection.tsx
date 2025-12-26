import { Button } from "@/components/ui/button"

export function DownloadSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-full mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-balance">
              Want to Learn More About MITT?
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Download the Event Brochure to discover who you'll meet, explore the key sectors on display, and learn how
              MITT can help you tap into Eurasia's growing tourism market and build valuable partnerships.
            </p>

            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-bold uppercase tracking-wide"
            >
              Download Now
            </Button>
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
