import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="w-full py-16">
            <div className=" mx-auto px-4">

                {/* Heading */}
                <h1 className="title-202 tracking-tight leading-none">
                    CONFERENCE{" "}
                    <span className="text-red-500">PROGRAMME</span>
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-3xl text-gray-700 text-2xl md:text-base leading-relaxed ">
                    The <strong>MITT 2025 Conference Programme</strong> offered a{" "}
                    <strong>dynamic three-day agenda</strong> with{" "}
                    <strong>30+ sessions</strong>, including expert panels, presentations,
                    and training seminars.
                </p>

                {/* Image */}
                <div className="relative mt-10 w-full h-[300px] md:h-[420px] overflow-hidden shadow-lg">
                    <Image
                        src="/bali-indonesia-temple-scenic.jpg"
                        alt="Conference Programme"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
