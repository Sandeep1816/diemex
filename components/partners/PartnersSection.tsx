import PartnerCard from "./PartnerCard";

export interface PartnerItem {
  logo: string;
  name?: string;
  website?: string;
}

interface Props {
  title: string;
  items: PartnerItem[];
}

export default function PartnersSection({ title, items }: Props) {
  return (
    <section className="mb-32">

      {/* SECTION TITLE */}
      <h2 className="text-[72px] leading-[1.1] font-bold text-[#0b1c2d] mb-20">
        {title}
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-red-500">
        {items.map((item, index) => (
          <PartnerCard key={index} {...item} />
        ))}
      </div>

    </section>
  );
}
