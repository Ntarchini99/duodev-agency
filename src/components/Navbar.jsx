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
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">DuoDev<span className='text-blue-500 text-5xl'>.</span>{" "} <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-blue-500 -z-10' /></a>
      </div>
      <nav className={`fixed bg-white w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>
        <button onClick={() => scrollToSection('Home')} className='font-bold' type="button">Inicio</button>
        <button onClick={() => scrollToSection('Works')} className='font-bold' type="button">Portfolio</button>
        <button onClick={() => scrollToSection('Services')} className='font-bold' type="button">Servicios</button>
        <button onClick={() => scrollToSection('Nosotros')} className='font-bold' type="button">Nosotros</button>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden text-2xl p-2'>{showMenu ? <RiCloseLine /> : <RiMenu3Fill />}</button>
    </header>
  );
};

export default Header;
