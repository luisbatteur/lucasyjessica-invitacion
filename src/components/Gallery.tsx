import React from 'react';

interface GalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className="py-16 px-6 bg-black">
      <h2 className="text-2xl md:text-3xl text-gold text-center mb-8">Nuestros Momentos</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-square overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg"
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;