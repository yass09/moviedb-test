/* eslint-disable import/prefer-default-export */
import { all, takeEvery } from 'redux-saga/effects';

import { loadMoviesWorker } from './loadMovieListSaga';
import { loadSelectedMovieWorker } from './loadSelectedMovieSaga';
import { LOAD_MOVIES, LOAD_MOVIE_DETAILS } from '../actions/actionsTypes';

export function* rootSaga() {
	yield all([
		takeEvery(LOAD_MOVIES, loadMoviesWorker),
		takeEvery(LOAD_MOVIE_DETAILS, loadSelectedMovieWorker),
	]);
}
