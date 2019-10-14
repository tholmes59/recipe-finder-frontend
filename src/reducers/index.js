import { combineReducers } from 'redux';

import login from './login'
import currentUser from './currentUser';
import recipeSearch from './recipeSearch';

const rootReducer = combineReducers({
    login: login,
    currentUser: currentUser,
    recipeSearch: recipeSearch
})

export default rootReducer