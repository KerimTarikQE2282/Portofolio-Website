import React from 'react'
import ExperienceCard from './subComponents/ExperienceCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from 'lucide-react';
function Timeline() {
  const Time=React.useRef(null)
  const timeLineContainer=React.useRef(null)
  const leftToRight1=React.useRef(null)
  const leftToRight2=React.useRef(null)
  const leftToRight3=React.useRef(null)
  const leftToRight4=React.useRef(null)
  const card1=React.useRef(null)
  const card2=React.useRef(null)
  const card3=React.useRef(null)
  const card4=React.useRef(null)

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger) 

    gsap.to(Time.current, {
      height: "250vh", 
      scrollTrigger: {
        trigger: Time.current,
        //markers: true, // For debugging, remove in production
        start: "top bottom", // When the animation starts
        end: "bottom+=1200vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport

        onUpdate:(self)=>{
          console.log(self.progress)
        },
        scrub:1
      },
    });
    gsap.to(leftToRight1.current, {
      width: "10vw",
      scrollTrigger: {
        trigger: leftToRight1.current,
        //markers: true, // For debugging, remove in production
        start: "top bottom", // When the animation starts
        end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
        scrub:1
      },
    })
    gsap.to(leftToRight2.current, {
      width: "10vw",
      scrollTrigger: {
        trigger: leftToRight2.current,
       // markers: true, // For debugging, remove in production
        start: "top bottom", // When the animation starts
        end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
        scrub:1
      },
    })
    gsap.to(leftToRight3.current, {
      width: "10vw",
      scrollTrigger: {
        trigger: leftToRight3.current,
       // markers: true, // For debugging, remove in production
        start: "top bottom", // When the animation starts
        end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
        scrub:1
      },
    })
    gsap.to(leftToRight4.current, {
      width: "10vw",
      scrollTrigger: {
        trigger: leftToRight4.current,
       // markers: true, // For debugging, remove in production
        start: "top bottom", // When the animation starts
        end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
        scrub:1
      },
    })
    gsap.to(card1.current,  {
      left: "0vw",
      scrollTrigger: {
        trigger: card1.current,
        start: "top bottom", // When the animation starts
        end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
        scrub:1
      },
    })
    gsap.to(card2.current,  {
      left: "25vw",
      scrollTrigger: {
        trigger: card2.current,
        start: "top bottom", // When the animation starts
        end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
        scrub:1
      },
    })
    gsap.to(card3.current,  {
      left: "0vw",
      scrollTrigger: {
        trigger: card3.current,
        start: "top bottom", // When the animation starts
        end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
        scrub:1
      },
    })
    gsap.to(card4.current,  {
      left: "25vw",
      scrollTrigger: {
        trigger: card4.current,
        start: "top bottom", // When the animation starts
        end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
        scrub:1
      },
    })
  
  })

  return (
   <div>
    <p className='font-bold text-6xl text-center mb-[15vh]'>Work Experience</p>
     <div className='flex flex-row  overflow-hidden'>
      <div ref={timeLineContainer}  >
      <hr  className='w-1 h-1 bg-black relative left-[40vw] mb-[10vh] bottom-10 'ref={Time}/>
      </div>
      <div className='flex flex-col gap-20'>
      <div ref={card1} className=' relative left-[30vw]'>
        <div ref={card1}>
        <ExperienceCard place={"left"} />
        </div>
     
     <div className='h-1 w-0 relative left-[30vw] bottom-[20vh]  bg-black' ref={leftToRight1}/>
     </div>
     <div > 
     <div  className=' relative ' ref={card2}>
      <ExperienceCard place={"right"}/>
     </div>
     <div className='h-1 w-0 relative bottom-[20vh] left-[40vw]  bg-black'ref={leftToRight2} />
     </div>
     {/* /////////////////////////////////// */}
     <div ref={card3} className=' relative left-[30vw]'>
        <div ref={card3}>
        <ExperienceCard place={"left"} />
        </div>
     
     <div className='h-1 w-0 relative left-[30vw] bottom-[20vh]  bg-black' ref={leftToRight3}/>
     </div>
    {/* /////////////////////////////// */}
    <div > 
     <div  className=' relative ' ref={card4}>
      <ExperienceCard place={"right"}/>
     </div>
     <div className='h-1 w-0 relative bottom-[20vh] left-[40vw]  bg-black'ref={leftToRight4} />
     </div>
     </div>
    </div>
   </div>
  ) 
}

export default Timeline





