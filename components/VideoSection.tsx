export function VideoSection() {
  return (
    <section className="bg-[#1a2c42] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Diemex 2026 – The Gateway to Eurasia's Outbound Travel Market"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="text-center mt-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            To Promote Their Destination to Eurasia's Leading Outbound Travel Market
          </h3>
        </div>
      </div>
    </section>
  )
}
