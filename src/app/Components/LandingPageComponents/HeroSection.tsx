import React from 'react';
import Header from '../Header';
import ComponentContext from '../../page';
import Image from 'next/image';
import image from '../../Resources/Group 1 (3).png';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline';
import myImage from '../../Resources/myImage.png'
function HeroSection() {
  

  
  return (
    <motion.div className='lg:h-screen h-[180vh] relative  bg-black text-white'  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
 
 

<p className='lg:text-6xl text-white relative z-50 lg:left-[5vw] lg:top-[37vh] lg:w-[40vw] w-[90vw] text-5xl left-5 top-[90vh] flex flex-row gap-10'>
<Image
   className='lg:w-[5vw] lg:h-[5vw] h-[20vh]  w-[22vh] rounded-full'
   src={myImage}
   alt='pp'/> Hi I'm Kerim
    </p>     
     <motion.div className='lg:text-4xl text-white relative z-50 lg:left-[5vw] lg:top-[43vh] lg:w-[40vw] w-[80vw]  text-4xl top-[90vh] left-[5vw]' initial={{ y: '10vh' }} // Initial position - 50% of viewport height from the top
      animate={{ y: 0 }} // Final position - 0 (current position)
      transition={{ duration: 1 }}>
     
   <p className='text-2xl'>Full stack developer Specializing in React.js</p>
   <p className=' text-base mt-4 lg:font-light'> 
            As a computer science graduate with a keen interest in MERN stack development, my journey into web development has been both exciting and challenging. Mastering MongoDB, Express.js, React, and Node.js has empowered me to create dynamic and responsive web applications. The versatility of JavaScript across the stack allows me to build seamless user interfaces and robust backend services, enhancing my ability to craft efficient and modern web solutions. 
          </p>
          <div>

          </div>
          </motion.div>
          <div className='lg:ml-[30vw] lg:h-[100vh] relative  h-[110vh]  lg:bottom-[40.5vh] bottom-[75vh]'>
          <Spline
        scene="https://prod.spline.design/8OzdqundiQQEYbX0/scene.splinecode" 
      />
      </div>
    </motion.div>
  );
}

export default HeroSection;