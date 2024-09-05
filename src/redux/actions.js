import axios from 'axios';

export const FETCH_ROCKETS_REQUEST = 'FETCH_ROCKETS_REQUEST';
export const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
export const FETCH_ROCKETS_FAILURE = 'FETCH_ROCKETS_FAILURE';
export const RESERVE_ROCKET = 'RESERVE_ROCKET';
export const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

export const fetchRockets = () => async (dispatch) => {
  dispatch({ type: FETCH_ROCKETS_REQUEST });

  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    const validRockets = response.data.filter(rocket => rocket && rocket.id);
    dispatch({ type: FETCH_ROCKETS_SUCCESS, payload: validRockets });
  } catch (error) {
    dispatch({ type: FETCH_ROCKETS_FAILURE, payload: error.message });
  } 
};

export const reserveRocket = (rocketId) => {
  return (dispatch, getState) => {
    const state = getState();
    const reservedRockets = state.reservedRockets || [];
    const isAlreadyReserved = reservedRockets.some((rocket) => rocket.id === rocketId);

    if (isAlreadyReserved) {
      dispatch(cancelReservation(rocketId));
    } else {
      dispatch({
        type: RESERVE_ROCKET,
        payload: { id: rocketId }
      });

      const updatedRockets = [...reservedRockets, { id: rocketId }];
      localStorage.setItem('reservedRockets', JSON.stringify(updatedRockets));
    }
  };
};

export const cancelReservation = (rocketId) => {
  return (dispatch, getState) => {
    const state = getState();
    const reservedRockets = state.reservedRockets || [];

    const updatedRockets = reservedRockets.filter(rocket => rocket.id !== rocketId);
    localStorage.setItem('reservedRockets', JSON.stringify(updatedRockets));

    dispatch({
      type: CANCEL_RESERVATION,
      payload: rocketId
    });
  };
};
