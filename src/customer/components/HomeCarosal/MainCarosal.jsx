'use client'

import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { MainCarosalData } from '../../components/HomeCarosal/MainCarosalData'

const MainCarosal = () => {
  const items = MainCarosalData.map((item, index) => (
    <div key={index} className="relative w-full h-[90vh]">
      
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
        role="presentation"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-white max-w-3xl">
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-widest uppercase">
            {item.title}
          </h1>

          <p className="mt-4 text-sm md:text-lg text-gray-200 tracking-wide">
            {item.subtitle}
          </p>

          <button className="mt-8 px-8 py-3 border border-white text-white uppercase tracking-wider hover:bg-white hover:text-black transition duration-300">
            {item.cta}
          </button>

        </div>
      </div>
    </div>
  ))

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      disableDotsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
      animationDuration={1200}
    />
  )
}

export default MainCarosal
