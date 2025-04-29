import Image from 'next/image'
import React, { useState, useRef } from 'react'
import Project_card_right from './subComponents/Project_card_right'
import Project_card_left from './subComponents/Project_card_left'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from 'gsap'
import Auora from '../../Resources/Auora.png'
import IS from '../../Resources/Invenotry system pic.png'
import Sully from '../../Resources/Qibla_app.png'

const appProjects = [
  {
    image: Auora,
    title: "Auora Video Sharing and Streaming App",
    description: "An amazing video sharing and streaming app built with Expo and Express, utilizing MongoDB as a database.",
    usedTech: ["Expo", "React Native", "Express.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/KerimTarikQE2282/Auora-Video-Streaming-and-sharing-platform.git",
    projectLink: "#",
    align: "left",
  },
  {
    image: Sully,
    title: "Sulliy Islamic Companion App",
    description: "A comprehensive Islamic companion app with features like Qibla Finder, Athkars, prayer tracker, and AI-powered Islamic knowledge tools.",
    usedTech: ["React Native", "Node.js", "AI Modules", "MongoDB", "Expo"],
    githubLink: "https://github.com/KerimTarikQE2282/Sulliy-Your-Islamic-Companion-app.git",
    projectLink: "#",
    align: "left",
  },
];

const aiProjects = [
  {
    image: IS,
    title: "Inventory Management System",
    description: "An advanced inventory management system with real-time tracking, AI-driven sales predictions, and automated stock replenishment.",
    usedTech: ["Next.js", "Express.js", "MongoDB", "Scikit-learn", "Tailwind CSS"],
    githubLink: "https://github.com/KerimTarikQE2282/SeniorProject-Inventory-managemnet-system.git",
    projectLink: "/UnderConstruction",
    align: "right",
  },
];

const cybersecurityProjects = [
  {
    image: '', // You can add Cybersecurity project image later
    title: "Cyber Defense Project (Coming Soon)",
    description: "A cybersecurity system focusing on real-time attack detection and mitigation.",
    usedTech: ["Next.js", "Node.js", "Machine Learning", "Security Frameworks"],
    githubLink: "#",
    projectLink: "#",
    align: "left",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('App Development');
  const refs = useRef([]);

  const projectData =
    activeTab === "App Development" ? appProjects :
    activeTab === "AI Projects" ? aiProjects :
    cybersecurityProjects;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    refs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { x: "-400" },
        {
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, [activeTab]);

  return (
    <div className="flex flex-col mt-0 lg:mt-[15vh] min-h-[100vh] gap-[20vh] overflow-hidden w-full px-10">
      <h2 className="text-3xl font-bold relative  lg:left-[35vw]">Projects</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-10 bg-gray-200 p-2 rounded-lg self-center">
        {["App Development", "AI Projects", "Cybersecurity Projects"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === tab ? "bg-black text-white" : "text-gray-600"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects */}
      {projectData.map((project, index) => (
        <div key={index} ref={(el) => refs.current[index] = el}>
          {project.align === "left" ? (
            <Project_card_left
              image={project.image}
              title={project.title}
              description={project.description}
              usedTech={project.usedTech}
              githubLink={project.githubLink}
              ProjectLink={project.projectLink}
            />
          ) : (
            <Project_card_right
              image={project.image}
              title={project.title}
              description={project.description}
              usedTech={project.usedTech}
              githubLink={project.githubLink}
              ProjectLink={project.projectLink}
            />
          )}
        </div>
      ))}
    </div>
  );
}
