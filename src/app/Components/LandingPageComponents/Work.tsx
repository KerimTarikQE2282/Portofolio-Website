import Image from 'next/image'
import React from 'react'
import image from '../../Resources/WorksBg.png'
import CountUp from 'react-countup';
import TimeLine from '../SubCompoonents/TimeLine'
function Work() {
  return (
    <div className='relative lg:h-[80vh] h-[100vh] top-[40vh] lg:top-0 ' id='Work'>
    <p className='relative text-5xl font-bold lg:ml-[33vw] ml-10 lg:w-[35vw] mt-[10vh] w-[100vw]'>My Work Experience</p>
      <div className='relative  left-[10vw] w-[80vw] lg:bottom-[5vh] bottom-[15vh]'>
      <TimeLine/>
      </div>
    </div>
  )
}

export default Work
