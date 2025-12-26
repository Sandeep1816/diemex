import Image from "next/image";
import Link from "next/link";

const sectors = [
  {
    title: "National Tourist Offices",
    description:
      "Showcase your destination and attract travelers from around the world.",
    image: "/images/green-factory-team.jpg",
    link: "#",
  },
  {
    title: "Health & Medical Tourism",
    description:
      "Access top providers in the growing wellness and healthcare travel sector.",
    image: "/images/cad-cam-software-design.jpg",
    link: "#",
  },
  {
    title: "Hotel & Accommodation",
    description:
      "Explore cutting-edge hospitality solutions for every type of traveller.",
    image: "/images/cutting-tools-inserts.jpg",
    link: "#",
  },
];

export default function KeySectors() {
  return (
    <section className="bg-[#0b1c2d] antialiased">
      <div className="max-w-full mx-auto px-6 py-24">

        {/* Heading */}
        <h2
          className="
            font-[var(--font-helvetica)]
            text-white
            text-[clamp(2.5rem,4vw,4.5rem)]
            font-bold
            mb-16
            leading-tight
          "
        >
          Showcasing the Future of Travel: Explore
          <br />
          Key Sectors at MITT 2025
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {sectors.map((sector, index) => (
            <div key={index}>
              {/* Image */}
              <div className="relative aspect-[4/3] mb-6">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-white text-2xl font-bold mb-3">
                {sector.title}
              </h3>

              <p className="text-white/80 leading-relaxed mb-4">
                {sector.description}
              </p>

              {sector.link && (
                <Link
                  href={sector.link}
                  className="inline-flex items-center gap-2 text-white font-bold uppercase text-sm hover:underline"
                >
                  Read More →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#ff2f2f] py-10 text-center">
        <span
          className="
            font-[var(--font-bebas)]
            text-white
            text-4xl
            uppercase
            underline
            underline-offset-8
          "
        >
          Explore More
        </span>
      </div>
    </section>
  );
}
