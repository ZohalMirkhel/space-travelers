import React from 'react';

const Profile = ({ user, reservedRockets }) => {
  return (
    <div className="profile-container mx-auto p-6 max-w-4xl bg-white shadow-md rounded-lg">
      <div className="profile-header flex items-center mb-6">
        <img 
          src={user.profilePicture || 'https://via.placeholder.com/150'} 
          alt="Profile" 
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-semibold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="reserved-rockets">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reserved Rockets</h2>
        {reservedRockets.length > 0 ? (
          <ul className="list-disc pl-5">
            {reservedRockets.map((rocket) => (
              <li key={rocket.id} className="mb-2">
                <div className="flex items-center">
                  <img 
                    src={rocket.image} 
                    alt={rocket.name} 
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">{rocket.name}</h3>
                    <p className="text-gray-600">{rocket.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No rockets reserved.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
