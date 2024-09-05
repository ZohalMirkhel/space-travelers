import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rocketReducer from './reducers';

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

const store = createStore(
  rocketReducer,
  loadState(),
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
