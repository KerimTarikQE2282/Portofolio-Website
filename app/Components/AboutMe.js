import { ArrowDown, ArrowRight, Calendar, Calendar1, CalendarDays, Code, Heart, MapPin } from 'lucide-react'
import React from 'react'

function AboutMe() {
  return (
    <div>
        <div className='flex flex-row py-[10vh]'>
      <div className='w-full h-screen '>
        <div>
        <div className='w-[8vw] h-[8vw] bg-gray-900 relative top-10 rounded-full'>

        </div>
        <p className='relative left-[10vw]  text-7xl w-[28vw] bottom-[10vh]'>Hi im Kerim Tarik</p>
        </div>
        <div className='relative bottom-10 left-5 flex flex-col gap-3'>
            <div className='flex flex-row gap-2'>
         <MapPin/> <p className='mt-1'>Addis Ababa,Ethiopia</p>
         </div>
         <div className='flex flex-row gap-2'>
         <CalendarDays/> <p className='mt-1'>4 years of experience</p>
         </div>
         <div className='flex flex-row gap-2'>
         <Code/> <p className='mt-1'>Full stack developer Specializing in react</p>
         </div>

        </div>
        <p className='relative left-5 w-[35vw]'>As a dedicated developer based in the heart of Bavaria, 
            I bring German precision and creative innovation to every project. I specialize in creating robust, 
            scalable web applications that combine cutting
            -edge technology with intuitive user experiences.</p>
            <button className=' bg-black rounded-lg flex flex-row text-white p-3 gap-2 relative left-7 top-10 hover:border-4  hover:border-blue-900  transition-all duration-100 ease-in  '> <ArrowDown /> Portofolio</button>
      </div>
      <div className='w-full h-[100vh] '>
        <div className='relative left-[4vw] top-[19vh]'>
            <p className='text-3xl'>skills</p>
            <div className='mt-10 flex flex-row gap-5 w-[40vw] flex-wrap'>
<div className='w-[5vw] h-[4vh] bg-black flex text-center justify-center items-center rounded-full'>
    <p className='text-white'>React</p>
</div>
<div className='w-[5vw] h-[4vh] bg-black flex text-center justify-center items-center rounded-full'>
    <p className='text-white'>React</p>
</div>
<div className='w-[5vw] h-[4vh] bg-black flex text-center justify-center items-center rounded-full'>
    <p className='text-white'>React</p>
</div>
<div className='w-[5vw] h-[4vh] bg-black flex text-center justify-center items-center rounded-full'>
    <p className='text-white'>React</p>
</div>
<div className='w-[5vw] h-[4vh] bg-black flex text-center justify-center items-center rounded-full'>
    <p className='text-white'>React</p>
</div>
<div className='w-[5vw] h-[4vh] bg-black flex text-center justify-center items-center rounded-full'>
    <p className='text-white'>React</p>
</div>
<div className='w-[5vw] h-[4vh] bg-black flex text-center justify-center items-center rounded-full'>
    <p className='text-white'>React</p>
</div>
<div className='w-[5vw] h-[4vh] bg-black flex text-center justify-center items-center rounded-full'>
    <p className='text-white'>React</p>
</div>
<div className='w-[5vw] h-[4vh] bg-black flex text-center justify-center items-center rounded-full'>
    <p className='text-white'>React</p>
</div>

            </div>
            
        </div>
        <div className='relative left-[4vw] top-[19vh]'>
            <p className='text-2xl mt-[5vh]'>Services</p>
           <div className='flex flex-row gap-1 mt-3 '>
           <ArrowRight />
           <p>Make amazing react websites</p>
           </div>
           <div className='flex flex-row gap-1 mt-3 '>
           <ArrowRight />
           <p>Make amazing react websites</p>
           </div>
           <div className='flex flex-row gap-1 mt-3 '>
           <ArrowRight />
           <p>Make amazing react websites</p>
           </div>
           <div className='flex flex-row gap-1 mt-3 '>
           <ArrowRight />
           <p>Make amazing react websites</p>
           </div>
           
            
        </div>


      </div>
    </div>
    <div className='flex flex-row gap-20'>
        <div className='w-[25vw] h-[25vh] bg-black text-white relative bottom-[20vh] rounded-xl hover:border-2 hover:border-blue-900  transition-all duration-100 ease-in hover:scale-1 '>
            <p className='text-5xl text-center mt-10 '>Intermediate</p>
            <p className='text-2xl text-center mt-10 '>Professional level</p>

        </div>
        <div className='w-[25vw] h-[25vh] bg-black text-white relative bottom-[20vh] rounded-xl hover:border-4 hover:scale-110 hover:bg-blue-800 duration-300  '>
            <p className='text-5xl text-center mt-10 '>Intermediate</p>
            <p className='text-2xl text-center mt-10 '>Professional level</p>

        </div>

        <div className='w-[25vw] h-[25vh] bg-black text-white relative bottom-[20vh] rounded-xl hover:border-4 hover:scale-110 hover:bg-blue-800 duration-300  '>
            <p className='text-5xl text-center mt-10 '>Intermediate</p>
            <p className='text-2xl text-center mt-10 '>Professional level</p>

        </div>

    </div>
    </div>
  )
}

export default AboutMe
