import {
  FETCH_ROCKETS_SUCCESS,
  SET_RESERVED_ROCKETS,
  RESERVE_ROCKET,
  CANCEL_RESERVATION,
} from './actions';

const initialState = {
  rockets: {
    allRockets: [],
    reservedRockets: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        rockets: {
          ...state.rockets,
          allRockets: action.payload,
        },
      };
    case SET_RESERVED_ROCKETS:
      return {
        ...state,
        rockets: {
          ...state.rockets,
          reservedRockets: action.payload,
        },
      };
    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: {
          ...state.rockets,
          reservedRockets: [...state.rockets.reservedRockets, { id: action.payload.id }],
        },
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        rockets: {
          ...state.rockets,
          reservedRockets: state.rockets.reservedRockets.filter(
            (rocket) => rocket.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default reducer;
