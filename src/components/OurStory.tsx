import React from 'react';

interface OurStoryProps {
  story: string;
  proposalStory: string;
  image: string;
}

const OurStory: React.FC<OurStoryProps> = ({ image }) => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-lg mx-auto">
        
        <div className="bg-gold/5 border border-gold/20 p-6 rounded-lg text-2xl mb-6">
          {/* <h3 className="text-xl text-gold mb-4 text-center">The Proposal</h3> */}
          <p className="text-white text-center rouge-script-regular leading-none">"No me ruegues que te deje<br/> y que me aparte de ti; porque <br/> a donde quiera que tú vayas, yo iré;<br/> y dondequiera que tú vivas,<br/> yo viviré. Tu pueblo será mi pueblo <br/>y tu Dios será mi Dios.."</p>
          <p className="text-slate-400 text-center rouge-script-regular mt-6 leading-none">Rut 1:16</p>
        </div>
        
        <div className="mb-10 overflow-hidden rounded-lg opacity-70">
          <img 
            src={image} 
            alt="Couple's photo" 
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="text-xl font-serif">
          <p className="text-white text-center text-balance">
            ¡Nos casamos y nos hace mucha ilusión que estés con nosotros!
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurStory;