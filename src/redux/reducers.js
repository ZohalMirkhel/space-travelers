import {
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_SUCCESS,
  FETCH_ROCKETS_FAILURE,
  RESERVE_ROCKET,
  CANCEL_RESERVATION
} from './actions';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
  reservedRockets: []
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        rockets: action.payload
      };
    case FETCH_ROCKETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
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
    default:
      return state;
  }
};

export default rocketReducer;
