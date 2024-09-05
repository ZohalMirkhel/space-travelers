import {
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_SUCCESS,
  FETCH_ROCKETS_FAILURE,
  RESERVE_ROCKET,
  CANCEL_RESERVATION
} from './actions';

const initialState = {
  rockets: [],
  reservedRockets: JSON.parse(localStorage.getItem('reservedRockets')) || [],
  loading: false,
  error: null
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_REQUEST:
      return { ...state, loading: true };
    case FETCH_ROCKETS_SUCCESS:
      return { ...state, loading: false, rockets: action.payload };
    case FETCH_ROCKETS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case RESERVE_ROCKET:
      const reservedRocketsAfterReserve = [...state.reservedRockets, { id: action.payload.id }];
      localStorage.setItem('reservedRockets', JSON.stringify(reservedRocketsAfterReserve));
      return {
        ...state,
        reservedRockets: reservedRocketsAfterReserve
      };
    case CANCEL_RESERVATION:
      const reservedRocketsAfterCancel = state.reservedRockets.filter(
        rocket => rocket.id !== action.payload
      );
      localStorage.setItem('reservedRockets', JSON.stringify(reservedRocketsAfterCancel));
      return {
        ...state,
        reservedRockets: reservedRocketsAfterCancel
      };
    default:
      return state;
  }
};

export default rocketReducer;
