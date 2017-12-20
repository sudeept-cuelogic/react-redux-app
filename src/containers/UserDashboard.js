import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import NavPanel from '../components/NavPanel'
import WorkPanel from './WorkPanel';
import { logOut, changeNameInSession } from '../actions/sessionActions';
import { updateUserList } from '../actions/userActions';

const mapDispatchToProps = dispatch => ({
    onLogOut: () => dispatch(logOut()),
    onUsernameChanged: (newUsername, newList) => {
        dispatch(changeNameInSession(newUsername))
        dispatch(updateUserList(newList))
    }

})

class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this._handleLogout.bind(this);
        this.handleUsernameChange = this._handleUsernameChange.bind(this);
    }

    _getNewUsersList = (oldUsername, newUsername) => {
        let newUsersList = [ ...this.props.user.list ];
        let newUser = newUsersList.filter((user, index) => {user['index'] = index; return user.username === oldUsername})[0];
        newUser['username'] = newUsername;
        newUsersList.splice(newUser.index, 1, newUser);
        return newUsersList;
    }

    _handleLogout = () => {
        this.props.onLogOut();
        this.props.history.replace('login');
    }

    _handleUsernameChange = (oldUsername, newUsername) => {
        let newUsersList = this._getNewUsersList(oldUsername, newUsername)
        this.props.onUsernameChanged(newUsername, newUsersList);
    }

    render() {

        return(
            <div id="userDashboard">
                <Header handleLogout={this.handleLogout}/>
                <NavPanel username={this.props.session.user} handleUsernameChange={this.handleUsernameChange} />
                <WorkPanel usersList={this.props.user.list} />
            </div>
        );
    }
}

export default connect(state => state, mapDispatchToProps)(UserDashboard);
