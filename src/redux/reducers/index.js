import { combineReducers } from 'redux';

import loadMoviesReducer from './loadMoviesReducer';
import selectMovieReducer from './selectMovieReducer';
import toggleFavouriteReducer from './toggleFavouriteReducer';

const rootReducer = combineReducers({
	movieList: loadMoviesReducer,
	selectedMovie: selectMovieReducer,
	favourites: toggleFavouriteReducer,
});

export default rootReducer;
