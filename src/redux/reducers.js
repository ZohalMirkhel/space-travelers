import { FETCH_ROCKETS_SUCCESS, RESERVE_ROCKET, CANCEL_RESERVATION, SET_RESERVED_ROCKETS } from './actions';

const initialState = {
  rockets: [],
  reservedRockets: []
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        rockets: action.payload
      };
    case RESERVE_ROCKET:
      return {
        ...state,
        reservedRockets: [...state.reservedRockets, action.payload]
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        reservedRockets: state.reservedRockets.filter(rocket => rocket.id !== action.payload)
      };
    case SET_RESERVED_ROCKETS:
      return {
        ...state,
        reservedRockets: action.payload
      };
    default:
      return state;
  }
};

export default rocketReducer;
