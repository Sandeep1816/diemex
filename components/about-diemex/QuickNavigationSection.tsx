import Link from "next/link"

export function QuickNavigationSection() {
  return (
    <section className="py-24  font-helvetica">
      <div className="layout">
        
        {/* SECTION TITLE */}
        <h2 className="text-[44px] font-bold text-[#1a2c42] mb-16">
          Quick Navigation
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* CARD 1 */}
          <div className="bg-[#0f2742] text-white px-10 py-12 flex flex-col min-h-[360px]">
            <h3 className="text-[36px] font-bold mb-6">
              Exhibit
            </h3>

            <p className="text-[18px] leading-relaxed mb-10 flex-1 max-w-[90%]">
              Reach key buyers, expand your network, and position your brand at
              Eurasia’s leading travel and tourism exhibition.
            </p>

            <Link
              href="#"
              className="
                flex
                items-center
                justify-center
                h-[56px]
                w-full
                bg-[#ff3232]
                text-[#ebebeb]
                font-[var(--font-bebas)]
                text-[24px]
                uppercase
                px-[28px]
                transition-colors
                hover:bg-[#e62d2d]
              "
            >
              Book Your Stand
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#0f2742] text-white px-10 py-12 flex flex-col min-h-[360px]">
            <h3 className="text-[36px] font-bold mb-6">
              Event Brochure
            </h3>

            <p className="text-[18px] leading-relaxed mb-10 flex-1 max-w-[90%]">
              Get insights into the CIS’s leading travel exhibition. Download the
              brochure for highlights and opportunities.
            </p>

            <Link
              href="#"
              className="
                flex
                items-center
                justify-center
                h-[56px]
                w-full
                bg-[#ff3232]
                text-[#ebebeb]
                font-[var(--font-bebas)]
                text-[24px]
                uppercase
                px-[28px]
                transition-colors
                hover:bg-[#e62d2d]
              "
            >
              Download Now
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#0f2742] text-white px-10 py-12 flex flex-col min-h-[360px]">
            <h3 className="text-[36px] font-bold mb-6">
              Visitor Ticket
            </h3>

            <p className="text-[18px] leading-relaxed mb-10 flex-1 max-w-[90%]">
              Don’t miss your chance to explore global destinations, connect with
              industry leaders, and discover the latest travel trends.
            </p>

            <Link
              href="#"
              className="
                flex
                items-center
                justify-center
                h-[56px]
                w-full
                bg-[#ff3232]
                text-[#ebebeb]
                font-[var(--font-bebas)]
                text-[24px]
                uppercase
                px-[28px]
                transition-colors
                hover:bg-[#e62d2d]
              "
            >
              Register Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
