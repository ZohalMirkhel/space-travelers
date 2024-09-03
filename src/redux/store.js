import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './reducers';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
