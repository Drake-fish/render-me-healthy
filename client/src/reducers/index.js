import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recipieReducer from './recipiesReducer';
import menuReducer from './menuReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
	auth: authReducer,
	recipies: recipieReducer,
	menu: menuReducer,
	form: reduxForm
});
