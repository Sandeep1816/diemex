import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="">

      {/* TITLE */}
      <div className="pt-10 pb-8 md:pt-16 md:pb-12">
        <h1 className="title-main title-202">
          ABOUT DIEMEX GROUP
        </h1>
      </div>

      {/* IMAGE */}
      <div className="relative w-full h-[280px] md:h-[420px] lg:h-[520px] overflow-hidden">
        <Image
          src="/images/about.png"
          alt="ITE Group"
          fill
          priority
          className="object-cover grayscale"
        />
      </div>

    </section>
  )
}
