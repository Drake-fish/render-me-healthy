import axios from 'axios';
import { FETCH_USER, FETCH_RECIPIES, CHANGE_DAY, FETCH_MENU } from './types';

//SAME THING ABOVE BELOW IS REFACTORED
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const changeDay = day => async dispatch => {
	console.log('day at reducer', day);
	dispatch({ type: CHANGE_DAY, payload: day });
};

export const createMenu = () => async dispatch => {
	await axios.post('api/menu/create');
};

export const assignDay = data => async dispatch => {
	await axios.post('/api/menu/update', data);
};

export const triggerRecipeSave = data => dispatch => {
	if (data.day > 6) {
		console.log('NOT ASSIGNING TO A DAY HERE: ', data.recipe);
		dispatch(saveRecipe(data.recipe));
		dispatch(this.fetchMenu());
		return;
	}
	console.log('ASSIGING TO A DAY HERE: ', data);
	dispatch(saveRecipe(data.recipe));
	dispatch(this.assignDay(data));
	dispatch(this.fetchMenu());
};

export const fetchMenu = () => async dispatch => {
	const res = await axios.get('/api/menu');
	dispatch({ type: FETCH_MENU, payload: res.data });
};

export const fetchRecipies = query => async dispatch => {
	const res = await axios.post('/recipies', query);
	dispatch({ type: FETCH_RECIPIES, payload: res.data });
};

export const saveRecipe = recipe => async dispatch => {
	await axios.post('/recipies/save', recipe);
};

// export const handleToken = token => async dispatch => {
// 	const res = await axios.post('/api/stripe', token);
// 	dispatch({ type: FETCH_USER, payload: res.data });
// };

// export const submitSurveys = (values, history) => async dispatch => {
// 	const res = await axios.post('/api/surveys', values);

// 	// history.push('/surveys');
// 	dispatch({ type: FETCH_USER, payload: res.data });
// };
// export const searchSurveys = query => async dispatch => {
// 	let res;
// 	if (query.query !== '') {
// 		res = await axios.post('/api/search', query);
// 	} else {
// 		res = await axios.get('/api/surveys');
// 	}

// 	dispatch({ type: FETCH_SURVEYS, payload: res.data });
// };

// export const fetchSurveys = () => async dispatch => {
// 	const res = await axios.get('/api/surveys');
// 	dispatch({ type: FETCH_SURVEYS, payload: res.data });
// };
