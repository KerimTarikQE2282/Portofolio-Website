import Image from 'next/image'
import React, { useRef } from 'react'
import Project_card_right from './subComponents/Project_card_right'
import Project_card_left from './subComponents/Project_card_left'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'

function Projects() {
  const card1=useRef(null)
  const card2=useRef(null)
  const card3=useRef(null)
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger) 
    const cards=[card1.current,card2.current,card3.current]
    cards.forEach(element => {
      gsap.fromTo(element,
        {
          x:"random(-600,600)",
        },
        {
          x:0,
          duration:1,
          ease:"back",
          scrollTrigger:{
            trigger:element,
            start:"top 80%",
            end:"bottom+=100% center",
            scrub:1,}
        }

      )

    });

  })
  return (
    <div className='flex flex-col h-[300vh] gap-[20vh] overflow-hidden'>
       <p className='text-5xl  font-bold text-center justify-center  '>My Projects</p> 
       <div ref={card1}><Project_card_left/></div>
       <div ref={card2}>      <Project_card_right/>
       </div>
       <div ref={card3}>      <Project_card_left/>
       </div>
       
      
    </div>
  )
}

export default Projects
