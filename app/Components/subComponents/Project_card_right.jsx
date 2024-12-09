import React from 'react'
import Auora from '../../../Resources/Auora.png'
import Image from 'next/image'

export default function Project_card() {
  return (
    <div className="relative flex items-center justify-center h-[70vh] ">
         <div className="w-1/2 h-full relative">
      <Image
        src={Auora}
        alt="Earth from space"
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
    {/* Left Section */}
    <div className="flex flex-col justify-center text-left w-1/2  px-10">
      {/* Project Info */}
      <div className="flex items-center space-x-2">
        <p className="uppercase text-sm font-semibold tracking-wider">
          Interactive Development
        </p>
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        <p className="uppercase text-sm font-semibold tracking-wider">2024</p>
      </div>

      {/* Project Title */}
      <h1 className="text-6xl font-bold mt-4">
        Modern E-<br />
        commerce
      </h1>

      {/* Project Description */}
      <p className=" text-lg mt-4">
        Full-featured e-commerce platform with real-time inventory, AI product
        recommendations, and seamless checkout experience.
      </p>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {["React", "Node.js", "Stripe", "MongoDB"].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 text-sm font-medium border border-gray-500 rounded-full hover:bg-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* View Project Button */}
      <button className="mt-8 px-6 py-3 bg-white text-black text-lg font-medium rounded-lg hover:bg-gray-200 transition-all">
        View Project →
      </button>
    </div>

    {/* Right Section */}
   
  </div>
    
  )
}
