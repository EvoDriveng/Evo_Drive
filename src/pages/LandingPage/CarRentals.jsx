import car3 from "../../assets/cars/car3.svg";
import car4 from "../../assets/cars/car4.svg";
import car5 from "../../assets/cars/car5.svg";
import car6 from "../../assets/cars/car6.svg";
import car7 from "../../assets/cars/car7.svg";

export const CarRentals = () => {
  return (
    <section className="bg-white w-full rounded-4xl p-5 mt-15">
      <div className="flex flex-col items-center justify-center ">
        <span className="font-archivo text-[10px] md:text-[14px] px-3 py-2 bg-[#F0F1F3] rounded-3xl">
          For Car Renters
        </span>
        <header className="font-clash text-[28px] md:text-[50px] max-w-65 md:max-w-120 font-medium text-center leading-8 md:leading-13 ">
          Car Rentals Made Simple and Secure.
        </header>
        <p className="font-archivo mt-3">
          Choose trusted cars, flexible driving options, and transparent pricing
          all built for Nigeria.
        </p>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <div className="relative h-53">
              <img
                src={car3}
                alt="Verified cars and owners only "
                className="rounded-2xl w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-end p-5">
                <div>
                  <h3 className="font-clash text-white text-2xl font-semibold">
                    Verified Cars
                  </h3>
                  <h3 className="font-clash text-white text-2xl font-semibold">
                    & Owners Only
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative h-53">
              <img
                src={car4}
                alt="Electric vehicles"
                className="rounded-2xl w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-end p-5">
                <div>
                  <h3 className="font-clash text-white text-2xl font-semibold">
                    Electric Vehicles
                  </h3>
                  <p className="py-1 bg-white text-[10px] md:text-[14px] w-20 md:w-25 h-5 md:h-7 rounded-4xl text-center">
                    Coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="bg-[#010B14] rounded-4xl h-105 md:h-115 px-4 py-3 flex flex-col justify-between">
              <div className="relative h-53">
                <img
                  src={car5}
                  alt="Multiple car brands"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className=" text-white text-[35px] md:text-[48px] font-clash font-semibold leading-10 text-left">
                  Multiple Car Brands
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <div className="relative h-53">
              <img
                src={car6}
                alt="Luxury car available for self-drive or chauffeur service"
                className="rounded-2xl w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-end justify-end p-5">
                <div className="">
                  <h3 className="font-clash text-white text-2xl font-semibold">
                    Self-Drive or
                  </h3>
                  <h3 className="font-clash text-white text-2xl font-semibold text-right">
                    Chauffeur
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative h-53">
              <img
                src={car7}
                alt="Car available with insurance protection options"
                className="rounded-2xl w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-end justify-end p-5">
                <div className="">
                  <h3 className="font-clash text-white text-2xl font-semibold">
                    Insurance Protection
                  </h3>
                  <h3 className="font-clash text-white text-2xl font-semibold text-right">
                    Options
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
