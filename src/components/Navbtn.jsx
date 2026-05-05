import { useState } from "react";
import { FaBars, FaTimes, FaArrowAltCircleRight } from "react-icons/fa";
import { ArrowRight, Rotate3D } from "lucide-react";
import logo from "../assets/logo.svg";
import logoOnly from "/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
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
        <nav className="hidden items-center list-none gap-5 font-archivo text-[#555C62] font-medium lg:flex">
          <li className="cursor-pointer hover:text-[#697c8b]">Rent a Car</li>
          <li className="cursor-pointer hover:text-[#697c8b]">
            List Your Vehicle
          </li>
          <li className="cursor-pointer hover:text-[#697c8b]">How it works</li>
          <li className="cursor-pointer hover:text-[#697c8b]">EV Future</li>
        </nav>
        <button className="hidden lg:flex items-center gap-2 bg-[#0674FF] text-white p-2 md:px-3 md:py-2 cursor-pointer hover:bg-[#2c75eb] transition duration-200 rounded-full max-sm:text-xs font-sm">
          Partner with Us
          <FaArrowAltCircleRight className="text-xs md:text-base" />
        </button>
        <button
          aria-label="open navigation menu"
          className={`block lg:hidden cursor-pointer ${isOpen ? "rotate-45 scale-110" : "rotate-0 scale-100"}`}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav>
        <ul
          className={`transition-all duration-700 ease-in-out flex flex-col items-center gap-5 absolute left-0 w-full bg-white py-4 rounded-xl font-archivo text-[#555C62] ${isOpen ? "opacity-100 max-h-125" : "opacity-0 max-h-0 "} pointer-events-auto overflow-hidden`}
        >
          {["Rent a Car", "List Your Vehicle", "How it works", "EV Future"].map(
            (item, idx) => (
              <li
                key={idx}
                className="cursor-pointer transform transition-opacity duration-500 ease-in-out"
                style={{ "--idx": idx }}
              >
                {item}
              </li>
            ),
          )}

          <div className="flex bg-[#0674FF] text-white items-center gap-4 p-3 rounded-full">
            <span className="font-archivo font-medium">Partner with Us</span>
            <button className="w-6 h-6 text-[#0674FF] font-semibold rounded-full bg-white flex justify-center items-center cursor-pointer">
              <ArrowRight />
            </button>
          </div>
        </ul>
      </nav>
    </section>
  );
};
