import React from 'react'
import { styles } from '../styles'
// import { Tilt } from 'react-tilt'
// import { github } from '../assets'
import { SectionWrapper } from '../hoc'
// import { projects } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Work Experience</p>
        <h2 className={styles.sectionHeadText}>Coming Soon<span className="animate-pulse">...</span></h2>
      </motion.div>
      <div className='w-full flex '>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-[#2AB6C1] text-[17px] max-w-3xl leading-[30px]'>
          Recent graduate with a strong passion for technology and a solid foundation in computer science. Skilled in programming languages including Java, Python, React, and JavaScript. Participated in academic projects, gaining hands-on experience in web development, data analysis, and cloud computing. Strong problem-solving, critical thinking, and collaboration abilities. Eager to leverage technical skills, passion for innovation, and dedication to contribute to a dynamic tech organization. Committed to continued professional growth and making a meaningful impact.
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')