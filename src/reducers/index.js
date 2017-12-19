import { combineReducers } from 'redux';

import profile from './profileReducer';
import session from './sessionReducer';
import user from './userReducer';

const reducer = combineReducers({
    profile,
    session,
    user
})

export default reducer;
