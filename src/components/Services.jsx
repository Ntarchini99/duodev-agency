import React from 'react';
import { RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <div id="services" className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20 '>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[20px] font-bold'>Comunicate con nosotros via WhatsApp, Email, o Instagram</h1>
        <p className='text-[15px] text-gray-500'>
          Estamos disponibles las 24hs, deja tu mensaje y responderemos a la brevedad ⬇️
        </p>
        <form className="max-w-md mx-4 p-8 bg-white rounded-lg shadow-md">
          <div className="mb-2">
            <label htmlFor="nombre" className="block text-gray-700 text-sm font-medium mb-1">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Escribe tu nombre"
              className="w-full px-3 py-2 border rounded-lg text-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              className="w-full px-3 py-2 border rounded-lg text-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block text-gray-700 text-sm font-medium mb-1">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje"
              className="w-full px-3 py-2 border rounded-lg text-lg focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            Enviar
          </button>
        </form>

      </div>
      {/* SERVICES */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex  flex-col gap-2'>
          <RiSmartphoneFill className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl' />
          <h3 className='text-[20px] font-bold'>Diseños UI/UX</h3>
          <p className='text-gray-500'>Contamos con equipos de diseñadores graficos y diseñadores UI/UX para analizar tus competencias y tus peticiones para el desarrollo de tu marca  </p>
        </div>
        <div className='flex  flex-col gap-2'>
          <RiMacFill className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl' />
          <h3 className='text-[20px] font-bold'>Marketing Digital</h3>
          <p className='text-gray-500'>Contamos con equipo de marketing para elaborar estrategias de marketing e impulsar tu marca y/o negocio</p>
        </div>
        <div className='flex  flex-col gap-2'>
          <RiSmartphoneFill className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl' />
          <h3 className='text-[20px] font-bold'>Community Manager</h3>
          <p className='text-gray-500'>Contamos con equipos de Community Manager para elaborar estrategias y contenido para tus redes sociales</p>
        </div>
        <div className='flex  flex-col gap-2'>
          <RiMacFill className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl' />
          <h3 className='text-[20px] font-bold'>Desarrollo Web</h3>
          <p className='text-gray-500'>Contamos con un equipo de desarrolladores Frontend, Backend o Full Stack para crear soluciones web y llevar tu marca a otro nivel</p>
        </div>
      </div>
    </div>
  )
}

export default Services; 