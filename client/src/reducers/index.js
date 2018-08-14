import { combineReducers } from 'redux';
import authReducer from './authReducer';
import recipieReducer from './recipiesReducer';

export default combineReducers({
    auth: authReducer,
    recipies: recipieReducer
});
