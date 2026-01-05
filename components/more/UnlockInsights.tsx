import Image from "next/image"

export default function UnlockInsights() {
  return (
    <section className="w-full  py-20">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div>
          {/* Heading */}
          <h2 className="text-8xl  font-extrabold text-[#0b1f33] leading-tight">
            Unlock Insights.
            <br />
            Transform Travel.
          </h2>

          {/* Image */}
          <div className="relative mt-10 w-full h-[260px] md:h-[340px] overflow-hidden">
            <Image
              src="/bali-indonesia-temple-scenic.jpg"
              alt="Conference panel discussion"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between h-full ml-5">
          
          {/* Description */}
          <div>
            <p className="text-[#0b1f33] font-semibold leading-relaxed text-3xl">
              Industry leaders joined MITT 2025 for a dynamic conference
              programme that addressed the most pressing challenges in
              tourism and hospitality.
            </p>

            <p className="mt-10 text-xl text-gray-600 leading-relaxed ">
              Gain actionable insights, explore emerging trends, and connect
              with key decision-makers shaping the future of global travel.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-10 text-[1000px]">
            <Stat number="3" label="Days" />
            <Stat number="260+" label="Speakers" />
            <Stat number="3,800+" label="Delegates" />
            <Stat number="5" label="Halls" />
          </div>
          </div>

          {/* Stats */}
          
        </div>

      </div>
    </section>
  )
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="text-5xl font-extrabold text-[#0b1f33]">{number}</p>
      <p className="mt-1 text-sm text-gray-600">{label}</p>
    </div>
  )
}
