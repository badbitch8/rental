import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

const Home = () => {
  return (
    <div className="relative w-full -mt-16">
      <Slideshow />

      {/* Overlay with Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-5 bg-black bg-opacity-50">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
            Welcome to Pata Keja
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-shadow-lg">
            Your Trusted Rental Partner Near Murang’a University
          </p>

          {/* Link to Rentals Page */}
          <Link to="/rentals">

            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              Start Your Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
