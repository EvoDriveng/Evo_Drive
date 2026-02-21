import React from 'react'
import logo from "/logo.png"
import { HeroSection } from './Hero'
import { CarRentals } from './CarRentals'
import { HowItWorks } from './HowItWorks'
import { WhyPartner } from './WhyPartner'
import { Cta } from './Cta'
import ElectricVehicles from "./ElectricVehicles";
import Footer from "./Footer";


export const LandingPage = () => {
  return (
    <div className='max-sm:p-4 p-6 flex flex-col h-screen items-center'>
        <HeroSection />
        <CarRentals />
        <HowItWorks/>
        <WhyPartner/>
        <Cta/>
      <ElectricVehicles />
      <Footer />
      {/* <a href="" className='animate-spin transition-transform duration-300 hover:rotate-180'>
            <img src={logo} alt="" className='h-10 w-10' />
        </a>
        <h2 className='font-clash'>This is clash display font</h2>
        <p className='font-archivo'> This is Archivo font</p> */}
    </div>
  );
};
