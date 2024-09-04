import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rocketReducer from './reducers'; // Ensure this path is correct

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reservedRockets');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reservedRockets', serializedState);
  } catch (err) {
  }
};

const store = createStore(
  rocketReducer,
  {
    reservedRockets: loadState() || [],
  },
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState().reservedRockets);
});

export default store;
