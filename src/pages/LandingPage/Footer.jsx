import React from "react";
import {
  FaArrowAltCircleRight,
  FaArrowUp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <section className="w-full bg-[#000000] rounded-2xl md:rounded-[36px] flex flex-col px-6 mt-10 py-6 gap-6">
      <div className="w-full h-[330px] rounded-[35px] bg-gradient-to-t from-[#FFFF] via-[#FFFF] to-[#1E78C9] flex flex-col justify-center items-center">
        <div className="flex items-center flex-col mx-auto mt-6">
          <h2 className="font-clash font-medium text-3xl md:text-5xl ">
            Be First to Experience
          </h2>
          <h3 className="font-clash font-semibold text-4xl md:text-5xl">
            EVODRIVE
          </h3>
          <p className="w-80 md:w-100 mt-2 text-md font-archivo text-center mb-3">
            Join our early access list and help shape the future of car rentals
            in Nigeria.
          </p>
        </div>
        <div className="md:w-110 mx-auto bg-gray-100 border-1 border-gray-300 rounded-full flex items-center outline-white justify-between p-1 px-2">
          <input
            type="email"
            placeholder="Enter your email..."
            className="mx-2 flex-1 bg-transparent outline-none text-sm text-black placeholder:italic"
          />

          <button className="flex items-center gap-2 bg-[#3B82F6] text-white p-2 md:px-3 md:py-2 cursor-pointer hover:bg-[#2c75eb] transition duration-200 rounded-full max-sm:text-xs font-sm italic">
            Join the Waitlist
            <FaArrowAltCircleRight className="text-xs md:text-base" />
          </button>
        </div>
        <div className="font-archivo mt-2 flex flex-col gap-1 items-center text-sm mb-6">
          <p>A smarter, safer way to rent and earn with cars in Nigeria.</p>
          <p>Lagos.Abuja.Port Harcourt</p>
          <p className="font-bold text-md italic">🚀Lauching Soon</p>
        </div>
      </div>

      <div className="flex justify-between p-4 md:flex-row flex-col gap-6">
        <div>
          <img
            src={logo}
            alt="logo"
            className="h-12 bg-white p-2 rounded-4xl"
          />
          <div className="flex mt-2 gap-2 items-center text-2xl">
            <FaFacebook className="bg-white rounded-full text-blue-500 text-2xl p-1" />
            <FaXTwitter className="bg-white rounded-full text-blue-500 text-2xl p-1" />
            <FaInstagram className="bg-white rounded-full text-blue-500 text-2xl p-1" />
          </div>
        </div>
        <div className="flex justify-between gap-8 md:flex-row flex-col">
          <div className="flex flex-col gap-2 list-none ">
            <h2 className="text-white font-clash font-semibold text-lg">
              Quick Links
            </h2>
            <li className="text-gray-600 text-md font-clash">
              <a href="">Rent a Car</a>
            </li>
            <li className="text-gray-600  text-md font-clash">
              <a href="">List your Vehicle</a>
            </li>
            <li className="text-gray-600 text-md font-clash ">
              <a href="">How it Works</a>
            </li>
            <li className="text-gray-600 text-md font-clash ">
              <a href="">EV Future</a>
              <br />
              <p>(electric vehicles)</p>
            </li>
          </div>
          <div className="flex flex-col gap-2 list-none ">
            <h2 className="text-white font-clash font-semibold text-lg">
              Contact
            </h2>
            <li className="text-gray-600 text-md font-clash ">
              <a href="mailto:evodriveng@gmail.com">evodriveng@gmail.com</a>
            </li>
            <li className="text-gray-600  text-md font-clash">
              <a href="tel:+2347043949435">+237 704 394 9435</a>
            </li>
          </div>

          <div className="flex flex-col gap-2 list-none ">
            <h2 className="text-white font-clash font-semibold text-lg">
              Policy
            </h2>
            <li className="text-gray-600 text-md font-clash ">
              <a href="">Terms & Conditions</a>
            </li>
            <li className="text-gray-600 text-md font-clash ">
              <a href="">Privacy Policy</a>
            </li>
            <button className="mt-12 text-md font-clash text-white bg-blue-500 p-2 gap-2 rounded-lg flex justify-center overflow-hidden md:items-center bg-[#3B82F6] cursor-pointer hover:bg-[#2c75eb] transition duration-200 text-center">
              Back to Top{" "}
              <FaArrowUp className="bg-white rounded-full text-blue-500 text-xl p-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
