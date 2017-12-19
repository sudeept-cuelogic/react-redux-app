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
        default :
            return state
    }
}
