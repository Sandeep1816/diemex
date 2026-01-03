import PartnersSection from "@/components/partners/PartnersSection";

export default function PartnersAndSponsorsPage() {
  return (
    <main>
      <div className="max-w-[1400px] mx-auto py-20">

        <h1 className="text-5xl md:text-6xl title-202  text-[#0b1c2d] mb-16">
          Our Partners and Sponsors
        </h1>

        <PartnersSection
          title="Government"
          items={[
            {
              logo: "/images/fastenexlogo.webp",
              name: "Government of the Russian Federation",
              website: "#",
            },
            {
              logo: "/images/fastenexlogo.webp",
              name: "Government of Altai Krai",
              website: "#",
            },
          ]}
        />

        <PartnersSection
          title="Association"
          items={[
            {
              logo: "/images/fastenexlogo.webp",
              name: "Association of Tourism Agencies",
              website: "#",
            },
             {
              logo: "/images/fastenexlogo.webp",
              name: "Association of Tourism Agencies",
              website: "#",
            }
          ]}
        />

        <PartnersSection
          title="General Partners"
          items={[
            {
              logo: "/images/fastenexlogo.webp",
              name: "Fastenex Group",
              website: "#",
            },
              {
              logo: "/images/fastenexlogo.webp",
              name: "Fastenex Group",
              website: "#",
            }
          ]}
        />

        <PartnersSection
          title="Media Partners"
          items={[
            {
              logo: "/images/fastenexlogo.webp",
              name: "Travel Media Network",
              website: "#",
            },
             {
              logo: "/images/fastenexlogo.webp",
              name: "Travel Media Network",
              website: "#",
            }
          ]}
        />

      </div>
    </main>
  );
}
