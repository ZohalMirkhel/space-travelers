import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, setReservedRockets } from '../redux/actions';

const ProfileList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(state => state.rockets);
  const reservedRockets = useSelector(state => state.reservedRockets);

  useEffect(() => {
    dispatch(fetchRockets());
    const reservedFromLocalStorage = JSON.parse(localStorage.getItem('reservedRockets')) || [];
    if (Array.isArray(reservedFromLocalStorage)) {
      dispatch(setReservedRockets(reservedFromLocalStorage));
    }
  }, [dispatch]);

  const reservedRocketDetails = reservedRockets.map(reserved => {
    const rocket = rockets.find(rocket => rocket.id === reserved.id);
    return rocket ? rocket.name : null;
  }).filter(name => name);

  if (!reservedRocketDetails.length) {
    return <p>No rockets reserved</p>;
  }

  return (
    <div>
      {reservedRocketDetails.map((name, index) => (
        <div key={index} className="rocket-item">
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
