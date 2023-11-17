// ContactForm.jsx
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    headingEmail: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Datos del formulario enviados:', formData);
  };

  return (
    <section id="Form" className="contact">
      <h2 className="heading-form">Contactanos</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            id="name"
            type="text"
            placeholder="Nombre"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            id="phone"
            type="number"
            placeholder="Numero de Celular"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            id="headingEmail"
            type="text"
            placeholder="Asunto"
            required
            value={formData.headingEmail}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Mensaje"
          autoComplete="off"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Enviar" className="btn-form" />
      </form>
    </section>
  );
};

export default Form;
