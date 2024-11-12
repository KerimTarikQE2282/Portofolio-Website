import Image from 'next/image'
import React from 'react'
import image from '../../Resources/WorksBg.png'
import CountUp from 'react-countup';
import TimeLine from '../SubCompoonents/TimeLine'
function Work() {
  return (
    <div className='relative lg:h-[80vh] h-[100vh] top-[30vh] lg:top-0' id='Work'>
    <p className='relative text-5xl font-bold ml-[33vw] w-[35vw] mt-[10vh]'>My Work Experience</p>
      <div className='relative  left-[10vw] w-[80vw] bottom-[5vh]'>
      <TimeLine/>
      </div>
    </div>
  )
}

export default Work
