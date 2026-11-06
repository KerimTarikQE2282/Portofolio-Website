import React, { useState, useRef } from 'react';
import Project_card_right from './subComponents/Project_card_right';
import Project_card_left from './subComponents/Project_card_left';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Auora from '../../Resources/Auora.png';
import IS from '../../Resources/Invenotry system pic.png';
import Sully from '../../Resources/Qibla_app.png';

const pentestProjects = [
  {
    image: null,
    title: 'HTB CPTS Exam — Full Network Compromise',
    description:
      'Completed the Hack The Box Certified Penetration Testing Specialist exam: a multi-day, black-box engagement against an enterprise network, from external recon to full Active Directory domain compromise, delivered as a commercial-grade penetration test report.',
    usedTech: ['Active Directory', 'Pivoting', 'Web Exploitation', 'Privilege Escalation', 'Reporting'],
    category: 'Certification Engagement',
    year: '2025',
    terminal: [
      '$ nmap -sC -sV -p- 10.129.0.0/24',
      '[+] 14 hosts up, 87 open ports',
      '$ ligolo-ng -selfcert',
      '[+] tunnel established -> 172.16.8.0/23',
      '$ secretsdump.py -just-dc corp.local/admin@dc01',
      '[+] krbtgt hash dumped — domain compromised',
    ],
    githubLink: '#',
    projectLink: '#',
    align: 'left',
  },
  {
    image: null,
    title: 'OSCP — Offensive Security Certified Professional',
    description:
      'Passed the OffSec OSCP: a 24-hour hands-on exam covering standalone Linux and Windows targets and an Active Directory set, followed by a professional exploitation report with full reproduction steps.',
    usedTech: ['Enumeration', 'Exploit Development', 'Linux', 'Windows', 'Active Directory'],
    category: 'Certification Engagement',
    year: '2025',
    terminal: [
      '$ autorecon 192.168.x.x',
      '[+] 445/tcp smb  80/tcp http  3389/tcp rdp',
      '$ python3 exploit.py --lhost tun0',
      '[+] reverse shell as iis apppool',
      '$ whoami',
      'nt authority\\system',
    ],
    githubLink: '#',
    projectLink: '#',
    align: 'right',
  },
  {
    image: null,
    title: 'Hack The Box Labs & Writeups',
    description:
      'Rooted machines and Pro Lab environments on Hack The Box, documenting the attack path for each: enumeration, initial foothold, lateral movement and privilege escalation, along with defensive takeaways.',
    usedTech: ['Hack The Box', 'Linux PrivEsc', 'Windows PrivEsc', 'Kerberos Attacks', 'Writeups'],
    category: 'Labs & Research',
    year: 'Ongoing',
    terminal: [
      '$ cat user.txt',
      '[+] user flag captured',
      '$ sudo -l',
      '(root) NOPASSWD: /usr/bin/tar',
      '$ cat /root/root.txt',
      '[+] root flag captured',
    ],
    githubLink: '#',
    projectLink: '/blog/htb/',
    align: 'left',
  },
];

const toolingProjects = [
  {
    image: null,
    title: 'Recon Automation Toolkit',
    description:
      'Python and Bash scripts that chain port scanning, service fingerprinting, web content discovery and screenshotting into a single workflow, and output organised notes ready for reporting.',
    usedTech: ['Python', 'Bash', 'Nmap', 'ffuf', 'Automation'],
    category: 'Offensive Tooling',
    year: '2025',
    terminal: [
      '$ ./recon.sh -t targets.txt -o engagement/',
      '[*] scanning 32 hosts...',
      '[*] fingerprinting web services...',
      '[+] notes written to engagement/report.md',
    ],
    githubLink: '#',
    projectLink: '#',
    align: 'right',
  },
  {
    image: null,
    title: 'Active Directory Home Lab',
    description:
      'A self-built, intentionally vulnerable Windows domain (DC, workstations, misconfigured ACLs and services) for practising Kerberoasting, AS-REP roasting, ACL abuse, ADCS attacks, and the matching detections.',
    usedTech: ['Windows Server', 'BloodHound', 'Impacket', 'NetExec', 'Detection'],
    category: 'Lab Build',
    year: '2025',
    terminal: [
      '$ bloodhound-python -d lab.local -c all',
      '[+] shortest path to Domain Admins found',
      '$ GetUserSPNs.py lab.local/jdoe -request',
      '[+] svc_sql TGS hash captured',
    ],
    githubLink: '#',
    projectLink: '/blog/labs/ad-home-lab-dc01/',
    align: 'left',
  },
];

