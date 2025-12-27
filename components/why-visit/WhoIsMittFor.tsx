export default function WhoIsMittFor() {
  return (
    <section className="bg-[#f3f2f1] mt-10 py-[140px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <h2 className="text-[56px] font-black text-[#0f2238] mb-12">
          Who is MITT for?
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {[
            [
              "Travel Agency",
              "Tour Operator",
              "Hotel / Accommodation Facility",
              "Tourism Management / Promotion",
              "IT Solutions & Tourism Management",
              "MICE Agencies",
            ],
            [
              "Glamping / Caravanning",
              "Air Freight & Transport Companies",
              "Equipping Hotels & Inns",
              "Museums & Tour Offices",
              "Medical Tourism / Insurance / Visas",
              "Educational Tourism",
            ],
          ].map((list, i) => (
            <div key={i} className="bg-[#0f2238] text-white p-12 space-y-4">
              {list.map((item) => (
                <p key={item} className="text-[20px]">{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
