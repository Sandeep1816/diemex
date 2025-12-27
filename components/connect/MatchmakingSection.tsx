import Image from "next/image";

export default function MatchmakingSection() {
  return (
    <section className="max-w-full bg-[#f3f2f1] pb-[140px]">
      {/* CONTAINER */}
      <div className="max-w-full mx-auto px-4">
        
        {/* TITLE */}
        <h2 className="text-[44px] font-black text-[#0f2238] mb-12">
          Matchmaking Service: Efficient, Personalised, Connected
        </h2>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT – MOBILE IMAGE */}
          <div className="flex justify-center">
            <div className="w-[320px] h-[640px] rounded-[40px] overflow-hidden ">
              <Image
                src="/images/mobile.png"
                alt="MITT Connect Matchmaking App"
                width={320}
                height={640}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

        {/* RIGHT – CONTENT BOX */}
{/* RIGHT – CONTENT BOX */}
<div className="bg-[#0f2238] text-white px-16 py-20 flex flex-col items-start">
  
  {/* INNER CONTENT WRAPPER */}
  <div className="max-w-full p-6">
    
    <h3 className="text-[30px] font-black leading-snug mb-10">
      MITT Connect now offers Matchmaking: A smart recommendation
      system based on exhibition visitors, tailored for your
      company's leads.
    </h3>

    <ol className="space-y-6 text-[16px] leading-relaxed list-decimal list-outside pl-6 mb-10">
      <li>
        <strong>Get Matched with Key Decision-Makers:</strong>{" "}
        Meet top buyers, tour operators, travel agents, and
        destination specialists.
      </li>

      <li>
        <strong>Company Pages & Products:</strong>{" "}
        Showcase your brand, destinations, and travel products
        to attract the right partners.
      </li>

      <li>
        <strong>Messaging & Meetings:</strong>{" "}
        Chat, propose times, and confirm meetings at your stand.
      </li>

      <li>
        <strong>Post-Show Look-a-Likes:</strong>{" "}
        Matchmaking improves as you scan more badges, suggesting
        new relevant contacts.
      </li>
    </ol>

    <p className="text-[14px] text-gray-300 max-w-[520px]">
      Matchmaking is free for all exhibitors and visitors on both
      desktop and mobile versions of MITT Connect.
    </p>
  </div>

  {/* CTA */}
  <div className="p-6 mt-12 w-full">
    <button className="w-full bg-[#ff3b30] text-white py-4 font-black uppercase tracking-wide">
      Start Connecting
    </button>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}
