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
    <motion.div className='h-screen relative overflow-auto bg-black text-white'  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
   

<motion.p
      initial={{ y: '10vh' }} // Initial position - 50% of viewport height from the top
      animate={{ y: 0 }} // Final position - 0 (current position)
      transition={{ duration: 0.75 }}
      className='lg:text-6xl text-white relative z-50 lg:left-[5vw] lg:top-[30vh] lg:w-[20vw] w-[80vw] text-5xl top-[40vh] '
    >
      Hi I'm Kerim
    </motion.p>     
     <motion.div className='lg:text-4xl text-white relative z-50 lg:left-[5vw] lg:top-[35vh] lg:w-[40vw] w-[80vw]  text-4xl top-[42.5vh] left-[20vw]' initial={{ y: '10vh' }} // Initial position - 50% of viewport height from the top
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
            <p className='  relative lg:bottom-10  lg:w-[40vw] top-[10vh] lg:left-0  w-[70vw] left-10 text-2xl h-[10vh]'>I’m a dedicated developer with a strong passion for crafting dynamic web experiences. My expertise lies in React, Express, and Node.js, where I build robust, high-performance applications. Additionally, I specialize in creating visually stunning 3D websites, seamlessly blending cutting-edge technology with innovative design to deliver captivating user experiences.</p>

          </div>
          </motion.div>
          <div className='ml-[45vw] h-[78vh] relative    bottom-[15vh]'>
          <Spline
        scene="https://prod.spline.design/8OzdqundiQQEYbX0/scene.splinecode" 
      />
      </div>
    </motion.div>
  );
}

export default HeroSection;