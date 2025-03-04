// import React from 'react'
// import ExperienceCard from './subComponents/ExperienceCard'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowRight } from 'lucide-react';
// function Timeline() {
//   const Time=React.useRef(null)
//   const timeLineContainer=React.useRef(null)
//   const leftToRight1=React.useRef(null)
//   const leftToRight2=React.useRef(null)
//   const leftToRight3=React.useRef(null)
//   const leftToRight4=React.useRef(null)
//   const card1=React.useRef(null)
//   const card2=React.useRef(null)
//   const card3=React.useRef(null)
//   const card4=React.useRef(null)

//   useGSAP(()=>{
//     gsap.registerPlugin(ScrollTrigger) 
//     let mm=gsap.matchMedia()
//     gsap.to(Time.current, {
//       height: "250vh", 
//       scrollTrigger: {
//         trigger: Time.current,
//        // markers: true, // For debugging, remove in production
//         start: "top+1000 bottom", // When the animation starts
//         end: "bottom+=2000vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport

//         onUpdate:(self)=>{
//           console.log(self.progress)
//         },
//         scrub:1
//       },
//     });
//     gsap.to(leftToRight1.current, {
//       width: "10dvw",
//       scrollTrigger: {
//         trigger: leftToRight1.current,
//         //markers: true, // For debugging, remove in production
//         start: "top bottom", // When the animation starts
//         end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
//         scrub:1
//       },
//     })
//     gsap.to(leftToRight2.current, {
//       width: "10dvw",
//       scrollTrigger: {
//         trigger: leftToRight2.current,
//        // markers: true, // For debugging, remove in production
//         start: "top bottom", // When the animation starts
//         end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
//         scrub:1
//       },
//     })
//     gsap.to(leftToRight3.current, {
//       width: "10dvw",
//       scrollTrigger: {
//         trigger: leftToRight3.current,
//        // markers: true, // For debugging, remove in production
//         start: "top bottom", // When the animation starts
//         end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
//         scrub:1
//       },
//     })
//     gsap.to(leftToRight4.current, {
//       width: "10dvw",
//       scrollTrigger: {
//         trigger: leftToRight4.current,
//        // markers: true, // For debugging, remove in production
//         start: "top bottom", // When the animation starts
//         end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
//         scrub:1
//       },
//     })
//     gsap.to(card1.current,  {
//       left: "0dvw",
//       scrollTrigger: {
//         trigger: card1.current,
//         start: "top bottom", // When the animation starts
//         end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
//         scrub:1
//       },
//     })
//     gsap.to(card2.current,  {
//       left: "25dvw",
//       scrollTrigger: {
//         trigger: card2.current,
//         start: "top bottom", // When the animation starts
//         end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
//         scrub:1
//       },
//     })
//     mm.add("(max-width:300px)", () => {
//       gsap.to(card2.current,  {
//         left: "0dvw",
//         scrollTrigger: {
//           trigger: card3.current,
//           start: "top bottom", // When the animation starts
//           end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
//           scrub:1
//         },
//       })
//     })
//     gsap.to(card3.current,  {
//       left: "0dvw",
//       scrollTrigger: {
//         trigger: card3.current,
//         start: "top bottom", // When the animation starts
//         end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
//         scrub:1
//       },
//     })
//     gsap.to(card4.current,  {
//       left: "25dvw",
//       scrollTrigger: {
//         trigger: card4.current,
//         start: "top bottom", // When the animation starts
//         end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
//         scrub:1
//       },
//     })
//     mm.add("(max-width:300px)", () => {
//       gsap.to(card4.current,  {
//         left: "0dvw",
//         scrollTrigger: {
//           trigger: card3.current,
//           start: "top bottom", // When the animation starts
//           end: "top 900vh", // End when the bottom of the trigger reaches 100vh from the bottom of the viewport
//           scrub:1
//         },
//       })
//     })
//   })

