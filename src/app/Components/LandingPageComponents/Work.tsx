import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSquareUpwork } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdLocalTaxi } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";

const Work = () => {
  return (
    <div>
      <p className='relative text-5xl font-bold lg:ml-[33vw] ml-10 lg:w-[35vw] mt-[25vh] lg:mb-[5vh] w-[100vw]'>
        My Work Experience
      </p>

      <VerticalTimeline lineColor="black">
        {/* Feruz Textile Imports Inventory System */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2024 – Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBusinessTime />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Feruz Textile Imports, Addis Ababa</h4>
          <p>
            Designed and implemented an inventory solution for Feruz Abdu Imports using MERN stack. 
            Built real-time tracking, automated alerts, and a data-driven dashboard for efficient stock management.
          </p>
        </VerticalTimelineElement>

        {/* Oumer Auto Glass Inventory System */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2024 – Sept 2024"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaBusinessTime />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Oumer Auto Glass, Addis Ababa</h4>
          <p>
            Developed a smart inventory system using MERN stack with AI-driven sales predictions. 
            Built a real-time dashboard for inventory tracking and decision-making.
          </p>
        </VerticalTimelineElement>

        {/* Hilcoe School of Computer Science and Technology */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2024 – Sep 2024"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaChalkboardTeacher />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Java Lab Instructor</h3>
          <h4 className="vertical-timeline-element-subtitle">Hilcoe School of Computer Science, Addis Ababa</h4>
          <p>
            Taught Java programming and object-oriented concepts, guiding students in Eclipse and IntelliJ. 
            Developed lab exercises to reinforce key problem-solving skills.
          </p>
        </VerticalTimelineElement>

        {/* Adika Taxi Ethiopia */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jul 2022 – Sep 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdLocalTaxi />}
          visible={true}
        >
          <h3 className="vertical-timeline-element-title">Software Development Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Adika Taxi, Addis Ababa</h4>
          <p>
            Developed responsive interfaces using React with Redux and backend APIs with Django. 
            Improved HR system performance with React Query and Jest testing.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
};

export default Work;
