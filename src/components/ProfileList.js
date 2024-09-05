import React from 'react';
import { useSelector } from 'react-redux';

const ProfileList = () => {
  const reservedRockets = useSelector((state) => state.reservedRockets);

  // Add a check to handle null or undefined values
  if (!Array.isArray(reservedRockets)) {
    return <div>Error: Reserved rockets data is not available.</div>;
  }

  return (
    <div className="container mx-auto p-4 flex space-x-4">
      <div className="w-1/2 ml-auto">
        <table className="min-w-full table-auto border-separate border-spacing-0 border-2 border-black rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-2 text-base text-left" colSpan="2">
                Reserved Rockets
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-2 text-base text-left">Rocket Name</th>
              <th className="border border-gray-300 px-6 py-2 text-base text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {reservedRockets.length > 0 ? (
              reservedRockets.map((rocket, index) => (
                <tr key={rocket.id + index} className="bg-white">
                  <td className="border border-gray-300 px-6 py-2 text-base text-left">
                    {rocket.name}
                  </td>
                  <td className="border border-gray-300 px-6 py-2 text-sm text-left">
                    <span className="bg-[#5F9EA0] text-white px-3 py-1 rounded text-xs md:text-sm block max-w-full text-center">
                      Reserved
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="border border-gray-300 px-6 py-2 text-base text-left">
                  No rockets reserved.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileList;
