import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const NavPanel = (props) => {
  return (
    <div id='navigationPanel' style={{ float: 'left', width: '20%', backgroundColor: 'antiquewhite' }}>
      <Profile
        username={ props.username }
        onUsernameClicked={ props.onUsernameClicked }
        onBlurEvent={ props.onBlurEvent }
        editUsername={ props.editUsername }
      />
      <hr />
      <div>
        <div>
          <Link to='/my_profile'> My Profile </Link>
        </div>
        <div>
          <Link to='/users'> Users </Link>
        </div>
      </div>
    </div>
  );
}

export default NavPanel;
