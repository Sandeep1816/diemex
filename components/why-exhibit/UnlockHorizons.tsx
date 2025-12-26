import Image from "next/image";

export default function UnlockHorizons() {
  return (
    <section className="bg-[#f2f2f2] antialiased">
      <div className="max-w-full mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT COLUMN */}
        <div>
          <h2
            className="
              font-[var(--font-helvetica)]
              text-[#10223B]
              text-[clamp(3rem,6vw,5.5rem)]
              font-bold
              leading-tight
              mb-10
            "
          >
            Unlock New
            <br />
            Horizons at
            <br />
            MITT
          </h2>

          <div className="relative w-full h-[420px]">
            <Image
              src="/images/why-exhibit.png"
              alt="MITT Exhibition"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-between">

          {/* Description */}
          <p
            className="
              
              text-[#10223B]
             text-subheadding
             font-bold
            "
          >
            MITT provides immense growth potential for businesses looking to
            expand their reach, forge strategic partnerships, and establish a
            foothold in a high-demand region.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-y-16 gap-x-20 mt-20">
            {[
              { label: "Market Size", value: "0" },
              { label: "Visitors", value: "0" },
              { label: "Exhibitors", value: "0" },
              { label: "Speakers", value: "0" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="
                    font-[var(--font-helvetica)]
                    text-[#10223B]
                    text-7xl
                    font-bold
                    leading-none
                    mb-3
                  "
                >
                  {stat.value}
                </div>
                <div
                  className="
                    font-[var(--font-helvetica)]
                    text-[#10223B]
                    text-lg
                    opacity-70
                  "
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20">
            <a
              href="/contact"
              className="
                font-[var(--font-helvetica)]
                text-[#10223B]
                text-lg
                underline
                underline-offset-4
              "
            >
              Get in Touch
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
