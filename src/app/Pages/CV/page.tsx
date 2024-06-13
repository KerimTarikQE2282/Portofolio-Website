import { Card, Paper } from '@mui/material'
import React from 'react'

function Page() {
  return (
    <div style={{ backgroundColor: '#374550',height:'100vh' }} >
      <Paper elevation={10} className='w-1/2 h-[95vh] relative left-[23vw] top-[5vh] flex flex-row' style={{ margin: 0 }}>
        <div className='w-1/3 bg-gray-800'>
          <div></div>
          <div className='text-white relative left-[8vh] top-[20vh] text-2xl font-semibold'>Kerim Tarik</div>
          <div className='text-white relative left-[4vh] top-[23vh] text-xl font-light'>Full Stack  Web Developer </div>
          <hr className='relative left-[4vh] top-[25vh] w-[25vh]'/>
          <div className='text-white relative left-[4vh] top-[30vh] text-lg font-semibold'>Contact Info</div>
          <ul className=' text-white relative left-[4vh] top-[32vh] font-light '>
                <li>React.Js</li>
                <li>Express.Js</li>
                <li>Mongo Db.Js</li>
                <li>Spline</li>
            </ul>
            <div className='text-white relative left-[4vh] top-[35vh] text-lg font-semibold'>Education</div>
          <div className=' text-white relative left-[4vh] top-[37vh] font-light w-[25vh] '>
              Bachelors of Computer Science Hilcoe Schoolof computer science
            </div>
        </div>
        <div>
          {
          //TODO when launching bring this a bit to the bottom
        }
            <div className='relative top-10vh'>
            <p className='font-medium text-2xl relative left-10 top-10'>Profile</p>
            <p className='relative left-10 top-16 w-[30vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum delectus provident repudiandae quam nobis blanditiis deleniti beatae unde dolores, magnam quibusdam quas placeat voluptatem sunt eligendi culpa eveniet non deserunt.</p>
            <p className='relative left-10 top-16 w-[30vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum delectus provident repudiandae </p>
            </div>
            <div className='mt-[6vh]'>
            <p className='font-medium text-2xl relative left-10 top-10'>Experiences</p>
            <p className='relative left-10 top-16 w-[30vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum delectus provident repudiandae quam nobis blanditiis deleniti beatae unde dolores, magnam quibusdam quas placeat voluptatem sunt eligendi culpa eveniet non deserunt.</p>
            </div>
            <div className='mt-[6vh]'>
            <p className='font-medium text-2xl relative left-10 top-10'>Professional Skills</p>
            <ul className='  relative left-10 top-16'>
                <li>React.Js</li>
                <li>Express.Js</li>
                <li>Mongo Db.Js</li>
                <li>Spline</li>
            </ul>
            </div>
        </div>
      </Paper>
    </div>
  )
}

export default Page