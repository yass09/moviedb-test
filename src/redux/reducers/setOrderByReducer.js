import { SET_ORDER_BY } from '../actions/actionsTypes';

const setOrderByReducer = (state = '', action) => {
	switch (action.type) {
		case SET_ORDER_BY:
			return {
				...state,
				orderBy: action.order,
			};
		default:
			return state;
	}
};

export default setOrderByReducer;
