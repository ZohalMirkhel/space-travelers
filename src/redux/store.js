import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reservedRockets');
    if (serializedState === null) {
      return undefined;
    }
    return { rockets: { reservedRockets: JSON.parse(serializedState) } };
  } catch (err) {
    return undefined;
  }
};

store.subscribe(() => {
  try {
    const state = store.getState();
    const serializedState = JSON.stringify(state.rockets.reservedRockets);
    localStorage.setItem('reservedRockets', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
});

const preloadedState = loadState();
const storeWithPreloadedState = configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default storeWithPreloadedState;
