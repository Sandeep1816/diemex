export default function AboutUsSection() {
  return (
    <section className=" py-14 ">
      <div className="max-w-8xl mx-auto space-y-4">

        {/* Reduced size title */}
        <h3 className="title-main text-primary text-[clamp(28px,4vw,56px)]">
          About us
        </h3>

        <p className="text-body text-gray-700">
          ITE Group is one of the world’s leading organisers of trade exhibitions
          and conferences, creating unique marketplaces and specialist events
          worldwide.
        </p>

        <p className="text-body text-gray-700">
          We organise over 200 events annually across industries, helping
          businesses grow through powerful face-to-face engagement.
        </p>

      </div>
    </section>
  );
}
