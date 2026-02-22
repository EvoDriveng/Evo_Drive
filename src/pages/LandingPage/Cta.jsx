import { FaArrowAltCircleRight } from "react-icons/fa"

export const Cta = () => {
  return (
    <section className="mt-12 w-full">
      <div className="relative overflow-hidden rounded-4xl">

        <img
          src="https://res.cloudinary.com/djfduj4fy/image/upload/v1772027942/Earn_more_x0qgtk.jpg"
          alt="Earn more"
          className="w-full h-105 object-center md:object-top object-cover "
        />

        <div className="absolute inset-0 z-50 bg-black/70 "></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center px-3 md:px-5">

          <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 z-50 gap-8 mt-24 md:mt-48 items-center text-white">

            <h2 className="font-clash text-2xl md:text-[38px] tracking-tight font-semibold leading-snug max-w-md">
              Earn More From Your Vehicles, Without the Rental Stress
            </h2>

            <div className="flex flex-col gap-4 max-w-md">

              <p className="font-archivo text-sm md:text-lg text-gray-200">
                Earn consistently from idle vehicles while maintaining control,
                protection, and peace of mind whether you own one car or a fleet.
              </p>

              <div className="font-archivo bg-white rounded-full flex items-center justify-between p-2 md:px-3">

                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 bg-transparent outline-none text-sm text-black placeholder:italic"
                />

                <button className="flex items-center gap-2 bg-[#3B82F6] text-white p-2 md:px-3 md:py-2 cursor-pointer hover:bg-[#2c75eb] transition duration-200 rounded-full max-sm:text-xs ">
                  Onboard Your Fleet
                  <FaArrowAltCircleRight className="text-xs md:text-base"/>
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
