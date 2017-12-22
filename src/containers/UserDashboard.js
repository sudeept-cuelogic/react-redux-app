import React from 'react';
import { connect } from 'react-redux';

import { logOut, changeNameInSession } from '../actions/sessionActions';
import { updateUserList } from '../actions/userActions';
import Header from '../components/Header';
import NavPanel from '../components/NavPanel';
import UserList from '../components/UserList';

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(logOut()),
  onUsernameChanged: (newUsername, newList) => {
    dispatch(changeNameInSession(newUsername));
    dispatch(updateUserList(newList));
  }
});

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editUsername: false,
      username: props.session.user
    };
  }

  getNewUsersList (oldUsername, newUsername) {
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

  handleUsernameChange = (oldUsername, newUsername) => {
    const newUsersList = this.getNewUsersList(oldUsername, newUsername);
    this.props.onUsernameChanged(newUsername, newUsersList);
  }

  handleOnBlur = (event) => {
    let newUsername = event.target.value;
    let oldName = this.state.username;
    debugger
    this.setState((prevState) => ({ editUsername: !prevState.editUsername, username: newUsername }));
    this.handleUsernameChange(oldName, newUsername);
  }

  onUsernameClicked = () => {
    this.setState((prevState) => ({ editUsername: !prevState.editUsername }));
  }

  render() {
    return (
      <div id="userDashboard">
        <Header onLogOutEvent={this.handleLogout} />
        <NavPanel 
          username={this.props.session.user} 
          onUsernameClicked={this.onUsernameClicked} 
          onBlurEvent={this.handleOnBlur.bind(this)}
          editUsername={this.state.editUsername}
        />
        <UserList usersList={this.props.user.list} />
      </div>
    );
  }
}

export default connect(state => state, mapDispatchToProps)(UserDashboard);
