import { HoverEffect } from "../../Components/ui/card-hover-effect";
import { SiExpress, SiFigma, SiAdobeillustrator, SiAdobephotoshop,SiFlutter, SiGit, SiDjango,SiPython  ,SiMongodb, SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";

export default function MySkills() {
  return (
    <div className="max-w-5xl mx-auto px-8 w-[50vw]">
           <p className='text-6xl relative  ml-[20vw] top-[5vh]  mb-36 right-20 font-semibold '>My Tech Stack</p>

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
