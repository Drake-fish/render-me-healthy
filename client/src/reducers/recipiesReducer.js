import { FETCH_RECIPIES, FETCH_SAVED_RECIPIES } from '../actions/types';

export default function(state = { recipies: null, saved: null }, action) {
	switch (action.type) {
		case FETCH_RECIPIES:
			return { ...state, recipies: action.payload };
		case FETCH_SAVED_RECIPIES:
			return { ...state, saved: action.payload };
		default:
			return state;
	}
}
