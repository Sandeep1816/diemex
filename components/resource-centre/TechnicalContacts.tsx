const contacts = [
  {
    name: "Stanislav Astashevsky",
    role: "Head of Individual Development Department",
    email: "stanislav.astashevskiy@ite.group",
    phone: "+7 (909) 994-88-82",
  },
  {
    name: "Roman Alexandrov",
    role: "Manager of the Individual Development Department",
    email: "roman.alexandrov@ite.group",
    phone: "+7 (905) 815-07-30",
  },
  {
    name: "Natalia Glazkova",
    role: "Technical Manager, Hall 4",
    email: "natalia.glazkova@ite.group",
    phone: "+7 (968) 945-35-39",
  },
  {
    name: "Anton Dinaburg",
    role: "Technical Manager, Hall 3",
    email: "anton.dinaburg@expo-system.ru",
    phone: "+7 (925) 487-11-36",
  },
]

export default function TechnicalContacts() {
  return (
    <section className=" px-6 py-24">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <h2 className="text-[40px] font-bold text-[#0e243f] mb-14">
          For any questions regarding technical services, please contact :
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((c) => (
            <div
              key={c.email}
              className="bg-[#0e243f] text-white p-10 min-h-[180px]"
            >
              <p className="text-[18px] font-bold mb-1">{c.name}</p>

              <p className="text-[15px] text-[#cfd6df] mb-3">
                {c.role}
              </p>

              <p className="text-[15px] font-semibold">
                {c.phone}
              </p>

              <p className="text-[15px] underline mt-1">
                {c.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
