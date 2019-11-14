import { TOGGLE_FAVOURITES } from '../actions/actionsTypes';

const toggleFavouriteReducer = (state = [], action) => {
	switch (action.type) {
		case TOGGLE_FAVOURITES:
			if (state.includes(action.movie)) {
				return state.filter(movie => movie !== action.movie);
			}
			return state.concat(action.movie);
		default:
			return state;
	}
};

export default toggleFavouriteReducer;
