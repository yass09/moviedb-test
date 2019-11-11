/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { call, put, takeEvery } from 'redux-saga/effects';

import { getMoviesHelper } from '../../helpers';

import {
	loadMoviesSuccess,
	loadMoviesError,
} from '../actions/loadMoviesActions';
import { LOAD_MOVIES } from '../actions/actionsTypes';

function* loadMoviesWorker() {
	try {
		const data = yield call(getMoviesHelper);
		yield put(loadMoviesSuccess(data.results));
	} catch (e) {
		yield put(loadMoviesError(e));
		console.log('error', e);
	}
}

export function* loadMoviesSaga() {
	yield takeEvery(LOAD_MOVIES, loadMoviesWorker);
}
