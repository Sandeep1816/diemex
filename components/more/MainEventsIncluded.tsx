export default function MainEventsIncluded() {
  return (
    <section className="w-full py-20">
      <div className="px-6">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1f33] mb-10">
          Main Events Included :
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard title="Forum of Leaders of the Tourism and Hospitality Industry" />
          <EventCard title="MITT Academy" />
          <EventCard title="MITT Summit Hotel" />
          <EventCard title="MITT Digital" />
          <EventCard title="MITT MICE" />
          <EventCard title="Special Events" />
        </div>

      </div>
    </section>
  )
}

function EventCard({ title }: { title: string }) {
  return (
    <div className="bg-gradient-to-b from-[#132a45] to-[#0b1f33] p-8 min-h-[180px] flex items-start rounded-sm">
      <h3 className="text-white text-xl font-semibold leading-snug">
        {title}
      </h3>
    </div>
  )
}
