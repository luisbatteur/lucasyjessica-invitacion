/* import React, { useState } from 'react'; */

const RSVP: React.FC = () => {
/*   const [status, setStatus] = useState('');
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
  }; */

  return (
    <section id="rsvp" className="py-16 px-6 bg-black">
      <div className="max-w-md mx-auto">
        <div className='flex justify-center mb-8'>
          <img src="images/Icono-rama.png" className='mix-blend-screen' />
        </div>
        <p className="text-xl text-white text-center text-balance p-5">Nuestro mejor regalo eres tú, pero si quieres tener un detalle</p>
        <div className="flex items-center w-full p-2">
          <h3 className="text-5xl text-center text-white w-full rouge-script-regular mb-9">Luvia de Sobres o</h3>
        </div>

        <div className='bg-gold/5 border border-gold/20 p-6 rounded-lg mb-8'>
          <p className="text-gold text-center text-balance text-xl">ES00 0000 00000 0000 000</p>
          <div className='flex justify-center mb-8'>
            <img src="images/bizum-logo.png" className='w-44 mt-12' />
          </div>
          <p className="text-white text-center text-balance text-5xl rouge-script-regular">Lucas</p>
          <p className="text-gold text-center text-balance text-xl">+34 653 18 93 05</p>
          <p className="text-white text-center text-balance text-5xl mt-5 rouge-script-regular">Jessica</p>
          <p className="text-gold text-center text-balance text-xl">+34 651 53 23 90</p>

        </div>
        <h2 className="text-xl md:text-3xl text-slate-200 text-center mb-8 text-balance">Gracias por celebrar con nosotros este día tan especial.<br/> Agradecemos que nos confirmes tu asistencia antes del 15 de Julio.</h2>

        <a href="https://api.whatsapp.com/send?phone=34651532390&text=Hola%20Lucas,%20y%20Jessica%20me%20gustaría%20confirmar%20mi%20asistencia%20a%20la%20boda.%20Gracias!" target="_blank" rel="noopener noreferrer" className="block text-center bg-gold text-black font-bold py-3 px-6 rounded-lg mb-8 hover:bg-gold-light transition-colors">Confirma tu asistencia</a>
        
      </div>
    </section>
  );
};

export default RSVP;