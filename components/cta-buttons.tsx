export function CtaButtons() {
  return (
    <div className="layout py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <button className="group relative h-24 md:h-28 bg-[#FF5252] hover:bg-[#E64545] text-white transition-colors">
          <span className="flex flex-col items-center justify-center h-full px-6">
            <span className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide border-b-4 border-white pb-1">
              BOOK A STAND
            </span>
          </span>
        </button>

        <button className="group relative h-24 md:h-28 bg-[#0A2540] hover:bg-[#152E4D] text-white transition-colors">
          <span className="flex flex-col items-center justify-center h-full px-6">
            <span className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-wide border-b-4 border-white pb-1">
              DOWNLOAD EVENT BROCHURE
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}
