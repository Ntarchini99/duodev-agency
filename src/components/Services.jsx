import React from 'react';
import { RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <section>
  <div id="Services" className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20 bg-gray-100'>
    {/* SERVICES */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 col-span-full'>
      <div className='flex flex-col gap-2'>
        <RiSmartphoneFill className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl' />
        <h3 className='text-[20px] font-bold'>Diseños UI/UX</h3>
        <p className='text-gray-500'>Contamos con equipos de diseñadores graficos y diseñadores UI/UX para analizar tus competencias y tus peticiones para el desarrollo de tu marca  </p>
      </div>
      <div className='flex flex-col gap-2'>
        <RiMacFill className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl' />
        <h3 className='text-[20px] font-bold'>Marketing Digital</h3>
        <p className='text-gray-500'>Contamos con equipo de marketing para elaborar estrategias de marketing e impulsar tu marca y/o negocio</p>
      </div>
      <div className='flex flex-col gap-2'>
        <RiSmartphoneFill className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl' />
        <h3 className='text-[20px] font-bold'>Community Manager</h3>
        <p className='text-gray-500'>Contamos con equipos de Community Manager para elaborar estrategias y contenido para tus redes sociales</p>
      </div>
      <div className='flex flex-col gap-2'>
        <RiMacFill className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl' />
        <h3 className='text-[20px] font-bold'>Desarrollo Web</h3>
        <p className='text-gray-500'>Contamos con un equipo de desarrolladores Frontend, Backend o Full Stack para crear soluciones web y llevar tu marca a otro nivel</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Services; 