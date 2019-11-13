import {
	LOAD_MOVIE_DETAILS,
	LOAD_MOVIE_DETAILS_SUCCESS,
	LOAD_MOVIE_DETAILS_ERROR,
} from '../actions/actionsTypes';

const loadMoviesReducer = (state = {}, action) => {
	switch (action.type) {
		case LOAD_MOVIE_DETAILS:
			return {
				...state,
				loading: true,
				error: null,
			};
		case LOAD_MOVIE_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				movieDetails: action.movie,
				error: null,
			};
		case LOAD_MOVIE_DETAILS_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default loadMoviesReducer;
