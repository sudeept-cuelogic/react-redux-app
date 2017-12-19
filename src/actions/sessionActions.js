import { LOGIN, LOGOUT } from '../constants/actionTypes';

export const logIn = (username) => {
    return {
        type: LOGIN,
        user: username,
        signedInAt: new Date()
    }
}

export const logOut = () => {
    return { type: LOGOUT }
}
