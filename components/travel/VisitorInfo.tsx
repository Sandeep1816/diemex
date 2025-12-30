const items = [
  {
    no: "01",
    title: "Visa",
    text:
      "The most convenient way to obtain a visa to the Russian Federation is with our official travel partner Visa-Russian.ru.",
  },
  {
    no: "02",
    title: "Rules of Entry to the Russian Federation",
    text:
      "Foreign citizens can enter the Russian Federation with a valid ID and visa (if required).",
  },
];

export default function VisitorInfo() {
  return (
    <section className=" px-6 py-24">
      <div className="mx-auto max-w-[1649px]">

        {/* TITLE */}
        <h2 className="title-70 text-[#10223B] mb-6">
          If you're a visitor:
        </h2>

        {/* RED DIVIDER */}
        <div className="h-px bg-[#ff3b30] mb-20" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          {items.map((item) => (
            <div
              key={item.no}
              className="flex flex-col justify-between min-h-[360px]"
            >
              {/* CONTENT */}
              <div className="space-y-6">
                <div className="text-[#ff3b30] text-[48px] font-bold">
                  {item.no}
                </div>

                <h3 className="text-[28px] font-bold text-[#10223B] max-w-[520px]">
                  {item.title}
                </h3>

                <p className="text-[#10223B]/80 text-base leading-relaxed max-w-[520px]">
                  {item.text}
                </p>
              </div>

              {/* CTA */}
              <button
                className="
                  mt-12
                  w-full
                  bg-[#ff3b30]
                  text-white
                  py-5
                  uppercase
                  font-bold
                  text-sm
                  underline
                  underline-offset-4
                  tracking-wide
                "
              >
                More Info
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
