import React from 'react';
import Profile from './Profile';
import { Link } from 'react-router-dom';

export default class NavPanel extends React.Component {
    render() {
        return(
            <div id="navigationPanel" style={{ float: 'left', width: '20%', backgroundColor: 'antiquewhite' }}>
                <Profile username={this.props.username} usernameChange={this.props.handleUsernameChange} />
                <hr />
                <div>
                	<div> My Profile </div>
                	<div>
                        <Link to='/users'> Users </Link>
                    </div>
                </div>
            </div>
        );
    }
}
