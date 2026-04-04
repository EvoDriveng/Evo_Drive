import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.svg";
import logoOnly from "/logo.png";
// import logoOnlys from "/logo.png"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className="w-full rounded-full bg-white flex items-center justify-between px-7 md:py-5 py-3 ">
    // <div className={isOpen ? `` : `w-full rounded-full bg-white flex items-center justify-between px-7 md:py-5 py-3`}>
    // ${isOpen ? "opacity-100 translate-x-0 rounded-xl scale-100" : "opacity-0  -translate-y- rounded-full"
    <section
      className={`bg-white px-7 md:py-5 py-3 relative left-0 z-50 ${isOpen ? "rounded-xl" : "rounded-full"}`}
    >
      <div className={` flex items-center justify-between`}>
        <div>
          <img src={logo} alt="EvoDrive logo" className="hidden lg:block" />
          <img
            src={logoOnly}
            alt="EvoDrive logo"
            className="lg:hidden w-14 h-14"
          />
        </div>
        <nav className="hidden items-center list-none gap-5 font-archivo text-[#555C62] lg:flex">
          <li className="cursor-pointer">Rent a Car</li>
          <li className="cursor-pointer">List Your Vehicle</li>
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">EV Future</li>
        </nav>
        <div className="hidden lg:flex bg-[#0674FF] text-white items-center gap-4 px-2 rounded-full">
          <span className="font-archivo font-medium">Partner with Us</span>
          <button className="w-10 h-10 text-[#0674FF] font-semibold rounded-full bg-white flex justify-center items-center cursor-pointer">
            <ArrowRight />
          </button>
        </div>
        <button
          aria-label="open navigation menu"
          className="block lg:hidden cursor-pointer rotate-45"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* {isOpen && ( */}
      <nav className="">
        <ul
          className={`origin-top transition-transform duration-900 ease-in-out flex flex-col items-center justify-between gap-5 absolute left-0  w-full bg-white py-4 rounded-xl font-archivo text-[#555C62] ${isOpen ? "opacity-100 scale-y-100" : "opacity-0  scale-y-0 rounded-full"} pointer-events-auto overflow-hidden`}
        >
          {/* <ul
            className={`transition-[border-radius, transform, opacity] duration-700 ease-in-out pointer-events-auto overflow-hidden flex flex-col items-center justify-between gap-5 absolute left-0  w-full bg-white py-4 rounded-xl font-archivo text-[#555C62] ${isOpen ? "opacity-100 translate-x-0 rounded-xl scale-100" : "opacity-0 -translate-y- rounded-full"} pointer-events-auto overflow-hidden`}
          ></ul> */}
          <li className="cursor-pointer">Rent a Car</li>
          <li className="cursor-pointer">List Your Vehicle</li>
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">EV Future</li>
          <div className="flex bg-[#0674FF] text-white items-center gap-4 p-3 rounded-full">
            <span className="font-archivo font-medium">Partner with Us</span>
            <button className="w-6 h-6 text-[#0674FF] font-semibold rounded-full bg-white flex justify-center items-center cursor-pointer">
              <ArrowRight />
            </button>
          </div>
        </ul>
      </nav>
      {/* )} */}
    </section>
  );
};
