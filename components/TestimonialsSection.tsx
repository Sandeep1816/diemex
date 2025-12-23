import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Roshan M. Thomas",
      title: 'Director of "Incredible India"',
      subtitle: "Ministry of Tourism of the Republic of India",
      quote:
        '"Russia is a major market for India. The Diemex exhibition is an ideal platform for us to develop our tourism business in the country. Thank you, Diemex, for organizing such a great exhibition."',
      image: "/images/image.png",
      position: "left",
    },
    {
      name: "Dr Aung Kyaw Htun",
      title: "Representative of Ministry of Hotels and Tourism of Myanmar",
      subtitle: "Ministry of Hotels and Tourism - Republic of the Union of Myanmar",
      quote:
        '"Diemex 2025 exceeded our expectations. With participants from nearly 30 countries and strong interest from Russian visitors discovering Myanmar for the first time, it\'s been a valuable platform to showcase our culture and tourism potential."',
      image: "/images/image.png",
      position: "center",
    },
    {
      name: "Haitham Al Ghassani",
      title: "Director General of Tourism Promotion",
      subtitle: "Oman Ministry of Heritage and Tourism",
      quote:
        '"It is our first time at Diemex. We had a lot of meetings from morning to evening. I feel very happy about the number and quality of visitors, they are serious about doing business in Oman."',
      image: "/images/image.png",
      position: "right",
    },
  ]

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary text-balance">
          Hear what our Exhibitors have to say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#1a2c42] text-white border-0 p-8 flex flex-col items-center text-center">
              <Avatar className="w-32 h-32 mb-6 border-4 border-white">
                <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                <AvatarFallback>
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-sm font-medium text-gray-300 mb-1">{testimonial.title}</p>
              <p className="text-xs text-gray-400 mb-6">{testimonial.subtitle}</p>

              <blockquote className="text-sm leading-relaxed text-gray-200">{testimonial.quote}</blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
