import { LOGIN, LOGOUT, CHANGE_USERNAME } from '../constants/actionTypes';

const initialState = {
  user: '',
  signedInAt: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.user, signedInAt: action.signedInAt };
    case LOGOUT:
      return { ...state, user: '', signedInAt: null };
    case CHANGE_USERNAME:
      return { ...state, user: action.newName };
    default:
      return state;
  }
};
