export default function IntroSection() {
  return (
    <section className="   pb-[120px]">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-6xl  mb-6 font-extrabold">
            MITT Connect: Share, Learn & Grow Together
          </h2>

          <p className="text-xl leading-relaxed mb-6">
            <strong>MITT Connect Community</strong> is a year-round platform for travel and tourism professionals to connect,
            share insights, and grow their business. It unites exhibitors, buyers, destinations,
            and industry experts—creating meaningful connections that extend beyond the exhibition.

          </p>

          <h3 className="text-2xl font-bold text-[#0f2238] mb-6">
            Key Features & Benefits
          </h3>

          <ul className="space-y-3 text-[#0f2238] text-base leading-relaxed list-disc pl-6 max-w-5xl">
            <li>
              <strong>Global Travel Insights</strong> – Access the latest trends,
              destination updates, and expert opinions.
            </li>

            <li>
              <strong>Digital Events & Webinars</strong> – Learn from leading voices in
              the travel industry.
            </li>

            <li>
              <strong>Networking All Year</strong> – Connect with{" "}
              <strong>12,500+</strong> professionals and{" "}
              <strong>~24,000</strong> monthly visitors to grow your reach.
            </li>

            <li>
              <strong>Smart Matchmaking</strong> – Meet the right buyers and partners for
              your business.
            </li>

            <li>
              <strong>Event Highlights</strong> – Stay visible with continuous updates
              and engagement opportunities.
            </li>
          </ul>

          <p className="mt-8 text-[#0f2238] text-xl leading-relaxed max-w-5xl">
            With MITT Connect, your{" "}
            <strong>brand stays visible, connected</strong>, and{" "}
            <strong>growing all year long</strong>.
          </p>

        </div>

        <div className="flex justify-center">
          <div className="w-[320px] h-[640px] bg-black rounded-[40px]" />
        </div>
      </div>
    </section>
  )
}
