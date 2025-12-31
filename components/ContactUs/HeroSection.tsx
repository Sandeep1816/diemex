export default function HeroSection() {
  return (
    <section className="pt-[120px] pb-[80px] px-6">
      <h1
        className="
          text-[#0f2238]
          
          uppercase
          title-202
        
        "
      >
        Get in Touch with Us
      </h1>

      <div className="mt-10 max-w-[720px] text-[#0f2238] text-[16px] leading-[1.7]">
        <p className="text-xl">
          Have any questions or need assistance? We're here to help!
        </p>

        <ul className="space-y-1">
          <li><strong className="text-xl">Phone Number:</strong> +7-(495)-799-55-85</li>
          <li>
            <strong className="text-xl">Visitor support:</strong>
            <ul className="ml-4 list-disc">
              <li className="text-xl">+7-(495)-799-55-85</li>
              <li className="text-xl">visitors.registration@ite.group</li>
            </ul>
          </li>
          <li className="text-xl"><strong className="text-xl">Email:</strong> mitt@ite.group</li>
          <li className="text-xl">
            <strong className="text-xl">Venue:</strong> Moscow region, Krasnogorsk,
            Mezhdunarodnaya st. 16, 18, 20. Crocus Expo IEC.
          </li>
        </ul>
      </div>
    </section>
  )
}
