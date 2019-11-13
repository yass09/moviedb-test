/* eslint-disable import/prefer-default-export */
import {
	LOAD_MOVIE_DETAILS,
	LOAD_MOVIE_DETAILS_SUCCESS,
	LOAD_MOVIE_DETAILS_ERROR,
} from './actionsTypes';

export const loadMovieDetails = id => ({
	type: LOAD_MOVIE_DETAILS,
	id,
});

export const loadMovieDetailsSuccess = movie => ({
	type: LOAD_MOVIE_DETAILS_SUCCESS,
	movie,
});

export const loadMovieDetailsError = error => ({
	type: LOAD_MOVIE_DETAILS_ERROR,
	error,
});
