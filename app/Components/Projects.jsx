import Image from 'next/image'
import React, { useRef } from 'react'
import Project_card_right from './subComponents/Project_card_right'
import Project_card_left from './subComponents/Project_card_left'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import Auora from '../../Resources/Auora.png'
import IS from  '../../Resources/Invenotry system pic.png'
import Sully from  '../../Resources/Qibla_app.png'
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
          x:"-400",
        },
        {
          x:0,
          duration:1,
        
          scrollTrigger:{
            trigger:element,
            start:"top 80%",
            end:"top +50",
            markers:true,
            scrub:1,}
        }

      )

    });

  })
  return (
    <div className='flex flex-col h-[300vh] gap-[20vh] overflow-hidden w-full px-10'>
       <p className='text-5xl  font-bold text-center justify-center  '>My Projects</p> 
       <div ref={card1}><Project_card_left image={Auora} title={"Auora a Video Sharing And Streaming App" } description={"An amazing video sharing and streaming app built with Expo and express utilizing mongo Db as a database"} usedTech={["Expo","React Native","Express Js","Node Js","Mongo Db"]}/></div>
       <div ref={card2}>
  <Project_card_right 
    image={IS} 
    title={"Inventory Management System"} 
    description={"An advanced inventory management system with real-time tracking, AI-driven sales predictions, and automated stock replenishment."} 
    usedTech={["Next.js", "Express.js", "MongoDB", "Scikit-learn", "Tailwind CSS"]} 
  />
</div>
<div ref={card3}>
  <Project_card_left 
    image={Sully} 
    title={"Sulliy Islamic Companion App"} 
    description={"A comprehensive Islamic companion app with features like Qibla Finder, Athkars, prayer tracker, and AI-powered Islamic knowledge tools."} 
    usedTech={["React Native", "Node.js", "AI Modules", "MongoDB", "Expo"]} 
  />
</div>

       
      
    </div>
  )
}

export default Projects
