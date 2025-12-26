import PartnerCard from "./PartnerCard";

interface Props {
  title: string;
  items: string[];
}

export default function PartnersSection({ title, items }: Props) {
  return (
    <section className="mb-24">

      {/* Section Title */}
      <h2 className="text-xl font-bold text-[#0b1c2d] mb-8">
        {title}
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-red-500">
        {items.map((logo, index) => (
          <PartnerCard key={index} logo={logo} />
        ))}
      </div>

    </section>
  );
}
