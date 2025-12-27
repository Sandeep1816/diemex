import Image from "next/image"

export default function StatsAndImageSection() {
  return (
    <section className="mt-20 space-y-16">
      {/* STATS */}
      <div className="grid grid-cols-2 gap-y-14 gap-x-24">
        {[
          ["16,427", "Visitors"],
          ["1,008", "Exhibitors"],
          ["34", "Exhibiting Countries"],
          ["17,500 sqm", "Exhibition Area"],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-themeRed text-[40px] font-bold leading-none">
              {value}
            </p>
            <p className="mt-1 text-[#0f2238] text-[14px]">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* BROCHURE IMAGE */}
      <Image
        src="/images/brochure.png" // replace with real image
        alt="MITT Event Brochure"
        width={600}
        height={400}
        className="max-w-[520px]"
      />
    </section>
  )
}
