import { combineReducers } from 'redux';

import loadMoviesReducer from './loadMoviesReducer';
import selectMovieReducer from './selectMovieReducer';

const rootReducer = combineReducers({
	movieList: loadMoviesReducer,
	selectedMovie: selectMovieReducer,
});

export default rootReducer;
