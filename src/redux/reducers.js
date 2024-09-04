// reducers.js
import { RESERVE_ROCKET, CANCEL_RESERVATION } from './actions';

const initialState = {
  rockets: [],
  reservedRockets: [],
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_ROCKET:
      const reservedRocket = state.rockets.find(rocket => rocket.id === action.payload);
      return {
        ...state,
        reservedRockets: [...state.reservedRockets, reservedRocket],
        rockets: state.rockets.map(rocket =>
          rocket.id === action.payload ? { ...rocket, reserved: true } : rocket
        ),
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        reservedRockets: state.reservedRockets.filter(rocket => rocket.id !== action.payload),
        rockets: state.rockets.map(rocket =>
          rocket.id === action.payload ? { ...rocket, reserved: false } : rocket
        ),
      };
    default:
      return state;
  }
};

export default rocketReducer;
