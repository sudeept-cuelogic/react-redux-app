import { combineReducers } from 'redux';

import profileReducer from './profileReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
    profileReducer,
    sessionReducer,
    userReducer
})

export default reducer;
