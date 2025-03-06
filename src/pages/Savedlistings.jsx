import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

const SavedListings = () => {
  // Sample saved listings
  const [savedListings, setSavedListings] = useState([
    {
      id: 1,
      title: "Spacious 2-Bedroom Apartment",
      price: "Ksh 15,000",
      location: "Murang’a Town",
      contact: "0723 456 789",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Affordable Bedsitter",
      price: "Ksh 7,000",
      location: "Kiharu, Murang’a",
      contact: "0712 345 678",
      image: "https://via.placeholder.com/150"
    }
  ]);

  // Function to remove a listing
  const removeListing = (id) => {
    setSavedListings(savedListings.filter(listing => listing.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Saved Listings</h1>
      {savedListings.length === 0 ? (
        <p className="text-gray-600">No saved listings yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedListings.map((listing) => (
            <div key={listing.id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h2 className="text-lg font-semibold">{listing.title}</h2>
              <p className="text-gray-600">{listing.location}</p>
              <p className="text-blue-500 font-bold">{listing.price}</p>
              <p className="text-gray-700">Contact: {listing.contact}</p>
              <div className="flex justify-between mt-3">
                <button 
                  className="text-red-500 hover:text-red-700 flex items-center"
                  onClick={() => removeListing(listing.id)}
                >
                  <Trash2 className="w-5 h-5 mr-1" /> Remove
                </button>
                <Link
                  to="/rentals"
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedListings;
