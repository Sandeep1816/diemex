import Link from "next/link"

export function TravelInfoSection() {
  return (
    <section className="bg-gray-100 py-24 font-helvetica">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div className="max-w-[640px]">
          <h2 className="text-[44px] md:text-[52px] font-bold text-[#1a2c42] leading-tight mb-8">
            Seamlessly Arrive at MITT
          </h2>

          <p className="text-[17px] leading-[1.75] text-[#1a2c42] mb-10">
            Planning your visit to MITT has never been easier. Whether you're
            traveling locally or internationally, our comprehensive guide
            ensures a hassle-free journey. Find essential details on how to
            reach the venue, recommended accommodations, visa requirements,
            and tips to make the most of your stay in Moscow.
          </p>

          <Link
            href="#"
            className="
              inline-block
              text-[16px]
              font-medium
              text-[#1a2c42]
              underline
              underline-offset-4
              hover:text-[#ef4444]
              transition-colors
            "
          >
            Plan Your Travel
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-end">
          <img
            src="/images/stream.png"
            alt="Travel to MITT"
            className="w-[260px] md:w-[320px] lg:w-[360px] object-contain"
          />
        </div>

      </div>
    </section>
  )
}
