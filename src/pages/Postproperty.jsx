import { useState } from 'react';
import axios from 'axios';

function PostProperty() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await axios.post('http://localhost:5000/api/add-property', {
        title,
        description,
        price,
        location,
      });
      console.log('Property added:', response.data);
      setMessage('Property added successfully!');
      setTitle('');
      setDescription('');
      setPrice('');
      setLocation('');
    } catch (error) {
      console.error('Error adding property:', error);
      setMessage('Failed to add property. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-500 shadow-lg p-6 rounded-lg mt-10"> {/* Changed background to grey */}
      <h2 className="text-xl font-bold mb-4 text-center">Add a Property</h2>
      {message && <p className="text-center text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Price (Ksh)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Add Property
        </button>
      </form>
    </div>
  );
}

export default PostProperty;
