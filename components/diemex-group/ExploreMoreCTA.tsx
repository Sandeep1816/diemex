import Link from "next/link";

export default function ExploreMoreCTA() {
  return (
    <section className="bg-[#f2f2f2] pt-20">
      {/* Text Section */}
      <div className="max-w-8xl mx-auto px-6 pb-16">
        <h2 className="text-4xl md:text-7xl font-extrabold text-[#0b1c2d] leading-tight max-w-full">
          We are a lot more than what has been mentioned so far
        </h2>
      </div>

      {/* Red CTA Bar */}
      <div className="bg-[#ff2f2f] py-8  text-center">
        <Link
          href="/about"
          className="text-white text-xl md:text-5xl font-extrabold uppercase underline underline-offset-8"
        >
          Explore more about ITE Group
        </Link>
      </div>
    </section>
  );
}
