import { Button } from "@/components/ui/button"

export function CountriesSection() {
  const countries = [
    "Algeria",
    "Kazakhstan",
    "Uganda",
    "Sri Lanka",
    "Jordan",
    "Uzbekistan",
    "Malaysia",
    "Thailand",
    "Türkiye",
    "Indonesia",
    "Cuba",
  ]

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-primary text-balance">
          Meet the World : Our Exhibiting Countries
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground leading-tight">
              {countries.slice(0, 4).join(", ")},
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground leading-tight">
              {countries.slice(4, 8).join(", ")},
            </p>
            <div className="relative inline-block">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground leading-tight">
                {countries.slice(8, 9).join(", ")},{" "}
                <span className="relative inline-block">
                  <span className="font-bold text-foreground">Indonesia</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/bali-indonesia-temple-scenic.jpg"
                      alt="Indonesia"
                      className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                    />
                  </div>
                </span>
                , {countries.slice(10).join(", ")}.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              variant="default"
              className="bg-[#1a2c42] hover:bg-[#2a3c52] text-white px-8 py-6 text-lg font-bold uppercase tracking-wide"
            >
              Explore the Exhibitor List
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
