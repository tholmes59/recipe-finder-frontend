import { combineReducers } from 'redux';

import login from './login'
import currentUser from './currentUser';

const rootReducer = combineReducers({
    login: login,
    currentUser: currentUser
})

export default rootReducer