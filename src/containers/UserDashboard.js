import React from 'react';
import { connect } from 'react-redux';

import { logOut, changeNameInSession } from '../actions/sessionActions';
import { updateUserList } from '../actions/userActions';
import Header from '../components/Header';
import NavPanel from '../components/NavPanel';
import WorkPanel from './WorkPanel';

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(logOut()),
  onUsernameChanged: (newUsername, newList) => {
    dispatch(changeNameInSession(newUsername));
    dispatch(updateUserList(newList));
  }
});

class UserDashboard extends React.Component {
  _getNewUsersList (oldUsername, newUsername) {
    const newUsersList = [...this.props.user.list];
    const newUser = newUsersList.filter((user, index) => { user['index'] = index; return user.username === oldUsername })[0];
    newUser.username = newUsername;
    newUsersList.splice(newUser.index, 1, newUser);
    return newUsersList;
  }

  handleLogout = () => {
    this.props.onLogOut();
    this.props.history.replace('login');
  }

  _handleUsernameChange = (oldUsername, newUsername) => {
    const newUsersList = this._getNewUsersList(oldUsername, newUsername);
    this.props.onUsernameChanged(newUsername, newUsersList);
  }

  render () {
    return (
      <div id="userDashboard">
        <Header onLogOutEvent={this.handleLogout} />
        <NavPanel username={this.props.session.user} handleUsernameChange={this._handleUsernameChange} />
        <WorkPanel usersList={this.props.user.list} />
      </div>
    );
  }
}

export default connect(state => state, mapDispatchToProps)(UserDashboard);
