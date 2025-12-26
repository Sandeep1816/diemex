import Image from "next/image";

const sectors = [
  {
    title: "Tour Operators",
    description:
      "Connect with global experts shaping unforgettable travel experiences.",
    image: "/images/industrial-mold-tool-product.jpg",
  },
  {
    title: "Transport Services & Air Carriage",
    description:
      "Connect with leaders delivering seamless travel experiences worldwide.",
    image: "/images/team-management-success.jpg",
  },
  {
    title: "Health & Medical Tourism",
    description:
      "Access top providers in the growing wellness and healthcare travel sector.",
    image: "/images/cybersecurity-business.jpg",
  },
  {
    title: "Hotel & Accommodation",
    description:
      "Explore innovative hospitality solutions for every type of traveller.",
    image: "/images/cutting-tools-inserts.jpg",
  },
  {
    title: "Luxury Travel",
    description:
      "Showcase premium experiences designed for high-value travellers.",
    image: "/images/cad-cam-software-design.jpg",
  },
  {
    title: "Travel Technology",
    description:
      "Discover digital solutions shaping the future of tourism.",
    image: "/images/industrial-mold-tool-product.jpg",
  },
];

export default function SectorsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
      {sectors.map((sector, index) => (
        <div key={index}>
          
          {/* IMAGE */}
          <div className="relative aspect-[4/3] mb-6">
            <Image
              src={sector.image}
              alt={sector.title}
              fill
              className="object-cover"
            />
          </div>

          {/* TITLE */}
          <h3
            className="
              font-[var(--font-helvetica)]
              text-[#10223B]
              text-2xl
              font-bold
              mb-3
            "
          >
            {sector.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              font-[var(--font-helvetica)]
              text-[#10223B]
              text-base
              leading-relaxed
              opacity-90
            "
          >
            {sector.description}
          </p>
        </div>
      ))}
    </div>
  );
}
