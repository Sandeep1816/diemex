const items = [
  {
    no: "01",
    title: "Visa",
    text:
      "A regular business visa is suitable for business visits to Russia aimed at negotiating, concluding contracts, participating in exhibitions, conferences, or other business meetings and events.",
    cta: "More Info",
  },
  {
    no: "02",
    title: "Freight, Handling & Customs",
    text:
      "We recommend DMW EXPO for shipment of any products, stand equipment, marketing materials, machinery, and/or displays you plan to send for your stand.",
    cta: "More Info",
  },
  {
    no: "03",
    title: "Preparation Checklist",
    text:
      "To make your experience as seamless as possible, we have put together a checklist for you, to keep track of all the necessary requirements you will need to keep note of leading up to the event.",
    cta: "Download Checklist",
  },
];

export default function ExhibitorInfo() {
  return (
    <section className=" px-6 py-24">
      <div className="mx-auto max-w-[1649px]">

        {/* TITLE */}
        <h3 className="title-70 text-[#10223B] mb-6">
          If you're an exhibitor:
        </h3>

        {/* RED DIVIDER */}
        <div className="h-px bg-[#ff3b30] mb-20" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {items.map((item) => (
            <div
              key={item.no}
              className="flex flex-col justify-between min-h-[420px]"
            >
              {/* TOP CONTENT */}
              <div className="space-y-6">
                <div className="text-[#ff3b30] text-[48px] font-bold tracking-tight">
                  {item.no}
                </div>

                <h4 className="text-[26px] font-bold text-[#10223B]">
                  {item.title}
                </h4>

                <p className="text-[#10223B]/80 text-base leading-relaxed max-w-[420px]">
                  {item.text}
                </p>
              </div>

              {/* CTA BAR */}
              <button
                className="
                  mt-12
                  w-full
                  bg-[#ff3b30]
                  text-white
                  py-5
                  text-center
                  uppercase
                  font-bold
                  text-sm
                  underline
                  underline-offset-4
                  tracking-wide
                "
              >
                {item.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
