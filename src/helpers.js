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

export const getMovies = (pageNumber = 1) => {
	fetch(`${movieListUrl}${pageNumber}`)
		.then(response => response.json())
		.then(json => console.log(json));
};
