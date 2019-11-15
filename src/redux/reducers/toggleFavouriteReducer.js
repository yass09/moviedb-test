import { TOGGLE_FAVOURITES } from '../actions/actionsTypes';

const toggleFavouriteReducer = (state = [], action) => {
	switch (action.type) {
		case TOGGLE_FAVOURITES:
			if (state.some(m => m.id === action.movie.id)) {
				return state.filter(movie => movie.id !== action.movie.id);
			}
			return state.concat(action.movie);
		default:
			return state;
	}
};

export default toggleFavouriteReducer;
