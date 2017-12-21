import { LOGIN, LOGOUT, CHANGE_USERNAME } from '../constants/actionTypes';

export const logIn = username => ({
  type: LOGIN,
  user: username,
  signedInAt: new Date()
});

export const logOut = () => ({
  type: LOGOUT
});

export const changeNameInSession = newName => ({
  type: CHANGE_USERNAME,
  newName
});
