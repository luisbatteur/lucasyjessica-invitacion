import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import WeddingDetails from './components/WeddingDetails';
import RSVP from './components/RSVP';
import OurStory from './components/OurStory';
import Footer from './components/Footer';

// Sample wedding data
const weddingData = {
  bride: {
    firstName: "Jessica",
    lastName: "León"
  },
  groom: {
    firstName: "Lucas",
    lastName: "Manrique"
  },
  date: "Sábado 9 de Agosto 2025",
  time: "13:00 H",
  venue: "TDV Madrid",
  address: "Calle de Pedro Villar, 2",
  mapUrl: "https://maps.app.goo.gl/1yn7v5n7hWsvKhwf9",
  dressCode: "Preferiblemente tonos oscuros. Ellos y ellas. No usaran ni rosa, ni blanco, ni rojo, ni dorado",
  rsvpDeadline: "May 1, 2025",
  audioSrc: "/music/jvke-golden-hour.mp3", // Replace with actual music URL
  targetDate: "2025-08-09T13:00:00",
  story: "Acompáñanos a celebrar este día tan especial para nuestras vidas. Nos encantaría contar con vuestra presencia y poder estar rodeados de nuestros seres queridos",
  proposalStory: "No me ruegues que te deje y que me aparte de ti; porque a donde quiera que tú vayas, yo iré; y dondequiera que tú vivas, yo viviré. Tu pueblo será mi pueblo y tu Dios será mi Dios..",
  galleryImages: [
    { src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg", alt: "Couple photo 1" },
    { src: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg", alt: "Couple photo 2" },
    { src: "https://images.pexels.com/photos/1034843/pexels-photo-1034843.jpeg", alt: "Couple photo 3" },
    { src: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg", alt: "Couple photo 4" },
    { src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg", alt: "Couple photo 5" },
    { src: "https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg", alt: "Couple photo 6" },
  ],
  hashtag: "BodaDeLucas&Jessica"
};

function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Header 
        brideFirstName={weddingData.bride.firstName}
        brideLastName={weddingData.bride.lastName}
        groomFirstName={weddingData.groom.firstName}
        groomLastName={weddingData.groom.lastName}
        date={weddingData.date}
        audioSrc={weddingData.audioSrc}
      />
      
      <OurStory 
        story={weddingData.story}
        proposalStory={weddingData.proposalStory}
        image="https://images.pexels.com/photos/1731824/pexels-photo-1731824.jpeg"
      />
      
      <WeddingDetails 
        date={weddingData.date}
        time={weddingData.time}
        venue={weddingData.venue}
        address={weddingData.address}
        mapUrl={weddingData.mapUrl}
        dressCode={weddingData.dressCode}
      />
      
      {/* <Gallery images={weddingData.galleryImages} /> */}
      
      <RSVP />
      
      <Countdown targetDate={weddingData.targetDate} />

      <Footer 
        brideFirstName={weddingData.bride.firstName}
        groomFirstName={weddingData.groom.firstName}
        hashtag={weddingData.hashtag}
      />
    </div>
  );
}

export default App;