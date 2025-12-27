export default function TicketInfoSection() {
  return (
    <section className="w-full p-4 bg-[#f3f2f1] pb-[120px]">
      <div className="max-w-[1400px] mx-auto px-4">

        <p className="text-[18px] font-medium text-[#0f2238] mt-20 mb-6">
          Note:
        </p>

        <p className="text-[18px] text-[#0f2238] mb-6">
          You can obtain a ticket for the exhibition in the following ways:
        </p>

        <ul className="list-disc pl-6 space-y-4 text-[18px] text-[#0f2238] mb-10 max-w-[1000px]">
          <li>
            Online, using a promo code – free of charge. If you do not have a
            promo code, please send a request to{" "}
            <a
              href="mailto:Yana.Dovgutskaya@ite.group"
              className="underline"
            >
              Yana.Dovgutskaya@ite.group
            </a>
          </li>

          <li>Online (without a promo code) – 1000 RUB</li>

          <li>
            At the ticket offices of Crocus Expo during the exhibition – 1500 RUB
          </li>
        </ul>

        <p className="text-[18px] text-[#0f2238] max-w-[1200px] mb-14">
          If you encounter any difficulties obtaining your ticket, please contact
          us at{" "}
          <a
            href="mailto:visitors.registration@ite.group"
            className="underline"
          >
            visitors.registration@ite.group
          </a>
          . Please indicate the name of the exhibition in the subject line of
          your email.
        </p>

      </div>
    </section>
  );
}
