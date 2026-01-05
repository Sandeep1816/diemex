export default function ContactForm() {
  return (
    <aside
      className="
        w-[600px]
        box-border
        bg-white
        border
        border-gray-300
        rounded-xl
        px-8
        py-10
        shadow-sm
      "
    >
      <h2 className="text-[#E60029] text-4xl font-bold mb-6">
        Contact Us
      </h2>

      <form className="space-y-5 text-[14px] text-[#0f2238]">
        {/* Department */}
        <div>
          <p className="font-semibold mb-2">
            Which Department Would You Like to Contact?
            <span className="text-[#E60029]">*</span>
          </p>
          <div className="space-y-1">
            {[
              "Sales Team",
              "Sponsorship Team",
              "General Exhibition Enquiries",
            ].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="radio" name="department" />
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
          { label: "Job Title", placeholder: "Type your Job Title" },
          { label: "Country", placeholder: "" },
          { label: "Phone", placeholder: "Type your phone number" },
          { label: "Work Email", placeholder: "Type your email" },
        ].map(({ label, placeholder }) => (
          <div key={label}>
            <label className="block mb-1 font-semibold">
              {label}
              <span className="text-[#E60029]">*</span>
            </label>
            <input
              type="text"
              placeholder={placeholder}
              className="
                w-full
                h-[44px]
                border
                border-gray-300
                px-3
                rounded
                placeholder:text-gray-400
                focus:outline-none
                focus:border-gray-500
              "
            />
          </div>
        ))}

        {/* Message */}
        <div>
          <label className="block mb-1 font-semibold">
            Your message
          </label>
          <textarea
            className="
              w-full
              border
              border-gray-300
              px-3
              py-2
              h-[120px]
              resize-none
              rounded
              focus:outline-none
              focus:border-gray-500
            "
          />
        </div>

        {/* reCAPTCHA placeholder */}
        <div className="border p-4 flex items-center gap-3 text-sm text-gray-600">
          <input type="checkbox" />
          I’m not a robot
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            bg-[#E60029]
            text-white
            px-10
            py-3
            font-bold
            uppercase
            hover:bg-red-700
          "
        >
          Submit
        </button>

        {/* T&C */}
        <p className="text-[12px] text-gray-500 leading-relaxed pt-2">
          T&amp;Cs: By subscribing to the MITT newsletter, you agree to receive
          marketing communications, updates, and promotional materials from us.
          You can unsubscribe anytime by clicking the "unsubscribe" link in our emails.
          For more information on how we handle your data, please refer to our
          Privacy Policy.
        </p>
      </form>
    </aside>
  )
}
