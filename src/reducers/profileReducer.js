import { SHOW_PROFILE, HIDE_PROFILE, CHANGE_USERNAME } from '../constants/actionTypes';

const initialState = {
    showProfile: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SHOW_PROFILE :
            return { ...state, showProfile: true }
        case HIDE_PROFILE :
            return { ...state, showProfile: false }
        case CHANGE_USERNAME :
            return { ...state, session: { user: action.newUser } }
        default :
            return state
    }
}
