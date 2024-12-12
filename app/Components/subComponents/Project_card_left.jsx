import React from 'react';
import Image from 'next/image';

export default function Project_card({ image, title, description, usedTech }) {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-center h-auto lg:w-full w-[90vw] px-4 md:px-0">
      
      {/* Left Section */}
      <div className="flex flex-col justify-center text-left w-full md:w-1/2 px-4 md:px-10 mt-6 md:mt-0">
        {/* Project Info */}
        <div className="flex items-center space-x-2 mb-2">
          <p className="uppercase text-sm font-semibold tracking-wider">
            Interactive Development
          </p>
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <p className="uppercase text-sm font-semibold tracking-wider">2024</p>
        </div>

        {/* Project Title */}
        <h1 className="text-3xl md:text-6xl font-bold mt-2 md:mt-4">
          {title}
        </h1>

        {/* Project Description */}
        <p className="text-sm md:text-lg mt-2 md:mt-4">
          {description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
          {usedTech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-xs md:text-sm font-medium border border-gray-500 rounded-full hover:bg-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <button className="mt-6 md:mt-8 px-6 py-3 bg-white text-black text-sm md:text-lg font-medium rounded-lg hover:bg-gray-200 transition-all">
          View Project →
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <Image
          src={image}
          alt="Project preview"
          className="object-cover w-full h-full rounded-lg md:rounded-none hover:scale-105 transition-all"
        />
      </div>
    </div>
  );
}
