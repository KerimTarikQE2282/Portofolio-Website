"use client";
import React from 'react';
import AboutMe from './Components/AboutMe';
import Timeline from './Components/Timeline';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import GetInTouch from './Components/GetInTouch';
import Lottie from 'react-lottie';
import Maintainance from './LottieAnmations/Maintainence.json'
function page() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Maintainance,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
  <div className="w-full h-[100vh] bg-black text-white flex flex-col justify-center items-center lg:hidden px-10"> 
    
    <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
  <p className='font-bold text-xl'>Mobile Interface is Under Maintenance Please view the website on a larger screen</p>
</div>

      <Hero />

      <div className="lg:px-24 px-10">
        <AboutMe />
        <Timeline />
      </div>
      
      <Projects />
      <GetInTouch />
    </div>
  );
}

export default page;



