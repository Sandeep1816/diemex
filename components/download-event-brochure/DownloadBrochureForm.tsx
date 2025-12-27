export default function DownloadBrochureForm() {
  return (
    <aside className="bg-white border border-[#cfcfcf] p-[32px] shadow-sm max-w-full w-full">
      <h3 className="text-[#E60029] font-bold text-[22px] mb-6">
        Download the MITT Event Brochure
      </h3>

      <form className="space-y-5 text-[13px] text-[#0f2238]">
        {[
          { label: "First Name", placeholder: "Type your first name" },
          { label: "Last Name", placeholder: "Type your last name" },
          { label: "Company Name", placeholder: "Type your Company Name" },
          { label: "Company Website", placeholder: "" },
          { label: "Job Title", placeholder: "Type your Job Title" },
          { label: "Country", placeholder: "" },
          { label: "Phone", placeholder: "Type your phone number" },
          { label: "Work Email", placeholder: "Type your email" },
        ].map(({ label, placeholder }) => (
          <div key={label}>
            <label className="block mb-1 font-semibold">
              {label} <span className="text-themeRed">*</span>
            </label>
            <input
              type="text"
              placeholder={placeholder}
              className="
                w-full
                border
                border-gray-300
                px-3
                py-[10px]
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
          <p className="font-semibold mb-2">
            Product Sector <span className="text-themeRed">*</span>
          </p>

          <div className="space-y-1">
            {[
              "Airlines and Other Transport Companies",
              "Hotels & Accommodation",
              "MICE - Business Travel",
              "Tour Operators, Travel Agencies & DMCs",
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

        {/* Verify */}
        <div className="border p-3 flex items-center gap-3 text-xs text-gray-600">
          <input type="checkbox" />
          I’m not a robot
        </div>

        <button
          type="submit"
          className="mt-4 bg-[#E60029] text-white px-8 py-3 text-sm font-bold hover:bg-red-700"
        >
          SUBMIT
        </button>
      </form>
    </aside>
  )
}
