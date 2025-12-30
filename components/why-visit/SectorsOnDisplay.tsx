import Image from "next/image";

const sectors = [
  {
    title: "Health & Medical Tourism",
    desc: "Access top providers in wellness and healthcare travel.",
    img: "/images/about.png",
  },
  {
    title: "Hotel & Accommodation",
    desc: "Explore cutting-edge hospitality solutions.",
    img: "/images/about.png",
  },
  {
    title: "Hotel Equipment & Services",
    desc: "Find tools to elevate hospitality standards.",
    img: "/images/about.png",
  },
];

export default function SectorsOnDisplay() {
  return (
    <section className="py-[140px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <h2 className="title-50 font-black text-[#0f2238] mb-12">
          Sectors On Display
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">
          {sectors.map((s) => (
            <div key={s.title}>
              <Image src={s.img} alt="" width={400} height={260} />
              <h3 className="text-[24px] font-black mt-4">{s.title}</h3>
              <p className="mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
