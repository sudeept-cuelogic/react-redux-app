import React from 'react';
import Button from './Button';

export default class Header extends React.Component {
    render() {
        return(
            <div id="header" style={{ textAlign: 'right' }}>
                <Button
                    attrID='logoutButton'
                    buttonType='button'
                    buttonText='Logout'
                    onclickEvent={this.props.handleLogout}
                />
            </div>
        );
    }
}
