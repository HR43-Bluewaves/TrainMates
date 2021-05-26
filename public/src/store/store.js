import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import classesReducer from '../reducers/classesReducer';
import trainersReducer from '../reducers/trainersReducer';
import sessionReducer from '../reducers/sessionReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    userReducer,
    classesReducer,
    trainersReducer,
    sessionReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
