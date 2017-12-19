import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NavPanel from '../components/NavPanel'
import WorkPanel from './WorkPanel';
import { logOut } from '../actions/sessionActions';
import { changeUsername } from '../actions/profileActions';

class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this._handleLogout.bind(this);
        this.handleUsernameChange = this._handleUsernameChange.bind(this);
    }

    _getNewUsersList = (oldUsername, newUsername) => {
        let newUsersList = [ ...this.props.usersList ];
        debugger
        let newUser = newUsersList.filter((user, index) => {user['index'] = index; return user.username === oldUsername})[0];
        newUser['username'] = newUsername;
        newUsersList.splice(newUser.index, 1, newUser);
        return newUsersList;
    }

    _handleLogout = () => {
        this.props.dispatch(logOut());
    }

    _handleUsernameChange = (oldUsername, newUsername) => {
        this.props.dispatch(changeUsername(newUsername, this._getNewUsersList(oldUsername, newUsername)));
    }

    render() {
        return(
            <div id="userDashboard">
                <Header handleLogout={this.handleLogout}/>
                <NavPanel username={this.props.session.user} handleUsernameChange={this.handleUsernameChange} />
                <WorkPanel usersList={this.props.usersList} />
            </div>
        );
    }
}

export default connect(state => state)(UserDashboard);
