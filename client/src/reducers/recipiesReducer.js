import { FETCH_RECIPIES } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case FETCH_RECIPIES:
			return action.payload || false;
		default:
			return state;
	}
}
