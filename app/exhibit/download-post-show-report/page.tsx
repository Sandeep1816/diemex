import HeroSection from "@/components/PostShowReport/HeroSection"
import ContentAndStatsSection from "@/components/PostShowReport/ContentAndStatsSection"
import ReportForm from "@/components/PostShowReport/ReportForm"

export default function DownloadPostShowReportPage() {
  return (
    <main className="max-w-full">
      <HeroSection />

      {/* CONTENT */}
      <section className="px-6 pb-[160px]">
        <div
          className="
            mx-auto
            max-w-[1680px]
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-x-[50px]
          "
        >
          {/* LEFT HALF */}
          <div className="space-y-[96px]">
            <ContentAndStatsSection />
          </div>

          {/* RIGHT HALF */}
          <div className="mt-[50px]">
            <ReportForm />
          </div>
        </div>
      </section>
    </main>
  )
}
