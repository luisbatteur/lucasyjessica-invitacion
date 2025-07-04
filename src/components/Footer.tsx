import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  brideFirstName: string;
  groomFirstName: string;
}

const Footer: React.FC<FooterProps> = ({ brideFirstName, groomFirstName }) => {
  return (
    <footer className="py-12 px-6 bg-black text-center text-white">
      <div className="mb-6">
        <div className="inline-flex items-center">
          <span className="inline-block w-8 h-[1px] bg-gold"></span>
          <Heart className="mx-2 text-gold" size={18} />
          <span className="inline-block w-8 h-[1px] bg-gold"></span>
        </div>
      </div>
      
      <p className="font-serif text-xl text-gold mb-1">{groomFirstName} & {brideFirstName}</p>
      <p className="text-xs text-gold/60">
        Un Amor unido por la Voluntad de Dios.
      </p>
      
    </footer>
  );
};

export default Footer;