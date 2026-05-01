import { Navbar } from "../../components/Navbtn";
import { ArrowRight } from "lucide-react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section className="w-full">
      <Navbar />
      <section className="mt-14 text-white">
        <div className="relative min-h-180.5 overflow-hidden rounded-2xl flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/djfduj4fy/image/upload/v1775955253/hero-background_xlv97i.jpg"
            alt="Hero section background-image"
            className="absolute inset-0 w-full h-full   object-cover "
          />
          <div className="absolute inset-0 bg-black/50 pointer-events-none "></div>

          <div className="h-16"></div>

          <div className="relative z-10 lg:w-209.75 text-white flex flex-col items-center px-3">
            <p className="font-semibold font-clash text-[28px] md:text-[60px] text-center">
              Rent a car.
            </p>
            <p className="font-semibold font-clash text-[28px] md:text-[60px] text-white text-center">
              From Trusted Owners..
            </p>
            <p className="font-archivo lg:text-xl text-white text-center">
              EvoDrive is a modern car rental platform connecting renters with
              verified vehicles from everyday cars to luxury and electric
              vehicles all in one secure platform.
            </p>
            <div className="bg-white w-full max-w-75 md:max-w-md rounded-full flex items-center justify-between p-1.5 md:px-1 mt-10">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 bg-transparent outline-none text-sm text-black placeholder:italic md:px-2"
              />
              <button className="flex items-center gap-2 bg-[#3B82F6] text-white p-2 md:px-3 md:py-2 cursor-pointer hover:bg-[#2c75eb] transition duration-200 rounded-full max-sm:text-xs font-sm">
                Join the Waitlist
                <FaArrowAltCircleRight className="text-xs md:text-base" />
              </button>
            </div>
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row md:gap-10 px-10 pb-10 mt-10 lg:mt-30">
            <div className="flex gap-5 md:gap-10 flex-col lg:flex-row w-75 lg:w-247.5 p-5">
              <div className="w-full md:w-[50%] flex flex-col md:flex-row md:items-end text-[#F0F1F3] leading-8 backdrop-blur-xl border rounded-2xl p-2">
                <span className="text-center md:text-left font-clash font-semibold text-[20px] md:text-[34px]">
                  Everyday Use Vehicle
                </span>
                <img
                  src="https://res.cloudinary.com/djfduj4fy/image/upload/v1775955340/Frame-1_cxqq6w.jpg"
                  className="rounded-2xl"
                  alt="Everyday use Vehicle"
                />
              </div>
              <div className="w-full md:w-[50%] flex flex-col-reverse md:flex-row md:items-end text-[#F0F1F3] leading-8 backdrop-blur-xl border rounded-2xl p-2">
                <img
                  src="https://res.cloudinary.com/djfduj4fy/image/upload/v1775955352/Frame-2_fgsef3.jpg"
                  className="rounded-2xl"
                  alt="Luxurious Vehicles"
                />
                <span className="text-center md:text-right font-clash font-semibold text-[20px] md:text-[34px]">
                  Luxurious Vehicles
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-col md:flex-row md:justify-between items-start ">
          <span className="font-archivo px-3 py-2 bg-white rounded-3xl">
            About Us
          </span>
          <div className="lg:w-[75%]">
            <p className="font-clash font-medium text-[#010B14] text-xl md:text-[24px]">
              <span className="text-[#0674FF] font-semibold">EVODRIVE</span> is
              a modern car rental platform built for Nigeria's evolving mobility
              needs. We connect verified car owners and fleet partners with
              renters through a secure, seamless, and flexible booking
              experience, offering both self-driven and chauffeur options across
              multiple vehicle brands, including electric vehicles.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
