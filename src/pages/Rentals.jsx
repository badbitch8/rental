import React, { useState, useEffect } from "react";
import axios from "axios";

const Rentals = () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/rentals");
        setRentals(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rentals:", error);
        setLoading(false);
      }
    };

    fetchRentals();
  }, []);

  const filteredRentals = rentals.filter((rental) => {
    return (
      (selectedPrice === "" || rental.price <= selectedPrice) &&
      (selectedLocation === "" || rental.location.includes(selectedLocation)) &&
      (selectedType === "" || rental.type === selectedType)
    );
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">
        Available Rentals in Murang'a
      </h1>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center bg-blue-100 p-4 rounded-lg shadow-md">
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="border p-2 rounded-md bg-white"
        >
          <option value="">Filter by Price</option>
          <option value="5000">Up to 5,000 Ksh</option>
          <option value="10000">Up to 10,000 Ksh</option>
          <option value="20000">Up to 20,000 Ksh</option>
        </select>

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="border p-2 rounded-md bg-white"
        >
          <option value="">Filter by Location</option>
          <option value="Mumbi">Mumbi</option>
          <option value="Mukuyu">Mukuyu</option>
          <option value="Kiharu">Kiharu</option>
          <option value="Maragua">Maragua</option>
          <option value="Kangema">Kangema</option>
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border p-2 rounded-md bg-white"
        >
          <option value="">Filter by House Type</option>
          <option value="Bedsitter">Bedsitter</option>
          <option value="One-bedroom">One-bedroom</option>
          <option value="Two-bedroom">Two-bedroom</option>
          <option value="Mansion">Mansion</option>
        </select>
      </div>

      {/* Rentals Display */}
      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading rentals...</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {filteredRentals.length > 0 ? (
            filteredRentals.map((rental) => (
              <div
                key={rental._id}
                className="bg-white p-4 shadow-md rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={rental.imageUrl}
                  alt={rental.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold mt-3">{rental.name}</h2>
                <p className="text-gray-500">{rental.location}</p>
                <p className="text-blue-600 font-bold text-lg">Ksh {rental.price}</p>
                <p className="text-gray-700 mt-2">{rental.description}</p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Contact Owner
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No rentals available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Rentals;
