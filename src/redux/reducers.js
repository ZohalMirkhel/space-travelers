import { combineReducers } from 'redux';

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ROCKETS':
      return action.payload;
    case 'RESERVE_ROCKET':
      return state.map(rocket =>
        rocket.id === action.payload ? { ...rocket, reserved: true } : rocket
      );
    case 'CANCEL_RESERVATION':
      return state.map(rocket =>
        rocket.id === action.payload ? { ...rocket, reserved: false } : rocket
      );
    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return true;
    case 'SET_ROCKETS':
    case 'SET_ERROR':
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.payload;
    case 'SET_ROCKETS':
    case 'SET_LOADING':
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;
