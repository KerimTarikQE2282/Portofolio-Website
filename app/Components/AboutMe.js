import { ArrowDown, ArrowRight, Calendar, Calendar1, CalendarDays, Code, Heart, MapPin } from 'lucide-react'
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from './subComponents/Header';
import Link from 'next/link';
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPython, SiDjango, SiMongodb, SiAdobeillustrator, SiAdobephotoshop, SiFlutter, SiGit, SiFigma } from "react-icons/si";

function AboutMe() {
    const location=React.useRef(null)
    const Xp=React.useRef(null)
    const Skill=React.useRef(null)
    const abtMe=React.useRef(null)
    const skillLevels=React.useRef(null)
    const Skill1=React.useRef(null)
    const Skill2=React.useRef(null)
    const Skill3=React.useRef(null)
    const Skill4=React.useRef(null)
    const Skill5=React.useRef(null)
    const Skill6=React.useRef(null)
    const Skill7=React.useRef(null)
    const Skill8=React.useRef(null)
    const Skill9=React.useRef(null)
    const Skill10=React.useRef(null)
    const Skill11=React.useRef(null)
    const Skill12=React.useRef(null)

    const Service1=React.useRef(null)
    const Service2=React.useRef(null)
    const Service3=React.useRef(null)
    const Service4=React.useRef(null)


    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger) 
        const elements = [location.current, Xp.current, Skill.current,abtMe.current,Service1.current,Service2.current,Service3.current,Service4.current];
        const skillRefs=[Skill1.current, Skill2.current, Skill3.current, Skill4.current, Skill5.current, Skill6.current, Skill7.current, Skill8.current, Skill9.current, Skill10.current, Skill11.current, Skill12.current]  ;

        elements.forEach((el, index) => {
            if(el ==Service1.current || el ==Service2.current || el ==Service3.current || el ==Service4.current){
                gsap.fromTo(el, {
                    x:-300
                },
                    {
                    x: 0,
                    duration: 1,
                    ease: "back",
                    scrollTrigger: {
                      trigger: el, // Use each element as its own trigger
                      start: "top 80%", // Adjust start position as needed
                      //markers: true, // Debug markers
                    },
                  }); 
            }
            else{
                 



                  gsap.to(el, {
                    x: 530,
                    duration: 1,
                    ease: "back",
                    scrollTrigger: {
                      trigger: el, // Use each element as its own trigger
                      start: "top 80%", // Adjust start position as needed
                      //markers: true, // Debug markers
                    },
                  }); 
           }
        
           
          });

          gsap.from(skillLevels.current, {
            x: 1530,
            duration: 1,
            ease: "back",
            scrollTrigger: {
              trigger: skillLevels.current, // Use each element as its own trigger
              start: "top 80%", // Adjust start position as needed
              //markers: true, // Debug markers
            },
          });
          gsap.fromTo(skillRefs,
            {
              y:50
          },{
            y:0,
            stagger:0.5,
            duration:1,
            ease:"back",
            scrollTrigger:{
              trigger:Skill1.current,
              start:"top 80%",
              end:"bottom+=100% center",
              scrub:1,
              
            }
          })
    })



    const skillsJson = [
        {
          name: "React.js",
          icon: <SiReact className="text-white w-5 h-5" />,
          ref: Skill1
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white w-5 h-5" />,
          ref: Skill2
        },
        {
          name: "Node JS",
          icon: <SiNodedotjs className="text-white w-5 h-5" />,
          ref: Skill3
        },
        {
          name: "Express",
          icon: <SiExpress className="text-white w-5 h-5" />,
          ref: Skill4
        },
        {
          name: "Python",
          icon: <SiPython className="text-white w-5 h-5" />,
          ref: Skill5
        },
        {
          name: "Django",
          icon: <SiDjango className="text-white w-5 h-5" />,
          ref: Skill6
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-white w-5 h-5" />,
          ref: Skill7
        },
        {
          name: "Illustrator",
          icon: <SiAdobeillustrator className="text-white w-5 h-5" />,
          ref: Skill8
        },
        {
          name: "PhotoShop",
          icon: <SiAdobephotoshop className="text-white w-5 h-5" />,
          ref: Skill9
        },
        {
          name: "Flutter",
          icon: <SiFlutter className="text-white w-5 h-5" />,
          ref: Skill10
        },
        {
          name: "Git",
          icon: <SiGit className="text-white w-5 h-5" />,
          ref: Skill11
        },
        {
          name: "Figma",
          icon: <SiFigma className="text-white w-5 h-5" />,
          ref: Skill12
        }
      ];
      
   const skills= skillsJson.map(element=>{
        return(
            <div className='w-[10vw] h-[50px] bg-black flex text-center justify-center items-center rounded-full  flex-row gap-5' ref={element.ref}>
                {element.icon}
                <p className='text-white'>{element.name}</p>
            </div>
        )
    })

  return (
    <div className='overflow-hidden '>
       
        <div className='flex lg:flex-row flex-col py-[10vh] '>
      <div className='w-full h-screen relative lg:left-0 left-40'>
        <div className='h-[35vh]'>
        
        </div>
        <div className='relative bottom-10 right-[35vw] flex flex-col gap-3 '>
            <div className='flex flex-row gap-2' ref={location}>
         <MapPin/> <p className='mt-1'>Addis Ababa,Ethiopia</p>
         </div>
         <div className='flex flex-row gap-2' ref={Xp}>
         <CalendarDays/> <p className='mt-1'>4 years of experience</p>
         </div>
         <div className='flex flex-row gap-2' ref={Skill}>
         <Code/> <p className='mt-1'>Full stack developer Specializing in react</p>
         </div>

        </div>
        <p className='relative right-[35vw] w-[35vw]' ref={abtMe}>As a passionate developer based in the bustling tech hub of Addis Ababa, I blend Ethiopian ingenuity with modern innovation to craft impactful solutions. I specialize in designing and building scalable web applications that seamlessly merge advanced technologies with user-friendly interfaces.</p>
            <Link className=' bg-black rounded-lg flex flex-row text-white p-3 gap-2 relative w-[10vw] left-7 top-10 hover:border-4  hover:border-blue-900  transition-all duration-100 ease-in  ' href="https://drive.usercontent.google.com/download?authuser=0&export=download&id=1BHgqgwwfa2cGDUrNMEtYDIwNoA8mULeu"> <ArrowDown /> Portofolio</Link>
      </div>
      <div className='w-full h-[100vh] '>
        <div className='relative left-[4vw] top-[19vh]'>
            <p className='text-3xl'>skills</p>
            <div className='mt-10 flex flex-row gap-5 w-[40vw] flex-wrap'>
{/* skills here */}
{skills}

            </div>
            
        </div>
        <div className='relative left-[4vw] top-[19vh]'>
            <p className='text-2xl mt-[5vh]'>Services</p>
           <div className='flex flex-row gap-1 mt-3 ' ref={Service1} >
           <ArrowRight />
           <p>Make amazing react websites</p>
           </div>
           <div className='flex flex-row gap-1 mt-3 ' ref={Service2}>
           <ArrowRight />
           <p>Make amazing react websites</p>
           </div>
           <div className='flex flex-row gap-1 mt-3 '   ref={Service3}>
           <ArrowRight />
           <p>Make amazing react websites</p>
           </div>
           <div className='flex flex-row gap-1 mt-3 ' ref={Service4}>
           <ArrowRight />
           <p>Make amazing react websites</p>
           </div>
           
            
        </div>


      </div>
    </div>
    <div className='flex flex-row gap-20  relative z-10 mt-[14vh]' ref={skillLevels} >
    <div className='w-[25vw] h-[25vh] bg-black text-white relative bottom-[20vh] rounded-xl hover:border-4 hover:scale-110 hover:bg-blue-800 duration-300  '>
            <p className='text-5xl text-center mt-10 '>Intermidiate</p>
            <p className='text-2xl text-center mt-10 '>Professional Level</p>

        </div>
        <div className='w-[25vw] h-[25vh] bg-black text-white relative bottom-[20vh] rounded-xl hover:border-4 hover:scale-110 hover:bg-blue-800 duration-300  '>
            <p className='text-5xl text-center mt-10 '>20+</p>
            <p className='text-2xl text-center mt-10 '>Clients</p>

        </div>

        <div className='w-[25vw] h-[25vh] bg-black text-white relative bottom-[20vh] rounded-xl hover:border-4 hover:scale-110 hover:bg-blue-800 duration-300  '>
            <p className='text-5xl text-center mt-10 '>30+</p>
            <p className='text-2xl text-center mt-10 '>Projects worked On</p>

        </div>

    </div>
    </div>
  )
}

export default AboutMe