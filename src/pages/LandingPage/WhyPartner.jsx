import dashboard from "../../assets/partners/dashboard_evo.jpg"
import vehicles from "../../assets/partners/idle_cars.jpg"
import fleet from "../../assets/partners/fleet_Partners.jpg"
import renters from "../../assets/partners/verified_renters.jpg"

export const WhyPartner = () => {

  const cards = [
    {
      title: "Earn from Idle Vehicles",
      image: "https://res.cloudinary.com/djfduj4fy/image/upload/v1772028590/idle_cars_qjfgje.jpg",
      span: "col-span-1 md:row-span-2",
      variant: "tall"
    },
    {
      title: "Dashboard to Track Earnings & Usage",
      image: "https://res.cloudinary.com/djfduj4fy/image/upload/v1772028606/dashboard_evo_izzayd.jpg",
      span: "col-span-1 md:col-span-1",
      variant: "normal"
    },
    {
      title: "Built for Individuals & Fleet Partners",
      image: "https://res.cloudinary.com/djfduj4fy/image/upload/v1772028581/fleet_Partners_zwrhwt.jpg",
      span: "md:col-span-1",
      variant: "normal"
    },
    {
      title: "Verified Renters & Secure Booking Flow",
      image: "https://res.cloudinary.com/djfduj4fy/image/upload/v1772028598/verified_renters_bkdvgf.jpg",
      span: "md:col-span-2",
      variant: "wide"
    }
  ]

  return (
    <section className="w-full bg-[#3B82F6] rounded-2xl md:rounded-[36px] flex justify-center mt-12 py-12  px-3">

      <div className="w-full max-w-6xl flex flex-col items-center">

        <p className="px-4 py-1 bg-white rounded-full text-sm font-archivo">
          Why Partner with{" "}
          <span className="uppercase italic text-[#3B82F6] font-semibold">
            Evo Drive
          </span>
        </p>

        <h2 className="font-clash font-semibold text-white text-center text-[23px] md:text-4xl mt-4 max-w-lg">
          Earn More from Your Cars. Rent With Peace of Mind.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[180px] gap-4 w-full mt-7">

          {cards.map((card, index) => {

            if (card.variant === "tall") {
              return (
                <div
                  key={index}
                  className={`rounded-2xl bg-black p-4 overflow-hidden flex flex-col ${card.span}`}
                >
                  <img
                    src={card.image}
                    className="w-full h-52  md:h-2/3 rounded-2xl"
                  />

                  <div className=" h-1/3 max-sm:pt-4 flex items-end ">
                    <p className="text-white font-clash text-3xl md:text-4xl font-semibold">
                      {card.title}
                    </p>
                  </div>
                </div>
              )
            }

            return (
              <div
                key={index}
                className={`relative rounded-2xl border-7 border-white overflow-hidden ${card.span}`}
              >
                  <div className="absolute inset-0 z-50 bg-black/40 ">
                  </div>
                <img
                  src={card.image}
                  className="rounded-2xl inset-0 w-full h-full object-cover "
                />


                <p className="absolute bottom-2 z-999 left-3 right-5 text-white font-clash text-[20px] md:text-2xl font-medium">
                  {card.title}
                </p>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
