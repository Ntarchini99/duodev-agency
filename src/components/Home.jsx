import React from 'react';
import logo from '../assets/img/md-dos.png';
import whatsapp from '../assets/img/whatsapp.png';

const Home = () => {
  return (
    <section className='min-h-screen flex-container'>
      <div id="Home" className='content-container'>
        <div className='text-center'>
          <h1 className='heading'>
            <span className='agency-name'>
              Agencia Digital Integral{' '}
            </span>
            <span className='tagline'>Tu éxito es con DuoDev</span>
          </h1>
          <p className='description'>
            Expertos en Desarrollo Web, Marketing Digital y Redes Sociales.
          </p>
        </div>
      </div>
      <div className='fixed-button'>
        <a
          href="https://wa.me/3484365436?text=Hola%20me%20contacto%20con%20ustedes%20para"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src={whatsapp} alt="WhatsApp" className="whatsapp-icon" />
        </a>
      </div>
      <div className='logo-container'>
        <img
          src={logo}
          className='logo'
          alt="Logo"
        />
      </div>
    </section>
  );
};

export default Home;