// Earlier software projects: a pentester who can build software understands what they break.
const devProjects = [
  {
    image: Auora,
    title: 'Auora Video Sharing and Streaming App',
    description: 'A video sharing and streaming app built with Expo and Express, using MongoDB as the database.',
    usedTech: ['Expo', 'React Native', 'Express.js', 'Node.js', 'MongoDB'],
    category: 'Software Development',
    year: '2024',
    githubLink: 'https://github.com/KerimTarikQE2282/Auora-Video-Streaming-and-sharing-platform.git',
    projectLink: '#',
    align: 'right',
  },
  {
    image: Sully,
    title: 'Sulliy Islamic Companion App',
    description: 'A comprehensive Islamic companion app with features like Qibla Finder, Athkars, prayer tracker, and AI-powered Islamic knowledge tools.',
    usedTech: ['React Native', 'Node.js', 'AI Modules', 'MongoDB', 'Expo'],
    category: 'Software Development',
    year: '2024',
    githubLink: 'https://github.com/KerimTarikQE2282/Sulliy-Your-Islamic-Companion-app.git',
    projectLink: '#',
    align: 'left',
  },
  {
    image: IS,
    title: 'Inventory Management System',
    description: 'An inventory management system with real-time tracking, AI-driven sales predictions, and automated stock replenishment.',
    usedTech: ['Next.js', 'Express.js', 'MongoDB', 'Scikit-learn', 'Tailwind CSS'],
    category: 'Software Development',
    year: '2024',
    githubLink: 'https://github.com/KerimTarikQE2282/SeniorProject-Inventory-managemnet-system.git',
    projectLink: '/UnderConstruction',
    align: 'right',
  },
];

const tabs = {
  'Pentesting & Labs': pentestProjects,
  'Tooling': toolingProjects,
  'Development': devProjects,
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('Pentesting & Labs');
  const refs = useRef([]);
  const projectData = tabs[activeTab];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      refs.current.slice(0, projectData.length).forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 55%', scrub: 1 },
          }
        );
      });
    });

    return () => mm.revert();
  }, { dependencies: [activeTab], revertOnUpdate: true });

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 py-12 md:gap-20 md:py-20">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold">Projects</h2>

        {/* Tablets and up: button group */}
        <div className="hidden gap-2 rounded-lg bg-gray-200 p-2 sm:flex" role="tablist">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-4 py-2 transition-all ${activeTab === tab ? 'bg-black text-white' : 'text-gray-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Phones: dropdown */}
        <div className="w-full rounded-lg bg-gray-200 p-2 sm:hidden">
          <label htmlFor="project-tab" className="sr-only">Project category</label>
          <select
            id="project-tab"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full rounded-lg bg-white p-3 text-base text-gray-700"
          >
            {Object.keys(tabs).map((tab) => (
              <option key={tab} value={tab}>
                {tab}
              </option>
            ))}
          </select>
        </div>
      </div>

      {projectData.map((project, index) => {
        const Card = project.align === 'left' ? Project_card_left : Project_card_right;
        return (
          <div key={`${activeTab}-${index}`} ref={(el) => (refs.current[index] = el)}>
            <Card
              image={project.image}
              title={project.title}
              description={project.description}
              usedTech={project.usedTech}
              githubLink={project.githubLink}
              ProjectLink={project.projectLink}
              category={project.category}
              year={project.year}
              terminal={project.terminal}
            />
          </div>
        );
      })}
    </section>
  );
}
