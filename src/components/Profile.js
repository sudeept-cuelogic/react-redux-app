import React from 'react';

import InputField from './InputField';

const getUserNameField = ({onBlurEvent, onUsernameClicked, username, editUsername}) => {
  if (editUsername) {
    return (
      <InputField
        inputType='text'
        placeholder='username'
        id='changeUsername'
        onBlurEvent={onBlurEvent}
        valueText={username}
      />
    );
  }
  return (
    <div onClick={onUsernameClicked}>{username}</div>
  );
};

const Profile = (props) => {
  return (
    <div>
      { getUserNameField(props) }
    </div>
  );
};

export default Profile;
