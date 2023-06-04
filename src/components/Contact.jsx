import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// 
// 
// iYsA8h1h1Fyugi0o6
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_rz3tkw7',
      'template_f4zm2q8',
      {
        from_name: form.name,
        to_name: 'Miles',
        from_email: form.email,
        to_email: 'm.kerr.professional@gmail.com',
        message: form.message
      },
      'iYsA8h1h1Fyugi0o6'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you for your interest, I will respond as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        console.log(error)
        alert(`Something here is'nt right`)
      })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-200 p-8 rounded-2-xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact me<span className="animate-pulse">...</span></h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'><span>Your Name:</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="Please enter your name" className='bg-tertiary padding-y-4 px-6 placeholder:text-[#2AB6C1] text-[#2AB6C1] rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'><span>Your Email:</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="Please enter your email" className='bg-tertiary padding-y-4 px-6 placeholder:text-[#2AB6C1] text-[#2AB6C1] rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'><span>Your Message:</span>
            <textarea rows='7' name='message' value={form.message} onChange={handleChange} placeholder="Please put your message here..." className='bg-tertiary padding-y-4 px-6 placeholder:text-[#2AB6C1] text-[#2AB6C1] rounded-lg outline-none border-none font-medium' />
          </label>
          <button type='submit' className="bg-tertiary py-3 px-8 outline-none w-fit text-[#db15ba] font-bold shadow-md shadow-[#2AB6C1] rounded-xl">{loading ? 'Sending...' : 'Send'}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")