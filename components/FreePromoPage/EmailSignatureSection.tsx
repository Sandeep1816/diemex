export default function EmailSignatureSection() {
  return (
    <section className=" w-full py-24">
      <h2
        className="
          text-[#0f2238]
          title-92
       
        "
      >
        Invitation in Email Signature
      </h2>

      <p className="mt-8 max-w-6xl text-lg text-[#0f2238] leading-relaxed">
        Download the exhibition logo and add it to your email signature with a link
        to the ticket redemption page using your promo code. Replace “PROMOCODE”
        in the link with your actual promo code. This way, visitors will not need
        to enter the code manually during registration.
      </p>

      <div className="mt-16 space-y-2 text-[#0f2238] text-lg">
        <p className="font-bold">DIEMEX 2026 Exhibition</p>
        <p>June 11–13, Moscow, Crocus Expo</p>
        <p>We invite you to visit our stand No. ___</p>
        <p>Promo code: ___</p>

        <a
          href="#"
          className="block mt-6 font-bold underline underline-offset-4"
        >
          Get an e-ticket &gt;&gt;
        </a>

        <a
          href="#"
          className="block font-bold underline underline-offset-4"
        >
          Download the MITT logo &gt;&gt;
        </a>
      </div>
    </section>
  )
}
