import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rocketReducer from './reducers';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    : null || compose;

const store = createStore(
  rocketReducer,
  composeEnhancers ? composeEnhancers(applyMiddleware(thunk)) : applyMiddleware(thunk)
);

export default store;
