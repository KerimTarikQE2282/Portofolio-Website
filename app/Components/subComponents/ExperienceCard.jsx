import { ArrowRight } from 'lucide-react';


const ExperienceCard = ({place}) => {
    return (
      <div className={`text-white bg-black p-10 w-[30vw] h-[50vh] relative rounded-md flex flex-col gap-2 ${place==='right' && 'left-[25vw]'}`}>
        <p className='text-4xl text-blue-600'>2023</p>
        <p> full stack developer</p>
        <p> Adika taxi</p> 
        <p className='font-extralight'>Lorrewmineaodnwaodnwjoandklwan dwanidkwanmkldmwnako j dwkandkwnalmd manck waklcnlkwqn kmnc wqk jaj nwqjwcjkwqn jkdx qw</p>
        <p className='flex flex-row mt-3'><ArrowRight /> Responsible for....</p>
       <div className='flex flex-row gap-5 w-[40vw] flex-wrap mt-5'>
        <div className='w-[5vw] h-[4vh] bg-white flex text-center justify-center items-center rounded-full'>
    <p className='text-black'>React</p>
</div>
<div className='w-[5vw] h-[4vh] bg-white flex text-center justify-center items-center rounded-full'>
    <p className='text-black'>React</p>
</div>
</div>
      </div>
    );
  };
  
  export default ExperienceCard;
  