//   return (
//     <div className='lg:mt-[10vh]'>
//     <p className='font-bold text-6xl text-center mb-[15vh]'>Work Experience</p>
//     <div className='flex flex-row overflow-hidden'>
//       <div ref={timeLineContainer}>
//         <hr
//           className='w-1 h-1 bg-black relative left-[40dvw] mb-[10vh] bottom-10'
//           ref={Time}
//         />
//       </div>
//       <div className='flex flex-col gap-20'>
//         {/* Work Experience 1 */}
//         <div ref={card1} className='relative left-[30dvw]'>
//           <div>
//             <ExperienceCard
//               place={'left'}
//               title="Instructor at Hilcoe School of Computer Science"
//               description="Taught undergraduate courses on web development, machine learning, and database management, leveraging industry-relevant tools like React.js, MongoDB, and Scikit-learn."
//               duration="2024 - Present"
//             />
//           </div>
//           <div
//             className='h-1 w-0 relative left-[30dvw] bottom-[20vh] bg-black lg:display-block display-none'
//             ref={leftToRight1}
//           />
//         </div>
//         {/* Work Experience 2 */}
//         <div>
//           <div className='relative' ref={card2}>
//             <ExperienceCard
//               place={'right'}
//               title="Developer at MindStack Inventory Management System"
//               description="Developed a smart inventory system using the MERN stack and integrated AI for sales prediction and stock optimization."
//               duration="2023 - 2024"
//             />
//           </div>
//           <div
//             className='h-1 w-0 relative bottom-[20vh] left-[40dvw] bg-black lg:display-block display-none'
//             ref={leftToRight2}
//           />
//         </div>
//         {/* Work Experience 3 */}
//         <div ref={card3} className='relative left-[30dvw]'>
//           <div>
//             <ExperienceCard
//               place={'left'}
//               title="Machine Learning Developer"
//               description="Designed regression models to predict sales trends using Scikit-learn, optimizing inventory management processes."
//               duration="2023 - 2024"
//             />
//           </div>
//           <div
//             className='h-1 w-0 relative left-[30dvw] bottom-[20vh] bg-black lg:display-block display-none'
//             ref={leftToRight3}
//           />
//         </div>
//         {/* Work Experience 4 */}
//         <div>
//           <div className='relative' ref={card4}>
//             <ExperienceCard
//               place={'right'}
//               title="Assistantship at Hilcoe School of Computer Science"
//               description="Assisted in research projects, mentoring students, and developing course materials for advanced programming topics."
//               duration="2022 - 2023"
//             />
//           </div>
//           <div
//             className='h-1 w-0 relative bottom-[20vh] left-[40dvw] bg-black lg:display-block display-none'
//             ref={leftToRight4}
//           />
//         </div>
//       </div>
//     </div>
//   </div>
//   ) 
// }

// export default Timeline


// import React from 'react'

// function Eduacation() {
//   return (
   
// <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
//     <li class="mb-10 ms-6">            
//         <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
//             <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
//             </svg>
//         </span>
//         <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
//         <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
//         <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
//         <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//     <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
//     <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
//   </svg> Download ZIP</a>
//     </li>
//     <li class="mb-10 ms-6">
//         <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
//             <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
//             </svg>
//         </span>
//         <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
//         <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
//         <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
//     </li>
//     <li class="ms-6">
//         <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
//             <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
//             </svg>
//         </span>
//         <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
//         <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
//         <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
//     </li>
// </ol>


//   )
// }

// function Timeline() {
//   return (
//     <div className='h-[100vh]'>
   
//     </div>
//   )
// }

// export default Timeline


import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const experiences = [
  {
    date: "Jan 2023 - Present",
    company: "Digital Perspective",
    role: "Frontend Web Developer",
    details: "Web Design; Web Development; Wordpress + Elementor.",
  },
  {
    date: "Jan 2020 - Mar 2020",
    company: "Bitcliq",
    role: "Software Developer - Internship",
    details:
      "Mobile Development (Parque D.Carlos I App - Course Final Project [Grade:20/20]); Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
  },
];

const studies = [
  {
    date: "2020 - Present",
    school: "Hilcoe School of Computer Science and University",
    degree: "BSc in Computer Science",
    details: "Studying AI, ML, Networking, and Full-Stack Development.",
  },
  {
    date: "Upcoming",
    school: "Top-tier University (Pending)",
    degree: "Master's in Computer Science",
    details: "Aiming for research in AI, optimization, and security.",
  },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("Work");
  const data = activeTab === "Work" ? experiences : studies;

  return (
    <div className="max-w-2xl mx-auto text-black p-6">
      <h2 className="text-2xl font-bold mb-4">Experience & Education</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 bg-gray-200 p-2 rounded-lg">
        {["Work", "Studies"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2 rounded-lg transition-all",
              activeTab === tab ? "bg-black text-white" : "text-gray-600"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-300 pl-6">
        {data.map((item, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-100px" });

          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-6"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-2"></div>
              {/* Experience / Education Card */}
              <Card className="bg-white shadow-lg border border-gray-200">
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <h3 className="text-lg font-bold mt-1">
                    {activeTab === "Work" ? item.company : item.school}
                  </h3>
                  <p className="text-sm text-gray-600 italic">
                    {activeTab === "Work" ? item.role : item.degree}
                  </p>
                  <p className="text-sm mt-2 text-gray-700">{item.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
