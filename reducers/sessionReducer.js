import { LOGIN, LOGOUT } from '../constants/actionTypes';

const initialState = {
    session: {
        user: '',
        signedInAt: null
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN :
            return { ...state, session: {user: action.user, signedInAt: action.signedInAt} }
        case LOGOUT :
            return { ...state, user: '', signedInAt: null }
        default :
            return state
    }
}
