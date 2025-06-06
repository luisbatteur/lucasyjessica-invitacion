import React from 'react';

interface OurStoryProps {
  story: string;
  proposalStory: string;
  image: string;
}

const OurStory: React.FC<OurStoryProps> = ({ story, proposalStory, image }) => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-lg mx-auto">
        {/* <h2 className="text-2xl md:text-3xl font-serif text-gold text-center mb-8">¡¡Nos Casamos!!</h2> */}
        
        <div className="bg-gold/5 border border-gold/20 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-serif text-gold mb-4 text-center">Acompáñanos</h3>
          <p className="text-white leading-relaxed">{story}</p>
        </div>
        
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt="Couple's photo" 
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="bg-gold/5 border border-gold/20 p-6 rounded-lg">
          {/* <h3 className="text-xl font-serif text-gold mb-4 text-center">The Proposal</h3> */}
          <p className="text-white leading-relaxed">{proposalStory}</p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;