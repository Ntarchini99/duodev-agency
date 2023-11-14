const Footer = () => {
  return (
    <footer className='bg-gray-700 p-4 xl:p-4'>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 border-b border-gray-500 pb-4'>
        <nav className='flex items-center gap-4 md:w-1/2 justify-center md:justify-start'>
          <a href='https://instagram.com/duodevagency?igshid=MzMyNGUyNmU2YQ==' target='blank' className='block text-white p-4 rounded-full'>
            {""}<i className="fa-brands fa-instagram"></i>{""}
          </a>
          <a href='mailto:duodevagency@gmail.com' target='blank' className='block text-white p-4 rounded-full'>
               <i className="fa-regular fa-envelope"></i>
          </a>

        </nav>
        <div className='md:w-1/2 text-center md:text-left'>
        </div>
      </div>
      <div className='mt-4 text-center'>
      <p className='text-gray-300 font-bold text-lg md:text-xl lg:text-xl xl:text-xl'>&copy; DuoDev - Derechos reservados 2023</p>
      </div>
    </footer>
  );
};

export default Footer;