import { ArrowRight } from 'lucide-react';
import { useMemo } from 'react';

const ExperienceCard = ({ place, title, description, duration }) => {
  // Generate a random color using useMemo to ensure it stays consistent for each render
  const randomColor = useMemo(() => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }, []);

  return (
    <div
      className={`text-white bg-black p-10 lg:w-[30dvw] w-[90dvw] relative rounded-md flex flex-col gap-4 ${
        place === 'right' && 'lg:left-[25dvw] left-[-25dvw]'
      }`}
      style={{ minHeight: 'fit-content' }} // Ensures height grows to fit content
    >
      {/* Apply random color to the year */}
      <p className='text-4xl' style={{ color: randomColor }}>
        {duration}
      </p>
      <p className='text-2xl font-bold'>{title}</p>
      <p className='font-light'>{description}</p>
      <p className='flex flex-row items-center mt-3'>
        <ArrowRight /> Key responsibilities...
      </p>
      <div className='flex flex-row gap-5 w-full flex-wrap mt-5'>
        {/* Skill badges */}
        <div className='lg:w-[5dvw] w-[18dvw] h-[4vh] bg-white flex text-center justify-center items-center rounded-full'>
          <p className='text-black'>React</p>
        </div>
        <div className='lg:w-[5dvw] w-[18dvw] h-[4vh] bg-white flex text-center justify-center items-center rounded-full'>
          <p className='text-black'>MongoDB</p>
        </div>
        <div className='lg:w-[5dvw] w-[18dvw] h-[4vh] bg-white flex text-center justify-center items-center rounded-full'>
          <p className='text-black'>Node.js</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
