import { combineReducers } from 'redux';

import login from './login'
import currentUser from './currentUser';
import recipeSearch from './recipeSearch';
import signup from './signup'

const rootReducer = combineReducers({
    login: login,
    currentUser: currentUser,
    recipeSearch: recipeSearch,
    signup: signup
})

export default rootReducer