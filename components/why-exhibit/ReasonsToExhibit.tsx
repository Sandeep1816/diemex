const reasons = [
  {
    title: "Reach the Right Buyers",
    text:
      "Struggling to find quality leads? At MITT, you’ll connect directly with decision-makers—tour operators, travel agencies, and hospitality leaders actively looking for partnerships and solutions like yours.",
  },
  {
    title: "Meet the Right Decision-Makers",
    text:
      "MITT brings together tour operators, travel agencies, hospitality providers, and tourism authorities—key industry professionals looking for partnerships that drive business forward.",
  },
  {
    title: "Showcase Your Destination or Product",
    text:
      "Position your destination, travel solutions, or innovations in front of 16,000+ attendees from over 30 countries, eager to explore new opportunities and engage with global suppliers.",
  },
  {
    title: "Build Strategic Partnerships",
    text:
      "Connect with influential Eurasian travel agencies and industry leaders, fostering partnerships that help you expand into a growing and underserved market.",
  },
  {
    title: "Engage with Key Sectors",
    text:
      "From luxury travel and medical tourism to glamping, caravanning, and travel technology, MITT offers a platform to tap into high-growth sectors and meet the needs of today’s travellers.",
  },
  {
    title: "Close Deals Onsite",
    text:
      "Turn opportunities into tangible results. At MITT, vetted buyers and professionals are ready to discuss, negotiate, and sign contracts directly on the show floor.",
  },
  {
    title: "Boost Your Brand’s Visibility",
    text:
      "Showcase your offering to an audience with strong buying power, from regional tourism boards to corporate travel decision-makers, positioning your brand as a trusted leader in the industry.",
  },
  {
    title: "Discover Market Trends",
    text:
      "Explore the latest insights and opportunities driving tourism growth through MITT’s well-curated conference programme attended by destination boards, government associations, and industry experts.",
  },
  {
    title: "Stand Out in an Underserved Market",
    text:
      "As geopolitical shifts change travel patterns, MITT provides a unique opportunity to capture market share and introduce your destination or service to a highly motivated traveller base.",
  },
];

export default function ReasonsToExhibit() {
  return (
    <section className=" antialiased">
      <div className="max-w-full mx-auto px-6 py-28">

        {/* Heading */}
        <h2
          className="
            font-[var(--font-helvetica)]
            text-[#10223B]
            text-[clamp(2.5rem,4vw,4.5rem)]
            font-bold
            mb-6
          "
        >
          9 Good Reasons to Exhibit at MITT 2026
        </h2>

        {/* Divider */}
        <div className="h-px w-full bg-red-500 mb-20" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-24">
          {reasons.map((reason, index) => (
            <div key={index}>
              {/* Number */}
              <div
                className="
                  font-[var(--font-helvetica)]
                  text-red-500
                  text-4xl
                  font-bold
                  mb-6
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3
                className="
                  font-[var(--font-helvetica)]
                  text-[#10223B]
                  text-2xl
                  font-bold
                  mb-4
                "
              >
                {reason.title}
              </h3>

              {/* Text */}
              <p
                className="
                  font-[var(--font-helvetica)]
                  text-[#10223B]
                  text-base
                  leading-relaxed
                  opacity-90
                "
              >
                {reason.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
