import { CHANGE_USERNAME } from '../constants/actionTypes';

export const changeUsername = (newUsername, newUsersList) => {
    return dispatch => {
        dispatch({
            type: CHANGE_USERNAME,
            newUser: newUsername,
            newList: newUsersList
        })
    }
}
