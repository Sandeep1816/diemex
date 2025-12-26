import Image from "next/image";

const SNAPSHOTS = [
  {
    id: "01",
    title: "Robust Growth",
    text:
      "The Eurasian outbound travel market is thriving, with 5.3 million trips in Q1 2024 — a 9% increase from the previous year. Despite global challenges, demand for international travel remains strong and resilient.",
    cta: "Seize the Opportunity",
    image: "/images/handshake.png",
    reverse: false,
  },
  {
    id: "02",
    title: "Unique Opportunity",
    text:
      "Geopolitical shifts have created a gap in accessible destinations, driving demand for new, exciting travel options. MITT gives you the chance to position your destination where it’s needed most.",
    cta: "Position Your Brand Where It Matters Most",
    image: "/images/handshake.png",
    reverse: true,
  },
  {
    id: "03",
    title: "Be the Destination They Choose",
    text:
      "As major players exit the market, emerging destinations have a unique opportunity to gain visibility and capture market share. Stand out and become the go-to choice for Russian travellers.",
    cta: "Become the Go-To Choice",
    image: "/images/handshake.png",
    reverse: false,
  },
  {
    id: "04",
    title: "Fill the Gap",
    text:
      "Connect with leading tour operators, agencies, and industry professionals looking for fresh offerings. Tap into growing sectors like luxury travel, medical tourism, and adventure tourism.",
    cta: "Expand Your Reach",
    image: "/images/handshake.png",
    reverse: true,
  },
];

export default function MarketSnapshot() {
  return (
    <section className="bg-[#f2f2f2] antialiased">
      <div className="max-w-full mx-auto px-6 py-28">

        <h2 className="font-[var(--font-helvetica)] text-[#10223B] text-[clamp(2.5rem,4vw,4.5rem)] font-bold mb-20">
          Market Snapshot: Key Trends and Insights
        </h2>

        <div className="space-y-24">
          {SNAPSHOTS.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              {/* TEXT PANEL */}
              <div
                className={`bg-[#0b1c2d] text-white p-14 flex flex-col justify-between
                  ${item.reverse ? "lg:order-2" : "lg:order-1"}`}
              >
                <div>
                  <h3 className="text-4xl font-bold mb-6">
                    {item.id} {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    {item.text}
                  </p>
                </div>

                <a
                  href="/exhibit"
                  className="mt-10 block bg-[#ff2f2f] text-center py-5 font-[var(--font-bebas)] text-2xl uppercase underline underline-offset-8"
                >
                  {item.cta}
                </a>
              </div>

              {/* IMAGE PANEL */}
              <div
                className={`relative h-[360px] lg:h-auto
                  ${item.reverse ? "lg:order-1" : "lg:order-2"}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
