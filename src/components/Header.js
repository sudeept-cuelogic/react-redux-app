import React from 'react';
import Button from './Button';

const Header = (props) => {
  return (
    <div id='header' style={{ textAlign: 'right' }}>
      <Button
        attrID='logoutButton'
        buttonType='button'
        buttonText='Logout'
        onclickEvent={ props.onLogOutEvent }
      />
    </div>
  );
};

export default Header;
