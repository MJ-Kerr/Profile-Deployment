import React, { useState, useEffect } from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-15 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-[#2AB6C1] text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div className="p-5" variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Who am I?
        </p>
        <h2 className={styles.sectionHeadText}>
          I'm<span className="animate-pulse">...</span>
        </h2>
      </motion.div>
      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] pl-9"
        variants={fadeIn("", "", 0.1, 1)} >
        <span className="text-[23px] text-[#db15ba]">Miles Kerr</span>, a Full Stack Developer based in Dallas, TX. I have a passion for building innovative web applications and creating seamless user experiences. With expertise in HTML5, CSS, JavaScript, Python, and Java, I enjoy working with frameworks like React.js and libraries such as Bootstrap and Tailwind.
        <p>In my technical projects, I have demonstrated my skills as a Full Stack Developer. For example, I developed FlowerBuds, an online store built with React.js, Node.js, and MongoDB. I created reusable components, integrated APIs, and implemented features like cart functionality and dynamic product rendering.</p>
        <p>I also worked on GolfTracker, a web app for golfers to track their performance. Using HTML, CSS, Bootstrap, and JavaScript, I built an intuitive interface and incorporated shot logging, distance tracking, and shot shape analysis features.</p>
        <p>In my professional experience as a Lead Bartender and Assistant Manager at Alamo Club and Toller Patio, I honed my customer service, team management, and problem-solving skills.</p>
        <p>I hold a Full-Stack Web Development Certificate from Coding Dojo, where I underwent immersive training in Python, Java, and MERN stack technologies. I also have a Bachelor's degree in Hospitality Administration from Stephen F Austin, where I developed a strong foundation in customer service and effective communication.</p>
      </motion.p>
      <div className="mt-10 mb-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")