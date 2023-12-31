import React from 'react'
import market from '../assets/img/marketshop.png';
import portfolio from '../assets/img/portfolio.png';
import hallowen from '../assets/img/hallowen.png';
import dashboard from '../assets/img/dashboard.png';
import tiendaimport from '../assets/img/tiendaimport.png';



export const Works = () => {
  return (
    <div id="Works" className='p-8 xl:p-10  nx'>
      <div className='mb-8'>
        <h1 className='text-[14px] font-black'>ALGUNAS WEBS CREADAS POR NOSOTROS:</h1>
      </div>
    
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-2'>
          <a href="https://halloweenstorejdv.netlify.app/" target='blank'><img src={hallowen} className='w-full h-[500px] object-cover rounded-3xl' /></a>
          <h3 className='text-1xl font-bold'>HALLOWEN</h3>
          <span className='text-gray-500'>Un sitio web realizado con las ultimas tecnologias.
          </span>
        </div>

        <div className='grid gid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col gap-1'>
            <a href="https://nazatarchini.netlify.app/" target='blank'><img src={portfolio} className='w-full object-cover  rounded-3xl' /></a>
            <p className='text-gray-500'>Diseño web</p>
            <h3 className='text-[17px] font-bold'>Portfolio Personal completo con Galeria Multimedia</h3>
          </div>

          <div className='flex flex-col gap-1'>
            <a href="https://simpledashboardjd.netlify.app/" target='blank'><img src={dashboard} className='w-full object-cover rounded-3xl' /></a>
            <p className='text-gray-500'>Diseño web</p>
            <h3 className='text-[17px]  font-bold'>Dashboard realizado con las ultimas tecnologias </h3>
          </div>

          <div className='flex flex-col gap-1'>
            <a href="https://ntarchini99.github.io/3D-MARKETSHOP/" target='blank'><img src={market} className='w-full object-cover rounded-3xl' /></a>
            <p className='text-gray-500'>Diseño web</p>
            <h3 className='text-[17px]  font-bold'>Un catalogo online realizado con las ultimas tecnologias</h3>
          </div>

          <div className='flex flex-col gap-1'>
            <a href="https://shoplinee.netlify.app/" target='blank'><img src={tiendaimport} className='w-full  object-cover rounded-3xl' /></a>
            <p className='text-gray-500'>Diseño web</p>
            <h3 className='text-[17px]  font-bold'>Tienda online con base de datos Firebase para recibir las compras</h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Works;