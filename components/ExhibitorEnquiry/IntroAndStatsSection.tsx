export default function IntroAndStatsSection() {
  return (
    <section className="">
      <h2 className="text-[#0f2238] font-extrabold text-[36px] md:text-[44px] leading-tight">
        Be Part of Eurasia’s Leading
        <br />
        B2B Travel & Tourism
        <br />
        Exhibition
      </h2>

      <p className="mt-4 text-themeRed font-semibold">
        Fill out your details and our team will be in touch to help you explore
        exhibiting opportunities.
      </p>

      <h3 className="mt-10 font-bold text-[#0f2238]">
        Why Exhibit?
      </h3>

      <p className="mt-2 text-[#0f2238] leading-relaxed">
        Showcase your destinations, services, and solutions across the full travel
        and tourism value chain – from leisure and luxury to MICE, wellness and niche
        tourism. Tap into one of Eurasia’s most dynamic outbound markets.
      </p>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 gap-y-10 gap-x-16">
        {[
          ["16,427", "Visitors"],
          ["1,008", "Exhibitors"],
          ["3,807", "Delegates"],
          ["17,500 sqm", "Exhibition Area"],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-themeRed text-3xl font-bold">{value}</p>
            <p className="text-[#0f2238]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
