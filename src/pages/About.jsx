import React, { useEffect } from 'react';
import { FaHome, FaSearch, FaMicrophone, FaUserGraduate, FaUsers } from 'react-icons/fa'; 

const About = () => {
  
  useEffect(() => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.classList.remove('translate-x-[-100%]');
      aboutSection.classList.add('translate-x-0');
      aboutSection.classList.add('opacity-100');
    }
  }, []);

  return (
<div 
  className="bg-cover bg-center relative mt-0 pt-0"
  style={{ backgroundImage: 'url("./ab.jpg")' }}
>


    
      <section 
        id="about-section" 
        className="opacity-0 transform translate-x-[-100%] transition-all duration-1000 ease-out z-10  flex justify-center items-center p-o m-0"
      >
        <div className="bg-black bg-opacity-60  rounded-3xl text-center max-w-4xl w-full">
          <h1 className="text-4xl font-semibold text-white mb-6">About Pata Keja</h1>
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white">
            Pata Keja is a platform designed to help students of Murang’a University and other residents find affordable and convenient rental housing. Our goal is to connect rental owners with students to ensure a seamless and efficient housing search experience.
          </p>
        </div>
      </section>


      <section className="mb-8 bg-opacity-50 bg-black text-white  relative">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6 px-6">
    
          <div className="p-6 border rounded-3xl shadow-lg bg-white text-gray-800 flex items-start">
            <FaHome className="text-3xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Affordable Rentals</h3>
              <p className="text-gray-600">
                We work with landlords to offer affordable rental prices for students, ensuring that everyone has access to safe and convenient housing.
              </p>
            </div>
          </div>

          
          <div className="p-6 border rounded-3xl shadow-lg bg-white text-gray-800 flex items-start">
            <FaSearch className="text-3xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Convenient Search</h3>
              <p className="text-gray-600">
                Our platform features advanced search and filter options that make it easy to find the perfect rental that fits your needs and budget.
              </p>
            </div>
          </div>

          
          <div className="p-6 border rounded-3xl shadow-lg bg-white text-gray-800 flex items-start">
            <FaMicrophone className="text-3xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Voice Search</h3>
              <p className="text-gray-600">
                Use our voice search feature for a hands-free, easy way to search for rental properties—simply speak, and we’ll find the listings for you.
              </p>
            </div>
          </div>

          
          <div className="p-6 border rounded-3xl shadow-lg bg-white text-gray-800 flex items-start">
            <FaUserGraduate className="text-3xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Student-Focused</h3>
              <p className="text-gray-600">
                We understand the needs of students. Pata Keja is designed with students in mind, making the rental search experience tailored just for you.
              </p>
            </div>
          </div>

    
          <div className="p-6 border rounded-3xl shadow-lg bg-white text-gray-800 flex items-start">
            <FaUsers className="text-3xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Join the Pata Keja community through our support forum and group chats. Get advice, share experiences, and find the best rentals with the help of your peers.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="mt-0 mb-0 bg-slate-300 bg-opacity-80 z-20 py-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Our Team</h2>
        <div className="flex justify-end items-center space-x-6">
          <div className="text-left">
            <p className="text-black font-bold">Mel - Frontend Developer</p>
            <p className="text-black font-bold">Our Backend Team - Responsible for server-side functionality.</p>
          </div>
          <img src="./Team.jpg" alt="Our Team" className="w-64 h-64 rounded-full shadow-lg" />
        </div>
      </section>

  
      <div className="flex justify-center mb-8">

      </div>
    </div>
  );
};

export default About;
