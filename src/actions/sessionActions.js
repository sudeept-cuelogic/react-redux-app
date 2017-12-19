import { LOGIN, LOGOUT, CHANGE_USERNAME } from '../constants/actionTypes';

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

export const changeNameInSession = (newName) => {
    return {
        type: CHANGE_USERNAME,
        newName: newName
    }
}
