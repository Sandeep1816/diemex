export default function HeroSection() {
  return (
    <section className=" antialiased">
      <div className="mx-auto max-w-full  pt-28 pb-24">

        {/* ===== HEADLINE (ONE DIV, TWO SPANS) ===== */}
        <div className="flex flex-col gap-4">

          {/* LEFT */}
          <span
            className="
              self-start
              title-187
              text-[#10223B]
            "
          >
            WHY EXHIBIT
          </span>

          {/* RIGHT */}
          <span
            className="
              self-end
              text-right
             
              text-[#10223B]
              title-187
            "
          >
            AT MITT 2026?
          </span>

        </div>

        {/* ===== DESCRIPTION ===== */}
        <p className="mt-10 max-w-full font-[var(--font-helvetica)] text-[#10223B] text-lg leading-relaxed">
          MITT is your gateway to accessing one of the largest and most dynamic
          travel markets globally, offering unparalleled opportunities to
          showcase your services and connect with decision-makers across the
          tourism ecosystem.
        </p>

        {/* ===== CTA BUTTONS ===== */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ENQUIRE */}
          <a
            href="/exhibit"
            className="
              bg-[#FF2F2F]
              text-white
              flex items-center justify-center
              h-[110px]
              font-[var(--font-bebas)]
              text-[32px]
              uppercase
              tracking-wide
              underline
              underline-offset-8
            "
          >
            Enquire to Exhibit
          </a>

          {/* DOWNLOAD */}
          <a
            href="/downloads/mitt-brochure.pdf"
            className="
              bg-[#10223B]
              text-white
              flex items-center justify-center
              h-[110px]
              font-[var(--font-bebas)]
              text-[32px]
              uppercase
              tracking-wide
              underline
              underline-offset-8
            "
          >
            Download Event Brochure
          </a>

        </div>

      </div>
    </section>
  );
}
