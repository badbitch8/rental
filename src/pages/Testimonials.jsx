import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/testimonials') // Replace with actual backend URL
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-100 flex flex-col items-center  mt-0">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-gray-800 text-center mt-6 mb-4">
        What Our Users Say 💬
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl">
        Hear from satisfied renters and landlords who have found their perfect home with Pata Keja!
      </p>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
          >
            {/* Avatar Placeholder */}
            <div className="w-16 h-16 rounded-full bg-blue-200 text-blue-600 flex items-center justify-center text-xl font-bold mb-4">
              {testimonial.name[0]}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>

            {/* User Info */}
            <div className="mt-2">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-300 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
};

export default Testimonials;
