import { ArrowDown, ArrowRight, CalendarDays, MapPin, ShieldCheck, Radar, Network, Terminal } from 'lucide-react'
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiKalilinux, SiBurpsuite, SiMetasploit, SiWireshark, SiPython, SiGnubash, SiLinux, SiHackthebox, SiOwasp } from "react-icons/si";

const icon = "h-5 w-5 flex-none text-white";

const skills = [
  { name: "Kali Linux", icon: <SiKalilinux className={icon} /> },
  { name: "Burp Suite", icon: <SiBurpsuite className={icon} /> },
  { name: "Metasploit", icon: <SiMetasploit className={icon} /> },
  { name: "Nmap", icon: <Radar className={icon} /> },
  { name: "Active Directory", icon: <Network className={icon} /> },
  { name: "Wireshark", icon: <SiWireshark className={icon} /> },
  { name: "Python", icon: <SiPython className={icon} /> },
  { name: "Bash", icon: <SiGnubash className={icon} /> },
  { name: "PowerShell", icon: <Terminal className={icon} /> },
  { name: "Linux", icon: <SiLinux className={icon} /> },
  { name: "Hack The Box", icon: <SiHackthebox className={icon} /> },
  { name: "OWASP", icon: <SiOwasp className={icon} /> },
];

const facts = [
  { icon: <MapPin className="flex-none" />, text: "Addis Ababa, Ethiopia" },
  { icon: <CalendarDays className="flex-none" />, text: "4 years in tech, now focused on offensive security" },
  { icon: <ShieldCheck className="flex-none" />, text: "Penetration Tester · OSCP · HTB CPTS" },
];

const services = [
  "External & internal network penetration testing",
  "Web application testing against the OWASP Top 10",
  "Active Directory attack-path assessments",
  "Clear pentest reports with prioritised remediation",
];

const stats = [
  { big: "OSCP", small: "OffSec Certified Professional" },
  { big: "CPTS", small: "HTB Certified Penetration Testing Specialist" },
  { big: "Web · Net · AD", small: "Assessment Coverage" },
];

function AboutMe() {
  const root = React.useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Facts, bio and services slide in from the left with a "back" ease
      gsap.utils.toArray("[data-slide]", root.current).forEach((el) => {
        gsap.from(el, {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: "back",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Skill pills rise in one after another
      gsap.from(gsap.utils.toArray("[data-skill]", root.current), {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "back",
        stagger: 0.06,
        scrollTrigger: { trigger: root.current.querySelector("[data-skills]"), start: "top 85%" },
      });

      // Stat cards
      gsap.from(gsap.utils.toArray("[data-stat]", root.current), {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "back",
        stagger: 0.15,
        scrollTrigger: { trigger: root.current.querySelector("[data-stats]"), start: "top 85%" },
      });
    });

    return () => mm.revert();
  }, { scope: root });

  return (
    <section ref={root} className="mx-auto max-w-7xl py-20 md:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: who I am */}
        <div className="flex flex-col gap-8">
          <ul className="flex flex-col gap-3">
            {facts.map((f) => (
              <li key={f.text} className="flex items-start gap-3" data-slide>
                {f.icon}
                <span>{f.text}</span>
              </li>
            ))}
          </ul>

          <p className="max-w-prose leading-relaxed" data-slide>
            I&apos;m a penetration tester based in Addis Ababa, holding the OffSec OSCP and the Hack The Box CPTS. I find and
            exploit weaknesses in networks, web applications and Active Directory environments before real attackers do, then
            turn the results into clear reports and practical fixes. My background building full-stack software means I
            understand the systems I test from the inside.
          </p>

          <a
            data-slide
            className="flex w-fit items-center gap-2 rounded-lg border-4 border-transparent bg-black px-4 py-3 text-white transition-colors duration-100 hover:border-terminal"
            href="https://drive.usercontent.google.com/download?authuser=0&export=download&id=1BHgqgwwfa2cGDUrNMEtYDIwNoA8mULeu"
          >
            <ArrowDown /> Portofolio
          </a>
        </div>

        {/* Right: skills and services */}
        <div className="flex flex-col gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl"><span className="mr-2 font-mono text-terminal" aria-hidden="true">~/</span>Skills &amp; Tools</h2>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4" data-skills>
              {skills.map((s) => (
                <li
                  key={s.name}
                  data-skill
                  className="flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-black px-3 py-2 text-center text-sm text-white"
                >
                  {s.icon}
                  <span className="leading-tight">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl"><span className="mr-2 font-mono text-terminal" aria-hidden="true">~/</span>Services</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2" data-slide>
                  <ArrowRight className="mt-0.5 flex-none" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Certification stat cards */}
      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10" data-stats>
        {stats.map((s, i) => (
          // GSAP animates the wrapper; the hover zoom lives on the inner card so they don't fight over `transform`
          <div key={s.big} data-stat className={i === stats.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
            <div className="flex h-full min-h-[11rem] flex-col items-center justify-center rounded-xl border-4 border-transparent bg-black p-6 text-center text-white transition duration-300 hover:scale-105 hover:border-white hover:bg-terminal">
              <p className="text-4xl lg:text-5xl">{s.big}</p>
              <p className="mt-4 text-lg lg:text-2xl">{s.small}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutMe
