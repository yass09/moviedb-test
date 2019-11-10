/* eslint-disable import/prefer-default-export */

/* Example request: 
Movie list
https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

Movie details with recommendations
https://api.themoviedb.org/3/movie/475557?api_key=840b5fb3db4fb2e4324d0a9fe010ba01&language=en-US&page=1&append_to_response=recommendations

Movie recommendations only
https://api.themoviedb.org/3/movie/475557/recommendations?api_key=840b5fb3db4fb2e4324d0a9fe010ba01&language=en-US
*/

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const MOVIES_URL = 'discover/movie?';
export const API_KEY = 'api_key=840b5fb3db4fb2e4324d0a9fe010ba01';
export const API_TOKEN =
	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDBiNWZiM2RiNGZiMmU0MzI0ZDBhOWZlMDEwYmEwMSIsInN1YiI6IjViYjIyYjhmYzNhMzY4MTQwODAxZDJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Id1sStNWqVYQIuCxHXX7oUMrnnhGZnt93AI6uRo5jvg';
export const LANGUAGE_PARAM = '&language=en-gb';
export const PAGE_PARAM = '&page=';
export const OTHER_PARAMS = '&include_adult=false&include_video=false';
export const SORT_BY_POPULARITY = '&sort_by=popularity.desc';

// images Url:
export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
