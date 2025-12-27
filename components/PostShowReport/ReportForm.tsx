export default function ReportForm() {
  return (
    <aside className="bg-white border border-gray-300 p-8 shadow-sm rounded-lg w-full max-w-full">
      <h3 className="text-[#E60029] font-bold text-[26px] mb-6">
        Download the MITT Post Show Report
      </h3>

      <form className="space-y-4 text-[13px] text-[#0f2238]">
        {[
          ["First Name", "Type your first name"],
          ["Last Name", "Type your last name"],
          ["Company Name", "Type your Company Name"],
          ["Job Title", "Type your Job Title"],
          ["Country", ""],
          ["Phone", "Type your phone number"],
          ["Work Email", "Type your email"],
        ].map(([label, placeholder]) => (
          <div key={label}>
            <label className="block mb-1 font-semibold">
              {label}
              <span className="text-themeRed">*</span>
            </label>
            <input
              type="text"
              placeholder={placeholder}
              className="
                w-full
                border
                border-gray-300
                px-3
                py-2
                text-sm
                placeholder:text-gray-400
                focus:outline-none
                focus:border-gray-500
              "
            />
          </div>
        ))}

        {/* Product Sector */}
        <div>
          <p className="font-semibold mb-1">
            Product Sector <span className="text-themeRed">*</span>
          </p>
          <div className="space-y-1">
            {[
              "Airlines and Other Transport Companies",
              "Hotels & Accommodation",
              "MICE - Business Travel",
              "Tour Operators & Travel Agencies",
              "Tourist Board / Government / NTO",
              "Other",
            ].map((item) => (
              <label key={item} className="flex items-start gap-2">
                <input type="radio" name="sector" className="mt-0.5" />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* reCAPTCHA placeholder */}
        <div className="border p-3 flex items-center gap-3 text-xs text-gray-600">
          <input type="checkbox" />
          I’m not a robot
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 bg-[#E60029] text-white px-6 py-3 text-sm font-bold hover:bg-red-700"
        >
          SUBMIT
        </button>
      </form>
    </aside>
  )
}
