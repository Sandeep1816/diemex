const docs = [
  { title: "Stand Construction Requirements", btn: "DOWNLOAD REQUIREMENTS GUIDE" },
  { title: "Technical Order Form", btn: "DOWNLOAD TECHNICAL ORDER FORM" },
  { title: "Suspension to Ceiling Structures", btn: "DOWNLOAD SUSPENSION FORM" },
]

export default function TechnicalDocuments() {
  return (
    <section className="px-6 py-24">
      <div className="grid md:grid-cols-3 gap-10">
        {docs.map(d => (
          <div key={d.title} className="bg-navy text-white p-8">
            <h3 className="text-xl font-bold mb-6">{d.title}</h3>
            <button className="bg-red w-full py-3 font-bold">
              {d.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
