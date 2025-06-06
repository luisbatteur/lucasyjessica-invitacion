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
    <section className="py-16 px-6 bg-black bg-opacity-95 text-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl md:text-3xl text-gold text-center mb-12">Ceremonia</h2>
        
        <div className="space-y-8">
          <div className="flex items-start">
            <Calendar className="text-gold mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg text-gold mb-1">Fecha</h3>
              <p className="text-white">{date}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="text-gold mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg text-gold mb-1">Hora</h3>
              <p className="text-white">{time}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="text-gold mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg text-gold mb-1">Lugar</h3>
              <p className="text-white mb-1">{venue}</p>
              <p className="text-white text-sm mb-2">{address}</p>
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-sm bg-gold text-black py-2 px-4 rounded transition-transform hover:scale-105"
              >
                Ver el mapa
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div>
              <img src="/images/codigodevestimenta.jpg" alt="" />
            </div>
          </div>

          <div className="flex items-center w-full border border-dashed border-gray-400 rounded-xl p-2 bg-gold/10">
              <h3 className="text-lg text-center text-gold mb-1 w-full">Luvia de Sobres</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;