import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('rocketState');
    if (serializedState === null) {
      return { rockets: [], reservedRockets: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state:', err);
    return { rockets: [], reservedRockets: [] };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('rocketState', serializedState);
  } catch (err) {
    console.error('Could not save state:', err);
  }
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
