import EventRow from "./EventRow";

const events = [
  {
    title: "Fastenex",
    description:
      "The international exhibition of fasteners and industrial supply.",
    logo: "/images/fastenexlogo.webp",
  },
  {
    title: "Weldex",
    description:
      "The international exhibition of welding materials, equipment and technologies.",
    logo: "/images/fastenexlogo.webp",
  },
  {
    title: "YugAgro",
    description:
      "The international exhibition of agricultural machinery, equipment, and materials for crop production.",
    logo: "/images/fastenexlogo.webp",
  },
];

export default function EventsAtGlance() {
  return (
    <section className="py-28">
      {/* FIXED WIDTH + LEFT GUTTER */}
      <div className="mx-auto max-w-full px-6">

        <h2 className="text-4xl md:text-8xl font-extrabold text-[#0b1c2d] mb-8">
          All Our Events At a Glance
        </h2>

        <p className="text-lg md:text-xl text-[#0b1c2d]/80 mb-24 text-body">
          Each year, we organise and host over 30 leading industry events across
          key sectors, including exhibitions, summits, and conferences.
          Supported by the Connect digital platform, the ITE ecosystem offers
          innovative hybrid solutions for industry communities in Russia, the
          CIS, and beyond.
        </p>

        <div className="mx-auto max-w-[1649px] pl-[180px] pr-6">
               {events.map((event, index) => (
          <EventRow key={index} {...event} />
        ))}


        </div>

     

      </div>
    </section>
  );
}
