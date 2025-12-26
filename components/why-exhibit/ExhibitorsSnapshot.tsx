export default function ExhibitorsSnapshot() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">
        Snapshot of Our Exhibitors
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-white h-20" />
        ))}
      </div>
    </section>
  );
}
