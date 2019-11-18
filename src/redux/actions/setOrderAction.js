/* eslint-disable import/prefer-default-export */
import { SET_ORDER_BY } from './actionsTypes';

export const setOrderAction = order => ({
	type: SET_ORDER_BY,
	order,
});
