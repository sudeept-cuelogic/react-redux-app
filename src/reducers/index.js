import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-dom'

import profile from './profileReducer';
import session from './sessionReducer';
import user from './userReducer';

const reducer = combineReducers({
    profile,
    session,
    user,
    routing: routerReducer
})

export default reducer;
