/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';

import { getData } from '../../helpers';
import { getMovieDetailsUrl } from '../../constants';

import {
	loadMovieDetailsSuccess,
	loadMovieDetailsError,
} from '../actions/movieDetailsActions';

export function* loadSelectedMovieWorker(action) {
	const url = getMovieDetailsUrl(action.id);
	try {
		const data = yield call(() => getData(url));
		yield put(loadMovieDetailsSuccess(data));
	} catch (e) {
		yield put(loadMovieDetailsError(e));
		console.log('error', e);
	}
}
