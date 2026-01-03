import Image from "next/image"

export default function ExploreOpportunities() {
  return (
    <section className="  py-24">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[48px] font-bold text-[#0e243f] mb-10">
            Explore Opportunities
          </h2>

          <p className="text-[17px] leading-relaxed text-[#0e243f] max-w-xl mb-12">
            As a participant at MITT, our team is dedicated to providing you with a variety of
            participation opportunities to make the most of your exhibition experience.
            From pre-event to post, we have created guides to help with the decision-making
            process and onboarding in a seamless manner.
          </p>

          <a
            href="#"
            className="text-[16px] text-[#0e243f] underline underline-offset-4 font-medium"
          >
            Download Manual
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-end">
          <Image
            src="/images/exhibitguide.png"
            alt="MITT Exhibition Guide"
            width={520}
            height={520}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
