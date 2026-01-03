import Link from "next/link"

export function TravelInfoSection() {
  return (
    <section className="w-screen">
      <div className="grid md:grid-cols-2 gap-20 items-end">

        {/* LEFT CONTENT */}
        <div className="max-w-[740px] pl-0">
          <h2 className="text-[52px] font-bold text-[#1a2c42] mb-8">
            Seamlessly Arrive at MITT
          </h2>

          <p className="text-[17px] leading-[1.75] text-[#1a2c42] mb-10">
            Planning your visit to MITT has never been easier.
          </p>

          <Link href="#" className="underline">
            Plan Your Travel
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-end">
          <img
            src="/images/stream.png"
            alt="Travel to MITT"
            className="w-[360px]"
          />
        </div>

      </div>
    </section>
  )
}
