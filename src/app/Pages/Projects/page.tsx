import Header from '../../Components/ProjectsComponents/Header'
import Image from 'next/image'
import Logo from '../../Resources/LogoBlack.png';
import image from '../../Resources/image2-8.png'
import Project4  from '../../Resources/project4.png'
import React from 'react'
import Card from '../../Components/ProjectsComponents/Card'
import backGround from '../../Resources/HeroBackGround.png';
function page() {
  return (
    <div className=''>
        
         <div className='relative z-10 '>
         <Image
          src={Logo}
          alt="Logo"
          width={40}
          height={40}
          layout="fixed"
          objectFit="cover"
          className='relative lg:top-16  lg:left-20 right-[10vw] top-[5vh] '
        />
        <Header/>
      <div className='flex flex-row flex-wrap relative top-[5vh] ml-[4.5vw] ' >
        <div className='relative left-[2.5vw] mr-10 ml-10  mt-10'  ><Card title={'Fix Masters'} subText={'Fix masters sub text'} image={image} /></div>
        <div className=' relative left-[2.5vw] mr-10 ml-10   mt-10'  ><Card title={'Kim Pax Beverages'} subText={'Kim Pax Beverages sub text '} image={image} /></div>
        <div className=' relative left-[2.5vw] mr-10 ml-10   mt-10'  ><Card title={'some Project 3'} subText={'lorem dwandwoaaaaaaaaaaaaaaaaaadiwonadiowna dniownadion'} image={image} /></div>
        <div className=' relative left-[2.5vw] mr-10 ml-10    mt-10'  ><Card title={'Some Project  4'} subText={'lorem dwandwoaaaaaaaaaaaaaaaaaadiwonadiowna dniownadion'} image={image} /></div>
       
      </div>
      </div>
    </div>
  )
}

export default page
