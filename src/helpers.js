/* eslint-disable import/prefer-default-export */
import { payload } from './constants';

export const getData = async url => {
	try {
		const response = await fetch(url, payload);
		const data = await response.json();
		return data;
	} catch (e) {
		throw Error(e);
	}
};
