import { motion } from 'framer-motion'
import { styles } from '../styles'
import ComputerCanvas from './canvas/Computers'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-row justify-center items-center mt-5">
          {/* <div className="w-5 h-5 rounded-full bg-[#2AB6C1]" /> */}
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}> Hey, I'm <span className="text-[#db15ba]">Miles</span></h1>
          <div className="w-90 h-4" style={{ background: "linear-gradient(#2AB6C1, #db15ba)" }} />
          <p className={`${styles.heroSubText}`}>I am your friendly neighborhood software <span className='animate-pulse text-[#2AB6C1] underline decoration-[#db15ba]'>Guru</span>. <br className='xsm:block hidden' /> Ready to dive into the world of coding and create some digital <span className='animate-pulse text-[#2AB6C1] underline decoration-[#db15da]'>Magic</span>?</p>
        </div>
      </div>
      {/* <ComputerCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#2AB6C1] flex justify-center items-start p-2">
            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-[#db15ba] mb-1" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
