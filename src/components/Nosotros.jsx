import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import jona from '../assets/img/jona.png';
import naza from '../assets/img/naza.jpg';
import logoo from '../assets/img/logoo.jpg'

const Nosotros = () => {
  return (
    <div className='p-8 flex flex-col gap-8 bg-gray-100'>
      <h1 className='text-[30px] text-center font-black'>Con el motivo de impulsar tu negocio</h1>
      <div className='flex justify-center'>
        <span className='text-5xl text-blue-500'>
          <RiDoubleQuotesL />
        </span>
        <p className='max-w-2xl text-center text-gray-500'>
          "Invierte en la identidad de tu marca, porque es la clara representación de tu promesa con el futuro cliente." - David Brier
        </p>
        <span className='text-5xl text-blue-500' ><RiDoubleQuotesR /></span>
      </div>
      <div className='flex flex-col item-center justify-center gap-8'>
        <div className='flex  items-center justify-center gap-4 md:gap-12'>
          <a href="https://www.instagram.com/jonnadev89/" target='blank'><img src={jona} className='w-8 h-8 md:w-14 md:h-14 object-cover rounded-full ' /></a>
          <a href="https://www.instagram.com/duodevagency/" target='blank'><img src={logoo} className='w-12 h-12 md:w-20 md:h-20 obje8ct-cover rounded-full ring-4 ring-blue-500 p-1 bg-white  -ml-0' /></a>
          <a href="https://www.instagram.com/nazatarchini/" target='blank'><img src={naza} className='w-8 h-8 md:w-14 md:h-14 object-cover rounded-full ' /></a>
        </div>
        <div>
          <h3 className='text-center text-[24px] font-bold'>DuoDev Founders </h3>
          <h5 className='text-center text-[20px] text-gray-500'>Nazareno Tarchini & Jonatan Di vincenzo</h5>
        </div>
      </div>
    </div>

  )
}

export default Nosotros;