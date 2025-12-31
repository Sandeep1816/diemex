import Image from "next/image"

const articles = [
  {
    image: "/bali-indonesia-temple-scenic.jpg",
    date: "02.10.2023",
    title: "Uganda Strengthens Its Presence at MITT 2026",
    description:
      "Uganda will present its largest-ever national delegation at MITT 2026, showcasing over 20 leading tour operators and tourism brands. The expanded stand highlights the country’s commitment to strengthening its position in the international tourism market.",
  },
  {
    image: "/bali-indonesia-temple-scenic.jpg",
    date: "02.10.2023",
    title: "Egypt Confirms Participation in MITT 2026 in Moscow",
    description:
      "With tourism arrivals to Egypt set to exceed 21 million in 2025, Egypt confirms its participation in MITT 2026 at Crocus Expo, Moscow.",
  },
  {
    image: "/bali-indonesia-temple-scenic.jpg",
    date: "02.10.2023",
    title:
      "Acceptance of applications for the MITT Travel Start 2026 startup competition",
    description:
      "Hurry up to apply for MITT Travel Start, a competition of innovative projects in the field of tourism and hospitality, which has been held since 2021 as part of the MITT exhibition, one of the largest in Russia.",
  },
  {
    image: "/bali-indonesia-temple-scenic.jpg",
    date: "02.10.2023",
    title: "What will be presented in the sections of the MITT 2026 exhibition",
    description:
      "Learn more about MITT 2026 and get a first look at the exhibition and the promo code NEWS.",
  },
  {
    image: "/bali-indonesia-temple-scenic.jpg",
    date: "02.10.2023",
    title: "We invite you to webinars for hoteliers",
    description:
      "On December 8 and 9, we will tell you how to launch systemic sales using digital marketing and reveal the secrets of hotel profitability.",
  },
  {
    image: "/bali-indonesia-temple-scenic.jpg",
    date: "02.10.2023",
    title: "MITT 2026 Business Programme: Benefits and Key Events",
    description:
      "Learn more about the business programme of the International Exhibition for Travel and Hospitality Industry and get a first look at the promo code NEWS.",
  },
]

export default function ArticlesGrid() {
  return (
    <section className="w-full py-20">
      <div className="px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ArticleCard({
  image,
  date,
  title,
  description,
}: {
  image: string
  date: string
  title: string
  description: string
}) {
  return (
    <article className="group cursor-pointer">
      
      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-xs text-gray-500">{date}</p>

        <h3 className="mt-2 text-[#0b1f33] font-bold text-3xl  leading-snug">
          {title}
        </h3>

        <p className="mt-2 text-xl text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

    </article>
  )
}
