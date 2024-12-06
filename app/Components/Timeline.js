import React from 'react'
import ExperienceCard from './subComponents/ExperienceCard'

function Timeline() {
  return (
    <div className='flex flex-row h-[200vh]'>
      <div className=' border-r border-black border-3 w-[50%] '>
      <div className="border border-blue-800 w-[30vw] h-[50vh] rounded-lg">
        <ExperienceCard />
      </div>
      </div>
     
    </div>
  )
}

export default Timeline
