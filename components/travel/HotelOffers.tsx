const hotels = [
  {
    name: "Art Moscow",
    logo: "/images/fastenexlogo.webp", // replace with real logo
    text:
      "The modern Hotel Art Moscow Voykovskaya 4* is a 25-minute drive from Crocus Expo, Sheremetyevo Airport, and the city center. The Voykovskaya metro station, Baltiyskaya MCC, Krasny Baltiest MCC are a 10-minute walk away. The hotel has a stylish interior and an elaborate infrastructure, including a restaurant, a bar and conference rooms. Buffet breakfast, free Wi-Fi and parking are at guests' disposal. All rooms are equipped with all the amenities you need for maximum comfort, including a mini-fridge and LCD TV, a tea station and toiletries.",
  },
  {
    name: "Penta Hotels",
    logo: "/images/fastenexlogo.webp",
    text:
      "The hotel is located in the famous building 'The Book', 2 km from the Red Square, 500 m from Arbatskaya metro station, direct metro line to Crocus Expo. In the hotel: 228 designer rooms with panoramic views of the Old and New Arbat Streets; buffet breakfast at Pentaloft Art Restaurant (24/7 room service); Pentalounge with bar, a la carte restaurant and billiards; full range of conference services; free Wi-Fi throughout the hotel; free gym and cozy library.",
    altBg: true,
  },
];

export default function HotelOffers() {
  return (
    <section className="  py-24">
      <div className="mx-auto max-w-[1649px]">

        {/* TITLE */}
        <h2 className="text-[30px]  font-bold text-[#10223B] mb-6">
          Save Up to 20% on Hotel Stays when you book online using the Promo Code
          <span className="font-extrabold"> ‘EXPO’</span>
        </h2>

        {/* RED DIVIDER */}
        <div className="h-px bg-[#ff3b30] mb-20" />

        {/* HOTEL BLOCKS */}
        <div className="space-y-24">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.name}
              className={`grid grid-cols-1 md:grid-cols-[260px_1fr] gap-16 items-start ${
                hotel.altBg ? "bg-[#efe9dc] p-12" : ""
              }`}
            >
              {/* LOGO */}
              <div className="flex items-start">
                <img
                  src={hotel.logo}
                  alt={hotel.name}
                  className="max-w-[200px] object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-8">
                <p className="text-[#10223B] text-base leading-relaxed max-w-[900px]">
                  {hotel.text}
                </p>

                {/* CTA BUTTONS */}
                <div className="flex flex-wrap gap-6">
                  <button
                    className="
                      bg-[#ff3b30]
                      text-white
                      px-10
                      py-4
                      uppercase
                      font-bold
                      text-sm
                      underline
                      underline-offset-4
                    "
                  >
                    View Location
                  </button>

                  <button
                    className="
                      bg-[#10223B]
                      text-white
                      px-10
                      py-4
                      uppercase
                      font-bold
                      text-sm
                      underline
                      underline-offset-4
                    "
                  >
                    Book Your Stay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
