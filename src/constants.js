/* eslint-disable import/prefer-default-export */

export const payload = {
	method: 'GET',
	mode: 'cors',
};

const BASE_URL = 'https://api.themoviedb.org/3/';
const MOVIE_LIST_PATH = 'discover/movie?';
const MOVIE_DETAILS_URL = 'movie/';
const API_KEY = 'api_key=840b5fb3db4fb2e4324d0a9fe010ba01';
const LANGUAGE_PARAM = '&language=en-gb';
const PAGE_PARAM = '&page=';
const OTHER_PARAMS = '&include_adult=false&include_video=false';
const SORT_BY_POPULARITY = '&sort_by=popularity.desc';
const APPEND_RECOMMENDATIONS = '&append_to_response=recommendations';

/* Example request:
Movie list
https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
*/

// Movie List Url
export const getMovieListUrl = (pageNumber = 1) =>
	`${BASE_URL}${MOVIE_LIST_PATH}${API_KEY}${LANGUAGE_PARAM}${SORT_BY_POPULARITY}${OTHER_PARAMS}${PAGE_PARAM}${pageNumber}`;

// Movie details with recommendations example
// https://api.themoviedb.org/3/movie/475557?api_key=840b5fb3db4fb2e4324d0a9fe010ba01&language=en-US&page=1&append_to_response=recommendations

// Movie Details with Recommendations Url
export const getMovieDetailsUrl = id =>
	`${BASE_URL}${MOVIE_DETAILS_URL}${id}?${API_KEY}${LANGUAGE_PARAM}${PAGE_PARAM}1${APPEND_RECOMMENDATIONS}`;

// images Url:
export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
