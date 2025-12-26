export default function WhenAndWhere() {
  return (
    <section className="bg-[#f2f2f2] antialiased">
      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* Section Heading */}
        <h2
          className="
            font-[var(--font-helvetica)]
            text-[#10223B]
            text-[clamp(2.5rem,4vw,4.5rem)]
            font-bold
            mb-16
          "
        >
          When and Where
        </h2>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          
          {/* Venue */}
          <div className="bg-[#ece6d8] p-10">
            <p className="font-[var(--font-helvetica)] text-[#10223B] font-bold mb-2">
              Venue
            </p>
            <p className="font-[var(--font-helvetica)] text-[#10223B] text-lg">
              Pavilion 1, Crocus Expo IEC, Moscow
            </p>
          </div>

          {/* Opening Hours */}
          <div className="bg-[#ece6d8] p-10">
            <p className="font-[var(--font-helvetica)] text-[#10223B] font-bold mb-2">
              Opening Hours
            </p>
            <p className="font-[var(--font-helvetica)] text-[#10223B] text-lg">
              11, 12 March 2026: 10:00 – 18:00
              <br />
              13 March 2026: 10:00 – 16:00
            </p>
          </div>

        </div>

        {/* Map */}
        <div className="w-full h-[420px] overflow-hidden">
          <iframe
            title="Crocus Expo IEC Map"
            src="https://www.google.com/maps?q=Crocus%20Expo%20IEC%20Moscow&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
