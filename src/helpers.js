/* eslint-disable import/prefer-default-export */
import {
	BASE_URL,
	MOVIES_URL,
	API_KEY,
	LANGUAGE_PARAM,
	SORT_BY_POPULARITY,
	PAGE_PARAM,
	OTHER_PARAMS,
} from './constants';

const movieListUrl = `${BASE_URL}${MOVIES_URL}${API_KEY}${LANGUAGE_PARAM}${SORT_BY_POPULARITY}${OTHER_PARAMS}${PAGE_PARAM}`;

export const getMoviesHelper = async (pageNumber = 1) => {
	try {
		const response = await fetch(`${movieListUrl}${pageNumber}`);
		const data = await response.json();
		return data;
	} catch (e) {
		throw Error(e);
	}
};
