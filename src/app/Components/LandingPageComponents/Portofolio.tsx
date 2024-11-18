import React from 'react'
import SingleCard from '../subcomponents/SingleCard'
export default function Portofolio() {
  return (
    <div className='relative lg:top-0 top-[80vh]'>                 <p className='lg:text-6xl lg:w-[30vw] text-5xl lg:ml-[45vw] relative  ml-[25vw] top-[5vh]  lg:mb-[10vh] mb-10 right-20 font-semibold lg:mt-[5vh] w-[90vw]'>My Projects</p>
  <div className='flex lg:flex-row flex-col  px-10 lg:gap-5 w-[90vw]  gap-0'>

<SingleCard />
<SingleCard/>
<SingleCard/>


</div>

</div>
  
  )
}
