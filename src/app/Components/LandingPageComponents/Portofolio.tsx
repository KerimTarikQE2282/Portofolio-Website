import React from 'react'
import SingleCard from '../subcomponents/SingleCard'
export default function Portofolio() {
  return (
    <div>                 <p className='lg:text-6xl lg:w-[30vw] text-5xl lg:ml-[45vw] relative  ml-[20vw] top-[5vh]  lg:mb-[10vh] mb-10 right-20 font-semibold lg:mt-[5vh] w-[90vw]'>My Projects</p>
  <div className='flex flex-row px-10 gap-5 w-[90vw] overflow-auto>'>

<SingleCard />
<SingleCard/>
<SingleCard/>


</div>

</div>
  
  )
}
