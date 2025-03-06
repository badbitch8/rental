import React, { useState } from 'react';

const Contact = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Your message has been sent!');
    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="relative min-h-full pt-0 mt-0">

      
      <section className="min-h-screen bg-cover bg-center relative text-center text-white py-12" style={{backgroundImage: "url('contact.jpg')"}}>
      
        <div className="absolute inset-0 bg-black opacity-60"></div>

        
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
          <p className="text-lg mb-4">We'd love to hear from you! Reach out with any questions, concerns, or feedback.</p>
        </div>
      </section>
      
      <section>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="bg-black bg-opacity-60 p-8 rounded-xl max-w-md w-full">
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-3 rounded-lg bg-white text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-3 rounded-lg bg-white text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 rounded-lg bg-white text-black"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

  
      <section className="bg-gray-800 text-white py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Contact Information</h2>
        <div className="flex justify-center gap-12">
          <div className="text-center">
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-lg">support@pataKeja.com</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="text-lg">+254 796491859</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Location</h3>
            <p className="text-lg">Murang'a University, Murang'a, Kenya</p>
          </div>
        </div>
      </section>


      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Find Us on the Map</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63325.53534911691!2d36.8706165!3d-0.7476746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1837745d4ac6ed8f%3A0x31a52e431d1086d9!2sMurang&#39;a%20University%20of%20Technology!5e0!3m2!1sen!2ske!4v1636346356650!5m2!1sen!2ske"
            width="600" 
            height="450" 
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            title="Murang'a University Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
