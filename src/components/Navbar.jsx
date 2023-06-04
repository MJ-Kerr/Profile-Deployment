import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20  bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0) }}>
          <img src={logo} alt="tealLogo" className='w-9 h-9 abject-container' />
          <p className='text-[#db15ba] text-[14px] font-bold cursor-pointer flex hover:text-[#2AB6C1]'>Miles Kerr &nbsp;
            <span className='sm:block hidden'>| Software Engineer</span></p>
        </Link>
        <ul className='text-[#2AB6C1] list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => {
            return (
              <li key={link.id} className={`${active === link.title ? "text-[#db15ba]" : "text-[#db15ba]"} font-poppins hover:text-[#2AB6C1] text-[16px] font-medium cursor-pointer`}>
                <a href={`${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 my-2 mx-2 a-10 rounded-xl min-w-[140px]`}>
            <ul className='text-[#2AB6C1] list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => {
                return (
                  <li key={link.id} className={`${active === link.title ? "text-[#2AB6C1]" : "text-[#2AB6C1]"} hover:text-[#db15ba] text-[16px] font-medium cursor-pointer`} onClick={() => { setToggle(!toggle); setActive(link.title) }}>
                    <a href={`${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar