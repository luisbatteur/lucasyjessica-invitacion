import React from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';

interface WeddingDetailsProps {
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
  dressCode: string;
}

const WeddingDetails: React.FC<WeddingDetailsProps> = ({
  date,
  time,
  venue,
  address,
  mapUrl,
}) => {
  return (
    <section className="py-16 px-6 bg-black bg-opacity-95 text-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/32073431/pexels-photo-32073431/free-photo-of-elegante-mesa-de-boda-con-centro-de-mesa-floral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-30 z-0"></div>
      <div className="max-w-md mx-auto relative z-10">
        <h2 className="text-5xl font-bold font-serif text-gold text-center mb-12">Ceremonia</h2>
        
        <div className="space-y-8">
          <div className="flex items-start justify-center">
            <div className='flex flex-col justify-center items-center'>
              <div className='flex items-center mb-1 justify-center'>
                <Calendar className="text-gold mr-1 flex-shrink-0" size={24} />
                <h3 className="text-lg text-gold">Fecha</h3>
              </div>
              <p className="text-white">{date}</p>
            </div>
          </div>
          
          <div className="flex items-start justify-center">
            <div className='flex flex-col justify-center items-center'>
               <div className='flex items-center mb-1 justify-center'>
                <Clock className="text-gold mr-1 flex-shrink-0" size={24} />
                <h3 className="text-lg text-gold mb-1">Hora</h3>
               </div>
              <p className="text-white">{time}</p>
            </div>
          </div>
          
          <div className="flex items-start justify-center">
            <div className='flex flex-col justify-center items-center'>
              <div className='flex items-center mb-1 justify-center'>
                <MapPin className="text-gold mr-1 flex-shrink-0" size={24} />
                <h3 className="text-lg text-gold mb-1">Lugar</h3>
              </div>
              <p className="text-white mb-1">{venue}</p>
              <p className="text-white text-sm mb-2">{address}</p>
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-sm bg-gold text-black mt-8 py-2 px-4 rounded transition-transform hover:scale-105"
              >
                Ver el mapa
              </a>
            </div>
          </div>
          
          <div className="flex items-start justify-center">
            <div>
              <img src="/images/codigodevestimenta.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;