import { CHANGE_DAY, FETCH_MENU } from '../actions/types';

export default function(state = { day: null, menu: null }, action) {
	switch (action.type) {
		case CHANGE_DAY:
			return { ...state, day: action.payload };
		case FETCH_MENU:
			return { ...state, menu: action.payload };
		default:
			return state;
	}
}
