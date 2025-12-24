export function VideoSection() {
  return (
    <section className="bg-[#1a2c42] py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Video Wrapper */}
        <div className="relative max-w-[98rem] mx-auto overflow-hidden h-[460px] sm:h-[340px] md:h-[520px] lg:h-[640px]">
          
          {/* YouTube Video */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Diemex 2026 – The Gateway to Eurasia's Outbound Travel Market"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Overlay Text */}
          <div className="absolute bottom-0 right-0 w-2/3 h-50 bg-[#0f3a55]/95 px-6 py-5 md:py-7">
            <h3 className="text-lg md:text-xl lg:text-4xl font-bold text-white leading-snug">
              To Promote Their Destination to{" "}
              <span className="font-extrabold">
                Eurasia’s Leading Outbound Travel Market
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
