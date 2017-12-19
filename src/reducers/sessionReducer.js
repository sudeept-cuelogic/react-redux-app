import { LOGIN, LOGOUT } from '../constants/actionTypes';

const initialState = {
    session: {
        user: 'test_user1',
        signedInAt: null
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN :
            return { ...state, session: { user: action.user, signedInAt: action.signedInAt } }
        case LOGOUT :
            return { ...state, session: { user: '', signedInAt: null } }
        default :
            return state
    }
}
