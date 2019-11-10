import {
	LOAD_MOVIES,
	LOAD_MOVIES_SUCCESS,
	LOAD_MOVIES_ERROR,
} from '../actions/actionsTypes';

const loadMovies = (state = [], action) => {
	switch (action.type) {
		case LOAD_MOVIES:
			return {
				...state,
				loading: true,
				error: null,
			};
		case LOAD_MOVIES_SUCCESS:
			return {
				...state,
				loading: false,
				movies: action.movies,
			};
		case LOAD_MOVIES_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default loadMovies;
