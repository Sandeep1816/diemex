export default function LeadScanningSection() {
  return (
    <section className="w-full  py-20">
  <div className="px-6">

    {/* Heading */}
    <h2 className="text-[#0f2238] font-extrabold text-4xl md:text-5xl">
      Leadscanning: Smart, Seamless & Strategic
    </h2>

    {/* Red Divider */}
    <div className="mt-6 h-[2px] w-full bg-[#ff3b30]" />

    {/* Features */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-20">

      {/* Item 01 */}
      <div>
        <p className="text-[#ff3b30] text-4xl font-extrabold">01</p>

        <h3 className="mt-6 text-[#0f2238] text-2xl font-bold">
          Effortless Contact Collection
        </h3>

        <p className="mt-4 text-[#0f2238] text-base leading-relaxed max-w-sm">
          Instantly collect and manage contacts by scanning badges.
        </p>
      </div>

      {/* Item 02 */}
      <div>
        <p className="text-[#ff3b30] text-4xl font-extrabold">02</p>

        <h3 className="mt-6 text-[#0f2238] text-2xl font-bold">
          Centralised Data Management
        </h3>

        <p className="mt-4 text-[#0f2238] text-base leading-relaxed max-w-sm">
          Store all contacts in one place for easy access and download.
        </p>
      </div>

      {/* Item 03 */}
      <div>
        <p className="text-[#ff3b30] text-4xl font-extrabold">03</p>

        <h3 className="mt-6 text-[#0f2238] text-2xl font-bold">
          Completely Free
        </h3>

        <p className="mt-4 text-[#0f2238] text-base leading-relaxed max-w-sm">
          Enjoy complete access to the leadscanning service at no cost.
        </p>
      </div>

    </div>
  </div>
</section>

  )
}
