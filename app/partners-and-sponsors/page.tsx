import PartnersSection from "@/components/partners/PartnersSection";

export default function PartnersAndSponsorsPage() {
  return (
    <main className="">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0b1c2d] mb-16">
          Our Partners and Sponsors
        </h1>

        <PartnersSection
          title="Government"
          items={[
            "/images/fastenexlogo.webp",
             "/images/fastenexlogo.webp",
              "/images/fastenexlogo.webp",
            // "/images/partners/gov2.png",
            // "/images/partners/gov3.png",
          ]}
        />

        <PartnersSection
          title="Association"
          items={[
         "/images/fastenexlogo.webp",
             "/images/fastenexlogo.webp",
              "/images/fastenexlogo.webp",
          ]}
        />

        <PartnersSection
          title="General Partners"
          items={[
          "/images/fastenexlogo.webp",
             "/images/fastenexlogo.webp",
              "/images/fastenexlogo.webp",
          ]}
        />

        <PartnersSection
          title="MITT Travel Start Partners"
          items={[
          "/images/fastenexlogo.webp",
             "/images/fastenexlogo.webp",
              "/images/fastenexlogo.webp",
          ]}
        />

        <PartnersSection
          title="Media Partners"
          items={[
           "/images/fastenexlogo.webp",
             "/images/fastenexlogo.webp",
              "/images/fastenexlogo.webp",
          ]}
        />

      </div>
    </main>
  );
}
