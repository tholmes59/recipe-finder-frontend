import { combineReducers } from 'redux';

import login from './login'
import currentUser from './currentUser';
import recipeSearch from './recipeSearch';
import signup from './signup'
import favorites from './favorites';

const rootReducer = combineReducers({
    login: login,
    currentUser: currentUser,
    recipeSearch: recipeSearch,
    signup: signup,
    favorites: favorites
})

export default rootReducer