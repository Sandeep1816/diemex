export default function IntroAndStatsSection() {
  return (
    <section className="">
      <h2 className="text-[#0f2238] font-bold text-6xl  leading-tight">
        Be Part of Eurasia’s Leading
        <br />
        B2B Travel & Tourism
        <br />
        Exhibition
      </h2>

      <p className="mt-4 text-red-600 font-semibold text-xl">
        Fill out your details and our team will be in touch to help you explore
        exhibiting opportunities.
      </p>

     <h3 className="mt-10 font-bold text-[#0f2238] text-xl">
  Why Exhibit?
</h3>

<p className="mt-3 text-[#0f2238] leading-relaxed text-base max-w-5xl">
  Showcase your destinations, services, and solutions across the full travel and
  tourism value chain — from{" "}
  <strong>leisure and luxury</strong> to <strong>MICE</strong>,{" "}
  <strong>wellness</strong>, and <strong>niche tourism</strong>. Tap into one of
  Eurasia’s most dynamic outbound markets. With{" "}
  <strong>29M+ outbound trips made by Russians in 2024</strong> and a market on
  the rise, MITT is your platform to connect, grow, and lead.
</p>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 gap-y-16 gap-x-24">
  {[
    ["16,427", "Visitors"],
    ["1,008", "Exhibitors"],
    ["3,807", "Delegates"],
    ["17,500 sqm", "Exhibition Area"],
  ].map(([value, label]) => (
    <div key={label}>
      {/* Number */}
      <p className="text-[#ff3b30] text-[56px] leading-none font-bold">
        {value}
      </p>

      {/* Label */}
      <p className="mt-3 text-[#0f2238] text-lg font-medium">
        {label}
      </p>
    </div>
  ))}
</div>

    </section>
  )
}
