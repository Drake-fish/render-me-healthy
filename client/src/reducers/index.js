import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recipieReducer from './recipiesReducer';
import menuReducer from './menuReducer';

export default combineReducers({
	auth: authReducer,
	recipies: recipieReducer,
	menu: menuReducer
});
