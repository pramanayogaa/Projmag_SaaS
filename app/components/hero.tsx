import React from 'react'
import Image from "next/image"

const Hero = () => {
  return (
    <section className="w-full mx-auto max-w-7xl px-4 py-16 md:py-20 lg:py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-">
            Manage Projects with Ease, Drive and Success.
          </h1>
          <p className="text-gray-500 text-sm sm:text-lg lg:text-xl py-6 max-w-xl mx-auto lg:mx-0">
            Projmag simplifies project management, helping teams collaborate efficiently, 
            track progress, and achieve goals faster. Boost your productivity today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-blue-700 transition">
              Start Your Free Trial
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden lg:flex justify-center lg:justify-end">
          <Image 
            src="/heroImg.png" 
            alt="heroImg" 
            width={800} 
            height={800} 
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
