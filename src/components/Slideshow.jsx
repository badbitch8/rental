import { useState, useEffect } from 'react';

const images = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
  '/7.jpg',
  '/8.jpg',
  '/9.jpg',
  '/10.jpg',
  '/11.jpg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen">
      <img
        onError={(e) => {
          e.target.onerror = null; // Prevents looping
          e.target.src = '/path/to/placeholder-image.jpg'; // Placeholder image
        }}

        src={images[currentIndex]}
        alt="Slideshow"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-between items-center">
        <button onClick={prevImage} className="bg-white p-2 rounded-l">Previous</button>
        <button onClick={nextImage} className="bg-white p-2 rounded-r">Next</button>
      </div>
    </div>
  );
};

export default Slideshow;
