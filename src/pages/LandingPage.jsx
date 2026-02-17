import React from 'react'
import logo from "/logo.png"

export const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center h-screen items-center'>
        <a href="" className='animate-spin transition-transform duration-300 hover:rotate-180'>
            <img src={logo} alt="" className='h-10 w-10' />
        </a>
        <h2 className='font-clash'>This is clash display font</h2>
        <p className='font-archivo'> This is Archivo font</p>
    </div>
  )
}

