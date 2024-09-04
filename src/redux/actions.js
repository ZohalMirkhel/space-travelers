import axios from 'axios';

// Action Types
export const FETCH_ROCKETS_REQUEST = 'FETCH_ROCKETS_REQUEST';
export const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
export const FETCH_ROCKETS_FAILURE = 'FETCH_ROCKETS_FAILURE';
export const RESERVE_ROCKET = 'RESERVE_ROCKET';
export const CANCEL_ROCKET = 'CANCEL_ROCKET';

// Action Creators
export const fetchRocketsRequest = () => ({ type: FETCH_ROCKETS_REQUEST });
export const fetchRocketsSuccess = (rockets) => ({ type: FETCH_ROCKETS_SUCCESS, payload: rockets });
export const fetchRocketsFailure = (error) => ({ type: FETCH_ROCKETS_FAILURE, payload: error });

export const reserveRocket = (id) => ({ type: RESERVE_ROCKET, payload: id });
export const cancelRocket = (id) => ({ type: CANCEL_ROCKET, payload: id });

// Async Action Creator for Fetching Rockets
export const fetchRockets = () => {
  return async (dispatch) => {
    dispatch(fetchRocketsRequest());
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/rockets');
      dispatch(fetchRocketsSuccess(response.data));
    } catch (error) {
      dispatch(fetchRocketsFailure('Failed to fetch rockets data.'));
    }
  };
};
