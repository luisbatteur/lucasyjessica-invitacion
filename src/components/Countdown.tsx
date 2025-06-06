import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="bg-black py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-serif text-gold mb-8">Cuenta regresiva para nuestro Día Especial</h2>
      
      <div className="flex justify-center gap-4 md:gap-8">
        <div className="flex flex-col items-center">
          <div className="w-16 md:w-24 h-16 md:h-24 bg-gold bg-opacity-10 border border-gold rounded-lg flex items-center justify-center mb-2">
            <span className="text-2xl md:text-4xl font-serif text-white">{timeLeft.days}</span>
          </div>
          <span className="text-xs md:text-sm text-gold uppercase tracking-wider">Días</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 md:w-24 h-16 md:h-24 bg-gold bg-opacity-10 border border-gold rounded-lg flex items-center justify-center mb-2">
            <span className="text-2xl md:text-4xl font-serif text-white">{timeLeft.hours}</span>
          </div>
          <span className="text-xs md:text-sm text-gold uppercase tracking-wider">Horas</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 md:w-24 h-16 md:h-24 bg-gold bg-opacity-10 border border-gold rounded-lg flex items-center justify-center mb-2">
            <span className="text-2xl md:text-4xl font-serif text-white">{timeLeft.minutes}</span>
          </div>
          <span className="text-xs md:text-sm text-gold uppercase tracking-wider">Minutos</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 md:w-24 h-16 md:h-24 bg-gold bg-opacity-10 border border-gold rounded-lg flex items-center justify-center mb-2">
            <span className="text-2xl md:text-4xl font-serif text-white">{timeLeft.seconds}</span>
          </div>
          <span className="text-xs md:text-sm text-gold uppercase tracking-wider">Segundos</span>
        </div>
      </div>
    </section>
  );
};

export default Countdown;