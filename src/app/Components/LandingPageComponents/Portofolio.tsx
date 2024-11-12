import Image from 'next/image';
import React from 'react';
import { Button } from '@mui/material';
import portofolio1 from '../../Resources/portfolio-details-1.jpg';
import portofolio2 from '../../Resources/portfolio-details-2.jpg';
import portofolio3 from '../../Resources/portfolio-details-3.jpg';

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    image: portofolio1,
    title: 'Project Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    buttons: ['App', 'Figma Design']
  },
  {
    id: 2,
    image: portofolio2,
    title: 'Project Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    buttons: ['App', 'Figma Design']
  },
  {
    id: 3,
    image: portofolio3,
    title: 'Project Title 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    buttons: ['App', 'Figma Design']
  }
];

function Portofolio() {
  return (
    <div className='h-[100vh] relative top-[30vh] lg:top-0 overflow-hidden' id='Portofolio'>
      <p className='text-5xl font-bold w-[25vw] relative left-[20vw] lg:left-[42.5vw] top-[8vh]'>My Projects</p>
      <div className='relative top-[20vh] w-[99vw] flex flex-row flex-wrap'>
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="group shadow-md rounded-lg lg:w-[30vw] w-[90vw] h-[55vh] ml-[3.5vw] lg:ml-[2.5vw] overflow-hidden hover:h-[65vh] hover:lg:w-[30vw] transition-all duration-500 lg:mt-0 mt-[5vh]"
          >
            <Image src={item.image} alt='portfolio image' className='h-[40vh] object-cover transition-all duration-500' />
            <p className='text-3xl font-bold text-gray-700 relative left-10 top-6'>{item.title}</p>
            <div>
              {item.buttons.map((buttonText, index) => (
                <Button
                  key={index}
                  variant='contained'
                  style={{ fontFamily: 'sans-serif', marginLeft: index === 0 ? '1vw' : '2vw', position: 'relative', top: '5vh' }}
                >
                  {buttonText}
                </Button>
              ))}
            </div>
            <p className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 delay-100 relative top-[8vh]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portofolio;
