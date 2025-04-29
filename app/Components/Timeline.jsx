import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const experiences = [
  {
    date: "Jan 2023 - Present",
    company: "Digital Perspective",
    role: "Frontend Web Developer",
    details: "Web Design; Web Development; Wordpress + Elementor.",
  },
  {
    date: "Jan 2020 - Mar 2020",
    company: "Bitcliq",
    role: "Software Developer - Internship",
    details:
      "Mobile Development (Parque D.Carlos I App - Course Final Project [Grade:20/20]); Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
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
    school: "Top-tier University (Pending)",
    degree: "Master's in Computer Science",
    details: "Aiming for research in AI, optimization, and security.",
  },
];

const certifications = [
  {
    date: "March 2024",
    title: "AWS Certified Cloud Practitioner",
    details: "Fundamentals of cloud computing, AWS services, security, and pricing.",
  },
  {
    date: "July 2023",
    title: "Meta Front-End Developer Certification",
    details: "HTML, CSS, JavaScript, React, and responsive design principles.",
  },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("Work");
  
  const getData = () => {
    if (activeTab === "Work") return experiences;
    if (activeTab === "Studies") return studies;
    if (activeTab === "Certifications") return certifications;
    return [];
  };
  
  const data = getData();

  return (
    <div className="max-w-2xl mx-auto text-black p-6">
      <h2 className="text-2xl font-bold mb-[10vh]">Experience, Education & Certifications</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 bg-gray-200 p-2 rounded-lg">
        {["Work", "Studies", "Certifications"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2 rounded-lg transition-all",
              activeTab === tab ? "bg-black text-white" : "text-gray-600"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-300 pl-6">
        {data.map((item, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-100px" });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-6"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-2"></div>

              {/* Card */}
              <Card className="bg-white shadow-lg border border-gray-200">
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <h3 className="text-lg font-bold mt-1">
                    {activeTab === "Work"
                      ? item.company
                      : activeTab === "Studies"
                      ? item.school
                      : item.title}
                  </h3>
                  <p className="text-sm text-gray-600 italic">
                    {activeTab === "Work"
                      ? item.role
                      : activeTab === "Studies"
                      ? item.degree
                      : null}
                  </p>
                  <p className="text-sm mt-2 text-gray-700">{item.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
