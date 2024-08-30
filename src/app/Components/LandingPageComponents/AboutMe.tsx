import React from 'react';
import Spline from '@splinetool/react-spline';
import { LinearProgress, Paper } from '@mui/material';
import image from '../../Resources/Me.jpg';
import Image from 'next/image';

function AboutMe() {
  return (
    <div className='lg:h-[100vh] h-[200vh] w-[90vw] lg:mt-0 mt-[5vh] relative ' id='about'>
      <div className="lg:h-[70%] h-auto lg:w-[90vw] w-full relative lg:top-[10vh] top-[5vh] lg:left-[5vw] left-[5vw] flex lg:flex-row flex-col bg-white shadow-2xl rounded-lg">
        
        <div className='lg:w-[40vw] w-full h-auto p-4 flex flex-col items-center lg:items-start'>
          <Image
            src={image}
            alt='my image'
            className='lg:w-[10vw] w-[40vw] h-auto rounded-full lg:relative lg:left-[5vw] lg:top-[3vh]'
          />
          
          <div className='mt-4 space-y-2 lg:text-left text-center'>
            <div className='flex lg:flex-row flex-col'>
              <p className='lg:text-xl text-lg font-medium lg:relative lg:left-[17vw] lg:bottom-[15vh]'>Name:</p>
              <p className='lg:text-xl text-lg font-light lg:relative lg:left-[17.5vw] lg:bottom-[15vh]'>Kerim Tarik</p>
            </div>
            <div className='flex lg:flex-row flex-col'>
              <p className='lg:text-xl text-lg font-medium lg:relative lg:left-[17vw] lg:bottom-[15vh]'>Profile:</p>
              <p className='lg:text-xl text-lg font-light lg:relative lg:left-[17.5vw] lg:bottom-[15vh]'>Full Stack Developer</p>
            </div>
            <div className='flex lg:flex-row flex-col'>
              <p className='lg:text-xl text-lg font-medium lg:relative lg:left-[17vw] lg:bottom-[15vh]'>Email:</p>
              <p className='lg:text-xl text-lg font-light lg:relative lg:left-[17.5vw] lg:bottom-[15vh]'>Kerim.Tarik2@gmail.com</p>
            </div>
            <div className='flex lg:flex-row flex-col'>
              <p className='lg:text-xl text-lg font-medium lg:relative lg:left-[17vw] lg:bottom-[15vh]'>Phone:</p>
              <p className='lg:text-xl text-lg font-light lg:relative lg:left-[17.5vw] lg:bottom-[15vh]'>(+251) 911 245 695</p>
            </div>
          </div>
          <div className='space-y-4 relative lg:left-10 lg:bottom-14'>
            <p className='lg:text-xl text-lg font-bold'>Skills</p>
            <div>
              <p className='lg:text-lg text-base font-medium'>React Js 100%</p>
              <LinearProgress variant="determinate" value={100} className="w-full lg:w-[30vw] h-[1vh]" />
            </div>
            <div>
              <p className='lg:text-lg text-base font-medium'>Node Js 90%</p>
              <LinearProgress variant="determinate" value={90} className="w-full  lg:w-[30vw] h-[1vh]" />
            </div>
            <div>
              <p className='lg:text-lg text-base font-medium'>Express Js 100%</p>
              <LinearProgress variant="determinate" value={100} className="w-full  lg:w-[30vw] h-[1vh]" />
            </div>
            <div>
              <p className='lg:text-lg text-base font-medium'>Mongo Db 80%</p>
              <LinearProgress variant="determinate" value={80} className="w-full  lg:w-[30vw] h-[1vh]" />
            </div>
          </div>
        </div>

        <div className='lg:w-[60vw] w-full h-auto p-4 lg:py-14 lg:px-10'>
          <p className='lg:text-3xl text-2xl font-bold mb-4 lg:text-left text-center'>About Me</p>
          <p className='lg:text-lg text-base mb-4'>
            As a computer science graduate with a keen interest in MERN stack development, my journey into web development has been both exciting and challenging. Mastering MongoDB, Express.js, React, and Node.js has empowered me to create dynamic and responsive web applications. The versatility of JavaScript across the stack allows me to build seamless user interfaces and robust backend services, enhancing my ability to craft efficient and modern web solutions. Alongside coding, my passion for web design ensures that user experience remains at the forefront, blending functionality with aesthetics to deliver intuitive and visually compelling interfaces.
          </p>
          <p className='lg:text-lg text-base mb-4'>
            In addition to my expertise in MERN stack development, I have a deep fascination with 3D modeling, which allows me to bring virtual concepts to life. Through tools like Blender and Autodesk Maya, I create intricate and realistic 3D models, leveraging my understanding of shapes, textures, and lighting. This blend of technical proficiency and artistic creativity enables me to visualize and construct virtual environments, from architectural designs to character animations. Integrating my skills in web design further complements my ability to showcase 3D models in interactive and engaging ways, ensuring that every project resonates with both functionality and visual appeal.
          </p>
       
        </div>

      </div>
    </div>
  );
}

export default AboutMe;
