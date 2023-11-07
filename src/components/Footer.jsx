import React from 'react';

const Footer = () => {
  return <footer className='bg-gray-700 p-4 xl:p-4 ' >
    <div className='flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-4'>
      <div className='w-1/6 '>
      </div>
      <nav className='flex  items-center gap-4'>
        <a href='https://www.instagram.com/duodevs_/' target='blank' className=' block  text-white p-4 bg-purple-500 rounded-full hover:bg-purple-400 transition-colors'>
          {""}<i className="fa-brands fa-instagram"></i>{""}
        </a>
        <a href='https://www.facebook.com/jonnadev89' target='blank' className=' block  text-white p-4 bg-purple-500 rounded-full hover:bg-purple-400 transition-colors'>
          {""}<i className="fa-brands fa-facebook"></i>{""}
        </a>


      </nav>
    </div>
    <div className='mt-20'>
      <p className='text-gray-300 text-center'> &copy; DuoDev - Derechos reservados 2023</p>
    </div>
  </footer>

}

export default Footer;