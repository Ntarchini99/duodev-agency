import React from 'react';
import logo from '../assets/img/DuoDev.png';
import whatsapp from '../assets/img/whatsapp.png';
import figma from '../assets/icons/figma.png';
import adobe from '../assets/icons/adobexd.png';
import sketch from '../assets/icons/sketch.png';
import web from '../assets/icons/web.png';

const Home = () => {
  return (
    <section className='min-h-screen grid grid-cols-1 xl:grid-cols-8'>
      <div id="Home" className='xl:col-span-5 md:col-span-8 flex items-center justify-center p-16 xl:p-18'>
        <div className='text-center'>
          <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4'>
            Programación, Marketing y Redes Sociales{' '}
            <span className='text-blue-500 block mt-2 sm:mt-3'>
              Impulsa tu éxito con DuoDev
            </span>
          </h1>
          <p className='text-gray-500 text-lg md:text-xl lg:text-xl leading-normal'>
            Expertos en Desarrollo Web, Marketing Digital y Redes Sociales.
          </p>
        </div>
      </div>
      <div className='fixed bottom-8 right-8 z-50'>
        <a
          href="https://wa.me/3484365436?text=Hola%20me%20contacto%20con%20ustedes%20para"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 w-12 h-12 flex items-center justify-center shadow-lg"
        >
          <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
        </a>
      </div>
      <div className='xl:col-span-3 md:col-span-8 flex items-center justify-center relative p-6 md:p-9'>
        <div className='md:max-w-[300px] xl:max-w-[400px] xl:max-h-[300px]'>
          <img
            src={logo}
            className='w-full object-cover'
            alt="Logo"
          />
        </div>
        <img
          src={figma}
          className='md:w-10 md:h-10 w-8 h-8 object-cover rounded-full border-l-4 border-gray-600 absolute top-[27%] right-[15%] xl:right-[20%]'
          alt="Figma"
        />
        <img
          src={adobe}
          className='md:w-10 md:h-10 w-8 h-8 object-cover rounded-full border-l-4 border-gray-600 absolute xl:top-[40%] top-[5%] left-[15%] xl:left-[20%]'
          alt="Adobe"
        />
        <img
          src={web}
          className='md:w-10 md:h-10 w-8 h-8 object-cover rounded-full  border-gray-600 absolute top-[65%] right-[6%] xl:right-[12%]'
          alt="Web"
        />
        <img
          src={sketch}
          className='md:w-10 md:h-10 w-8 h-8 object-cover rounded-full absolute bottom-[25%] left-[3%] xl:left-[12%] -rotate-12'
          alt="Sketch"
        />
      </div>
    </section>
  );
};

export default Home;
