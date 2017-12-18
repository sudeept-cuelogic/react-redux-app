import React from 'react';
import Button from './Button';

export default class Header extends React.Component {
    render() {
        return(
            <div id="header" style={{ textAlign: 'right' }}>
                <div>{this.props.username}</div>
                <Button
                    attrID='logoutButton'
                    buttonType='button'
                    buttonText='Logout'
                />
            </div>
        );
    }
}
