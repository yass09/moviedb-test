import {
	LOAD_MOVIES,
	LOAD_MOVIES_SUCCESS,
	LOAD_MOVIES_ERROR,
} from './actionsTypes';

export const loadMovies = () => ({
	type: LOAD_MOVIES,
});

export const loadMoviesSuccess = movies => ({
	type: LOAD_MOVIES_SUCCESS,
	movies,
});

export const loadMoviesError = error => ({
	type: LOAD_MOVIES_ERROR,
	error,
});
