import axios from 'axios';
import {
	FETCH_USER,
	FETCH_RECIPIES,
	CHANGE_DAY,
	FETCH_MENU,
	FETCH_SAVED_RECIPIES
} from './types';

//user actions
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

//menu actions
export const handleRecipe = data => async dispatch => {
	//set the loading state to true
	if (data.day > 6) {
		console.log('Not doing all the menu stuff');
		dispatch(this.saveRecipe(data.recipe));
	} else {
		//update a menu day
		dispatch(this.assignDay(data));
		//save the recipe to the database
		dispatch(this.saveRecipe(data.recipe));
	}

	//change loading to false when loop completes
};

export const createMenu = () => async dispatch => {
	await axios.post('api/menu/create');
};

export const assignDay = data => async dispatch => {
	console.log('Assigning day', data);
	await axios.post('/api/menu/update', data);
};

export const changeDay = day => async dispatch => {
	dispatch({ type: CHANGE_DAY, payload: day });
};

export const fetchMenu = () => async dispatch => {
	const res = await axios.get('/api/menu');
	dispatch({ type: FETCH_MENU, payload: res.data });
};

export const deleteDay = data => async dispatch => {
	await axios.post('/api/menu/update', data);
	dispatch(this.fetchMenu());
};

//recipe actions

export const fetchRecipies = query => async dispatch => {
	const res = await axios.post('/recipies', query);
	dispatch({ type: FETCH_RECIPIES, payload: res.data });
};

export const saveRecipe = recipe => async dispatch => {
	console.log('Saving Recipe Action ', recipe);
	await axios.post('/recipies/save', recipe);
};

export const getSavedRecipies = () => async dispatch => {
	const res = await axios.get('/recipe/all');
	console.log('Response from all saved recipies', res);
	dispatch({ type: FETCH_SAVED_RECIPIES, payload: res.data });
};

//shopping list actions

export const checkIngredient = ingredient => async dispatch => {
	console.log('Checking Ingredient Redux ', ingredient);
	const ingredientExists = await axios.post(
		'/api/shopping-list/check',
		ingredient
	);
	return ingredientExists;
};

export const saveIngredient = ingredient => async dispatch => {
	console.log('Saving the ingredient to the database ', ingredient);
	const savedIngredient = await axios.post(
		'/api/shopping-list/save',
		ingredient
	);
	return savedIngredient;
};

export const updateIngredient = ingredient => async dispatch => {
	console.log('Updating the ingredient in the database ', ingredient);
	const updatedIngredient = await axios.put(
		'/api/shopping-list/update',
		ingredient
	);
	console.log('ingredient updated!! ', updatedIngredient);
	return updatedIngredient;
};
