import React from 'react';
import { Music, PauseCircle, PlayCircle } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

interface HeaderProps {
  brideFirstName: string;
  brideLastName: string;
  groomFirstName: string;
  groomLastName: string;
  date: string;
  audioSrc: string;
}

const Header: React.FC<HeaderProps> = ({
  brideFirstName,
  groomFirstName,
  audioSrc,
}) => {
  const { isPlaying, togglePlay } = useAudio(audioSrc);

  return (
    <header className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center p-6 bg-black bg-opacity-90 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('images/lucasyjessica.webp')] bg-cover bg-center opacity-30 z-0"></div>
      
      <div className="absolute top-4 right-4 z-20">
        <button 
          onClick={togglePlay}
          className="flex items-center text-gold hover:text-gold-light transition-colors duration-300"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <Music className="mr-1" size={16} />
          {isPlaying ? (
            <PauseCircle size={24} />
          ) : (
            <PlayCircle size={24} />
          )}
        </button>
      </div>

      <div className="relative z-10 animate-fadeIn">
        <h1 className="font-serif text-7xl md:text-5xl lg:text-6xl mb-2 tracking-wide">
          <span className="block mb-2">{groomFirstName}</span>
          <span className="inline-block w-8 h-[1px] bg-gold mx-2 align-middle"></span>
          <span>&</span>
          <span className="inline-block w-8 h-[1px] bg-gold mx-2 align-middle"></span>
          <span className="block mt-2">{brideFirstName}</span>
        </h1>
        
  

      </div>
        <div className="absolute bottom-6 left-auto transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-scrollDown"></div>
          </div>
        </div>
    </header>
  );
};

export default Header;