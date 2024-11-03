
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const PropertySearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, propertyType, maxPrice });
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setLocation(value);

  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion.formatted);
    setSuggestions([]);
  };

  return (
    
    <form onSubmit={handleSubmit} className="mb-10 relative ">
        <div className='flex justify-center'>
      <div className="flex gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleInputChange}
            className="border rounded px-4 py-4 w-full font-Nunito outline-blue text-blue"
          />
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border rounded shadow-md w-full z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-4 cursor-pointer text-gray-500"
                >
                  {suggestion.formatted}
                </li>
              ))}
            </ul>
          )}
        </div>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="border rounded px-4 py-4 text-gray-400 outline-blue"
        >
          <option value="" className='text-gray-500'>Property Type</option>
          <option value="Villa" className='text-gray-500'>Villa</option>
          <option value="Apartment" className='text-gray-500'>Apartment</option>
          <option value="House" className='text-gray-500'>House</option>
          <option value="Cottage" className='text-gray-500'>Cottage</option>
        </select>
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border rounded px-4 py-4 font-Nunito outline-blue text-blue"
        />
      </div>
      <button
        type="submit"
        className="ml-2 bg-blue text-white flex items-center px-6 py-4 rounded-md transition duration-300 hover:bg-blue font-Nunito font-semibold"
      >
        <FaSearch className="mr-2 text-white" />
        Search
      </button>
      </div>
    </form>
    
  );
};

export default PropertySearchBar;
