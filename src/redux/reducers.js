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
      return {
        ...state,
        loading: true
      };
    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        rockets: action.payload,
        loading: false
      };
    case FETCH_ROCKETS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case RESERVE_ROCKET:
      return {
        ...state,
        reservedRockets: [...state.reservedRockets, { id: action.payload.id }]
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
