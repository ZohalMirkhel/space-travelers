import React from 'react';
import { useSelector } from 'react-redux';

const ProfileList = () => {
  const reservedRockets = useSelector(state => state.reservedRockets);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Reserved Rockets</h2>
      {reservedRockets && reservedRockets.length > 0 ? (
        <table className="w-full border border-black">
          <thead>
            <tr>
              <th className="border border-black p-2">Name</th>
              <th className="border border-black p-2">Description</th>
              <th className="border border-black p-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {reservedRockets.map((rocket, index) => (
              <tr key={rocket.id + index}>
                <td className="border border-black p-2">{rocket.name}</td>
                <td className="border border-black p-2">{rocket.description}</td>
                <td className="border border-black p-2">
                  {rocket.flickr_images && rocket.flickr_images.length > 0 ? (
                    <img
                      src={rocket.flickr_images[0]}
                      alt={rocket.name}
                      className="w-32 h-auto"
                    />
                  ) : (
                    <span>No image available</span>
                  )}
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

export default ProfileList;
