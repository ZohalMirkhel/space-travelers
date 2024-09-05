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
    dispatch({
      type: FETCH_ROCKETS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FETCH_ROCKETS_FAILURE,
      payload: error.message
    });
  }
};

export const reserveRocket = (rocketId) => ({
  type: RESERVE_ROCKET,
  payload: { id: rocketId }
});

export const cancelReservation = (rocketId) => ({
  type: CANCEL_RESERVATION,
  payload: rocketId
});
