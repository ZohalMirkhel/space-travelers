import React from 'react';

const RocketItem = ({ rocket, onReserve, onCancel }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="md:w-1/3">
        <img 
          src={rocket.image} 
          alt={rocket.name} 
          className="w-full h-48 object-cover"
        />
      </div>


export default RocketItem;
