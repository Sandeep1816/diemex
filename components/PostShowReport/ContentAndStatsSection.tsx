import Image from "next/image"
export default function ContentAndStatsSection() {
  return (
    <section className="space-y-[64px]">
      {/* Intro */}
      <div>
        <h2 className="text-[#0f2238] font-extrabold text-[36px] md:text-[44px] leading-tight">
          MITT 2025: 31st Edition
          <br />
          Recap
        </h2>

        <p className="mt-4 max-w-[640px] text-[#0f2238] leading-relaxed">
          The 31st edition of MITT brought together over 1,000 exhibitors from
          34 countries and 16,000+ travel professionals from across Russia and
          beyond — reaffirming its role as a leading B2B platform for the global
          tourism industry.
        </p>
      </div>

      {/* Benefits */}
      <div>
        <h3 className="font-bold text-[#0f2238] mb-2">
          Download the Post-Show Report to:
        </h3>

        <ul className="space-y-1 text-[#0f2238]">
          <li>• Access key exhibitor & visitor stats</li>
          <li>• Discover top-performing sectors</li>
          <li>• Gain insights into buyer trends for 2026</li>
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-x-20 gap-y-12">
        {[
          ["16,427", "Visitors"],
          ["1,008", "Exhibitors"],
          ["34", "Exhibiting Countries"],
          ["17,500", "SQM"],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-themeRed text-[40px] font-bold leading-none">
              {value}
            </p>
            <p className="text-[#0f2238] font-semibold mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Brochure Image Placeholder */}
      <div className="pt-10">
          <Image
               src="/images/brochure.png" // replace with real image
               alt="MITT Event Brochure"
               width={600}
               height={400}
               className="max-w-[520px]"
             />
      </div>
    </section>
  )
}
