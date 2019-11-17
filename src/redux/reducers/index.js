import { combineReducers } from 'redux';

import loadMoviesReducer from './loadMoviesReducer';
import selectMovieReducer from './selectMovieReducer';
import setOrderByReducer from './setOrderByReducer';
import toggleFavouriteReducer from './toggleFavouriteReducer';

const rootReducer = combineReducers({
	movieList: loadMoviesReducer,
	selectedMovie: selectMovieReducer,
	favourites: toggleFavouriteReducer,
	orderBy: setOrderByReducer,
});

export default rootReducer;
