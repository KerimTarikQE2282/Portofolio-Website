"use client"
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowBigDownDash } from 'lucide-react';
function Hero() {
    const WelcomeSection=React.useRef(null);
    const Skills1=React.useRef(null)
    const Skills2=React.useRef(null)
    const Skills3=React.useRef(null)
    const me=React.useRef(null)
    const scrollBall=React.useRef(null)
    useGSAP(()=>{
        // gsap.fromTo(WelcomeSection.current,
        //     {scaleX:0,transformOrigin:"center"},
        //   {scaleX:1,duration:0.5},
        //     {y:-10,duration:0.5}
            
        // )
        var tl=gsap.timeline()
            tl.from(WelcomeSection.current,{scaleX:0,transformOrigin:"center",opacity:0}),
            tl.to(WelcomeSection.current,{scaleX:1,duration:0.5}),
            tl.to(WelcomeSection.current,{y:-1000,duration:0.5,delay:3})
        gsap.to(Skills1.current,{x:-1000,y:-1000,duration:90,repeat:100})
        gsap.to(Skills2.current,{x:-1000,y:-1000,duration:90,repeat:100})
        gsap.to(Skills3.current,{x:-1000,y:-1000,duration:90,repeat:100})
        gsap.fromTo(
            me.current,
            { opacity: 0 }, // Start with opacity 0
            { opacity: 1, duration: 1, delay: 4 } // End with opacity 1 over 3 seconds after a 5-second delay
          );
       gsap.to(scrollBall.current,{y:10,repeat:-1,duration:2})
    })
  return (
    <div className='h-[100vh]'>
       <div className="relative overflow-hidden h-full ">
  <p className="text-6xl text-gray-600 whitespace-nowrap rotate-45 ml-[15vw]" ref={Skills1}>
    React • Next.js • Express.js • Node.js • Django • MongoDB • PostgreSQL • MySQL • Python • JavaScript • TypeScript • Tailwind CSS • Bootstrap • HTML • CSS • Scikit-learn • TensorFlow • Keras • NumPy • Pandas • Matplotlib • Seaborn • Redux • Prisma ORM • Mongoose • JWT • GSAP • SweetAlert2 • Chart.js • Plotly • Heroku • Docker • Git • GitHub • VS Code • Linux • REST APIs • GraphQL • Axios • Webpack • Babel • Jest • Cypress • React Hook Form • Redux Toolkit • ESLint • Prettier • Lodash • OpenAI API • ChatGPT • OpenCV • Flask • FastAPI • PyTorch • Solidity • Ethereum • Web3.js • Hardhat • Truffle • MATLAB • 3D Design (Blender) • Java • Android Development (Java) • Kotlin • C# • Unity • Firebase • AWS • Azure • GCP
  </p>
  <p className="text-6xl text-gray-600 whitespace-nowrap rotate-45 h-[30vh] mr-[55vw]" ref={Skills3}>
    React • Next.js • Express.js • Node.js • Django • MongoDB • PostgreSQL • MySQL • Python • JavaScript • TypeScript • Tailwind CSS • Bootstrap • HTML • CSS • Scikit-learn • TensorFlow • Keras • NumPy • Pandas • Matplotlib • Seaborn • Redux • Prisma ORM • Mongoose • JWT • GSAP • SweetAlert2 • Chart.js • Plotly • Heroku • Docker • Git • GitHub • VS Code • Linux • REST APIs • GraphQL • Axios • Webpack • Babel • Jest • Cypress • React Hook Form • Redux Toolkit • ESLint • Prettier • Lodash • OpenAI API • ChatGPT • OpenCV • Flask • FastAPI • PyTorch • Solidity • Ethereum • Web3.js • Hardhat • Truffle • MATLAB • 3D Design (Blender) • Java • Android Development (Java) • Kotlin • C# • Unity • Firebase • AWS • Azure • GCP
  </p>
  <p className="text-6xl text-gray-600 whitespace-nowrap rotate-45 h-[30vh] mr-[85vw]" ref={Skills2}>
    React • Next.js • Express.js • Node.js • Django • MongoDB • PostgreSQL • MySQL • Python • JavaScript • TypeScript • Tailwind CSS • Bootstrap • HTML • CSS • Scikit-learn • TensorFlow • Keras • NumPy • Pandas • Matplotlib • Seaborn • Redux • Prisma ORM • Mongoose • JWT • GSAP • SweetAlert2 • Chart.js • Plotly • Heroku • Docker • Git • GitHub • VS Code • Linux • REST APIs • GraphQL • Axios • Webpack • Babel • Jest • Cypress • React Hook Form • Redux Toolkit • ESLint • Prettier • Lodash • OpenAI API • ChatGPT • OpenCV • Flask • FastAPI • PyTorch • Solidity • Ethereum • Web3.js • Hardhat • Truffle • MATLAB • 3D Design (Blender) • Java • Android Development (Java) • Kotlin • C# • Unity • Firebase • AWS • Azure • GCP
  </p>
</div>

       <div className='h-[30vh] text-center font-bold text-8xl bg-black text-white  py-[8vh] w-full relative bottom-[70vh]' ref={WelcomeSection}><p>Welcome</p></div> 
       <div className='h-[30vh] text-center font-bold text-8xl w-[60vw] ml-[17vw] rounded-lg p-0 bg-black relative bottom-[95vh] text-white opacity-0 flex flex-col items-center justify-center' ref={me}>
  <div className='bg-white rounded-full h-[150px] w-[150px] relative top-8 right-[23vw] '>.</div>
  <p className='text-7xl font-bold text-center relative bottom-[10vh] left-[5vw]'>I'm Kerim Tarik</p>
</div>
            <div className='relative bottom-[75vh] left-[45vw]  w-[30vw]'>
                <p>Scroll Down</p>
                <ArrowBigDownDash className='w-11 h-11 ml-5 mt-3' ref={scrollBall}/>
           
                
            </div>
    </div>
  )
}

export default Hero
