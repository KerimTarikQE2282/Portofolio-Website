import React from "react";
import { BentoGrid, BentoGridItem } from "../subcomponents/bento-grid"
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridSecondDemo() {
  return (
    <>
   
               <p className='lg:text-6xl lg:w-[30vw] text-5xl lg:ml-[43vw] relative  ml-[20vw] top-[5vh]  lg:mb-[10vh] mb-10 right-20 font-semibold lg:mt-[5vh] w-[90vw]'>About Me</p>

   
    (<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          description2={item.description2}
          header={item.header}
          className={item.className}
          icon={item.icon} />
      ))}
    </BentoGrid>)
    </>
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "My Journey",
    description: "Background: I am Kerim Tarik, a computer science student from Ethiopia with an excellent GPA of 3.7. I attend Hilcoe School of Computer Science and University, where I also teach and assist due to my strong academic performance.",
    description2:"Achievements: Represent your assistantship and teaching experience with something like a chalkboard or a mentor badge. Highlight your experience with technologies like Scikit-learn, React.js, and MongoDB.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Values",
    description: "Principles: I value hard work, integrity, and curiosity. These principles guide me as I work on projects like smart inventory systems and predictive analytics tools.",
    description2:"Add items like a torch for enlightenment or a gear to represent problem-solving.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Vision",
    description:
    "Future Goals: I aspire to pursue a master's degree at a top-tier university with exceptional education and low acceptance rates, such as Stanford or MIT, and work on groundbreaking technologies in AI and machine learning.",
    description2:"Use a symbol like a graduate cap, a roadmap leading to prestigious universities, or futuristic tech icon",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
