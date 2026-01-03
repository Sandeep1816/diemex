export default function ExhibitionGuide() {
  return (
    <section className=" py-24">
      <div className="max-w-8xl mx-auto">
        {/* Title */}
        <h2 className="text-[60px] font-bold text-[#0e243f] mb-14">
          Exhibition Guide
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* CARD 1 */}
          <DarkCard>
            <h3 className="text-[26px] font-bold mb-6">
              Stand Construction Requirements
            </h3>

            <p className="text-[15px] leading-[1.8] text-[#cfd6df] mb-6">
              Our Participant’s Manual provides all the essential technical
              information for the upcoming exhibition, including:
              <br />
              <br />• Exhibition schedule and installation deadlines
              <br />• Rules for stand construction and installation work
              <br />• Technical specifications and guidelines
              <br />
              <br />
              Prepare your stand effortlessly with this comprehensive guide to
              ensure a smooth and successful exhibition experience.
            </p>

            <RedButton label="DOWNLOAD REQUIREMENTS GUIDE" />
          </DarkCard>

          {/* CARD 2 */}
          <DarkCard>
            <h3 className="text-[26px] font-bold mb-6">
              Technical Order Form
            </h3>

            <p className="text-[15px] leading-[1.8] text-[#cfd6df] mb-6">
              Order all technical services and stand construction quickly and
              conveniently through your{" "}
              <span className="underline font-semibold">
                Exhibitor Personal Account
              </span>
              .
              <br />
              <br />
              <span className="font-semibold">Important information:</span>
              <br />
              If multiple email addresses are listed in your contact details,
              all system messages will only be sent to the primary contact email.
              <br />
              <br />
              For any questions or support related to the portal, please contact
              your technical manager.
            </p>

            <div className="space-y-4">
              <RedButton label="DOWNLOAD TECHNICAL ORDER FORM – HALL 4" />
              <RedButton label="DOWNLOAD TECHNICAL ORDER FORM – HALL 3" />
            </div>
          </DarkCard>

          {/* CARD 3 */}
          <DarkCard>
            <h3 className="text-[26px] font-bold mb-6">
              Suspension to Ceiling Structures
            </h3>

            <p className="text-[15px] leading-[1.8] text-[#cfd6df] mb-8">
              For any enquiries regarding the ordering of suspended structures,
              please reach out to your technical manager using the contact
              details provided below.
              <br />
              <br />
              <span className="font-semibold">Dmitry Shahanov</span>
              <br />
              Head of Technical Suspension Group
              <br />
              dmitry.shahanov@ite.group
            </p>

            <WhiteButton label="DOWNLOAD SUSPENSION FORM" />
          </DarkCard>
        </div>
      </div>
    </section>
  )
}

/* ---------- UI PARTS ---------- */

function DarkCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0e243f] text-white p-10 min-h-[420px] flex flex-col justify-between">
      {children}
    </div>
  )
}

function RedButton({ label }: { label: string }) {
  return (
    <button className="w-full bg-[#ff3b30] text-white text-[14px] font-bold py-4 uppercase tracking-wide hover:opacity-90 transition">
      {label}
    </button>
  )
}

function WhiteButton({ label }: { label: string }) {
  return (
    <button className="w-full bg-white text-[#0e243f] text-[14px] font-bold py-4 uppercase tracking-wide hover:bg-gray-100 transition">
      {label}
    </button>
  )
}
