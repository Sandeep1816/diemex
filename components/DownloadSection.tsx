export function DownloadSection() {
  return (
    <section className="px-0 py-16 md:py-24">
      <div className="container mx-auto px-0">
        <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-8 lg:gap-16 items-center max-w-full mx-auto">
          
          {/* LEFT – CONTENT */}
          <div className="space-y-6 text-[#0b1f33]">
            {/* 👆 forces black text regardless of parent */}

            <h2 className="font-bold text-[36px] md:text-[48px] lg:text-[72px] leading-[1.1]">
              Want to Learn More About DIEMEX?
            </h2>

            <p className="text-2xl">
             Download the event brochure to discover who you’ll meet, explore the key industry sectors on display, and learn how DIEMEX 2026 can help you connect with India’s growing die, mould, and precision manufacturing market—while building strong, long-term business partnerships.
            </p>

            <button className="bg-[#10223B] text-white uppercase tracking-tighter text-xl font-extrabold px-6 py-4 underline">
              Download Now
            </button>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="relative flex justify-center items-center">
            <img
              src="/images/brochure.png"
              alt="MITT Event Brochure"
              className="w-full max-w-sm object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
