import { HoverEffect } from "../../Components/ui/card-hover-effect";
import { SiExpress, SiFigma, SiAdobeillustrator, SiAdobephotoshop,SiFlutter, SiGit, SiDjango,SiPython  ,SiMongodb, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";

export default function MySkills() {
  return (
    <div className="max-w-5xl mx-auto px-8 lg:w-[50vw] lg:mt-0 mt-30 relative top-[50vh] lg:top-0">
           <p className='lg:text-6xl lg:w-[30vw] text-5xl lg:ml-[13vw] relative  ml-[20vw] top-[5vh]  lg:mb-[10vh] mb-10 right-20 font-semibold lg:mt-[5vh] w-[90vw]'>My Tech Stack</p>

      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    text: "React.js",
    Icon: SiReact
},
{
  text: "Next.js",
  Icon: SiNextdotjs
},
{
  text: "Node JS",
  Icon: SiNodedotjs
},
{
  text: "Express",
  Icon: SiExpress
},
{
  text: "Python",
  Icon: SiPython
},
{
  text: "Django",
  Icon: SiDjango
},
{
  text: "MongoDB",
  Icon: SiMongodb
},
{
  text: "Illustrator",
  Icon: SiAdobeillustrator
},
{
  text: "PhotoShop",
  Icon: SiAdobephotoshop
},


{
  text: "Flutter",
  Icon: SiFlutter
},



{
    text: "Git",
    Icon: SiGit
},

{
    text: "Figma",
    Icon: SiFigma
},
 
];
