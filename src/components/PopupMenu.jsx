import React from 'react';
import { Link } from 'react-router-dom';

const PopupMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 ${isOpen ? 'flex' : 'hidden'} justify-center items-center`}>
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <button onClick={toggleMenu} className="absolute top-2 right-2 text-xl">✖</button>
        <ul className="flex flex-col space-y-4">
          <li>
            <Link to="/" className="hover:text-blue-500" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500" onClick={toggleMenu}>About Us</Link>
          </li>
          <li>
            <Link to="/rentals" className="hover:text-blue-500" onClick={toggleMenu}>Rentals</Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:text-blue-500" onClick={toggleMenu}>Testimonials</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500" onClick={toggleMenu}>Contact</Link>
          </li>
          <li>
            <Link to="/more" className="hover:text-blue-500" onClick={toggleMenu}>More</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopupMenu;
