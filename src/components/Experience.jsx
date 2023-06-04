import React, { Link } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
// import { github } from '../assets'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement contentStyle={{ background: "#1d1836", color: '#2AB6C1' }} contentArrowStyle={{ borderRight: "10px solid #db15ba" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
      </div>
    }>
    <div>
      <h3>{experience.title}</h3>
      <p className="text-[#db15ba] text-[24px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
      <a href={experience.github} className="underline text-[#db15ba]">Link to GitHub.</a>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='text-[#2AB6C1] text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Applications</p>
        <h2 className={styles.sectionHeadText}>See what I can do<span className="animate-pulse">...</span></h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience);
