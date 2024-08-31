import React from 'react';
import Header from '../Header';
import ComponentContext from '../../page';
import Image from 'next/image';
import image from '../../Resources/Group 1 (3).png';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline';
function HeroSection() {
  

  
  return (
    <motion.div className='lg:h-screen h-[90vh] relative  bg-black text-white'  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
   

<motion.p
      initial={{ y: '10vh' }} // Initial position - 50% of viewport height from the top
      animate={{ y: 0 }} // Final position - 0 (current position)
      transition={{ duration: 0.75 }}
      className='lg:text-6xl text-white relative z-50 lg:left-[5vw] lg:top-[40vh] lg:w-[20vw] w-[80vw] text-5xl left-5 top-[65vh] '
    >
      Hi I'm Kerim
    </motion.p>     
     <motion.div className='lg:text-4xl text-white relative z-50 lg:left-[5vw] lg:top-[45vh] lg:w-[40vw] w-[80vw]  text-4xl top-[67vh] left-[5vw]' initial={{ y: '10vh' }} // Initial position - 50% of viewport height from the top
      animate={{ y: 0 }} // Final position - 0 (current position)
      transition={{ duration: 1 }}>
     
     <Typewriter
            words={[ 'Express Backend developer', '3D Website Designer and Developer','React Front End Developer']}
            
            cursor
            cursorStyle='/'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
          <div>

          </div>
          </motion.div>
          <div className='lg:ml-[45vw] lg:h-[78vh] relative  h-[100vh]  lg:bottom-[0vh] bottom-[35vh]'>
          <Spline
        scene="https://prod.spline.design/8OzdqundiQQEYbX0/scene.splinecode" 
      />
      </div>
    </motion.div>
  );
}

export default HeroSection;