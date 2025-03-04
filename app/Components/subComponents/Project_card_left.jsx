import React from 'react';
import Image from 'next/image';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';

export default function Project_card({ image, title, description, usedTech,githubLink,ProjectLink }) {
  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-center h-auto lg:w-full w-[90dvw] px-4 md:px-0">
      
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
        <div className='flex flex-row gap-10'>
        <Link href={ProjectLink} alt={"some thing"} className="mt-6 md:mt-8 px-6 py-3 bg-black text-white text-sm md:text-lg font-medium rounded-lg hover:bg-white hover:text-black hover:border hover:border-5  transition-all">
          View Project →
        </Link>
        <Link href={githubLink} alt={"some thing"} className="mt-6 md:mt-8 px-6 py-3 bg-black text-white text-sm md:text-lg font-medium rounded-lg hover:bg-white hover:text-black hover:border hover:border-5  transition-all flex flex-row gap-5">
         <GithubIcon/> <p >Github repo</p>
        </Link>
        </div>
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
