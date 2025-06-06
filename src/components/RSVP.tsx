import React, { useState } from 'react';

const RSVP: React.FC = () => {
  const [status, setStatus] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      setStatus('Gracias por confirmar tu asistencia.');
      e.target.reset();
    } else {
      setStatus('Hubo un error al enviar tu confirmación. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <section id="rsvp" className="py-16 px-6 bg-black">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-gold text-center mb-2 text-balance">Gracias por ser parte de nuestra historia de amor.</h2>
        <p className="text-gray-400 text-center mb-8 text-balance border border-dashed border-gray-400 rounded-xl p-5">Agradecemos que nos confirmes tu asistencia antes del 20 de Julio.</p>
        
          <form onSubmit={handleSubmit} className="space-y-6">

            <input type='hidden' name='access_key' value='a793fa18-6b48-4678-8acf-7207fa252ea4'></input>

            <div>
              <label htmlFor="name" className="block text-gold mb-1">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border border-gold/50 focus:border-gold rounded p-3 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gold mb-1">Correo</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border border-gold/50 focus:border-gold rounded p-3 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gold mb-1">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-transparent border border-gold/50 focus:border-gold rounded p-3 text-white"
              />
            </div>

              <div>
                <label htmlFor="guests" className="block text-gold mb-1">Numero de Compañantes</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="0"
                  max="5"
                  className="w-full bg-transparent border border-gold/50 focus:border-gold rounded p-3 text-white"
                />
              </div>
          
            
            <div>
              <label htmlFor="message" className="block text-gold mb-1">Algún comentario o sugerencia</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full bg-transparent border border-gold/50 focus:border-gold rounded p-3 text-white resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gold hover:bg-gold-dark text-black font-medium py-3 px-4 rounded transition-colors duration-300 disabled:opacity-70"
            >
              Envíar Confirmación
            </button>
            {status && (
              <p className="text-center text-white mt-4">{status}</p>
            )}
          </form>
      </div>
    </section>
  );
};

export default RSVP;