import React from 'react';
import Header from '../Header';
import ComponentContext from '../../page';
import Image from 'next/image';
import image from '../../Resources/Group 1 (3).png';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"
function HeroSection() {
  

  
  return (
    <motion.div className='h-screen relative overflow-auto'  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
      <Image
        src={image}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        
      />

<motion.p
      initial={{ y: '10vh' }} // Initial position - 50% of viewport height from the top
      animate={{ y: 0 }} // Final position - 0 (current position)
      transition={{ duration: 0.75 }}
      className='lg:text-6xl text-white relative z-50 lg:left-[40vw] lg:top-[40vh] lg:w-[20vw] w-[80vw] text-5xl top-[40vh] left-[20vw]'
    >
      Hi I'm Kerim
    </motion.p>     
     <motion.div className='lg:text-4xl text-white relative z-50 lg:left-[40vw] lg:top-[45vh] lg:w-[20vw] w-[80vw]  text-4xl top-[42.5vh] left-[20vw]' initial={{ y: '10vh' }} // Initial position - 50% of viewport height from the top
      animate={{ y: 0 }} // Final position - 0 (current position)
      transition={{ duration: 0.75 }}>
     
     <Typewriter
            words={['Web Designer', 'Web Developer', '3D Artist']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
          </motion.div>
    </motion.div>
  );
}

export default HeroSection;