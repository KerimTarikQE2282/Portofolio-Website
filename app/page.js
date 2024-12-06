"use client"
import React from 'react'
import AboutMe from './Components/AboutMe'
import Timeline from './Components/Timeline'
import Hero from './Components/Hero'

function page() {
  return (
    <div>
            <Hero/>

    <div className="px-24">
      <AboutMe/>
      <Timeline/>
    </div>
    </div>
  )
}

export default page
