const items = [
  {
    no: "01",
    title: "Find New Prospects",
    text:
      "Your company's name and direction should be clear and easy to understand. Key details you wish to convey to potential clients must stand out and be memorable.",
  },
  {
    no: "02",
    title: "Improve Existing Relationships",
    text:
      "Ensure your stand includes a spacious lounge, negotiation tables, a dedicated utility area for product displays, and interactive demo zones to engage visitors effectively.",
  },
  {
    no: "03",
    title: "Conduct Meetings",
    text:
      "Your stand should feature a well-designed meeting space. Consider creating separate “meeting rooms” or enclosed areas to ensure business discussions remain uninterrupted by the exhibition’s surroundings.",
  },
  {
    no: "04",
    title: "Increase Brand Identity",
    text:
      "A creative stand design paired with high-quality demonstrations of your top products can make a strong impact.",
  },
  {
    no: "05",
    title: "Competitor Research",
    text:
      "A compact stand can suffice, but it’s advantageous to position it near business program areas to stay at the centre of industry activities.",
  },
  {
    no: "06",
    title: "Showcase New Launches",
    text:
      "A vibrant and creative design, including clear navigation within the hall, can be highly effective. Ensure the invitation and presentation schedule is prominently displayed, large, and easy to read.",
  },
]

export default function BusinessObjectives() {
  return (
    <section className="bg-[#f4f3f1] px-6 py-28">
      {/* Title */}
      <h2 className="text-[48px] font-bold text-[#0e243f]">
        Stands For Your Business Objectives
      </h2>

      {/* Red divider */}
      <div className="mt-4 mb-24 h-[2px] w-full bg-[#ff3b30]" />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24 gap-y-28">
        {items.map((item) => (
          <div key={item.no}>
            {/* Number */}
            <div className="text-[#ff3b30] text-[42px] font-bold mb-10">
              {item.no}
            </div>

            {/* Title */}
            <h3 className="text-[22px] font-semibold text-[#0e243f] mb-6">
              {item.title}
            </h3>

            {/* Text */}
            <p className="text-[16px] leading-[1.8] text-[#6b7280] max-w-[420px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
