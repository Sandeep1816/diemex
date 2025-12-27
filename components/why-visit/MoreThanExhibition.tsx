import Image from "next/image";

export default function MoreThanExhibition() {
  return (
    <section className="bg-[#f3f2f1] py-[160px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 space-y-[160px]">

        {/* SECTION 1 — CONFERENCE PROGRAMME */}
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-[72px] font-black text-[#0f2238] leading-tight mb-12">
              MORE THAN JUST AN
              <br />
              EXHIBITION
            </h2>

            <p className="text-[18px] font-semibold text-[#0f2238] mb-6">
              Conference Programme
            </p>

            <p className="text-[18px] text-[#0f2238] leading-relaxed max-w-[520px]">
              The MITT 2025 conference program offered a 3-day agenda with
              20+ sessions, conferences, and seminars. Industry experts shared
              insights on market trends, innovation, and operational efficiency,
              helping attendees gain practical strategies to strengthen their
              competitive edge and drive growth.
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/images/students.jpg"
              alt="MITT Conference Programme"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* SECTION 2 — MITT CONNECT */}
        <div className="mt-10 grid lg:grid-cols-2 gap-24 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/mobile.png"
              alt="MITT Connect App"
              width={340}
              height={680}
              className="h-auto"
            />
          </div>

          <div>
            <p className="text-[18px] font-semibold text-[#0f2238] mb-6">
              MITT Connect
            </p>

            <p className="text-[18px] text-[#0f2238] leading-relaxed max-w-[520px] mb-10">
              Join MITT to connect with industry professionals, explore new
              business opportunities, and keep your brand visible year-round.
              The official MITT app provides easy access to event schedules,
              exhibitor offers, networking tools, and interactive floor
              plans—all in one convenient platform, right at your fingertips.
            </p>

            <div className="flex items-center gap-3 border-b border-[#0f2238] w-fit pb-1">
              <span className="font-bold uppercase text-sm">Explore More</span>
              <span className="text-xl">↘</span>
            </div>
          </div>
        </div>

        {/* SECTION 3 — MITT TRAVEL START COMPETITION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-[18px] font-semibold text-[#0f2238] mb-6">
              MITT Travel Start Competition
            </p>

            <p className="text-[18px] text-[#0f2238] leading-relaxed max-w-[520px] mb-10">
              The MITT exhibition held its fourth annual MITT Travel Start
              competition. This competition recognises and celebrates the most
              promising startups in Russia’s travel industry. It is supported
              by the Russian Union of Travel Industry (RST) and the Travel
              Startups community.
            </p>

            <div className="flex items-center gap-3 border-b border-[#0f2238] w-fit pb-1">
              <span className="font-bold uppercase text-sm">Learn More</span>
              <span className="text-xl">↘</span>
            </div>
          </div>

          <div className="w-full">
            <Image
              src="/images/awards.jpg"
              alt="MITT Travel Start Competition"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
