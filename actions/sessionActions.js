import { LOGIN, LOGOUT } from '../constants/actionTypes';

export const logIn = (username) => {
    return dispatch => {
        dispatch({
            type: LOGIN,
            user: username,
            signedInAt: new Date()
        })
    }
}

export const logOut = () => {
    return dispatch => {
        dispatch({
            type: LOGOUT
        })
    }
}
