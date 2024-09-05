import React from 'react';
import { useSelector } from 'react-redux';

const ProfileList = () => {
  const reservedRockets = useSelector(state => state.reservedRockets);
  const rockets = useSelector(state => state.rockets);

  if (reservedRockets.length === 0) {
    return <p>No rockets reserved</p>;
  }

  return (
    <div className="profile-list">
      {reservedRockets.map(reserved => {
        const rocket = rockets.find(r => r.id === reserved.id);
        return rocket ? (
          <div key={rocket.id} className="rocket-item p-4 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{rocket.name}</h2>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ProfileList;
