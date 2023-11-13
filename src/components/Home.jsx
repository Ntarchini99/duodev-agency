import React from 'react';
import logo from '../assets/img/DuoDev.png';
import whatsapp from '../assets/img/whatsapp.png';
import figma from '../assets/icons/figma.png';
import adobe from '../assets/icons/adobexd.png';
import sketch from '../assets/icons/sketch.png';


const Home = () => {
  return <section className='min-h-[90vh] grid grid-cols-1 xl:grid-cols-8'>
    <div id="home" className='md:col-span-5 flex items-center justify-center p-8 xl:p-18 '>
      <div className='flex flex-col gap-6'>
        <h1 className='text-5xl xl:text-5xl font-bold xl:leading-[4rem]'>Porgramacion, Marketing y Redes Sociales {" "}
          <span className='text-blue-500 py-[11]   relative inline-block'>
            Impulsa tu éxito con DuoDev
          </span></h1>
        <p className='text-gray-500  text-2xl leading-[2rem]'>Expertos en Desarrollo Web, Marketing Digital y Redes Sociales.</p>
      </div>
    </div>
    <div className="fixed bottom-8 right-8 z-50">
      <a href="https://wa.me/3484365436?text=Hola%20me%20contacto%20con%20ustedes%20para" target="_blank" rel="noopener noreferrer" 
      className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-lg"
      >
        <img src={whatsapp} alt="WhatsApp" className="w-8 h-8"/>
      </a>
    </div>
    <div className='md:col-span-3 flex items-center justify-center  relative p-9'>
      <div>
        <div><img src={logo} className='h-[250px] w-[250px] md:w-[950px]  md:h-[750px]  object-cover xl-mt-28' /></div>
      </div>
      <img src={figma} className='md:w-14 md:h-14 w-11 h-11 objet-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] right-[20%] xl:right-[12%]' />
      <img src={adobe} className='md:w-14 md:h-14 w-11 h-11 objet-cover rounded-full border-l-8 border-gray-600 absolute xl:top-[5%] top-[5%] left-[20%] xl:left-[10%]' />
      <img src={sketch} className='md:w-14 md:h-14 w-11 h-11 objet-cover rounded-full  absolute bottom-[20%] left-[5%] xl:left-[3%] -rotate-12' />
    </div>
  </section>

}

export default Home;