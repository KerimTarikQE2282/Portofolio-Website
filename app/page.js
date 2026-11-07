"use client";
import React from 'react';
import AboutMe from './Components/AboutMe';
import Timeline from './Components/Timeline';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import GetInTouch from './Components/GetInTouch';
import Scroller from './Components/subComponents/Scroller'
function page() {

  return (
    <div>

    <Scroller/>
      {/* Plain <a>: the blog is a separate static site served from public/blog, not a Next route. */}
      <a
        href="/blog/"
        className="fixed right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-50 flex min-h-11 items-center gap-2 rounded-full bg-black px-5 py-2 font-mono text-sm text-white shadow-lg ring-1 ring-white/40 transition-all hover:scale-105 hover:bg-terminal"
      >
        <span className="text-green-400">~/</span>blog
      </a>
      <Hero />

      <main className="px-5 sm:px-8 lg:px-16 xl:px-24">
        <AboutMe />
        <Timeline />
        <Projects />
      </main>
      <GetInTouch />
      {/* 
      
       */}
    </div>
  );
}

export default page;



