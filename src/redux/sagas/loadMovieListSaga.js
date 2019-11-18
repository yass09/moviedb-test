/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';

import { getData } from '../../helpers';
import { getMovieListUrl } from '../../constants';

import {
	loadMoviesSuccess,
	loadMoviesError,
} from '../actions/loadMoviesActions';

export function* loadMoviesWorker() {
	try {
		const data = yield call(() => getData(getMovieListUrl()));
		yield put(loadMoviesSuccess(data.results));
	} catch (e) {
		yield put(loadMoviesError(e));
		console.log('error', e);
	}
}
