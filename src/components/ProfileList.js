import React from 'react';
import { useSelector } from 'react-redux';

const ProfileList = () => {
  const reservedRockets = useSelector(state => state.reservedRockets);

  return (
    <div>
      <h1>My Reserved Rockets</h1>
      {reservedRockets && reservedRockets.length > 0 ? (
        reservedRockets.map(rocket => (
          rocket && rocket.id ? (
            <div key={rocket.id}>
              <p>Rocket ID: {rocket.id}</p>
            </div>
          ) : null
        ))
      ) : (
        <p>No reserved rockets.</p>
      )}
    </div>
  );
};

export default ProfileList;
