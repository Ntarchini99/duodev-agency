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
    <header className={`flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 fixed top-0 ${showMenu ? 'bg-white' : ''}`}>
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative p-1">DuoDev<span className='text-blue-500 text-5xl'>.</span>{" "} <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-blue-500 -z-10' /></a>
      </div>
      <div className="xl:w-full xl:hidden">
        <button onClick={() => setShowMenu(!showMenu)} className='text-2xl p-2'>{showMenu ? <RiCloseLine /> : <RiMenu3Fill />}</button>
      </div>
      <nav className={`w-[80%] md:w-[40%] xl:w-full h-full xl:static flex-1 flex flex-col xl:flex-row items-center justify-center transition-all duration-500 z-50 ${showMenu ? "absolute top-16 left-0 bg-white" : "hidden xl:flex"}`}>
        <button onClick={() => scrollToSection('Home')} className={`font-bold ${showMenu ? 'mb-2' : 'mr-4'}`} type="button">Inicio</button>
        <button onClick={() => scrollToSection('Works')} className={`font-bold ${showMenu ? 'mb-2' : 'mr-4'}`} type="button">Portfolio</button>
        <button onClick={() => scrollToSection('Services')} className={`font-bold ${showMenu ? 'mb-2' : 'mr-4'}`} type="button">Servicios</button>
        <button onClick={() => scrollToSection('Nosotros')} className={`font-bold ${showMenu ? 'mb-2' : 'mr-4'}`} type="button">Nosotros</button>
      </nav>
    </header>
  );
};

export default Header;
