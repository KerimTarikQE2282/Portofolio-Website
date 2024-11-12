import React from 'react';
import Header from '../Header';
import ComponentContext from '../../page';
import Image from 'next/image';
import image from '../../Resources/Group 1 (3).png';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline';
import myImage from '../../Resources/myImage.png'
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

function HeroSection() {
  

  
  return (
    <motion.div className='lg:h-screen h-[140vh] relative  bg-black text-white mb-[20vh]'  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
 
 

 <div className='lg:text-6xl text-4xl text-white relative z-50 lg:left-[5vw] lg:top-[37vh] lg:w-[40vw] w-[90vw]  left-5 top-[70vh] flex flex-row gap-10'>
  <Image
     className='lg:w-[5vw] lg:h-[5vw] h-[10vh] w-[11.5vh] rounded-full'
     src={myImage}
     alt='pp'
  />
  <p className='relative top-5 lg:top-0'>Hi, I'm Kerim</p>
</div>
   
     <motion.div className='lg:text-4xl text-white relative z-50 lg:left-[5vw] lg:top-[43vh] lg:w-[40vw] w-[80vw]  text-4xl top-[77vh] left-[5vw]' initial={{ y: '10vh' }} // Initial position - 50% of viewport height from the top
      animate={{ y: 0 }} // Final position - 0 (current position)
      transition={{ duration: 1 }}>
     
   <p className='text-2xl'>Full stack developer Specializing in React.js</p>
   <p className=' text-base mt-4 lg:font-light'> 
            As a computer science graduate with a keen interest in MERN stack development, my journey into web development has been both exciting and challenging. Mastering MongoDB, Express.js, React, and Node.js has empowered me to create dynamic and responsive web applications. The versatility of JavaScript across the stack allows me to build seamless user interfaces and robust backend services, enhancing my ability to craft efficient and modern web solutions. 
          </p>
          <div>
          <div className='flex lg:flex-col flex-row relative lg:left-[85vw] lg:w-[8vw] lg:bottom-[50vh] gap-5 lg:mt-0 mt-10  '>
        <Link href={'https://www.linkedin.com/in/kerim-tarik-857a701b6/'} className='w-[5vw] h-[5vw] pl-10'><CiLinkedin />
        </Link>
        <Link href={'https://github.com/KerimTarikQE2282'} className='w-[5vw] h-[5vw] pl-10'><FaGithub />
        </Link>
        <Link href={'https://www.upwork.com/freelancers/~01c46b10c25deabb4c?mp_source=share'} className='w-[5vw] h-[5vw] pl-10'> <FaSquareUpwork />

        </Link>

      </div>
          </div>
          </motion.div>
          <div className='lg:ml-[30vw] lg:h-[100vh] relative  h-[110vh]  lg:bottom-[74.5vh] bottom-[80vh]'>
          <Spline
        scene="https://prod.spline.design/8OzdqundiQQEYbX0/scene.splinecode" 
      />
      
      </div>
     
    </motion.div>
  );
}

export default HeroSection;