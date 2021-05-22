import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    // albums: albumsReducer,
    // artists: artistsReducer,
    // playlist: playlistReducer,
    // tracks: trackReducer,
    albums: '',
    artists: '',
    playlist: '',
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;