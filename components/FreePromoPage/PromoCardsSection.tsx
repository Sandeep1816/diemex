function PromoCard({
  title,
  description,
  buttonText,
  href,
}: {
  title: string
  description: React.ReactNode
  buttonText: string
  href: string
}) {
  return (
    <div
      className="
        relative
        flex
        size-full
        min-h-[300px]
        flex-col
        bg-[#0f2238]
        py-5
        lg:p-10
        text-[#f3f2f1]
      "
    >
      <div className="z-10 flex h-full flex-col gap-5">
        {/* Title */}
        <h2 className="text-[42px] leading-[1] font-semibold">
          {title}
        </h2>

        {/* Description */}
        <div className="text-lg leading-relaxed">
          {description}
        </div>

        {/* Button */}
        <div className="mt-auto flex w-full flex-wrap gap-5">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                bg-[#ff3b30]
                px-7
                py-3
                font-bebas
                text-2xl
                text-[#f3f2f1]
                underline
                transition
                hover:bg-[#c92b23]
              "
            >
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function PromoCardsSection() {
  return (
    <section className="py-20 2xl:py-32">
      {/* container */}
      <div className="container mx-auto ">
        <div className="grid size-full grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
          
          <PromoCard
            title="Invitation Template"
            href="https://cdn.itegroupnews.com/MITT_2026_Invitation_1fa5918bfb.docx"
            buttonText="Download Template"
            description={
              <p>
                Use your <strong>exclusive promo code</strong> to personally invite
                your clients, partners, and business associates to visit your stand
                at <strong>MITT 2026</strong> for free.
                <br /><br />
                Add the promo code to your email invitations and formal letters to
                ensure your guests receive their{" "}
                <strong>free electronic ticket</strong> and meet you at the exhibition.
              </p>
            }
          />

          <PromoCard
            title="Personalised Banners"
            href="https://cdn.itegroupnews.com/MITT_Personalized_Banners_Editable_acc7438050.pdf"
            buttonText="Download Banner"
            description={
              <p>
                Boost your marketing impact by incorporating your{" "}
                <strong>promo code</strong> into{" "}
                <strong>custom digital banners</strong> for social media, email
                campaigns, and websites.
                <br /><br />
                Drive more visitors to your stand by making it simple for them to
                register with your <strong>free access code</strong>.
              </p>
            }
          />

          <PromoCard
            title="Announcement Template"
            href="https://cdn.itegroupnews.com/MITT_2026_Announcement_Template_369815921a.docx"
            buttonText="Download Template"
            description={
              <p>
                Announce your participation at <strong>MITT 2026</strong> on your
                company’s website.
                <br /><br />
                Share your stand number, highlight your products and services, and
                encourage partners and clients to visit your booth during the exhibition.
              </p>
            }
          />

        </div>
      </div>
    </section>
  )
}
