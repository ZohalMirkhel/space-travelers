import React from 'react';
import { useSelector } from 'react-redux';

const Profilelist = () => {
  const reservedRockets = useSelector(state => state.rockets.reservedRockets);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Reserved Rockets</h2>
      {reservedRockets.length > 0 ? (
        <table className="w-full border border-black">
          <thead>
            <tr>
              <th className="border border-black p-2">Name</th>
              <th className="border border-black p-2">Description</th>
              <th className="border border-black p-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {reservedRockets.map(rocket => (
              <tr key={rocket.id}>
                <td className="border border-black p-2">{rocket.name}</td>
                <td className="border border-black p-2">{rocket.description}</td>
                <td className="border border-black p-2">
                  <img src={rocket.flickr_images[0]} alt={rocket.name} className="w-32 h-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No rockets reserved.</div>
      )}
    </div>
  );
};

export default Profilelist;
