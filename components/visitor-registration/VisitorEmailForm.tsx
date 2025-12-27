export default function VisitorEmailForm() {
  return (
    <section className="w-full bg-[#f3f2f1] pb-[160px]">
      <div className="max-w-full mx-auto px-4">

        <p className="text-[18px] text-[#0f2238] max-w-[1000px] mb-6">
          Please enter the e-mail address where you wish to receive your ticket.
          Only one personal ticket can be requested per e-mail address.
        </p>

        <div className="max-w-[400px]">
          <label className="block text-[18px] text-[#0f2238] mb-2">
            Email <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            className="w-full border border-gray-300 px-4 py-3 text-[16px] mb-6"
          />

          <button className="bg-[#0f2238] text-white px-10 py-4 text-[18px]">
            Next
          </button>
        </div>

      </div>
    </section>
  );
}
