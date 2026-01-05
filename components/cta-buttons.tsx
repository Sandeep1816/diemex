export function CtaButtons() {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="site-wrapper">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* BOOK A STAND */}
          <button
            className="
              group relative
              min-h-[88px] sm:min-h-[100px] md:min-h-[112px]
              bg-[#FF5252] hover:bg-[#E64545]
              text-white transition-colors
              flex items-center justify-center
              px-4 sm:px-6
            "
          >
            <span className="text-center">
              <span className="
                block uppercase font-black tracking-wide
                text-xl sm:text-2xl md:text-3xl lg:text-4xl
                border-b-4 border-white pb-1
              ">
                BOOK A STAND
              </span>
            </span>
          </button>

          {/* DOWNLOAD BROCHURE */}
          <button
            className="
              group relative
              min-h-[88px] sm:min-h-[100px] md:min-h-[112px]
              bg-[#0A2540] hover:bg-[#152E4D]
              text-white transition-colors
              flex items-center justify-center
              px-4 sm:px-6
            "
          >
            <span className="text-center">
              <span className="
                block uppercase font-black tracking-wide
                text-lg sm:text-xl md:text-2xl lg:text-3xl
                border-b-4 border-white pb-1
              ">
                DOWNLOAD EVENT BROCHURE
              </span>
            </span>
          </button>

        </div>

      </div>
    </section>
  )
}
