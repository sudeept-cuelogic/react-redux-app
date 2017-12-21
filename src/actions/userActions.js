import { UPDATE_USER_LIST } from '../constants/actionTypes';

const updateUserList = newList => ({
  type: UPDATE_USER_LIST,
  newList
});

export default updateUserList;
