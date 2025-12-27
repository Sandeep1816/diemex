export default function EnquiryForm() {
  return (
    <aside className="bg-white border border-gray-300 p-8 shadow-sm max-w-full w-full">
    <h3 className="text-[#E60029] font-bold text-xl mb-6">
  Enquire to Exhibit at MITT
</h3>


      <form className="space-y-4 text-[13px] text-[#0f2238]">
        {/* Interest */}
        <div>
          <p className="font-semibold mb-1">
            Your level of Interest <span className="text-themeRed">*</span>
          </p>
          <div className="space-y-1">
            {[
              "Ready to book my stand",
              "Looking for more information",
              "Looking for sponsorship opportunities",
            ].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="radio" name="interest" />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Inputs */}
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
              "Caravan, Tourist Transport",
              "Cruise",
              "Health & Medical Tourism",
              "Hotels & Accommodation",
              "Industrial Unions & Media",
              "MICE - Business Travel",
              "Mobile homes & glamping",
              "Museums & parks",
              "Niche Tourism (Adventure, Family, Heritage, Culinary, etc.)",
              "OTA & IT Solutions for Travel Industry",
              "Resort Property",
              "Tourist Board / Government / NTO",
              "Tour Operators, Travel Agencies & DMCs",
              "Other",
            ].map((item) => (
              <label key={item} className="flex items-start gap-2 leading-snug">
                <input type="radio" name="sector" className="mt-0.5" />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Verify */}
        <div>
          <label className="block mb-1 font-semibold">
            Please verify your request <span className="text-themeRed">*</span>
          </label>
          <textarea
            className="
              w-full
              border
              border-gray-300
              px-3
              py-2
              h-20
              resize-none
              focus:outline-none
              focus:border-gray-500
            "
          />
        </div>

        {/* reCAPTCHA placeholder */}
        <div className="border p-3 flex items-center gap-3 text-xs text-gray-600">
          <input type="checkbox" />
          I’m not a robot
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            mt-4
            bg-themeRed
            text-white
            px-6
            py-2
            text-sm
            font-bold
            bg-[#E60029]
            hover:bg-red-700
          "
        >
          Submit
        </button>

        {/* Disclaimer */}
        <p className="text-[11px] text-gray-500 leading-snug mt-3">
          T&amp;Cs: By subscribing to the MITT newsletter, you agree to receive
          marketing communications, updates, and promotional materials from us.
        </p>
      </form>
    </aside>
  )
}
