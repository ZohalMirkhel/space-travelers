import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/actions';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  const reservedRockets = useSelector(state => state.reservedRockets);

  if (!rocket || !rocket.id) {
    return null;
  }

  const isReserved = reservedRockets.some(r => r.id === rocket.id);

  const handleReserve = () => {
    if (isReserved) {
      dispatch(cancelReservation(rocket.id));
    } else {
      dispatch(reserveRocket(rocket.id));
    }
  };

  return (
    <div className="rocket-item">
      <h3>{rocket.name}</h3>
      <p>{rocket.description}</p>
      <button 
        className={`btn ${isReserved ? 'bg-red-500' : 'bg-green-500'}`} 
        onClick={handleReserve}
      >
        {isReserved ? 'Cancel Reservation' : 'Reserve'}
      </button>
      {isReserved && <span className="badge bg-blue-500">Reserved</span>}
    </div>
  );
};

export default RocketItem;
