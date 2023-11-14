import React, { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';

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
    <header className={`flex items-center justify-between w-full py-2 px-4 z-50 fixed top-0  shadow-md`}>
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative p-1">DuoDev<span className='text-blue-500 text-5xl'>.</span>{" "} </a>
      </div>
      <div className="xl:w-full xl:hidden">
        <button onClick={() => setShowMenu(!showMenu)} className='text-2xl p-2 '><RiMenu3Fill /></button>
      </div>
      <nav className={`w-full md:w-[80%] xl:w-full h-full xl:static flex-1 flex flex-col xl:flex-row items-center justify-center transition-all duration-500 z-50 ${showMenu ? "fixed top-16 left-0 bg-white" : "hidden xl:flex"}`}>
  <button onClick={() => scrollToSection('Home')} className={`font-bold ${showMenu ? 'mb-2' : 'mr-4'} py-2 px-4 text-dark-500`} type="button">Inicio</button>
  <button onClick={() => scrollToSection('Works')} className={`font-bold ${showMenu ? 'mb-2' : 'mr-4'} py-2 px-4 text-dark-500 `} type="button">Portfolio</button>
  <button onClick={() => scrollToSection('Services')} className={`font-bold ${showMenu ? 'mb-2' : 'mr-4'} py-2 px-4 text-dark-500`} type="button">Servicios</button>
  <button onClick={() => scrollToSection('Nosotros')} className={`font-bold ${showMenu ? 'mb-2' : 'mr-4'} py-2 px-4 text-dark-500`} type="button">Nosotros</button>
</nav>

    </header>
  );
};

export default Header;
