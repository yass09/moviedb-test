/* eslint-disable import/prefer-default-export */
import { TOGGLE_FAVOURITES } from './actionsTypes';

export const toggleFavourite = movie => ({
	type: TOGGLE_FAVOURITES,
	movie,
});
