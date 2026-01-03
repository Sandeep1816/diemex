export default function GetStartedSection() {
  return (
    <section className=" pb-[140px]">
      <h2 className="text-[44px] font-black my-20 ">
        How to Get Started
      </h2>

      <div className="grid md:grid-cols-3 gap-16">
        {[
          ["01", "Download & Sign Up"],
          ["02", "Set Up Your Profile"],
          ["03", "Connect & Network"],
        ].map(([num, title]) => (
          <div key={num}>
            <div className="text-[#E60029] text-[36px] font-black mb-4">{num}</div>
            <h3 className="font-bold text-[20px] mb-2">{title}</h3>
            <p className="text-[15px]">
              Simple steps to start connecting instantly.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
