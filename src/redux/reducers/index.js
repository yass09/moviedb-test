import { combineReducers } from 'redux';

import loadMoviesReducer from './loadMoviesReducer';

const rootReducer = combineReducers({ loadMoviesReducer });

export default rootReducer;
