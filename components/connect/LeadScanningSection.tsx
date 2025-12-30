export default function LeadScanningSection() {
  return (
    <section className="px-6  pb-[140px]">
      <h2 className="text-[44px] font-black mb-10">
        Leadscanning: Smart, Seamless & Strategic
      </h2>

      <div className="grid md:grid-cols-3 gap-16">
        {[
          ["01", "Effortless Contact Collection"],
          ["02", "Centralised Data Management"],
          ["03", "Completely Free"],
        ].map(([num, title]) => (
          <div key={num}>
            <div className="text-[#E60029] text-[36px] font-black mb-4">{num}</div>
            <h3 className="font-bold text-[20px] mb-2">{title}</h3>
            <p className="text-[15px]">
              Instantly collect and manage contacts with ease.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
