export default function IntroSection() {
  return (
    <section className=" px-6  pb-[120px]">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-[48px] font-black mb-6">
            MITT Connect: Share, Learn & Grow Together
          </h2>

          <p className="text-[16px] leading-relaxed mb-6">
            MITT Connect Community is a year-round platform for travel and
            tourism professionals to connect, share insights, and grow their
            business.
          </p>

          <ul className="space-y-3 text-[16px]">
            <li><strong>Global Travel Insights</strong> – Latest trends & updates</li>
            <li><strong>Digital Events & Webinars</strong></li>
            <li><strong>Networking All Year</strong></li>
            <li><strong>Smart Matchmaking</strong></li>
            <li><strong>Event Highlights</strong></li>
          </ul>

          <p className="mt-6 font-semibold">
            Your brand stays visible, connected, and growing all year long.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-[320px] h-[640px] bg-black rounded-[40px]" />
        </div>
      </div>
    </section>
  )
}
