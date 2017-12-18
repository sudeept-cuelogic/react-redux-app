import { LIST_USERS } from '../constants/actionTypes';

const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LIST_USERS :
            return { ...state, users: action.users }
        default :
            return state
    }
}
