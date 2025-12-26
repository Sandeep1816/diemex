import Image from "next/image";

export default function WhenYouSucceedSection() {
  return (
    <section className="bg-[#f2f2f2] py-16">
      <div className="max-w-8xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-6xl md:text-6xl font-extrabold text-[#0b1c2d] mb-10">
          When You Succeed, We Succeed
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Mission */}
          <div className="relative h-[260px] md:h-[300px] overflow-hidden">
            <Image
              src="/images/exhibitguide.png"
              alt="The Mission"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#6b2e1f]/80" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
              <h3 className="text-3xl font-bold mb-4">
                The Mission
              </h3>
              <p className="text-lg leading-relaxed max-w-md">
                To create unique and valuable events for the success of your
                business and the development of industries and economies.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative h-[260px] md:h-[300px] overflow-hidden">
            <Image
              src="/images/exhibitguide.png"
              alt="The Vision"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#6b2e1f]/80" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center text-white">
              <h3 className="text-3xl font-bold mb-4">
                The Vision
              </h3>
              <p className="text-lg leading-relaxed max-w-md">
                Connecting businesses year-round, both online and in person,
                allowing professionals to establish long-term business
                partnerships.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
