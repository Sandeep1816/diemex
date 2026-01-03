export default function ForWhomSection() {
  return (
    <section className="max-w-full  pb-[140px] grid lg:grid-cols-2 gap-10">
      {["For Exhibitors", "For Visitors"].map((title) => (
        <div key={title} className="bg-[#0f2238] text-white p-14">
          <h3 className="text-[32px] font-black mb-6">{title}</h3>
          <ul className="space-y-3 text-[15px]">
            <li>Recommended profiles</li>
            <li>Detailed company insights</li>
            <li>Messaging & meetings</li>
          </ul>
        </div>
      ))}
    </section>
  )
}
