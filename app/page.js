"use client"
import React from 'react'
import AboutMe from './Components/AboutMe'
import Timeline from './Components/Timeline'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import GetInTouch from './Components/GetInTouch'

function page() {
  return (
    <div>
            <Hero/>

    <div className="lg:px-24 px-10">
      <AboutMe/>
      <Timeline/>
      <Projects/>
    </div>
    <GetInTouch/>

    </div>
  )
}

export default page
