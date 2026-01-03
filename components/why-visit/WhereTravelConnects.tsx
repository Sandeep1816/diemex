import Image from "next/image";

export default function WhereTravelConnects() {
  return (
    <section className=" pb-[140px]">
      <div className="  grid lg:grid-cols-2 gap-16">

        <div>
          <h2 className="title-70 font-black text-[#0f2238] leading-tight mb-6">
            Where Travel and<br />Tourism Connects
          </h2>

          <Image
            src="/images/visit.jpg"
            alt=""
            width={700}
            height={450}
            className="w-full"
          />
        </div>

        <div>
          <p className="text-[18px] text-[#0f2238] mb-12">
            As global travel demand evolves, MITT provides the ultimate platform
            for the entire tourism industry to connect, forge new partnerships,
            and discover innovative solutions.
          </p>

          <div className="grid grid-cols-2 gap-12 text-[#0f2238]">
            {[
              ["16,400+", "Visitors"],
              ["1,000+", "Exhibitors"],
              ["31+", "Conference Sessions"],
              ["265+", "Speakers"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-[48px] font-black">{value}</div>
                <div className="text-[16px]">{label}</div>
              </div>
            ))}
          </div>

          <a className="inline-block mt-10 underline font-medium">
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
