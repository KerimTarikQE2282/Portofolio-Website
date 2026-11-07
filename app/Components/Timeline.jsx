import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const experiences = [
  {
    date: "Sept 2024 – Present",
    company: "Feruz Textile Imports",
    role: "Full Stack Developer",
    details:
      "Developed a tailored inventory system using the MERN stack with real-time tracking, supplier/order access, and automated stock alerts. Delivered a dashboard with visual insights for efficient inventory decisions.",
  },
  {
    date: "May 2024 – Sept 2024",
    company: "Oumer Auto Glass",
    role: "Full Stack Developer",
    details:
      "Built a smart inventory system using MERN and Scikit-learn for sales prediction and stock optimization. Delivered an interactive dashboard for real-time inventory trends and alerts.",
  },

];


const studies = [
  {
    date: "2020 - Present",
    school: "Hilcoe School of Computer Science and University",
    degree: "BSc in Computer Science",
    details: "Studying AI, ML, Networking, and Full-Stack Development.",
  },
  {
    date: "Upcoming",
    school: "",
    degree: "Master's in Computer Science",
    details: "Aiming for research in AI, optimization, and security.",
  },
];

const certifications = [
  {
    date: "2025",
    title: "OSCP — Offensive Security Certified Professional",
    details: "OffSec's hands-on penetration testing certification: a 24-hour exam compromising Linux, Windows and Active Directory targets, followed by a professional report.",
  },
  {
    date: "2025",
    title: "HTB CPTS — Certified Penetration Testing Specialist",
    details: "Hack The Box's intermediate-to-advanced pentest certification: a multi-day, real-world engagement against an enterprise network and Active Directory, delivered as a commercial-grade report.",
  },
  {
    date: "August 2024",
    title: "IELTS Certification",
    details: "Achieved an overall score of 8 on the IELTS English proficiency test.",
  },
  {
    date: "May 2024",
    title: "UI/UX Design Certification",
    details: "Completed a comprehensive UI/UX design course on Skillshare covering user research, wireframing, and prototyping.",
    link: "/UIUX.pdf"
  }
];


function TimelineItem({ item, index, tab }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const title = tab === "Work" ? item.company : tab === "Studies" ? item.school : item.title;
  const subtitle = tab === "Work" ? item.role : tab === "Studies" ? item.degree : null;

  const body = (
    <CardContent className="p-4 sm:p-5">
      <p className="text-sm text-gray-500">{item.date}</p>
      <h3 className="mt-1 text-lg font-bold">{title}</h3>
      {subtitle && <p className="text-sm italic text-gray-600">{subtitle}</p>}
      <p className="mt-2 text-sm text-gray-700">{item.details}</p>
    </CardContent>
  );

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative mb-6"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[33px] top-5 h-4 w-4 rounded-full bg-terminal sm:-left-[37px]"></div>

      <Card className="border border-gray-200 bg-white shadow-lg">
        {item.link ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="block rounded-xl transition-colors hover:bg-gray-50">
            {body}
          </a>
        ) : (
          body
        )}
      </Card>
    </motion.li>
  );
}

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("Certifications");
  const data =
    activeTab === "Work" ? experiences : activeTab === "Studies" ? studies : certifications;

  return (
    <section className="mx-auto max-w-2xl py-12 text-black md:py-20">
      <h2 className="mb-10 text-2xl font-bold md:mb-14"><span className="mr-2 font-mono text-terminal" aria-hidden="true">~/</span>Experience, Education &amp; Certifications</h2>

      {/* Tabs */}
      <div className="mb-8 flex w-full gap-1 rounded-lg bg-gray-200 p-1.5 sm:w-fit sm:gap-2 sm:p-2" role="tablist">
        {["Work", "Studies", "Certifications"].map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 rounded-lg px-2 py-2 text-sm transition-all sm:flex-none sm:px-4 sm:text-base",
              activeTab === tab ? "bg-black text-white" : "text-gray-600"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <ol key={activeTab} className="relative ml-2 border-l-2 border-gray-300 pl-6 sm:pl-7">
        {data.map((item, index) => (
          <TimelineItem key={item.title ?? item.company ?? item.degree} item={item} index={index} tab={activeTab} />
        ))}
      </ol>
    </section>
  );
}
