"use client"
import React from 'react'
import Lottie from 'react-lottie';
import Maintainance from '../LottieAnmations/Maintainence.json'

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
    <div className="w-[100dvw] h-[100vh] bg-black text-white flex flex-col justify-center items-center  px-10"> 
    
    <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      <p className='font-bold text-3xl'>Under maintainance</p>
    </div> 
  )
}

export default page


