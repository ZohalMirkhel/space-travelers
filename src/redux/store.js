import { configureStore } from '@reduxjs/toolkit';
import Reducer from './reducers';

const store = configureStore({
  reducer: {
    missions: Reducer,
  },
});

export default store;
