import React from 'react';
import { logo, close, menu } from '../assets'
import {navLinks}  from '../constants';

const Navbar = () => {
  const [active, setActive] = React.useState("Home");
  const [toggle, setToggle] = React.useState(false)

  return (
    <nav className="w-full py-6 flex items-center justify-between ">
        <img src={logo} alt="hoobank_logo" className="w-[124px] h-[34px] " />

        <ul className="hidden list-none md:flex justify-end items-center ">
          {navLinks.map((nav, index) => (
            <li 
              key={nav.id} 
              className={`font-poppins font-normal text-[16px] cursor-pointer  ${active === nav.title ? 'text-white' : 'text-dimWhite' } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} 
              onClick={() => setActive(nav.title)} >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}

        <div className="flex flex-1 items-center justify-end md:hidden">
          <img src={toggle ? close : menu} alt='menu-icon'
                className='cursor-pointer w-[24px] h-[24px] object-contain'
                onClick={() => setToggle((prev) => !prev )} 
          />

          <div className={`${toggle ? 'flex' : 'hidden'}  bg-black-gradient min-w-[180px] justify-center p-8 absolute top-40 right-0 sidebar mx-6 rounded-3xl`}>
            <ul>
            {navLinks.map((nav, index) => (
            <li 
              key={nav.id} 
              className={`font-poppins font-normalS text-[16px] cursor-pointer text-center  ${active === nav.title ? 'text-white' : 'text-dimWhite' } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`} 
              onClick={() => setActive(nav.title)} >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
            </ul>
          </div>

        </div>
    </nav>
  )
}

export default Navbar