import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './reducers';

const store = createStore(missionsReducer, applyMiddleware(thunk));

export default store;
