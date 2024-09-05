export const RESERVE_ROCKET = 'RESERVE_ROCKET';
export const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
export const SET_ROCKETS = 'SET_ROCKETS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const reserveRocket = (rocket) => ({
  type: RESERVE_ROCKET,
  payload: rocket,
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

export const setRockets = (rockets) => ({
  type: SET_ROCKETS,
  payload: rockets,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});