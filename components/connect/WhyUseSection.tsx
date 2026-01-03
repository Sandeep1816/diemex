import Image from "next/image";

export default function WhyUseSection() {
  return (
    <section className=" pb-[140px]">
      {/* Title */}
      <h2 className="title-90 font-black text-[#0f2238] mb-14">
        Why Use MITT Connect?
      </h2>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        
        {/* LEFT IMAGE */}
        <div className="w-full">
          <Image
            src="/images/handshake.png" // replace with original image if available
            alt="MITT Connect Networking"
            width={900}
            height={650}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* RIGHT CONTENT BOX */}
        <div className="bg-[#0f2238] text-white px-4 py-16 flex flex-col justify-center align-center">
          
          <h3 className="text-5xl leading-tight font-semibold mb-10">
            Reach more people and
            <br />
            showcase your offerings
            <br />
            beyond the exhibition floor.
          </h3>

          <div className="space-y-6 text-xl leading-relaxed">
            <p>
              <strong>More Relevant Meetings:</strong>{" "}
              Get recommended buyers and partners based on your product
              categories, market needs and purchasing roles.
            </p>

            <p>
              <strong>Less Noise, More ROI:</strong>{" "}
              Focus on top profiles with real intent.
            </p>

            <p>
              <strong>Year-Round Leads:</strong>{" "}
              Build relationships beyond the event.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
