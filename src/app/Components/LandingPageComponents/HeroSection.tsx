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
import { CiLocationOn } from "react-icons/ci";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function HeroSection() {
  

  
  return (
    <motion.div className='lg:h-screen h-[140vh] relative  bg-black text-white mb-[20vh]'  initial={{opacity:0}} animate={{opacity:1}}>
 
 

 <div className='lg:text-6xl text-4xl text-white relative z-50 lg:left-[5vw] lg:top-[39vh] lg:w-[40vw] w-[90vw]  left-5 top-[70vh] flex flex-row gap-10'>
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
     
   <p className='text-2xl'>Full stack Web developer Specializing in React.js</p>
   <div className=' text-base mt-4 flex flex-col gap-3 lg:mt-[3vh]'> 
   <motion.div
  initial={{ x: '-100vw' }} // Start off-screen to the left
  animate={{ x: 0 }} // Move to its final position
  transition={{ duration: 3 }} // Transition duration (1 second)
  className="flex flex-row gap-2"
>
  <CiLocationOn />
  <p className="relative bottom-[0.3vh]">Addis Ababa, Ethiopia</p>
</motion.div>
<motion.div
  initial={{ x: '-100vw' }}
  animate={{ x: 0 }}
  transition={{ duration: 3,delay:2}}
  className="flex flx-row gap-2"
>
  <IoCodeSlashSharp />
  <p className="relative bottom-[0.3vh]">3+ years of experience</p>
</motion.div>

<motion.div
  initial={{ x: '-100vw' }}
  animate={{ x: 0 }}
  transition={{ duration: 3,delay:4}}
  className="flex flx-row gap-2"
>
  <FaBirthdayCake />
  <p className="relative bottom-[0.3vh]">23 years old</p>
</motion.div>

<motion.div
  initial={{ x: '-100vw' }}
  animate={{ x: 0 }}
  transition={{ duration: 3,delay:6 }}
  
  className="flex flx-row gap-2"
>
  <FaReact />
  <p className="relative bottom-[0.3vh]">MERN Stack Engineer</p>
</motion.div>


        <div className="flex flex-row relative lg:w-[80vw] lg:top-[5vh] lg:mt-0 mt-10">
  <Link 
    href="https://www.linkedin.com/in/kerim-tarik-857a701b6/" 
    className="w-[5vw] h-[5vw] flex items-center justify-center text-[2rem] hover:text-blue-500"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <CiLinkedin />
  </Link>
  <Link 
    href="https://github.com/KerimTarikQE2282" 
    className="w-[5vw] h-[5vw] flex items-center justify-center text-[2rem] hover:text-gray-800"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaGithub />
  </Link>
  <Link 
    href="https://www.upwork.com/freelancers/~01c46b10c25deabb4c?mp_source=share" 
    className="w-[5vw] h-[5vw] flex items-center justify-center text-[2rem] hover:text-green-600"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaSquareUpwork />
  </Link>
</div>
 
          </div>
          <div>
       
          </div>
          </motion.div>
          <div className='lg:ml-[30vw] lg:h-[100vh] relative  h-[110vh]  lg:bottom-[46.5vh] bottom-[80vh]'>
          <Spline
        scene="https://prod.spline.design/8OzdqundiQQEYbX0/scene.splinecode" 
      />
      
      </div>
     
    </motion.div>
  );
}

export default HeroSection;