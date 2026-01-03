import SectorsGrid from "@/components/sectors/SectorsGrid";

export default function SectorsPage() {
  return (
    <main className=" antialiased">
      <div className="max-w-full mx-auto  pt-24 pb-32">

        {/* HERO TITLE — EXACT MITT STYLE */}
        <div
          className="flex items-center mb-10"
          // style={{ width: "1649px", height: "200px" }}
        >
          <span
            className="
              title-202
             
              whitespace-nowrap
              leading-none
            "
          >
            EVENT SECTORS
          </span>
        </div>

        {/* INTRO TEXT */}
        <p
          className="
            
            text-[#10223B]
            text-lg
            max-w-6xl
            leading-relaxed
            mb-28
          "
        >
          MITT showcases a wide range of travel and tourism sectors, connecting
          you to the latest trends, innovative solutions, and unique
          opportunities. From <strong>luxury travel</strong> to{" "}
          <strong>medical tourism</strong>, adventure experiences to{" "}
          <strong>travel technology</strong>, discover tailored solutions that
          shape the future of the industry.
        </p>

        {/* DISCOVER */}
        <h2
          className="
           title-90
            text-[#10223B]
            text-5xl
            font-bold
            mb-16
          "
        >
          Discover
        </h2>

        {/* GRID */}
        <SectorsGrid />

      </div>
    </main>
  );
}
