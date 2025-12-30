import { Button } from "@/components/ui/button"

export function FeatureCardsSection() {
  return (
    <section className="py-20  font-helvetica">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-gray-100 p-10 flex flex-col">
            <h2 className="text-[42px] font-bold text-[#1a2c42] mb-6">
              The Exhibition
            </h2>

            <div className="flex-1 space-y-5 text-[17px] leading-relaxed text-[#1a2c42]">
              <p>
                At the heart of the ecosystem is the annual{" "}
                <strong>MITT exhibition in Moscow</strong>. It brings together
                the full spectrum of the travel, tourism, and hospitality sector,
                offering a high-impact platform to:
              </p>

              <p>Establish direct, face-to-face business connections.</p>
              <p>Showcase destinations, travel services, hospitality solutions, and travel technologies.</p>
              <p>Meet thousands of verified tourism decision-makers in one place.</p>
            </div>

            <Button className="mt-10 h-14 bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold uppercase tracking-wide rounded-none">
              WHY EXHIBIT
            </Button>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-100 p-10 flex flex-col">
            <h2 className="text-[42px] font-bold text-[#1a2c42] mb-6">
              Conference
            </h2>

            <div className="flex-1 space-y-5 text-[17px] leading-relaxed text-[#1a2c42]">
              <p>
                Throughout the exhibition and beyond, the ecosystem includes a
                robust program of conferences, forums, and summits. These events
                are curated to foster dialogue around tourism innovation, policy,
                and global travel trends.
              </p>

              <p>Gain insights from top-level speakers and industry leaders.</p>
              <p>Discuss emerging challenges and best practices in tourism development.</p>
              <p>Participate in sector-specific sessions for destinations, hospitality, aviation, and travel tech.</p>
            </div>

            <Button className="mt-10 h-14 bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold uppercase tracking-wide rounded-none">
              EXPLORE AGENDA
            </Button>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-100 p-10 flex flex-col">
            <h2 className="text-[42px] font-bold text-[#1a2c42] mb-6">
              MITT Connect
            </h2>

            <div className="flex-1 space-y-5 text-[17px] leading-relaxed text-[#1a2c42]">
              <p>
                <strong>MITT Connect</strong> is the ecosystem’s digital layer, an
                online platform designed to keep the conversation going before,
                during, and after the exhibition. Through Connect, participants
                can:
              </p>

              <p>Network with buyers, suppliers, and industry peers <strong>365 days a year</strong>.</p>
              <p>Access curated content, market news, and exhibitor updates.</p>
              <p>Schedule meetings and follow up on new business leads online.</p>
            </div>

            <Button className="mt-10 h-14 bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold uppercase tracking-wide rounded-none">
              EXPLORE CONNECT
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
