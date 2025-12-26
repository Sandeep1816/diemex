import PartnersSection from "@/components/partners/PartnersSection";

export default function PartnersAndSponsorsPage() {
  return (
    <main className="bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0b1c2d] mb-16">
          Our Partners and Sponsors
        </h1>

        <PartnersSection
          title="Government"
          items={[
            "/images/partners/gov1.png",
            "/images/partners/gov2.png",
            "/images/partners/gov3.png",
          ]}
        />

        <PartnersSection
          title="Association"
          items={[
            "/images/partners/assoc1.png",
            "/images/partners/assoc2.png",
            "/images/partners/assoc3.png",
          ]}
        />

        <PartnersSection
          title="General Partners"
          items={[
            "/images/partners/gen1.png",
            "/images/partners/gen2.png",
            "/images/partners/gen3.png",
            "/images/partners/gen4.png",
          ]}
        />

        <PartnersSection
          title="MITT Travel Start Partners"
          items={[
            "/images/partners/start1.png",
            "/images/partners/start2.png",
            "/images/partners/start3.png",
          ]}
        />

        <PartnersSection
          title="Media Partners"
          items={[
            "/images/partners/media1.png",
            "/images/partners/media2.png",
            "/images/partners/media3.png",
          ]}
        />

      </div>
    </main>
  );
}
