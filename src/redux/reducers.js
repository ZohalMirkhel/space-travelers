import {
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_SUCCESS,
  FETCH_ROCKETS_FAILURE,
  RESERVE_ROCKET,
  CANCEL_ROCKET,
} from './actions';

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

// Reducer 
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        rockets: action.payload,
        loading: false,
      };
    case FETCH_ROCKETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESERVE_ROCKET: {
      const id = action.payload;
      return {
        ...state,
        rockets: state.rockets.map((rocket) =>
          rocket.id === id ? { ...rocket, reserved: true } : rocket
        ),
      };
    }
    case CANCEL_ROCKET: {
      const id = action.payload;
      return {
        ...state,
        rockets: state.rockets.map((rocket) =>
          rocket.id === id ? { ...rocket, reserved: false } : rocket
        ),
      };
    }
    default:
      return state;
  }
};

export default rocketsReducer;
