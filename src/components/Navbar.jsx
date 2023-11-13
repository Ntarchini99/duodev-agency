import React, { useState } from 'react';
import { RiCheckboxBlankCircleFill, RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(false);
    }
  };

  return (
    <header className={`bg-white flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 fixed top-0`}>
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative p-1">
          DuoDev<span className='text-blue-500 text-5xl'>.</span>{" "} 
          <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-blue-500 -z-10' />
        </a>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className='xl:hidden text-2xl p-2 focus:outline-none'
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      <nav
        className={`bg-white w-full md:w-[80%] xl:w-full ${
          showMenu ? "block" : "hidden"
        } md:flex md:justify-end md:items-center h-screen md:h-auto transition-all duration-500`}
      >
        <button
          onClick={() => scrollToSection('Home')}
          className='font-bold py-2 md:py-0 md:px-4 md:ml-4 text-black'
          type="button"
        >
          Inicio
        </button>
        <button
          onClick={() => scrollToSection('Works')}
          className='font-bold py-2 md:py-0 md:px-4 md:ml-4 text-black'
          type="button"
        >
          Portfolio
        </button>
        <button
          onClick={() => scrollToSection('Services')}
          className='font-bold py-2 md:py-0 md:px-4 md:ml-4 text-black'
          type="button"
        >
          Servicios
        </button>
        <button
          onClick={() => scrollToSection('Nosotros')}
          className='font-bold py-2 md:py-0 md:px-4 md:ml-4 text-black'
          type="button"
        >
          Nosotros
        </button>
      </nav>
    </header>
  );
};

export default Header;
