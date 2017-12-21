import { UPDATE_USER_LIST } from '../constants/actionTypes';

export const updateUserList = newList => ({
  type: UPDATE_USER_LIST,
  newList
});
